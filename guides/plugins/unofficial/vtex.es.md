----[mlb]----

> WARNING
>
> Importante
>
> ¡Lo sentimos! Por el momento, esta página no se encuentra disponible en español.<br>
> [Ir a documentación en portugués](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex)

------------

----[mla]----

# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una **plataforma de e-commerce que permite recibir pagos con Mercado Pago.**

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_crédito), [tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito) [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, tienes la opción de [recibir pagos directamente desde el sitio web de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_pro).


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

> WARNING
>
> Importante
>
> Recuerda que la pasarela MercadoPagoV2 por ahora solo agrega las condiciones de pago Boleto Bancário, Pix, Medios Off y Checkout Pro.

Para crear una afiliación de pago con Mercado Pago, sigue estos pasos:

1. Accede a las configuraciones del módulo en el panel de administración de tu tienda.
2. En la pestaña de Afiliación de Gateway, haz clic en el botón +.
3. Ingresa en el conector MercadoPagoV2.
4. Completa los campos correspondientes y guarda los cambios.

| Campos | Dados necessários |
| --- | --- |
| Application Key | Refiere a las [credenciais]([FAKER][CREDENTIALS][URL]) de Mercado Pago. Completa con tu clave pública. |
| Application Token | Refiere a las [credenciais]([FAKER][CREDENTIALS][URL]) de Mercado Pago. Complete con tu Access Token. |
| Periodo de vencimiento del ticket | Plazo, en días hábiles, para el vencimiento del pago. Si el cliente paga fuera de plazo, el dinero se depositará en su cuenta en Mercado Pago.|
| Nombre para resúmenes | Nombre de la tienda, el valor de este campo aparecerá en la factura de la tarjeta del cliente. |
| Cuotas máximas | Número máximo de cuotas disponibles. |
| Categoría principal de la tienda | Categoria de tienda. |
| Reembolso automático / manual | Seleccione si desea que Mercado Pago reembolse automáticamente en caso de cancelación o si desea retener el monto pagado para que el cliente lo utilice en futuras compras. |
| Modo binário | Configura si el pago puede pasar por revisión manual o no. |
| Métodos de pago excluídos (Visa, Paypal,u otros) | Los métodos de pago se excluirán en el momento de la compra. |
| Tipos de pago excluidos (credit_card, bank_transfer, ticket e outros) | Los tipos de pago se excluirán en el momento de la compra. |
| Modo de procesamiento | Configura si el pago será gateway o agregador. |
| Integrator ID | Para programadores o agencias que realizan la integración. |
| Moneda | Moneda a configurar (USD o local). |

5. Click en guardar. 

![Setting affiliation in VTEX](/images/vtex/vtex_account_installment_7_2.gif)


¡Y listo! Tu afiliación con MercadoPagoV2 ya se encuentra activa.


## Configura las condiciones de pago 

----[mla, mlm, mlc, mco, mpe, mlu]----

Luego de tener creada tu afiliación con MercadoPagoV2, puedes configurar pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_débito), [tarjetas de débito](#bookmark_condición_de_pagos_para_tarjeta_de_débito) [medios de pago en efectivo](#bookmark_condición_de_pagos_para_medios_de_pago_en_efectivo). Como también, tienes la opción de [recibir pagos directamente desde el sitio web de Mercado Pago](#bookmark_condición_de_pagos_con_checkout_pro).

----[mlb]----

Luego de tener creada tu afiliación con MercadoPagoV2, puedes configurar pagos con [tarjetas de crédito](#bookmark_condición_de_pagos_para_tarjeta_de_débito), [boleto bancário](#bookmark_condição_de_pagamento_boleto_bancário), [Pix](#bookmark_condição_de_pagamento_pix),[Mercado Pago Offline](#bookmark_condição_de_pagamento_mercado_pago_offline) e também pagamentos via [Checkout Pro](#bookmark_condição_de_pagamento_checkout_pro).
<br>

#### Condición de pagos para tarjeta de crédito

Para crear un plazo de pago con tarjeta de crédito utilizando su afiliación con Mercado Pago, siga los pasos a continuación:


1. En el panel de administración de tu tienda, accede a "Configuración" desde el módulo de pagos.
2. En la pestaña "Condiciones de pago", haga clic en el botón "+" (Agregar nuevas condiciones de pago para ...).
3. En la sección "Tarjeta de crédito", elija qué marca agregar al método de pago.
4. Informar el "Nombre de la regla" para facilitar la identificación y activar el plazo de pago en el campo "Estado".
5. Informe su afiliación con MercadoPagoV1 en el campo "Proceso con afiliación".
6. En las opciones de cuotas, elija la cuota “Automática”, donde utiliza las condiciones de las cuotas directamente desde su cuenta de Mercado Pago.
7. Clic en “Guardar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex-hisp-credito-gtw.gif)

----[mlb]----

### Condición de pago boleto bancário

Para crear un **plazo de pago usando Boleto Bancário usando su afiliación con Mercado Pago**, siga los pasos a continuación:

1. En el panel de administración de tu tienda, accede a "Configuración" desde el módulo de pagos.
2. En la pestaña "Condiciones de pago", haga clic en el botón "+" (Agregar nuevas condiciones de pago para ...).
3. En la sección Otro, elige como condición de pago Boleto Bancario.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. Informe su afiliación con MercadoPagoV2 en el campo "Proceso con afiliación".
6. Clic en “Guardar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex-hispanos-efectivo.gif)


----[mlb]----


### Condición de pago de Pix

Para crear una condición de pago Pix usando su afiliación con MercadoPago V2, siga los pasos a continuación:

#### Requisito prévio
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtener una clave Pix 

Para configurar Pix como un plazo de pago, debe haber registrado una clave Pix en la cuenta del vendedor. Estos datos son únicos, sirven para identificar tu cuenta y te permitirán utilizar las funcionalidades del método de pago.

[Como crear una clave Pix](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required)

> Tenga en cuenta que el registro de la clave Pix puede tardar unos minutos.

Para **crear una condición de pago Pix usando su afiliación con [MercadoPagoV2](#bookmark_criando_afiliação_de_gateway_mercadopagov2)**, siga los pasos a continuación:

1. En el panel de administración de tu tienda, accede a "Configuración" desde el módulo de pagos.
2. En la pestaña "Condiciones de pago", haga clic en el botón "+".
3. En la sección "Pago instantáneo", elija el método de pago Pix.
4. Informar el Nombre de la regla para facilitar la identificación y activar la condición de pago en el campo "Estado".
5. Informe su afiliación a MercadoPagoV2 en el campo "Proceso con afiliación".
6. Haga clic en "Guardar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_pagamento_pix_2.gif)

¡Y pronto! ¡Tu condición de pago Pix with Mercado Pago ya está activa!

### Condición de pagos para el MercadoPagoOff

Para crear una **condición de pago de MercadoPagoOff ,usando su afiliación con MercadoPagoV2**, siga los pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +.
3. En la sección Otro, elige como condición de pago MercadoPagoOff.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV2.
6. Haz clic en Guardar.
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_mercado_pago_offline_2.gif)


¡Y listo! ¡Tu condición de pago de Medios Off Mercado Pago ya está activa!

> Los cambios en las condiciones de pago pueden tardar hasta 10 minutos en aplicarse.


### Condiciones de pago Checkout Pro

[Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction) es la integración que te permite cobrar a través de Mercado Pago Mercado Pago, con métodos de pago como Pix, comprobante de pago, débito virtual de Caixa y billetera digital de Mercado Pago.


#### Configurando el método de pago de Mercado Pago

**El comprador será redirigido a la web de Mercado Pago** y una vez finalizado el proceso, volverá a su tienda.


Para crear este plazo de pago, siga los pasos a continuación:

1. En el panel de administración de tu tienda, accede a "Configuración" desde el módulo de pagos.
2. En la pestaña "Condiciones de pago", haga clic en el botón "+".
3. En la sección Otros, seleccione el término de pago "Mercado Pagado".
4. Informe el "Nombre de la regla" para una fácil identificación y active el plazo de pago en el campo Estado.
5. Informe su afiliación con MercadoPagoV2 en el campo "Proceso con afiliación".
6. Haga clic en "Guardar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex-hispanos-cow-pro.gif)

#### Condición de pagos para el MercadoPago Pro

Para crear una condición de pago de MercadoPagoPro usando su afiliación con MercadoPagoV2, siga los pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +.
3. En la sección Otro, elige como condición de pago MercadoPagoPro.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV2.
6. Haz clic en Guardar.
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex-hispanos-cow.gif)


¡Y listo! ¡Tu condición de pago de Checkout Pro Mercado Pago ya está activa!


#### Condición de pagos para el Mercado Pago Wallet

Para crear una condición de pago de MercadoPagoWallet usando su afiliación con MercadoPagoV2, siga los pasos:

1. En el panel de administración, ingresa en Configuraciones de medios de pago.
2. En la pestaña Condiciones de pago, haz clic en +.
3. En la sección Otro, elige como condición de pago MercadoPagoWallet.
4. Nombra la regla para ayudar facilitar la identificación y activa la condición en el campo Status.
5. En el campo Proceso con la afiliación, elige como afiliación a MercadoPagoV2.
6. Haz clic en Guardar.
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex-hispanos-cow-wallet.gif)

<!-- -->
> NOTE
> 
> Nota
>
> > Los cambios en las condiciones de pago pueden tardar hasta 10 minutos en aplicarse. <br>

## Configurando el pago a plazos en tu cuenta de Mercado Pago.

1. Accede a tu cuenta de Mercado Pago y haz clic en "Tu negocio"
2. Haga clic en la opción "Configuración", navegue hasta el campo "Ofrecer cuotas sin adición" y haga clic en "Activar".
3. Elija "¿Cuántas cuotas desea ofrecer?" y haga clic en "Activar" para confirmar los cambios.

<p>&nbsp;</p>

![Setting affiliation in VTEX](/images/vtex/vtex-hisp-cuotas.gif)

¡Y pronto! No ofrece cuotas de recargo, asumiendo las tarifas de cuotas que ha establecido.

## Obtenga una aprobación más rápida enviando la huella digital del dispositivo

Mercado Pago tiene sus propias herramientas de prevención de fraude. Siempre que sea posible, **le recomendamos que envíe información sobre el comportamiento del cliente para detectar movimientos inusuales y evitar transacciones fraudulentas**. No se preocupe, nos ocupamos de los datos de sus clientes y no los compartimos con nadie.

Para configurar la huella digital del dispositivo, siga los pasos a continuación:

1. En el panel de administración de su tienda, acceda a Checkout desde el módulo "Configuración de la tienda".
2. Haga clic en el icono "editar", refiriéndose a la configuración de su sitio.
3. Vaya a la pestaña "Código" y haga clic en "checkout5-custom.js" en el módulo de archivos.
4. Copie y pegue el siguiente código y haga clic en guardar.
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
