## Notificações IPN para pagamentos presenciais
 
Se você estiver integrando pagamentos presenciais, recomendamos conferir os passos abaixo pra configurar as notificações por IPN.
 
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