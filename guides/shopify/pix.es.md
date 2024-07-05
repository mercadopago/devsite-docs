# Pix

**Mercado Pago Pix** facilita la realización de transacciones financieras utilizando código QR o la funcionalidad Pix Copia y Pega, permitiendo a los clientes efectuar pagos de forma instantánea en cualquier momento. Además, este servicio garantiza la aprobación inmediata de las transacciones y ofrece la comisión más baja en la recepción de pagos.

Para integrar el Mercado Pago Pix, instala la aplicación a través del [panel de Shopify](/developers/es/docs/shopify/integration-configuration/pix#instalaratravsdelpaneldeshopify) o a través del [Marketplace](/developers/es/docs/shopify/integration-configuration/pix#instalaratravsdelmarketplace). Después de la instalación, podrás [configurar el plazo de vencimiento](/developers/es/docs/shopify/integration-configuration/pix#bookmark_configurar_plazo_de_vencimiento).

> WARNING
>
> Importante
>
> Para habilitar pagos con Pix, es necesario verificar si las claves Pix han sido creadas en tu cuenta de Mercado Pago. Si aún no las has creado, te recomendamos ver el [tutorial en vídeo](https://www.youtube.com/watch?v=60tApKYVnkA) para una guía paso a paso.

## Instalar a través del panel de Shopify

Para instalar Mercado Pago Pix a través del panel administrativo de Shopify, sigue los pasos a continuación:

1. Inicia sesión en tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. En el panel administrativo de la tienda, haz clic en **Configuración** en la esquina inferior izquierda de la página.

![Configurations](/images/shopify/pix-configurations-es.png) 

3. Una vez allí, selecciona la opción **Pagos** en el menú al lado izquierdo de la página.
4. En **Formas de pago aceptadas**, haz clic en **Agregar forma de pago**.

![Add payment method](/images/shopify/pix-add-payment-method-es.png) 

5. Selecciona la pestaña **Buscar por proveedor** y busca la aplicación "Mercado Pago Pix". Cuando la encuentres, selecciónala.

![Add](/images/shopify/pix-app-search-es.png) 

6.  Haz clic en **Instalar**.

![Install](/images/shopify/pix-install-es.png) 

7. Lee atentamente la información sobre los permisos solicitados y haz clic en **Instalar** nuevamente.

![Permissions](/images/shopify/pix-permissions-es.png) 

8. Después de aceptar los permisos solicitados, haz clic en **Gestionar cuenta** para vincular tu cuenta de Mercado Pago a tu tienda a través de tus credenciales.

![Manage](/images/shopify/pix-manage-account-es.png) 

> WARNING
>
> Importante
>
> Si ya has instalado la aplicación [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards), no es necesario ingresar tus credenciales nuevamente. Avanza al paso 13 de este tutorial.


9. En el admin de Mercado Pago, accede a [**Tus integraciones**](https://www.mercadopago.com.br/developers/panel/app) y selecciona tu aplicación. Si aún no has creado una aplicación, accede a la [documentación del Panel del desarrollador](/developers/es/docs/shopify/additional-content/your-integrations/dashboard) y aprende cómo crearla.

10. Haz clic en **Credenciales de producción** en el menú de la izquierda. Copia la `public_key` y el `access_token`.

![Production credentials](/images/woocomerce/test-prod-credentials-api-es.png)

11. Ingresa tus credenciales productivas `access_token` y `public_key` en los campos correspondientes. **Asegúrese de no invertir los campos al copiar y pegar las credenciales**.
12. Haz clic en **Guardar credenciales**.

![Save credentials](/images/shopify/pix-save-credentials-es.png)

> NOTE
>
> Nota
>
> Renueva tus credenciales según sea necesario, consultando la [documentación correspondiente](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials) como guía. Después de la renovación, es esencial actualizarlas en el panel de Shopify. Recuerda: **al cambiar la contraseña de tu cuenta de Mercado Pago, es necesario renovar tus credenciales**. Para hacerlo, elimina las credenciales antiguas del panel, copia las nuevas e ingrésalas en el panel administrativo de la tienda.

13. Haz clic en la opción **Verificar activación** de Mercado Pago Pix.

![Check activation](/images/shopify/pix-check-activation-es.png)

14. Haz clic en **Ir a Configuración** para activar la aplicación en caso de que aún no esté activa.

![Go to settings](/images/shopify/pix-go-to-settings-es.png)

15. Haz clic en **Activar**.

![Activate](/images/shopify/pix-activate-es.png)

¡Listo! Mercado Pago Pix está preparado para recibir los pagos de tu tienda.

## Instalar a través del Marketplace

Para instalar Mercado Pago Pix a través del Marketplace, sigue los pasos a continuación:

1. Inicia sesión en su tienda [Shopify](https://accounts.shopify.com/store-login).
2. Accede a la página de Mercado Pago Pix en el Marketplace y haz clic en Instalar.

![Marketplace](/images/shopify/pix-marketplace-install-es.png)

3. Lee atentamente la información sobre los permisos solicitados y haz clic en **Instalar** nuevamente.

![Permissions](/images/shopify/pix-permissions-es.png) 

4. Después de aceptar los permisos solicitados, haz clic en **Gestionar cuenta** para vincular tu cuenta de Mercado Pago a tu tienda a través de tus credenciales.

![Manage](/images/shopify/pix-manage-account-es.png) 

> WARNING
>
> Importante
>
> Si ya has instalado la aplicación [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards), no es necesario ingresar tus credenciales nuevamente. Avanza al paso 9 de este tutorial.

5. En el admin de Mercado Pago, accede a [**Tus integraciones**](https://www.mercadopago.com.br/developers/panel/app) y selecciona tu aplicación. Si aún no has creado una aplicación, accede a la [documentación del Panel del desarrollador](/developers/es/docs/shopify/additional-content/your-integrations/dashboard) y aprende cómo crearla.
6. Haz clic en **Credenciales de producción** en el menú de la izquierda. Copia la `public_key` y el `access_token`.

![Production credentials](/images/woocomerce/test-prod-credentials-api-es.png)

7. Ingresa tus credenciales productivas `access_token` y `public_key` en los campos correspondientes. **Asegúrese de no invertir los campos al copiar y pegar las credenciales**.
8. Haz clic en **Guardar credenciales**.

![Save credentials](/images/shopify/pix-save-credentials-es.png)

> NOTE
>
> Nota
>
> Renueva tus credenciales según sea necesario, consultando la [documentación correspondiente](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials) como guía. Después de la renovación, es esencial actualizarlas en el panel de Shopify. Recuerda: **al cambiar la contraseña de tu cuenta de Mercado Pago, es necesario renovar tus credenciales**. Para hacerlo, elimina las credenciales antiguas del panel, copia las nuevas e ingrésalas en el panel administrativo de la tienda.

9. Haz clic en la opción **Verificar activación** de Mercado Pago Pix.

![Check activation](/images/shopify/pix-check-activation-es.png)

10. Haz clic en **Ir a Configuración** para activar la aplicación en caso de que aún no esté activa.

![Go to settings](/images/shopify/pix-go-to-settings-es.png)

11. Haz clic en **Activar**.

![Activate](/images/shopify/pix-activate-es.png)

¡Listo! Mercado Pago Pix está preparado para recibir los pagos de tu tienda.

## Configurar plazo de vencimiento

Después de instalar la aplicación Mercado Pago Pix, siga los pasos descritos a continuación para configurar el plazo de vencimiento para pagos vía Pix.

1. En el panel administrativo de la tienda, ve a **Configuración** > **Pagos**.
2. Localiza la aplicación **Mercado Pago Pix** y selecciónalo. 
3. En la siguiente pantalla, haz clic en **Más acciones** > **Gestionar**.

![More actions](/images/shopify/pix-more-actions-es.png)

4. En el campo **"Plazo de vencimiento para pagos con Pix"**, selecciona la opción deseada.

![Expiration date](/images/shopify/pix-expiration-date-es.png)

5. Haz clic en **Guardar**.

![Save expiration date](/images/shopify/pix-save-expiration-date-es.png)

¡Listo! El plazo de vencimiento ha sido establecido.