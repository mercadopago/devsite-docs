# Bluetooth

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

* [Conectar y desconectar](/developers/es/docs/mp-point/mini-apps/bluetooth/commands)
* [Obtener status](/developers/es/docs/mp-point/mini-apps/bluetooth/commands#bookmark_obtener_status)
* [Descubrir dispositivos (vinculados o para iniciar una vinculación)](/developers/es/docs/mp-point/mini-apps/bluetooth/commands#bookmark_descubrir_dispositivos_(vinculados_o_para_iniciar_una_vinculación))
* [Emparejar y desemparejar un dispositivo](/developers/es/docs/mp-point/mini-apps/bluetooth/commands#bookmark_emparejar_y_desemparejar_un_dispositivo)
* [Imprimir usando impresora Bluetooth](/developers/es/docs/mp-point/mini-apps/bluetooth/commands#bookmark_emparejar_y_desemparejar_un_dispositivo)