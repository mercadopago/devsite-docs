# Manifiesto de MiniApps

Cada MiniApp debe contener un archivo de manifiesto llamado `miniapp_manifest.json` en el directorio raíz del archivo **.zip**. El manifiesto de MiniApp es un documento _JSON_ que contiene parámetros esenciales y opcionales que se utilizan para configurar la integración de MiniApp con la Super App de Mercado Pago.

El manifiesto de MiniApps puede contener los siguientes campos:

| Parámetro | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| name | string | true | En caso de que la Super App necesite mostrar el nombre de la MiniApp, se mostrará el valor de este campo. | 
| version | string | true | El número de versión de MiniApp formateado como un número dividido por puntos.|
| state_persistence | boolean | true | Define si el MiniApp mantiene su estado después de cerrarse. <br><br> Esto es *True* por defecto. | 
| show_action_bar | boolean | false | Define si los MiniApps admiten la barra de acciones de Android. <br><br> Esto es *False* por defecto. | 
| use_wide_view_port | boolean | false |Define si los MiniApps admiten una ventana gráfica amplia. <br><br> Esto es *False* por defecto. | 
| related_hosts | array  string  | false | Funciona como una lista blanca que declara con qué hosts se puede comunicar el MiniApp. Si el host no está en la lista, la comunicación se bloqueará. | 
| client_id | string | true | Funciona como ID de MiniApp al iniciar un flujo de pago para la trazabilidad del pago. | 
| control_back_action | boolean | false | Define si el MiniApp puede manejar acciones de callback nativas. <br><br> Esto es *False* por defecto.| 

A continuación se muestra un ejemplo de `miniapp_manifest.json`.

```javascript
{
   "name": "MercadoPago",
   "version": "1.0.0",
   "related_hosts": [
  	"mercadopago.com",
	"mercadolibre.com"
   ],
   "state_persistence": true,
   "show_action_bar": false,
   "use_wide_view_port": true,
   “client_id”:”123456786543”,
   “control_back_action”: true
}
```