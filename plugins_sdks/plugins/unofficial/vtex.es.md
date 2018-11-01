# VTEX

## ¿Qué es VTEX?

[VTEX](https://www.vtex.com/es/) es una potente plataforma de e-commerce PCI compliance basada en Brasil con operación en toda latinoamérica que permite procesar pagos a traves de Mercado Pago

Para obtener mayor información sobre las posibilidades que VTEX ofrece ingresar a [su sitio de ayuda] (help.vtex.com/es).

## ¿Cómo puedo operar con Mercado Pago en VTEX?

VTEX permite procesar pagos en todos los modos de operación que Mercado Pago ofrece.

#### Modo Agregador

Recibir pagos utilizando todas las tarjetas y promociones que Mercado Pago ofrece, además de transferencias bancarias y medios de pagos off-line.

#### Modo Gateway

Recibir pagos directamente en los códigos de comercio del vendedor utilizando todas las promociones propias del vendedor.

#### Modo All In

Combinar la operación de Gateway y Agregador ofreciendo al comprador la mejor opción de pago.

## Configurar VTEX para operar en modo Agregador

Los pasos a seguir para usar y configurar el checkout personalizado modo Agregador son:

1. [Configurar Afiliación](##Configurar_afiliación_en_modo_agregador).
2. [Configurar Planes de Pago Nativos](##Configurar_plan_de_pago_Nativo_en_modo_agregador).
3. [Configurar Planes de Pago Off-Line](##Medios_Off-Line_por_país_en_modo_agregador).
4. [Configurar Planes de Pago Personalizados](##Configurar_plan_de_pago_personalizado).

Para usar el checkout redireccionado en modo agregador se debe realizar lo que se describe a continuación:
1. [Configurar Afiliación](#bookmark_Configurar_afiliación_checkout_redireccionado).
2. [Configurar plan de pago checkout redirect](#bookmark_Configurar_plan_de_pago_checkout_redireccionado).

## Configurar VTEX para operar en modo Gateway
1. [Configurar Afiliación](#bookmark_Configurar_afiliación_para_operar_en_modo_Gateway).
2. [Configurar Planes de pago Nativos](##Configurar_plan_de_pago_para_operar_en_modo_Gateway).

## Configurar Device en VTEX
1. [Configurar DeviceID](##Configurar_DeviceID).

## Interpretar logs de VTEX
1. [Realizar las interpretaciones de la respuesta del pago en vtex](##Interpretar_log_de_VTEX).

## Configurar afiliación en modo agregador

Para operar en modo Agregador solo es necesario configurar una afiliación.

1. Seleccione en el menú lateral la opción "Pago".
2. Configuraciones. 

    ![VTEX afiliation](/images/vtex-config.png)
    
3. Seleccionar en el menú superior la opción "Afiliaciones de Gateway"
4. Añadir nueva afiliación con el botón (+)

    ![VTEX afiliation](/images/vtex-afiliation.png)
    
5. Buscar y seleccionar "MercadoPagoV1".

    ![VTEX afiliation](/images/vtex-afiliation-3.png)    
    
    
6. Completar la información requerida en la afiliación.

    ![VTEX afiliation](/images/vtex-afiliation-4.png)

----[mlc, global]----
- Nombre de la afiliación: Nombre que identificará la afiliación.
- OAuth login: No se utiliza.
- PublicKey PublicKey: PublicKey de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- AccessToken Access: AccessToken de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- RefreshToken RefreshToken: No se utiliza - dejar en blanco.
- ExpiredTokenIn: No se utiliza - dejar en blanco.
- Merchant Account Id: No se utiliza - dejar en blanco.
- Processing Mode: Seleccionar aggregator.
- CountryName: Seleccionar país.
- SoftDescriptor: No se utiliza - dejar en blanco.
- Description: Descripción de la operación (puede ser blanco).
- CategoryId: Categoría del producto - Seleccionar de la lista.
- Financial Institution: Sólo para Chile - ingresar 1234.
- Use External Installments: Yes.
- Antifraud: Yes.
- Time Zone: Región que define la hora local.
- orderExpirationHours: Durante cuántas horas se consultará el estado del pedido a Mercado Pago.
- maxInstallments: Cantidad máxima de cuotas.
- Categoria Principal: Categoría del producto - Seleccionar de la lista.
- Captura de segurança antecipada: No se utiliza - dejar en blanco.

------------

----[mlb, global]----
- Nombre de la afiliación: Nombre que identificará la afiliación.
- OAuth login: No se utiliza.
- PublicKey PublicKey: PublicKey de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- AccessToken Access: AccessToken de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- RefreshToken RefreshToken: No se utiliza - dejar en blanco.
- ExpiredTokenIn: No se utiliza - dejar en blanco.
- Merchant Account Id: No se utiliza - dejar en blanco.
- Processing Mode: Seleccionar aggregator.
- CountryName: Seleccionar país.
- SoftDescriptor: Texto para el resumen de la descripción del pago en la tarjeta de crédito (solo para Brasil).
- Description: Descripción de la operación (puede ser blanco).
- CategoryId: Categoría del producto - Seleccionar de la lista.
- Financial Institution: No se utiliza - dejar en blanco.
- Use External Installments: Yes.
- Antifraud: Yes.
- Time Zone: Región que define la hora local.
- orderExpirationHours: Durante cuántas horas se consultará el estado del pedido a Mercado Pago.
- maxInstallments: Cantidad máxima de cuotas.
- Categoria Principal: Categoría del producto - Seleccionar de la lista.
- Captura de segurança antecipada: Cantidad de horas para realizar la captura automatica.

------------

----[mla, global]----
- Nombre de la afiliación: Nombre que identificará la afiliación.
- OAuth login: No se utiliza.
- PublicKey PublicKey: PublicKey de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- AccessToken Access: AccessToken de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- RefreshToken RefreshToken: No se utiliza - dejar en blanco.
- ExpiredTokenIn: No se utiliza - dejar en blanco.
- Merchant Account Id: No se utiliza - dejar en blanco.
- Processing Mode: Seleccionar aggregator.
- CountryName: Seleccionar país.
- SoftDescriptor: No se utiliza - dejar en blanco.
- Description: Descripción de la operación (puede ser blanco).
- CategoryId: Categoría del producto - Seleccionar de la lista.
- Financial Institution: No se utiliza - dejar en blanco.
- Use External Installments: Yes.
- Antifraud: Yes.
- Time Zone: Región que define la hora local.
- orderExpirationHours: Durante cuántas horas se consultará el estado del pedido a Mercado Pago.
- maxInstallments: Cantidad máxima de cuotas.
- Categoria Principal: Categoría del producto - Seleccionar de la lista.
- Captura de segurança antecipada: Cantidad de horas para realizar la captura automatica.

------------

----[mpe, global]----
- Nombre de la afiliación: Nombre que identificará la afiliación.
- OAuth login: No se utiliza.
- PublicKey PublicKey: PublicKey de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- AccessToken Access: AccessToken de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- RefreshToken RefreshToken: No se utiliza - dejar en blanco.
- ExpiredTokenIn: No se utiliza - dejar en blanco.
- Merchant Account Id: No se utiliza - dejar en blanco.
- Processing Mode: Seleccionar aggregator.
- CountryName: Seleccionar país.
- SoftDescriptor: No se utiliza - dejar en blanco.
- Description: Descripción de la operación (puede ser blanco).
- CategoryId: Categoría del producto - Seleccionar de la lista.
- Financial Institution: No se utiliza - dejar en blanco.
- Use External Installments: Yes.
- Antifraud: Yes.
- Time Zone: Región que define la hora local.
- orderExpirationHours: Durante cuántas horas se consultará el estado del pedido a Mercado Pago.
- maxInstallments: Cantidad máxima de cuotas.
- Categoria Principal: Categoría del producto - Seleccionar de la lista.
- Captura de segurança antecipada: No se utiliza - dejar en blanco.

------------

----[mco, global]----
- Nombre de la afiliación: Nombre que identificará la afiliación.
- OAuth login: No se utiliza.
- PublicKey PublicKey: PublicKey de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- AccessToken Access: AccessToken de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- RefreshToken RefreshToken: No se utiliza - dejar en blanco.
- ExpiredTokenIn: No se utiliza - dejar en blanco.
- Merchant Account Id: No se utiliza - dejar en blanco.
- Processing Mode: Seleccionar aggregator.
- CountryName: Seleccionar país.
- SoftDescriptor: No se utiliza - dejar en blanco.
- Description: Descripción de la operación (puede ser blanco).
- CategoryId: Categoría del producto - Seleccionar de la lista.
- Financial Institution: No se utiliza - dejar en blanco.
- Use External Installments: Yes.
- Antifraud: Yes.
- Time Zone: Región que define la hora local.
- orderExpirationHours: Durante cuántas horas se consultará el estado del pedido a Mercado Pago.
- maxInstallments: Cantidad máxima de cuotas.
- Categoria Principal: Categoría del producto - Seleccionar de la lista.
- Captura de segurança antecipada: No se utiliza - dejar en blanco.

------------

----[mlv, global]----
- Nombre de la afiliación: Nombre que identificará la afiliación.
- OAuth login: No se utiliza.
- PublicKey PublicKey: PublicKey de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- AccessToken Access: AccessToken de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- RefreshToken RefreshToken: No se utiliza - dejar en blanco.
- ExpiredTokenIn: No se utiliza - dejar en blanco.
- Merchant Account Id: No se utiliza - dejar en blanco.
- Processing Mode: Seleccionar aggregator.
- CountryName: Seleccionar país.
- SoftDescriptor: No se utiliza - dejar en blanco.
- Description: Descripción de la operación (puede ser blanco).
- CategoryId: Categoría del producto - Seleccionar de la lista.
- Financial Institution: No se utiliza - dejar en blanco.
- Use External Installments: Yes.
- Antifraud: Yes.
- Time Zone: Región que define la hora local.
- orderExpirationHours: Durante cuántas horas se consultará el estado del pedido a Mercado Pago.
- maxInstallments: Cantidad máxima de cuotas.
- Categoria Principal: Categoría del producto - Seleccionar de la lista.
- Captura de segurança antecipada: No se utiliza - dejar en blanco.

------------

----[mlu, global]----
- Nombre de la afiliación: Nombre que identificará la afiliación.
- OAuth login: No se utiliza.
- PublicKey PublicKey: PublicKey de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- AccessToken Access: AccessToken de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- RefreshToken RefreshToken: No se utiliza - dejar en blanco.
- ExpiredTokenIn: No se utiliza - dejar en blanco.
- Merchant Account Id: No se utiliza - dejar en blanco.
- Processing Mode: Seleccionar aggregator.
- CountryName: Seleccionar país.
- SoftDescriptor: No se utiliza - dejar en blanco.
- Description: Descripción de la operación (puede ser blanco).
- CategoryId: Categoría del producto - Seleccionar de la lista.
- Financial Institution: No se utiliza - dejar en blanco.
- Use External Installments: Yes.
- Antifraud: Yes.
- Time Zone: Región que define la hora local.
- orderExpirationHours: Durante cuántas horas se consultará el estado del pedido a Mercado Pago.
- maxInstallments: Cantidad máxima de cuotas.
- Categoria Principal: Categoría del producto - Seleccionar de la lista.
- Captura de segurança antecipada: No se utiliza - dejar en blanco.

------------

## Configurar plan de pago Nativo en modo agregador

Plan de pago nativo son las tarjetas de crédito / débito que Vtex tiene integradas

1. El menu superior.
2. Clic en condiciones de pago.
3. En el lado derecho, haga clic en Agregar nueva condición.
4. Cerca del campo de búsqueda.
5. En el botón (+)

    ![VTEX afiliation](/images/vtex-afiliation-2.png)

6. Buscar y seleccionar el medio de pago que se quiere agregar, para el ejemplo vamos a usar American Express.

    ![Native plan](/images/vtex-native-plan-3.png)

7. Colocar una descripción (puede ser blancos).
8. Seleccionar la afiliación.
9. Seleccionar cuotas `automático`.
10. Colocar Status Activo para activar el medio de pago en el checkout - Puede configurarse y activarse luego.
11. Salvar la configuración.

    ![Native plan](/images/vtex-native-plan-4.png)

12. Verificar que se agregó el plan de nativo.

    ![Native plan](/images/vtex-native-plan-5.png)

## Configurar Plan de Pago Off-Line en modo agregador

Plan de pago Off-Line son los medios de pago cuyos pagos se realizan en dos pasos:
- Primero se genera de un ticket con las instrucciones para el pago.
- Segundo se realiza el pago en efectivo o via un ATM siguiendo las instrucciones del ticket.

## Medios Off-Line por país en modo agregador

- Argentina: PagoFacil, Rapipago, RedLink.
- Chile: Servipag.
- Colombia: Efecty, Davivienda, Baloto.
- México: Banamex, Bancomer, Oxxo.
- Perú: PagoEfectivo.
- Uruguay: Abitab, Redpagos.
- Venezuela: Banesco, Mercantil, Provincial.
- Brasil: Boleto Bancario

1. El menu superior.
2. Clic en condiciones de pago.
3. En el lado derecho, haga clic en Agregar nueva condición.
4. Cerca del campo de búsqueda.
5. En el botón (+)

    ![VTEX afiliation](/images/vtex-afiliation-2.png)

6. Buscar y seleccionar Boleto Bancario - Este plan de pago incluye todos los medios Off-Line del país.

    ![Offline](/images/vtex-offline-plan-3.png)

7. Colocar una descripción (puede ser blancos).
8. Seleccionar la afiliación.
9. Colocar Status Activo para activar el medio de pago en el checkout - Puede configurarse y activarse luego.
10. Salvar la configuración.

    ![Offline](/images/vtex-offline-plan-4.png)

## Configurar plan de pago personalizado

Plan de pago personalizado permite sumar a VTEX tarjetas de crédito locales que VTEX no integra como un medio de pago nativo y se pueden utilizar con Mercado Pago.

Medios de pago personalizados por país:

Argentina: Argencard, Cencosud, CMR, Cordial, Cordobesa, Mercado Pago + Banco Patagonia.
Chile: CMR, Magna, Presto.
Colombia: Codensa.
Uruguay: Oca.

1. Desplegar el menú de Catalog.
2. Ingresar en PCI Gateway.

    ![Custom plan](/images/vtex-custom-1.png)

3. Ajustes.
4. Pagos personalizados.
5. Seleccionar una Cobrand para configurar.

    ![Custom plan](/images/vtex-custom-2.png)

6. Completar los campos para configurar la Tarjeta de crédito deseada. Se deben copiar y pegar los valores del instructivo para evitar errores.
7. Salvar la configuración.

    ![Custom plan](/images/vtex-custom-3.png)

8. Colocar una descripción (puede ser blancos).
9. Seleccionar la afiliación.
10. Colocar Status Activo para activar el medio de pago en el checkout - Puede configurarse y activarse luego.
11. Seleccionar automático.
12. Salvar la configuración.

![Custom plan](/images/vtex-custom-4.png)

----[mlc, global]----
### Configurar plan de pago Webpay en modo agregador

1. Desplegar el menú de Catalog .
2. Ingresar en PCI Gateway.

    ![Offline](/images/vtex-webpay-1.png)

3. Ajustes.
4. Planes de pago.
5. Nuevo plan de pago.

    ![Offline](/images/vtex-webpay-2.png)

6. Buscar y seleccionar Webpay.

    ![Offline](/images/vtex-webpay-3.png)

7. Colocar una descripción (puede ser blancos).
8. Seleccionar la afiliación.
9. Colocar Status Activo para activar el medio de pago en el checkout - Puede configurarse y activarse luego.
10. Salvar la configuración.

    ![Offline](/images/vtex-webpay-4.png)
    
------------


----[mla, global]----

## Configurar Plan de Pago Personalizado en modo agregador - Tarjetas de Argentina 

| Nombre                   | Descripción              | Medio de pago |       Bines {min}-{max},{min}-{max},{bin1},{bin2}       | Código de pago en adquiriente (opcional) |
|--------------------------|--------------------------|---------------|:-------------------------------------------------------:|------------------------------------------|
| Argencard                | Argencard                | Mastercard    | 501105-501105                                           | argencard                                |
| Cencosud                 | Cencosud                 | Mastercard    | 603493-603493                                           | cencosud                                 |
| CMR                      | CMR                      | Mastercard    | 557039-557039                                           | cmr                                      |
| Cordial                  | Cordial                  | Mastercard    | 522135-522135,522137-522137,527555-527555               | cordial                                  |
| Cordobesa                | Cordobesa                | Mastercard    | 542702-542702,544764-544764,550073-550073,528824-528824 | cordobesa                                |
| Mercado Pago - Patagonia | Mercado Pago - Patagonia | Mastercard    | 515073-515073,515070-515070,532383-532383,532384-532384 | mercadopago_cc                           |

------------

----[mlc, global]----

## Configurar Plan de Pago Personalizado en modo agregador - Tarjetas de Chile

| Nombre | Descripción | Medio de pago |                                   Bines {min}-{max},{min}-{max},{bin1},{bin2}                                   | Código de pago en adquiriente (opcional) |
|--------|-------------|---------------|:---------------------------------------------------------------------------------------------------------------:|------------------------------------------|
| Presto | Presto      | Mastercard    | 920000-920099                                                                                                   | presto                                   |
| Magna  | Magna       | Mastercard    | 568000-568099                                                                                                   | magna                                    |
| CMR    | CMR         | Mastercard    | 499847-499847,460072-460072,445596-445596,465375-465375,548740-548740,548742-548742,533187-533187,558984-558984 | cmr                                      |

------------

----[mco, global]----
## Configurar Plan de Pago Personalizado en modo agregador - Tarjetas de Colombia

| Nombre  | Descripción | Medio de pago | Bines {min}-{max},{min}-{max},{bin1},{bin2} | Código de pago en adquiriente (opcional) |
|---------|-------------|---------------|:-------------------------------------------:|------------------------------------------|
| Codensa | Codensa     | Mastercard    | 590712-590712                               | codensa                                  |

------------

----[mlu, global]----
## Configurar Plan de Pago Personalizado en modo agregador - Tarjetas de Uruguay

| Nombre | Descripción | Medio de pago |                     Bines {min}-{max},{min}-{max},{bin1},{bin2}                     | Código de pago en adquiriente (opcional) |
|--------|-------------|---------------|:-----------------------------------------------------------------------------------:|------------------------------------------|
| OCA    | OCA         | Mastercard    | 589892-589892,542991-542991,549530-549530,549564-549564,549571-549571,549576-549576 | oca                                      |

------------

## Configurar afiliación checkout redireccionado
Para utilizar el checkout redirect es necesario configurar una afiliación específica
El checkout redirect puede convivir con el checkout transparente.
1. Desplegar el menú lateral
2. Desplegar el menú de Pagos
3. Ingresar en Configuración

    ![VTEX afiliation](/images/vtex-config.png)

4. Afiliaciones
5. Nueva Afiliación

 ![VTEX afiliation](/images/vtex-afiliation.png)
    
6. Buscar y seleccionar "MercadoPago". 
7. Completar la siguiente información requerida en la afiliación.
- Nombre de la afiliación -> Nombre que identificara la Afiliación
- Client_id PublicKey de Mercado Pago -> Ver [Credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic).
- Client_secret -> Ver [Credenciales](https://www.mercadopago.com/mla/account/credentials?type=basic).
- AccessToken de Mercado Pago -> Ver [Credenciales](https://www.mercadopago.com/mla/account/credentials).
- Pais -> Seleccionar País
- Time Zone -> Región que define la hora local
- orderExpirationHours -> Durante cuántas horas se consultará el estado del pedido a MP
- maxInstallments -> Cantidad máxima de cuotas 
- Categoria Principal -> Categoría del producto
- Tipo de Estorno
    - Automatico sempre que possivel - Genera la devolución del pago en MP
    - Notificaçao por E-mail - NO genera la devolución del pago en MP

## Configurar plan de pago checkout redireccionado
Luego de configurar la afiliación es necesario agregar el plan de pago
1. Desplegar el menú lateral
2. Desplegar el menú de Pagos
3. Ingresar en Configuración

    ![VTEX afiliation](/images/vtex-config.png).
    
4. Planes de pago
5. Nuevo plan de pago
6. Buscar en la grupo OTRO - Mercado Pago
7. Colocar una descripción (puede ser blancos)
8. Seleccionar la afiliación creada para redirect
9. Seleccionar cuotas A vista
10. Colocar Status Activo para activar el medio de pago en el checkout - Puede configurarse y activarse luego
11. Salvar la configuración

----[mla, mco, global]----
## Configurar afiliación para operar en modo Gateway
Cuando tu asesor comercial te haya informado que ya están cargados los números de comercio y te haya pasado los `merchant_account_id` de cada número de comercio realizar los siguientes pasos para cada una de las tarjetas que tengas número de comercio:
1. Desplegar el menú lateral
2. Desplegar el menú de Pagos
3. Ingresar en Configuración

    ![VTEX afiliation](/images/vtex-config.png).
    
4. Afiliaciones
5. Nueva Afiliación

 ![VTEX afiliation](/images/vtex-afiliation.png)
    
6. Buscar y seleccionar "MercadoPagoV1".

    ![VTEX afiliation](/images/vtex-afiliation-3.png)    
    
7. Completar los campos que se describen a continuación:
- Nombre de la afiliación: Nombre que identificará la afiliación.
- OAuth login: No se utiliza.
- PublicKey PublicKey: PublicKey de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- AccessToken Access: AccessToken de Mercado Pago, [ver credenciales](https://www.mercadopago.com.ar/account/credentials).
- RefreshToken RefreshToken: No se utiliza - dejar en blanco.
- ExpiredTokenIn: No se utiliza - dejar en blanco.
- Merchant Account Id: Completar con el id que fueron compartidos por su asesor comercial correspondientes a cada tarjeta.
- Processing Mode: Seleccionar gateway.
- CountryName: Seleccionar país.
- SoftDescriptor: No se utiliza - dejar en blanco.
- Description: Descripción de la operación (puede ser blanco).
- CategoryId: Categoría del producto - Seleccionar de la lista.
- Financial Institution: No se utiliza - dejar en blanco.
- Use External Installments: No.
- Antifraud: Yes.
- Time Zone: Región que define la hora local.
- orderExpirationHours: Durante cuántas horas se consultará el estado del pedido a Mercado Pago.
- maxInstallments: Cantidad máxima de cuotas.
- Categoria Principal: Categoría del producto - Seleccionar de la lista.
- Captura de segurança antecipada: Por defecto inmediato - cambiar si se quiere realizar captura diferida del pago.

## Configurar plan de pago para operar en modo Gateway
Luego de configurar la afiliación es necesario agregar el plan de pago:
1. Desplegar el menú lateral
2. Desplegar el menú de Pagos
3. Ingresar en Configuración

    ![VTEX afiliation](/images/vtex-config.png).
    
4. Planes de pago
5. Nuevo plan de pago

    ![Native plan](/images/vtex-native-plan-3.png).
    
6. Seleccionar el medio de pago (crédito o débito) a cargar
7. Colocar una descripción.
8. Seleccionar la afiliación creada para este medio de pago
9. Seleccionar cuotas En cuotas
10. Cargar las cuotas y el interés correspondiente del medio de pago.
11. Colocar Status Activo para activar el medio de pago en el checkout - Puede configurarse y activarse luego
12. Salvar la configuración

------------

## Configurar DeviceID

1. Desplegar el menú de Catalog.
2. Ingresar en Portal.

    ![Custom plan](/images/vtex-device-settings-1.png)

3. Seleccionar el ícono de ajustes.

    ![Custom plan](/images/vtex-device-settings-2.png)

4. Ingresar en código.
5. Seleccionar checkout5-custom.js.
6. Copiar y pegar el siguiente código:

```
$('body').append('<form><input type="hidden" id="deviceId" name="deviceId" /></form>');
$.getScript("https://resources.mlstatic.com/device/meli-metrix.min.js", function(){});
function startTimer () {
    setTimeout(stopTimer,2000);
}
function stopTimer () {
  	window.vtex.deviceFingerprint = document.getElementById('deviceId').value;
  console.log("MP-deviceId : " + document.getElementById('deviceId').value)
}
window.onload = startTimer;
```

7. Seleccionar "guardar", el resultado final debe verse como la pantalla de ejempo:

    ![Custom plan](/images/vtex-device-settings-3.png)


## Interpretar log de VTEX

Los logs permiten revisar la la información que retorna MercadoPago y VTEX expone para poder tener un mayor entendimiento de lo que ocurrió con una transacción.

También en caso de realizar modificaciones o prender nuevos medios de pago, los logs nos dan la posibilidad de poder validar que todo está funcionando según lo previsto.

Por último, proveen un mayor entendimiento a los equipos comerciales para que puedan dar un mejor soporte a los vendedores y convertirse en una primer instancia de soporte.

Para acceder al log hay que ingresar en la transacción de VTEX

Luego buscar el LOG que contenga el status response y dar click en _ver más_.

Los datos más significativos son los siguientes:

- `"Id":10302316` Numero de transacción de Mercado Pago.
- `"Payment_method_id":"visa"`: Medio de pago.
- `"Payment_type_id":"credit_card"`: Medio de pago.
- `"Status":"authorized"`: Estado del pago.
- `"Status_detail":"pending_capture"`: Detalle del estado del pago.
- `"External_reference":"503451"`: Identificador de VTEX enviado a Mercado Pago.
- `"First_six_digits":"450995"`: Bin de la tarjeta de crédito.
- `"Processing_mode":"gateway"`: Modo de procesamiento del pago (Agregador / Gateway).
- `"Merchant_account_id":"83bb673420b8201f80aff598b3743864"`: Codigo de comercio (solo para Gateway).

Ante un rechazo es muy importante revisar el `Status_detail` que especifica el motivo del mismo.

- `"Status":"rejected"`: Pago rechazado.
- `"Status":"approved"`: Pago aprobado.
- `"Status":"authorized"`: Pago autorizado esperando que se capture.
- `"Status":"pending"`: Pago pendiente.
- `"Status":"cancelled"`: Pago cancelado.

Para ver más detalle de los estados posibles de un pago, ver sección de [posibles respuestas de la API](/guides/payments/api/handling-responses.es.md).
