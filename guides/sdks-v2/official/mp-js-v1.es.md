---
content_section_with_media: 
 - title: MercadoPago.js  V1
 - message: Esta es la primera versión de la SDK, que ya fue descontinuada. Por favor, consulta la documentación de MercadoPago.js V2.
 - media_image: /sdk/mpjsv1.png
---

--- mini_landing_separator ---

>>>> Navegadores compatibles <<<<

![compatible navigators](sdk/mp-jsv1.png) 

--- mini_landing_separator ---

>>>> Instalación <<<<

Para instalar la SDK de frontend, deberás incluir a MercadoPago.js en el HTLM de tu aplicación, según el código a continuación.

[[[
```javascript
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```
]]]

Luego, debes agregar la Public Key de la cuenta que estás integrando para que esta pueda ser identificada al conectarse con Mercado Pago. 

[[[
```javascript
window.Mercadopago.setPublishableKey("YOUR_PUBLIC_KEY");
```
]]]

> Conoce más sobre la Public Key en [Credenciales.](/developers/es/docs/your-integrations/credentials)