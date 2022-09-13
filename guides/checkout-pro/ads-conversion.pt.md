# Conversão de anúncios

A análise da conversão de anúncios possibilita avaliar a relevância e retorno dos anúncios criados. Por isso, o Checkout Pro oferece integração com as plataformas Facebook Ads e Google Ads permitindo associar os pagamentos às campanhas de negócio.

----[mla, mlb]----

> NOTE
>
> Importante
>
> Só serão associados os pagamentos aprovados instantaneamente com cartões de crédito e débito, dinheiro no Mercado Pago ou Mercado Créditos.
------------


----[mlm, mlc, mco, mpe, mlu]----
> NOTE
>
> Nota
>
> Só serão associados os pagamentos aprovados instantaneamente com cartões de crédito e débito, ou com dinheiro no Mercado Pago.
------------


## Facebook Ads

A integração do Checkout Pro com o Facebook Ads é feita através da API de Preferências adicionando o `pixel_id`  dos seus anúncios ou através dos nossos SDKs.

Para integrar o Checkout Pro com o Facebook Ads via API, siga as etapas abaixo ou, se preferir, utilize um dos códigos disponíveis a seguir.


1. Envie um POST com o parâmetro "tracks" com os atributos `type` e `values` ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post).
2. Em `type` insira `facebook_ad`.
3. Em `value` insira o Pixel ID, que pode ser encontrado no painel de gerenciamento de anúncios do Facebook.
4. Execute a requisição.

[[[
```php
===
Adicione o código na preferência e substitua o valor <code>pixel_id</code> pelo seu identificador.
===
<?php
  // Criar um objeto preferencia
  $preference = new MercadoPago\Preference();

  // Associar seu pixel do Facebook
  $preference->tracks = array(
    array(
      'type' => 'facebook_ad',
      'values'=> array(
        'pixel_id' => 'PIXEL_ID'
      )
    )
  );

  // ...
  // Salvar e postar a preferencia
  $preference->save();
?>
```
```node
===
Adicione o código na preferência e substitua o valor <code>pixel_id</code> pelo seu identificador.
===
  // Criar um objeto preferencia
var preference = {

  // Asocia tu píxel de Facebook
  tracks: [
        {
          type: "facebook_ad",
          values: {
            "pixel_id": 'PIXEL_ID'
          }
        }
      ]
  //...
};
```
```java
===
Adicione o código na preferência e substitua o valor <code>pixel_id</code> pelo seu identificador.
===
  // Criar um objeto preferencia
PreferenceClient client = new PreferenceClient();

  // Associar seu pixel do Facebook
List<PreferenceTrackRequest> tracks = new ArrayList<>();
PreferenceTrackRequest trackFacebook = PreferenceTrackRequest.builder()
   .type("facebook_ad")
   .values(PreferenceTrackValuesRequest.builder().pixelId("PIXEL_ID").build())
   .build();
tracks.add(trackFacebook);

PreferenceRequest request = PreferenceRequest.builder().tracks(tracks).build();

Preference preference = new Preference()
        .appendTrack(trackFacebook);

  // Salvar e postar a preferencia
client.create(request);
```
```csharp
===
Adicione o código na preferência e substitua o valor <code>pixel_id</code> pelo seu identificador.
===
// Associe seu pixel do Facebook
var tracks = new List<PreferenceTrackRequest>
{
    new PreferenceTrackRequest
    {
        Type = "facebook_ad",
        Values = new PreferenceTrackValuesRequest
        {
            PixelId = "PIXEL_ID",
        },
    },
};

var request = new PreferenceRequest
{
    // ...
    Tracks = tracks,
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
===
Adicione o código na preferência e substitua o valor <code>pixel_id</code> pelo seu identificador.
===
# Associar seu pixel do Facebook
preference_data = {
    # ...
    "tracks": [
        {
            "type": "facebook_ad",
            "values": {
                "pixel_id": "PIXEL_ID"
            }
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
Adicione o código na preferência e substitua o valor <code>pixel_id</code> pelo seu identificador.
===

curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
  -d '{
	"items": [
        {
            "id_product":1,
            "quantity":1,
            "unit_price": 234.33,
            "titulo":"Mi producto"
        }
    ],
    "tracks": [
        {
            "type": "facebook_ad",
            "values": {
                "pixel_id": "PIXEL_ID"
            }
        }
    ]
}'
```
]]]


Ao concluir a configuração, um evento `Purchase` será associado ao pixel especificado quando um pagamento encaminhado pelo seu anúncio for aprovado.


> NOTE
>
> Importante
>
> Somente é possível configurar um único pixel por preferência. Teste o funcionamento da sua integração utilizando a extensão do Chrome Facebook Pixel Helper. Para mais informações, visite o site oficial do Facebook .


## Google Ads

A integração do Checkout Pro com o Google Ads é feita através da API de Preferências enviando as informações de identificação da conta do Google Ads no parâmetro `tracks` no body da requisição ou através dos nossos SDKs.

Para integrar o Checkout Pro com o Google Ads via API, siga as etapas abaixo ou, se preferir, utilize um dos códigos disponíveis a seguir.



1. Envie o parâmetro `tracks` com os atributos `type`, `conversion_id` e `conversion_label` ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post). 
2. Em `type`, insira `google_ad`.
3. Em `CONVERSION_ID` e `CONVERSION_LABEL`, insira o seu ID de conversão e o Rótulo de conversão disponíveis na conta do Google Analytics.
4. Execute a requisição.


[[[
```php
===
Adicione o código na preferência e substitua os valores <code>CONVERSION\_ID</code> e <code>CONVERSION\_LABEL</code> pelos dados da sua _tag_.
===

<?php
  // Criar um objeto preferencia
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
  // Salvar e postar a preferencia
  $preference->save();
?>
```
```node
===
Adicione o código na preferência e substitua os valores <code>CONVERSION\_ID</code> e <code>CONVERSION\_LABEL</code> pelos dados da sua _tag_.
===
  // Criar um objeto preferencia
var preference = {
 
  // Associar sua tag do Google ads
  tracks: [
        {
            type: "google_ad",
            values: {
              conversion_id: "CONVERSION_ID",
              conversion_label: "CONVERSION_LABEL"
            } 
        }
      ]
  ...
};
```
```java
===
Adicione o código na preferência e substitua os valores <code>CONVERSION\_ID</code> e <code>CONVERSION\_LABEL</code> pelos dados da sua _tag_.
===
  // Criar um objeto preferencia
PreferenceClient client = new PreferenceClient();

  // Associar sua tag do Google ads
List<PreferenceTrackRequest> tracks = new ArrayList<>();
PreferenceTrackRequest trackGoogle =
   PreferenceTrackRequest.builder()
       .type("google_ad")
       .values(
           PreferenceTrackValuesRequest.builder()
               .conversionId("CONVERSION_ID")
               .conversionLabel("CONVERSION_LABEL")
               .build())
       .build();
tracks.add(trackGoogle);

PreferenceRequest request = PreferenceRequest.builder().tracks(tracks).build();

  // Salvar e postar a preferencia
client.create(request);
```
```csharp
===
Adicione o código na preferência e substitua os valores <code>CONVERSION\_ID</code> e <code>CONVERSION\_LABEL</code> pelos dados da sua _tag_.
===
// Associe sua tag do Google ads
var tracks = new List<PreferenceTrackRequest>
{
    new PreferenceTrackRequest
    {
        Type = "facebook_ad",
        Values = new PreferenceTrackValuesRequest
        {
            ConversionId = "CONVERSION_ID",
            ConversionLabel = "CONVERSION_LABEL",
        },
    },
};

var request = new PreferenceRequest
{
    // ...
    Tracks = tracks,
};

var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
```python
===
Adicione o código na preferência e substitua os valores <code>CONVERSION\_ID</code> e <code>CONVERSION\_LABEL</code> pelos dados da sua _tag_.
===
# Associar sua tag do Google ads
preference_data = {
    # ...
    "tracks": [
        {
            "type": "google_ad",
            "values": {
                "conversion_id": "CONVERSION_ID",
                "conversion_label": "CONVERSION_LABEL"
            }
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
```curl
===
Adicione o código na preferência e substitua os valores <code>CONVERSION\_ID</code> e <code>CONVERSION\_LABEL</code> pelos dados da sua _tag_.
===
curl -X POST \
  'https://api.mercadopago.com/checkout/preferences' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
  -d '{
	"items": [
        {
            "id_product":1,
            "quantity":1,
            "unit_price": 234.33,
            "titulo":"Mi producto"
        }
    ],
    "tracks": [
        {
            "type": "google_ad",
            "values": {
                "conversion_id", "CONVERSION_ID",
                "conversion_label", "CONVERSION_LABEL"
            }
        }
    ]
}'
```
]]]



Ao concluir a configuração, uma conversão será associada à tag especificada quando um pagamento encaminhado pelo seu anúncio for aprovado.


> NOTE
>
> Importante
>
> Somente é possível configurar uma única tag por preferência. Para mais informações sobre as tags de conversões do Google Ads, visite o site oficial do Google .
