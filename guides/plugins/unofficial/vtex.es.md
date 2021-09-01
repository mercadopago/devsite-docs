# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago.**

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), [tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito) [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, tienes la opción de [recibir pagos directamente desde el sitio web de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_pro).

## Etapas para configurar

Los **pasos para comenzar a operar con Mercado Pago** son los siguientes:

1. Crea una [cuenta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si aún no tienes una.
2. Registra la afiliación con Mercado Pago.
3. Configura las condiciones de pago.
4. Agrega el device fingerprint.


## Configurar la afiliación de pasarela con Mercado Pago

Para crear una **afiliación de pasarela de pago con Mercado Pago**, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda.
2. En la pestaña de Afiliación de Gateway, haz clic en el botón "+".
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
| MaxInstallments | Elige la cantidad de cuotas máximas que quieres ofrecer en Mercado Pago. |
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

![Imagen Afiliación](/images/vtex/vtex-hisp-afiliacion-arg.gif)


**¡Y listo! Tu afiliación con Mercado Pago ya se encuentra activa.**


## Configurar la afiliación con MercadoPagoV2   

----[mlb]----

> WARNING
>
> Importante
>
> Recuerda que la pasarela MercadoPagoV2 por ahora solo agrega las condiciones de pago Boleto Bancário, Pix, Medios Off y Checkout Pro.

------------

Para crear una afiliación de pago con Mercado Pago, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda.
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +.
3. Ingresa en el conector MercadoPagoV2.
4. Completa los campos correspondientes y guarda los cambios.

| Campos | Datos necesarios |
| --- | --- |
| Application Key | Refiere a las [credenciais]([FAKER][CREDENTIALS][URL]) de Mercado Pago. Completa con tu clave pública. |
| Application Token | Refiere a las [credenciais]([FAKER][CREDENTIALS][URL]) de Mercado Pago. Completa con tu Access Token. |
| Periodo de vencimiento del ticket | Plazo, en días hábiles, para el vencimiento del pago. Si el cliente paga fuera de plazo, el dinero se depositará en su cuenta en Mercado Pago.|
| Nombre para resúmenes | Nombre de la tienda, el valor de este campo aparecerá en la factura de la tarjeta del cliente. |
| Cuotas máximas | Número máximo de cuotas disponibles. |
| Categoría principal de la tienda | Categoria de tienda. |
| Reembolso automático / manual | Selecciona si deseas que Mercado Pago reembolse automáticamente en caso de cancelación o si deseas retener el monto pagado para que el cliente lo utilice en futuras compras. |
| Modo binário | Configura si el pago puede pasar por revisión manual o no. |
| Métodos de pago excluídos (Visa, Paypal,u otros) | Los métodos de pago se excluirán en el momento de la compra. |
| Tipos de pago excluidos (credit_card, bank_transfer, ticket e outros) | Los tipos de pago se excluirán en el momento de la compra. |
| Modo de procesamiento | Configura si el pago será gateway o agregador. |
| Integrator ID | Para programadores o agencias que realizan la integración. |
| Moneda | Moneda a configurar (USD o local). |

5. Haz clic en guardar. 

![Setting affiliation in VTEX](/images/vtex/vtex_account_installment_7_2.gif)


¡Y listo! Tu afiliación con MercadoPagoV2 ya se encuentra activa.


## Configura las condiciones de pago 

----[mla, mlm, mlc, mco, mpe, mlu]----

Luego de tener creada tu afiliación con MercadoPagoV2, puedes configurar pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_débito), [tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito) [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, tienes la opción de [recibir pagos directamente desde el sitio web de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_pro).

------------

----[mlb]----

Luego de tener creada tu afiliación con MercadoPagoV2, puedes configurar pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_débito), [boleto bancário](#bookmark_condição_de_pagamento_boleto_bancário), [Pix](#bookmark_condição_de_pagamento_pix),[Mercado Pago Offline](#bookmark_condição_de_pagamento_mercado_pago_offline) e também pagamentos via [Checkout Pro](#bookmark_condição_de_pagamento_checkout_pro).

------------

<br>

#### Condición de pagos para tarjeta de crédito

Para crear un plazo de pago con tarjeta de crédito utilizando su afiliación con Mercado Pago, sigue estos pasos:

1. En el panel de administración de tu tienda, accede a "Configuración" desde el módulo de pagos.
2. En la pestaña "Condiciones de pago", haga clic en el botón "+".
3. En la sección "Tarjeta de crédito", elija qué marca agregar al método de pago.
4. Informa el "Nombre de la regla" para facilitar la identificación y activar el plazo de pago en el campo "Estado".
5. Informa tu afiliación con MercadoPagoV1 en el campo "Proceso con afiliación".
----[mla, mco, mpe, mlc, mlu,mlb]----
6. En las opciones de cuotas, elije “Automática” para utilizar las condiciones de las cuotas directamente desde tu cuenta de Mercado Pago.
7. Haz clic en “Guardar".
------------
----[mlm]----
6. En las opciones de mensualidad, elije “Automática" para utilizar las condiciones de las mensualidades directamente desde tu cuenta de Mercado Pago.
7. Clic en “Guardar".
------------


<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex-hisp-credito-gtw.gif)

----[mlb]----

### Condición de pago boleto bancário

Para crear un **plazo de pago usando boleto bancário con tu afiliación con MercadoPagoV2**, sigue estos pasos:

1. En el panel de administración de tu tienda, accede a "Configuración" desde el módulo de pagos.
2. En la pestaña "Condiciones de pago", haz clic en el botón "+".
3. En la sección "Otro", elige como condición de pago "Boleto Bancário".
4. Asígnale un nombre a la regla para facilitar la identificación. Luego, activa la condición en el campo "Status".
5. Informa tu afiliación con MercadoPagoV2 en el campo "Proceso con afiliación".
6. Haz clic en “Guardar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex-hispanos-efectivo.gif)


### Condición de pago de Pix

Para crear una condición de pago Pix usando tu afiliación con MercadoPagoV2, sigue estos pasos:

#### Requisito previo
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtén una llave Pix 

Para comenzar, debes tener registrada una llave Pix en la cuenta del vendedor. Este dato es único, sirve para identificar tu cuenta y te permitirá utilizar las funcionalidades del medio de pago.

[Conoce cómo crear una llave Pix](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required)

> Ten en cuenta que el registro de la llave Pix puede demorar unos minutos.

Para **crear una condición de pago Pix usando tu afiliación con MercadoPagoV2, sigue estos pasos:

1. En el panel de administración de tu tienda, accede a "Configuración" desde el módulo de pagos.
2. En la pestaña Condiciones de pago, haga clic en el botón "+".
3. En la sección Pago instantáneo, elija el método de pago Pix.
4. Asígnale un nombre a la regla para facilitar la identificación. Luego, activa la condición en el campo "Status".
5. Informe su afiliación a MercadoPagoV2 en el campo "Proceso con afiliación".
6. Haz clic en "Guardar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_pagamento_pix_2.gif)

------------

### Condición de pagos para Mercado Pago Offline

Para crear una **condición de pago de Mercado Pago Offline usando tu afiliación con MercadoPagoV2, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en el botón "+".
3. En la sección Otros, elige la condición de pago "MercadoPagoOff".
4. Asígnale un nombre a la regla para facilitar la identificación. Luego, activa la condición en el campo "Status".
5. Informa tu afiliación a MercadoPagoV2 en el campo "Proceso con afiliación".
6. Haz clic en "Guardar."
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_mercado_pago_offline_2.gif)

> Los cambios en las condiciones de pago pueden tardar hasta 10 minutos en aplicarse.


### Condiciones de pago Checkout Pro

----[mla, mco, mpe, mlc, mlu, mlm]----
[Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction) es la integración que te permite cobrar a través de Mercado Pago, con métodos de pago como comprobante de pago y billetera digital de Mercado Pago.
------------
----[mlb]----
[Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction) es la integración que te permite cobrar a través de Mercado Pago, con métodos de pago como Pix, comprobante de pago, débito virtual de Caixa y billetera digital de Mercado Pago.
------------

#### Configura el método de pago de Mercado Pago

**El comprador será redirigido a la web de Mercado Pago** y una vez finalizado el proceso, volverá a tu tienda.

Para crear este medio de pago, sigue los pasos a continuación:

1. En el panel de administración de tu tienda, accede a "Configuración" desde el módulo de pagos.
2. En la pestaña "Condiciones de pago", haz clic en el botón "+".
3. En la sección Otros, elige la condición de pago "Mercado Pago".
4. Asígnale un nombre a la regla para facilitar la identificación. Luego, activa la condición en el campo "Status".
5. Informa tu afiliación a MercadoPagoV2 en el campo "Proceso con afiliación".
6. Haz clic en "Guardar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex-hispanos-cow-pro.gif)

#### Condición de pagos para el MercadoPagoPro

Para crear una condición de pago de MercadoPagoPro usando la afiliación con MercadoPagoV2, sigue estos pasos:

1. En el panel de administración, ingresa en "Configuraciones de medios de pago".
2. En la pestaña Condiciones de pago, haz clic en el botón "+".
3. En la sección Otro, elige como medio de pago "MercadoPagoPro".
4. Asígnale un nombre a la regla para facilitar la identificación. Luego, activa la condición en el campo "Status".
5. Informa tu afiliación a MercadoPagoV2 en el campo "Proceso con afiliación".
6. Haz clic en Guardar.
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex-hispanos-cow.gif)


#### Condición de pagos para el MercadoPagoWallet

Para crear una condición de pago de MercadoPagoWallet usando la afiliación con MercadoPagoV2, sigue estos pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en el botón "+".
3. En la sección Otro, elige como medio de pago "MercadoPagoWallet".
4. Asígnale un nombre a la regla para facilitar la identificación. Luego, activa la condición en el campo "Status".
5. Informa tu afiliación a MercadoPagoV2 en el campo "Proceso con afiliación".
6. Haz clic en Guardar.
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex-hispanos-cow-wallet.gif)

<!-- -->
> NOTE
> 
> Nota
>
> > Los cambios en las condiciones de pago pueden tardar hasta 10 minutos en aplicarse. <br>

----[mla, mco, mpe, mlc, mlu, mlb]----
## Configura pagos en cuotas sin interés en tu cuenta de Mercado Pago.

1. Accede a tu cuenta de Mercado Pago y haz clic en "Tu negocio"
2. Haz clic en la opción "Configuración". Luego, navega hasta el campo "Ofrecer cuotas sin interés" y haz clic en "Activar".
3. Configura cuántas cuotas deseas ofrecer y haz clic en "Activar" para confirmar los cambios.

<p>&nbsp;</p>

![Setting affiliation in VTEX](/images/vtex/vtex-hisp-cuotas.gif)

¡Y listo! Ya estás ofreciendo cuotas sin interés.
------------

----[mlm]----
## Configura pagos en mensualidades sin interés en tu cuenta de Mercado Pago.

1. Accede a tu cuenta de Mercado Pago y haz clic en "Tu negocio"
2. Haz clic en la opción "Configuración", navegue hasta el campo "Ofrecer mensualidades sin interés" y haz clic en "Activar".
3. Configura cuántas mensualidades sin interés deseas ofrecer y haz clic en "Activar" para confirmar los cambios.

<p>&nbsp;</p>

![Setting affiliation in VTEX](/images/vtex/vtex-hisp-cuotas.gif)

¡Y listo! Ya estás ofreciendo mensualidades sin interés.
------------

## Obtén una aprobación más rápida enviando el device fingerprint

Mercado Pago tiene sus propias herramientas de prevención de fraude. Siempre que sea posible, **te recomendamos que envíes información sobre el comportamiento del cliente para detectar movimientos inusuales y evitar transacciones fraudulentas**. No te preocupes, cuidamos los datos de tus clientes y no los compartimos con nadie.

Para configurar el device fingerprint, sigue estos pasos:

1. En el panel de administración de tu tienda, accede a Checkout desde el módulo "Configuración de la tienda".
2. Haz clic en "editar". Esto te permitirá modificar la configuración de tu sitio.
3. Ve a la pestaña "Código" y, dentro del módulo de archivos, haz clic en "checkout5-custom.js".
4. Copia y pega el siguiente código y haz clic en guardar.
<p>&nbsp;</p>

```javascript
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```
<br>

![Setting deviceid in VTEX](/images/vtex/vtex_deviceid_6_2.gif)



<!-- -->
> Para más información, visete el site [oficial da VTEX](https://help.vtex.com/) o [site de status da Vtex](https://status.vtex.com/).

------------
