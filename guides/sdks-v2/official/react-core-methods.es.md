# Métodos core

Los Métodos Core son la forma de integración más transparente que ofrece Mercado Pago. Son métodos que acceden directamente a nuestras APIs y permiten la construcción de un formulario totalmente personalizable.

En este tipo de integración, el integrador decide cuándo obtener la información sobre el tipo de documento, además de aquella de la tarjeta (emisor y cuotas). De esta manera, tiene total flexibilidad en la construcción de la experiencia del flujo de pago.

En la tabla siguiente se listan los principales métodos disponibles a través del SDK-JS.

| Método | Descripción |
|---|---|
| getIdentificationTypes | Retorna todos los tipos de documento basados en la _public_key_ |
| getPaymentMethods | Retorna una lista de métodos de pago. |
| getIssuers | Retorna una lista de issuers. |
| getInstallments | Retorna todas las cuotas disponibles. |
| createCardToken | Retorna el token de la tarjeta. |

A continuación, encontrarás ejemplos de cómo utilizarlos:

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

Para recolectar los datos de tarjeta y generar el token para pagos, utiliza los **Secure Fields**.

> NOTE
>
> Importante
>
> Para un detalle completo de los parámetros y retornos de cada función, consulta la [documentación oficial en Github](https://github.com/mercadopago/sdk-js/blob/main/API/core-methods.md).
