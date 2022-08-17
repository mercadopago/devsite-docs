# Redirecionamento 

Ao final do processo de pagamento, é possível redirecionar o comprador novamente para o seu site através do atributo `back_urls`. Este atributo permite definir as URLs para onde o comprador deverá ser redirecionado segundo o status do pagamento.

> NOTE
>
> Importante
>
> Caso queira que o redirecionamento para os pagamentos aprovados seja automático, sem a renderização de um botão de retorno, é preciso adicionar também o atributo `auto_return` com valor `approved`. Além disso, o atributo `auto_return` só funciona para o modo redirect e mobile do Checkout Pro. O mesmo não funciona no modo modal, já que nesse último o comprador segue no site durante todo o processo de pagamento.

Nas tabelas a seguir você encontra o detalhe de cada um dos possíveis parâmetros de requisição e de resposta.

| Atributo |	Descrição |
| ------------ 	|	-------- | 
| `auto_return` | Os compradores são redirecionados automaticamente para o  _site_ quando o pagamento é aprovado. O valor padrão é `approved`. |
| `back_urls` | URL de retorno ao site. Possíveis cenários são:<br/><br/>`success`: URL de retorno perante pagamento aprovado.<br/><br/>`pending`: URL de retorno perante pagamento pendente.<br/><br/>`failure`: URL de retorno perante pagamento rejeitado.

Através das `back_urls`, serão retornados os seguintes parâmetros:

| Parâmetro |	Descrição |
| --- | --- | 
| `payment_id` | ID (identificador) do pagamento do Mercado Pago. |
| `status` | Estado do pagamento. Ex.: `approved` para um pagamento aprovado ou `pending` para um pagamento pendente. |
| `external_reference` | Valor enviado no momento da criação da preferência de pagamento. |
| `merchant_order_id` | ID (identificador) da ordem de pagamento gerada no Mercado Pago. |


Para definir as `back_urls`, envie um **POST** com o atributo `back_urls` informando as URLs para onde o comprador deverá ser direcionado quando finalizar o pagamento ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) ou, se preferir, utilize um dos códigos disponíveis abaixo.

[[[
```php
<?php
$preference = new MercadoPago\Preference();
//...
$preference->back_urls = array(
    "success" => "https://www.seu-site/success",
    "failure" => "http://www.seu-site/failure",
    "pending" => "http://www.seu-site/pending"
);
$preference->auto_return = "approved";
// ...
?>
```
```node
var preference = {}
preference = {
  // ...
  "back_urls": {
        "success": "https://www.seu-site/success",
        "failure": "http://www.seu-site/failure",
        "pending": "http://www.seu-site/pending"
    },
    "auto_return": "approved",
  // ...
}
```
```java
PreferenceBackUrlsRequest backUrls =
// ...
PreferenceBackUrlsRequest.builder()
       .success("https://www.seu-site/success")
       .pending("https://www.seu-site/pending")
       .failure("https://www.seu-site/failure")
       .build();

PreferenceRequest request = PreferenceRequest.builder().backUrls(backUrls).build();
// ...
```
```ruby
# ...
preference_data = {
  # ...
  back_urls = {
    success: 'https://www.tu-sitio/success',
    failure: 'https://www.tu-sitio/failure',
    pending: 'https://www.tu-sitio/pendings'
  },
  auto_return: 'approved'
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    BackUrls = new PreferenceBackUrlsRequest
    {
        Success = "https://www.tu-sitio/success",
        Failure = "http://www.tu-sitio/failure",
        Pending = "http://www.tu-sitio/pendings",
    },
    AutoReturn = "approved",
};
```
```python
preference_data = {
    "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "https://www.tu-sitio/failure",
        "pending": "https://www.tu-sitio/pendings"
    },
    "auto_return": "approved"
}
```
]]]
