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

Clique nas seções a seguir para mais informações sobre as comandos disponiveis.

* [Conectar y desconectar]()
* [Obtener el estado]()
* [Descubrir dispositivos (vinculados o para iniciar una vinculación)]()
* [Emparejar y desemparejar un dispositivo]()
* [Imprimir usando impresora Bluetooth]()