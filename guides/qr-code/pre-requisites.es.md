# Requisitos previos

Ten en cuenta estos aspectos antes de empezar:

* Accede a una cuenta
* Crea una aplicación
* Genera usuarios de prueba
* Obtén tu Access token
* Identifica tu integración

## 1. Accede a una cuenta

Para poder comenzar la integración, es necesario **contar con una cuenta de Mercado Pago o Mercado Libre**.

Puedes ingresar a una cuenta existente o [Crear una cuenta nueva](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).

## 2. Crea una aplicación

Para realizar transacciones a través de la integración de Mercado Pago, se debe crear una credencial. Esta credencial tendrá una identificación y un Access token, solo con este token podrás realizar transacciones utilizando una cuenta de Mercado Pago.

Crea una aplicación para obtener credenciales y configurar notificaciones Webhooks.

Es fácil, te contamos cómo hacerlo:

1. Ingresa a [Tus integraciones](https://www.mercadopago.com/developers/panel/app) y haz clic en **Crear aplicación**.
2. Ponle un nombre con el que puedas identificarla más adelante.
3. Selecciona la opción **Pagos presenciales**, y luego **CódigoQR**.
4. Opcionalmente, puedes seleccionar el modelo de integración, sea **atendido** o **dinámico**.
5. Acepta nuestros Términos y Condiciones, y haz clic en **Crear aplicación**. ¡Listo!

> NOTE
>
> Nota
>
> En caso de que la caja integrada tenga varias conexiones con cuentas Mercado Pago, dirígete a los puntos 4 y 5 dentro de esta misma sección. Presta atención a la seguridad de tu integración e implementa [Oauth.](/developers/es/docs/qr-code/additional-content/security/oauth/introduction)

## 3. Genera usuarios de prueba

Utiliza cuentas de prueba para asegurar que tu integración soporta todos los flujos y escenarios posibles. Tienen las mismas características que una cuenta real de Mercado Pago, lo que te permite probar el funcionamiento de las integraciones que estás desarrollando.

Para realizar las pruebas, debes tener al menos dos cuentas:

* **Vendedor**: cuenta requerida para **configurar la aplicación y las credenciales**. Esta es tu cuenta de usuario.
* **Comprador**: cuenta necesaria para **probar el proceso de compra**.

Además de estas cuentas, también es importante utilizar las [tarjetas de prueba](/developers/es/guides/additional-content/your-integrations/test-cards) para probar la integración de pago y simular el proceso de compra, así como el **saldo en la cuenta de Mercado Pago del usuario de prueba**. Te mostramos más detalles a continuación.

![testuser](/images/dashboard/new-test-users-es.png)

Para crear cuentas y probar el funcionamiento de las integraciones, sigue los siguientes pasos:

1. En el [Devsite](/developers/es/docs), navega hasta **[Tus integraciones](/developers/panel/app)** y haz clic en la tarjeta correspondiente a tu aplicación.
2. En la página de la aplicación, ve a la sección **Cuentas de prueba** y haz clic en el botón **+ Crear cuenta de prueba**.
3. En la pantalla "Crear nueva cuenta", ingresa una descripción para identificar la cuenta. Por ejemplo: "Vendedor - tienda 1".
4. A continuación, selecciona el **país de operación** de la cuenta. Esta información **no se podrá editar más adelante**, y además, los usuarios Comprador y Vendedor deben ser del mismo país.
5. Ingresa un **valor ficticio en dinero** que servirá como referencia para probar tus aplicaciones. Este valor aparecerá como saldo en la cuenta de Mercado Pago del usuario de prueba y se podrá utilizar para simular pagos, al igual que las [tarjetas de prueba](/developers/es/guides/additional-content/your-integrations/test-cards).
6. Autoriza el uso de tus datos personales de acuerdo con la ----[mlb]----[Declaración de Privacidad](https://www.mercadopago.com.br/privacidade)------------ ----[mla, mlm, mpe, mco, mlu, mlc]----[Declaración de Privacidad](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad)------------ y asegúrate de que tu cuenta utiliza las herramientas de Mercado Pago según los [Términos y Condiciones](/developers/es/docs/resources/legal/terms-and-conditions) marcando la casilla de selección.
7. Haz clic en **Crear cuenta de prueba**.


¡Listo! La cuenta de prueba se ha creado y se mostrará en la tabla con la información a continuación.

![testuser](/images/dashboard/test-users-es.png)

* **País**: Lugar de origen de la cuenta seleccionado en tu registro.
* **Identificación de la cuenta**: Descripción para identificar la cuenta de prueba.
* **Usuario**: Nombre de usuario de la cuenta de prueba generado automáticamente. Este es el nombre de usuario que se utiliza para iniciar sesión con el test user.
* **Contraseña**: Contraseña de acceso a la cuenta del usuario de prueba generada automáticamente. Para generar una nueva contraseña, haz clic en los 3 puntos verticales al final de la línea de la tabla y selecciona la opción **Generar nueva contraseña**.
* **Creado en**: Fecha en que se creó la cuenta de prueba.

> NOTE
>
> Nota
>
> Para editar la **identificación de la cuenta** o **agregar más dinero ficticio** para probar tus aplicaciones, haz clic en los **3 puntos verticales** al final de la línea de la tabla y selecciona la opción **Editar datos**.<br> <br> Puedes generar hasta **15 cuentas** de usuarios de prueba al mismo tiempo y, por ahora, **no es posible eliminarlas**.


## Validar inicio de sesión con usuarios de prueba

Al iniciar sesión en la web con usuarios de prueba e intentar acceder a algunas de las secciones del Panel del Desarrollador, es posible que te sea solicitada una autenticación mediante un código enviado por e-mail.

Como se trata de usuarios ficticios, no tendrás acceso a este e-mail que recibirá el código. En cambio, debes realizar esa validación introduciendo los **últimos 6 dígitos que componen el User ID de la cuenta de prueba** o los **últimos 6 dígitos que componen su Access Token productivo**. 

> WARNING
>
> Importante
>
> Para acceder al User ID o el Access Token de una cuenta de prueba, deberás haber creado previamente una aplicación. Para saber cómo hacerlo, accede a la documentación sobre el [Panel del Desarrollador](/developers/es/docs/your-integrations/dashboard). <br> <br> Si tienes dudas sobre cómo obtener el User ID o el Access Token, accede a [Detalles de la aplicación](/developers/es/docs/your-integrations/application-details) o [Credenciales](/developers/es/docs/your-integrations/credentials).

Ten en cuenta que, al realizar este inicio de sesión con una cuenta de prueba, no tendrás acceso a ciertas secciones dentro del Panel del Desarrollador, como a Credenciales de prueba o Calidad de integración. Se trata de secciones que no sólo no son necesarias para este tipo de cuentas, sino que también pueden interferir en el uso adecuado y deseado de los mismos.

Una vez creados los usuarios de prueba, ya puedes comenzar con la integración y crear las sucursales y cajas.

## 4. Obtén tu Access Token (OAuth)

Si eres un integrador que trabajará con varios comercios para que operen con Mercado Pago, te recomendamos realizar el proceso **OAuth - autenticación entre cuentas**. Este proceso consiste en que el cliente permita que sus datos sean compartidos con un sistema de terceros de forma segura.

El Access Token se podrá compartir solamente mediante OAuth. Consulta la [documentación](/developers/es/docs/qr-code/additional-content/security/oauth/introduction) para obtener más información.

## 5. Identifica tu integración (Sponsor ID)

Cuando una cuenta Mercado Pago es creada, se le asigna un User ID, en caso de ser usuarios, o un Cust ID, en caso de ser vendedor. Ambas son identificaciones únicas que se generan automáticamente, y que permitirán asociar las integraciones a cada cuenta al incluirlos en los llamados a la API. 

Cuando realizas integraciones para terceros, el parámetro `sponsor_id` te permitirá identificar las órdenes que son realizadas por tu punto de venta. Deberás enviar el Sponsor ID en los llamados a la [API de órdenes presenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put). Sigue las instrucciones a continuación para saber cómo obtenerlo e incluirlo:

1. Si todavía no lo has hecho, crea una cuenta Mercado Pago Developers.
2. Obtén la identificación del usuario (Cust ID o User ID) de tu cuenta accediento a los [detalles de la aplicación](/developers/es/docs/qr-code/additional-content/your-integrations/application-details) que creaste anteriormente.
3. Incluye el ID de tu cuenta de integrador dentro del Sponsor ID del vendedor.
4. Envía el Sponsor ID en todas las transacciones QR, tal como se muestra en nuestra [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).