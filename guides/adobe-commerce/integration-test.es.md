# Probar pagos

Las pruebas de compras son esenciales para asegurar que los pagos se procesen correctamente antes de autorizar transacciones reales. Para verificar que tu tienda esté configurada correctamente, te recomendamos que realices pruebas de pago antes de ponerla en producción.

> WARNING
> 
> Importante
>
> La prueba solo se puede realizar después de la etapa de [configuración de la integración.](/developers/es/docs/adobe-commerce/integration-configuration)

A continuación, te indicamos cómo probar la integración:
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
## Checkout Pro

------------
1. Accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el administrador de Mercado Pago y selecciona la aplicación que deseas probar.
2. Haz clic en **Cuentas de prueba** en el menú de la izquierda.
3. Dentro de la sección de **Cuentas de prueba**, haz clic en **Crear cuenta de prueba** y crea dos cuentas diferentes: una para el vendedor y otra para el comprador. No es posible utilizar la misma cuenta de prueba para el vendedor y el comprador. Consulta la [documentación de Cuentas de prueba](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/accounts) para acceder al paso a paso de creación de cuentas de prueba.

![Crear cuenta](/images/adobe-commerce/test-create-account-es.gif)

4. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago usando la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana de incógnito iniciada como vendedor, accede a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y crea una nueva aplicación siguiendo las instrucciones detalladas en la [documentación del Panel del desarrollador](/developers/es/docs/adobe-commerce/additional-content/your-integrations/dashboard).

![Iniciar sesión](/images/adobe-commerce/test-login-esp.gif)


 > WARNING
 >
 > Importante
 >
 > Si, al iniciar sesión con una cuenta de prueba o navegar por las secciones de Tus integraciones, te es solicitada una autenticación de la misma vía e-mail, accede a nuestra documentación para saber cómo [validar el inicio de sesión en cuentas de prueba](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_inicio_de_sesión_con_usuarios_de_prueba).

6. Accede a la aplicación creada en el paso anterior y haz clic en **Credenciales de producción** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de producción](/images/adobe-commerce/test-prod-credentials-es.png)

7. Ve a la configuración del panel de Adobe Commerce (**Stores > Configuration > Sales > Payment Methods > Other payments methods > Configure > Basic Settings > Mercado Pago Integration**).
8. Selecciona la opción **Production** en el campo "Checkout operation mode".
9. Ingresa las credenciales de producción `access_token` y `public_key` de la cuenta de prueba del vendedor.

![Panel](/images/adobe-commerce/test-adobe-commerce.png)

11. Haz clic en **Save Config**.
12. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago usando la cuenta de prueba del comprador creada en el paso 3.

 > WARNING
 >
 > Importante
 >
 > Si, al iniciar sesión con una cuenta de prueba o navegar por las secciones de Tus integraciones, te es solicitada una autenticación de la misma vía e-mail, accede a nuestra documentación para saber cómo [validar el inicio de sesión en cuentas de prueba](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/accounts).

----[mlb]----
13. En la misma ventana iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como CPF, RG, número de teléfono y correo electrónico de la cuenta de prueba del comprador. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
13. En la misma ventana iniciada sesión como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como el teléfono y el correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mlb]----
> WARNING
> 
> Importante
>
> Durante las pruebas, estarás operando en el entorno de producción; sin embargo, se trata de una prueba en la que utilizarás credenciales ficticias para simular escenarios reales. Al concluir las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba) ingresadas en el panel del complemento en el paso 9, por las credenciales reales de tu cuenta en Mercado Pago. Esta acción te permitirá seguir vendiendo en tu tienda y evitará confusiones.

Después de completar una compra de prueba utilizando Checkout Pro o Checkout Transparente, la aprobación de la compra será visible en el Panel Administrativo de Adobe, con excepción de las compras realizadas mediante métodos offline y Pix que permanecerán con estado pendiente.

Además, los pedidos se registrarán en el historial de la cuenta de prueba del vendedor de Mercado Pago.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
> WARNING
> 
> Importante
>
> Durante las pruebas en Checkout Pro, estarás operando en el entorno de producción; sin embargo, se trata de una prueba en la que utilizarás credenciales ficticias para simular escenarios reales. Al concluir las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba), ingresadas en el panel del plugin en el paso 9, por las credenciales reales de tu cuenta en Mercado Pago. Esta acción te permitirá seguir vendiendo en tu tienda y evitará confusiones.

Después de completar una compra de prueba utilizando Checkout Pro, la aprobación de la compra será visible en el Panel Administrativo de Adobe, excepto en las compras realizadas por medios offline, que permanecerán con estado pendiente.

Además, los pedidos se registrarán en el historial de la cuenta de prueba del vendedor de Mercado Pago.

## Checkout API

1. Accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el admin de Mercado Pago y selecciona la aplicación que deseas probar.
2. Haz clic en **Credenciales de prueba** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de prueba](/images/adobe-commerce/test-test-credentials-api-es.png)

3. Ve a la configuración del panel de Adobe Commerce (**Stores > Configuration > Sales > Payment Methods > Other payments methods > Configure > Basic Settings > Mercado Pago Integration**).
4. Selecciona la opción **Sandbox** en el campo "Checkout operation mode".
5. Ingresa las credenciales de prueba `access_token` y `public_key` de tu aplicación.

![Panel](/images/adobe-commerce/test-adobe-commerce-all.png)

6. Haz clic en **Save Config**.
7. Accede a tu tienda y realiza una compra proporcionando información de prueba, como un número de teléfono y una dirección de correo electrónico diferente al asociado con tu cuenta en Mercado Pago. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/cards) correspondiente.

------------