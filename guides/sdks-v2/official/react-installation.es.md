# SDK JS - React

Nuestro SDK de React es compatible con el estándar más actualizado de desarrollo web, además de ofrecer funciones y componentes que permiten una integración más simplificada con Mercado Pago.

Para utilizar el SDK de React, realiza la instalación a través de npm utilizando el siguiente código.

[[[
```bash
npm install @mercadopago/sdk-react

```
]]]

Después, agregue la _public key_ de la cuenta que se está integrando para que sea posible identificarla al conectarse con Mercado Pago.

> NOTE
>
> Importante
>
> Visita nuestra documentación de [Credenciales](/developers/pt/docs/credentials) para obtener más detalles sobre la _public key_.

[[[
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');

```
]]]

Al finalizar la instalación del SDK, puedes utilizar los siguientes módulos para la creación del Checkout.

----[mla]----

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Ofrece diferentes medios de pago entre los que podrán elegir tus clientes, con la posibilidad de guardar los datos de la tarjeta para futuras compras.
 - card_link: /developers/es/docs/checkout-bricks/payment-brick/default-rendering
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vinculá la cuenta de Mercado Pago y permití pagos logueados.
 - card_link: /developers/es/docs/checkout-bricks/wallet-brick/default-rendering
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Ofrece pagos con tarjeta de crédito y débito.
 - card_link: /developers/es/docs/checkout-bricks/card-payment-brick/default-rendering
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Informa a tus clientes los resultados del proceso de compra, luego de realizado el pago.
 - card_link: /developers/es/docs/checkout-bricks/status-screen-brick/default-rendering
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
 - card_description: Ofrece diferentes medios de pago entre los que podrán elegir tus clientes, con la posibilidad de guardar los datos de la tarjeta para futuras compras.
 - card_link: /developers/es/docs/checkout-bricks/payment-brick/default-rendering
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vincula la cuenta de Mercado Pago y permite pagos logueados.
 - card_link: /developers/es/docs/checkout-bricks/wallet-brick/default-rendering
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Ofrece pagos con tarjeta de crédito y débito.
 - card_link: /developers/es/docs/checkout-bricks/card-payment-brick/default-rendering
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Informa a tus clientes los resultados del proceso de compra, luego de realizado el pago.
 - card_link: /developers/es/docs/checkout-bricks/status-screen-brick/default-rendering
 - card_linkDescription: Saber más
 - card_pillText: DISPONIBLE
---

------------

> NOTE
>
> Importante
>
> Si es necesario agregar o modificar alguna lógica en el flujo de los métodos Core en React, consulta la documentación [Métodos Core](/developers/es/docs/sdks-library/client-side/sdk-js-react/core-methods-installation) en nuestra biblioteca de SDKs.

- [Métodos Core](/developers/es/docs/sdks-library/client-side/sdk-js-react/core-methods-installation)
