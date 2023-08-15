# Comandos disponibles

Ve a continuación qué comandos están disponibles para conectar un dispositivo externo compatible a través de bluetooth.

## Conectar y desconectar

Para conectar y desconectar un dispositivo bluetooth desde una mini app, se debe ejecutar el comando JS `bluetooth_enable`, enviando como parámetro una acción para indicar la `action` a realizar.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| action | string | true | on <br><br> off | Conect o desconecta el dispositivo bluetooth. |

Si el comando tiene éxito, la devolución del llamado enviará un valor de "éxito".

Ejemplo de código:

```javascript
MobileWebKit.executeNative(
   {
       "method": 'bluetooth_enable',
       "args": {"action": on},
       "callback": function (result, error) {
           if (result === "success") {
               //  Escribe el código con éxito aquí
           }
       }
   }
)
```

## Obtener status

Para saber si el bluetooth está activado o no en la mini app, debes ejecutar el comando JS `bluetooth_status`, cuyo resultado es un booleano que indica si está activado.

Ejemplo de código:

```javascript
MobileWebKit.executeNative(
        {
            "method": 'bluetooth_status',
            "args": {},
            "callback": function (isOn, error) {
                if (isOn) {
                    // Escribe el código aquí si el bluetooth está activado

                } else {
                    // Escribe el código aquí si el bluetooth está apagado

                }
            }
        }
    )
```

## Descubrir dispositivos (vinculados o para iniciar una vinculación)

Para descubrir los dispositivos visibles e iniciar una vinculación, debes ejecutar el comando JS `bluetooth_devices` enviando el parámetro `state` con el valor de `all`. Para listar los dispositivos vinculados, debes ejecutar el comando JS `bluetooth_devices` enviando el parámetro `state` con el valor de `paired`.

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
                    // Ocurrió un error
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

Para emparejar un dispositivo, ejecuta el comando JS `bluetooth_pair_request` enviando el ID del dispositivo proporcionado por el comando de descubrimiento de dispositivos (`bluetooth_devices`) ejecutado previamente.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| id | string | true | UUID | El ID del dispositivo a emparejar.|

Ejemplo de código:

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

Para desemparejar un dispositivo, ejecuta el comando JS `bluetooth_pair_request` enviando el ID del dispositivo proporcionado por el comando de descubrimiento de dispositivos (`bluetooth_devices`) ejecutado previamente.

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| id | string | true | UUID | El ID del dispositivo que se va a desemparejar. |

Ejemplo de código:

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

## Imprimir usando impresora Bluetooth

Para emparejar una impresora, ejecuta el comando `bluetooth_printer_devices` como en el ejemplo a continuación.

```javascript
MobileWebKit.executeNative(
        {
            "method": 'bluetooth_printer_devices',
            "args": {
            },
            "callback": callback
                }
            }
        }
    )
```

Una vez emparejada, ejecuta el comando `bluetooth_print` para imprimir en esa impresora. Envía la ID de la impresora proporcionada por el comando de descubrimiento de dispositivos (`bluetooth_devices`) y el texto que se imprimirá.

```javascript
function printData(data, printerDeviceId){

MobileWebKit.executeNative(
        {
            "method": 'bluetooth_print',
            "args": {
                "id": printerDeviceId,
                "data": data
            },
            "callback": function (result,error){
                console.log("Print Result: " + result + "Error: " + error);
            }
        }
    )
}
```

| Parámetro | Tipo | Requerido | Valores posibles | Descripción |
| --- | --- | --- | --- | --- |
| id | string | true | printerDeviceId | ID de impresora válido. |
| data | string | true | text printed | Datos a imprimir.|