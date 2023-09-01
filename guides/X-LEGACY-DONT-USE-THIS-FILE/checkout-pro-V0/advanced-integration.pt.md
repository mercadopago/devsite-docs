# Configurações adicionais

O Checkout Pro dispõe de funcionalidades extras que permitem otimizar sua integração e melhorar a gestão dos pagamentos de suas vendas.

## Receba notificações de pagamentos

As notificações IPN (_Instant Payment Notification_) são notificações automáticas sobre a criação de novos pagamentos e atualizações de status, informando se as transações foram aprovadas, recusadas ou estão pendentes.

Os avisos automáticos permitem que você administre seu estoque e mantenha seu sistema sincronizado com os fluxos de pagamento do seu negócio. Aprenda como receber as notificações IPN [aqui](/developers/pt/docs/checkout-pro/additional-content/your-integrations/notifications/ipn).

## Insira informações adicionais à preferência

Melhore a aprovação dos pagamentos e a experiência de compra no Checkout Pro adicionando informações às suas preferências que detalhem o item comprado e o usuário comprador.

Em Preferências, você pode inserir as seguintes informações adicionais:

### Dados pessoais do comprador

[[[
```php
<?php
  // ...
  $payer = new MercadoPago\Payer();
  $payer->name = "Joao";
  $payer->surname = "Silva";
  $payer->email = "user@email.com";
  $payer->date_created = "2018-06-02T12:58:41.425-04:00";
  $payer->phone = array(
    "area_code" => "11",
    "number" => "4444-4444"
  );
    ----[mla, mlb, mlu, mco, mlc, mpe]----
  $payer->identification = array(
    "type" => "CPF",
    "number" => "19119119100"
  );
    ------------
  $payer->address = array(
    "street_name" => "Street",
    "street_number" => 123,
    "zip_code" => "06233200"
  );
  // ...
?>
```
```node
// ...
var payer = {
  name: "Joao",
  surname: "Silva",
  email: "user@email.com",
  date_created: "2015-06-02T12:58:41.425-04:00",
  phone: {
    area_code: "11",
    number: "4444-4444"
  },
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: {
    type: "CPF",
    number: "19119119100"
  },
  ------------
  address: {
    street_name: "Street",
    street_number: "123",
    zip_code: "06233200"
  }
}
// ...
```
```java
// ...
PreferencePayerRequest payer =
   PreferencePayerRequest.builder()
       .name("Joao")
       .surname("Silva")
       .email("user@email.com")
       .dateCreated(OffsetDateTime.now())
       .phone(PhoneRequest.builder().areaCode("11").number("4444-4444").build())
       .identification(
           IdentificationRequest.builder().type("CPF").number("19119119100").build())
       .address(
           AddressRequest.builder()
               .streetName("Street")
               .streetNumber("123")
               .zipCode("06233200")
               .build())
       .build();
// ...
```
```ruby
# ...
payer_data = {
  name: 'Charles',
  surname: 'Luevano',
  email: 'charles@hotmail.com',
  date_created: '2018-06-02T12:58:41.425-04:00',
  phone: {
    area_code: '',
    number: '949 128 866'
  },
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: {
    type: 'DNI',
    number: '12345678'
  },
  ------------
  shipments: {
    receiver_address: {
      street_name: 'Cuesta Miguel Armendáriz',
      street_number: '1004',
      zip_code: '11020'
    }
  }
}
# ...
```
```csharp
using MercadoPago.Client.Common;
using MercadoPago.Client.Preference;
// ...
var payer = new PreferencePayerRequest
{
    Name = "Charles",
    Surname = "Luevano",
    Email = "charles@hotmail.com",
    Phone = new PhoneRequest
    {
        AreaCode = "",
        Number = "949 128 866",
    },
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    Identification = new IdentificationRequest
    {
        Type = "DNI",
        Number = "12345678",
    },
    ------------
    Address = new AddressRequest
    {
        StreetName = "Cuesta Miguel Armendáriz",
        StreetNumber = "1004",
        ZipCode = "11020",
    },
};
// ...
```
```python
# ...

payer_data = {
    "name": "Joao",
    "surname": "Silva",
    "email": "user@email.com",
    "phone": {
        "area_code": "11",
        "number": "4444-4444"
    },
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    "identification": {
        "type": "CPF",
        "number": "19119119100"
    },
    ------------
    "shipments": {
        "receiver_address": {
            "street_name": "Street",
            "street_number": "123",
            "zip_code": "06233200"
        }
    }
}
# ...
```
]]]

### Dados gerais do item

[[[
```php
<?php
  $item = new MercadoPago\Item();
  $item->id = "1234";
  $item->title = "Heavy Duty Plastic Table";
  $item->description = "Table is made of heavy duty white plastic and is 96 inches wide and 29 inches tall";
  $item->category_id = "home";
  $item->quantity = 7;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = 75.56;
  // ...
?>
```
```node
// ...
items: [
    {
      id: '1234',
      title: 'Lightweight Paper Table',
      description: 'Inspired by the classic foldable art of origami',
      category_id: 'home',
      quantity: 3,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 55.41
    }
  ]// ...
```
```java
// ...
PreferenceItemRequest item = PreferenceItemRequest.builder()
   .id("1234")
   .title("Lightweight Paper Table")
   .description("Inspired by the classic foldable art of origami")
   .categoryId("home")
   .quantity(3)
   .currencyId("BRL")
   .unitPrice(new BigDecimal("100"))
   .build();
// ...
```
```ruby
# ...
preference_data = {
  items: [
    {
      id: 'PR0001',
      title: 'Lightweight Paper Table',
      description: 'Inspired by the classic foldable art of origami',
      category_id: 'home',
      quantity: 3,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 55.41
    }
  ]
}
 # ...
```
```csharp
// ...
var item = new PreferenceItemRequest
{
    Id = "1234",
    Title = "Lightweight Paper Table",
    Description = "Inspired by the classic foldable art of origami",
    CategoryId = "home",
    Quantity = 3,
    CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
    UnitPrice = 55.41m,
};
// ...
```
```python
# ...
preference_data = {
    "items": [
        {
            "id": "1234",
            "title": "Lightweight Paper Table",
            "description": "Inspired by the classic foldable art of origami",
            "category_id": "home",
            "quantity": 3,
            "currency_id": "[FAKER][CURRENCY][ACRONYM]",
            "unit_price": 55.41
        }
    ]
}
```
]]]

> NOTE
> 
> Nota
> 
> Você pode encontrar a lista de categorias do seu `item` [aqui](https://api.mercadopago.com/item_categories). Se não conseguir acessar os valores de categoria, envie o valor `others` no atributo `category_id`.

## Redirecione o comprador para o seu site

No final do processo de pagamento, você tem a opção de redirecionar o comprador para o seu _site_ novamente. 

Para isso, adicione o atributo `back_urls` e defina, segundo o status do pagamento, a página desejada para redirecionar o seu comprador quando ele clicar no botão de retorno ao site.

Se deseja que o redirecionamento para os pagamentos aprovados seja automático, sem a renderização de um botão de retorno, é preciso adicionar também o atributo `auto_return` com valor `approved`. 

> NOTE
>
> Nota
>
> Tenha em conta que o atributo `auto_return` só funciona para o modo `redirect` e `mobile` do Checkout Pro. O mesmo não funciona no modo modal, já que nesse último o comprador segue no _site_ durante todo o processo de pagamento.

![autoreturn](/images/web-payment-checkout/autoreturn-img-br.png)

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

> NOTE
> 
> Nota
> 
> Alguns dos parâmetros guardam informações de compra apenas se o comprador completou todo o pagamento no Checkout Pro e não abandonou o fluxo antes de retornar ao seu site por meio da `back_urls` de `failure`.

Por exemplo:

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

## Evite recusas de pagamentos

Um pagamento pode ser recusado porque o emissor do meio de pagamento detectou um problema no fluxo, como falta dos requisitos de segurança necessários.

Evite pagamentos recusados com as nossas [boas práticas](/developers/pt/docs/checkout-pro/how-tos/payment-approval) e melhore a taxa de aprovação dos seus pagamentos.

## Gerencie cancelamentos e estornos

----[mla, mlm, mco, mlu, mlb, mlc]----
Os cancelamentos são feitos quando o pagamento não foi concluído antes da data de vencimento e o vendedor decide então cancelá-lo. As devoluções, por sua vez, acontecem quando o pagamento foi feito pelo comprador, mas o vendedor decide estorná-lo, total ou parcialmente.
------------

----[mpe]----
Os cancelamentos são feitos quando o pagamento não foi concluído antes da data de vencimento e o vendedor decide então cancelá-lo. As devoluções, por sua vez, acontecem quando o pagamento foi feito pelo comprador, mas o vendedor decide estorná-lo totalmente.
------------

Para mais informações, acesse a nossa documentação sobre [gerenciar os cancelamentos e estornos dos seus pagamentos](/developers/pt/docs/checkout-pro/additional-content/cancellations-and-refunds).

## Gerencie contestações

Uma contestação (ou *chargeback*) acontece quando o comprador entra em contato com a entidade emissora do cartão e desconhece o pagamento. Na prática, isso significa que o dinheiro desse pagamento será retido da sua conta Mercado Pago até que a situação seja solucionada.

Acesse nossa [documentação de Gerenciamento de operações contestadas](/developers/pt/docs/checkout-pro/additional-content/chargebacks) e saiba como gerenciar contestações de pagamentos.

---