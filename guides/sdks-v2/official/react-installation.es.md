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

- [Checkout Bricks](/developers/es/docs/sdks-library/client-side/sdk-js-react/checkout-bricks-installation)
- [Métodos Core](/developers/es/docs/sdks-library/client-side/sdk-js-react/core-methods-installation)
- [Secure fields](/developers/es/docs/sdks-library/sdk-js-react/react/secure-fields-installation)
