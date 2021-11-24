# Notificações IPN
 
Para configurar as notificações IPN que você quiser receber através de um `HTTP POST` toda vez que houver um evento relacionado a suas transações, siga as informações abaixo.

## Configuração pelo painel
 
1. Clique na seta ao lado de sua conta para acessar a tela de [Notificações IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn).
2. Em seguida, configure o **URL** de **produção** no qual serão recebidas as notificações.
3. Caso seja necessário indentificar múltiplas contas, no final da URL indicada você poderá indicar o parâmetro `?cliente=(nomedovendedor) endpoint` para indentificar os vendedores.
4. Selecione os **eventos** dos quais você receberá notificações em formato `json` utilizando `HTTP POST` para a URL especificada anteriormente. Notificamos eventos relacionados aos seus pedidos (`merchant_orders`), estornos recebidos (`chargebacks`) ou pagamentos recebidos (`payment`).
 
> NOTE
>
> Importante
>
> Um evento é qualquer tipo de atualização no objeto relatado, incluindo alterações de status ou atributo.

![ipn](/images/notifications/ipn_pt.png)
 
5. Implemente o receptor de notificações usando o seguinte código como exemplo:
 
```php
<?php
   MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 
   $merchant_order = null;
 
   switch($_GET["topic"]) {
       case "payment":
           $payment = MercadoPago\Payment::find_by_id($_GET["id"]);
           // Get the payment and the corresponding merchant_order reported by the IPN.
           $merchant_order = MercadoPago\MerchantOrder::find_by_id($payment->order->id);
           break;
       case "merchant_order":
           $merchant_order = MercadoPago\MerchantOrder::find_by_id($_GET["id"]);
           break;
   }
 
   $paid_amount = 0;
   foreach ($merchant_order->payments as $payment) {  
       if ($payment['status'] == 'approved'){
           $paid_amount += $payment['transaction_amount'];
       }
   }
  
   // If the payment's transaction amount is equal (or bigger) than the merchant_order's amount you can release your items
   if($paid_amount >= $merchant_order->total_amount){
       if (count($merchant_order->shipments)>0) { // The merchant_order has shipments
           if($merchant_order->shipments[0]->status == "ready_to_ship") {
               print_r("Totally paid. Print the label and release your item.");
           }
       } else { // The merchant_order don't has any shipments
           print_r("Totally paid. Release your item.");
       }
   } else {
       print_r("Not paid yet. Do not release your item.");
   }
  
?>
```
 
4. Feitas as configurações, o Mercado Pago informará essa URL (quando um recurso for criado, quando houver atualização do status dos pagamentos ou dos pedidos) com dois parâmetros, sendo:
 
| Campo | Descrição |
| --- | --- |
| `topic` | Identifica do que se trata o recurso, podendo ser `payment`, `chargebacks` ou `merchant_order `. |
| `id` | É um identificador único do recurso notificado. |
 
**Exemplo**: Se configurar a URL: `https://www.yoursite.com/notifications`, você receberá as notificações de pagamento desta maneira: `https://www.yoursite.com/notifications?topic=payment&id=123456789`.
 
## Notificações para pagamentos presenciais
 
Se você estiver integrando pagamentos presenciais, recomendamos conferir os passos abaixo.
 
> WARNING
>
> Importante
>
> O Mercado Pago requer a integração de pagamentos presenciais que tiverem aplicada a notificação (IPN) como método principal para a homologação.
 
1. Utilize notificações IPN de topic `merchant_order`. Para isso, lembre das seguintes regras:

* O campo `status` da `merchant_order` permanecerá em **opened** quando ainda não tiver pagamentos associados ou tiver pagamentos recusados/aprovados por um valor menor ao total da ordem.
* O campo `status` da `merchant_order` será **closed** quando a soma dos pagamentos aprovados for igual ou superior ao total da ordem.

2. Dentro da ordem, no objeto payments, você vai encontrar todos os pagamentos dela. É importante obter a ID dos pagamentos com status **approved** para [poder realizar restituições](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds). Quando o `status` da `merchant_order` for **closed**, certifique-se de que a soma dos pagamentos com `status` **approved** seja igual ou maior ao total da ordem.
3. É necessário aplicar como método de contingência a **pesquisa da ordem** utilizando o seu `external_reference` como critério de pesquisa. A **pesquisa** pode ser realizada por `external_reference` de duas formas:
 
| Formas | Descrição |
| --- | --- |
| **Manual** | O ponto de venda deve incluir um botão para realizar a pesquisa. |
| **Automática** | Após um tempo razoável sem ter recebido qualquer notificação, é iniciada uma pesquisa da ordem a cada um intervalo de, por exemplo, 5 segundos. |
 
> WARNING
>
> Importante
>
> A pesquisa de ordem por `external_reference` somente deverá ser utilizada como contingência caso não se receba notificações.
 
```curl
curl -X GET \
   -H 'Authorization: Bearer $ACCESS_TOKEN' \
   https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE
```

4. Por cada escaneamento do QR é gerada uma `merchant_order` diferente. Lembre que caso o cliente faça mais de um escaneamento, uma ordem ficará em **open** por tempo indefinido e, para encerrar a transação, a `merchant_order` deve ter `status` = **closed**. Caso a pesquisa seja realizada **após o escaneamento do QR**, serão obtidos todos os dados referidos à ordem:
 
```json
{
 "id": 1126664483,
 "status": "closed",
 "payments": [
    {
     "id": 4996721469,
     "transaction_amount": 4,
     "status": "rejected",
     [...],
   },
    {
     "id": 4996721476,
     "transaction_amount": 4,
     "status": "approved",
     [...], },
```
 
Caso contrário e o QR no qual a ordem foi publicada ainda **não tenha sido escaneado**, a resposta será:
 
```json
{
  "elements": null,
  "next_offset": 0,
  "total": 0
}
```
 
## Ações necessárias após receber uma notificação

Caso a aplicação não esteja disponível ou demore para responder, o Mercado Pago irá fazer tentativas de notificação nos seguintes intervalos:

| Evento | Prazo após o primeiro envio |
| --- | --- |
| Primeira tentativa | 5 minutos |
| Segunda tentativa | 45 minutos |
| Terceira tentativa | 6 horas |
| Quarta tentativa | 2 dias |
| Quinta tentativa | 4 dias |

Quando você recebe uma notificação na sua plataforma, o Mercado Pago aguarda uma resposta para validar que você a recebeu corretamente. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CREATED)` e, caso contrário, será entendido que você não o recebeu corretamente e você será notificado novamente.

É recomendável que você responda a notificação antes de executar a lógica de negócios ou antes de acessar recursos externos, a fim de evitar exceder os prazos de resposta estimados. Essa comunicação é exclusiva entre os servidores do Mercado Pago e, portanto, não haverá usuário físico vendo nenhum tipo de resultado.
 
> WARNING
>
> Importante
>
> Se os prazos de resposta forem excedidos, é possível receber notificações duplicadas de um evento.

Depois de dar um retorno à notificação, você obterá as informações completas do recurso notificado acessando o terminal correspondente da [API](https://api.mercadopago.com/):

| Tipo | URL | Documentação |
| --- | --- | --- |
| payment | `https://api.mercadopago.com/v1/payments/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get) |
| chargebacks | `https://api.mercadopago.com/v1/chargebacks/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_chargebacks_id/get) |
| merchant_orders | `https://api.mercadopago.com/merchant\_orders/[ID]` | [ver documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/merchant_orders/_merchant_orders_id/get) |

Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma como, por exemplo, atualizar um pagamento aprovado o um pedido fechado