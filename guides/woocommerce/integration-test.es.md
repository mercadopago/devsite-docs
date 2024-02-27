# Probar pagos

Las pruebas de compra son esenciales para asegurar que los pagos se procesen correctamente antes de autorizar transacciones reales. Para verificar que tu tienda esté configurada correctamente, recomendamos realizar pruebas de pago antes de ponerla en producción.

> WARNING
> 
> Importante
>
> La prueba solo se puede realizar después de la [configuración de la integración.](/developers/en/docs/woocommerce/integration-configuration/plugin-configuration)

Aquí te explicamos cómo probar la integración:

1. Accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el administrador de Mercado Pago y selecciona la aplicación que deseas probar.
2. Haz clic en **Cuentas de prueba** en el menú de la izquierda.
3. Dentro de la sección **Cuentas de prueba**, haz clic en **Crear cuenta de prueba** y crea dos cuentas diferentes: una para el vendedor y otra para el comprador. No es posible utilizar la misma cuenta de prueba para vendedor y comprador. Consulta la [documentación de Cuentas de prueba](/developers/en/docs/shopify/additional-content/your-integrations/test/accounts) para acceder a la guía paso a paso de creación de cuentas de prueba.

<center>

![Crear cuenta](/images/woocomerce/test-create-account-es.gif)

</center>

4. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago usando la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana de incógnito iniciada como vendedor, accede al [Panel de desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y crea una nueva aplicación, siguiendo las instrucciones detalladas en la [documentación del Panel de desarrollador.](/developers/pt/docs/woocommerce/additional-content/your-integrations/dashboard)

![Inicio de sesión](/images/woocomerce/test-login-esp.gif)

6. Accede a la aplicación creada en el paso anterior y haz clic en **Credenciales de producción** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de producción](/images/woocomerce/test-prod-credentials-es.png)

7. Ve a la configuración del panel de WooCommerce (**WooCommerce > Mercado Pago > Integrar la tienda con Mercado Pago**).
8. Ingresa las credenciales de producción `access_token` y `public_key` de la cuenta de prueba del vendedor en el campo **Credenciales de producción**.
9. En la aplicación creada en el paso 5, haz clic en **Credenciales de prueba** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de prueba](/images/woocomerce/test-test-credentials-es.png)

10. También ingresa las credenciales de prueba `access_token` y `public_key` de la cuenta de prueba del vendedor en el campo **Credenciales de prueba**.

![Panel](/images/woocomerce/test-woo-es.png)

11. Haz clic en **Guardar y continuar**.
12. Accede a Mercado Pago e inicia sesión en la cuenta de prueba del comprador creada en el paso 3.
----[mlb]----
13. En la misma ventana iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como CPF, RG, número de teléfono y correo electrónico de la cuenta de prueba del comprador. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/woocommerce/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
13. En la misma ventana iniciada sesión como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como el teléfono y el correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/woocommerce/additional-content/your-integrations/test/cards) correspondiente.

------------

> WARNING
> 
> Importante
>
> Durante las pruebas, estarás operando en el entorno de producción; sin embargo, se trata de una prueba en la que utilizarás credenciales ficticias para simular escenarios reales. Al concluir las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba), ingresadas en el panel del complemento en los pasos 8 y 10, con las credenciales reales de tu cuenta en Mercado Pago. Esta acción te permitirá seguir vendiendo en tu tienda y evitará confusiones.

Después de completar una compra de prueba utilizando Checkout Pro o Checkout----[mlb]---- Transparente------------ ----[mla, mpe, mco, mlm, mco, mlu, mlc]----API------------, la aprobación de la compra será visible en el Panel Administrativo de WooCommerce, excepto las compras realizadas por métodos offline----[mlb]---- y Pix------------, que permanecerán con estado pendiente.

Además, los pedidos se registrarán en el historial de la cuenta de prueba del vendedor de Mercado Pago.