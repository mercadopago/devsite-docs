# React

Para utilizar o SDK de React, você deve instalá-lo via npm conforme o código abaixo.

[[[
```bash
npm install @mercadopago/sdk-react

```
]]]

Em seguida, você deve adicionar a public-key da conta que você está integrando para que ela possa ser identificada ao conectar com o Mercado Pago. Saiba mais sobre a public key em [Credenciais](/developers/pt/docs/credentials).

[[[
```react-jsx
import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');

```
]]]

Tendo instalado a SDK, é possível utilizar os diferentes módulos oferecidos para criar seu Checkout.

## Checkout Bricks

Checkout Bricks é uma solução de checkout transparente, completa e modular, composta de módulos estilizados e customizáveis.

Os Bricks disponibilizados pela SDK são os seguintes:

| Brick | Descrição |
|---|---|
| Payment | Permite pagamentos com diversos meios de pagamento. |
| Card | Permite pagamentos com cartões. |
| Wallet | Permite pagamentos com Mercado Pago, incluindo parcelamento sem cartão. | 
| Status screen | Permite exibir o status do pagamento |

A seguir um exemplo de como é possível utilizá-los: 

[[[
```react-jsx
import React from 'react';
import { Payment, initMercadoPago } from '@mercadopago/sdk-react'


initMercadoPago('<YOUR_PUBLIC_KEY>');


const App = () => {
 const initialization = {
   amount: '<PAYMENT_AMOUT>'
 };
 const customization = {
   paymentMethods: {
     atm: 'all',
     ticket: 'all',
     bankTransfer: 'all',
     creditCard: 'all',
     debitCard: 'all',
     mercadoPago: 'all',
   },
 };


 return (
   <Payment
     initialization={initialization}
     customization={customization}
     onSubmit={async (param) => {
       console.log(param);
     }}
   />
 );
};


export default App;

```
]]]

Para integrar o Checkout Bricks utilizando a SDK, você pode consultar a documentação [nesta página](/developers/pt/docs/checkout-bricks/common-initialization). 

## Métodos Core

Os métodos Core são a forma de integração mais transparente com Mercado Pago, oferecendo métodos que acessam nossas APIs diretamente e permitem a construção de um formulário totalmente customizável.


Os métodos disponibilizados através da SDK-JS são os seguintes:

| Método | Descrição |
|---|---|
| getIdentificationTypes | Retorna todos os tipos de documento baseado na public_key |
| getPaymentMethods | Retorna uma lista com os métodos de pagamento |
| getIssuers | Retorna uma lista de issuers |
| getInstallments | Retorna todas as parcelas disponíveis |
| createCardToken | Retorna o token do cartão |

A seguir os exemplos de como é possível utilizá-los:

[[[
```react-jsx
import {
 getIdentificationTypes,
 getPaymentMethods,
 getIssuers,
 getInstallments,
 createCardToken,
} from '@mercadopago/sdk-react'


const identificationTypes = await getIdentificationTypes()
const paymentMethods = await getPaymentMethods({ bin: '50314332' })
const issuers = await getIssuers({ paymentMethodId: 'master', bin: '50314332' })
const installments = await getInstallments({
 amount: '1000',
 locale: 'pt-BR',
 bin: '50314332',
 processingMode: 'aggregator'
})
const cardToken = await createCardToken({
 cardholderName: 'APRO',
 identificationType: '<BUYER_IDENTIFICATION_TYPE>',
 identificationNumber: '<BUYER_IDENTIFICATION_NUMBER>',

 ```    
]]]

Para coletar os dados de cartão e gerar o token para pagamentos, utilize os Secure Fields.

> NOTE
>
> Importante
>
> Para um detalhamento completo dos parâmetros e retornos de cada função, consulte a [documentação oficial no Github](https://github.com/mercadopago/sdk-js/blob/main/API/core-methods.md).

## Secure Fields

Secure Fields são inputs seguros para a coleta de dados de cartão, que permitem a integração com cartões de crédito e débito sem a necessidade do manejo de dados sensíveis, e facilitam a obtenção do certificado PCI Compliance.

Os campos disponibilizados pela SDK são os seguintes:

| Campo | Descrição |
|---|---|
| CardNumber | Número do cartão |
| SecurityCode | Código de segurança do cartão |
| ExpirationDate | Data de expiração do cartão (pode ser MM/AA ou MM/AAAA) |
| ExpirationMonth | Mês de expiração do cartão |
| ExpirationYear | Ano de expiração do cartão (pode ser AA ou AAAA) |

A seguir um exemplo de como é possível utilizá-los:
[[[
```react-jsx
import { initMercadoPago, CardNumber } from '@mercadopago/sdk-react'

initMercadoPago('<YOUR_PUBLIC_KEY>');

const App = () => {
 return (
   <CardNumber />
 );
};

export default App;

```
]]]

Para mais informações sobre a utilização dos Secure Fields, consulte a [SDK de React](https://github.com/mercadopago/sdk-react).
