# Notificações IPN para pagamentos presenciais

Se você estiver integrando pagamentos presenciais com QR code, abaixo apresentaremos informações sobre as notificações por IPN nesse tipo de pagamento para cada status (opened e closed). Além disso, indicaremos como consultar a ordem com o external reference e o que será necessário realizar caso o cliente escaneie o QR code duas vezes (deixando uma ordem sempre em aberto).
 
> WARNING
>
> Importante
>
> O Mercado Pago orienta que as integrações utilizem esse método de notificação IPN como método principal para receber as notificações de pagamento.
 
## Configuração

A integração de pagamento com QR code utiliza o objeto `merchant_order`, que é a identificação do pedido a partir de cada leitura realizada ao QR. 

Nas notificações IPN em pagamentos presenciais, o campo `status` da `merchant_order` permanecerá com status **opened** até que sejam identificados pagamentos aprovados e o valor de pagamento seja igual ou superior ao total da ordem.

Dentro da ordem, no objeto de payments, você encontrará todos os pagamentos realizados, seja ele aprovado ou rejeitado. É importante obter o ID dos pagamentos com status **approved** para poder realizar estornos/devoluções.

Por cada escaneamento do QR é gerada uma `merchant_order` diferente. Lembre que caso o cliente faça mais de um escaneamento, uma ordem ficará em **opened** por tempo indefinido e, para encerrar a transação, a `merchant_order` deve ter `status` = **closed**.
 
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
| **Automática** | Após 5 minutos sem se ter recebido qualquer notificação, é iniciada uma pesquisa da ordem a cada um intervalo de, por exemplo, 5 segundos. |
 
```curl
curl -X GET \
   -H 'Authorization: Bearer $ACCESS_TOKEN' \
   https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE 
```