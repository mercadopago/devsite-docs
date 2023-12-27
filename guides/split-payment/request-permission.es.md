# Solicitar permiso a usuarios 

Para solicitar permiso a sus usuarios para gestionar ventas en su nombre, es necesario implementar el flujo de autorización utilizando OAuth. Siga los pasos a continuación:

 1. Redirige a tus usuarios a la siguiente URL para autorizar la gestión de ventas:

 | Valor                    | Descripción                                                                                                              |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `<APP_ID>`               | Valor obtenido durante la [Creación de la aplicación](/developers/es/docs/split-payment/integration-configuration/create-application).      |
| `<REDIRECT_URI>`         | Valor ingresado en el campo Redirect Uri durante la [Configuración de la Redirect URL](/developers/es/docs/split-payment/integration-configuration/create-application). |

----[mla]----
```curl
https://auth.mercadopago.com.ar/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mlb]----
```curl
https://auth.mercadopago.com.br/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mlm]----
```curl
https://auth.mercadopago.com.mx/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mlc]----
```curl
https://auth.mercadopago.cl/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mco]----
```curl
https://auth.mercadopago.com.co/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mlu]----
```curl
https://auth.mercadopago.com.uy/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------
----[mpe]----
```curl
https://auth.mercadopago.com.pe/authorization?client_id=<APP_ID>&response_type=code&platform_id=mp&redirect_uri=<REDIRECT_URI>
```

------------


 2. Una vez que los usuarios autoricen la gestión de ventas, recibirás un código de autorización en la URL que especificaste en el paso anterior. Este código estará en el parámetro `code` de la siguiente manera:

```curl
http://<REDIRECT_URI>?code=AUTHORIZATION_CODE
```

> NOTE
>
> Nota
>
> El `AUTHORIZATION_CODE` tiene una validez de 10 minutos y será utilizado para crear las credenciales necesarias. 