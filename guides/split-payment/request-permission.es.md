# Solicitar permiso a sus usuarios 

Para iniciar el proceso de autorización y solicitar permisos a sus usuarios para gestionar ventas en su nombre, es necesario implementar el flujo de autorización utilizando OAuth. A continuación, se detallan los pasos a seguir:

 1. Redirige a tus usuarios a la siguiente URL para autorizar la gestión de ventas:
   
     ```curl
     https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
     ```
   
     - Donde `<APP_ID>` es el valor obtenido durante la [Creación de la aplicación](/developers/es/docs/split-payment/integration-configuration/create-application), y
     - `<REDIRECT_URI>` es el valor ingresado en el campo Redirect Uri durante la [Configuración del Redirect URL](/developers/es/docs/split-payment/integration-configuration/create-application).

 <br>
 2. Una vez que los usuarios autoricen la gestión de ventas, recibirás un código de autorización en la URL que especificaste en el paso anterior. Este código estará en el parámetro `code` de la siguiente manera:

     ```curl
     http://<REDIRECT_URI>?code=AUTHORIZATION_CODE
     ```

> NOTE
>
> Nota
>
> El `AUTHORIZATION_CODE` tiene una validez de 10 minutos y será utilizado para crear las credenciales necesarias. 