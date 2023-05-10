# SDK JS - React

 Nossa SDK de React é compatível com o padrão mais atualizado de desenvolvimento web, além de oferecer funções e componentes que permitem uma integração mais simplificada com Mercado Pago.

Para utilizar o SDK de React, realize a instalação via npm utilizando o código abaixo.

[[[
```bash
npm install @mercadopago/sdk-react

```
]]]

Em seguida, adicione a _public-key_ da conta que está sendo integrada para que seja possível identificá-la ao conectar com o Mercado Pago. 

> NOTE
>
> Importante
>
> Veja [Credenciais](/developers/pt/docs/credentials) para mais detalhes sobre a _public key_.

[[[
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');

```
]]]

Ao finalizar a instalação da SDK, é possível utilizar os seguintes módulos para criação do Checkout.

- [Checkout Bricks](/developers/pt/docs/sdks-library/client-side/sdk-js-react/checkout-bricks-installation)
- [Métodos Core](/developers/pt/docs/sdks-library/client-side/sdk-js-react/core-methods-installation)
