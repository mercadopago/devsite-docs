# Personalização


Na preferência de pagamentos, é possível enviar as informações do item a ser pago, bem como do comprador, além de definir os meios de pagamento que não deseja aceitar, a URL de retorno ao seu site após o pagamento, os métodos de envio, etc.

### Defina os tipos e formas de pagamento

Por padrão, oferecemos todos os meios de pagamento disponíveis para o país em que estiver realizando a integração. Caso seu modelo de negócios não aceite qualquer um destes [tipos de pagamento](/guides/localization/payment-methods.pt.md), ou você não deseja aceitar algum [meio de pagamento específico](https://api.mercadopago.com/v1/payment_methods/search?site_id=MLB&marketplace=NONE), você poderá excluí-lo quando gerar a preferência de pagamentos.

Além disso, você pode definir quais meios de pagamento ou o número de parcelas que deseja exibir por padrão, bem como o número máximo de parcelas a oferecer.

[[[
```php

<?php

$preference = new MercadoPago\Preference();

// ...

$preference->payment_methods = array(
  "excluded_payment_methods" => array(
    array("id" => "master")
  ),
  "excluded_payment_types" => array(
    array("id" => "ticket")
  ),
  "installments" => 12
);

// ...

?>

```
```java
  Preference preference = new Preference();
  // ...
  PaymentMethods paymentMethods = new PaymentMethods();
  paymentMethods.setExcludedPaymentMethods("master", "amex");
  paymentMethods.setExcludedPaymentTypes("ticket");
  paymentMethods.setInstallments(12);

  preference.setPaymentMethods(paymentMethods);
  // ...
```
```node
  var preference = {}
  preference = {
    // ...
    "payment_methods": {
        "excluded_payment_methods": [
            {
                "id": "master"
            }
        ],
        "excluded_payment_types": [
            {
                "id": "ticket"
            }
        ],
        "installments": 12
    }
    // ...
  }
```
```ruby
preference = MercadoPago::Preference.new
# ...
preference.payment_methods = {
  excluded_payment_methods: [id: "master"],
  excluded_payment_types: [id: "ticket"],
  installments: 12
}
# ...
```
]]]

### Indique as URLs de Retorno

Ao finalizar o processo de pagamento, é muito importante informar ao comprador quais são os próximos passos e assim transmitir segurança sobre o resultado da operação. Para isso, utilizamos as `back_urls`. O atributo `auto_return` em ``approved` automaticamente redirecionará ao comprador a success url quando o resultado do pagamento for aprovado.


[[[
```php

<?php

$preference = new MercadoPago\Preference();
//...
$preference->back_urls = array(
	"success" => "https://www.tu-sitio/success",
	"failure" => "http://www.tu-sitio/failure",
	"pending" => "http://www.tu-sitio/pending"
);
$preference->auto_return = "approved";
// ...

?>
```
```java
Preference preference = new Preference();
// ...
BackUrls backUrls = new BackUrls(
                    "https://www.tu-sitio/success",
                    "http://www.tu-sitio/pending",
                    "http://www.tu-sitio/failure");

preference.setBackUrls(backUrls);
// ...
```
```node
var preference = {}

preference = {
  // ...
  "back_urls": {
		"success": "https://www.tu-sitio/success",
		"failure": "http://www.tu-sitio/failure",
		"pending": "http://www.tu-sitio/pending"
	},
	"auto_return": "approved",
  // ...
}
```
```ruby
preference = MercadoPago::Preference.new
# ...
preference.back_urls = {
  success: "https://www.tu-sitio/success",
  failure: "http://www.tu-sitio/failure",
  pending: "http://www.tu-sitio/pendings"
}
preference.auto_return = "approved"
# ...
```
]]]

### Sincronize com o seu sistema

Para sincronizar com seus sistemas de backend, na preferência de pagamentos, você pode nos enviar o campo `external_reference`, que poderá consultar ao criar o pagamento.

```json
"external_reference": "Order_1234",
```

Para saber o status de seus pagamentos, você pode fazer uma busca utilizando essa referência:

[[[
```php
<?php

  $filters = array(
    "external_reference" => "EXTERNAL"
  );

  $payment = MercadoPago\Payment::search($filters);

?>
```
```java

  Map<String, String> filters = new HashMap<>();
  filters.put("external_reference", "EXTERNAL");

  Payment payment = Payment.search(filters);

```
```node
var mercadopago = require('mercadopago');

var filters = {
  external_reference: "EXTERNAL"
};

mercadopago.searchPayment({
  qs: filters
}).then(function (data) {
  // Do Stuff...
}).catch(function (error) {
  // Do Stuff...
});

```
```ruby
filters = {
  external_reference: "EXTERNAL"
}

payment = MercadoPago::Payment.search(filters)
```
]]]



### Invalide links de preferência

Caso não queira permitir que alguém acesse a preferência de pagamentos para efetuar um pagamento após uma determinada data, utilize os seguintes atributos:

```json
	"expires": true,
	"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
	"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```


Para saber mais sobre os atributos da preferência, [consulte a documentação da API](/reference/preferences/resource/)
