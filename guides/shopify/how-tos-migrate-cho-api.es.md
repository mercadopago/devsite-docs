# Cómo migrar a la nueva versión de la app de Mercado Pago

Aprende cómo instalar la nueva app (**Mercado Pago Tarjetas**) y desinstalar la antigua (**Checkout Transparente MP**) para evitar la interrupción del servicio en  Shopify.

----[mlb]----
# Tarjetas

**Mercado Pago Tarjetas** ([Checkout Transparente](/developers/es/docs/checkout-api/landing)) es una app que permite pagos transparentes con tarjetas de débito o crédito, en la que todo el proceso de finalización de compra se realiza dentro del entorno de la tienda online, sin necesidad de redireccionamiento a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, reduce el abandono del carrito y aumenta la posibilidad de conversión.

> WARNING
>
> Atenção
>
> O novo app serve apenas para pagamentos com cartões. Para realizar pagamentos com **Pix** ou **boleto bancário**, utilize o [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro).


------------
----[mlm]----
# Tarjetas

**Mercado Pago Tarjetas** ([Checkout API](/developers/es/docs/checkout-api/landing)) es una app que permite pagos transparentes con tarjetas de débito o crédito, en la que todo el proceso de finalización de compra se realiza dentro del entorno de la tienda online, sin necesidad de redireccionamiento a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, reduce el abandono del carrito y aumenta la posibilidad de conversión.

------------

## Desactiva la antigua app

Antes de instalar la nueva versión, es necesario desinstalar la configuración de la antigua app.

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. En el panel administrativo de la tienda, haz clic en **Configuraciones**.
3. Una vez allí, selecciona la opción **Apps y canales de ventas**.
4. Localiza la aplicación con el nombre "Checkout Transparente MP" y haz clic en **Gestionar**.
5. Haz clic en el **menú de opciones adicionales** y luego en **Desinstalar**.
6. Regresa al panel administrativo de la tienda y, nuevamente, haz clic en **Configuraciones**.
7. Una vez allí, selecciona la opción **Pagos**.
8. Localiza la antigua aplicación con el nombre "Mercado Pago" y haz clic en **Gestionar**.
9. Por último, haz clic en **Desactivar** y luego en **Desinstalar**.

> WARNING
>
> Atención
>
> En esta nueva versión ya no es obligatoria la instalación de otra aplicación para el funcionamiento de **Mercado Pago Tarjetas**.
> <br><br>
> Sin embargo, esta nueva aplicación solo sirve para pagos con tarjetas. Para realizar pagos con **Pix** o **boleto bancário**, utiliza [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro).

## Instala la nueva app

Para instalar el checkout **Mercado Pago Tarjetas** en una tienda Shopify, sigue cualquiera de los dos modelos de instalación descritos a continuación.

### Instalar vía Marketplace

1. A partir del enlace recibido por el departamento comercial de Mercado Pago, accede a la página de la aplicación **Mercado Pago Tarjetas** en el "Marketplace" y haz clic en **Instalar**. Si aún no lo has hecho, inicia sesión con tu cuenta de Shopify.
2. Lee atentamente la información sobre los permisos solicitados y haz clic nuevamente en **Instalar**.
3. Después de aceptar los permisos solicitados, haz clic en **Gestionar cuenta** para incluir tus credenciales y vincular tu cuenta de Mercado Pago a la tienda.

> Los datos que deberán ser ingresados son las **credenciales de producción**. Para más información, accede a la documentación de [Credenciales](/developers/pt/guides/additional-content/your-integrations/credentials).

4. Ingresa tus credenciales de producción (`access_token` y `public_key`) en los campos correspondientes, teniendo cuidado de no invertir los campos al copiar y pegar las credenciales.

> NOTE
>
> Nota
>
> Una vez ingresadas, las credenciales no serán solicitadas en futuras instalaciones de aplicaciones de Mercado Pago para Shopify.<br><br>
> <br><br>
> Renueva tus credenciales según sea necesario, consultando la [documentación](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials) correspondiente como guía. Después de la renovación, es esencial actualizarlas en el panel de Shopify. <br><br>
> <br><br>
> Recuerda: al cambiar la contraseña, **es necesario renovar tus credenciales**. Para ello, elimina las credenciales antiguas del panel, copia las nuevas e ingrésalas en el panel administrativo de la tienda.

5. Haz clic en **Guardar credenciales**.
6. Por último, haz clic en la opción **Verificar activación** de Mercado Pago Tarjetas, ve a la sección de "Configuraciones" de Shopify y haz clic en **Activar** para activar la app y finalizar la instalación.

¡Listo! El checkout **Mercado Pago Tarjetas** está listo para recibir pagos.

### Instalar vía panel de Shopify

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. En el panel administrativo, haz clic en **Configuraciones** en la esquina inferior izquierda de la página.
3. Una vez allí, selecciona la opción **Pagos** en el menú al lado izquierdo de la página.
4. En "Formas de pago adicionales", haz clic en **Agregar forma de pago**.
5. En la pantalla de "Agregar forma de pago", selecciona la pestaña **Buscar por proveedor** y busca la aplicación "Mercado Pago Tarjetas".
6. Después de localizarla, selecciónala y haz clic en **Instalar**. Lee atentamente la información sobre los permisos solicitados y haz clic en **Instalar** otra vez.
7. Después de aceptar los permisos solicitados, haz clic en **Gestionar cuenta** para incluir tus credenciales y vincular tu cuenta de Mercado Pago a la tienda.

> Los datos que deberán ser ingresados son las **credenciales de producción**. Para más información, accede a la documentación de [Credenciales](/developers/pt/guides/additional-content/your-integrations/credentials).

8. Ingresa tus credenciales de producción (`access_token` y `public_key`) en los campos correspondientes, teniendo cuidado de no invertir los campos al copiar y pegar las credenciales.

> NOTE
>
> Nota
>
> Una vez ingresadas, las credenciales no serán solicitadas en futuras instalaciones de aplicaciones de Mercado Pago para Shopify. <br><br>
> <br><br>
>  Renueva tus credenciales según sea necesario, consultando la [documentación](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials) correspondiente como guía. Después de la renovación, es esencial actualizarlas en el panel de Shopify. <br><br>
> <br><br>
> Recuerda: al cambiar la contraseña, **es necesario renovar tus credenciales**. Para ello, elimina las credenciales antiguas del panel, copia las nuevas e ingrésalas en el panel administrativo de la tienda.

9. Haz clic en **Guardar credenciales**.
10. Por último, haz clic en la opción **Verificar activación** de Mercado Pago Tarjetas, ve a la sección de "Configuraciones" de Shopify y haz clic en **Activar** para activar la app y finalizar la instalación.

¡Listo! El checkout **Mercado Pago Tarjetas** está listo para recibir los pagos de tu tienda.

### Configurar meses sin intereses

Después de instalar y activar la aplicación **Mercado Pago Tarjetas**, configura la opción de ofrecer a tus clientes la posibilidad de pagar sus compras en cuotas sin intereses con cualquier tarjeta de crédito. Para ello, sigue los pasos a continuación.

1. Inicia sesión en tu [cuenta de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home)..
2. Ve a la sección "Tu negocio > Costos" y selecciona la opción **Vende a meses sin intereses**.
3. Activa la opción **Ofrecer meses sin interéses** y luego elige hasta cuantos meses quieres ofrecer.
4. Por último, selecciona **Elegir montos mínimos**, ingresa el monto mínimo para el que ofreceras meses sin intereses y elige **guardar**.