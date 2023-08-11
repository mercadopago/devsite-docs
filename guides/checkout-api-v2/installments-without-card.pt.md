# Parcelamento sem cartão

O **Mercado Crédito** é a modalidade de financiamento do Mercado Pago que oferece a opção de parcelar sem precisar de cartão.

Com essa linha de crédito, administrada pelo Mercado Pago, o pagamento é creditado integralmente na conta do vendedor, podendo o cliente optar por pagar em até 12 parcelas fixas mensais e sem a necessidade de cartão. O usuário terá apenas que entrar em sua conta no Mercado Pago (ou criar uma), saber o limite disponível e escolher em quantas parcelas deseja pagar.

> NOTE
>
> Importante
>
> Além das opções disponíveis nesta documentação, também é possível configurar **parcelamentos sem cartão** utilizando o **Brick de Wallet**. Veja a documentação [Renderização padrão](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering#editor_2) de Wallet para mais detalhes. 

Siga os passos abaixo para oferecer o parcelamento sem cartão em sua loja.

## Pré-requisitos

Para realizar a integração é importante atender aos requisitos mostrados abaixo.

| Requisitos | Descrição |
|---|---|
| Conta de vendedor Mercado Pago ou Mercado Livre | Para integrar é preciso uma conta de vendedor no Mercado Pago ou Mercado Livre. Caso não tenha, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para criar. | 
| Aplicação  | As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. Veja [Dashboard](/developers/pt/docs/checkout-api/additional-content/your-integrations/introduction) para mais informações sobre como criar uma aplicação. |
| Instale o SDK do Mercado Pago | Instale os SDKs oficiais para simplificar sua integração com nossas [APIs](/developers/pt/reference/payments/_payments/post). Para mais informações, [clique aqui](/developers/pt/docs/sdks-library/landing). |

Se todos os pré-requisitos foram cumpridos, siga as próximas etapas para integração do parcelamento sem cartão.

## Configuração da integração

> SERVER_SIDE
>
> h3
>
> Criar preferência

Preferências são conjuntos de informações sobre um produto e/ou serviço que permitem definir o nome, meio de pagamento, além de outras configurações relacionadas ao fluxo de pagamento definido. 

A primeira etapa para configurar pagamentos com Mercado Crédito é a criação da preferência. Para isso, envie um POST com o parâmetro `purpose` e o valor `onboarding_credits` ao **endpoint** [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post) e execute a requisição ou, se preferir, utilize o SDK abaixo.

[[[
```php
<?php
// Cria um objeto de preferência
$preference = new MercadoPago\Preference();

// Cria um item na preferência
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->purpose = 'onboarding_credits';
$preference->save();
?>
```
```node
// Cria um objeto de preferência
let preference = {
  items: [
    {
      title: 'Meu produto',
      unit_price: 100,
      quantity: 1,
    }
  ],
  purpose: 'onboarding_credits'
};

mercadopago.preferences.create(preference)
.then(function(response){
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});
```
```java
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
   PreferenceRequest.builder().items(items).purpose("onboarding_credits").build();

client.create(request);
```
```ruby
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
  purpose: 'onboarding_credits'
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]

# Este valor substituirá a string "<%= @preference_id %>" no seu HTML
@preference_id = preference['id']
```
```csharp
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
    Purpose = "onboarding_credits",
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
    "purpose": "onboarding_credits"
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
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
    "purpose": "onboarding_credits"
}'
```
]]]

> CLIENT_SIDE
>
> h3
>
> Adicionar checkout

Após ter criado a preferência no backend, será necessário instalar o SDK de frontend do Mercado Pago ao projeto para adicionar o botão de pagamento.

A instalação é feita em **duas etapas**: **incluindo o SDK do Mercado Pago** ao projeto com suas credenciais configuradas e **iniciando o checkout** a partir da preferência gerada anteriormente.

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
  customization: {
    texts: {
      valueProp: "convenience",
    },
  },
});

```
]]]

Pronto! Ao concluir os passos descritos acima, o botão para pagamento será exibido na tela e você terá finalizado a integração. Siga os passos abaixo para explicar aos  seus clientes como funciona Mercado Crédito.

1. [Crie uma conta](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) ou entre com seu login e senha no Mercado Pago.
2. Selecione **Mercado Crédito** e escolha em quantas vezes quer pagar 
3. Pague as parcelas todo mês como preferir, no **app do Mercado Pago**.