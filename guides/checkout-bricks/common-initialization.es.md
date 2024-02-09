# Inicio común

Para configurar la integración de Bricks y tener un pago receptivo, optimizado y configurable, proporcionamos en los pasos a continuación el proceso de configuración inicial común para todos los Bricks.

> CLIENT_SIDE
>
> h2
>
> Incluir la biblioteca de Mercado Pago

Utiliza nuestras bibliotecas oficiales para acceder a las funcionalidades de Mercado Pago de forma segura desde tu frontend.

[[[
```html
// El código JS se puede incluir en una etiqueta < script > o en un archivo JS separado.
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```bash
npm install @mercadopago/sdk-react
```
]]]

## Inicializar biblioteca de Mercado Pago

A continuación, inicialice la biblioteca de Mercado Pago para utilizar Checkout Bricks.

[[[
```Javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();
```
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react';
initMercadoPago('YOUR_PUBLIC_KEY');
```
]]]

## Eligir el Brick

Con la biblioteca de Mercado Pago agregada y configurada en su proyecto, está listo para agregar Bricks a su sitio web. Para ello, elige el Brick que mejor se adapte a tus necesidades y sigue los pasos detallados en el apartado correspondiente al Brick elegido.

----[mlb, mlu, mlc, mco, mpe]----

---
future_product_avaible: 
 - title: Bricks
 - description: Conoce todos los módulos de Checkout Bricks y su disponibilidad.
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Ofrece diferentes medios de pago a sus clientes, con la posibilidad de guardar datos de la tarjeta para futuras compras. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/payment-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/payment-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vincula la cuenta de Mercado Pago y permite pagos logueados. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/wallet-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/wallet-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Ofrece pagos con tarjeta de crédito y débito. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/card-payment-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/card-payment-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Informa a tus clientes los resultados del proceso de compra, luego de realizado el pago. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/status-screen-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/status-screen-brick
 - card_linkProofDescription: Acceder a demostración
---

------------
----[mla]----

---
future_product_avaible: 
 - title: Bricks
 - description: Conoce todos los módulos de Checkout Bricks y su disponibilidad.
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Ofrece diferentes medios de pago a sus clientes, con la posibilidad de guardar datos de la tarjeta para futuras compras. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/payment-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/payment-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vincula la cuenta de Mercado Pago y permite pagos logueados. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/wallet-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/wallet-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Ofrece pagos con tarjeta de crédito y débito. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/card-payment-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/card-payment-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Informa a tus clientes los resultados del proceso de compra, luego de realizado el pago. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/status-screen-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/status-screen-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: User
 - card_title: Brand Brick
 - card_description: Comunica diferentes mensajes relacionados con las formas de pago disponibles a través de Mercado Pago en tu tienda.
 - card_button: /developers/es/docs/checkout-bricks/brand-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_avaible: true
 - card_icon: Check
 - card_title: Review & Confirm
 - card_description: Muestra un resumen de todo el proceso de compra, con la información más relevante, para que tus clientes puedan revisar antes de confirmar la compra.
 - card_button: /developers/es/docs/checkout-bricks/payment-brick/advanced-features/add-confirmation-step
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
---

------------
----[mlm]----

---
future_product_avaible: 
 - title: Bricks
 - description: Conoce todos los módulos de Checkout Bricks y su disponibilidad.
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Ofrece diferentes medios de pago a sus clientes, con la posibilidad de guardar datos de la tarjeta para futuras compras. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/payment-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/payment-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vincula la cuenta de Mercado Pago y permite pagos logueados. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/wallet-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/wallet-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Ofrece pagos con tarjeta de crédito y débito. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/card-payment-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/card-payment-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Informa a tus clientes los resultados del proceso de compra, luego de realizado el pago. Prueba la demostración del Brick antes de integrarlo.
 - card_button: /developers/es/docs/checkout-bricks/status-screen-brick/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: true
 - card_linkProof: /developers/es/live-demo/status-screen-brick
 - card_linkProofDescription: Acceder a demostración
 - card_avaible: true
 - card_icon: Check
 - card_title: Review & Confirm
 - card_description: Muestra un resumen de todo el proceso de compra, con la información más relevante, para que tus clientes puedan revisar antes de confirmar la compra.
 - card_button: /developers/es/docs/checkout-bricks/payment-brick/advanced-features/add-confirmation-step
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
---

------------