# Configurar bluetooth

Para iniciar la pantalla de configuración de bluetooth, realiza un llamado a la función `launchBluetoothSettings`, como en el ejemplo a continuación.

> Los tipos de dispositivos bluetooth permitidos son: **teclados**, **escáneres de códigos de barras** e **impresoras**.

```javascript
launchBluetoothSettings(callbackResult)
function callbackResult(result, error) {
   if (result == 'success') {
       // Llamada exitosa
   } else {
       //'error' tiene información detallada del error
   }
}
```

## Encender y apagar

Para encender y apagar un dispositivo bluetooth desde una MiniApp, se debe ejecutar el comando JS `bluetooth_enable`, enviando como parámetro una acción para indicar la `action` a realizar.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| action | string | true | on <br><br> off | Enciende o apaga el dispositivo bluetooth. |

Si el comando tiene éxito, la devolución del llamado enviará un valor de "éxito".

Ejemplo de solicitud:

```javascript
MobileWebKit.executeNative(
   {
       "method": 'bluetooth_enable',
       "args": {"action": on},
       "callback": function (result, error) {
           if (result === "success") {
               //  Escriba el código con éxito aquí
           }
       }
   }
)
```

## Obtener el estado

Para saber si el bluetooth está activado o no en la MiniApp, debes ejecutar el comando JS `bluetooth_status` donde el resultado es un booleano que indica si está activado.

Ejemplo de solicitud:

```javascript
MobileWebKit.executeNative(
        {
            "method": 'bluetooth_status',
            "args": {},
            "callback": function (isOn, error) {
                if (isOn) {
                    // Escriba el código aquí si el bluetooth está activado

                } else {
                    // Escriba el código aquí si el bluetooth está apagado

                }
            }
        }
    )
```

## Descubrir dispositivos para emparejar

Para descubrir los dispositivos visibles para iniciar un emparejamiento, se debe ejecutar el comando JS `bluetooth_devices` enviando el parámetro `state` con el valor de `all` y, para listar los dispositivos emparejados, se debe ejecutar el comando JS `bluetooth_devices` enviando el parámetro `state` con el valor de `paired`.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| state | string | true | all <br><br> paired | Enumera los dispositivos. |
| devices | list | - | - | Devuelve una lista de datos del dispositivo como: id, nombre y dirección MAC. |
| id | string | - | - | Identificador único asociado al dispositivo. Este ID es generado aleatoriamente por superAPP. |
| name | string | - | - | Indica el nombre asociado al dispositivo. |
| address | string | - | - | Indica la dirección MAC del dispositivo. |

Ejemplo de solicitud:

```javascript
MobileWebKit.executeNative(
        {
            "method": 'bluetooth_devices',
            "args": {"state": state},
            "callback": function (result, error) {

                if (error != null) {
                    // Ocurrio un error
                    return
                }

                let status = result["status"];
                let devices = result["devices"];

                for (let i = 0; i < devices.length; i++) {
                    let device = devices[i];
                    // Datos del dispositivo
                    let id = device["id"];
                    let name = device["name"];
                    let address = device["address"];
                    // Escribe tu código aquí para cada dispositivo
                }
            }
        }
```

## Emparejar y desemparejar un dispositivo

Para emparejar un dispositivo, ejecute el comando JS `bluetooth_pair_request` enviando el ID del dispositivo proporcionado por el comando de descubrimiento de dispositivos (`bluetooth_devices`).

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| id | string | true | UUID | El ID del dispositivo a emparejar.|

Ejemplo de solicitud:

```javascript
MobileWebKit.executeNative(
        {
            "method": 'bluetooth_pair_request',
            "args": {
                "id": id
            },
            "callback": function (result, error) {
                if (result === "success") {
                    // Escribe tu código aquí
            }
        }
    )
```

Para desemparejar un dispositivo, ejecute el comando JS `bluetooth_pair_request` enviando el ID del dispositivo proporcionado por el comando de descubrimiento de dispositivos (`bluetooth_devices`).

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| id | string | true | UUID | El ID del dispositivo que se va a desemparejar. |

Ejemplo de solicitud:

```javascript
MobileWebKit.executeNative(
        {
            "method": 'bluetooth_unpair',
            "args": {
                "id": id
            },
            "callback": function (result, error) {
                if (result === "success") {
                    // Escribe tu código aquí
                }
            }
        }
    )
```

## Emparejar impresora

Para emparejar una impresora, ejecute el comando JS `bluetooth_printer_devices` como en el ejemplo a continuación.

```javascript
MobileWebKit.executeNative({
            "method": 'bluetooth_printer_devices',
            "args": {},
            "callback": callback
})
```

Con la impresora emparejada, ejecute el comando JS `bluetooth_print` para imprimir en esta impresora. Envíe la ID de la impresora proporcionada por el comando de descubrimiento de dispositivos (`bluetooth_devices`) y el texto que se imprimirá.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| id | string | true | printerDeviceId | ID de impresora válido. |
| data | string | true | texto | Datos a imprimir.|

Ejemplo de solicitud:

```javascript
function printData(data, printerDeviceId)  {
    MobileWebKit.executeNative({
	     "method": 'bluetooth_print',
         "args": {
             "id": printerDeviceId,
             "data": data
         },
         "callback": function (result, erros) {
             console.log("Print Result: " + result + ", Error: + error);
         }
    })
}
```