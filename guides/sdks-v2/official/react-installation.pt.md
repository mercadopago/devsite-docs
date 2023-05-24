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

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Ofereça diferentes métodos de pagamento para os clientes escolherem, com a capacidade de salvar detalhes do cartão para compras futuras.
 - card_link: /developers/pt/docs/checkout-bricks/payment-brick/default-rendering
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vincule a conta Mercado Pago e permita pagamentos registrados.
 - card_link: /developers/pt/docs/checkout-bricks/wallet-brick/default-rendering
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Ofereça pagamentos com cartão de crédito e débito.
 - card_link: /developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Informe os clientes dos resultados do processo de compra após efetuar o pagamento.
 - card_link: /developers/pt/docs/checkout-bricks/status-screen-brick/default-rendering
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
---

> NOTE
>
> Importante
>
> Caso seja necessário adicionar ou modificar alguma lógica no fluxo dos métodos Core em React, consulte a documentação [Métodos Core](/developers/pt/docs/sdks-library/client-side/sdk-js-react/core-methods-installation) em nossa biblioteca de SDKs.
