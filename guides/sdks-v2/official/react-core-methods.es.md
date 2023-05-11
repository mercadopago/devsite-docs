# Métodos Core


Los Métodos Core son una forma de integración más transparente con Mercado Pago, que ofrecen métodos que acceden directamente a nuestras APIs y permiten la construcción de un formulario completamente personalizable. Además, en este tipo de integración, el integrador decide cuando buscar información sobre el tipo de documento y los datos de la tarjeta (emisor y cuotas), lo que permite una mayor flexibilidad en la construcción de la experiencia del flujo del checkout.

La captura de la información de la tarjeta y la creación del token de pago son realizadas desde Secure Fields. Estos consisten en campo seguros para ingresar información de tarjetas, que posibilitan la integración con tarjetas de crédito y débito sin la necesidad de procesar datos sensibles, además de facilitar la obtención del certificado PCI Compliance.

En la siguiente tabla, enumeramos los principales campos disponibles a través de la SDK-JS.

| Campo | Descripción |
|---|---|
| CardNumber | Número de tarjeta. |
| SecurityCode | Código de seguridad de la tarjeta. |
| ExpirationDate | Fecha de vencimiento de la tarjeta (puede ser MM/AA o MM/AAAA). |
| ExpirationMonth | Mes de vencimiento de la tarjeta. |
| ExpirationYear | Año de vencimiento de la tarjeta (puede ser AA o AAAA). |

A continuación, se muestra un ejemplo de cómo es posible utilizar estos campos.

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

Además de los campos descritos anteriormente, la SDK de React cuenta con métodos auxiliares para el desarrollo, que incluyen:

| Método | Descripción |
|---|---|
| getIdentificationTypes | Retorna todos los tipos de documento basados en la _public_key_ |
| getPaymentMethods | Retorna una lista de métodos de pago. |
| getIssuers | Retorna una lista de issuers. |
| getInstallments | Retorna todas las cuotas disponibles. |
| createCardToken | Retorna el token de la tarjeta. |

A continuación, se presentan ejemplos de cómo se pueden utilizar estos métodos.

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
> Para un detalle completo de los parámetros y retornos de cada función, consulta la [documentación oficial en Github](https://github.com/mercadopago/sdk-js/blob/main/API/core-methods.md).

