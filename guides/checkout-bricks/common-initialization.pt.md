# Inicialização comum entre os Bricks

Para configurar a integração dos Bricks e ter um checkout responsivo, otimizado e configurável você precisa seguir os passos abaixo. Esses passos se aplicam à integração de todos os Bricks.

> CLIENT_SIDE
>
> h2
>
> Incluir biblioteca Mercado Pago

Utilize as nossas bibliotecas oficiais para acessar as funcionalidades do Mercado Pago com segurança desde seu frontend.

[[[
```html
// O código JS pode ser incluído em uma tag < script > ou um arquivo JS separado.
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```bash
npm install @mercadopago/sdk-react
```
]]]

## Inicializar biblioteca Mercado Pago

Em seguida, inicialize a biblioteca Mercado Pago para utilizar Checkout Bricks.

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

## Escolher o Brick

Com a biblioteca MercadoPago adicionada e configurada em seu projeto, você já está pronto para adicionar os Bricks em seu site. Para isso, escolha o Brick que melhor atende sua necessidade e siga os passos detalhados na seção correspondente ao Brick escolhido.

----[mla, mlb, mlu, mlc, mco, mpe]----

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Ofereça diferentes métodos de pagamento para os clientes escolherem, com a capacidade de salvar detalhes do cartão para compras futuras. Teste a demonstração do Brick antes de integrá-lo.
 - card_link: /developers/pt/docs/checkout-bricks/payment-brick/introduction
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vincule a conta Mercado Pago e permita pagamentos registrados. Teste a demonstração do Brick antes de integrá-lo.
 - card_link: /developers/pt/docs/checkout-bricks/wallet-brick/introduction
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Ofereça pagamentos com cartão de crédito e débito. Teste a demonstração do Brick antes de integrá-lo.
 - card_link: /developers/pt/docs/checkout-bricks/card-payment-brick/introduction
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Informe os clientes dos resultados do processo de compra após efetuar o pagamento. Teste a demonstração do Brick antes de integrá-lo.
 - card_link: /developers/pt/docs/checkout-bricks/status-screen-brick/introduction
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
---

------------
----[mlm]----

---
future_product_avaible: 
 - card_avaible: true
 - card_icon: Pay
 - card_title: Payment Brick
 - card_description: Ofereça diferentes métodos de pagamento para os clientes escolherem, com a capacidade de salvar detalhes do cartão para compras futuras. Teste a demonstração do Brick antes de integrá-lo.
 - card_link: /developers/pt/docs/checkout-bricks/payment-brick/introduction
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Wallet
 - card_title: Wallet Brick
 - card_description: Vincule a conta Mercado Pago e permita pagamentos registrados. Teste a demonstração do Brick antes de integrá-lo.
 - card_link: /developers/pt/docs/checkout-bricks/wallet-brick/introduction
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Card
 - card_title: Card Payment Brick
 - card_description: Ofereça pagamentos com cartão de crédito e débito. Teste a demonstração do Brick antes de integrá-lo.
 - card_link: /developers/pt/docs/checkout-bricks/card-payment-brick/introduction
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Loading
 - card_title: Status Screen Brick
 - card_description: Informe os clientes dos resultados do processo de compra após efetuar o pagamento. Teste a demonstração do Brick antes de integrá-lo.
 - card_link: /developers/pt/docs/checkout-bricks/status-screen-brick/introduction
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
 - card_avaible: true
 - card_icon: Check
 - card_title: Review & Confirm
 - card_description: Exiba um resumo de todo o processo de compra com as informações mais relevantes, assim os clientes poderão analisar antes de confirmar a compra.
 - card_link: /developers/pt/docs/checkout-bricks/payment-brick/advanced-features/add-confirmation-step
 - card_linkDescription: Saiba mais
 - card_pillText: DISPONÍVEL
---

------------