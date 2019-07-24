
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

![nombre](/images/manage-account/reports/excel.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ejemplo en Excel

![nombre](/images/manage-account/reports/open-office.png)

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

**¿Quieres agregar detalles a la vista de las operaciones?** Selecciona las columnas que quieras exportar en los Ajustes del reporte, según lo que quieras analizar y conciliar. Vienen definidas y puedes ver el total de ellas en 
**Reporte de Dinero Disponible** > **Ajustes**
-->

**¿Qué pasa si un retiro falla?**

Si esto pasa, el reporte sigue siendo válido. El dinero vuelve a tu cuenta y la operación aparecerá en el reporte como una nueva línea en la columna NET_CREDIT. 

Ejemplos

Observa la forma en la que está compuesto el reporte de dinero disponible en este ejemplo para identificar las secciones y leer tus propios reportes:

![nombre](/images/manage-account/reports/examples.png)

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
