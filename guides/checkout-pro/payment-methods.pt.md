# Meios de pagamento

Por padrão, todos os meios de pagamento são oferecidos no Checkout Pro. Por meio da preferência de pagamento, você pode configurar um meio de pagamento padrão para ser renderizado, excluir algum indesejado, ou ainda escolher um número máximo de parcelas a serem ofertadas.

Na tabela abaixo detalhamos os atributos de preferência e a descrição de cada um deles para que você possa definir qual informação deseja alterar e/ou inserir.


| Atributo de preferência | Descrição |
| --- | --- |
| `payment_methods` | Classe que descreve os atributos e métodos de meios de pagamento do Checkout Pro. |
| `excluded_payment_types` | Método que exclui meios de pagamento indesejados, como cartão de crédito, ticket (boleto ou pagamento em lotérica), entre outros. |
| `excluded_payment_methods` | Método que exclui bandeiras específicas de cartões de crédito e débito, como Visa, Mastercard, American Express, entre outros. |
| `installments` | Método que define o número máximo de parcelas a serem ofertadas. |
| `purpose` | Ao indicar o valor "wallet_purchase" neste método, o Checkout Pro apenas aceitará pagamentos de usuários cadastrados no Mercado Pago, com cartão e saldo em conta. |


Com essas informações em mãos, envie os atributos necessários ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição ou, se preferir utilize um dos códigos disponíveis abaixo.


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