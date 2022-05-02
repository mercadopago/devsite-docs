# Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

----[mla, mlb, mlu, mpe, mlm]----

[[[
 ```php
<?php
// SDK do Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Configure as credenciais
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
// Crie um objeto de preferência
$preference = new MercadoPago\Preference();
// Crie um item na preferência
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);
$preference->save();
?>
```
]]]

------------

----[mlc, mco]----

[[[
 ```php
<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';
// Configura credenciais
MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');
// Cria um objeto de preferência
$preference = new MercadoPago\Preference();
// Cria um item na preferência
$item = new MercadoPago\Item();
$item->title = 'Meu produto';
$item->quantity = 1;
$item->unit_price = 75;
$preference->items = array($item);
$preference->save();
?>
```
]]]

------------

## Associar Facebook Ads

É possível associar a preferência a um pixel para acompanhamento das conversões do Facebook Ads. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

[[[
```php
===
Adicione o código na preferência e substitua o valor <code>pixel_id</code> pelo seu identificador.
===
<?php
  // Criar um objeto preferência
  $preference = new MercadoPago\Preference();
  // Associar pixel do Facebook
  $preference->tracks = array(
    array(
      'type' => 'facebook_ad',
      'values'=> array(
        'pixel_id' => 'PIXEL_ID'
      )
    )
  );
  // ...
  // Salvar e postar a preferência
  $preference->save();
?>
```
]]]

## Associar Google Ads

É possível associar uma tag à preferência para acompanhamento das conversões do Google Ads. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

[[[
```php
===
Adicione o código na preferência e substitua os valores <code>CONVERSION\_ID</code> e <code>CONVERSION\_LABEL</code> pelos dados da sua _tag_.
===
<?php
  // Criar um objeto preferência
  $preference = new MercadoPago\Preference();
 
  // Associar sua tag do Google ads
  $preference->tracks = array(
    array(
        'type' => 'google_ad',
        'values' => array(
          'conversion_id' => 'CONVERSION_ID',
          'conversion_label' => 'CONVERSION_LABEL'
        )
    )
  );
  ...
  // Salvar e postar a preferência
  $preference->save();
?>
```
]]]