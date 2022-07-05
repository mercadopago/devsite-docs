# Carteira Mercado Pago

A Carteira Mercado Pago é uma forma de pagamento que permite aceitar pagamentos apenas de usuários cadastrados. Ao oferecer esta opção, os usuários poderão pagar com cartão, saldo disponível e Mercado Crédito. 


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


A primeira etapa para configurar pagamentos com Carteira Mercado Pago é a criação da preferência. Para isso, envie um POST com o parâmetro `purpose` e o valor `wallet_purchase` ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição ou, se preferir, utilize um dos SDKs abaixo.



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
<div class=".cho-container"></div>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
  <script>
    const mp = new MercadoPago('PUBLIC_KEY');

    async function createPreference() {
      try {
        const response = await fetch("/process_payment");
        const { id } = await response.json();
        mp.checkout({
          preference: {
            id
          },
          render: {
            container: '.cho-container',
            label: 'Pagar com Mercado Pago',
            type: 'wallet',
          }
        });
      } catch (error) {
        console.error(error);
      }
    }

    createPreference();
  </script>
```
]]]

> WARNING
>
> Importante
>
> Os pagamentos criados possuem os seguintes status: "Pendente", "Rejeitado" e "Aprovado". Para acompanhar as atualizações é necessário configurar seu sistema para receber as notificações de pagamentos e outras atualizações de status. Veja [Notificações](/developers/pt/docs/checkout-api/additional-content/notifications/introduction) para mais detalhes.


> PREV_STEP_CARD_PT
>
> Pré-requisitos
>
> Veja os pré-requisitos necessários para integrar o Checkout Transparente.
>
> [Integrar Checkout Transparente](/developers/pt/docs/checkout-api/prerequisites)


> NEXT_STEP_CARD_PT
>
> Teste de integração
>
> Saiba como testar a integração do Checkout Transparente em sua loja.
>
> [Teste de integração](/developers/pt/docs/checkout-api/integration-test/create-test-user)