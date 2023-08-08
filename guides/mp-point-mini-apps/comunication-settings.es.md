# Comunicación con Mercado Pago

Para comunicarse con la aplicación de Mercado Pago, la Mini App debe utilizar algunos comandos que solo estarán disponibles para su uso después de cargarla. Ve más información en la sección [Ciclo de vida de las MiniApps](/developers/es/docs/mp-point/mini-apps/introduction/lifecycle).

Todos los comandos disponibles admiten los siguientes parámetros:

| Parámetro | Tipo | Requerido | Valores posibles |
| --- | --- | --- | --- |
| method | string | si | set_title <br><br> payment_flow | 
| args | JSON object  | depende del método | cualquier objeto JSON | 
| callback | function | no | function <br><br> (result, error) | 

Ejemplo de código:

```javascript
var exampleCommand =
    {
        "method": 'example',
        "args": {
            'arg1': value1
         },
         "callback": function(result, error) {
             if (!result) {
                 console.log("ERROR: wrong echo result");
             } else {
                 console.log("SUCCESS: echo arrives " + result);
             }
         }
    }
MobileWebKit.executeNative(exampleCommand)
```

Haz clic en las secciones siguientes para obtener más información sobre los comandos disponibles.

* [Comando: back]() 
* [Comando: close]()
* [Comando: history]()
* [Comando: info_device]()
* [Comando: clear_history]()
* [Iniciar flujo de pago (payment_flow)]()
* [Iniciar medio de pago (payment_flow)]()
* [Ingresar medios de pagos disponibles (payment_methods)]()