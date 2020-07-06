---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlm
  - mlc
---

# Integração avançada

## Receba notificações de pagamentos

 As notificações IPN (Instant Payment Notification) são a **forma automática de aviso da criação de novos pagamentos e as atualizações de seus status.** Por exemplo se foram aprovados, recusados ou se estão pendentes.
Permitem que você administre seu estoque e mantenha seu sistema sincronizado.

<a href="https://www.mercadopago.com.br/developers/pt/guides/notifications/ipn/" target="_blank">Receber notificações IPN</a>

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
payer = MercadoPago::Payer.new({
  name: "Joao"
  surname: "Silva"
  email: "user@email.com"
  date_created: Time.now
  phone: MercadoPago::Phone.new({
    area_code: "11",
    number: "4444-4444"
  })
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: MercadoPago::Identification.new({
    type: "CPF",
    number: "19119119100"
  })
  ------------
  address: MercadoPago::Address.new ({
    street_name: "Street",
    street_number: "123",
    zip_code: "06233200"
  })
})
# ...
```
```csharp
using MercadoPago;
using MercadoPago.Resources;
using MercadoPago.DataStructures.Preference;
// ...
Payer payer = new Payer()
{
    Name = "Joao",
    Surname = "Silva",
    Email = "user@email.com",
    Phone = new Phone()
    {
        AreaCode = "11",
        Number = "4444-4444"
    },
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    Identification = new Identification()
    {
        Type = "CPF",
        Number = "19119119100"
    },
    ------------
    Address = new Address()
    {
        StreetName = "Street",
        StreetNumber = int.Parse("123"),
        ZipCode = "06233200"
    }
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
item = MercadoPago::Item.new({
  id: "1234",
  title: "Lightweight Paper Table",
  description: "Inspired by the classic foldable art of origami",
  category_id: "home",
  quantity: 3,
  currency_id: "[FAKER][CURRENCY][ACRONYM]",
  unit_price: 55.41
})# ...
```
```csharp
// ...
preference.Items.Add(
  new Item()
  {
    Id = "1234",
    Title = "Lightweight Paper Table",
    Description = "Inspired by the classic foldable art of origami",
    CategoryId = "home",
    Quantity = 3,
    CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
    UnitPrice = (float)55.41
  }
);
// ...
```
]]]

> Você pode encontrar a lista de categorias para o seu `item` no seguinte [link](https://api.mercadopago.com/item_categories). Se você não conseguir encontrar a categoria do seu produto, envie o valor `others` como `category_id`.


## URL de retorno

No final do processo de pagamento, você tem a opção de **redirecionar o comprador para o seu site.**
Para isso, `back_urls` são usados. Esse redirecionamento pode ser automático através do atributo `auto_return` ou de um link que permite retornar ao site do vendedor.

> NOTE
>
> Nota
>
> Ten en cuenta que las `backs_urls` solo funcionan para redirect y mobile. No al usar modo modal, como se detalla en el siguiente [link]() para volver al sitio toma la URL del `form action`. 

![autoreturn](/images/web-payment-checkout/autoreturn-img-br.png)

Atributo |	Descrição
------------ 	|	--------
`auto_return` | Redireciona automaticamente para o seu site quando o pagamento é finalizado como aprovado. Os valores possíveis são `approved` e `all`.
 `back_url`| **_success._** URL de retorno perante pagamento aprovado.<br/><br/>**_pending._**  URL de retorno perante pagamento pendente.<br/><br/>**_failure._** URL de retorno perante pagamento rejeitado.

Através das `back_url` *serão retornados os seguintes parâmetros*:

Parâmetro |	Descrição
------------ 	|	--------
`collection_id` | ID do pagamento do Mercado Pago. |
`collection_status` | Estado do pagamento. Ex.: `approved` para um pagamento aprovado ou `pending` para um pagamento pendente. |
`external_reference` | Valor do campo `external_reference` que foi enviado no momento da criação da preferência de pagamento. |
`payment_type` | Tipo de pagamento. Ex.: `credit_card` para cartões de crédito ou `ticket` para meios de pagamento em dinheiro. |
`merchant_order_id` | ID da ordem de pagamento gerada no Mercado Pago. |
`preference_id` | ID da preferência de pagamento a partir da qual se está retornando. |
`site_id` | ID do país da conta do Mercado Pago do vendedor. Ex.: ----[mla]---- MLA para Argentina.------------ ----[mlb]---- MLB para Brasil.------------ ----[mlm]---- MLM para México.------------ ----[mpe]---- MPE para Perú.------------ ----[mlc]---- MLC para Chile.------------ ----[mco]---- MCO para Colombia.------------ ----[mlu]---- MLU para Uruguay.------------ |
`processing_mode` | Valor `aggregator`. |
`merchant_account_id` | Valor `null`. |

> Alguns dos parâmetros conterão informação apenas se o pagador realizou o pagamento no Checkout Mercado Pago e não abandonou o fluxo antes de retornar ao seu site através da `back_url` de **_failure_**.

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
preference = MercadoPago::Preference.new
# ...
preference.back_urls = {
  success: "https://www.seu-site/success",
  failure: "http://www.seu-site/failure",
  pending: "http://www.seu-site/pendings"
}
preference.auto_return = "approved"
# ...
```
```csharp
Preference preference = new Preference();
 preference.BackUrls = new BackUrls()
  {
    Success = "https://www.seu-site/success",
    Failure = "http://www.seu-site/failure",
    Pending = "http://www.seu-site/pendings"
  };
  preference.AutoReturn = AutoReturnType.approved;
```
]]]

## Evite recusas de pagamentos

Um pagamento pode ser recusado porque o emissor do meio de pagamento detecta um problema ou porque não preenche os requisitos de segurança necessários.

Evite pagamentos recusados com nossas recomendações e <a href="https://www.mercadopago.com.ar/developers/pt/guides/manage-account/payment-rejections" target="_blank">melhore a aprovação de seus pagamentos</a>.

## Cancelamentos e estornos

Os cancelamentos são feitos quando o pagamento não foi concluído antes da data de vencimento e o vendedor decide cancelá-lo.
As devoluções acontecem quando o pagamento foi feito, mas o vendedor decide estorná-lo, total ou parcialmente.

Você pode encontrar todas as informações na <a href="https://www.mercadopago.com.br/developers/pt/guides/manage-account/cancellations-and-refunds" target="_blank"> seção de Devoluções e cancelamentos</a>.

## Gerencie contestações

Uma contestação ou chargeback acontece quando o comprador entra em contato com a entidade emissora do cartão e desconhece o pagamento.
Isso significa que o dinheiro do vendedor, por esse pagamento, será retido da sua conta do Mercado Pago até que seja solucionada.

<a href="https://www.mercadopago.com.br/developers/pt/guides/manage-account/chargebacks/" target="_blank"> Gerenciar contestações</a>

---

### Próximos passos


> LEFT_BUTTON
>
> Outras funcionalidades
>
> Configure seus pagamentos e adapte o Checkout Mercado Pago ao seu negócio.
>
> [Outras funcionalidades](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations/)

> RIGHT_BUTTON
>
> Customizações
>
> Adapte o estilo da sua marca na experiência de compra.
>
> [Customizações](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/customizations/)
