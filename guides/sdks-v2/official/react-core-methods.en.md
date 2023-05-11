# Core methods

Core Methods are the most transparent integration method with Mercado Pago, offering methods that access our APIs directly and allow the construction of a fully customizable form. In addition, in this type of integration, the integrator decides when to retrieve information about the document type and card data (issuer and installments), which allows greater flexibility in building the checkout flow experience.

The card information capture and payment token creation are made through the Secure Fields. They consist of secure fields to enter card information that enable the integration with credit and debit cards without the need to handle sensitive data, as well as facilitate obtaining the PCI Compliance certificate.

In the table below, we list the main fields available through the SDK-JS.

| Field | Description |
|---|---|
| CardNumber | Card number. |
| SecurityCode | Card security code. |
| ExpirationDate | Card expiration date (can be MM/YY or MM/YYYY). |
| ExpirationMonth | Card expiration month. |
| ExpirationYear | Card expiration year (can be YY or YYYY). |


Below are examples of how to use these fields.

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
     cardholderName: 'APRO',
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

In addition to the fields described above, the React SDK has auxiliary methods for development, including:

| Method | Description |
|---|---|
| getIdentificationTypes | Returns all document types based on the public_key. |
| getPaymentMethods | Returns a list of payment methods. |
| getIssuers | Returns a list of issuers. |
| getInstallments | Returns all available installments. |
| createCardToken | Returns the card token. |


Below are examples of how these methods can be used.

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
> Important
>
> For a complete detail of the parameters and returns for each function, please refer to the official documentation on [Github](https://github.com/mercadopago/sdk-js/blob/main/API/core-methods.md).
