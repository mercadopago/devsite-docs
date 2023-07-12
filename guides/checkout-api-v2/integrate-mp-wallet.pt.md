# Conta Mercado Pago

A opção de pagar com a Conta Mercado Pago, por padrão, é apresentada em todos os Checkouts do Mercado Pago em combinação com pagamentos de usuários guest (sem login). 

> NOTE
>
> Importante
>
> Além das opções disponíveis nesta documentação, também é possível integrar pagamentos com a **Conta Mercado Pago** utilizando o **Brick de Wallet**. Veja a documentação [Renderização padrão](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering#editor_2) de Wallet para mais detalhes. 

Esta opção permite que usuários cadastrados no Mercado Pago e/ou Mercado Livre façam login e utilizem-se dos métodos disponíveis para efetuar seus pagamentos, além de poder incluir novas opções de pagamento, como cartões de crédito. 

É possível pagar com **cartão**, **saldo disponível** e **Mercado Crédito** em um ambiente seguro e otimizado, aumentando as chances de conversão de vendas, além de permitir ao vendedor oferecer somente pagamentos com Conta Mercado Pago. Com isso, a opção de pagar sem se logar não existirá, porém, contribuirá para um aumento na conversão de pagamentos.

> WARNING
>
> Importante
>
> Ao adicionar esta opção, não será possível receber pagamentos de usuários não cadastrados no Mercado Pago, assim como não poderá receber pagamentos via dinheiro ou transferência.

Siga as etapas abaixo para configurar a Conta Mercado Pago como meio de pagamento.

> SERVER_SIDE
>
> h2
>
> Criar preferência

Se você é um usuário e deseja que todos os seus pagamentos sejam feitos via Wallet, é possível determinar isso através de um atributo na chamada de preferências. Para criar uma preferência, utilize um dos SDKs disponíveis abaixo.

> Além dos SDKs, também é possível criar uma preferência através da API de preferências. Para isso, envie um **POST** com o parâmetro `purpose` e o valor `wallet_purchase` ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição.

[[[
```php
===
O modo Conta Mercado Pago funciona adicionando o atributo _purpose_ na preferência.
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
O modo Conta Mercado Pago funciona adicionando o atributo _purpose_ na preferência.
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
O modo Conta Mercado Pago funciona adicionando o atributo _purpose_ na preferência.
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
O modo Conta Mercado Pago funciona adicionando o atributo _purpose_ na preferência.
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
O modo Conta Mercado Pago funciona adicionando o atributo _purpose_ na preferência.
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

Após ter criado a preferência no backend, será necessário instalar o SDK de frontend do Mercado Pago ao projeto para adicionar o botão de pagamento.

A instalação é feita, em **duas etapas**: **incluindo o SDK do Mercado Pago** ao projeto com suas credenciais configuradas e **iniciando o checkout** a partir da preferência gerada anteriormente. Para isso, siga os passos listados abaixo.

1. Para incluir o SDK MercadoPago.js, adicione o código abaixo no HTML do projeto ou instale via NPM conforme indicado nos exemplos a seguir.

[[[

```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```bash

npm install @mercadopago/sdk-js

```
]]]

Em seguida, inicialize a integração definindo sua [chave pública](/developers/pt/docs/checkout-api/additional-content/your-integrations/credentials) usando o seguinte código.

[[[
```html

<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>

```
```javascript

import { loadMercadoPago } from "@mercadopago/sdk-js";


await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

Feito isso, é necessário criar um container para definir o local que o botão será inserido na tela. A criação do container é feita inserindo um elemento no código HTML da página no qual o componente será renderizado.

> NOTE
>
> Importante
>
> O valor exibido abaixo na **propriedade ID** é apenas um exemplo e pode ser alterado, mas deve sempre corresponder ao ID indicado na etapa de renderização.

[[[
```html

<div id="wallet_container"></div>

```
]]]

2. Ao finalizar a etapa anterior, inicialize seu checkout utilizando o ID da preferência previamente criada com o identificador do elemento onde o botão deverá ser exibido.

[[[
```javascript

mp.bricks().create("wallet", "wallet_container", {
  initialization: {
    preferenceId: "<PREFERENCE_ID>",
  },
});

```
]]]

Os pagamentos criados possuem os seguintes status: `Pendente`, `Rejeitado` e `Aprovado`. Para acompanhar as atualizações é necessário configurar seu sistema para receber as notificações de pagamentos e outras atualizações de status. Veja [Notificações](/developers/pt/docs/checkout-api/additional-content/your-integrations/notifications) para mais detalhes.
