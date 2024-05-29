# Checkout Pro

----[mlb]----
Al instalar [Mercado Pago Checkout Pro](/developers/es/docs/checkout-pro/landing), puede haber un **aumento en la tasa de aprobación de las ventas en la tienda en línea**. Esto sucede porque los compradores podrán pagar con una cuenta de Mercado Pago y todo el proceso de compra se realizará en nuestro entorno, lo que facilita el pago. Al final de la transacción, estos compradores son redirigidos al entorno de la tienda.

Para instalar **Mercado Pago Checkout Pro** en una tienda Shopify, sigue los siguientes pasos:

1. Dirígete a tu tienda [Shopify](https://accounts.shopify.com/store-login).

2. En el panel de administración de la tienda, haz clic en **Configuración** en la esquina inferior izquierda de la página.

![Panel](/images/shopify/store-panel-es.png)

3. Una vez allí, selecciona la opción **Pagos** en el menú del lado izquierdo de la página.

4. En "Formas de pago admitidas", haz clic en **Agregar formas de pago**.

![Pagos](/images/shopify/payments-page-es.png)

5. Selecciona la pestaña **Buscar por proveedor** y busca la aplicación "Checkout Mercado Pago".

![Agregar forma de pago](/images/shopify/add-payment-method-es.png)

6. Una vez localizada, selecciónala y haz clic en **Instalar**.

![Agregar forma de pago](/images/shopify/provider-es.png)

7. Lee cuidadosamente la información sobre los permisos solicitados y haz clic en **Instalar** nuevamente.

![Agregar forma de pago](/images/shopify/install-app-es.png)

8. Después de aceptar los permisos solicitados, haz clic en **Gestionar cuenta** para vincular tu cuenta de Mercado Pago con tu tienda utilizando tus credenciales.

![Agregar forma de pago](/images/shopify/manage-account-es.png)

> WARNING
>
> Importante
>
> Las credenciales son responsables de identificar la cuenta receptora de los pagos que recibirás en tu tienda. Si no ingresas tus credenciales en el panel de administración de la tienda, se te redirigirá automáticamente para configurar este paso. **Recuerda que la activación de los métodos de pago solo será posible después de ingresar con éxito tus credenciales**.

9. En el panel de administración de Mercado Pago, accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** y selecciona tu aplicación. Si aún no has creado una aplicación, consulta la [documentación del Panel del desarrollador](/developers/es/guides/additional-content/your-integrations/dashboard) para aprender cómo hacerlo.
10. Haz clic en **Credenciales de producción** en el menú de la izquierda. Copia la `public_key` y el `access_token`.

![Production credentials](/images/woocomerce/test-prod-credentials-api-es.png)

11. Introduce tus credenciales de producción `access_token` y `public_key` en los campos correspondientes, asegurándote de **no invertir los campos al copiar y pegar las credenciales**.

![Agregar forma de pago](/images/shopify/add-credentials-es.png)

> NOTE
>
> Nota
>
> Renueva tus credenciales según sea necesario, consultando la [documentación](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials) correspondiente como guía. Después de la renovación, es esencial actualizarlas en el panel de Shopify. Recuerda: al cambiar la contraseña, **es necesario renovar tus credenciales**. Para ello, elimina las credenciales antiguas del panel, copia las nuevas e ingrésalas en el panel administrativo de la tienda.

12. Haz clic en **Guardar credenciales**.

13. Para completar la instalación, selecciona **Activar**.

> En este paso, podrás seleccionar las imágenes de los medios de pago que quieras mostrar en tu tienda a modo ilustrativo. 

¡Listo! El **Mercado Pago Checkout Pro** está preparado para recibir los pagos de tu tienda.

------------
----[mla, mlm, mpe, mlu, mlc, mco]----
Al instalar [Checkout Pro](/developers/es/docs/checkout-pro/landing) (**Checkout Mercado Pago**), puede haber un **aumento en la tasa de aprobación de las ventas en la tienda en línea**. Esto sucede porque los compradores podrán pagar con una cuenta de Mercado Pago y todo el proceso de compra se realizará en nuestro entorno, lo que facilita el pago. Al final de la transacción, estos compradores son redirigidos al entorno de la tienda.

Para instalar o (**Checkout Mercado Pago**) en una tienda Shopify, sigue los siguientes pasos:

1. Dirígete a tu tienda [Shopify](https://accounts.shopify.com/store-login).

2. En el panel de administración de la tienda, haz clic en **Configuración** en la esquina inferior izquierda de la página.

![Panel](/images/shopify/store-panel-es.png)

3. Una vez allí, selecciona la opción **Pagos** en el menú del lado izquierdo de la página.

4. En "Formas de pago admitidas", haz clic en **Agregar formas de pago**.

![Pagos](/images/shopify/payments-page-es.png)

5. Selecciona la pestaña **Buscar por proveedor** y busca la aplicación "Checkout Mercado Pago".

![Agregar forma de pago](/images/shopify/add-payment-method-es.png)

6. Una vez localizada, selecciónala y haz clic en **Instalar**.

![Agregar forma de pago](/images/shopify/provider-es.png)

7. Lee cuidadosamente la información sobre los permisos solicitados y haz clic en **Instalar** nuevamente.

![Agregar forma de pago](/images/shopify/install-app-es.png)

8. Después de aceptar los permisos solicitados, haz clic en **Gestionar cuenta** para vincular tu cuenta de Mercado Pago con tu tienda utilizando tus credenciales.

![Agregar forma de pago](/images/shopify/manage-account-es.png)

> WARNING
>
> Importante
>
> Las credenciales son responsables de identificar la cuenta receptora de los pagos que recibirás en tu tienda. Si no ingresas tus credenciales en el panel de administración de la tienda, se te redirigirá automáticamente para configurar este paso. **Recuerda que la activación de los métodos de pago solo será posible después de ingresar con éxito tus credenciales**.

9. En el panel de administración de Mercado Pago, accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** y selecciona tu aplicación. Si aún no has creado una aplicación, consulta la [documentación del Panel del desarrollador](/developers/es/guides/additional-content/your-integrations/dashboard) para aprender cómo hacerlo.
10. Haz clic en **Credenciales de producción** en el menú de la izquierda. Copia la `public_key` y el `access_token`.

![Production credentials](/images/woocomerce/test-prod-credentials-api-es.png)

11. Introduce tus credenciales de producción `access_token` y `public_key` en los campos correspondientes, asegurándote de **no invertir los campos al copiar y pegar las credenciales**.

![Agregar forma de pago](/images/shopify/add-credentials-es.png)

> NOTE
>
> Nota
>
> Renueva tus credenciales según sea necesario, consultando la [documentación](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials) correspondiente como guía. Después de la renovación, es esencial actualizarlas en el panel de Shopify. Recuerda: al cambiar la contraseña, **es necesario renovar tus credenciales**. Para ello, elimina las credenciales antiguas del panel, copia las nuevas e ingrésalas en el panel administrativo de la tienda.

12. Haz clic en **Guardar credenciales**.

13. Para completar la instalación, selecciona **Activar**.

> En este paso, podrás seleccionar las imágenes de los medios de pago que quieras mostrar en tu tienda a modo ilustrativo. 

¡Listo! **Checkout Mercado Pago** está preparado para recibir pagos.

------------