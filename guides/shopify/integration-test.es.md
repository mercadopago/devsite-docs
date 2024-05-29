# Probar pagos

Las compras de prueba son esenciales para asegurarse de que los pagos se procesen correctamente antes de autorizar transacciones reales. Para verificar si tu tienda está configurada correctamente, recomendamos que realices pruebas de pagos antes de salir a producción.

----[mla, mpe, mco, mlu, mlc]----
> WARNING
> 
> Importante
>
> La prueba solo se puede realizar después de la etapa de configuración de la integración del [Checkout Mercado Pago](/developers/es/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlb]----
> WARNING
> 
> Importante
>
> La prueba solo se puede realizar después de la etapa de configuración de la integración de uno de los checkouts de pago, ya sea [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards) o [Checkout Mercado Pago](/developers/es/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlm]----
> WARNING
> 
> Importante
>
> La prueba solo se puede realizar después de la etapa de configuración de la integración de uno de los checkouts de pago, ya sea [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards) o [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro).

------------

Ve a continuación cómo probar la integración:

1. Acceda a **[Sus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el administrador de Mercado Pago y seleccione la aplicación que desea probar.
2. Haz clic en **Cuentas de prueba** en el menú de la izquierda.
3. Dentro de la sección "Cuentas de prueba", haz clic en **Crear cuenta de prueba** y crea dos cuentas diferentes: una para vendedor y otra para comprador. No es posible utilizar la misma cuenta de prueba para vendedor y comprador. Consulta la documentación de [Cuentas de prueba](/developers/es/docs/shopify/additional-content/your-integrations/test/accounts)  para acceder al paso a paso de creación de cuentas de prueba.

![Crear cuenta](/images/shopify/test-create-account-es.gif)

4. Abra una nueva ventana anónima e inicie sesión en Mercado Pago usando la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana anónima con sesión iniciada como vendedor, acceda al [Panel del desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y cree una nueva aplicación, siguiendo las instrucciones detalladas en la [documentación del Panel del desarrollador](/developers/es/docs/shopify/additional-content/your-integrations/dashboard).

![Login](/images/shopify/test-login-es.gif)

> WARNING
>
> Importante
>
> Si, al iniciar sesión con una cuenta de prueba o navegar por las secciones de Sus integraciones, se solicita autenticación por correo electrónico, acceda a nuestra documentación para saber [validar el inicio de sesión en cuentas de prueba](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_inicio_de_sesión_con_usuarios_de_prueba).

6. Acceda a la aplicación creada en el paso 5 y haga clic en **Credenciales de producción** en el menú de la izquierda. Copie la `public_key` y el `access_token`.

![Credenciais de produção](/images/shopify/test-prod-credentials-es.png)

----[mlm]----
7. Ve a las configuraciones del panel de Shopify (**Configuraciones > Pagos**) y haz clic para **Gestionar** uno de los checkout de Mercado Pago, ya sea [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards) o [Checkout Mercado Pago](/developers/es/docs/shopify/integration-configuration/checkout-pro). .
8. Ingresa la `public_key` y el `access_token` de la cuenta de prueba del vendedor.
9. Haz clic en **Guardar credenciales**.

Ahora, sigue el paso a paso según el tipo de checkout elegido para procesar los pagos:

## Mercado Pago Tarjetas

10. Accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

## Checkout Mercado Pago

10. Abre una nueva ventana anónima e inicia sesión en Mercado Pago usando la cuenta de prueba del comprador creada en el paso 3.
11. En la misma ventana con sesión iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

> WARNING
> 
> Importante
>
> Después de completar una compra de prueba utilizando uno de los checkouts, la aprobación de la compra será visible en el Panel Administrativo de Shopify, con excepción de las compras hechas por medios offline que permanecerán con estado pendiente.
> <br><br>
> Durante las pruebas, estarás operando en el entorno de producción; sin embargo, se trata de una prueba en la que estarás utilizando credenciales ficticias para simular escenarios reales. Al concluir las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba), ingresadas en el panel del plugin en el paso 8, por las credenciales reales de tu cuenta en Mercado Pago. Esta acción permitirá que continúes vendiendo en tu tienda y evitará confusiones.
> <br><br>
> Además, los pedidos serán registrados en el historial de la cuenta de prueba del vendedor de Mercado Pago.

------------
----[mlb]----
7. Ve a las configuraciones del panel de Shopify (**Configuraciones > Pagos**) y haz clic para **Gestionar** uno de los checkout de Mercado Pago, ya sea [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards) o [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro). .
8. Ingresa la `public_key` y el `access_token` de la cuenta de prueba del vendedor.
9. Haz clic en **Guardar credenciales**.

Ahora, sigue el paso a paso según el tipo de checkout elegido para procesar los pagos:

## Mercado Pago Tarjetas

10. Accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

## Mercado Pago Checkout Pro

10. Abre una nueva ventana anónima e inicia sesión en Mercado Pago usando la cuenta de prueba del comprador creada en el paso 3.
11. En la misma ventana con sesión iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

> WARNING
> 
> Importante
>
> Después de completar una compra de prueba utilizando uno de los checkouts, la aprobación de la compra será visible en el Panel Administrativo de Shopify, con excepción de las compras hechas por medios offline que permanecerán con estado pendiente.
> <br><br>
> Durante las pruebas, estarás operando en el entorno de producción; sin embargo, se trata de una prueba en la que estarás utilizando credenciales ficticias para simular escenarios reales. Al concluir las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba), ingresadas en el panel del plugin en el paso 8, por las credenciales reales de tu cuenta en Mercado Pago. Esta acción permitirá que continúes vendiendo en tu tienda y evitará confusiones.
> <br><br>
> Además, los pedidos serán registrados en el historial de la cuenta de prueba del vendedor de Mercado Pago.

------------
----[mla, mpe, mco, mlu, mlc]----
7. Ve a las configuraciones del panel de Shopify (**Configuraciones > Pagos**) y haz clic para **Gestionar** el [Checkout Mercado Pago](/developers/es/docs/shopify/integration-configuration/checkout-pro). .
8. Ingresa la `public_key` y el `access_token` de la cuenta de prueba del vendedor.
9. Haz clic en **Guardar credenciales**.
10. Abre una nueva ventana anónima e inicia sesión en Mercado Pago usando la cuenta de prueba del comprador creada en el paso 3.
11. En la misma ventana con sesión iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

> WARNING
> 
> Importante
>
> Después de completar una compra de prueba utilizando uno de los checkouts, la aprobación de la compra será visible en el Panel Administrativo de Shopify, con excepción de las compras hechas por medios offline que permanecerán con estado pendiente.
> <br><br>
> Durante las pruebas, estarás operando en el entorno de producción; sin embargo, se trata de una prueba en la que estarás utilizando credenciales ficticias para simular escenarios reales. Al concluir las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba), ingresadas en el panel del plugin en el paso 8, por las credenciales reales de tu cuenta en Mercado Pago. Esta acción permitirá que continúes vendiendo en tu tienda y evitará confusiones.
> <br><br>
> Además, los pedidos serán registrados en el historial de la cuenta de prueba del vendedor de Mercado Pago.

------------