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

<center>

![Crear cuenta](/images/prestashop/test-create-account-es.gif)

</center>

4. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago con la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana de incógnito conectada como vendedor, accede al [Panel del desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y crea una nueva aplicación, siguiendo las instrucciones detalladas en la [documentación del Panel del desarrollador.](/developers/es/docs/prestashop/additional-content/your-integrations/dashboard)

![Inicio de sesión](/images/prestashop/test-login-esp.gif)

6. Accede a la aplicación creada en el paso 5 y haz clic en **Credenciales de producción** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de producción](/images/prestashop/test-prod-credentials-es.png)

7. Ve a la configuración del panel de PrestaShop (**Módulos > Module Manager > Pago > Mercado Pago > Configurar**).
8. Ingresa las credenciales de producción `access_token` y `public_key` de la cuenta de prueba del vendedor en el campo **Credenciales de producción**.
9. En la aplicación creada en el paso 5, haz clic en **Credenciales de prueba** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de prueba](/images/prestashop/test-test-credentials-es.png)

10. Ingresa también las credenciales de prueba `access_token` y `public_key` de la cuenta de prueba del vendedor en el campo **Credenciales de prueba**.

![Panel](/images/prestashop/test-prestashop.png)

11. Haz clic en **Guardar**.
12. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago con la cuenta de prueba del comprador creada en el paso 3.

----[mlb]----
13. En la misma ventana conectada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como CPF, RG, teléfono y correo electrónico de la cuenta de prueba del comprador. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/prestashop/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
13. En la misma ventana conectada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/prestashop/additional-content/your-integrations/test/cards) correspondiente.

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
2. Haz clic en **Credenciales de prueba** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de prueba](/images/prestashop/test-test-credentials-es.png)

3. Ve a la configuración del panel de PrestaShop (**Módulos > Module Manager > Pago > Mercado Pago > Configurar**).
4. Ingresa las credenciales de prueba `access_token` y `public_key` de tu aplicación en los campos de la sección "Test Credentials".

![Panel](/images/prestashop/test-prestashop.png)

5. Haz clic en **Guardar**.
6. Accede a tu tienda y realiza una compra proporcionando información de prueba, como un número de teléfono y una dirección de correo electrónico diferentes a los asociados con tu cuenta en Mercado Pago. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/prestashop/additional-content/your-integrations/test/cards) correspondiente.

------------