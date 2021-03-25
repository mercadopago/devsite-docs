# Integração avançada

## Receba notificações de pagamentos

 As notificações IPN (Instant Payment Notification) são a **forma automática de aviso da criação de novos pagamentos e as atualizações de seus status.** Por exemplo se foram aprovados, recusados ou se estão pendentes.
Permitem que você administre seu estoque e mantenha seu sistema sincronizado.

[Receber notificações IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn)

## Informações adicionais para a preferência

Melhore a aprovação dos pagamentos e a experiência dos seus compradores adicionando informações à sua preferência.

Recomendamos detalhar todas as informações possíveis sobre o item e o comprador.

### Dados do comprador

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
Payer payer = new Payer();
payer.setName("Joao")
     .setSurname("Silva")
     .setEmail("user@email.com")
     .setDateCreated("2018-06-02T12:58:41.425-04:00")
     .setPhone(new Phone()
        .setAreaCode("11")
        .setPhoneNumber("4444-4444"))
      ----[mla, mlb, mlu, mco, mlc, mpe]----
     .setIdentification(new Identification()
        .setType("CPF")
        .setNumber("19119119100"))
      ------------
     .setAddress(new Address()
        .setStreetName("Street")
        .setBuildingNumber("123")
        .setZipCode("06233200"));
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
]]]

### Dados do item

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
Item item = new Item();
item.setId("1234")
    .setTitle("Lightweight Paper Table")
    .setDescription("Inspired by the classic foldable art of origami")
    .setCategoryId("home")
    .setQuantity(3)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 55.41);
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
]]]

> Você pode encontrar a lista de categorias para o seu `item` no seguinte [link](https://api.mercadopago.com/item_categories). Se você não conseguir encontrar a categoria do seu produto, envie o valor `others` como `category_id`.


## URL de retorno

No final do processo de pagamento, você tem a opção de **redirecionar o comprador para o seu site.**
Para isso, precisa adicionar o atributo `back_urls` e definir, segundo o status do pagamento, a onde quer que redirecionemos seu comprador quando ele clique no botão de voltar ao site.

Se quer que o redirecionamento seja automático para os pagamentos aprovados, precisa adicionar também o atributo `auto_return` com valor `approved`. 

> NOTE
>
> Nota
>
> Tenha em conta que o atributo `auto_return` só funciona para o modo 'redirect' e 'mobile'. Isso não funciona quando usa o [modo modal](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/integration) já que o comprador está sempre no site.

![autoreturn](/images/web-payment-checkout/autoreturn-img-br.png)

Atributo |	Descrição
------------ 	|	--------
`auto_return` | Redireciona automaticamente para o seu site quando o pagamento é finalizado como aprovado. O valor é `approved`.
| `back_urls` | `success`. URL de retorno perante pagamento aprovado.<br/><br/>`pending`. URL de retorno perante pagamento pendente.<br/><br/>`failure`. URL de retorno perante pagamento rejeitado.

Através das `back_urls` *serão retornados os seguintes parâmetros*:

Parâmetro |	Descrição
------------ 	|	--------
`payment_id` | ID do pagamento do Mercado Pago. |
`status` | Estado do pagamento. Ex.: `approved` para um pagamento aprovado ou `pending` para um pagamento pendente. |
`external_reference` | Valor que foi enviado no momento da criação da preferência de pagamento. |
`merchant_order_id` | ID da ordem de pagamento gerada no Mercado Pago. |

> Alguns dos parâmetros conterão informação apenas se o pagador realizou o pagamento no Checkout Pro e não abandonou o fluxo antes de retornar ao seu site através da `back_urls` de **_failure_**.

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
Preference preference = new Preference();
// ...
BackUrls backUrls = new BackUrls(
                    "https://www.seu-site/success",
                    "http://www.seu-site/pending",
                    "http://www.seu-site/failure");

preference.setBackUrls(backUrls);
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
]]]

## Evite recusas de pagamentos

Um pagamento pode ser recusado porque o emissor do meio de pagamento detecta um problema ou porque não preenche os requisitos de segurança necessários.

Evite pagamentos recusados com nossas recomendações e [melhore a aprovação de seus pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/payment-rejections).

## Cancelamentos e estornos

Os cancelamentos são feitos quando o pagamento não foi concluído antes da data de vencimento e o vendedor decide cancelá-lo.
As devoluções acontecem quando o pagamento foi feito, mas o vendedor decide estorná-lo, total ou parcialmente.

Você pode encontrar todas as informações na [ seção de Devoluções e cancelamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/cancellations-and-refunds).

## Gerencie contestações

Uma contestação ou chargeback acontece quando o comprador entra em contato com a entidade emissora do cartão e desconhece o pagamento.
Isso significa que o dinheiro do vendedor, por esse pagamento, será retido da sua conta do Mercado Pago até que seja solucionada.

[Gerenciar contestações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/manage-account/account/chargebacks)

---

### Próximos passos


> LEFT_BUTTON
>
> Outras funcionalidades
>
> Configure seus pagamentos e adapte o Checkout Pro ao seu negócio.
>
> [Outras funcionalidades](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/configurations)

> RIGHT_BUTTON
>
> Customizações
>
> Adapte o estilo da sua marca na experiência de compra.
>
> [Customizações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/customizations)
