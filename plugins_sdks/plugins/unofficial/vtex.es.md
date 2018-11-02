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

Los pasos a seguir para configurar modo Agregador son:

1. Configurar Afiliación.
1. Configurar Planes de Pago Nativo.
1. Configurar Planes de Pago Off-Line.
1. Configurar Plan de Pago Webpay.
1. Configurar Planes de Pago Personalizados.
1. Configurar DeviceID.

### Configurar afiliación

Para operar en modo Agregador solo es necesario configurar una afiliación.


1. Desplegar el menú de Catalog.
2. Ingresar en PCI Gateway.

    ![VTEX afiliation](/images/vtex-afiliation-1.png)

3. Seleccione en el menú lateral la opción "Pago".
4. Configuraciones. 

    ![VTEX afiliation](/images/vtex-config.png)
    
5. Seleccionar en el menú superior la opción "Afiliaciones de Gateway"
6. Añadir nueva afiliación con el botón (+)

    ![VTEX afiliation](/images/vtex-afiliation.png)
    
7. Buscar y seleccionar "MercadoPagoV1".

    ![VTEX afiliation](/images/vtex-afiliation-3.png)    
    
    
8. Completar la información requerida en la afiliación.

    ![VTEX afiliation](/images/vtex-afiliation-4.png)

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
- Financial Institution: Sólo para Chile - ingresar 1234.
- Use External Installments: Yes.
- Antifraud: Yes.
- Time Zone: Región que define la hora local.
- orderExpirationHours: Durante cuántas horas se consultará el estado del pedido a Mercado Pago.
- maxInstallments: Cantidad máxima de cuotas.
- Categoria Principal: Categoría del producto - Seleccionar de la lista.
- Captura de segurança antecipada: Cantidad de horas para realizar la captura automatica (sólo para
Argentina y Brasil).

### Configurar plan de pago Nativo

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
9. Seleccionar cuotas automático.
10. Colocar Status Activo para activar el medio de pago en el checkout - Puede configurarse y activarse luego.
11. Salvar la configuración.

    ![Native plan](/images/vtex-native-plan-4.png)

12. Verificar que se agregó el plan de nativo.

    ![Native plan](/images/vtex-native-plan-5.png)

### Configurar Plan de Pago Off-Line

Plan de pago Off-Line son los medios de pago cuyos pagos se realizan en dos pasos:
- Primero se genera de un ticket con las instrucciones para el pago.
- Segundo se realiza el pago en efectivo o via un ATM siguiendo las instrucciones del ticket.

#### Medios Off-Line por país

- Argentina: PagoFacil, Rapipago, RedLink.
- Chile: Servipag.
- Colombia: Efecty, Davivienda.
- México: Banamex, Bancomer, Oxxo.
- Perú: PagoEfectivo.
- Uruguay: Abitab, Redpagos.
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

### Configurar plan de pago Webpay

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


### Configurar plan de pago personalizado

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

### Configurar Plan de Pago Personalizado - Tarjetas de Argentina

| Nombre                   | Descripción              | Medio de pago |       Bines {min}-{max},{min}-{max},{bin1},{bin2}       | Código de pago en adquiriente (opcional) |
|--------------------------|--------------------------|---------------|:-------------------------------------------------------:|------------------------------------------|
| Argencard                | Argencard                | Mastercard    | 501105-501105                                           | argencard                                |
| Cencosud                 | Cencosud                 | Mastercard    | 603493-603493                                           | cencosud                                 |
| CMR                      | CMR                      | Mastercard    | 557039-557039                                           | cmr                                      |
| Cordial                  | Cordial                  | Mastercard    | 522135-522135,522137-522137,527555-527555               | cordial                                  |
| Cordobesa                | Cordobesa                | Mastercard    | 542702-542702,544764-544764,550073-550073,528824-528824 | cordobesa                                |
| Mercado Pago - Patagonia | Mercado Pago - Patagonia | Mastercard    | 515073-515073,515070-515070,532383-532383,532384-532384 | mercadopago_cc                           |


### Configurar Plan de Pago Personalizado - Tarjetas de Chile

| Nombre | Descripción | Medio de pago |                                   Bines {min}-{max},{min}-{max},{bin1},{bin2}                                   | Código de pago en adquiriente (opcional) |
|--------|-------------|---------------|:---------------------------------------------------------------------------------------------------------------:|------------------------------------------|
| Presto | Presto      | Mastercard    | 920000-920099                                                                                                   | presto                                   |
| Magna  | Magna       | Mastercard    | 568000-568099                                                                                                   | magna                                    |
| CMR    | CMR         | Mastercard    | 499847-499847,460072-460072,445596-445596,465375-465375,548740-548740,548742-548742,533187-533187,558984-558984 | cmr                                      |

### Configurar Plan de Pago Personalizado - Tarjetas de Colombia

| Nombre  | Descripción | Medio de pago | Bines {min}-{max},{min}-{max},{bin1},{bin2} | Código de pago en adquiriente (opcional) |
|---------|-------------|---------------|:-------------------------------------------:|------------------------------------------|
| Codensa | Codensa     | Mastercard    | 590712-590712                               | codensa                                  |

### Configurar Plan de Pago Personalizado - Tarjetas de Uruguay

| Nombre | Descripción | Medio de pago |                     Bines {min}-{max},{min}-{max},{bin1},{bin2}                     | Código de pago en adquiriente (opcional) |
|--------|-------------|---------------|:-----------------------------------------------------------------------------------:|------------------------------------------|
| OCA    | OCA         | Mastercard    | 589892-589892,542991-542991,549530-549530,549564-549564,549571-549571,549576-549576 | oca                                      |

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

## Credenciales

Para obtener las credenciales debes seguir los siguientes pasos:

1. Loguearse en la cuenta de Mercado Pago.
2. Ingresar en la [URL](https://www.mercadopago.com/mla/account/credentials).
3. Seleccionar la solapa Checkout personalizado.
4. Copiar y pegar la Public key y Access token (Modo Produccion para procesar pagos reales / Modo     Sandbox para realizar pruebas).
5. Antes de pasar a Producción asegurarse de haber llenado el formulario ‘Quiero ir a producción’ (si ya se realizo este paso el link no aparece).


### Interpretar log de VTEX

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

- `"Status_detail":"cc_rejected_other_reason"`: Rechazo de la tarjeta de crédito, no hay información del motivo.
- `"Status_detail":"cc_rejected_call_for_authorize"`: Rechazo de la tarjeta de crédito, el cliente debe llamar para autorizar el pago.
- `"Status_detail":"cc_rejected_insufficient_amount"`: Rechazo de la tarjeta de crédito, el cliente no tiene saldo disponible suficiente.
- `"Status_detail":"cc_rejected_high_risk"`: Rechazo de Mercado Pago, riesgo de fraude.
