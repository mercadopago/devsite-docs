# Checkout Pro

----[mlb]----
Al instalar [Checkout Pro](/developers/es/docs/checkout-pro/landing), puede haber un **aumento en la tasa de aprobación de las ventas en la tienda en línea**. Esto sucede porque los compradores podrán pagar con una cuenta de Mercado Pago y todo el proceso de compra se realizará en nuestro entorno, lo que facilita el pago. Al final de la transacción, estos compradores son redirigidos al entorno de la tienda.

Para configurar el Checkout Pro en una tienda Shopify, sigue los pasos a continuación:

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Dentro del panel administrativo de la tienda, haz clic en **Configuración**.
3. Una vez allí, selecciona la opción **Pagos**. Luego, haz clic en el botón **Seleccionar un proveedor**.
4. Escribe Mercado Pago en la barra de búsqueda. Una vez que lo encuentres, selecciónalo como método de pago.
5. Coloca tus **credenciales de producción** (`client_id` y `client_secret`) en los campos que lo solicitan. Recuerda tener a mano tus [credenciales](/developers/es/docs/shopify/additional-content/your-integrations/credentials). 
6. En el siguiente paso, podrás seleccionar las imágenes de los medios de pago que deseas mostrar en la tienda.

> Estas imágenes son sólo para **fines ilustrativos y no implican la activación del método de pago seleccionado**.

7. Por último, la tienda te ofrecerá la opción de **habilitar el modo de prueba**. Al activar esta opción, los pedidos completados con Checkout Pro **no serán pedidos reales**. Es decir, serán pedidos de prueba que, aun siendo completados, no tendrán su estado actualizado en la plataforma y no aparecerán en el panel de Mercado Pago en la cuenta del usuario.
8. Al finalizar, haz clic en **Activar Mercado Pago**.

> En caso de renovar tus credenciales, recuerda reemplazar tanto las de producción como las de prueba en tu integración.

------------
----[mla, mlm, mpe, mlu, mlc, mco]----
Al instalar [Checkout Pro](/developers/es/docs/checkout-pro/landing) (**Checkout Mercado Pago**), puede haber un **aumento en la tasa de aprobación de las ventas en la tienda en línea**. Esto sucede porque los compradores podrán pagar con una cuenta de Mercado Pago y todo el proceso de compra se realizará en nuestro entorno, lo que facilita el pago. Al final de la transacción, estos compradores son redirigidos al entorno de la tienda.

> WARNING
>
> Atención
>
> Si estabas usando la app antigua de Mercado Pago (**Mercado Pago**) y dejaste de recibir pagos en tu tienda, no te preocupes. Para volver a vender instala nuestra nueva app (**Checkout Mercado Pago**) siguiendo los pasos a continuación.

Para instalar Checkout Pro (**Checkout Mercado Pago**) en una tienda Shopify, sigue los siguientes pasos:

1. Dirígete a tu tienda [Shopify](https://accounts.shopify.com/store-login).

2. En el panel de administración de la tienda, haz clic en **Configuración** en la esquina inferior izquierda de la página.

![Panel](/images/shopify/store-panel-es.png)

3. Una vez allí, selecciona la opción **Pagos** en el menú del lado izquierdo de la página.

![Pagos](/images/shopify/payments-page-es.png)

4. En "Formas de pago admitidas", haz clic en **Agregar formas de pago**.

5. Selecciona la pestaña **Buscar por proveedor** y busca la aplicación "Checkout Mercado Pago".

![Agregar forma de pago](/images/shopify/add-payment-method-es.png)

6. Una vez localizada, selecciónala y haz clic en **Instalar**.

![Agregar forma de pago](/images/shopify/provider-es.png)

7. Lee cuidadosamente la información sobre los permisos solicitados y haz clic en **Instalar** nuevamente.

![Agregar forma de pago](/images/shopify/install-app-es.png)

8. Después de aceptar los permisos solicitados, haz clic en **Gestionar cuenta** para vincular tu cuenta de Mercado Pago con tu tienda.

![Agregar forma de pago](/images/shopify/manage-account-es.png)

9. Ingresa tus **credenciales de producción** (`public key` y `access token`) en los campos solicitados, asegurándote de no invertir los campos al copiar y pegar las credenciales. Haz clic en **Guardar**. Aprende cómo obtener tus credenciales en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/credentials) correspondiente.

> WARNING
>
> Importante
>
> Las credenciales son responsables de identificar la cuenta receptora de los pagos que recibirás en tu tienda. Si no ingresas tus credenciales en el panel de administración de la tienda, se te redirigirá automáticamente para configurar este paso. **Recuerda que la activación de los métodos de pago solo será posible después de ingresar con éxito tus credenciales**.

![Agregar forma de pago](/images/shopify/add-credentials-es.png)

> NOTE
>
> Nota
>
> Renueva tus credenciales según sea necesario, consultando la [documentación](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials) correspondiente como guía. Después de la renovación, es esencial actualizarlas en el panel de Shopify. Recuerda: al cambiar la contraseña, **es necesario renovar tus credenciales**. Para ello, elimina las credenciales antiguas del panel, copia las nuevas e ingrésalas en el panel administrativo de la tienda.

9. Para completar la instalación, selecciona **Activar**.

> En este paso, podrás seleccionar las imágenes de los medios de pago que quieras mostrar en tu tienda a modo ilustrativo. 

------------

¡Listo! El Checkout Pro de Mercado Pago está preparado para recibir los pagos de tu tienda.