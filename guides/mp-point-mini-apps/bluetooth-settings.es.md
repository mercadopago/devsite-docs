# Bluetooth

> Los tipos de dispositivos bluetooth permitidos son: **teclados**, **escáneres de códigos de barras** e **impresoras**.

Para iniciar la pantalla de configuración de bluetooth, realiza un llamado a la función `launchBluetoothSettings`, como en el ejemplo a continuación.

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

Haz clic en las secciones siguientes para obtener más información sobre los comandos disponibles.

* [Conectar y desconectar](/developers/es/docs/mini-apps/bluetooth/commands)
* [Obtener status](/developers/es/docs/mini-apps/bluetooth/commands#bookmark_obtener_status)
* [Descubrir dispositivos (vinculados o para iniciar una vinculación)](/developers/es/docs/mini-apps/bluetooth/commands#bookmark_descubrir_dispositivos_(vinculados_o_para_iniciar_una_vinculación))
* [Emparejar y desemparejar un dispositivo](/developers/es/docs/mini-apps/bluetooth/commands#bookmark_emparejar_y_desemparejar_un_dispositivo)
* [Imprimir usando impresora Bluetooth](/developers/es/docs/mini-apps/bluetooth/commands#bookmark_emparejar_y_desemparejar_un_dispositivo)