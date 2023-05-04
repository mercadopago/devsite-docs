# Core methods

Core Methods are the most transparent integration method with Mercado Pago, offering methods that access our APIs directly and allow the construction of a fully customizable form.

In this type of integration, the integrator decides when to retrieve information about the document type, as well as card information (issuer and installments). This provides total flexibility in building the checkout flow experience.

In the table below, we list the main methods available through the SDK-JS.

| Method | Description |
|---|---|
| getIdentificationTypes | Returns all document types based on the public_key. |
| getPaymentMethods | Returns a list of payment methods. |
| getIssuers | Returns a list of issuers. |
| getInstallments | Returns all available installments. |
| createCardToken | Returns the card token. |

Below are examples of how to use them:

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

To collect card data and generate the token for payments, use **Secure Fields**.

> NOTE
>
> Important
>
> For a complete detail of the parameters and returns for each function, please refer to the official documentation on [Github](https://github.com/mercadopago/sdk-js/blob/main/API/core-methods.md).

