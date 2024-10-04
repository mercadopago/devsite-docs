# Probar pagos

Las pruebas de compra son esenciales para asegurar que los pagos se procesen correctamente antes de autorizar transacciones reales. Para verificar si tu tienda está configurada correctamente, te recomendamos que realices pruebas de pago antes de ponerla en producción.

> WARNING
> 
> Importante
>
> La prueba solo se puede realizar después de la etapa de [configuración de la integración.](/developers/es/docs/prestashop/integration)

A continuación, te mostramos cómo probar la integración:
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
## Checkout Pro

------------
1. Accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el administrador de Mercado Pago y selecciona la aplicación que deseas probar.
2. Haz clic en **Cuentas de prueba** en el menú de la izquierda.
3. Dentro de la sección **Cuentas de prueba**, haz clic en **Crear cuenta de prueba** y crea dos cuentas diferentes: una para el vendedor y otra para el comprador. No es posible utilizar la misma cuenta de prueba para el vendedor y el comprador. Consulta la [documentación de Cuentas de prueba](/developers/es/docs/prestashop/additional-content/your-integrations/test/accounts) para obtener instrucciones detalladas sobre cómo crear cuentas de prueba.

![Crear cuenta](/images/prestashop/test-create-account-es.gif)

4. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago con la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana de incógnito conectada como vendedor, accede al [Panel del desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y crea una nueva aplicación, siguiendo las instrucciones detalladas en la [documentación del Panel del desarrollador.](/developers/es/docs/prestashop/additional-content/your-integrations/dashboard)

![Inicio de sesión](/images/prestashop/test-login-esp.gif)

> WARNING
>
> Importante
>
> Si, al iniciar sesión con una cuenta de prueba o navegar por las secciones de Tus integraciones, te es solicitada una autenticación de la misma vía e-mail, accede a nuestra documentación para saber cómo [validar el inicio de sesión en cuentas de prueba](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_inicio_de_sesión_con_usuarios_de_prueba).

6. Accede a la aplicación creada en el paso 5 y haz clic en **Credenciales de producción** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de producción](/images/prestashop/test-prod-credentials-es.png)

7. Ve a la configuración del panel de PrestaShop (**Módulos > Gestor de Módulos**). Encuentra el módulo de Mercado Pago en la sección "Pago", haz clic en la flecha hacia abajo y selecciona **Configurar**.
8. Ingresa las credenciales de producción `access_token` y `public_key` de la cuenta de prueba del vendedor en el campo **Credenciales de Producción** y replique la misma información en el campo **Credenciales de Prueba**.

![Panel](/images/prestashop/test-prestashop-es.png)

9. Recuerda activar el modo de producción en el campo "Producción".

![Panel](/images/prestashop/test-prestashop-modeprod-es.png)

10. Haz clic en **Guardar**.
11. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago con la cuenta de prueba del comprador creada en el paso 3.

> WARNING
>
> Importante
>
> Si, al iniciar sesión con una cuenta de prueba o navegar por las secciones de Tus integraciones, te es solicitada una autenticación de la misma vía e-mail, accede a nuestra documentación para saber cómo [validar el inicio de sesión en cuentas de prueba](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_inicio_de_sesión_con_usuarios_de_prueba).

----[mlb]----
12. En la misma ventana conectada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como CPF, RG, teléfono y correo electrónico de la cuenta de prueba del comprador. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/prestashop/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
12. En la misma ventana conectada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/prestashop/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mlb]----
> WARNING
> 
> Importante
>
> Durante las pruebas, estarás operando en el entorno de producción; sin embargo, es una prueba en la que utilizará credenciales ficticias para simular escenarios reales. Al finalizar las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba) ingresadas en el panel del complemento en los pasos 8 y 10, por las credenciales reales de tu cuenta en Mercado Pago. Esta acción te permitirá seguir vendiendo en tu tienda y evitará confusiones.

Después de completar una compra de prueba utilizando el Checkout Pro o el Checkout Transparente, la aprobación de la compra será visible en el Panel Administrativo de PrestaShop, excepto en las compras realizadas por métodos offline y Pix que permanecerán con estado pendiente.

Además, los pedidos se registrarán en el historial de la cuenta de prueba del vendedor de Mercado Pago.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
> WARNING
> 
> Importante
>
> Durante las pruebas en Checkout Pro, estarás operando en el entorno de producción; sin embargo, se trata de una prueba en la que utilizarás credenciales ficticias para simular escenarios reales. Al concluir las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba), ingresadas en el panel del plugin en el paso 9, por las credenciales reales de tu cuenta en Mercado Pago. Esta acción te permitirá seguir vendiendo en tu tienda y evitará confusiones.

Después de completar una compra de prueba utilizando Checkout Pro, la aprobación de la compra será visible en el Panel Administrativo de PrestaShop, con la excepción de las compras realizadas por medios offline, que permanecerán con estado pendiente.

Además, los pedidos se registrarán en el historial de la cuenta de prueba del vendedor de Mercado Pago.

## Checkout API

1. Accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el administrador de Mercado Pago y selecciona la aplicación que deseas probar.
2. Haz clic en **Credenciales de producción** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de producción](/images/prestashop/test-prod-credentials-api-es.png)

3. Ve a la configuración del panel de PrestaShop (**Módulos > Gestor de Módulos**). Encuentra el módulo de Mercado Pago en la sección "Pago", haz clic en la flecha hacia abajo y selecciona **Configurar**.
4. Ingresa las credenciales de producción `access_token` y `public_key` en el campo **Credenciales de producción**.
5. En tu aplicación, haz clic en **Credenciales de prueba** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de prueba](/images/prestashop/test-test-credentials-api-es.png)

6. También ingresa las credenciales de prueba `access_token` y `public_key` en el campo **Credenciales de prueba**.

![Painel](/images/prestashop/test-prestashop-es.png)

7. En el panel de Prestashop, desactiva el Modo Producción en el campo "Producción", activando automáticamente el Modo de Pruebas.

![Modo](/images/prestashop/test-prestashop-testmode-es.png)

8. Haz clic en **Guardar**.
9. Accede a tu tienda y realiza una compra proporcionando información de prueba, como un número de teléfono y una dirección de correo electrónico diferentes a los asociados con tu cuenta en Mercado Pago. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/prestashop/additional-content/your-integrations/test/cards) correspondiente.

------------