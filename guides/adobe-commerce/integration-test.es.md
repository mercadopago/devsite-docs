# Probar pagos

Las pruebas de compras son esenciales para asegurar que los pagos se procesen correctamente antes de autorizar transacciones reales. Para verificar que tu tienda esté configurada correctamente, te recomendamos que realices pruebas de pago antes de ponerla en producción.

> WARNING
> 
> Importante
>
> La prueba solo se puede realizar después de la etapa de [configuración de la integración.](/developers/es/docs/adobe-commerce/integration-configuration)

A continuación, te indicamos cómo probar la integración:
1. Accede a **[Tus integraciones](https://www.mercadopago.com/developers/panel/app)** en el administrador de Mercado Pago y selecciona la aplicación que deseas probar.
2. Haz clic en **Cuentas de prueba** en el menú de la izquierda.
3. Dentro de la sección de **Cuentas de prueba**, haz clic en **Crear cuenta de prueba** y crea dos cuentas diferentes: una para el vendedor y otra para el comprador. No es posible utilizar la misma cuenta de prueba para el vendedor y el comprador. Consulta la [documentación de Cuentas de prueba](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/accounts) para acceder al paso a paso de creación de cuentas de prueba.

![Crear cuenta](/images/adobe-commerce/test-create-account.gif)

4. Abre una nueva ventana de incógnito e inicia sesión en [Mercado Pago](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEA42QTU_DMAyG_0sPnNAGQuJjUoXSUrZq6zrWDTYuVpZ4aUTSVGlKhxD_nbTAnaOf149j5zNQRsgK3EeNwSTAU60kky44D2pF3dFYDZL7QNceNdLhb6kOfQu1VKND2wSTz36QQB6hl_pRR6oa9E20dSUclek8G97yTDaAJ-9VVEGHh3eJffpnCOOL0rm6mYzHXdeNNFpGuampMCNm9OhgxzWV_J4ZjuHDZbFaXOyn-VnrNDSmtQxDYYxQOBCNXLY6bJBaVg6EUe11UYXZIoJsBVMgOUTzF9hBkZB1PIN0WWxgsytglmfJj2Mqh5ULh6SnXhwCf4UOY5KtyHJGhv7BTjfbOM2XZAGr7To_09Q5cMao8Obi9uru-vryB3XG8v-uIZiSPExIStMnc4jLLK35x_yE8bQk2fMueUxJdAXYvW4TQvakICQR85s9PEDUJcHXuf_fxi9hKXsLJs62-PUNyyMqtf0BAAA/user) usando la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana de incógnito iniciada como vendedor, accede al [Panel del desarrollador](https://www.mercadopago.com/developers/panel/app) y crea una nueva aplicación siguiendo las instrucciones detalladas en la [documentación del Panel del desarrollador.](/developers/es/docs/adobe-commerce/additional-content/your-integrations/dashboard)

![Iniciar sesión](/images/adobe-commerce/test-login.gif)

6. Accede a la aplicación creada en el paso anterior y haz clic en **Credenciales de producción** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de producción](/images/adobe-commerce/test-prod-credentials.png)

7. Ve a la configuración del panel de Adobe Commerce (**Tiendas > Configuración > Ventas > Métodos de pago > Otros métodos de pago > Configurar > Configuración básica > Integración Mercado Pago**).
8. Selecciona la opción **Producción** en el campo "Modo de operación de pago".
9. Ingresa las credenciales de producción `access_token` y `public_key` de la cuenta de prueba del vendedor.

![Panel](/images/adobe-commerce/test-adobe-commerce.png)

11. Haz clic en **Guardar configuración**.
12. Accede a [Mercado Pago](https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEA42QTU_DMAyG_0sPnNAGQuJjUoXSUrZq6zrWDTYuVpZ4aUTSVGlKhxD_nbTAnaOf149j5zNQRsgK3EeNwSTAU60kky44D2pF3dFYDZL7QNceNdLhb6kOfQu1VKND2wSTz36QQB6hl_pRR6oa9E20dSUclek8G97yTDaAJ-9VVEGHh3eJffpnCOOL0rm6mYzHXdeNNFpGuampMCNm9OhgxzWV_J4ZjuHDZbFaXOyn-VnrNDSmtQxDYYxQOBCNXLY6bJBaVg6EUe11UYXZIoJsBVMgOUTzF9hBkZB1PIN0WWxgsytglmfJj2Mqh5ULh6SnXhwCf4UOY5KtyHJGhv7BTjfbOM2XZAGr7To_09Q5cMao8Obi9uru-vryB3XG8v-uIZiSPExIStMnc4jLLK35x_yE8bQk2fMueUxJdAXYvW4TQvakICQR85s9PEDUJcHXuf_fxi9hKXsLJs62-PUNyyMqtf0BAAA/user) e inicia sesión en la cuenta de prueba del comprador creada en el paso 3.
13. En la misma ventana iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como [CPF](https://www.4devs.com.br/gerador_de_cpf), [RG](https://www.4devs.com.br/gerador_de_rg), [teléfono](https://geradornv.com.br/gerador-telefone/) y correo electrónico de la cuenta de prueba del comprador. También utiliza las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/cards) correspondiente.

> WARNING
> 
> Importante
>
> Durante las pruebas, estarás operando en el entorno de producción; sin embargo, se trata de una prueba en la que utilizarás credenciales ficticias para simular escenarios reales. Al concluir las pruebas, recuerda reemplazar las credenciales del vendedor (tanto de producción como de prueba) ingresadas en el panel del complemento en el paso 9, por las credenciales reales de tu cuenta en Mercado Pago. Esta acción te permitirá seguir vendiendo en tu tienda y evitará confusiones.

Después de completar una compra de prueba utilizando Checkout Pro o Checkout----[mlb]----Transparente------------ ----[mla, mpe, mco, mlm, mco, mlu, mlc]----API------------, la aprobación de la compra será visible en el Panel Administrativo de Adobe, con excepción de las compras realizadas mediante métodos offline ----[mlb]----y Pix------------, que permanecerán con estado pendiente.

Además, los pedidos se registrarán en el historial de la cuenta de prueba del vendedor de Mercado Pago.