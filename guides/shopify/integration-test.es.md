# Probar pagos

Las compras de prueba son esenciales para asegurarse de que los pagos se procesen correctamente antes de autorizar transacciones reales. Para verificar si tu tienda está configurada correctamente, recomendamos que realices pruebas de pagos antes de salir a producción.

----[mla, mlm, mpe, mco, mlu, mlc]----
> WARNING
>
> Importante
>
> Las pruebas solo se pueden realizar después de la etapa de [configuración de la integración.](/developers/es/docs/shopify/integration-configuration/checkout-pro)

------------
----[mlb]----
> WARNING
> 
> Importante
>
> La prueba solo podrá realizarse después de completar la etapa de configuración de la integración. Para configurar Checkout Pro, consulta [esta documentación.](/developers/es/docs/shopify/integration-configuration/checkout-pro) Para configurar Checkout Transparente, consulta [esta documentación.](/developers/es/docs/shopify/integration-configuration/checkout-transparente)

------------
A continuación, te indicamos cómo probar la integración:

1. Accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el administrador de Mercado Pago y selecciona la aplicación que deseas probar.
2. Haz clic en **Cuentas de prueba** en el menú de la izquierda.
3. Dentro de la sección **Cuentas de prueba**, haz clic en **Crear cuenta de prueba** y crea dos cuentas diferentes: una para el vendedor y otra para el comprador. No es posible utilizar la misma cuenta de prueba para el vendedor y el comprador. Consulta la [documentación de Cuentas de prueba](/developers/es/docs/shopify/additional-content/your-integrations/test/accounts) para acceder al paso a paso para crearlas.

<center>

![Crear cuenta](/images/shopify/test-create-account-es.gif)

</center>

4. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago utilizando la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana de incógnito en la que iniciaste sesión como vendedor, accede al [Panel del desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y crea una nueva aplicación siguiendo las instrucciones detalladas en la [documentación del Panel del desarrollador.](/developers/es/docs/shopify/additional-content/your-integrations/dashboard)

![Iniciar sesión](/images/shopify/test-login-esp.gif)
----[mlb]----
Ahora, sigue los pasos según el checkout que hayas elegido para procesar los pagos:

------------
## Checkout Pro
----[mlb]----
6. Accede a la aplicación creada en el paso 5 y haz clic en **Credenciales de producción** en el menú de la izquierda. Copia el `client_id` y el `client_secret`.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
6. Accede a la aplicación creada en el paso 5 y haz clic en **Credenciales de producción** en el menú de la izquierda. Copia la `public_key` y el `access_token`.

------------
![Credenciales de producción](/images/shopify/test-prod-credentials-es.png)

7. Ve a la configuración del panel de Shopify (**Configuración > Pagos**) y haz clic en **Gestionar** en el proveedor de Mercado Pago.
----[mlb]----
8. Ingresa el `client_id` y el `client_secret` de la cuenta de prueba del vendedor.

![Panel](/images/shopify/test-pro-shopify.png)

9. Haz clic en **Guardar**.

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
8. Ingresa la `public_key` y el `access_token` de la cuenta de prueba del vendedor.

![Panel](/images/shopify/test-pro-shopify-es-all.jpg)

9. Haz clic en **Guardar credenciales**.

------------
10. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago utilizando la cuenta de prueba del comprador creada en el paso 3.
----[mlb]----
11. En la misma ventana iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como CPF, RG, teléfono y correo electrónico de la cuenta de prueba del comprador. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
11. En la misma ventana iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mlb]----
## Checkout Transparente

> WARNING
>
> Importante
>
> Para garantizar el correcto funcionamiento de Checkout Transparente, es esencial configurar Checkout Pro y usar las credenciales de producción respectivas de la cuenta de prueba del vendedor en ambas configuraciones, tanto en Checkout Transparente como en Checkout Pro.

6. Accede a la aplicación creada en el paso 5 y haz clic en **Credenciales de producción** en el menú de la izquierda. Copia la `public_key`.

![Credenciales de producción](/images/shopify/test-prod-credentials-es.png)

7. Ve a la configuración del panel de Shopify (**Aplicaciones > Checkout Transparente MP**).
8. Ingresa la `public_key` de la cuenta de prueba del vendedor.
9. Activa el **Modo de Producción para los checkouts de Mercado Pago**. Como estamos utilizando cuentas de prueba para probar la integración, es necesario habilitar el modo productivo en Checkout Transparente.

![Panel](/images/shopify/test-api-shopify.png)

10. Haz clic en **Guardar cambios**.
11. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago utilizando la cuenta de prueba del comprador creada en el paso 3.
12. En la misma ventana en la que iniciaste sesión como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como CPF, RG, teléfono y correo electrónico de la cuenta de prueba del comprador. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

------------
> WARNING
>
> Importante
>
> Durante las pruebas, estarás operando en el entorno de producción; sin embargo, se trata de una prueba en la que estarás utilizando credenciales ficticias para simular escenarios reales. Al finalizar las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba), ingresadas en el panel del plugin en los pasos 8 y 10, por las credenciales reales de tu cuenta en Mercado Pago. Esta acción te permitirá seguir vendiendo en tu tienda y evitará confusiones.

Después de completar una compra de prueba utilizando Checkout Pro----[mlb]---- o Checkout Transparente------------, la aprobación de la compra será visible en el Panel Administrativo de Shopify, excepto las compras realizadas de forma offline----[mlb]---- y con Pix------------, que permanecerán con estado pendiente.

Además, los pedidos se registrarán en el historial de la cuenta de prueba del vendedor de Mercado Pago.