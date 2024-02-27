# Probar pagos

Las pruebas de compra son esenciales para asegurarse de que los pagos se procesen correctamente antes de autorizar transacciones reales. Para verificar si su tienda está configurada correctamente, recomendamos que realice pruebas de pagos antes de ponerla en producción.

> WARNING
>
> Importante
>
> Las pruebas solo se pueden realizar después de la etapa de [configuración de la integración.](/developers/es/docs/shopify/integration-configuration/checkout-pro)

A continuación, te indicamos cómo probar la integración:

1. Accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el administrador de Mercado Pago y selecciona la aplicación que deseas probar.
2. Haz clic en **Cuentas de prueba** en el menú de la izquierda.
3. Dentro de la sección **Cuentas de prueba**, haz clic en **Crear cuenta de prueba** y crea dos cuentas diferentes: una para el vendedor y otra para el comprador. No es posible utilizar la misma cuenta de prueba para el vendedor y el comprador. Consulta la [documentación de Cuentas de prueba](/developers/es/docs/shopify/additional-content/your-integrations/test/accounts) para acceder al paso a paso de creación de cuentas de prueba.

![Crear cuenta](/images/shopify/test-create-account.gif)

4. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago utilizando la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana de incógnito, iniciada como vendedor, accede al [Panel del desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y crea una nueva aplicación siguiendo las instrucciones detalladas en la [documentación del Panel del desarrollador.](/developers/es/docs/shopify/additional-content/your-integrations/dashboard)

![Iniciar sesión](/images/shopify/test-login.gif)

Ahora, sigue los pasos según el tipo de pago que hayas elegido para procesar los pagos:

## Checkout Pro

6. Accede a la aplicación creada en el paso 5 y haz clic en **Credenciales de producción** en el menú de la izquierda. Copia el `client_id` y el `client_secret`.

![Credenciales de producción](/images/shopify/test-prod-credentials.png)

7. Ve a la configuración del panel de Shopify (**Configuración > Pagos > Administrar**).
8. Ingresa el `client_id` y el `client_secret` de la cuenta de prueba del vendedor.

![Panel](/images/shopify/test-pro-shopify.png)

9. Haz clic en **Guardar**.
10. Accede a Mercado Pago e inicia sesión en la cuenta de prueba del comprador creada en el paso 3.
----[mlb]----
11. En la misma ventana iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como CPF, RG, teléfono y correo electrónico de la cuenta de prueba del comprador. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
11. En la misma ventana iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

------------

## Checkout----[mlb]---- Transparente------------ ----[mla, mpe, mco, mlm, mco, mlu, mlc]----API------------

> WARNING
>
> Importante
>
> Para garantizar el correcto funcionamiento del Checkout----[mlb]---- Transparente------------ ----[mla, mpe, mco, mlm, mco, mlu, mlc]----API------------, es esencial configurar el Checkout Pro y usar las credenciales de producción respectivas de la cuenta de prueba del vendedor en ambas configuraciones, tanto en Checkout----[mlb]---- Transparente------------ ----[mla, mpe, mco, mlm, mco, mlu, mlc]----API------------ como en Checkout Pro.

6. Accede a la aplicación creada en el paso 5 y haz clic en **Credenciales de producción** en el menú de la izquierda. Copia la `public_key`.

![Credenciales de producción](/images/shopify/test-prod-credentials.png)
----[mlb]----
7. Ve a la configuración del panel de Shopify (**Aplicaciones > Checkout Transparente MP**).

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
7. Ve a la configuración del panel de Shopify (**Aplicaciones > Checkout API MP**).

------------
8. Ingresa la `public_key` de la cuenta de prueba del vendedor.

![Panel](/images/shopify/test-api-shopify.png)

9. Haz clic en **Guardar cambios**.
10. Accede a Mercado Pago e inicia sesión en la cuenta de prueba del comprador creada en el paso 3.
----[mlb]----
11. En la misma ventana iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como CPF, RG, teléfono y correo electrónico de la cuenta de prueba del comprador. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
11. En la misma ventana iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

------------

> WARNING
>
> Importante
>
> Durante las pruebas, estarás operando en el entorno de producción; sin embargo, se trata de una prueba en la que estarás utilizando credenciales ficticias para simular escenarios reales. Al finalizar las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba), ingresadas en el panel del complemento en los pasos 8 y 10, por las credenciales reales de tu cuenta en Mercado Pago. Esta acción te permitirá seguir vendiendo en tu tienda y evitará confusiones.

Después de completar una compra de prueba utilizando Checkout Pro o Checkout----[mlb]---- Transparente------------ ----[mla, mpe, mco, mlm, mco, mlu, mlc]----API------------, la aprobación de la compra será visible en el Panel Administrativo de Shopify, excepto las compras realizadas de forma offline----[mlb]---- y Pix------------, que permanecerán con estado pendiente.

Además, los pedidos se registrarán en el historial de la cuenta de prueba del vendedor de Mercado Pago.