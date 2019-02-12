# Outros meios de pagamento

Existem outros meios de pagamento em cada país, além de cartões de crédito, com os quais você pode receber pagamentos. A maioria deles são o que chamamos de meios de pagamento “off-line” ou “em dinheiro”.

Os tipos de meio de pagamento disponíveis são:

* ticket
* atm
* bank_transfer
* prepaid_card

## Obtenha os meios de pagamento disponíveis

Obtenha uma lista dos meios de pagamento disponíveis fazendo uma requisição `HTTP GET`:

[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $payment_methods = MercadoPago::get("/v1/payment_methods");

?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");
```
```node
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

payment_methods = mercadopago.get("/v1/payment_methods");
```
```ruby
require 'mercadopago'
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)

payment_methods = MercadoPago::SDK.get("/v1/payment_methods")
```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";

payment_methods = MercadoPago.SDK.get("/v1/payment_methods");
```
]]]

O resultado será uma _array_ com os meios de pagamento e suas propriedades:

```json
[
    {
        "id": "bolbradesco",
        "name": "Boleto",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/2006.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2006.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": [],
        "...": "..."
    },
    {
        "id": "pec",
        "name": "Pagamento na Lotérica",
        "payment_type_id": "ticket",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/12363.gif",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/12363.gif",
        "deferred_capture": "supported",
        "settings": [],
        "additional_info_needed": [],
        "...": "..."
    },
    {
        "...": "..."
    }
]
```

## Receba pagamentos com meios de pagamento em dinheiro

Para receber pagamentos em dinheiro, você só precisa obter o e-mail do comprador. Em seguida, você precisa fazer uma requisição `HTTP POST` enviando o `transaction_amount`, `payment_method_id` e o `email` obtidos:

[[[
```curl
  curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN' \
    -d '{
      "date_of_expiration": "2018-06-30T21:52:49.000-04:00",
      "transaction_amount": 100,
      "description": "Title of what you are paying for",
      "payment_method_id": "bolbradesco",
      "payer": {
        "email": "test_user_19653727@testuser.com",
        "first_name": "Test",
        "last_name": "User",
        "identification": {
            "type": "CPF",
            "number": "19119119100"
        },
        "address": {
            "zip_code": "06233200",
            "street_name": "Av. das Nações Unidas",
            "street_number": "3003",
            "neighborhood": "Bonfim",
            "city": "Osasco",
            "federal_unit": "SP"
        }
      }
    }'
```
```php
<?php  

 require_once 'vendor/autoload.php';

 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

 $payment = new MercadoPago\Payment();
 $payment->date_of_expiration = "2018-06-30T21:52:49.000-04:00";
 $payment->transaction_amount = 100;
 $payment->description = "Title of what you are paying for";
 $payment->payment_method_id = "bolbradesco";
 $payment->payer = array(
     "email" => "test_user_19653727@testuser.com",
     "first_name" => "Test",
     "last_name" => "User",
     "identification" => array( 
         "type" => "CPF",
         "number" => "19119119100"
      ),
     "address"=>  array(
         "zip_code" => "06233200",
         "street_name" => "Av. das Nações Unidas",
         "street_number" => "3003",
         "neighborhood" => "Bonfim",
         "city" => "Osasco",
         "federal_unit" => "SP"
      )
   );

 $payment->save();

?>
```
```java

import com.mercadopago.*;

MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");

Payment payment = new Payment();

payment.setDateOfExpiration("2018-01-01T21:52:49.000-04:00")
       .setTransactionAmount(100f)
       .setDescription('Title of what you are paying for')
       .setPaymentMethodId("bolbradesco")
       .setPayer(new Payer()
           .setEmail("test_user_19653727@testuser.com")
           .setFirstName("Test")
           .setLastName("User")
           .setIdentification(new Identification()
               .setType("CPF")
               .setNumber("19119119100"))
           .setAddress(new Address()
               .setZipCode("06233200")
               .setStreetName("Av. das Nações Unidas")
               .setStreetNumber(3003)
               .setNeighborhood("Bonfim")
               .setCity("Osasco")
               .setFederalUnit("SP")) 
);

payment.save();
```
```ruby
require 'mercadopago.rb'

mp = MercadoPago.new('ENV_ACCESS_TOKEN')

payment_data = {
  date_of_expiration: "2018-06-30T21:52:49.000-04:00",
  transaction_amount: 100,
  description: "Title of what you are paying for",
  payment_method_id: "bolbradesco",
  payer: {
    email: "test_user_8878491@testuser.com",
    first_name: "Test",
    last_name: "User",
    identification: {
        type: "CPF",
        number: "191191191-00"
    },
    address: {
        zip_code: "06233-200",
        street_name: "Av. das Nações Unidas",
        street_number: "3003",
        neighborhood: "Bonfim",
        city: "Osasco",
        federal_unit: "SP"
    }
  }
}

payment = mp.post('/v1/payments', payment_data)

puts payment
```
```csharp
using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
//...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");

Payment payment = new Payment()
{
  DateOfExpiration = "2018-06-30T21:52:49.000-04:00",
    TransactionAmount = float.Parse("105"),
    Description = "Title of what you are paying for",
    PaymentMethodId = "bolbradesco",
    Payer = new Payer(){
        Email = "test_user_19653727@testuser.com",
        FirstName = "Test",
        LastName = "User",
        Identification = new Identification(){
          Type = "CPF",
          Number = "191191191-00"
        },
        Address = new Address(){
          ZipCode = "06233-200",
          StreetName = "Av. das Nações Unidas",
          StreetNumber = "3003",
          Neighborhood = "Bonfim",
          City = "Osasco",
          FederalUnit = "SP"

      }
  }
};
// Save and posting the payment
payment.Save();
//...
```
]]]

Resposta:

```json
{
    ...,
    "status": "pending",
    "status_detail": "pending_waiting_payment",
    ...,
    "transaction_details": {
        "net_received_amount": 0,
        "total_paid_amount": 100,
        "overpaid_amount": 0,
        "external_resource_url": "http://www.mercadopago.com/mla/payments/ticket/helper?payment_id=123456789&payment_method_reference_id= 123456789&caller_id=123456",
        "installment_amount": 0,
        "financial_institution": null,
        "payment_method_reference_id": "1234567890"
    }
}
```

Você receberá uma resposta com o `status` **pending** até que o comprador efetue o pagamento.

O campo `external_resource_url` possui uma URL que contém as instruções para que o comprador possa pagar. Você pode redirecioná-lo ou enviar o link para acesso.


> NOTE
>
> Nota
>
> O comprador tem de **3** a **5** dias para pagar, dependendo do meio de pagamento. Após essas datas, **você deve** cancelá-lo.


## Cancele um pagamento


Somente é possível cancelar pagamentos que se encontrem com status `pending` ou `in_process`.

As opções de pagamento em dinheiro devem ser pagas no prazo de 3 a 5 dias dependendo de cada caso. Veja a [lista completa de vencimentos](https://www.mercadopago.com.br/activities).

Se você quiser cancelar um pagamento, pode fazê-lo seguindo o guia [cancelamentos e devoluções de pagamentos](/guides/manage-account/cancellations-and-refunds.pt.md).

A expiração de um pagamento ocorre após 30 dias e o cancelamento é automático, o status final deles será cancelled/expired. 

## Prazo de aprovação dos pagamentos


Cada meio de pagamento tem a sua própria data de aprovação, em alguns casos é imediata e, em outros a espera é de até 3 dias úteis.

Recomendamos que verifique os [prazos de aprovação por meio de pagamento](https://www.mercadopago.com.br/ajuda/meios-de-pagamento-parcelamento_265).


## Devoluções


Se for preciso devolver dinheiro ao comprador, utilize a API de Refunds. Todas as devoluções dos meios de pagamento em dinheiro são feitas na conta do Mercado Pago do seu comprador.

Caso o comprador não possua uma, ele receberá um e-mail no endereço enviado no pagamento com instruções sobre como resgatar seu dinheiro.

Para mais informações, consulte a seção sobre [devoluções](/guides/manage-account/cancellations-and-refunds.pt.md).
