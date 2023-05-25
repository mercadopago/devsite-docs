# Configurar el Checkout Transparente

Con el [Checkout Transparente](/developers/es/docs/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

> WARNING
>
> Atención
>
> Para integrar Checkout Transparente deberás contar con Checkout Pro en tu tienda de Shopify. Para saber cómo integrarlo, ve a la [documentación.](/developers/es/docs/shopify/integration-configuration/checkout-pro)

Para instalar Checkout Transparente en una tienda Shopify, sigue los pasos a continuación:

1. Ingresa a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Accede al sitio de instalación de Mercado Pago Checkout Transparente haciendo [clic aquí](https://apps.shopify.com/checkout-transparente-mp).
3. Haz clic en el botón **Agregar aplicación**. Serás redirigido a una pantalla de autorización, en donde se te mostrarán los permisos que le otorgarás a la aplicación de Checkout Transparente. Para continuar, haz clic en **Instalar aplicación**. 
4. En la siguiente pantalla, deberás ingresar tus credenciales `Public Key` y `Access Token` de test y de producción. Ingresa al [Dashboard](https://www.mercadopago.com.ar/developers/panel) para obtener las credenciales de tu aplicación. Si aún no creaste una aplicación, aprende a hacerlo en [esta documentación](/developers/es/docs/shopify/additional-content/dashboard/introduction). 
5. En el campo **Cómo quieres operar**, selecciona la opción “quiero testear mi tienda” para poder realizar transacciones de prueba y garantizar el correcto funcionamiento del checkout.
6. Luego, podrás **configurar cuotas e intereses** en caso de que quieras que la tienda lo ofrezca. Para configurarlo, haz clic en **Editar**.
7. En la sección **¿Qué medios de pagos deseas ofrecer?**, selecciona qué tipo de medio de pagos deseas que la tienda ofrezca a través de Checkout Transparente. Puedes elegir Mercado Pago, tarjetas de crédito, boleto o Pix.
8. Haz clic en **Guardar cambios** para finalizar la instalación.

> En caso de renovar tus credenciales, recuerda reemplazar tanto las de producción como las de pruba en tu integración.

![installation choapi](/images/shopify/configurar-chotransparente-pt.gif)

> NOTE
>
> Importante
>
> Una vez instalado, el Checkout Transparente puede demorar hasta 10 minutos en aparecer vinculado en la tienda de Shopify debido al caché. Si necesitas asistencia instalando Checkout Transparente, puedes contactarte con [Soporte.](https://www.mercadopago.com/developers/es/support)



> WARNING
>
> Atención
>
> Si estás usando la app antigua de Mercado Pago ("Mercado Pago"), [haz clic aquí](/developers/es/docs/shopify/how-tos/migration) para saber cómo migrar a la versión actual ("Checkout Mercado Pago").

Para instalar Checkout Pro en una tienda Shopify, sigue los pasos a continuación:

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Dentro del panel administrativo de la tienda, haz clic en **Configuración**.
3. Una vez allí, selecciona la opción **Pagos**. 
4. En "Formas de pago adicionales", haz clic en **Agregar formas de pago**.
5. Dirígete a la pestaña **Buscar por proveedor** y busca la nueva app con el nombre "Checkout Mercado Pago". 
6. Una vez que la hayas encontrado, selecciónala y haz clic en **Activar”** y luego **Conectar**.

<center>

![migracion a](/images/shopify/migration-a-es.gif)

</center>

7. Selecciona **Instalar aplicación** y luego **Gestionar**.
8. Coloca tus **credenciales de producción** (`public key` y `access token`) en los campos que lo solicitan y haz clic en **Guardar**. Recuerda tener a mano tus [credenciales](/developers/es/docs/shopify/additional-content/credentials).
9. Para terminar la instalación, selecciona **Activar Checkout Mercado Pago**.

> En este paso, podrás seleccionar las imágenes de los medios de pago que quieras mostrar en tu tienda a modo ilustrativo. También, en caso que lo desees, podrás habilitar el [modo de prueba.](/developers/pt/docs/shopify/sales-processing/integration-test)
> <br/><br/>
> En caso de renovar tus credenciales, recuerda reemplazar tanto las de producción como las de pruba en tu integración.

<center>

![migracion b](/images/shopify/migration-b-es.gif)

</center>