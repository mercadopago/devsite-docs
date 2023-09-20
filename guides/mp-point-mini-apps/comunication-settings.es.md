# Comunicación con Mercado Pago

Para comunicarse con la aplicación de Mercado Pago, la mini app debe utilizar algunos comandos que solo estarán disponibles para su uso después de cargarla. Ve más información en la sección [Ciclo de vida de la mini app](/developers/es/docs/mini-apps/introduction/lifecycle).

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

* [Comando: back](/developers/es/docs/mini-apps/comunication-mercado-pago/commands#bookmark_comando:_back) 
* [Comando: close](/developers/es/docs/mini-apps/comunication-mercado-pago/commands#bookmark_comando:_close)
* [Comando: history](/developers/es/docs/mini-apps/comunication-mercado-pago/commands#bookmark_comando:_history)
* [Comando: info_device](/developers/es/docs/mini-apps/comunication-mercado-pago/commands#bookmark_comando:_info_device)
* [Comando: clear_history](/developers/es/docs/mini-apps/comunication-mercado-pago/commands#bookmark_comando:_clear_history)
* [Iniciar flujo de pago (payment_flow)](/developers/es/docs/mini-apps/comunication-mercado-pago/commands#bookmark_iniciar_flujo_de_pago_(payment_flow))
* [Iniciar método de pago (payment_flow)](/developers/es/docs/mini-apps/comunication-mercado-pago/commands#bookmark_iniciar_método_de_pago_(payment_flow))
* [Ingresar métodos de pagos disponibles (payment_methods)](/developers/es/docs/mini-apps/comunication-mercado-pago/commands#bookmark_ingresar_métodos_de_pagos_disponibles_(payment_methods))