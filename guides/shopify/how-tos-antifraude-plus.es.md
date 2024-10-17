# Cómo prevenir fraudes en los pagos con tarjeta

**Mercado Pago Antifraude Plus** es un complemento para [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards) que optimiza la validación de seguridad y mantiene altos niveles de aprobación de pagos al identificar el ID del dispositivo de los compradores, pudiendo evitar así fraudes y contracargos.

La app cuenta con la tecnología **3DS 2.0 (3-D Secure)** para autenticar las transacciones con tarjeta de crédito antes de finalizar el pago, validando si la persona que realiza la compra es realmente titular de la tarjeta o tiene acceso a las cuentas de dicho titular. Consulta [3DS 2.0](/developers/es/docs/shopify/additional-content/security/3ds) para más información sobre cómo funciona este tipo de autenticación.

Para instalar Mercado Pago Antifraude Plus, sigue los pasos a continuación.

1. Accede a la página de la app [Mercado Pago Antifraude Plus](https://apps.shopify.com/mercado-pago-antifraud-plus) en el "Marketplace", y haz clic en **Instalar**. Si aún no lo has hecho, inicia sesión con tu cuenta de Shopify.

![antifraude plus 0](/images/shopify/antifraude-plus-0-es.png)

2. Lee atentamente la información sobre los permisos solicitados y haz clic nuevamente en **Instalar**.

![antifraude plus 2](/images/shopify/antifraude-plus-2-es.png)

3. Si ya has instalado la app [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards), no necesitas ingresar tus credenciales nuevamente, pero podrás cambiarlas si es necesario.

> WARNING
>
> Importante
>
> Recuerde que, al cambiar la contraseña de Shopify, **es necesario renovar sus credenciales**. Para hacerlo, siga las instrucciones en la documentación de [Buenas prácticas de seguridad para tus credenciales](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials). Luego, para actualizarlas en su cuenta de Shopify, haga clic en **Administrar cuenta** y llene los campos correspondientes con tu `access_token` y `public_key`, **teniendo cuidado de no intercambiar los campos al copiar y pegar las credenciales**.

4. Haz clic en la opción **Verificar activación** de Mercado Pago Antifraude Plus y ve a la sección de "Configuraciones" de Shopify.

![antifraude plus 3](/images/shopify/antifraude-plus-3-es.png)

5. Finalmente, haz clic en **Guardar** para finalizar la instalación.

![antifraude plus 4](/images/shopify/antifraude-plus-4-es.png)

¡Listo! **Mercado Pago Antifraude Plus** se ha instalado con éxito.