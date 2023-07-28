# Integrar Checkout Pro 

[TXTSNIPPET][/guides/snippets/chopro-integration-serverside]

> CLIENT_SIDE
>
> h2
>
> Añadir checkout

Una vez que hayas creado la preferencia en tu backend, deberás instalar el SDK de frontend de Mercado Pago en tu proyecto para agregar el botón de pago.

La instalación se realiza, básicamente, en **dos pasos**: agregar el SDK de Mercado Pago al proyecto con tus credenciales configuradas e iniciar el checkout desde la preferencia generada previamente.

1. Para incluir el SDK de Mercado Pago.js, agrega el siguiente código al HTML del proyecto o instale la biblioteca para ReactJs.

[[[
```html
// SDK MercadoPago.js
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```bash
npm install @mercadopago/sdk-react
```
]]]

Luego, inicialice la integración configurando tu [clave pública](/developers/pt/docs/checkout-pro/additional-content/your-integrations/credentials) usando el siguiente código JavaScript.

[[[
```Javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();
```
```react-jsx
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');
```
]]]

Para las integraciones de JavaScript/HTML, a través de CDN, deberá crear un contenedor de identificador para definir la ubicación donde se insertará el botón en la pantalla. La creación del contenedor se realiza insertando un elemento en el código HTML de la página en la que se representará el componente.

```html
 <div id="wallet_container"></div>
```

> NOTE
>
> Atención
>
> El valor que se muestra en la propiedad de ID a continuación es solo un ejemplo y se puede cambiar, pero siempre debe coincidir con el ID indicado en el paso de renderizado. 

2. Al finalizar el paso anterior, **inicializa tu checkout usando el ID de la preferencia previamente creada con el identificador del elemento donde se debe mostrar el botón**, si estás usando la integración `Javascript/HTML`, o por instanciando el componente, en el caso de la biblioteca `React`, como se muestra en los ejemplos a continuación.

[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
   },
});
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />
```
]]]

A continuación, podrá observar el botón de pago que se muestra en su página.

<center>

![wallet-render](cow/cow-render-wallet-es.png)

</center>

En el ejemplo anterior, se mostrará un botón de pago y será responsable por abrir el Checkout Pro. Si desea que la experiencia con Checkout Pro se realice en una **pestaña externa o de manera modal**, consulte la sección [Esquema de apertura](/developers/es/docs/checkout-pro/checkout-customization/user-interface/opening-schema)

> WARNING
>
> Importante
>
> Es sumamente importante prestar atención, al crear la preferencia, a la configuración de las `back_urls` porque serán las encargadas de guiar el flujo de regreso a su sitio web cuando se complete el pago. Es posible definir tres URL de retorno diferentes, para escenarios de pago pendiente, éxito o error. Para obtener más información, consulte la sección [URL de retorno.](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).\

Al crear un pago es posible recibir 3 estados diferentes: `Pendiente`, `Rechazado` y `Aprobado`. Para mantenerse al día con las actualizaciones, debes configurar tu sistema para recibir notificaciones de pago y otras actualizaciones de estado. Consulta [Notificaciones](/developers/es/docs/checkout-pro/additional-content/your-integrations/notifications) para obtener más detalles.

## Ejemplo de implementación

Consulta el [ejemplo de integración completa](http://github.com/mercadopago/checkout-payment-sample) en GitHub para **PHP** o **NodeJS** para descargar un proyecto básico para una implementación rápida de Checkout Pro en tu sitio.


---
future_product_avaible: 
 - card_avaible: false
 - card_icon: Pay
 - card_title: Checkout Pro para Web
 - card_description: Integra Checkout Pro para web.
 - card_link: /developers/es/docs/checkout-pro/integrate-checkout-pro/web
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: false
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vincula la cuenta de Mercado Pago y permite pagos logueados. Prueba la demostración del Brick antes de integrarlo.
 - card_link: /developers/es/docs/checkout-bricks/wallet-brick/introduction
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Card
 - card_title: Checkout Pro para Web
 - card_description: Integra Checkout Pro para Web
 - card_link:  /developers/es/docs/checkout-pro/integrate-checkout-pro/web
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Loading
 - card_title: Integra Checkout Pro para Mobile
 - card_description: Realiza integraciones de Checkout Pro en aplicaciones Mobile.
 - card_link: /developers/es/docs/checkout-pro/integrate-checkout-pro/mobile
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
---