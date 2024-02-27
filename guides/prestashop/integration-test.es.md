# Probar pagos

Las pruebas de compra son esenciales para asegurar que los pagos se procesen correctamente antes de autorizar transacciones reales. Para verificar si su tienda está configurada correctamente, le recomendamos que realice pruebas de pago antes de ponerla en producción.

> WARNING
> 
> Importante
>
> La prueba solo se puede realizar después de la etapa de [configuración de la integración.](/developers/es/docs/prestashop/integration)

A continuación, le mostramos cómo probar la integración:
1. Acceda a **[Sus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el administrador de Mercado Pago y seleccione la aplicación que desea probar.
2. Haga clic en **Cuentas de prueba** en el menú de la izquierda.
3. Dentro de la sección **Cuentas de prueba**, haga clic en **Crear cuenta de prueba** y cree dos cuentas diferentes: una para el vendedor y otra para el comprador. No es posible utilizar la misma cuenta de prueba para el vendedor y el comprador. Consulte la [documentación de Cuentas de prueba](/developers/es/docs/prestashop/additional-content/your-integrations/test/accounts) para obtener instrucciones detalladas sobre cómo crear cuentas de prueba.

![Crear cuenta](/images/prestashop/test-create-account.gif)

4. Abra una nueva ventana de incógnito e inicie sesión en Mercado Pago con la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana de incógnito conectada como vendedor, acceda al [Panel del desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y cree una nueva aplicación, siguiendo las instrucciones detalladas en la [documentación del Panel del desarrollador.](/developers/es/docs/prestashop/additional-content/your-integrations/dashboard)

![Inicio de sesión](/images/prestashop/test-login.gif)

6. Acceda a la aplicación creada en el paso 5 y haga clic en **Credenciales de producción** en el menú de la izquierda. Copie el `access_token` y la `public_key`.

![Credenciales de producción](/images/prestashop/test-prod-credentials.png)

7. Vaya a la configuración del panel de Prestashop (**Módulos > Module Manager > Pago > Mercado Pago > Configurar**).
8. Ingrese las credenciales de producción `access_token` y `public_key` de la cuenta de prueba del vendedor en el campo **Credenciales de producción**.
9. En la aplicación creada en el paso 5, haga clic en **Credenciales de prueba** en el menú de la izquierda. Copie el `access_token` y la `public_key`.

![Credenciales de prueba](/images/prestashop/test-test-credentials.png)

10. Ingrese también las credenciales de prueba `access_token` y `public_key` de la cuenta de prueba del vendedor en el campo **Credenciales de prueba**.

![Panel](/images/prestashop/test-prestashop.png)

11. Haga clic en **Guardar**.
12. Acceda a Mercado Pago e inicie sesión en la cuenta de prueba del comprador creada en el paso 3.

----[mlb]----
13. En la misma ventana conectada como comprador, acceda a su tienda y realice una compra proporcionando información de prueba, como CPF, RG, teléfono y correo electrónico de la cuenta de prueba del comprador. También utilice las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/prestashop/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
13. En la misma ventana conectada como comprador, acceda a su tienda y realice una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", seleccione la opción **OTRO** e ingrese 9 dígitos. También utilice las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/prestashop/additional-content/your-integrations/test/cards) correspondiente.

------------

> WARNING
> 
> Importante
>
> Durante las pruebas, estará operando en el entorno de producción; sin embargo, es una prueba en la que utilizará credenciales ficticias para simular escenarios reales. Al finalizar las pruebas, recuerde reemplazar las credenciales del vendedor (tanto de producción como de prueba) ingresadas en el panel del complemento en los pasos 8 y 10, por las credenciales reales de su cuenta en Mercado Pago. Esta acción le permitirá seguir vendiendo en su tienda y evitará confusiones.

Después de completar una compra de prueba utilizando el Checkout Pro o el Checkout ----[mlb]---- Transparente------------ ----[mla, mpe, mco, mlm, mco, mlu, mlc]----API------------, la aprobación de la compra será visible en el Panel Administrativo de Prestashop, excepto en las compras realizadas por métodos offline----[mlb]---- y Pix------------, que permanecerán con estado pendiente.

Además, los pedidos se registrarán en el historial de la cuenta de prueba del vendedor de Mercado Pago.