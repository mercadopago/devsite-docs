# Conversión de anuncios

El análisis de conversión de anuncios permite evaluar la relevancia y el retorno de los anuncios creados. Por ello, Checkout Pro ofrece integración con las plataformas Facebook Ads y Google Ads, permitiéndote asociar pagos a campañas comerciales.

----[mla, mlb]----

> NOTE
>
> Importante
>
> Solo se asociarán pagos aprobados al instante con tarjetas de crédito y débito, efectivo en Mercado Pago o Mercado Créditos.
------------


----[mlm, mlc, mco, mpe, mlu]----
> NOTE
>
> Nota
>
> Solo se asociarán pagos aprobados al instante con tarjetas de crédito y débito, o con efectivo en Mercado Pago.
------------


## Facebook Ads

Al crear una preferencia, puedes asociarla con un pixel (identificador) para rastrear las conversiones de anuncios de Facebook. 

Para integrar Checkout Pro con los anuncios de Facebook siga los pasos a continuación.

> Además de la SDKs, también es posible integrar los anuncios de Facebook Ads con Checkout Pro a través de la API de referencias. Para eso, envía el parámetro `track` con los atributos `type` y `values` informando tu *facebook_id* y el *pixel ID* repectivamente, al endpoint  [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecuta el request.

[[[
```php
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
<?php
  // Crear un objeto preferencia
  $preference = new MercadoPago\Preference();

  // Asocia tu píxel de Facebook
  $preference->tracks = array(
    array(
      'type' => 'facebook_ad',
      'values'=> array(
        'pixel_id' => 'PIXEL_ID'
      )
    )
  );

  // ...
  // Guardar y postear la preferencia
  $preference->save();
?>
```
```node
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
// Configura tu preferencia
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
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
// Crea un objeto preferencia
PreferenceClient client = new PreferenceClient();

// Asocia tu píxel de Facebook
List<PreferenceTrackRequest> tracks = new ArrayList<>();
PreferenceTrackRequest trackFacebook = PreferenceTrackRequest.builder()
   .type("facebook_ad")
   .values(PreferenceTrackValuesRequest.builder().pixelId("PIXEL_ID").build())
   .build();
tracks.add(trackFacebook);

PreferenceRequest request = PreferenceRequest.builder().tracks(tracks).build();

// Guardar y postear la preferencia
client.create(request);
```
```csharp
===
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
// Asocia tu píxel de Facebook
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
Agrega el código en la preferencia y reemplaza el valor <code>PIXEL_ID</code> por tu identificador.
===
# Asocia tu píxel de Facebook
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
]]]



Una vez completada la configuración, se asociará un evento de `purchase` con el _píxel_ especificado cuando se apruebe un pago reenviado por tu anuncio.



> NOTE
>
> Importante
>
> Solo es posible configurar un solo píxel por preferencia. Pruebe cómo funciona su integración con la extensión de Chrome Facebook Pixel Helper. Para obtener más información, visite el [sitio oficial de Facebook](https://www.facebook.com/business/help/742478679120153?id=1205376682832142).


## Google Ads

Al crear una preferencia, puedes asociarla con una tag (identificador) para realizar un seguimiento de las conversiones de Google Ads. 

Para integrar Checkout Pro con Google Ads, use uno de los códigos disponibles a continuación.

> Además de las SDKs, también es posible integrar Google Ads con Checkout Pro a través de la API de preferencias. Para eso, envía el parámetro `tracks` con los atributos `type`, `conversion_id` y `conversion_label`, informando tu *conversion_id* y el *conversion_label* disponible en tu cuenta de Google, al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post), y ejecuta la solicitud.


[[[
```php
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===

<?php
  // Crear un objeto preferencia
  $preference = new MercadoPago\Preference();
 
  // Asocia tu etiqueta
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
  // Guardar y postear la preferencia
  $preference->save();
?>
```
```node
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
// Configura tu preferencia
var preference = {
 
  // Asocia tu etiqueta
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
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
// Crea un objeto preferencia
PreferenceClient client = new PreferenceClient();

// Asocia tu etiqueta
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

// Guardar y postear la preferencia
client.create(request);
```
```csharp
===
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
// Asocia tu etiqueta
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
Agrega el código en la preferencia y reemplaza los valores <code>CONVERSION\_ID</code> y <code>CONVERSION\_LABEL</code> por los datos de tu _tag_.
===
# Asocia tu etiqueta
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
]]]


Una vez completada la configuración, se asociará una conversión con la _tag_ especificada cuando se apruebe un pago reenviado para tu anuncio.


> NOTE
>
> Importante
>
> Solo es posible configurar una sola _tag_ por preferencia. Para obtener más información sobre las _tags_ de conversión de Google Ads, visite el [sitio oficial de Google](https://support.google.com/google-ads?hl=es-419#topic=7456157).
