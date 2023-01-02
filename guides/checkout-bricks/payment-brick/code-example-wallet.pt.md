# Exemplo de código (Conta Mercado Pago)
 
Para facilitar e otimizar o seu processo de integração, veja abaixo um exemplo completo de como incluir a Conta Mercado Pago como meio de pagamento com o Payment Brick.

> SERVER_SIDE
>
> h2
>
> Crie sua preferência

----[mlu, mpe]----
[[[
```php
<?php
// SDK do Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Adicione as credenciais
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>

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
// SDK do Mercado Pago
const mercadopago = require ('mercadopago');
// Adicione as credenciais
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
 
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
// SDK do Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Adicione as credenciais
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");

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
# SDK do Mercado Pago
require 'mercadopago'
# Adicione as credenciais
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

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
// SDK do Mercado Pago
 using MercadoPago.Config;
 // Adicione as credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Cria o objeto de request da preferência
var request = new PreferenceRequest
{
  // o Purpose = 'wallet_purchase', permite apenas pagamentos logados
  // para permitir pagamentos como guest, você pode omitir essa propriedade
    Purpose = 'wallet_purchase',
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "BRL",
            UnitPrice = 75.56m,
        },
    },
};

// Cria a preferência usando o client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# SDK do Mercado Pago
import mercadopago
# Adicione as credenciais
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Cria um item na preferência
preference_data = {
  # o "purpose": "wallet_purchase", permite apenas pagamentos logados
  # para permitir pagamentos como guest, você pode omitir essa propriedade
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "My Item",
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

------------
----[mlc, mco]----
[[[
```php
<?php
// SDK do Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Adicione as credenciais
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
?>

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
// SDK do Mercado Pago
const mercadopago = require ('mercadopago');
// Adicione as credenciais
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
 
// Cria um objeto de preferência
let preference = {
  // o "purpose": "wallet_purchase" permite apenas pagamentos logados
  // para permitir pagamentos como guest você pode omitir essa propriedade
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
// SDK do Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Adicione as credenciais
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");

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
# SDK do Mercado Pago
require 'mercadopago'
# Adicione as credenciais
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')

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
// SDK do Mercado Pago
 using MercadoPago.Config;
 // Adicione as credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Cria o objeto de request da preferência
var request = new PreferenceRequest
{
  // o Purpose = 'wallet_purchase', permite apenas pagamentos logados
  // para permitir pagamentos como guest, você pode omitir essa propriedade
    Purpose = 'wallet_purchase',
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "BRL",
            UnitPrice = 75.56m,
        },
    },
};

// Cria a preferência usando o client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
# SDK do Mercado Pago
import mercadopago
# Adicione as credenciais
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")

# Cria um item na preferência
preference_data = {
  # o "purpose": "wallet_purchase", permite apenas pagamentos logados
  # para permitir pagamentos como guest, você pode omitir essa propriedade
    "purpose": "wallet_purchase",
    "items": [
        {
            "title": "My Item",
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

------------

> CLIENT_SIDE
>
> h2
>
> Configure a integração

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

> Os pagamentos com **Conta Mercado Pago** não precisam ser enviados via backend. Caso o usuário selecione esta opção como meio de pagamento, a `preferenceId` enviada na inicialização do Brick é responsável por redirecionar o comprador ao site do Mercado Pago, onde será feito o pagamento diretamente em nosso site. Para redirecionar o comprador de volta para o seu site, você pode configurar as `back_urls` como descrito [neste artigo.](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/preferences#bookmark_redirecione_o_comprador_para_o_seu_site)