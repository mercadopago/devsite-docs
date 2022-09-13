# Medios de pago

----[mla, mco, mlb, mlu, mlc, mpe]----

Por defecto, todos los medios de pago se ofrecen en Checkout Pro. A través de la preferencia de pago, puede configurar un medio de pago predeterminado, excluir los no deseados o incluso elegir un número máximo de cuotas para ofrecer.
------------

----[mlm]----

Por defecto, todos los métodos de pago se ofrecen en Checkout Pro. A través de la preferencia de pago, puedes configurar un método de pago por defecto, eliminar los no deseados, o elegir un número máximo de mensualidades que se ofrecerán.
------------


En la siguiente tabla, detallamos los atributos de preferencia y la descripción de cada uno de ellos para que puedas definir qué información quieres cambiar y/o agregar.


----[mla, mco, mlb, mlu, mlc, mpe]----
| Atributo | Descripción |
| --- | --- |
| `payment_methods` | Clase que describe los métodos y atributos de medios de pago de Checkout Pro. |
| `excluded_payment_types` | Método que excluye tipos de medios de pago no deseados, como efectivo, tarjetas de crédito, o débito. |
| `excluded_payment_methods` | Método que excluye marcas de tarjetas de crédito o débito, como Visa, Mastercard o American Express, entre otras. |
| `installments` | Método que define la cantidad de cuotas máximas a ofrecer. |
| `purpose` | Al indicar el valor "wallet_purchase" en este método, Checkout Pro solo aceptará pagos de usuarios registrados en Mercado Pago, con tarjeta y saldo de cuenta. |
------------

----[mlm]----
| Atributo | Descripción |
| --- | --- |
| `payment_methods` | Clase que describe los métodos y atributos de medios de pago de Checkout Pro. |
| `excluded_payment_types` | Método que excluye tipos de medios de pago no deseados, como efectivo, tarjetas de crédito, o débito. |
| `excluded_payment_methods` | Método que excluye marcas de tarjetas de crédito o débito, como Visa, Mastercard o American Express, entre otras. |
| `installments` | Método que define la cantidad de mensualidades máximas a ofrecer. |
| `purpose` | Al indicar el valor "wallet_purchase" en este método, Checkout Pro solo aceptará pagos de usuarios registrados en Mercado Pago, con tarjeta y saldo de cuenta. |
------------


Con esta información en la mano, utilice uno de los códigos disponibles a continuación para configurar los métodos de pago que desea ofrecer.


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
```node
var preference = {}
preference = {
//...
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
//...
}
```
```java
PreferenceClient client = new PreferenceClient();
//...
List<PreferencePaymentMethodRequest> excludedPaymentMethods = new ArrayList<>();
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("master").build());
excludedPaymentMethods.add(PreferencePaymentMethodRequest.builder().id("amex").build());

List<PreferencePaymentTypeRequest> excludedPaymentTypes = new ArrayList<>();
excludedPaymentTypes.add(PreferencePaymentTypeRequest.builder().id("ticket").build());

PreferencePaymentMethodsRequest paymentMethods =
   PreferencePaymentMethodsRequest.builder()
       .excludedPaymentMethods(excludedPaymentMethods)
       .excludedPaymentTypes(excludedPaymentTypes)
       .installments(12)
       .build();

PreferenceRequest request = PreferenceRequest.builder().paymentMethods(paymentMethods).build();

client.create(request);
//...
```
```ruby
#...
preference_data = {
  # ...
  payment_methods: {
    excluded_payment_methods: [
      { id: 'master' }
    ],
    excluded_payment_types: [
      { id: 'ticket' }
    ],
    installments: 12
  }
  # ...
}
#...
```
```csharp
var paymentMethods = new PreferencePaymentMethodsRequest
{
    ExcludedPaymentMethods = new List<PreferencePaymentMethodRequest>
    {
        new PreferencePaymentMethodRequest
        {
            Id = "master",
        },
    },
    ExcludedPaymentTypes = new List<PreferencePaymentTypeRequest>
    {
        new PreferencePaymentTypeRequest
        {
            Id = "ticket",
        },
    },
    Installments = 12,
};

var request = new PreferenceRequest
{
    // ...
    PaymentMethods = paymentMethods,
};
```
```python
#...
preference_data = {
    "excluded_payment_methods": [
        { "id": "master" }
    ],
    "excluded_payment_types": [
        { "id": "ticket" }
    ],
    "installments": 12
}
#...
```
]]]

