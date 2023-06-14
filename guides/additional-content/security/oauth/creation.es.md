# Creación
 
El flujo de `authorization_code` se caracteriza por la intervención del vendedor para autorizar explícitamente el acceso de la aplicación a sus datos y por el uso de un código otorgado por el servidor de autenticación para que la aplicación pueda obtener un access token y un refresh token asociado.
 
Debido a que se trata de un flujo basado en la redirección, debes permitir la interacción con el navegador del vendedor y recibir la solicitud a través de la redirección del servidor de autorización. En este flujo, la aplicación solicita al vendedor el consentimiento expreso para acceder a los datos mediante la apertura de una página web en la que se explicitan los ámbitos a los que se solicita el acceso.
  
Una vez permitido el acceso, el servidor genera un código de acceso que llega a la aplicación a través de una redirección. En este paso, la aplicación solicita acceso al servidor de autenticación enviando el código obtenido y los datos de la aplicación. Una vez hecho esto, el servidor otorga el access token y el refresh token a la aplicación.
 
Para generar el código de autorización, es preciso cumplir con los requisitos a continuación.
 
| Requisitos | Descripción | Especificaciones |
| --- | --- | --- |
| Cuentas de vendedor de Mercado Pago | Se requerirán cuentas de vendedor de Mercado Pago. Uno para ti y otro para el vendedor. | Cuenta de vendedor en Mercado Pago. Si no la tienes, haz [clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crear. |
| Aplicación | Las aplicaciones son las distintas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que facilite la gestión. | Para usar OAuth necesitarás tener una aplicación creada. Consulta la documentación del [Dashboard](/developers/es/guides/additional-content/your-integrations/introduction) para obtener información sobre cómo crear una aplicación. |
| Credenciales | Las [credenciales](/developers/es/guides/additional-content/credentials/credentials) son contraseñas únicas con las que identificamos una integración en tu cuenta y sirven para capturar pagos de forma segura en tiendas virtuales y otras aplicaciones. | Para realizar pruebas y garantizar que la integración funcione, se requerirán credenciales de prueba. Después de este paso, necesitarás credenciales de producción para recibir pagos reales. |
| Redirect URL | Dirección a la que deseas reenviar a los vendedores después de haberlos vinculado correctamente. | Esta es una dirección en tu servidor donde se recibirán los access tokens. |
| URL de autenticación | Dirección a la que desea enviar a los vendedores para autorizar el acceso a datos privados. | Esta es una dirección en el servidor de Mercado Pago donde se otorga expresamente el permiso para acceder a los datos privados. |
 
> WARNING
>
> Atención
>
> Recuerda que utilizarás información sensible de tus vendedores. Asegúrate de guardarla de forma segura. No la utilices en la URL de autenticación y gestiona todo el proceso únicamente desde tu servidor.
 
1. Edita tu aplicación para que contenga tu Redirect URL. Consulta [Editar aplicación](/developers/es/guides/additional-content/dashboard/applications).
2. Envía la URL de autenticación con los siguientes campos al vendedor con cuya cuenta deseas vincular  la tuya:

   |Descripción|URL| 
   |---|---|
   | URL de autenticación | https://auth.mercadopago.com/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com |
 
     * **client_id**: edita tu aplicación para que contenga tu Redirect  URL. Consulta [ID de aplicación](/developers/es/guides/additional-content/dashboard/applications).
     * **state**: reemplaza el valor "RANDOM_ID" con un identificador que sea único para cada intento y que no incluya información confidencial para que puedas identificar de quién es el código recibido.
     * **redirect_uri**: agrega la URL informada en el campo Redirect URL de tu aplicación.
     <br/>
 
3. Espera a que el vendedor acceda a la URL y permita el acceso. Al acceder a la URL, el vendedor será dirigido a Mercado Pago y deberá iniciar sesión en su cuenta para realizar la autorización.
4. Verifica la Redirect URL de tu servidor para ver el código de autorización devuelto en el parámetro de **code**.

   |Descripción|URL|
   |---|---|
   | Redirect URL | https://www.redirect-url.com?code=CODE&state=RANDOM_ID |
 
5. Envía tus credenciales y código de autorización al endpoint [/oauth/token](/developers/es/reference/oauth/_oauth_token/post) para recibir el access token como respuesta.
 
> WARNING
>
> Atención
>
> Se recomienda realizar este procedimiento de una única vez junto con el usuario, ya que el código recibido por la Redirect URL después de la autorización tiene una validez de 10 minutos y el access token recibido a través del endpoint tiene una validez de 180 días.
>
> Para generar credenciales de sandbox para pruebas, envíe el parámetro `test_token` con el valor `true`.