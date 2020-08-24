# Melhore a aprovação de seus pagamentos

## Por que um pagamento é recusado?

Um pagamento pode ser recusado por um erro com o meio de pagamento ou porque não preenche os requisitos de segurança necessários. Por exemplo, se o cartão não tiver saldo suficiente, o carregamento for realizado de forma deficiente ou se houver uma movimentação não usual da conta.


> NOTE
>
> Nota
>
> Se quiser mais informações, consulte [os estados e motivos de recusa existentes](https://www.mercadopago.com.ar/developers/pt/guides/payments/api/handling-responses).

Para evitar perdas de receitas de seu negócio e melhorar a experiência de seus clientes, trabalhamos com os emissores responsáveis de cada meio de pagamento e utilizamos as últimas tecnologias para evitar a fraude e aumentar a quantidade de pagamentos aprovados.

## Pagamentos recusados pelo banco

Ao oferecer um pagamento com cartão de crédito ou débito, o emissor pode recusar a cobrança por diferentes motivos. Por exemplo, a expiração da data de validade do cartão, se não tiver fundos suficientes ou os dados não forem corretos.

Você pode ver o estado do pagamento na resposta do API como `rejected` e o motivo de recusa no campo `status_detail`.

```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_insufficient_amount",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

E também poderá achar mais informações sobre o detalhe do pagamento na [atividade da conta de Mercado Pago](https://www.mercadopago.com.br/activities) em que os pagamentos são recebidos.

> WARNING
>
> Recusa sem motivo
>
>É importante levar em consideração que se o emissor do cartão de crédito não indicar o motivo da recusa, você verá o detalhe do pagamento como `cc_rejected_other_reason`. Nesse caso, é recomendável alterar o meio de pagamento ou entrar em contato com o banco para resolver o problema.

## Pagamentos recusados para prevenir fraude

Fazemos o acompanhamento em tempo real das transações e temos validações de segurança para reconhecer pagamentos que não foram autorizados pelo titular do cartão e evitar estornos.

Quando o nosso sistema de prevenção de fraude detectar um pagamento suspeito, você poderá ver o estado do pagamento na resposta do API `rejected` e o motivo de recusa como `cc_rejected_high_risk`.

```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_high_risk",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

> NOTE
>
> Nota
>
> Se você quiser mais informações, consulte os [estados e motivos de recusa existentes](https://www.mercadopago.com.ar/developers/pt/guides/payments/api/handling-responses).

## Recomendações para melhorar sua aprovação

Para evitar que um pagamento real seja recusado por não atender as validações de segurança, é necessário somar todas as informações possíveis na hora de realizar a operação.

### Adicione o nosso código de segurança em seu website

Ajudamos você a detectar comportamentos infrequentes dos clientes com o nosso código de segurança para prevenir a fraude. E não se preocupe, cuidamos dos dados de seus clientes e não os compartilhamos com ninguém.

É muito simples. Adicione o script, configure a seção de seu website onde estiver e pronto! Você apenas deverá substituir o valor de `view` pelo nome do website onde quiser adicioná-lo.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

#### Possíveis valores para VIEW

| Valor                                                         | Seção                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| *home* | Página principal de seu website. |
| *search* | Página de busca ou lista de produtos. |
| *item* | Página de um produto específico. |

> NOTE
>
> Nota
>
> Se não tiver um valor disponível para a seção, poderá deixá-lo em branco.

### Detalhe todas as informações sobre o pagamento

Para otimizar a validação de segurança dos pagamentos e melhorar as aprovações, você poderá enviar para nós os dados do comprador e do item para que os analisemos. Por exemplo, se você enviar essas informações para nós, poderemos detectar se esse comprador realizou pagamentos suspeitos em outro momento e preveni-lo.

#### Dados do comprador

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
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  ------------
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
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: {
    type: "DNI",
    number: "12345678"
  },
  ------------
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
     ----[mla, mlb, mlu, mco, mlc, mpe]----
     .setIdentification(new Identification()
        .setType("DNI")
        .setNumber("12345678"))
     ------------
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
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: MercadoPago::Identification.new({
    type: "DNI",
    number: "12345678"
  })
  ------------
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
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    Identification = new Identification()
    {
        Type = "DNI",
        Number = "12345678"
    },
    ------------
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

Você pode obter mais informações sobre cada atributo nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments/post/).

### Dados de indústria

Envia os dados sobre sua indústria para melhorar sua aprovação.<br>

[Ir para dados de indústria](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/industry-data/additional-info)

### Auxilie os seus clientes com seus pagamentos recusados

É importante que você explique aos seus clientes o motivo de recusa do pagamento e que ação pode realizar para solucioná-lo. Seus clientes terão todas as informações necessárias para pagar sem problemas.

Por exemplo, se um pagamento for recusado por fundos insuficientes, poderá recomendar a eles que tentem novamente com outro meio de pagamento para completar a operação.

> NOTE
>
> Nota
>
> Se você utilizar o Checkout Pro, não se preocupe, já tem as mensagens configuradas em cada caso. E se utilizar outro dos nossos produtos, recomendamos para você mostrar uma [mensagem específica por cada motivo de recusa](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/payments/api/handling-responses).

