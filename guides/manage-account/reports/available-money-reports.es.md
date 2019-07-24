
# Introducción

El Reporte de Dinero Disponible es un *informe descargable* en formato .csv o .xlsx que te permite conocer la liquidez de tu negocio, es decir, cuánto dinero tienes para usar. Contiene el *detalle de los pagos liberados* que están listos para retirar a una cuenta bancaria o invertir en Mercado Pago. 

Accede a tus reportes desde tu cuenta en Mercado Pago siguiendo estos pasos:
1. Inicia sesión en Mercado Pago
1. Ve a Informes y de ahí accede a tus Reportes
1. En Reportes, elige Dinero Disponible, allí encontrarás un listado de los reportes generados.

Ten en cuenta que la generación del reporte lleva un tiempo, es decir, que no siempre estará listo al instante y verás el estado “En preparación”. Una vez disponible, estará en tu bandeja de reportes y siempre lo podrás descargar de dos formas: 
* Desde un link de descarga que te enviaremos por mail
* Desde tu cuenta de Mercado Pago, en Reportes de Dinero Disponible. 

Es importante aclarar que no siempre coincide con el reporte de Dinero en Cuenta o los reportes de facturación. Dependiendo de los plazos y tasas que elijas, el dinero que ganes por una venta se liberará un tiempo después de acreditado el cobro. Para saber la fecha exacta en que estará disponible el dinero de una operación, revisa el detalle de tus cobros acreditados. 

Esos plazos tienen que ver con los tiempos de los bancos o por los flujos de intermediación cuando las operaciones se realizan en Mercado Libre. Otras operaciones que pueden afectar la liberación de tu dinero son los Contracargos y Reclamos que puedas recibir por una venta. 


# Casos de uso

Por lo general, *este reporte se usa para conciliar los retiros de dinero* e incluye las transacciones que lo componen. 

Generamos un Reporte de Dinero Disponible en estas tres situaciones: 
1. Cada vez que lo generas manualmente. 
1. De forma programada, según tus ajustes.
1. Con cada retiro de dinero a una cuenta bancaria. 

#### Usa el Reporte de Dinero Disponible cuando quieras: 
* Tener un informe de liquidez de la cuenta,
* Conciliar la composición de las operaciones que impactan en tu dinero disponible en un nivel transaccional,
* Conciliar mensual o periódicamente con el detalle de los movimientos que generaron saldo disponible para retirar.
* Conocer:
    + El historial de dinero disponible entre dos fechas o dos retiros. 
    +  El detalle de los eventos que componen un retiro automático o manual, total o parcial. 
    + El detalle de disputas, reembolsos, shipping, contracargos, impuestos y otras operaciones que afecten el dinero disponible.
    + El detalle de las cuotas liberadas y de las operaciones “En cuotas”

# Cómo usar el reporte

¿Vas a usar el archivo .csv? Revisa que los caracteres estén configurados en formato UTF-8. Compruébalo en los ajustes de tu planilla de cálculo (Excel, LibreOffice Calc, etc): 

![excel](/images/manage-account/reports/excel.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ejemplo en Excel

![open-office](/images/manage-account/reports/open-office.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ejemplo en Open Office


El reporte contiene 4 secciones:
1. Balance Inicial (Initial Available Balance)
1. Detalle de Liberaciones de dinero (Releases)
1. Bloqueos de dinero por disputas (Block)
1. Desbloqueos por la resolución de la disputa (Unblock)

Verás una sección de *subtotales* por cada bloque y, finalmente, el *resultado total*. A este total lo calculamos sobre los subtotales netos de cada sección, es la suma neta de: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subtotal release - Subtotal block + Subtotal unblock = resultado total

Revisa el [Glosario completo](https://www.mercadopago.com.ar/ayuda/_2118)

Reflejamos los conceptos contables universales del debe (dinero que tienes que pagar) y haber (dinero que tienes por cobrar) escribiendo el reporte en dos columnas, una por cada concepto:  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tu haber lo verás en la columna NET_CREDIT\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tu deber estará en la columna NET_DEBIT

Verás el dinero disponible de las operaciones liberadas en las columnas NET_CREDIT (acreditado) y NET_DEBIT (debitado), dependiendo de si el monto es positivo o negativo. También verás ahí el monto bruto y los gastos de financiamiento, impuestos y costos de envío que descontamos para llegar al monto neto.

<!--
<table style="border: 1px solid black;">
  <tr style="border: 1px solid black;">
    <td style="border: 1px solid black;">

**¿Quieres agregar detalles a la vista de las operaciones?** Selecciona las columnas que quieras exportar en los Ajustes del reporte, según lo que quieras analizar y conciliar. Vienen definidas y puedes ver el total de ellas en 
**Reporte de Dinero Disponible** > **Ajustes**
     </td>
  </tr>
</table>
-->

**¿Qué pasa si un retiro falla?**

Si esto pasa, el reporte sigue siendo válido. El dinero vuelve a tu cuenta y la operación aparecerá en el reporte como una nueva línea en la columna NET_CREDIT. 

Ejemplos

Observa la forma en la que está compuesto el reporte de dinero disponible en este ejemplo para identificar las secciones y leer tus propios reportes:

![examples](/images/manage-account/reports/examples.png =200x)

La versión por defecto mostrará una vista extendida de las columnas. El informe final tendrá la mayor cantidad de detalle posible. Si quieres menos detalle o hay columnas que no te sirven para la conciliación, puedes modificar cuáles incluir y cuáles no en Ajustes. 


**Importante: diferencias entre retiro parcial y retiro total.**

Cuando retires todo tu dinero disponible, el total del reporte va a coincidir con ese monto. En cambio, cuando hagas un retiro parcial, que no incluya la totalidad de tu dinero en cuenta liberado, el total de dinero disponible y el total del reporte no van a coincidir. 

Por ejemplo, imagina que tienes $ 3.000 disponibles que puedes retirar a una cuenta bancaria. Y quieres retirar $ 2.000. El retiro es parcial y el valor total del reporte seguirá mostrándote el monto del balance inicial que había al momento del retiro, es decir, los $ 3.000 que tenías disponibles.

**¿Qué pasa cuando el retiro es total?**

Si retiras los $ 3.000, el valor total del reporte va a coincidir con el valor de ese retiro. 

<!--
¿Puedo ajustar esto?

Sí, puedes incluir, en los Ajustes del reporte, la última operación de retiro de dinero. De esta forma, la información del reporte tendrá en cuenta ese valor y hará que los montos coincidan.
-->


# Cómo generar tus reportes

## Vía web

Desde tu panel de Mercado Pago, solo podrás programar los reportes por retiro. Seguí estos pasos para hacerlo:

1. Iniciá sesión en Mercado Pago
1. Ve a Informes y de ahí accede a tus Reportes
1. En Reportes, elige Dinero Disponible.
1. Una vez dentro de Dinero Disponible, clickea en **‘Generar reporte’**
1. Selecciona el **período de tiempo** que quieras incluir en el reporte

¡Y listo! Vas a ver que el reporte está **en preparación.** 

Gana tiempo programando la **frecuencia de generación** de reportes. Guarda los ajustes para automatizar cada preparación, ya sea manual o de forma programada.

## Vía API

### De forma manual

1. Generación

Haz el POST a la API especificando las fechas de inicio y fin de la siguiente manera:

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report?access_token=ACCESS_TOKEN' \
    -d '{
            "begin_date": "2019-05-01T00:00:00Z",
            "end_date": "2019-06-01T00:00:00Z"
    }'
```
```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}
params = { 'access_token', 'ACCESS_TOKEN' }
data = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }'

response = requests.post('https://api.mercadopago.com/v1/account/bank_report', headers=headers, params=params, data=data)

```
```node
var request = require('request');

var headers = { 'accept': 'application/json', 'content-type': 'application/json' };

var dataString = '{ "begin_date": "2019-05-01T00:00:00Z", "end_date": "2019-06-01T00:00:00Z" }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report?access_token=ACCESS_TOKEN',
    method: 'POST',
    headers: headers,
    body: dataString
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);
```
]]]

Recibirás como respuesta un HTTP STATUS 202 (Accepted), y el reporte se generará de manera asincrónica.

2. Búsqueda

Consulta la API de esta forma para ver si la generación de reportes quedó lista:

[[[
```curl
curl -G \
    -H 'accept: application/json' \
    -d 'access_token=ACCESS_TOKEN' \
    'https://api.mercadopago.com/v1/account/bank_report/list'
```
```Python
import requests
headers = { 'accept': 'application/json' }
data = { 'access_token': 'ACCESS_TOKEN' }
response = requests.post('https://api.mercadopago.com/v1/account/bank_report/list', headers=headers, data=data)
```
```node
var request = require('request');
var headers = { 'accept': 'application/json'};
var dataString = 'access_token=ACCESS_TOKEN';
var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/list',
    method: 'POST',
    headers: headers,
    body: dataString
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);

```
]]]

Recibirás como respuesta:
```json
[
    {
        "id": 1234,
        "user_id": 130379930,
        "begin_date": "2015-05-01T00:00:00Z",
        "end_date": "2015-06-01T00:00:00Z",
        "file_name": "BK-TEST-1234567890123.csv",
        "created_from": "manual",
        "date_created": "2016-01-20T10:07:53.000-04:00"
    },
    {
    	...
    }
]
```

3. Descarga

Utilizando el atributo file_name, puedes descargar el reporte desde la siguiente URL:

> GET https://api.mercadopago.com/v1/account/bank_report/:file_name?access_token=ACCESS_TOKEN

### De forma programada

1. Generación

Programa la generación automática del reporte utilizando la frecuencia en el recurso de configuración. Actualiza el atributo scheduled en la configuración a true:

> POST https://api.mercadopago.com/v1/account/bank_report/schedule

Detiene la generación automática del reporte. Actualiza el atributo scheduled en la configuración a false:

> DELETE https://api.mercadopago.com/v1/account/bank_report/schedule

2. Descarga

Descarga el archivo con este comando: 

> GET https://api.mercadopago.com/v1/account/bank_report/:file_name

### También puedes ajustar la configuración del reporte vía API, usa los siguientes comandos para cada caso: 

### Consultar configuración 

[[[

```curl
curl -X GET \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'http://api.mercadopago.com/v1/account/bank_report/config?access_token=ACCESS_TOKEN' \
```

```Python
import requests
headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}
params = {'access_token', 'ACCESS_TOKEN'}

response = requests.get('http://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params)
```

```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'http://api.mercadopago.com/v1/account/bank_report/config?access_token=ACCESS_TOKEN',
    headers: headers
};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}
request(options, callback);
```

]]]


### Crear configuración

[[[
    
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ACCESS_TOKEN' \
    -d '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
    }'
```

```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = {'access_token', 'ACCESS_TOKEN'}

data = '{  
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "frequency": {"hour": 0,"type": "monthly","value": 1}
        }'

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params, data=data)
```

```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var dataString = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "frequency": {
                "hour": 0,
                "type": "monthly",
                "value": 1
            }
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ACCESS_TOKEN',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

```

]]]

### Actualizar configuración

[[[

```curl
curl -X PUT \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ACCESS_TOKEN' \
    -d '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }'
```

```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = (
    ('access_token', 'ACCESS_TOKEN'),
)

data = '{
            "file_name_prefix": "bank-report-USER_ID",
            "include_withdrawal_at_end": false,
            "detailed": true,
            "execute_after_withdrawal": true,
            "extended": true,
            "frequency": {"hour": 0,"type": "monthly","value": 1}
        }'

response = requests.put('https://api.mercadopago.com/v1/account/bank_report/config', headers=headers, params=params, data=data)
```

```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var dataString = '{
        "file_name_prefix": "bank-report-USER_ID",
        "include_withdrawal_at_end": false,
        "detailed": true,
        "execute_after_withdrawal": true,
        "extended": true,
        "frequency": {
            "hour": 0,
            "type": "monthly",
            "value": 1
        }
    }';

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/config?access_token=ACCESS_TOKEN',
    method: 'PUT',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

```

]]]

### Iniciar generación programada

[[[

```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ACCESS_TOKEN'
```

```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}

params = (
    ('access_token', 'ACCESS_TOKEN'),
)

response = requests.post('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers, params=params)
```

```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ACCESS_TOKEN',
    method: 'POST',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

```

]]]

### Cancelar generación programada

[[[

```curl
curl -X DELETE \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ACCESS_TOKEN'
```

```Python
import requests

headers = {
    'accept': 'application/json',
    'content-type': 'application/json',
}
params = {'access_token', 'ACCESS_TOKEN'}

response = requests.delete('https://api.mercadopago.com/v1/account/bank_report/schedule', headers=headers, params=params)
```

```node
var request = require('request');

var headers = {
    'accept': 'application/json',
    'content-type': 'application/json'
};

var options = {
    url: 'https://api.mercadopago.com/v1/account/bank_report/schedule?access_token=ACCESS_TOKEN',
    method: 'DELETE',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

```

]]]

# Ficha técnica

|              |                |
| ------------ |	--------    |
| `Programacion`| -  Diaria.<br/> -  Semanal.<br/>-  Mensual.|
| `Generación`  | -  Manual.<br/> -  Automática por retiro de dinero disponible, total o parcial <br/><br/> Las tres instancias de generación conviven. Es decir, aunque programes la generación de tus reportes automáticamente, cada vez que retires dinero se generará un reporte adicional. |
| `Detalla de tablas` | El detalle de las tablas comprende información generada en día 1 como mínimo. Excepto en los reportes generados por retiro de dinero. |
| `Formato del filename` | Cuando el reporte es programado o manual:<br/> “<prefijo-configurable>-<fecha-de-creación>.csv” <br/> Ejemplo:  mitienda-28-05-2019.csv <br/><br/> Cuando el reporte se genera por un retiro de dinero: “<prefijo-configurable>-<id-de-retiro>-<fecha-de-creación>.csv” Ejemplo: mitienda-ID23902138-28-05-2019.csv|
| `Formatos de descarga` | .csv, .xlsx <br/><br/>Tip: descarga el reporte en .csv para importar los datos y usarlos en otras aplicaciones. Descárgalo en .xlsx para leer la información en las tablas de la hoja de cálculo.|
| `Configuración disponible vía API` | -  Columnas a generar por reporte<br/> -  Prefijo del archivo para identificarlo fácilmente<br/> -  Carga por SFTP<br/> -  Separador de columnas (punto o punto y coma)<br/> -  Separador decimal (coma o punto)<br/> -  Notificación por e-mail<br/> -  Retiro al final del reporte (opcional) |
| `Orden de columnas` | Fijo |
| `Archivo` | Los reportes generados quedan guardados en tu cuenta de Mercado Pago |
| `Período máximo` | Reportes con datos de hasta 60 días |
| `Moneda` | Local (basada en el país donde esté registrada la cuenta de Mercado Pago) |
| `Zona horaria de las columnas con fechas:` | GMT-4 |
| `Selección de fechas vía API` | Formato del timezone: UTC / GMT-0 |
| `Selección de fechas vía web ` | <b>Debe basarse en el timezone de la cuenta del usuario.</b><br/>Por ejemplo, a la cuenta de usuario registrada en Brasil le corresponde el timezone de Sao Paulo.|


# Glosario

Lo sabemos, algunos términos son técnicos y puede que no estés familiarizado con todos ellos. ¡Usa este glosario para no perderte!

| `Nombre de la columna del reporte`  | `Qué significa` |
| ----------------------------------- |	--------------- |
| `DATE`| Fecha de liberación, bloqueo o desbloqueo, según corresponda.|
| `SOURCE_ID` | ID de operación en Mercado Pago (por ejemplo, el pago de una venta).|
| `EXTERNAL_REFERENCE` | ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br/><br/> Tené en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros.|
| `RECORD_TYPE` | initial_available_balance: Dinero disponible del período anterior.<br/><br/> block → Dinero bloqueado por un reclamo o contracargo.<br/><br/> unblock → Dinero liberado porque se resolvió un reclamo o contracargo.<br/><br/> release → Dinero de un cobro que fue liberado.<br/><br/> fullblock → Dinero bloqueado por restricción<br/><br/> subtotal → Suma de los montos de cada record type.<br/><br/> total → Monto neto total. |
| `DESCRIPTION` | <table style="border:none;" ><tr style="border:none;"><td style="border:none;"> Posibles valores que puede tomar el campo:<br/><ul><li> Para **block o unblock**: chargeback, dispute, shipping_return, credit_payment</li><li>Para **release**: payment, withdrawal, refund, tax_payment_ibcf, tax_payment_ibcf_cancel, tax_payment_ibex, tax_payment_iibb, tax_payment_iibb_cancel, shipping, shipping_cancel, tax_withdholding, tax_withdholding_cancel, mediation,mediation_cancel, chargeback, fee_release_in_advance, asset_management_gain, asset_management_loss</li><li>Para **fullblock**: restriction.</li><li>Para **subtotal**: block, unblock o release.</li></ul></td></tr><tr style="border:none;"><td style="border:none;">Definiciones a tener en cuenta:<br/><br/> **chargeback**: aparece cuando se inicia o resuelve un contracargo asociado al pago al que hace referencia.<br/><br/> **dispute**: aparece cuando se inicia o resuelve una mediación o reclamo sobre el pago al que hace referencia. Puede ocurrir antes o después de que el pago se haya liberado como dinero disponible e incluso retirado de la cuenta.<br/><br/>**shipping_return**: aparece cuando se bloquea o desbloquea un pago realizado por devolución express.<br/><br/>**payment**: pago que se libera en alguno de los canales en los que opera el cliente.<br/><br/>**withdrawal**: retiro que se ejecuta sobre el dinero disponible.<br/><br/>**refund**: devolución asociada al pago al que hace referencia.<br/><br/>**tax_payment_ibcf**: percepción de ingresos brutos en Capital Federal, se calcula una vez por mes de acuerdo a las operaciones transaccionadas. Para conciliar por operación, ver el detalle en los [Informes de Facturas en MyML](https://vendedores.mercadolibre.com.ar/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/).<br/><br/>**tax_payment_ibcf_cancel**: cancelación del impuesto de percepción de ingresos brutos en Capital Federal.<br/><br/>**tax_payment_ibex**: percepción de ingresos brutos por sujeto excedido de régimen simplificado, se calcula una vez por mes de acuerdo a las operaciones transaccionadas. Para conciliar por operación, ver el detalle en los [Informes de Facturas en MyML](https://vendedores.mercadolibre.com.ar/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/). <br/><br/> **tax_payment_iibb**: percepción de ingresos brutos en provincia de Buenos Aires, se calcula una vez por mes de acuerdo a las operaciones transaccionadas. Para conciliar por operación, ver el detalle en los [Informes de Facturas en MyML](https://vendedores.mercadolibre.com.ar/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/).<br/><br/> **tax_payment_iibb_cancel**: cancelación del impuesto de percepción de ingresos brutos.<br/><br/> **tax_withdholding**: el cobro de retenciones que no se pudieron ejecutar transaccionales al pago asociado. En Argentina son únicamente retenciones de Ingresos Brutos (las percepciones se debitan como otra operación). En Uruguay son retenciones de IVA. En Colombia son retenciones de IVA, ICA y Fuente según aplique el caso.<br/><br/> **tax_withdholding_cancel**: la cancelación de la retención tax_withdholding.<br/><br/> **shipping**: comisión de shipping para las compras de carrito que no se incluye en cada uno de los pagos del carrito.<br/><br/> **shipping_cancel**: cancelación de la comisión de shipping para las compras de carrito que no se incluye en cada uno de los pagos del carrito.<br/><br/> **mediation**: resolución de una mediación a favor del comprador que termina restando del dinero disponible del vendedor.<br/><br/> **mediation_cancel**: cancelación de la mediación resuelta a favor del comprador.<br/><br/> **chargeback**: contracargo ya sea a favor o en contra de una operación.<br/><br/>**fee-release_in_advance**: comisión por adelanto.<br/><br/> **asset_management_gain**: rendimiento positivo generado por la variación del valor de cuotapartes suscritas en el fondo común de inversión.<br/><br/> **asset_management_loss**: rendimiento negativo generado por la variación del valor de cuotapartes suscritas en el fondo común de inversión.<br/><br/> **restriction**: ocurre cuando se te aplica una restricción por comportamiento fraudulento.<br/><br/> **credit_payment**: aparece cuando se cobra la cuota de un préstamo otorgado.</td></tr></table>|
| `NET_DEBIT_AMOUNT` | Acreditado al monto disponible. |
| `NET_CREDIT_AMOUNT` | Debitado al monto disponible. |
| `GROSS_AMOUNT` | Monto de la operación bruto. |
| `MP_FEE_AMOUNT` | Pago Comisión de Mercado Pago y/o Mercado Libre. Incluye IVA.|
| `FINANCING_FEE_AMOUNT` | Costo por ofrecer cuotas sin interés. |
| `SHIPPING_FEE_AMOUNT` | Costo de envío. |
| `TAXES_AMOUNT` | Impuestos cobrados por retenciones de Ingresos Brutos. |
| `COUPON_AMOUNT` | Monto del cupón de descuento. **Solo se descuenta del monto bruto (GROSS_AMOUNT) si está provisto por el vendedor**.|
| `INSTALLMENTS` | Cantidad de cuotas en las que se realizó la operación. |
| `PAYMENT METHOD` | Medio de pago. Puede ser: <br/>visamaster<br/> amex<br/> naranja<br/> nativa<br/> tarshop<br/> cencosud<br/> cabal<br/> argencard<br/> diners<br/> pagofacil<br/> rapipago<br/> redlink<br/> bapropago<br/> account_money (Pago con dinero en la cuenta de Mercado Pago).|
| `TAX_DETAIL` | Descripción del impuesto retenido por operación en el TAXES_AMOUNT. Puede tomar los siguientes valores según la jurisdicción: <br/>cordoba<br/>mendoza<br/>la_pampa<br/>santa_fe<br/>tucuman<br/>entre_rios<br/>catamarca<br/>neuquen<br/>santiago_del_estero<br/>rio_negro<br/>jujuy<br/> |
| `TAX_AMOUNT_TELCO` | Es el valor del impuesto a las empresas de telecomunicaciones que se descuenta del valor bruto. |
| `TRANSACTION_APPROVAL_DATE` | Fecha de aprobación de la operación. |
| `POS_ID` | ID de caja si el pago se realiza a través de un comercio físico. |
| `POS_NAME` | Nombre de caja para el pago realizado a través de un comercio físico. |
| `EXTERNAL_POS_ID` | ID de caja definido por el usuario para el pago realizado a través de un comercio físico. |
| `STORE_ID` | ID de sucursal si el pago se realiza a través de un comercio físico. |
| `STORE_NAME` | Nombre de sucursal para el pago realizado a través de un comercio físico. |
| `EXTERNAL_STORE_ID` | ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. |