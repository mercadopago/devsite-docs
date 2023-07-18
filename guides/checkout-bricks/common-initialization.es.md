# Inicio común entre los Bricks

Para configurar la integración de Bricks y tener un pago receptivo, optimizado y configurable, debe seguir los pasos a continuación. Estos pasos se aplican a la integración de todos los Bricks.

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

Con la biblioteca de MercadoPago agregada y configurada en su proyecto, está listo para agregar Bricks a su sitio web. Para ello, elige el Brick que mejor se adapte a tus necesidades y sigue los pasos detallados en el apartado correspondiente al Brick elegido.

----[mla]----

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Ofrece diferentes medios de pago entre los que podrán elegir tus clientes, con la posibilidad de guardar los datos de la tarjeta para futuras compras. Integra este Brick y testea su experiencia.
 - card_link: /developers/es/docs/checkout-bricks/payment-brick/introduction
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vinculá la cuenta de Mercado Pago y permití pagos logueados. Integra este Brick y testea su experiencia.
 - card_link: /developers/es/docs/checkout-bricks/wallet-brick/introduction
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Ofrece pagos con tarjeta de crédito y débito. Integra este Brick y testea su experiencia.
 - card_link: /developers/es/docs/checkout-bricks/card-payment-brick/introduction
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Informa a tus clientes los resultados del proceso de compra, luego de realizado el pago. Integra este Brick y testea su experiencia.
 - card_link: /developers/es/docs/checkout-bricks/status-screen-brick/introduction
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
---

------------
----[mlb, mlm, mpe, mco, mlc, mlu]----

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Ofrece diferentes medios de pago entre los que podrán elegir tus clientes, con la posibilidad de guardar los datos de la tarjeta para futuras compras. Integra este Brick y testea su experiencia.
 - card_link: /developers/es/docs/checkout-bricks/payment-brick/introduction
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vincula la cuenta de Mercado Pago y permite pagos logueados. Integra este Brick y testea su experiencia.
 - card_link: /developers/es/docs/checkout-bricks/wallet-brick/introduction
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Ofrece pagos con tarjeta de crédito y débito. Integra este Brick y testea su experiencia.
 - card_link: /developers/es/docs/checkout-bricks/card-payment-brick/introduction
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Informa a tus clientes los resultados del proceso de compra, luego de realizado el pago. Integra este Brick y testea su experiencia.
 - card_link: /developers/es/docs/checkout-bricks/status-screen-brick/introduction
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
---

------------