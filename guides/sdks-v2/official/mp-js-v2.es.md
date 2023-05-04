---
content_section_with_media: 
 - title: SDK JS - ES Module
 - message: La versión 2 de la SDK client-side tiene funciones basadas en Promises. Además, trae una interfaz de desarrollador renovada y presenta un manejo más eficiente de errores. 
 - media_image: /sdk/mpjsv1.png
---

--- mini_landing_separator ---

>>>> Navegadores compatibles <<<<

![Compatible navigators](sdk/mp-jsv2.png)

---
bullet_section_with_media: 
 - title: Prevención de fraudes
 - type: normal
 - message: Esta versión posee una funcionalidad que, con base en el análisis del comportamiento del comprador, identifica si una transacción es fraudulenta o sospechosa. Este análisis tiene como objetivo mejorar la aprobación de los pagos. Si lo deseas, puedes desactivar esta función. Consulta nuestra [referencia técnica](https://github.com/mercadopago/sdk-js#api).
 - image: /sdk/mpjsv2-3.png
---


--- mini_landing_separator ---

>>>> Instalación <<<<

Para instalar la SDK de frontend, debes incluir MercadoPago.js en el HTML de tu aplicación, tal como se muestra en el código a continuación.

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

Luego, debes agregar la Public Key de la cuenta que estás integrando para que esta pueda ser identificada al conectarse con Mercado Pago. 

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
