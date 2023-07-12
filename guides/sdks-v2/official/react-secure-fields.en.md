# Secure fields

Secure Fields are secure inputs for collecting card data that allow integration with credit and debit cards without the need to handle sensitive data, which facilitates obtaining the PCI Compliance certificate.

Below we list the fields available in the SDK.

| Field | Description |
|---|---|
| CardNumber | Card number. |
| SecurityCode | Card security code. |
| ExpirationDate | Card expiration date (can be MM/YY or MM/YYYY). |
| ExpirationMonth | Card expiration month. |
| ExpirationYear | Card expiration year (can be YY or YYYY). |

Here's an example of how you can use them:


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

> NOTE
>
> Important
>
> For more information on using Secure Fields, see the [React SDK](https://github.com/mercadopago/sdk-react).
