# Conversión de anuncios

El análisis de conversión de anuncios permite evaluar la relevancia y el retorno de los anuncios creados. Por ello, Checkout Pro ofrece integración con las plataformas Facebook Ads y Google Ads, permitiéndote asociar pagos a campañas comerciales.

> NOTE
>
> Importante
>
> Solo se asociarán pagos aprobados al instante con tarjetas de crédito y débito, efectivo en Mercado Pago o Mercado Créditos.

## Facebook Ads

La integración de Checkout Pro con los anuncios de Facebook se realiza a través de la API de Preferencias agregando el `pixel_id` de sus anuncios o a través de nuestros SDK.

Para integrar Checkout Pro con Facebook Ads via API, sigue los pasos a continuación o, si lo prefieres, consulta [SDKs](/developers/es/guides/sdks-v2/official/landing)) para realizar la integración usando nuestras bibliotecas.

1. Envía un POST con el parámetro "tracks" con los atributos "type" y "values" al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post).
2. En "type" ingresa 'facebook_ad'.
3. En "value" ingresa el Pixel ID, que puede ser encontrado en el panel de administración de anuncios de Facebook.
4. Ejecuta la solicitud.

Una vez completada la configuración, se asociará un evento de "Purchase" con el píxel especificado cuando se apruebe un pago reenviado por tu anuncio.

## Google Ads

La integración de Checkout Pro con Google Ads se realiza a través de la API de Preferencias mediante el envío de la información de identificación de la cuenta de Google Ads en el parámetro `tracks` en el body de la solicitud o a través de nuestros SDK.

Para integrar Checkout Pro con Google Ads via API, sigue los pasos a continuación o, si lo prefieres, consulta [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/sdks) para realizar la integración usando nuestras bibliotecas.

1. Envía el parámetro `tracks` con los atributos `type`, `conversion_id` y `conversion_label` al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post). 
2. En `type`, ingresa `google_ad`.
3.  En `CONVERSION_ID` y  `CONVERSION_LABEL`, ingresa tu ID de conversión y Etiqueta de conversión disponibles en tu cuenta de Google Analytics.
4. Ejecuta la solicitud.

Una vez completada la configuración, se asociará una conversión con la etiqueta especificada cuando se apruebe un pago reenviado por su anuncio.