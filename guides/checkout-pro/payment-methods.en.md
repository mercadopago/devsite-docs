# Payment methods

By default, all payment methods are offered in Checkout Pro. Through the payment preference, you can configure a default payment method to be rendered, exclude any unwanted ones, or even choose a maximum number of installments to be offered.

In the table below, we detail the preference attributes and the description of each one of them so that you can define what information you want to change and/or insert.


| Preference attribute | Description |
| --- | --- |
| `payment_methods` | Class that describes Checkout Pro's payment method attributes and methods. |
| `excluded_payment_types` | Method that excludes unwanted payment methods, such as credit card, among others. |
| `excluded_payment_methods` | Method that excludes specific brands of credit and debit cards, such as Visa, Mastercard, American Express, among others. |
| `installments` | Method that defines the maximum number of installments to be offered. |
| `purpose` | By indicating the value `wallet_purchase` in this method, Checkout Pro will only accept payments from users registered in Mercado Pago, with card and account balance. |


With this information, use one of the SDKs available below to configure the payment methods you want to offer.


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
"installations": 12
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
"installations": 12
}
#...
```
]]]
