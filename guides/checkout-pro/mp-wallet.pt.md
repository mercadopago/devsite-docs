# Carteira Mercado Pago

A opção de pagar com a Carteira Mercado Pago, por padrão, é apresentada em todos os Checkouts do Mercado Pago (Checkout Pro e Link de pagamento) em combinação com pagamentos de usuários guest (sem login). 

Esta opção permite que usuários cadastrados no Mercado Pago e/ou Mercado Livre façam login e utilizem-se dos métodos disponíveis para efetuar seus pagamentos, além de poder incluir novas opções de pagamento, como cartões de crédito. 

É possível pagar com cartão, saldo disponível e Mercado Crédito em um ambiente seguro e otimizado, aumentando as chances de conversão de vendas, além de permitir ao vendedor oferecer somente pagamentos com carteira. Com isso, a opção de pagar sem se logar não existirá, porém, contribuirá para um aumento na conversão de pagamentos.

> WARNING
>
> Importante
>
> Ao adicionar esta opção, não será possível receber pagamentos de usuários não cadastrados no Mercado Pago, assim como não poderá receber pagamentos via dinheiro ou transferência.


Siga as etapas abaixo para configurar a Carteira Mercado Pago como meio de pagamento.


> SERVER_SIDE
>
> h2
>
> Criar preferência


Se você é um usuário e deseja que todos os seus pagamentos sejam feitos via Wallet, é possível determinar isso através de um atributo na chamada de API de preferências.

Para isso, envie um **POST** com o parâmetro `purpose` e o valor `wallet_purchase` ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição ou, se preferir, utilize um dos SDKs abaixo.



[[[
```php
===
O modo carteira funciona adicionando o atributo _purpose_ na preferência.
===
<?php
// Cria um objeto de preferência
$preference = new MercadoPago\Preference();

// Cria um item na preferência
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
===
O modo carteira funciona adicionando o atributo _purpose_ na preferência.
===
// Cria um objeto de preferência
let preference = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 100,
      quantity: 1,
    }
  ],
  purpose: 'wallet_purchase'
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor substituirá a string "<%= global.id %>" no seu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
===
O modo carteira funciona adicionando o atributo _purpose_ na preferência.
===
// Cria um objeto de preferência
PreferenceClient client = new PreferenceClient();

// Cria um item na preferência
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("75"))
       .build();

List<PreferenceItemRequest> items = new ArrayList<>();
items.add(item);

PreferenceRequest request =
   PreferenceRequest.builder().items(items).purpose("wallet_purchase").build();

client.create(request);
```
```ruby
===
O modo carteira funciona adicionando o atributo _purpose_ na preferência.
===
sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')
# Cria um objeto de preferência
preference_data = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 100,
      quantity: 1
    }
  ],
  purpose: 'wallet_purchase'
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor substituirá a string "<%= @preference_id %>" no seu HTML
@preference_id = preference['id']
```
```csharp
===
O modo carteira funciona adicionando o atributo _purpose_ na preferência.
===
// Cria o objeto de request da preferência
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto,
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
    Purpose = "wallet_purchase",
};
// Cria a preferência
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
preference_data = {
    "items": [
        {
            "title": "Meu produto",
            "unit_price": 100,
            "quantity": 1
        }
    ],
    "purpose": "wallet_purchase"
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
O modo carteira funciona adicionando o atributo _purpose_ na preferência.
===
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer **PROD_ACCESS_TOKEN**' \
  -d '{
    "items": [
        {
            "title": "Meu produto",
            "quantity": 1,
            "unit_price": 75
        }
    ],
    "purpose": "wallet_purchase"
}'
```
]]]

----[mlc, mco]----

> WARNING
>
> Importante
>
> O valor `unit_price` deve ser um número inteiro.
------------

> CLIENT_SIDE
>
> h2
>
> Adicionar checkout


Com a preferência criada, é preciso exibir o botão de pagamento que permitirá o comprador utilizar a carteira Mercado Pago para pagamento. Para exibir o botão de pagamento, utilize um dos SDKs disponíveis abaixo.



[[[
```html
<div class="cho-container"></div>
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
  const mp = new MercadoPago('PUBLIC_KEY');

  mp.checkout({
    preference: {
      id: 'YOUR_PREFERENCE_ID'
    },
    render: {
      container: '.cho-container',
      label: 'Pagar com Mercado Pago',
      type: 'wallet',
    }
  });
</script>
```
]]]

> WARNING
>
> Importante
>
> Os pagamentos criados possuem os seguintes status: "Pendente", "Rejeitado" e "Aprovado". Para acompanhar as atualizações é necessário configurar seu sistema para receber as notificações de pagamentos e outras atualizações de status. Veja [Notificações](/developers/pt/docs/checkout-pro/additional-content/notifications/introduction) para mais detalhes.
