---
sites_supported:
- mla
- mco
indexable: false
---

----[mla]----

# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago.**

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito) o
[tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito).

Para configurar pagos en efectivo y también elegir la opción de recibir pagos directamente en el Checkout de Mercado Pago te recomendamos que vayas a la siguiente [documentación](https://www.mercadopago[FAKER][URL][DOMAIN/developers/es/guides/plugins/unofficial/vtex/#bookmark_configurar_afiliacion_en_modo_agregador).


## Etapas para configurar

Los **pasos para comenzar a operar con Mercado Pago** son los siguientes:

1. Crea una [cuenta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si aún no tiene una.
2. Configurar tus códigos de comercio en Mercado Pago.
3. Registra la afiliación con Mercado Pago en VTEX.
4. Configura las condiciones de pago.
5. Agrega el device fingerprint.

> WARNING
>
> Importante
>
> Es necesario que tengas configurado en tu cuenta de Mercado Pago tus códigos de comercio y los medios de pago creados para procesar con modelo gateway. En Mercado Pago solo deberás tener activada todas las cuotas disponibles y sin intereses, ya que dicha configuración la realizarás en VTEX.<br>


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda. 
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +. 
3. Ingresa en el conector MercadoPagoV1.
4. Completa los campos correspondientes y guarda los cambios. 

> Para poder avanzar con la configuración, ten a mano las `merchant-account-id` brindadas por Mercado Pago. Debes crear una afiliación por cada `merchant-account-id` que tengas. 

<br>

| Campos | Datos necesarios |
| --- | --- |
| Nombre de afiliación | Define el nombre que identificará a tu afiliación. |
| OAuth login | No es necesario. Dejar como está. |
| PublicKey | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave pública]([FAKER][CREDENTIALS][URL]). |
| AccessToken | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave privada]([FAKER][CREDENTIALS][URL]). |
| RefreshToken | Dejar en blanco. |
| ExpiredTokenIn | Dejar en blanco. |
| Merchant Account Id | Deberás configurar este campo con la `merchant-account-id` brindada por Mercado Pago |
| Processing Mode | Elige `gateway` como modo de procesamiento a partir de MercadoPagoV1. |
| CountryName | Argentina. |
| SoftDescriptor | Indica el nombre que va a aparecer para identificar una transacción de tu tienda en el resumen de la tarjeta del usuario. |
| Description | Escribe una breve descripción de tu negocio (opcional). |
| CategoryId | Elige la categoría de tus productos.|
| Financial Institution | Dejar en blanco. |
| External Installments | Elegir `No`. |
| Antifraud | Elegir `Yes / Sí`. |
| Time Zone | Indica la región que define tu horario local. |
| Vencimiento de pagos 3P en Mercado Pago | Elegir `1 hora`. Este campo define cada cuántas horas quieres que el sistema verifique el estado del pedido antes de que caduque. Si esta opción no se cumple, se configura al patrón de 192 horas.|
| Vencimiento de pagos 3P después del vencimiento en MP | Elegir `12 horas`. Tiempo para el vencimiento del pago en VTEX después del vencimiento del pago 3P en Mercado Pago. Si no se completa, se utilizará el tiempo estándar de 7 días después de la creación del pedido.|
| MaxInstallments | Elige la cantidad de cuotas máximas que quieres ofrecer en Mercado Pago. |
| Refund Method | Elegir Online. Si selecciona Reembolso Online, ejecutaremos la llamada de la API de reembolso al procesador. Si se selecciona la opción Offline, enviaremos un correo electrónico al administrador para realizar un reembolso manual. Utilice esta opción con cuidado. |
| Plan Ahora 12 | Activar si se necesita procesar con Ahora12. En caso de seleccionar `activo`, si el comprador opta por este plan enviaremos la cuota 7 a MercadoPago. |
| Plan Ahora 18 | Activar si se necesita procesar con Ahora18. En caso de seleccionar `activo`, si el comprador opta por este plan enviaremos la cuota 8 a MercadoPago. |
| Plan Ahora 3 | Activar si se necesita procesar con Ahora3. En caso de seleccionar `activo`, si el comprador opta por este plan enviaremos la cuota 13 a MercadoPago. |
| Plan Ahora 6 | Activar si se necesita procesar con Ahora6. En caso de seleccionar `activo`, si el comprador opta por este plan enviaremos la cuota 16 a MercadoPago. |
| Plan Z | Activar si se necesita procesar con Plan Z. En caso de seleccionar `activo`, si el comprador opta por este plan enviaremos la cuota 11 a MercadoPago.. Sólo aplica para tarjeta Naranja |
| Charge Margine | Dejarlo en 0. |
| Binary mode | Si se desea operar sin estados pendientes, activarlo. De caso contrario, dejarlo deshabilitado. |
| Enable pre-auth for GiftCards | Dejar desactivado. |
| Marketplace | Dejar en blanco. |
| Marketplace fee | Dejar en blanco. |
| Auto Settle | Dejar por defecto. |
| Early Security Capture | Puede desactivar la función o elegir en cuánto tiempo quieres realizar la captura (después de que se haya aprobado la transacción y se haya completado el análisis antifraude). |

> WARNING
>
> Importante
>
> En el caso del campo “External Installments” seleccionar la opción `No` ya que las opciones de cuotas se van a configurar desde la configuración del medio de pago en VTEX.
>
> Te recomendamos que le pongas a la afiliación un nombre claro que te permita luego poder identificar fácilmente el código de comercio para poder linkearlo al medio de pago.
<br>


![Imagen Afiliación](/images/vtex/vtex-hisp-afiliacion-gtw-mla.gif)


<br>

**¡Y listo! Tu afiliación con Mercado Pago ya se encuentra activa.**


## Configura las condiciones de pago

Luego de tener creada tu afiliación con Mercado Pago, puedes configurar pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito) y [tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito).


### Condición de pagos para el Checkout de VTEX

Para poder utilizar este tipo de checkout se tienen que configurar los medios de pago por separado:

1. [Tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito)
2. [Tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito)
3. [Tarjetas de crédito locales](#bookmark_condición_de_pagos_con_medios_de_pagos_personalizados)


#### Condición de pagos para tarjeta de crédito

Para crear una condición de pagos con tarjeta de crédito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +. 
3. Luego, en la sección de Tarjetas de crédito, elige el medio de pago que quieras agregar. Se deben agregar Visa, MasterCard, American Express, Diners, Nativa, Naranja, Cabal y Shopping.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1 (la que se corresponde al código de comercio acorde al medio de pago). 
6. En la opción de cuotas, deberás cargar las cuotas e intereses correspondientes al medio de pago y tu número de comercio. 
7. Deja el medio de pago activo y haz clic en Guardar. 


> WARNING
>
> Importante
>
> Las configuración de las cuotas e intereses se debe realizar en VTEX. Es importante que en Mercado Pago esté creado el medio de pago para ser procesado como modelo gateway con todas las cuotas prendidas y con los intereses en 0. <br>
> 
> En caso de estar configurando un medio de pago asociado a una afiliación para procesar un *Plan Ahora* o *Plan Z*, recuerda configurar la cuota correspondiente a dicho plan. 
<br>


![Imagen Medio de Pago](/images/vtex/vtex-hisp-credito-gtw.gif)


<br>

#### Condición de pagos para tarjeta de débito

Para crear una condición de pagos con tarjeta de débito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. Luego, en la sección de Tarjetas de débito, elige el medio de pago que quieras agregar. Se deben agregar Visa débito, Master débito y Maestro. 
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a Mercado Pago (la que se corresponde al código de comercio acorde al medio de pago). 
6. En la opción de cuotas, deberá configurar solamente la cuota 1 y los intereses correspondientes al medio de pago y tu número de comercio. 
7. Deja el medio de pago activo y haz clic en Guardar. 


> WARNING
>
> Importante
>
> Es importante que en Mercado Pago esté creado el medio de pago para ser procesado como modelo gateway.
<br>


#### Condición de pagos con medios de pagos personalizados

Los medios de pago personalizado permite sumar a VTEX tarjetas de crédito locales que VTEX no integra como un medio de pago nativo y se pueden utilizar con Mercado Pago.


Para crear esta condición de pago, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Pagos personalizados, busca la sección Cobrands y haz clic en Configurar.
3. Se desplegará un formulario donde deberás ingresar Nombre, Descripción, Medio de pago (la marca bandera), Bines (validar en Mercado Pago los mismos) y el Código de Medio de Pago (es el nombre del medio de pago en Mercado Pago). 
4. Haz clic en Guardar. 
5. En la pestaña Planes de Pago, haz clic en +. 
6. En la sección Pago personalizado, elige el medio de pago que habías creado para agregar el medio de pago.
7. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
8. En el campo Proceso con la afiliación, elige como afiliación a Mercado Pago (la que se corresponde al código de comercio acorde al medio de pago). 
9. En la opción de cuotas, deberás cargar las cuotas e intereses correspondientes al medio de pago y tu número de comercio. 
10. Deja el medio de pago activo y haz clic en Guardar. 


En VTEX, los medios de pago personalizados que se pueden agregar son:

| Tipo | Medio de pago | Bandera de la tarjeta | Código de pago del adquirente | Bines |
| --- | --- | --- | --- | --- |
| `credit_card` | Argencard | Mastercard | argencard | 501105-501105 |
| `credit_card` | Tarjeta Cencosud | Mastercard | cencosud | 603493-603493 |
| `credit_card` | Tarjeta CMR | Mastercard | cmr | 557039-557039 |
| `credit_card` | Tarjeta Cordial | Mastercard | cordial | 522135-522135,522137-522137,527555-527555 |
| `credit_card` | Tarjeta Cordobesa | Mastercard | cordobesa | 542702-542702,544764-544764,550073-550073,528824-528824 |
| `credit_card` | Tarjeta Mercado Pago Patagonia | Mastercard | mercadopago_cc | 515073-515073,515070-515070,532383-532383,532384-532384 |


> WARNING
>
> Importante
>
> Las configuración de las cuotas e intereses se debe realizar en VTEX. Es importante que en Mercado Pago esté creado el medio de pago para ser procesado como modelo gateway con todas las cuotas prendidas y con los intereses en 0. <br>
<br>


![Imagen personalizado](/images/vtex/vtex-hisp-personalizado.gif)


<br>
> Los cambios en las condiciones de pago pueden demorar hasta 10 minutos en aplicarse.

------------

----[mco]----

# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago.**

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito) o [transferencia bancaria](#bookmark_condición_de_pagos_para_medios_de_pago_por_transferencia_bancaria).

> Para configurar pagos en efectivo y también elegir la opción de recibir pagos directamente en el Checkout de Mercado Pago te recomendamos que vayas a la siguiente [documentación](https://www.mercadopago[FAKER][URL][DOMAIN/developers/es/guides/plugins/unofficial/vtex/#bookmark_configurar_afiliacion_en_modo_agregador).


## Etapas para configurar

Los **pasos para comenzar a operar con Mercado Pago** son los siguientes:

1. Crea una [cuenta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si aún no tiene una.
2. Configurar tus códigos de comercio en Mercado Pago.
3. Registra la afiliación con Mercado Pago en VTEX.
4. Configura las condiciones de pago.
5. Agrega el device fingerprint.

> WARNING
>
> Importante
>
> Es necesario que tengas configurado en tu cuenta de Mercado Pago tus códigos de comercio y los medios de pago creados para procesar con modelo gateway. En Mercado Pago solo deberás tener activada todas las cuotas disponibles y sin intereses, ya que dicha configuración la realizarás en VTEX.<br>


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda.
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +.
3. Ingresa en el conector MercadoPagoV1.
4. Completa los campos correspondientes y guarda los cambios.

> Para poder avanzar con la configuración, ten a mano las `merchant-account-id` brindadas por Mercado Pago. Debes crear una afiliación por cada `merchant-account-id` que tengas.

<br>

| Campos | Datos necesarios |
|---|---|
| Nombre de afiliación | Define el nombre que identificará a tu afiliación. |
| OAuth login | No es necesario. Dejar como está. |
| PublicKey | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave pública]([FAKER][CREDENTIALS][URL]). |
| AccessToken | Refiere a las credenciales de tu cuenta de Mercado Pago. Completa con tu [clave privada]([FAKER][CREDENTIALS][URL]). |
| RefreshToken | Dejar en blanco. |
| ExpiredTokenIn | Dejar en blanco. |
| Merchant Account Id | Deberás configurar este campo con la `merchant-account-id` brindada por Mercado Pago |
| Processing Mode | Elige `gateway` como modo de procesamiento a partir de MercadoPagoV1. |
| CountryName | Colombia. |
| SoftDescriptor | Dejar en blanco.|
| Description | Escribe una breve descripción de tu negocio (opcional). |
| CategoryId | Elige la categoría de tus productos.|
| Financial Institution | Dejar en blanco. |
| External Installments | No. |
| Antifraud | Elegir `Yes`. |
| Time Zone | Indica la región que define tu horario local. |
| OrderExpirationHours | Elegir `1 hora`. Este campo define cada cuántas horas quieres que el sistema verifique el estado del pedido antes de que caduque. Si esta opción no se cumple, se configura al patrón de 192 horas.|
| MaxInstallments | Elige la cantidad de cuotas máximas que quieres ofrecer en Mercado Pago. |
| Categoria Principal | Selecciona la categoría correspondiente a su tienda. |
| Captura de segurança antecipada | Puede desactivar la función o elegir en cuánto tiempo desea realizar la captura (después de que se haya aprobado la transacción y se haya completado el análisis antifraude). |
<br>


> WARNING
>
> Importante
>
> En el caso del campo “External Installments” seleccionar la opción `No` ya que las opciones de cuotas se van a configurar desde la configuración del medio de pago en VTEX.
> 
> En el caso del campo “Captura de segurança antecipada” no se encuentra disponible por el momento para Colombia.
> 
> Te recomendamos que le pongas a la afiliación un nombre claro que te permita luego poder identificar fácilmente el código de comercio para poder linkearlo al medio de pago.
<br>


![Imagen Afiliación](/images/vtex/vtex-hisp-afiliacion-gtw-mco.gif).


<br>

**¡Y listo! Tu afiliación con Mercado Pago ya se encuentra activa.**


## Configura las condiciones de pago

Luego de tener creada tu afiliación con Mercado Pago, puedes ofrecer pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito) y [transferencia bancaria](#bookmark_condición_de_pagos_para_medios_de_pago_por_transferencia_bancaria).


### Condición de pagos para el Checkout de VTEX

Para poder utilizar este tipo de checkout se tienen que configurar los medios de pago por separado: 

1. [Tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito)
2. [Transferencia bancaria (PSE)](#bookmark_condición_de_pagos_para_medios_de_pago_por_transferencia_bancaria)


#### Condición de pagos para tarjeta de crédito

Para crear una condición de pagos con tarjeta de crédito, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. Luego, en la sección de Tarjetas de crédito, elige el medio de pago que quieras agregar. Se deben agregar Visa, MasterCard, American Express y Diners.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1 (la que se corresponde al código de comercio acorde al medio de pago). 
6. En la opción de cuotas, deberás cargar las cuotas e intereses correspondientes al medio de pago y tu número de comercio. 
7. Deja el medio de pago activo y haz clic en Guardar. 

> WARNING
>
> Importante
>
> Las configuración de las cuotas e intereses se debe realizar en VTEX. Es importante que en Mercado Pago esté creado el medio de pago para ser procesado como modelo gateway con todas las cuotas prendidas y con los intereses en 0.
<br>


![Imagen Medio de Pago](/images/vtex/vtex-hisp-credito-gtw)


<br>

#### Condición de pagos para medios de pago por transferencia bancaria

Para crear una condición de pago con PSE, sigue estos pasos: 

1. En el panel de administración, ingresa en Configuraciones de medios de pago. 
2. En la pestaña Condiciones de pago, haz clic en +. 
3. Luego, en la sección de Tarjetas de débito, elige el medio de pago que quieras agregar. Se deben agregar Débito online.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status. 
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV1.
6. En la opción de cuotas, selecciona cuotas automáticas. Esto te permite usar la configuración de tu cuenta de Mercado Pago. 
7. Haz clic en Guardar. 


> WARNING
>
> Importante
>
> Es importante que en Mercado Pago esté creado el medio de pago para ser procesado como modelo gateway.
<br>


![Imagen transferencia](/images/vtex/vtex-hispanos-pse.gif)


<br>
> Los cambios en las condiciones de pago pueden demorar hasta 10 minutos en aplicarse.

------------

----[mla, mco]----

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
<br>

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

> Para conocer el detalle sobre un pago rechazado, revisa el `status_detail` y busca la información en los [manejos de respuesta de error](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/api/handling-responses/).

## Errores comunes

Los errores más comunes son los siguientes:

| Mensaje | Significado |
|-------------------|--------------------------------------------|
| `unauthorized_use_of_live_credentials` | Las credenciales de la cuenta de Mercado Pago no están habilitadas. Tienes que ir a la página de credenciales y completar el formulario de “Quiero ir a producción”. |
| `invalid installments` | Se está intentando procesar el pago con una cuota que no está habilitada. Se debe ir a la configuración del medio de pago y definir las cuotas como Automáticas. |
| `invalid_users` | Se está intentando pagar con el mismo usuario que se está cobrando. Volver a intentar el pago con un mail pagador distinto |
| `Cannot infer Payment Method` | Se quiere pagar con una tarjeta distinta al tipo de tarjeta seleccionado o no esta creado el medio de pago para el modo de procesamiento *gateway* en Mercado Pago. Por ejemplo, se ingresó el número de una tarjeta de crédito en la opción de tarjeta de débito. |

> Para más información, visita el [sitio oficial de VTEX](https://help.vtex.com/) y el [sitio de Status de Vtex](https://status.vtex.com/).

------------
