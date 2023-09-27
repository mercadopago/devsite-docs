# Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](/developers/pt/reference/preferences/_checkout_preferences/post).

[[[
 ```php
<?php
  $client = new PreferenceClient();
  $preference = $client->create([
    "external_reference" => "teste",
    "items"=> array(
      array(
        "id" => "4567",
        "title" => "Dummy Title",
        "description" => "Dummy description",
        "picture_url" => "http://www.myapp.com/myimage.jpg",
        "category_id" => "eletronico",
        "quantity" => 1,
        "currency_id" => "BRL",
        "unit_price" => 100
      )
    ),
    "payment_methods" => [
    "default_payment_method_id" => "master",
    "excluded_payment_types" => array(
      array(
        "id" => "ticket"
      )
    ),
    "installments"  => 12,
    "default_installments" => 1
  ]);
?>
```
]]]

# Pesquisar preferências

É possível encontrar todas as informações das preferências geradas através de filtros específicos ou por uma faixa de datas específica utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Pesquisar preferências](/developers/pt/reference/preferences/_checkout_preferences_search/get).

[[[
```php
<?php
  $client = new PreferenceClient();

  $search_request = new MPSearchRequest(1, 0, [
    "sponsor_id" => "0",
    "external_reference" => "",
    "site_id" => "MLA",
    "marketplace" => "NONE"
  ]);
  $client->search($search_request);
?>
```
]]]

# Obter preferência

É possível obter todas as informações de pagamento de um produto ou serviço com a identificação da preferência desejada utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, acesse a API [Obter preferência](/developers/pt/reference/preferences/_checkout_preferences_id/get).

[[[
```php
<?php
  $client = new PreferenceClient();
  $client->get("123456789");
?>
```
]]]

## Atualizar preferência

É possível atualizar os detalhes de uma preferência de pagamento através do ID da preferência. Para detalhamento dos parâmetros de requisição, acesse a API [Atualizar preferência](/developers/pt/reference/preferences/_checkout_preferences_id/put).

[[[
```php
<?php
  $client = new PreferenceClient();

  $preference = $client->update('123456789', [
    "items"=> array(
        array(
            "id" => "4567",
            "title" => "Dummy Title",
            "quantity" => 1,
            "unit_price" => 100
       )
    ),
  ]);

?>
```
]]]

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