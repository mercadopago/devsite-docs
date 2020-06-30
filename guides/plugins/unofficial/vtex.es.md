----[mlb]----

> WARNING
>
> Importante
>
> ¡Lo sentimos! Por el momento, esta página no se encuentra disponible en español.<br>
[Ir a documentación en portugués](https://www.mercadopago.com.br/developers/pt/guides/plugins/unofficial/vtex//)

------------

----[mla]----

# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago.**

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), [tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito) [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, tienes la opción de [recibir pagos directamente desde el sitio web de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


## Etapas para configurar

Los **pasos para comenzar a operar con Mercado Pago** son los siguientes:

1. Crea una [cuenta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si aún no tiene una.
2. Registra la afiliación con Mercado Pago.
3. Configura las condiciones de pago.
4. Agrega el device fingerprint.


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda.
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +.
3. Ingresa en el conector MercadoPagoV1.
4. Completa los campos correspondientes y guarda los cambios.

| Campos | Datos necesarios |
| --- | --- |
| Nombre de afiliación | Define el nombre que identificará a tu afiliación. |
| OAuth login | No es necesario. Dejar como está. |
| PublicKey | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave pública]([FAKER][CREDENTIALS][URL]). |
| AccessToken | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave privada]([FAKER][CREDENTIALS][URL]). |
| RefreshToken | Dejar en blanco. |
| ExpiredTokenIn | Dejar en blanco. |
| Merchant Account Id | Dejar en blanco. |
| Processing Mode | Elige `agregador` como modo de procesamiento a partir de MercadoPagoV1. |
| CountryName | Argentina. |
| Bill due date in days | Dejar en 1. |
| SoftDescriptor | Indica el nombre que va a aparecer para identificar una transacción de tu tienda en el resumen de la tarjeta del usuario. |
| Description | Escribe una breve descripción de tu negocio (opcional). |
| CategoryId | Elige la categoría de tus productos.|
| Financial Institution | Dejar en blanco. |
| External Installments | Elegir `Yes / Sí`. Usa las opciones de pago directamente de tu cuenta de Mercado Pago. |
| Antifraud | Elegir `Yes / Sí`. |
| Time Zone | Indica la región que define tu horario local. |
| Mercado Pago 3P payment due date | Deshabilitar. |
| 3P payment due date after Mercad Pago expiration | Deshabilitar. |
| MaxInstallments | Elige la cantidad de cuotas máximas que quieres ofrecer en Mercado pago. |
| Categoria Principal | Selecciona la categoría correspondiente a su tienda. |
| Refund Method | Elige _Online refund if possible_ para hacer las devoluciones desde VTEX. Si las quieres desde Mercado Pago, deshabilitar. |
| Plan ahora 12 | Dejar en blanco. |
| Plan ahora 18 | Dejar en blanco. |
| Plan ahora 3 | Dejar en blanco. |
| Plan ahora 6 | Dejar en blanco. |
| Plan ahora Z | Dejar en blanco. |
| Charge Margine | Dejarlo en 0. |
| Binary Mode | Si se desea operar sin estados pendientes, activarlo. De caso contrario, dejarlo deshabilitado. |
| Enable pre-auth for GiftCards | Dejar desactivado. |
| Marketplace | Dejar en blanco. |
| Marketplace fee | Dejar en blanco. |
| Auto Settle | Dejar por defecto. |
| Early Security Capture | Puede desactivar la función o elegir en cuánto tiempo quieres realizar la captura (después de que se haya aprobado la transacción y se haya completado el análisis antifraude). |
<br>


![Imagen Afiliación](/images/vtex/vtex-hisp-afiliacion-arg.gif)


**¡Y listo! Tu afiliación con Mercado Pago ya se encuentra activa.**


## Configura las condiciones de pago

Luego de tener creada tu afiliación con Mercado Pago, puedes configurar pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), [tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito) o [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, elegir la opción de [recibir pagos directamente en el Checkout de Mercado Pago] (#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


### Condición de pagos para el Checkout de VTEX

Para poder utilizar este tipo de checkout se tienen que configurar los medios de pago por separado:

1. [Tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito)
2. [Tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito)
3. [Efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo)
4. [Tarjetas de crédito locales](#bookmark_condición_de_pagos_con_medios_de_pagos_personalizados)


#### Condición de pagos para tarjeta de crédito

Para crear una condición de pagos con tarjeta de crédito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +.
3. Luego, en la sección de Tarjetas de crédito, elige el medio de pago que quieras agregar. Se deben agregar Visa, MasterCard, American Express, Diners, Nativa, Naranja, Cabal y Shopping
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago.
7. Haz clic en Guardar.

> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda. <br>


![Imagen tarjeta](/images/vtex/vtex-hispanos-credito.gif)


<br>
#### Condición de pagos para tarjeta de débito

Para crear una condición de pagos con tarjeta de débito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +.
3. Luego, en la sección de Tarjetas de débito, elige el medio de pago que quieras agregar. Se deben agregar Visa débito, Master débito y Maestro.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago.
7. Haz clic en Guardar.


<br>
#### Condición de pagos para medios de pago en efectivo

Para crear una condición de pago con medios de pago en efectivo, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +.
3. En la sección Factura, elige Boleto Bancario para agregar el medio de pago.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. Haz clic en Guardar.

En VTEX, al seleccionar Boleto Bancario se incluyen todos los medios de pagos disponibles del país:

| Tipo de medio de pago | Medio de pago |
| --- | --- |
| `ticket` | Rapipago |
| `ticket` | Pago Fácil |
| `ticket` | Provincia NET Pagos |
| `atm` | Red Link |

> Los medios de pago Carga Virtual y Cobro Express no están disponibles para el Checkout de VTEX.


![Imagen efectivo](/images/vtex/vtex-hispanos-efectivo.gif)

<br>

#### Condición de pagos con medios de pagos personalizados

Los medios de pago personalizado permite sumar a VTEX tarjetas de crédito locales que VTEX no integra como una opción nativo y se pueden utilizar con Mercado Pago.

Para crear esta condición de pago, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Pagos personalizados, busca la sección Cobrands y haz clic en Configurar.
3. Se desplegará un formulario donde deberás ingresar Nombre, Descripción, Medio de pago (la marca bandera), Bines (validar en Mercado Pago los mismos) y el Código de Medio de Pago (es el nombre del medio de pago en Mercado Pago).
4. Haz clic en Guardar.
5. En la pestaña Planes de Pago, haz clic en +.
6. En la sección Pago personalizado, elige el medio de pago que habías creado para agregar el medio de pago.
7. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
8. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
9. Haz clic en Guardar.


> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda. <br>

<br>
En VTEX, los medios de pago personalizados que se pueden agregar son:

| Tipo | Medio de pago | Bandera de la tarjeta | Bines | Código de pago del adquirente |
| --- | --- | --- | --- | --- |
| `credit_card` | Argencard | Mastercard | 501105-501105 | argencard |
| `credit_card` | Tarjeta Cencosud | Mastercard | 603493-603493 | cencosud |
| `credit_card` | Tarjeta CMR | Mastercard | 557039-557039 | cmr |
| `credit_card` | Tarjeta Cordial | Mastercard | 522135-522135,522137-522137,527555-527555 | cordial |
| `credit_card` | Tarjeta Cordobesa | Mastercard | 542702-542702,544764-544764,550073-550073,528824-528824 | cordobesa |
| `credit_card` | Tarjeta Mercado Pago Patagonia | Mastercard | 515073-515073,515070-515070,532383-532383,532384-532384 | mercadopago_cc |


![Imagen personalizado](/images/vtex/vtex-hisp-personalizado.gif)

------------


----[mlm]----

# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago.**

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito),[tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito) o [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, tienes la opción de [recibir pagos directamente desde el sitio web de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


## Etapas para configurar

Los **pasos para comenzar a operar con Mercado Pago** son los siguientes:

1. Crea una [cuenta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si aún no tiene una.
2. Registra la afiliación con Mercado Pago.
3. Configura las condiciones de pago.
4. Agrega el device fingerprint.


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda.
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +.
3. Ingresa en el conector MercadoPagoV1.
4. Completa los campos correspondientes y guarda los cambios.

| Campos | Datos necesarios |
| --- | --- |
| Nombre de afiliación | Define el nombre que identificará a tu afiliación. |
| OAuth login | No es necesario. Dejar como está. |
| PublicKey | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave pública]([FAKER][CREDENTIALS][URL]). |
| AccessToken | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave privada]([FAKER][CREDENTIALS][URL]). |
| RefreshToken | Dejar en blanco. |
| ExpiredTokenIn | Dejar en blanco. |
| Merchant Account Id | Dejar en blanco. |
| Processing Mode | Elige `agregador` como modo de procesamiento a partir de MercadoPagoV1. |
| CountryName | México. |
| Bill due date in days | Dejar en 1. |
| SoftDescriptor | Indica el nombre que va a aparecer para identificar una transacción de tu tienda en el resumen de la tarjeta del usuario. |
| Description | Escribe una breve descripción de tu negocio (opcional). |
| CategoryId | Elige la categoría de tus productos.|
| Financial Institution | Dejar en blanco. |
| External Installments | Elegir `Yes / Sí`. Usa las opciones de pago directamente de tu cuenta de Mercado Pago. |
| Antifraud | Elegir `No`. |
| Time Zone | Indica la región que define tu horario local. |
| Mercado Pago 3P payment due date. | Deshabilitar. |
| 3P payment due date after MP expiration. | Deshabilitar. |
| OrderExpirationHours | Elegir `1 hora`. Este campo define cada cuántas horas quieres que el sistema verifique el estado del pedido antes de que caduque. Si esta opción no se cumple, se configura al patrón de 192 horas.|
| MaxInstallments | Elige la cantidad de cuotas máximas que quieres ofrecer en Mercado pago. |
| Categoria Principal | Selecciona la categoría correspondiente a su tienda. |
| Refund Method | Elige _Online refund if possible_ para hacer las devoluciones desde VTEX. Si las quieres desde Mercado Pago, deshabilitar. |
| Binary Mode | Si se desea operar sin estados pendientes, activarlo. De caso contrario, dejarlo deshabilitado. |
| Marketplace | Dejar en blanco. |
| Marketplace fee | Dejar en blanco. |
| Captura de segurança antecipada | Puede desactivar la función o elegir en cuánto tiempo desea realizar la captura (después de que se haya aprobado la transacción y se haya completado el análisis antifraude). |
<br>


> WARNING
>
> Importante
>
> En el caso del campo “Antifraud” seleccionar la opción `No` porque sino en el Checkout se le pedirá al cardholder un identification para avanzar con el pago.
<br>


![Imagen Afiliación](/images/vtex/vtex-hisp-afiliacion.gif)


**¡Y listo! Tu afiliación con Mercado Pago ya se encuentra activa.**


## Configura las condiciones de pago
Luego de tener creada tu afiliación con Mercado Pago, puedes ofrecer pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), [tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito) o [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, elegir la opción de [recibir pagos directamente en el Checkout de Mercado Pago] (#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


### Condición de pagos para el Checkout de VTEX

Para poder utilizar este tipo de checkout se tienen que configurar los medios de pago por separado:


1. [Tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito)
2. [Tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito)
3. [Efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo)


#### Condición de pagos para tarjeta de crédito

Para crear una condición de pagos con tarjeta de crédito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +.
3. Luego, en la sección de Tarjetas de crédito, elige el medio de pago que quieras agregar. Se deben agregar Visa, MasterCard y American Express.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago.
7. Haz clic en Guardar.

> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda. <br>


![Imagen tarjeta](/images/vtex/vtex-hispanos-credito.gif)


#### Condición de pagos para tarjeta de débito

Para crear una condición de pagos con tarjeta de débito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +.
3. Luego, en la sección de Tarjetas de débito, elige el medio de pago que quieras agregar. Se deben agregar Visa débito y Master débito.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago.
7. Haz clic en Guardar.


#### Condición de pagos para medios de pago en efectivo

Para crear una condición de pago con medios de pago en efectivo, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +.
3. En la sección Factura, elige Boleto Bancario para agregar el medio de pago.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. Haz clic en Guardar.


En VTEX, al seleccionar Boleto Bancario se incluyen todos los medios de pagos disponibles del país:

| Tipo de medio de pago | Medio de pago |
| --- | --- |
| `ticket` | Oxxo |
| `atm` | Citibanamex |
| `atm` | BBVA Bancomer |

> El medio de pago Serfin no está disponible para el Checkout de VTEX.


![Imagen efectivo](/images/vtex/vtex-hispanos-efectivo.gif)


------------


----[mlc]----

# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago.**

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), [transferencia bancaria](#book_mark_condición_de_pagos_para_medios_de_pago_por_transferencia_bancaria) o [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, tienes la opción de [recibir pagos directamente desde el sitio web de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


## Etapas para configurar

Los **pasos para comenzar a operar con Mercado Pago** son los siguientes:

1. Crea una [cuenta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si aún no tiene una.
2. Registra la afiliación con Mercado Pago.
3. Configura las condiciones de pago.
4. Agrega el device fingerprint.


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda.
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +.
3. Ingresa en el conector MercadoPagoV1.
4. Completa los campos correspondientes y guarda los cambios.


| Campos | Datos necesarios |
| --- | --- |
| Nombre de afiliación | Define el nombre que identificará a tu afiliación. |
| OAuth login | No es necesario. Dejar como está. |
| PublicKey | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave pública]([FAKER][CREDENTIALS][URL]). |
| AccessToken | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave privada]([FAKER][CREDENTIALS][URL]). |
| RefreshToken | Dejar en blanco. |
| ExpiredTokenIn | Dejar en blanco. |
| Merchant Account Id | Dejar en blanco. |
| Processing Mode | Elige `agregador` como modo de procesamiento a partir de MercadoPagoV1. |
| CountryName | Chile. |
| SoftDescriptor | Indica el nombre que va a aparecer para identificar una transacción de tu tienda. |
| Description | Escribe una breve descripción de tu negocio (opcional). |
| CategoryId | Elige la categoría de tus productos.|
| Financial Institution | Ingresar el código `1234`. |
| External Installments | Elegir `Yes / Sí`. Usa las opciones de pago directamente de tu cuenta de Mercado Pago. |
| Antifraud | Elegir `Yes / Sí`. |
| Time Zone | Indica la región que define tu horario local. |
| Vencimiento de pagos 3P en Mercado Pago | Elegir `1 hora`. Este campo define cada cuántas horas quieres que el sistema verifique el estado del pedido antes de que caduque. Si esta opción no se cumple, se configura al patrón de 192 horas.|
| Vencimiento de pagos 3P después del vencimiento en MP | Elegir `12 horas`. Tiempo para el vencimiento del pago en VTEX después del vencimiento del pago 3P en Mercado Pago. Si no se completa, se utilizará el tiempo estándar de 7 días después de la creación del pedido.|
| MaxInstallments | Elige la cantidad de cuotas máximas que quieres ofrecer en Mercado pago. |
| Categoria Principal | Selecciona la categoría correspondiente a su tienda. |
| Refund Method | Elegir Online. Si selecciona Reembolso Online, ejecutaremos la llamada de la API de reembolso al procesador. Si se selecciona la opción Offline, enviaremos un correo electrónico al administrador para realizar un reembolso manual. Utilice esta opción con cuidado. |
| Binary mode | Cuando está activo, los pagos solo pueden ser devueltos en el status `authorised` o `denied` (no se permite `in_process`). |
| Marketplace | Sólo se debe completar cuando se utiliza el modelo marketplace. Origen del pago |
| Marketplace Fee | Comisión de cada pago en el modelo marketplace |
| Captura de seguridad antecipada | Puede desactivar la función o elegir en cuánto tiempo desea realizar la captura (después de que se haya aprobado la transacción y se haya completado el análisis antifraude). |
<br>


> WARNING
>
> Importante
>
> En el caso del campo “Financial Institution” validar la documentación de WebPay de Mercado Pago para configurar dicho campo. Actualmente, es el valor “1234”.
>
> En el caso del campo “Captura de segurança antecipada” no se encuentra disponible por el momento para Chile.
<br>


![Imagen Afiliación](/images/vtex/vtex-hisp-afiliacion.gif)


**¡Y listo! Tu afiliación con Mercado Pago ya se encuentra activa.**


## Configura las condiciones de pago

Luego de tener creada tu afiliación con Mercado Pago, puedes ofrecer pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), [transferencia bancaria](#bookmark_condición_de_pagos_para_medios_de_pago_por_transferencia_bancaria) o [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, elegir la opción de [recibir pagos directamente en el Checkout de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


### Condición de pagos para el Checkout de VTEX

Para poder utilizar este tipo de checkout se tienen que configurar los medios de pago por separado: 

1. [Tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito)
2. [Transferencia bancaria (WebPay)](#bookmark_condición_de_pagos_para_medios_de_pago_por_transferencia_bancaria)
3. [Efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo)
4. [Tarjetas de crédito locales](#bookmark_condición_de_pagos_con_medios_de_pagos_personalizados)


#### Condición de pagos para tarjeta de crédito

Para crear una condición de pagos con tarjeta de crédito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. Luego, en la sección de Tarjetas de crédito, elige el medio de pago que quieras agregar. Se deben agregar Visa, MasterCard y American Express. 
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago. 
7. Haz clic en Guardar. 

> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda. <br>


![Imagen tarjeta](/images/vtex/vtex-hispanos-credito.gif)


#### Condición de pagos para medios de pago por transferencia bancaria

Para crear una condición de pago con WebPay, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. En la sección “Other”, elige “WebPay” para agregar el medio de pago.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. Haz clic en Guardar. 


![Imagen transferencia](/images/vtex/vtex-hisp-webpay.gif)


#### Condición de pagos para medios de pago en efectivo

Para crear una condición de pago con medios de pago en efectivo, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. En la sección Factura, elige Boleto Bancario para agregar el medio de pago.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. Haz clic en Guardar. 

En VTEX, al seleccionar Boleto Bancario se incluyen todos los medios de pagos disponibles del país:

| Tipo de medio de pago | Medio de pago |
| --- | --- |
| `ticket` | Sucursales Servipag |


![Imagen efectivo](/images/vtex/vtex-hispanos-efectivo.gif)

<br>

#### Condición de pagos con medios de pagos personalizados

Los medios de pago personalizado permite sumar a VTEX tarjetas de crédito locales que VTEX no integra como una opción nativo y se pueden utilizar con Mercado Pago.

Para crear esta condición de pago, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Pagos personalizados, busca la sección Cobrands y haz clic en Configurar.
3. Se desplegará un formulario donde deberás ingresar Nombre, Descripción, Medio de pago (la marca bandera), Bines (validar en Mercado Pago los mismos) y el Código de Medio de Pago (es el nombre del medio de pago en Mercado Pago). 
4. Haz clic en Guardar. 
5. En la pestaña Planes de Pago, haz clic en +. 
6. En la sección Pago personalizado, elige el medio de pago que habías creado para agregar el medio de pago.
7. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
8. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
9. Haz clic en Guardar. 


> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda. <br>

<br>
En VTEX, los medios de pago personalizados que se pueden agregar son:

| Tipo | Medio de pago | Bandera de la tarjeta | Bines | Código de pago del adquirente |
| --- | --- | --- | --- | --- |
| `credit_card` | Presto | Mastercard | 920000 - 920099 | presto |
| `credit_card` | Magna | Mastercard | 568000 - 569099 | magna |


![Imagen personalizado](/images/vtex/vtex-hisp-personalizado.gif)


------------


----[mco]----

# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago.**

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), [transferencia bancaria](#bookmark_condición_de_pagos_para_medios_de_pago_por_transferencia_bancaria) o [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, tienes la opción de [recibir pagos directamente desde el sitio web de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


## Etapas para configurar

Los **pasos para comenzar a operar con Mercado Pago** son los siguientes:

1. Crea una [cuenta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si aún no tiene una.
2. Registra la afiliación con Mercado Pago.
3. Configura las condiciones de pago.
4. Agrega el device fingerprint.


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda. 
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +. 
3. Ingresa en el conector MercadoPagoV1.
4. Completa los campos correspondientes y guarda los cambios. 

| Campos | Datos necesarios |
| --- | --- |
| Nombre de afiliación | Define el nombre que identificará a tu afiliación. |
| OAuth login | No es necesario. Dejar como está. |
| PublicKey | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave pública]([FAKER][CREDENTIALS][URL]). |
| AccessToken | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave privada]([FAKER][CREDENTIALS][URL]). |
| RefreshToken | Dejar en blanco. |
| ExpiredTokenIn | Dejar en blanco. |
| Merchant Account Id | Dejar en blanco. |
| Processing Mode | Elige `agregador` como modo de procesamiento a partir de MercadoPagoV1. |
| CountryName | Colombia. |
| SoftDescriptor | Indica el nombre que va a aparecer para identificar una transacción de tu tienda en el resumen de la tarjeta del usuario. |
| Description | Escribe una breve descripción de tu negocio (opcional). |
| CategoryId | Elige la categoría de tus productos.|
| Financial Institution | Dejar en blanco. |
| External Installments | Elegir `Yes / Sí`. Usa las opciones de pago directamente de tu cuenta de Mercado Pago. |
| Antifraud | Elegir `Yes / Sí`. |
| Time Zone | Indica la región que define tu horario local. |
| OrderExpirationHours | Elegir `1 hora`. Este campo define cada cuántas horas quieres que el sistema verifique el estado del pedido antes de que caduque. Si esta opción no se cumple, se configura al patrón de 192 horas.|
| MaxInstallments | Elige la cantidad de cuotas máximas que quieres ofrecer en Mercado pago. |
| Categoria Principal | Selecciona la categoría correspondiente a su tienda. |
| Captura de segurança antecipada | Puede desactivar la función o elegir en cuánto tiempo desea realizar la captura (después de que se haya aprobado la transacción y se haya completado el análisis antifraude). |
<br>


> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda. <br>


![Imagen Afiliación](/images/vtex/vtex-hisp-afiliacion.gif)


**¡Y listo! Tu afiliación con Mercado Pago ya se encuentra activa.**


## Configura las condiciones de pago

Luego de tener creada tu afiliación con Mercado Pago, puedes ofrecer pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), [transferencia bancaria](#condición_de_pagos_para_medios_de_pago_por_transferencia_bancaria) o
[medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, elegir la opción de [recibir pagos directamente en el Checkout de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


### Condición de pagos para el Checkout de VTEX

Para poder utilizar este tipo de checkout se tienen que configurar los medios de pago por separado: 

1. [Tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito)
2. [Transferencia bancaria (PSE)](#bookmark_condición_de_pagos_para_medios_de_pago_por_transferencia_bancaria)
3. [Efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo)


#### Condición de pagos para tarjeta de crédito

Para crear una condición de pagos con tarjeta de crédito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. Luego, en la sección de Tarjetas de crédito, elige el medio de pago que quieras agregar. Se deben agregar Visa, MasterCard y Diners. 
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago. 
7. Haz clic en Guardar. 


> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda. <br>


![Imagen tarjeta](/images/vtex/vtex-hispanos-credito.gif)


#### Condición de pagos para medios de pago por transferencia bancaria

Para crear una condición de pago con PSE, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. Luego, en la sección de Tarjetas de débito, elige el medio de pago que quieras agregar. Se deben agregar Débito online.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago. 
7. Haz clic en Guardar. 

> El medio de pago tarjeta Codensa no está disponible para el Checkout de VTEX.


![Imagen transferencia](/images/vtex/vtex-hisp-pse.gif)


#### Condición de pagos para medios de pago en efectivo

Para crear una condición de pago con medios de pago en efectivo, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. En la sección Factura, elige Boleto Bancario para agregar el medio de pago.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. Haz clic en Guardar. 

En VTEX, al seleccionar “Boleto Bancario” se incluyen todos los medios de pagos disponibles del país:

| Tipo de medio de pago | Medio de pago |
| --- | --- |
| `ticket` | Efecty |
| `ticket` | Baloto |


![Imagen efectivo](/images/vtex/vtex-hispanos-efectivo.gif)


------------


----[mpe]----

# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago.**

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), [tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito) o
[medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, tienes la opción de [recibir pagos directamente desde el sitio web de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


## Etapas para configurar

Los **pasos para comenzar a operar con Mercado Pago** son los siguientes:

1. Crea una [cuenta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si aún no tiene una.
2. Registra la afiliación con Mercado Pago.
3. Configura las condiciones de pago.
4. Agrega el device fingerprint.


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda. 
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +. 
3. Ingresa en el conector MercadoPagoV1.
4. Completa los campos correspondientes y guarda los cambios. 


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda. 
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +. 
3. Ingresa en el conector MercadoPagoV1.
4. Completa los campos correspondientes y guarda los cambios. 

| Campos | Datos necesarios |
| --- | --- |
| Nombre de afiliación | Define el nombre que identificará a tu afiliación. |
| OAuth login | No es necesario. Dejar como está. |
| PublicKey | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave pública]([FAKER][CREDENTIALS][URL]). |
| AccessToken | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave privada]([FAKER][CREDENTIALS][URL]). |
| RefreshToken | Dejar en blanco. |
| ExpiredTokenIn | Dejar en blanco. |
| Merchant Account Id | Dejar en blanco. |
| Processing Mode | Elige `agregador` como modo de procesamiento a partir de MercadoPagoV1. |
| CountryName | Perú. |
| Bill due date in days | Dejar en 1. |
| SoftDescriptor | Indica el nombre que va a aparecer para identificar una transacción de tu tienda en el resumen de la tarjeta del usuario. |
| Description | Escribe una breve descripción de tu negocio (opcional). |
| CategoryId | Elige la categoría de tus productos.|
| Financial Institution | Dejar en blanco. |
| External Installments | Elegir `Yes / Sí`. Usa las opciones de pago directamente de tu cuenta de Mercado Pago. |
| Antifraud | Elegir `Yes / Sí`. |
| Time Zone | Indica la región que define tu horario local. |
| Mercado Pago 3P payment due date | Disable. |
| 3P payment due date after MP expiration | Disable. |
| OrderExpirationHours | Elegir `1 hora`. Este campo define cada cuántas horas quieres que el sistema verifique el estado del pedido antes de que caduque. Si esta opción no se cumple, se configura al patrón de 192 horas.|
| MaxInstallments | Elige la cantidad de cuotas máximas que quieres ofrecer en Mercado pago. |
| Categoria Principal | Selecciona la categoría correspondiente a su tienda. |
| Captura de segurança antecipada | Puede desactivar la función o elegir en cuánto tiempo desea realizar la captura (después de que se haya aprobado la transacción y se haya completado el análisis antifraude). |
<br>


> WARNING
>
> Importante
>
> En el caso del campo “Captura de segurança antecipada” no se encuentra disponible por el momento para Perú.<br>


![Imagen Afiliación](/images/vtex/vtex-hisp-afiliacion.gif)


**¡Y listo! Tu afiliación con Mercado Pago ya se encuentra activa.**


## Configura las condiciones de pago

Luego de tener creada tu afiliación con Mercado Pago, puedes ofrecer pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito) o [medios de pago en efectivo](#condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, elegir la opción de [recibir pagos directamente en el Checkout de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


### Condición de pagos para el Checkout de VTEX

Para poder utilizar este tipo de checkout se tienen que configurar los medios de pago por separado:

1. [Tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito)
2. [Tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito)
3. [Efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo)


<br>
#### Condición de pagos para tarjeta de crédito

Para crear una condición de pagos con tarjeta de crédito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +.
3. Luego, en la sección de Tarjetas de crédito, elige el medio de pago que quieras agregar. Se deben agregar Visa, MasterCard, American Express y Diners.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago. 
7. Haz clic en Guardar. 


> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda. <br>


![Imagen tarjeta](/images/vtex/vtex-hispanos-credito.gif)


<br>
#### Condición de pagos para tarjeta de débito

Para crear una condición de pagos con tarjeta de débito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. Luego, en la sección de Tarjetas de débito, elige el medio de pago que quieras agregar. Se deben agregar Visa débito y Master débito.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago. 
7. Haz clic en Guardar. 


<br>
#### Condición de pagos para medios de pago en efectivo

Para crear una condición de pago con medios de pago en efectivo, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. En la sección Factura, elige Boleto Bancario para agregar el medio de pago.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. Haz clic en Guardar. 

En VTEX, al seleccionar “Boleto Bancario” se incluyen todos los medios de pagos disponibles del país:

| Tipo de medio de pago | Medio de pago |
| --- | --- |
| `ticket` | Pago Efectivo |
| `atm` | Pago Efectivo |

> El ticket será emitido por Pago Efectivo pero el mismo podrá abonarse presencialmente en diferentes agencias y bancos de forma online, para más información visita el [sitio oficial de PagoEfectivo](https://pagoefectivo.pe/pe).


![Imagen efectivo](/images/vtex/vtex-hispanos-efectivo.gif)


------------


----[mlu]----

# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago.**

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito) o [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, tienes la opción de [recibir pagos directamente desde el sitio web de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


## Etapas para configurar

Los **pasos para comenzar a operar con Mercado Pago** son los siguientes:

1. Crea una [cuenta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si aún no tiene una.
2. Registra la afiliación con Mercado Pago.
3. Configura las condiciones de pago.
4. Agrega el device fingerprint.


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda. 
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +. 
3. Ingresa en el conector MercadoPagoV1.
4. Completa los campos correspondientes y guarda los cambios. 


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda. 
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +. 
3. Ingresa en el conector MercadoPagoV1.
4. Completa los campos correspondientes y guarda los cambios. 

| Campos | Datos necesarios |
| --- | --- |
| Nombre de afiliación | Define el nombre que identificará a tu afiliación. |
| OAuth login | No es necesario. Dejar como está. |
| PublicKey | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave pública]([FAKER][CREDENTIALS][URL]). |
| AccessToken | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave privada]([FAKER][CREDENTIALS][URL]). |
| RefreshToken | Dejar en blanco. |
| ExpiredTokenIn | Dejar en blanco. |
| Merchant Account Id | Dejar en blanco. |
| Processing Mode | Elige `agregador` como modo de procesamiento a partir de MercadoPagoV1. |
| CountryName | Uruguay. |
| Bill due date in days | Dejar en 1. |
| SoftDescriptor | Indica el nombre que va a aparecer para identificar una transacción de tu tienda en el resumen de la tarjeta del usuario. |
| Description | Escribe una breve descripción de tu negocio (opcional). |
| CategoryId | Elige la categoría de tus productos.|
| Financial Institution | Dejar en blanco. |
| External Installments | Elegir `Yes / Sí`. Usa las opciones de pago directamente de tu cuenta de Mercado Pago. |
| Antifraud | Elegir `Yes / Sí`. |
| Time Zone | Indica la región que define tu horario local. |
| Mercado Pago 3P payment due date | Disable. |
| 3P payment due date after MP expiration | Disable. |
| OrderExpirationHours | Elegir `1 hora`. Este campo define cada cuántas horas quieres que el sistema verifique el estado del pedido antes de que caduque. Si esta opción no se cumple, se configura al patrón de 192 horas.|
| MaxInstallments | Elige la cantidad de cuotas máximas que quieres ofrecer en Mercado pago. |
| Categoria Principal | Selecciona la categoría correspondiente a su tienda. |
| Captura de segurança antecipada | Puede desactivar la función o elegir en cuánto tiempo desea realizar la captura (después de que se haya aprobado la transacción y se haya completado el análisis antifraude). |
<br>


> WARNING
>
> Importante
>
> En el caso del campo “Captura de segurança antecipada” no se encuentra disponible por el momento para Uruguay.
<br>


![Imagen Afiliación](/images/vtex/vtex-hisp-afiliacion.gif)


**¡Y listo! Tu afiliación con Mercado Pago ya se encuentra activa.**


## Configura las condiciones de pago

Luego de tener creada tu afiliación con Mercado Pago, puedes ofrecer pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito) o [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, elegir la opción de [recibir pagos directamente en el Checkout de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_de_mercado_pago).


### Condición de pagos para el Checkout de VTEX

Para poder utilizar este tipo de checkout se tienen que configurar los medios de pago por separado:

1. [Tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito)
2. [Efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo)
3. [Tarjetas de crédito locales](#bookmark_condición_de_pagos_con_medios_de_pagos_personalizados)


<br>
#### Condición de pagos para tarjeta de crédito

Para crear una condición de pagos con tarjeta de crédito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. Luego, en la sección de Tarjetas de crédito, elige el medio de pago que quieras agregar. Se deben agregar Visa, MasterCard y Diners. 
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago. 
7. Haz clic en Guardar. 

> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda. <br>


![Imagen tarjeta](/images/vtex/vtex-hispanos-credito.gif)


<br>
#### Condición de pagos para medios de pago en efectivo

Para crear una condición de pago con medios de pago en efectivo, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. En la sección Factura, elige Boleto bancario para agregar el medio de pago.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. Haz clic en Guardar. 

En VTEX, al seleccionar Boleto Bancario se incluyen todos los medios de pagos disponibles del país:

| Tipo de medio de pago | Medio de pago |
| --- | --- |
| `ticket` | Abitab |
| `ticket` | Redpagos |


![Imagen efectivo](/images/vtex/vtex-hispanos-efectivo.gif)

<br>

#### Condición de pagos con medios de pagos personalizados

Los medios de pago personalizado permite sumar a VTEX tarjetas de crédito locales que VTEX no integra como una opción nativo y se pueden utilizar con Mercado Pago.

Para crear esta condición de pago, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Pagos personalizados, busca la sección Cobrands y haz clic en Configurar.
3. Se desplegará un formulario donde deberás ingresar Nombre, Descripción, Medio de pago (la marca bandera), Bines (validar en Mercado Pago los mismos) y el Código de Medio de Pago (es el nombre del medio de pago en Mercado Pago). 
4. Haz clic en Guardar. 
5. En la pestaña Planes de Pago, haz clic en +. 
6. En la sección Pago personalizado, elige el medio de pago que habías creado para agregar el medio de pago.
7. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
8. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
9. Haz clic en Guardar. 


> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda. <br>


En VTEX, los medios de pago personalizados que se pueden agregar son:

| Tipo | Medio de pago | Bandera de la tarjeta | Bines | Código de pago del adquirente |
| --- | --- | --- | --- | --- |
| `credit_card` | OCA | Mastercard | 589892, 542991, 549530, 549564, 549571, 549576 | oca |
| `credit_card` | Creditel | Mastercard | 601933 | creditel |
| `credit_card` | Lider | Mastercard | 501088,501109,505863,505866,505867,505868,505869,505870,505871,505872 | lider |


![Imagen personalizado](/images/vtex/vtex-hisp-personalizado.gif)


------------


----[mla, mlm, mlc, mco, mpe, mlu]----


## Condición de pagos con Checkout de Mercado Pago

**El comprador será redireccionado a Mercado Pago** para realizar el pago y terminar la compra. Incorpora todo los medios de pagos disponibles en el país e incluye la posibilidad de pagar con el dinero en la cuenta de Mercado Pago. 

Para crear esta condición de pago, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. En la sección Otro, elige como condición de pago Mercado Pago.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. Haz clic en Guardar. 


![Imagen cow](images/vtex/vtex-hispanos-cow.gif)


> Los cambios en las Condiciones de pago pueden demorar hasta 10 minutos en aplicarse.


## Configura las cuotas sin interés en tu cuenta de Mercado Pago

1. Ingresa a tu cuenta de Mercado Pago y ve a Tu negocio.
2. Accede en la opción Configuraciones, navega hasta Ofrecer cuotas sin interés y haz clic en Activar.
3. Elige ¿Cuántas quieres ofrecer? y confirma los cambios con el botón Activar.


![Imagen cuotas](/images/vtex/vtex-hisp-cuotas.gif)


**¡Y listo! Ya estás ofreciendo cuotas sin interés, con el costo de financiación que hayas configurado.**
<br>

## Obtén una mejor aprobación enviando el device fingerprint
Mercado Pago tiene sus propias herramientas de prevención de fraude. **Te recomendamos que envíes información sobre el comportamiento de tus clientes para detectar movimientos inusuales y evitar transacciones fraudulentas**. Y no te preocupes, cuidamos los datos de tus clientes y no los compartiremos con nadie.

Para configurar el device fingerprint, sigue estos pasos:

1. En el panel de administración, accede a tu Checkout desde el módulo en Configuraciones de la tienda.
2. En la configuración de tu sitio, haz clic en Editar.
3. En la pestaña Código, ingresa a “checkout5-custom.js” o a “checkout6-custom.js” (dependiendo de la versión de Checkout de VTEX que estés usando) desde el módulo de archivos.
4. Copia y pega el siguiente código y guarda los cambios.

```javascript
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```

## Comprender los log de VTEX

**Los logs permiten revisar la información que retorna Mercado Pago** y VTEX expone para poder tener un mayor entendimiento de lo que ocurrió con una transacción. También en caso de realizar modificaciones o prender nuevos medios de pago, los logs nos dan la posibilidad de poder validar que todo está funcionando según lo previsto.

Por último, proveen un mayor entendimiento a los equipos comerciales para que puedan dar un mejor soporte y convertirse en una primer instancia de soporte.

Ingresa en las transacciones de VTEX y busca el LOG que contenga el *status response* y haz clic en Ver más.

Los datos más significativos son los siguientes:

| Campo | Dato | Descripción |
| --- | --- | --- |
| `id` | 10302316 | Número de transacción de Mercado Pago. |
| `payment_method_id` | visa | Medio de pago. |
| `payment_type_id` | credit_card | Medio de pago. |
| `status` | authorized | Estado del pago. |
| `status_detail` | pending_capture | Detalle del estado de pago.|
| `external_reference` | 503451 | Identificador de VTEX enviado a Mercado Pago. |
| `first_six_digits` | 450995 | Bin de la tarjeta. |
| `processing_mode` | agregador | Modo de procesamiento del pago. |

Para conocer el detalle sobre un pago rechazado, revisa el `status_detail` y busca la información en los [manejos de respuesta de error](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/api/handling-responses/).

## Errores comunes

Los errores más comunes son los siguientes:


| Mensaje | Significado |
| --- | --- |
| `unauthorized_use_of_live_credentials` | Las credenciales de la cuenta de Mercado Pago no están habilitadas. Tienes que ir a la página de credenciales y completar el formulario de “Quiero ir a producción”. |
| `invalid installments` | Se está intentando procesar el pago con una cuota que no está habilitada. Se debe ir a la configuración del medio de pago y definir las cuotas como Automáticas. |
| `invalid_users` | Se está intentando pagar con el mismo usuario que se está cobrando. Volver a intentar el pago con un mail pagador distinto |
| `Cannot infer Payment Method` | Se quiere pagar con una tarjeta distinta al tipo de tarjeta seleccionado. Por ejemplo, se ingresó el número de una tarjeta de crédito en la opción de tarjeta de débito. |

> Para más información, visita el [sitio oficial de VTEX](https://help.vtex.com/) y el [sitio de Status de Vtex](https://status.vtex.com/).

------------
