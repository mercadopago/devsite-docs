# Notificações IPN para pagamentos presenciais

Se você estiver integrando pagamentos presenciais com QR code, abaixo apresentaremos informações sobre as notificações por IPN nesse tipo de pagamento para cada status (opened e closed). Além disso, indicaremos como consultar a ordem com o external reference e o que será necessário realizar caso o cliente scaneie o QR code duas vezes (deixando uma ordem sempre em aberto).
 
> WARNING
>
> Importante
>
> O Mercado Pago requer a integração de pagamentos presenciais que tiverem aplicada a notificação (IPN) como método principal para a homologação.
 
## Configuração

A integração de pagamento com QR code utiliza o objeto `merchant_order`, que é basicamente um pedido com 1 ou mais itens. Portanto, para notificações IPN em pagamentos presenciais lembre das seguintes regras:

* O campo `status` da `merchant_order` permanecerá em **opened** quando ainda não tiver pagamentos associados ou tiver pagamentos recusados/aprovados por um valor menor ao total da ordem.
* O campo `status` da `merchant_order` será **closed** quando a soma dos pagamentos aprovados for igual ou superior ao total da ordem.

Dentro da ordem, no objeto payments, você vai encontrar todos os pagamentos dela. É importante obter a ID dos pagamentos com status **approved** para [poder realizar restituições](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds). Quando o `status` da `merchant_order` for **closed**, certifique-se de que a soma dos pagamentos com `status` **approved** seja igual ou maior ao total da ordem.

Por cada escaneamento do QR é gerada uma `merchant_order` diferente. Lembre que caso o cliente faça mais de um escaneamento, uma ordem ficará em **open** por tempo indefinido e, para encerrar a transação, a `merchant_order` deve ter `status` = **closed**.
 
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
 
Caso o QR no qual a ordem foi publicada ainda **não tenha sido escaneado**, a resposta será:
 
```json
{
  "elements": null,
  "next_offset": 0,
  "total": 0
}
```

Se as notificações não forem recebidas, será necessário aplicar como método de contingência a **pesquisa da ordem** utilizando o seu `external_reference` como critério de pesquisa. A **pesquisa** pode ser realizada por `external_reference` de duas formas:
 
| Formas | Descrição |
| --- | --- |
| **Manual** | O ponto de venda deve incluir um botão para realizar a pesquisa. |
| **Automática** | Após um tempo razoável sem ter recebido qualquer notificação, é iniciada uma pesquisa da ordem a cada um intervalo de, por exemplo, 5 segundos. |
 
```curl
curl -X GET \
   -H 'Authorization: Bearer $ACCESS_TOKEN' \
   https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE 
```