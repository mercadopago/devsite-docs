# Checkout Transparente

Con [Checkout Transparente](/developers/es/docs/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

> WARNING
>
> Atención
>
> Para integrar Checkout Transparente deberás contar con Checkout Pro ("**Checkout Mercado Pago**") en tu tienda de Shopify. Para saber cómo integrarlo, dirígete a la [documentación](/developers/es/docs/shopify/integration-configuration/checkout-pro).

Para instalar Checkout Transparente en una tienda Shopify, sigue los pasos a continuación:

1. Ingresa a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Accede al sitio de instalación de Mercado Pago Checkout Transparente haciendo [clic aquí](https://apps.shopify.com/checkout-transparente-mp).
3. Haz clic en el botón **Agregar aplicación**. Serás redirigido a una pantalla de autorización, en donde se te mostrarán los permisos que le otorgarás a la aplicación de Checkout Transparente. Para continuar, haz clic en **Instalar aplicación**. 
4. En la siguiente pantalla, deberás ingresar tus credenciales, `Public Key` y `Access Token`, de prueba y de producción. Ingresa al [Panel del desarrollador](https://www.mercadopago.com.ar/developers/panel) para obtener las credenciales de tu aplicación y, si aún no creaste una, dirígete a [esta documentación](/developers/es/docs/shopify/additional-content/your-integrations/introduction) para aprender cómo hacerlo. 
5. En el campo **Cómo quieres operar**, selecciona la opción “quiero testear mi tienda” para poder realizar transacciones de prueba y garantizar el correcto funcionamiento del checkout.
6. Luego, podrás **Configurar cuotas e intereses** en caso de que quieras disponibilizarlos en tu tienda. Para realizar esta configuración, haz clic en **Editar**.
7. En la sección **¿Qué medios de pagos deseas ofrecer?**, selecciona qué tipo de medio de pagos deseas que la tienda ofrezca a través de Checkout Transparente. Puedes elegir Mercado Pago, tarjetas de crédito, boleto bancário o Pix.
8. Haz clic en **Guardar cambios** para finalizar la instalación.

> En caso de renovar tus credenciales, recuerda reemplazar tanto las de producción como las de pruba en tu integración.

![installation choapi](/images/shopify/configurar-chotransparente-pt.gif)

> NOTE
>
> Importante
>
> Una vez instalado, Checkout Transparente puede demorar hasta 10 minutos en aparecer vinculado en la tienda de Shopify debido al caché. Si necesitas asistencia instalando Checkout Transparente, puedes contactarte con [Soporte](https://www.mercadopago.com/developers/es/support).