Utiliza cuentas de prueba para asegurar que tu integración soporta todos los flujos y escenarios posibles. Tienen las mismas características que una cuenta real de Mercado Pago, lo que te permite probar el funcionamiento de las integraciones que estás desarrollando.

> WARNING
>
> Importante
>
> Las integraciones con Checkout ----[mlb]----Transparente------------ ----[mla, mlm, mpe, mco, mlu, mlc]----API------------ y Checkout Bricks no soportan usuarios de prueba para realizar pruebas de integración. Por este motivo, no podrás acceder a esta sección desde una aplicación creada para cualquiera de estos dos productos. Accede a la documentación de Prueba de integración de ----[mlb]----[Checkout Transparente](/developers/es/docs/checkout-api/integration-test/make-test-purchase)------------ ----[mla, mlm, mpe, mco, mlu, mlc]----[Checkout API](/developers/es/docs/checkout-api/integration-test/make-test-purchase)------------ y [Checkout Bricks](/developers/es/docs/checkout-bricks/integration-test/test-payment-flow) para más información.

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