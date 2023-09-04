# Mini apps manifiesto

Cada MiniApp debe contener un archivo de manifiesto llamado `miniapp_manifest.json` en el directorio raíz del archivo **.zip**. Es un documento _JSON_ que contiene parámetros esenciales y opcionales, utilizados para configurar la integración com Mercado Pago Super App

El manifiesto de MiniApps puede contener los siguientes campos:

| Campo | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| name | string | si | En caso de que la Super App necesite mostrar el nombre de la MiniApp, se mostrará el valor de este campo. | 
| version | string | si | El número de versión de MiniApp formateado como un número dividido por puntos (.). |
| state_persistence | boolean | si | Define si la mini app mantiene su estado después de cerrarse. <br><br> Por defecto es "true". | 
| show_action_bar | boolean | no | Define si las mini apps admiten la barra de acciones de Android. <br><br> Por defecto es "false". | 
| use_wide_view_port | boolean | no |Define si las mini apps admiten una ventana gráfica amplia. <br><br> Por defecto es "false".| 
| related_hosts | array&lt;string&gt;  | no | Funciona como una lista de permisos que indica con qué hosts puede comunicarse la mini app. Si el host no está en la lista, se bloqueará la comunicación . | 
| client_id | string | si | Funciona como id por la mini app al iniciar un lanzar el flujo de pagos para el rastreo de los pagos. | 
| control_back_action | boolean | no | Define si el MiniApp puede manejar acciones de callback nativas. <br><br> Esto es *False* por defecto.| 

A continuación se muestra un ejemplo de `miniapp_manifest.json`.

```json
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