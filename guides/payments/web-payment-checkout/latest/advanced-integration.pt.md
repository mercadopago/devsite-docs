---
sites_supported:
  - mla
  - mlb
---

# Integração avançada

> INDEX
>
> Nesta página
>
>
>
> [Receba notificações de pagamento ](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration#bookmark_receba_notificações_de_pagamentos)
>
> [Informações adicionais para a preferência](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration/#bookmark_informações_adicionais_para_a_preferência)
>
> [URL de retorno](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration#bookmark_url_de_retorno)
>
> [Cancelamentos e estornos](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration#bookmark_cancelamentos_e_estornos)
>
> [Gerencie contestações](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration#bookmark_gerencie_contestações)


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
  $payer->identification = array(
    "type" => "CPF",
    "number" => "19119119100"
  );
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
  identification: {
    type: "CPF",
    number: "19119119100"
  },
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
     .setIdentification(new Identification()
        .setType("CPF")
        .setNumber("19119119100"))
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
  identification: MercadoPago::Identification.new({
    type: "CPF",
    number: "19119119100"
  })
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
    Identification = new Identification()
    {
        Type = "CPF",
        Number = "19119119100"
    },
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
    Quantity = 3,
    CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
    UnitPrice = (float)55.41
  }
);
// ...
```
]]]

## URL de retorno

No final do processo de pagamento, você tem a opção de **redirecionar o comprador para o seu site.**
Para isso, `back_urls` são usados. Esse redirecionamento pode ser automático através do atributo `auto_return` ou de um link que permite retornar ao site do vendedor.

![autoreturn](/images/web-payment-checkout/autoreturn-img-br.png)

Atributo |	Descrição
------------ 	|	--------
`auto_return` | Redireciona automaticamente para o seu site quando o pagamento é finalizado como aprovado. Os valores possíveis são `approved` e `all`.
 `back_url`| **_success._** URL de retorno perante pagamento aprovado.<br/><br/>**_pending._**  URL de retorno perante pagamento pendente.<br/><br/>**_failure._** URL de retorno perante pagamento rejeitado.


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
> Configure seus pagamentos e adapte o Smart Checkout ao seu negócio.
>
> [Outras funcionalidades](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations/)

> RIGHT_BUTTON
>
> Customizações
>
> Adapte o estilo da sua marca na experiência de compra.
>
> [Customizações](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/customizations/)
