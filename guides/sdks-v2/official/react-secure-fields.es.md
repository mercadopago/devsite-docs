# Secure fields

Los Secure Fields son inputs seguros para la recolección de datos de tarjeta que permiten la integración con tarjetas de crédito y débito sin necesidad de manejar datos sensibles, lo que facilita la obtención del certificado PCI Compliance.

A continuación, enumeramos los campos disponibles en el SDK.

| Campo | Descripción |
|---|---|
| CardNumber | Número de tarjeta. |
| SecurityCode | Código de seguridad de la tarjeta. |
| ExpirationDate | Fecha de vencimiento de la tarjeta (puede ser MM/AA o MM/AAAA). |
| ExpirationMonth | Mes de vencimiento de la tarjeta. |
| ExpirationYear | Año de vencimiento de la tarjeta (puede ser AA o AAAA). |

A continuación, se muestra un ejemplo de cómo es posible utilizarlos.

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
> Importante
>
> Para más información sobre la utilización de los Secure Fields, consulta la [SDK de React](https://github.com/mercadopago/sdk-react).
