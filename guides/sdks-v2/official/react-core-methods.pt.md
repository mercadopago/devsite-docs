# Métodos Core

Métodos Core são a forma de integração mais transparente com Mercado Pago, oferecendo métodos que acessam nossas APIs diretamente e permitem a construção de um formulário totalmente customizável. Além disso, neste tipo de integração, o integrador decide quando buscar as informações sobre o tipo de documento e dados do cartão (emissor e parcelas), o que permite maior flexibilidade na construção da experiência do fluxo de checkout.

A captura de informações do cartão e a criação do token de pagamento são feitas a partir dos _Secure Fields_. Eles consistem em campos seguros para inserir informações do cartão que possibilitam a integração com cartões de crédito e débito sem a necessidade de tratar dados sensíveis, além de facilitar a obtenção do certificado PCI Compliance.

Na tabela abaixo listamos os principais campos disponibilizados através da SDK-JS.

| Campo | Descrição |
|---|---|
| CardNumber | Número do cartão |
| SecurityCode | Código de segurança do cartão |
| ExpirationDate | Data de expiração do cartão (pode ser MM/AA ou MM/AAAA) |
| ExpirationMonth | Mês de expiração do cartão |
| ExpirationYear | Ano de expiração do cartão (pode ser AA ou AAAA) |

A seguir, são apresentados exemplos de como utilizar esses campos.

[[[
```react-jsx
import React from 'react';
import {
  initMercadoPago,
  createCardToken,
  CardNumber,
  SecurityCode,
  ExpirationDate,
} from '@mercadopago/sdk-react';

initMercadoPago('YOUR-PUBLIC-KEY');

const App = () => {
 const cardToken = async () => {
   const response = await createCardToken({
     cardholderName: '<CARD_HOLDER_NAME>',
     identificationType: '<BUYER_IDENTIFICATION_TYPE>',
     identificationNumber: '<BUYER_IDENTIFICATION_NUMBER>',
   })
   console.log('Card Token Response = ', response)
 }
 return (
   <>
     <CardNumber placeholder='Card Number'/>
     <SecurityCode placeholder='Security Code' />
     <ExpirationDate placeholder='Expiration Date' mode='short'/>
     <button onClick={() => cardToken()}>Pay</button>
   </>
 );
};

export default App;

```    
]]]

Além dos campos descritos acima, a SDK de React possui métodos auxiliares para o desenvolvimento, incluindo:

| Método | Descrição |
|---|---|
| getIdentificationTypes | Retorna todos os tipos de documento baseado na _public_key_ |
| getPaymentMethods | Retorna uma lista com os métodos de pagamento. |
| getIssuers | Retorna uma lista de issuers. |
| getInstallments | Retorna todas as parcelas disponíveis. |
| createCardToken | Retorna o token do cartão. |

Abaixo, são apresentados exemplos de como esses métodos podem ser utilizados:

[[[
```react-jsx
import {
 getIdentificationTypes,
 getPaymentMethods,
 getIssuers,
 getInstallments,
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

```
]]]

> NOTE
>
> Importante
>
> Para um detalhamento completo dos parâmetros e retornos de cada função, consulte a [documentação oficial no Github](https://github.com/mercadopago/sdk-js/blob/main/API/core-methods.md).