# Criar preferência

Para criar uma preferência em seu backend, adicione o [SDK do Mercado Pago](/developers/pt/docs/sdks-library/landing) e as [credenciais](/developers/pt/guides/additional-content/credentials/credentials) necessárias ao seu projeto para habilitar o uso de preferências.

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
<<<<<<< HEAD:guides/checkout-bricks/wallet-brick/create-preference.pt.md
> Para saber mais detalhes de como configurá-la, acesse a seção [Preferências.](/developers/pt/docs/checkout-bricks/wallet-brick/additional-customization/preferences)<br/></br>
> <br/></br>
> Considere que quando um usuário opta por fazer o pagamento utilizando a Conta Mercado Pago, este será redirecionado para a página do Mercado Pago para concluir o pagamento. Por isso, é necessário configurar as `back_urls` se você quiser retornar ao seu site ao final do pagamento. Para mais informações, visite a seção [Redirecione o comprador para o seu site.](/developers/pt/docs/checkout-bricks/wallet-brick/additional-customization/preferences#bookmark_redirecione_o_comprador_para_o_seu_site).
=======
> Configure a integração

> NOTE
>
> Atenção
>
> Caso seja necessário fechar e abrir o Brick novamente (quando um usuário retorna ao carrinho para alterar algum detalhe da compra, por exemplo) é necessário eliminar a instância atual do Brick e criar uma nova quando for preciso mostrar o Brick novamente.
> Para isso, utilize o método `unmount` disponível no controller do Brick, sendo neste caso: `window.paymentBrickController.unmount()`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bricks</title>
</head>
<body>
<div id="paymentBrick_container"></div>
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
 const mp = new MercadoPago('YOUR_PUBLIC_KEY');
 const bricksBuilder = mp.bricks();
 const renderPaymentBrick = async (bricksBuilder) => {
   const settings = {
     initialization: {
       amount: 100, // valor total a ser pago
       preferenceId: '<PREFERENCE_ID>', // preferenceId gerado no backend
     },
     customization: {
       paymentMethods: {
         mercadoPago: 'all',
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
         // nesse caso, o usuário foi redirecionado para
         // a página do Mercado Pago para fazer o pagamento
       },
       onError: (error) => {
         // callback chamado para todos os casos de erro do Brick
         console.error(error);
       },
     },
   };
   window.paymentBrickController = await bricksBuilder.create(
     'payment',
     'paymentBrick_container',
     settings
   );
 };
 renderPaymentBrick(bricksBuilder);
</script>
</body>
</html>
```

> Os pagamentos com **Conta Mercado Pago e Parcelamento sem cartão de crédito** não precisam ser enviados via backend. Caso o usuário selecione esta opção como meio de pagamento, a `preferenceId` enviada na inicialização do Brick é responsável por redirecionar o comprador ao site do Mercado Pago, onde será feito o pagamento diretamente em nosso site. Para redirecionar o comprador de volta para o seu site, você pode configurar as `back_urls` como descrito [neste artigo.](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirecione_o_comprador_para_o_seu_site)
>>>>>>> 171219afab997d52db0f16ba5a9643a8d2b64ff3:guides/checkout-bricks/payment-brick/code-example-wallet-credits.pt.md
