> CLIENT_SIDE
>
> h1
>
> Añadir checkout

Primero, asegúrate de haber **creado la [preferencia en tu backend](/developers/es/docs/checkout-pro/integrate-preferences)**.

Luego, deberás instalar el SDK de frontend de Mercado Pago en tu proyecto para agregar el botón de pago.

La instalación se realiza, básicamente, en **dos pasos**: 

1. [Agregar el SDK de Mercado Pago al proyecto con tus credenciales configuradas](/developers/es/docs/checkout-pro/integrate-checkout-pro/web#bookmark_agregar_el_sdk_de_mercado_pago_al_proyecto)
2. [Iniciar el checkout desde la preferencia](/developers/es/docs/checkout-pro/integrate-checkout-pro/web#bookmark_iniciar_el_checkout_desde_la_preferencia)

> CLIENT_SIDE
>
> h2
>
> Agregar el SDK de Mercado Pago al proyecto


Para incluir el SDK de Mercado Pago.js, agrega el siguiente código al HTML del proyecto o instala la biblioteca para ReactJs.

[[[
```html
// SDK MercadoPago.js
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```bash
npm install @mercadopago/sdk-react
```
]]]

Luego, inicializa la integración configurando tu [clave pública](/developers/es/docs/checkout-pro/additional-content/your-integrations/credentials) usando el siguiente código JavaScript.

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

Para las integraciones de JavaScript/HTML, a través de CDN, deberás crear un contenedor de identificador para definir la ubicación donde se insertará el botón en la pantalla. La creación del contenedor se realiza insertando un elemento en el código HTML de la página en la que se representará el componente.

```html
 <div id="wallet_container"></div>
```

> NOTE
>
> Atención
>
> El valor que se muestra en la propiedad de ID a continuación es solo un ejemplo y se puede cambiar, pero siempre debe coincidir con el ID indicado en el paso de renderizado. 

> CLIENT_SIDE
>
> h2
>
> Iniciar el checkout desde la preferencia

Al finalizar el paso anterior, **inicializa tu checkout usando el ID de la preferencia previamente creada con el identificador del elemento donde se debe mostrar el botón**, si estás usando la integración `Javascript/HTML`, o instanciando el componente, en el caso de la biblioteca `React`, como se muestra en los ejemplos a continuación.

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

A continuación, encontrarás el botón de pago que se muestra en tu página.

<center>

![wallet-render](cow/cow-render-wallet-es.png)

</center>

En el ejemplo anterior, se rederizará un botón de pago que será responsable por abrir el Checkout Pro. Si deseas que la experiencia con Checkout Pro se realice en una **pestaña externa o de manera modal**, consulta la sección [Esquema de apertura](/developers/es/docs/checkout-pro/checkout-customization/user-interface/opening-schema)

## Configurar las back_url

Al final del proceso de pago, es posible redirigir al comprador a otro entorno del sitio a través del atributo `back_urls` que se configura al crear la preferencia. Las `back_urls` serán las encargadas de guiar el flujo de regreso a tu sitio web cuando se complete el pago. Es posible definir tres URL de retorno diferentes que corresponden a escenarios de pago pendiente, éxito o error. 

Para obtener más información, consulta la sección [URL de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

> WARNING
>
> Importante
>
> No utilices dominios locales en el valor `back_urls`, tales como 'localhost/' o '127.0.0.1' con o sin puerto especificado. Recomendamos usar un servidor con dominio nombrado (DNS) o IPs de desarrollo para poder regresar al sitio después del pago. De lo contrario, aparecerá el mensaje de "Algo ha salido mal" al finalizar el proceso de compra.

## Recibir estados de pago

Al crear un pago es posible recibir 3 estados diferentes: `Pendiente`, `Rechazado` y `Aprobado`. Para mantenerse al día con las actualizaciones, debes configurar tu sistema para recibir notificaciones de pago y otras actualizaciones de estado. Consulta [Notificaciones](/developers/es/docs/checkout-pro/additional-content/your-integrations/notifications) para obtener más detalles.

## Ejemplo de implementación

Consulta el [ejemplo de integración completa](http://github.com/mercadopago/checkout-payment-sample) en GitHub para **PHP** o **NodeJS** para descargar un proyecto básico para una implementación rápida de Checkout Pro en tu sitio.

