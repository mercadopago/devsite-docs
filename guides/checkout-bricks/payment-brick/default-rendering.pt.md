# Renderização padrão

> WARNING
>
> Importante
>
> Para realizar a renderização do Payment Brick, primeiro execute os [passos de inicialização](/developers/pt/docs/checkout-bricks/common-initialization) compartilhados entre todos os Brick. 

## Configurar o Brick

Crie a configuração de inicialização do Brick.

----[mlb]----
[[[
```Javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     /*
      "amount" é o valor total a ser pago por todos os meios de pagamento
    com exceção da Conta Mercado Pago e Parcelamento sem cartão de crédito, que tem seu valor de processamento determinado no backend através do "preferenceId"
     */
     amount: 100,
     preferenceId: "<PREFERENCE_ID>",
   },
   customization: {
     paymentMethods: {
       ticket: "all",
       bankTransfer: "all",
       creditCard: "all",
       debitCard: "all",
       mercadoPago: "all",
     },
   },
   callbacks: {
     onReady: () => {
       /*
        Callback chamado quando o Brick estiver pronto.
        Aqui você pode ocultar loadings do seu site, por exemplo.
       */
     },
     onSubmit: ({ selectedPaymentMethod, formData }) => {
       // callback chamado ao clicar no botão de submissão dos dados
       return new Promise((resolve, reject) => {
         fetch("/process_payment", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
             // receber o resultado do pagamento
             resolve();
           })
           .catch((error) => {
             // lidar com a resposta de erro ao tentar criar o pagamento
             reject();
           });
       });
     },
     onError: (error) => {
       // callback chamado para todos os casos de erro do Brick
       console.error(error);
     },
   },
 };
 window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );
};
renderPaymentBrick(bricksBuilder);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   ticket: "all",
   bankTransfer: "all",
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback chamado ao clicar no botão de submissão dos dados
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => response.json())
     .then((response) => {
       // receber o resultado do pagamento
       resolve();
     })
     .catch((error) => {
       // lidar com a resposta de erro ao tentar criar o pagamento
       reject();
     });
 });
};
const onError = async (error) => {
 // callback chamado para todos os casos de erro do Brick
 console.log(error);
};
const onReady = async () => {
 /*
   Callback chamado quando o Brick estiver pronto.
   Aqui você pode ocultar loadings do seu site, por exemplo.
 */
};
```
]]]

------------
----[mlm]----
[[[
```Javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     /*
      "amount" é o valor total a ser pago por todos os meios de pagamento
    com exceção da Conta Mercado Pago e Parcelamento sem cartão de crédito, que tem seu valor de processamento determinado no backend através do "preferenceId"
     */
     amount: 100,
     preferenceId: "<PREFERENCE_ID>",
   },
   customization: {
     paymentMethods: {
       atm: "all",
       ticket: "all",
       creditCard: "all",
       debitCard: "all",
       mercadoPago: "all",
     },
   },
   callbacks: {
     onReady: () => {
       /*
        Callback chamado quando o Brick estiver pronto.
        Aqui você pode ocultar loadings do seu site, por exemplo.
       */
     },
     onSubmit: ({ selectedPaymentMethod, formData }) => {
       // callback chamado ao clicar no botão de submissão dos dados
       return new Promise((resolve, reject) => {
         fetch("/process_payment", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
             // receber o resultado do pagamento
             resolve();
           })
           .catch((error) => {
             // lidar com a resposta de erro ao tentar criar o pagamento
             reject();
           });
       });
     },
     onError: (error) => {
       // callback chamado para todos os casos de erro do Brick
       console.error(error);
     },
   },
 };
 window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );
};
renderPaymentBrick(bricksBuilder);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   atm: "all",
   ticket: "all",
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback chamado ao clicar no botão de submissão dos dados
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => response.json())
     .then((response) => {
       // receber o resultado do pagamento
       resolve();
     })
     .catch((error) => {
       // lidar com a resposta de erro ao tentar criar o pagamento
       reject();
     });
 });
};
const onError = async (error) => {
 // callback chamado para todos os casos de erro do Brick
 console.log(error);
};
const onReady = async () => {
 /*
   Callback chamado quando o Brick estiver pronto.
   Aqui você pode ocultar loadings do seu site, por exemplo.
 */
};
```
]]]

------------
----[mlc]----
[[[
```Javascript

const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     /*
      "amount" é o valor total a ser pago por todos os meios de pagamento
    com exceção da Conta Mercado Pago e Parcelamento sem cartão de crédito, que tem seu valor de processamento determinado no backend através do "preferenceId"
     */
     amount: 100,
     preferenceId: "<PREFERENCE_ID>",
   },
   customization: {
     paymentMethods: {
       creditCard: "all",
       debitCard: "all",
       mercadoPago: "all",
     },
   },
   callbacks: {
     onReady: () => {
       /*
        Callback chamado quando o Brick estiver pronto.
        Aqui você pode ocultar loadings do seu site, por exemplo.
       */
     },
     onSubmit: ({ selectedPaymentMethod, formData }) => {
       // callback chamado ao clicar no botão de submissão dos dados
       return new Promise((resolve, reject) => {
         fetch("/process_payment", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
             // receber o resultado do pagamento
             resolve();
           })
           .catch((error) => {
             // lidar com a resposta de erro ao tentar criar o pagamento
             reject();
           });
       });
     },
     onError: (error) => {
       // callback chamado para todos os casos de erro do Brick
       console.error(error);
     },
   },
 };
 window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );
};
renderPaymentBrick(bricksBuilder);
```
```react-jsx

const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback chamado ao clicar no botão de submissão dos dados
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => response.json())
     .then((response) => {
       // receber o resultado do pagamento
       resolve();
     })
     .catch((error) => {
       // lidar com a resposta de erro ao tentar criar o pagamento
       reject();
     });
 });
};
const onError = async (error) => {
 // callback chamado para todos os casos de erro do Brick
 console.log(error);
};
const onReady = async () => {
 /*
   Callback chamado quando o Brick estiver pronto.
   Aqui você pode ocultar loadings do seu site, por exemplo.
 */
};

```
]]]

------------
----[mco]----
[[[
```Javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     /*
      "amount" é o valor total a ser pago por todos os meios de pagamento com exceção da Conta Mercado Pago e Parcelamento sem cartão de crédito, que tem seu valor de processamento determinado no backend através do "preferenceId"
     */
     amount: 10000,
     preferenceId: "<PREFERENCE_ID>",
   },
   customization: {
     paymentMethods: {
       ticket: "all",
       bankTransfer: "all",
       creditCard: "all",
       debitCard: "all",
       mercadoPago: "all",
     },
   },
   callbacks: {
     onReady: () => {
       /*
        Callback chamado quando o Brick estiver pronto.
        Aqui você pode ocultar loadings do seu site, por exemplo.
       */
     },
     onSubmit: ({ selectedPaymentMethod, formData }) => {
       // callback chamado ao clicar no botão de submissão dos dados
       return new Promise((resolve, reject) => {
         fetch("/process_payment", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
             // receber o resultado do pagamento
             resolve();
           })
           .catch((error) => {
             // lidar com a resposta de erro ao tentar criar o pagamento
             reject();
           });
       });
     },
     onError: (error) => {
       // callback chamado para todos os casos de erro do Brick
       console.error(error);
     },
   },
 };
 window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );
};
renderPaymentBrick(bricksBuilder);
```
```react-jsx
const initialization = {
 amount: 10000,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   ticket: "all",
   bankTransfer: "all",
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback chamado ao clicar no botão de submissão dos dados
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => response.json())
     .then((response) => {
       // receber o resultado do pagamento
       resolve();
     })
     .catch((error) => {
       // lidar com a resposta de erro ao tentar criar o pagamento
       reject();
     });
 });
};
const onError = async (error) => {
 // callback chamado para todos os casos de erro do Brick
 console.log(error);
};
const onReady = async () => {
 /*
   Callback chamado quando o Brick estiver pronto.
   Aqui você pode ocultar loadings do seu site, por exemplo.
 */
};
```
]]]

------------
----[mla, mlu, mpe]----
[[[
```Javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     /*
      "amount" é o valor total a ser pago por todos os meios de pagamento com exceção da Conta Mercado Pago e Parcelamento sem cartão de crédito, que tem seu valor de processamento determinado no backend através do "preferenceId"
     */
     amount: 100,
     preferenceId: "<PREFERENCE_ID>",
   },
   customization: {
     paymentMethods: {
       ticket: "all",
       creditCard: "all",
       debitCard: "all",
       mercadoPago: "all",
     },
   },
   callbacks: {
     onReady: () => {
       /*
        Callback chamado quando o Brick estiver pronto.
        Aqui você pode ocultar loadings do seu site, por exemplo.
       */
     },
     onSubmit: ({ selectedPaymentMethod, formData }) => {
       // callback chamado ao clicar no botão de submissão dos dados
       return new Promise((resolve, reject) => {
         fetch("/process_payment", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
             // receber o resultado do pagamento
             resolve();
           })
           .catch((error) => {
             // lidar com a resposta de erro ao tentar criar o pagamento
             reject();
           });
       });
     },
     onError: (error) => {
       // callback chamado para todos os casos de erro do Brick
       console.error(error);
     },
   },
 };
 window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );
};
renderPaymentBrick(bricksBuilder);
```
```react-jsx
const initialization = {
 amount: 100,
 preferenceId: "<PREFERENCE_ID>",
};
const customization = {
 paymentMethods: {
   ticket: "all",
   creditCard: "all",
   debitCard: "all",
   mercadoPago: "all",
 },
};
const onSubmit = async (
 { selectedPaymentMethod, formData }
) => {
 // callback chamado ao clicar no botão de submissão dos dados
 return new Promise((resolve, reject) => {
   fetch("/process_payment", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData),
   })
     .then((response) => response.json())
     .then((response) => {
       // receber o resultado do pagamento
       resolve();
     })
     .catch((error) => {
       // lidar com a resposta de erro ao tentar criar o pagamento
       reject();
     });
 });
};
const onError = async (error) => {
 // callback chamado para todos os casos de erro do Brick
 console.log(error);
};
const onReady = async () => {
 /*
   Callback chamado quando o Brick estiver pronto.
   Aqui você pode ocultar loadings do seu site, por exemplo.
 */
};
```
]]]

------------

> WARNING
> 
> Atenção
>
> Sempre que o usuário sair da tela onde algum Brick é exibido, é necessário destruir a instância atual com o comando `window.paymentBrickController.unmount()`. Ao entrar novamente, uma nova instância deve ser gerada.

Para utilizar o método de pagamento (`paymentMethods`) do tipo "mercadoPago" é preciso enviar uma preferência durante a inicialização do Brick, substituindo o valor `<PREFERENCE_ID>` pelo ID da preferência criada. As instruções para criação da preferência estão na seção [Habilitar pagamento com Mercado Pago](/developers/pt/docs/checkout-bricks/payment-brick/default-rendering#bookmark_habilitar_pagamento_com_mercado_pago).

## Renderizar o Brick

Uma vez criadas as configurações, insira o código abaixo para renderizar o Brick.

> NOTE
>
> Importante
>
> O id "paymentBrick_container" da div html abaixo, deve corresponder ao valor enviado dentro do método create() da etapa anterior.

[[[
```html
<div id="paymentBrick_container"></div>
```
```react-jsx
import { Payment } from '@mercadopago/sdk-react';

<Payment
   initialization={initialization}
   customization={customization}
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
```
]]]

O resultado de renderizar o Brick deve ser como na imagem abaixo.

----[mlb]----
<center>

![payment-Brick-layout-mlb](checkout-bricks/payment-brick-layout-mlb-pt.gif)

</center>
------------

----[mla]----
<center>

![payment-Brick-layout-mla](checkout-bricks/payment-brick-layout-mla-pt.gif)

</center>

------------
----[mlm]----
<center>

![payment-Brick-layout-mlm](checkout-bricks/payment-brick-layout-mlm-pt.gif)

</center>

------------
----[mco]----
<center>

![payment-brick-layout-mco](checkout-bricks/payment-brick-layout-mco-pt.gif)

</center>

------------
----[mpe, mlu, mlc]----
<center>

![payment-brick-layout-all](checkout-bricks/payment-brick-layout-all-pt.gif)

</center>

------------

## Habilitar pagamento com Mercado Pago

Para utilizar o método de pagamento (paymentMethods) do tipo "mercadoPago" é preciso enviar uma preferência durante a inicialização do Brick, substituindo o valor <PREFERENCE_ID> pelo ID da preferência criada. 

Para criar uma preferência em seu backend, adicione o [SDK do Mercado Pago](/developers/pt/docs/sdks-library/landing) e as [credenciais](/developers/pt/guides/additional-content/your-integrations/credentials) necessárias ao seu projeto para habilitar o uso de preferências.

[[[
```php
<?php
// SDK do Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Adicione as credenciais
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>
```
```node
// SDK do Mercado Pago
const mercadopago = require ('mercadopago');
// Adicione as credenciais
mercadopago.configure({
  access_token: 'PROD_ACCESS_TOKEN'
});
```
```java
// SDK do Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Adicione as credenciais
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");
```
```ruby
# SDK do Mercado Pago
require 'mercadopago'
# Adicione as credenciais
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')
```
```csharp
// SDK do Mercado Pago
using MercadoPago.Config;
 // Adicione as credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
```
```python
# SDK do Mercado Pago
import mercadopago
# Adicione as credenciais
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")
```
]]]

----[mla, mlb, mlm]----
Em seguida, configure a preferência de acordo com o seu produto ou serviço. 

Os exemplos de código abaixo configuram o **purpose da preferência** como `wallet_purchase`, mas também é possível configurá-lo como `onboarding_credits`. Entenda a diferença entre os dois:

* **wallet_purchase**: o usuário deverá fazer login quando for redirecionado para sua conta do Mercado Pago.
* **onboarding_credits**: após fazer login, o usuário verá a opção de pagamento com crédito pré-selecionada em sua conta do Mercado Pago.

------------
----[mlu, mlc, mco, mpe]----
Em seguida, configure a preferência de acordo com o seu produto ou serviço. 

Os exemplos de código abaixo configuram o **purpose da preferência** como `wallet_purchase`, onde o usuário deverá fazer login quando for redirecionado para sua conta do Mercado Pago.

------------

[[[
 ```php
<?php
// Cria um objeto de preferência
$preference = new MercadoPago\Preference();
 
// Cria um item na preferência
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);
 
// o $preference->purpose = 'wallet_purchase'; permite apenas pagamentos logados
// para permitir pagamentos como guest, você pode omitir essa propriedade
$preference->purpose = 'wallet_purchase';
$preference->save();
?>
```
```node
// Cria um objeto de preferência
let preference = {
  // o "purpose": "wallet_purchase" permite apenas pagamentos logados
  // para permitir pagamentos como guest, você pode omitir essa propriedade
  "purpose": "wallet_purchase",
  "items": [
    {
      "id": "item-ID-1234",
      "title": "Meu produto",
      "quantity": 1,
      "unit_price": 75.76
    }
  ]
};
 
mercadopago.preferences.create(preference)
  .then(function (response) {
    // Este valor é o preferenceId que será enviado para o Brick na inicialização
    const preferenceId = response.body.id;
  }).catch(function (error) {
    console.log(error);
  });
```
```java
// Cria um objeto de preferência
PreferenceClient client = new PreferenceClient();
 
// Cria um item na preferência
List<PreferenceItemRequest> items = new ArrayList<>();
PreferenceItemRequest item =
   PreferenceItemRequest.builder()
       .title("Meu produto")
       .quantity(1)
       .unitPrice(new BigDecimal("100"))
       .build();
items.add(item);
 
PreferenceRequest request = PreferenceRequest.builder()
  // o .purpose('wallet_purchase') permite apenas pagamentos logados
  // para permitir pagamentos como guest, você pode omitir essa linha
  .purpose('wallet_purchase')
  .items(items).build();
 
client.create(request);
```
```ruby
# Cria um objeto de preferência
preference_data = {
  # o purpose: 'wallet_purchase', permite apenas pagamentos logados
  # para permitir pagamentos como guest, você pode omitir essa propriedade
  purpose: 'wallet_purchase',
  items: [
    {
      title: 'Meu produto',
      unit_price: 75.56,
      quantity: 1
    }
  ]
}
preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
 
# Este valor é o preferenceId que você usará no HTML na inicialização no Brick
@preference_id = preference['id']
```
```csharp
// Cria o objeto de request da preferência
var request = new PreferenceRequest
{
  // o Purpose = 'wallet_purchase', permite apenas pagamentos logados
  // para permitir pagamentos como guest, você pode omitir essa propriedade
    Purpose = "wallet_purchase",
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "BRL",
            UnitPrice = 75.56,
        },
    },
};
 
// Cria a preferência usando o client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# Cria um item na preferência
preference_data = {
  # o "purpose": "wallet_purchase", permite apenas pagamentos logados
  # para permitir pagamentos como guest, você pode omitir essa propriedade
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "Meu Item",
            "quantity": 1,
            "unit_price": 75.76
        }
    ]
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
  "purpose": "wallet_purchase",
  "items": [
      {
          "title": "Meu produto",
          "quantity": 1,
          "unit_price": 75.76
      }
  ]
}'
```
]]]

> NOTE
>
> Importante
>
> Para saber mais detalhes de como configurá-la, acesse a seção [Preferências.](/developers/pt/docs/checkout-bricks/wallet-brick/additional-customization/preferences)<br/></br>
> <br/></br>
> Considere que quando um usuário opta por fazer o pagamento utilizando a Conta Mercado Pago, este será redirecionado para a página do Mercado Pago para concluir o pagamento. Por isso, é necessário configurar as `back_urls` se você quiser retornar ao seu site ao final do pagamento. Para mais informações, visite a seção [Redirecione o comprador para o seu site.](/developers/pt/docs/checkout-bricks/wallet-brick/additional-customization/preferences#bookmark_redirecione_o_comprador_para_o_seu_site).