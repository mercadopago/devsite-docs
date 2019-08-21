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
> [Receba notificações de pagamento ](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration#bookmark_recibe_notificaciones_de_pagos)
>
> [Informações adicionais para a preferência](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration/#bookmark_información_adicional_para_la_preferencia)
>
> [URL de retorno](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration#bookmark_url_de_retorno)
>
> [Cancelamentos e estornos](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration#bookmark_cancelaciones_y_devoluciones)
>
> [Gerencie contestações](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/advanced-integration#bookmark_gestiona_contracargos)


## Receba notificações de pagamentos

 As notificações IPN (Instant Payment Notification) são a **forma automática de aviso da criação de novos pagamentos e as atualizações de seus status.** Por exemplo se forma aprovados, recusados ou se estão pendentes.
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
  $payer->name = "Charles";
  $payer->surname = "Luevano";
  $payer->email = "charles@hotmail.com";
  $payer->date_created = "2018-06-02T12:58:41.425-04:00";
  $payer->phone = array(
    "area_code" => "",
    "number" => "949 128 866"
  );
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  $payer->address = array(
    "street_name" => "Cuesta Miguel Armendáriz",
    "street_number" => 1004,
    "zip_code" => "11020"
  );
  // ...
?>
```
```node
// ...
var payer = {
  name: "Charles",
  surname: "Luevano",
  email: "charles@hotmail.com",
  date_created: "2015-06-02T12:58:41.425-04:00",
  phone: {
    area_code: "",
    number: "949 128 866"
  },
  identification: {
    type: "DNI",
    number: "12345678"
  },
  address: {
    street_name: "Cuesta Miguel Armendáriz",
    street_number: "1004",
    zip_code: "11020"
  }
}
// ...
```
```java
// ...
Payer payer = new Payer();
payer.setName("Charles")
     .setSurname("Luevano")
     .setEmail("charles@hotmail.com")
     .setDateCreated("2018-06-02T12:58:41.425-04:00")
     .setPhone(new Phone()
        .setAreaCode("")
        .setPhoneNumber("949 128 866"))
     .setIdentification(new Identification()
        .setType("DNI")
        .setNumber("12345678"))
     .setAddress(new Address()
        .setStreetName("Cuesta Miguel Armendáriz")
        .setBuildingNumber("1004")
        .setZipCode("11020"));
// ...
```
```ruby
# ...
payer = MercadoPago::Payer.new({
  name: "Charles"
  surname: "Luevano"
  email: "charles@hotmail.com"
  date_created: Time.now
  phone: MercadoPago::Phone.new({
    area_code: "",
    number: "949 128 866"
  })
  identification: MercadoPago::Identification.new({
    type: "DNI",
    number: "12345678"
  })
  address: MercadoPago::Address.new ({
    street_name: "Cuesta Miguel Armendáriz",
    street_number: "1004",
    zip_code: "11020"
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
    Name = "Charles",
    Surname = "Luevano",
    Email = "charles@hotmail.com",
    Phone = new Phone()
    {
        AreaCode = "",
        Number = "949 128 866"
    },
    Identification = new Identification()
    {
        Type = "DNI",
        Number = "12345678"
    },
    Address = new Address()
    {
        StreetName = "Cuesta Miguel Armendáriz",
        StreetNumber = int.Parse("1004"),
        ZipCode = "11020"
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
  $item->currency_id = "ARS";
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
      currency_id: 'ARS',
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
    .setCurrencyId("ARS")
    .setUnitPrice((float) 55.41);
// ...
```
```ruby
# ...
item = MercadoPago::Item.new({
  id: "1234",
  title: "Lightweight Paper Table",
  quantity: 3,
  currency_id: "ARS",
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
    CurrencyId = "ARS",
    UnitPrice = (float)55.41
  }
);
// ...
```
]]]

## URL de retorno

No final do processo de pagamento, você tem a opção de **redirecionar o comprador para o seu site.**
Para isso, back_urls são usados. Esse redirecionamento pode ser automático através do atributo auto_return ou de um link que permite retornar ao site do vendedor.

![autoreturn](/images/web-payment-checkout/autoreturn_pt.png)

Atributo |	Descrição
------------ 	|	--------
`auto_return` | Redireciona automaticamente para o seu site quando o pagamento é finalizado como aprovado. Os valores possíveis são approved e all.
 `back_url`| **_success._** URL de retorno perante pagamento aprovado.<br/><br/>**_pending._**  URL de retorno perante pagamento pendente.<br/><br/>**_failure._** URL de retorno perante pagamento cancelado.


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
```csharp
Preference preference = new Preference();
 preference.BackUrls = new BackUrls()
  {
    Success = "https://www.tu-sitio/success",
    Failure = "http://www.tu-sitio/failure",
    Pending = "http://www.tu-sitio/pendings"
  };
  preference.AutoReturn = AutoReturnType.approved;
```
]]]

## Cancelamentos e estornos

Os cancelamentos são feitos quando o pagamento não foi concluído antes da data de vencimento e o vendedor decide cancelá-lo.
Os estornos acontecem quando o pagamento foi feito, mas o vendedor decide cancelá-lo, total ou parcialmente.


Você pode encontrar todas as informações na <a href="https://www.mercadopago.com.ar/developers/es/guides/manage-account/cancellations-and-refunds" target="_blank"> seção de Devoluções e cancelamentos.</a>.

## Gerencie contestações

Uma contestação ou chargeback acontece quando o comprador entra em contato com a entidade emissora do cartão e desconhece o pagamento.
Isso significa que o dinheiro do vendedor, por esse pagamento, será retido da sua conta do Mercado Pago até que seja solucionada.


<a href="https://www.mercadopago.com.ar/developers/es/guides/manage-account/chargebacks/" target="_blank"> Gerenciar contestações</a>

### Próximos passos

<div>
  <div>
  <a href="http://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/configurations/" style="text-decoration:none;color:inherit">       
    <blockquote class="next-step-card next-step-card-left">
      <p class="card-note-title">Outras funcionalidades</p>
      <p>Configure seus pagamentos e adapte o Web Checkout ao seu negócio. </p>
    </blockquote>
  </a>
  </div>
  <div>   
  <a href="http://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/customizations/" style="text-decoration:none;color:inherit">
    <blockquote class="next-step-card next-step-card-right">
      <p class="card-note-title">Customizações</p>
      <p>Adapte o estilo da sua marca na experiência de compra.</p>
    </blockquote>
  </a>
  </div>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
