# Configura el plugin

Una vez instalado el plugin de Mercado Pago con WooCommerce, es necesario configurarlo. Para eso, sigue estos pasos:

1. Ve a tu cuenta de [Wordpress](https://wordpress.com/).
2. Accede al Panel de tu cuenta y haz clic en **Plugins > Plugins instalados**.
3. En el buscador de plugins, busca “Mercado Pago payments for WooCommerce”.
4. Haz clic en **Configurar Plugin**.

A continuación, te explicaremos cómo configurar cada item del plugin. Haz clic en los títulos para desplegar las opciones a completar. 

## Integra la tienda a Mercado Pago

En este campo se solicitan las credenciales de prueba y producción. 
1. Haz clic en el botón **Consultar credenciales** para ingresar al paner de Mercado Pago y ver tus credenciales.
2. Completa los campos solicitados y haz clic en **Guardar y continuar**.

## Personaliza tu negocio

En la sección **Información sobre tu tienda** podrás ofrecer datos de la tienda para  para ofrecer una experiencia más completa y con más información a los clientes

* **Nombre de la tienda:** ingresa el nombre de tu tienda.
* **Categoría de la tienda**: ingresa la categoría de los productos de tu tienda.
* **ID de la tienda**: usa un número o prefijo para identificar pedidos y pagos de tu tienda.
* **Integrator ID**: ingresa tu integrator_id como miembro del **&lt;dev&gt;program** de Mercado Pago. Si aún no eres un miembro, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/developer-program) para obtener más información.

Haz clic en **Guardar y continuar**.

En **Ajustes avanzados**, configura las opciones relacionadas con el almacenamiento de información en un archivo para depurar problemas técnicos


## Activa las notificaciones IPN

Las notificaciones son mensajes enviados por el servidor de Mercado Pago desde eventos que se realizan en su aplicación. **IPN** (Instant Payment Notification) es un mecanismo que permite que tu aplicación reciba notificaciones de Mercado Pago, informando el estado de un determinado pago, contracargo y merchant_order, a través de una llamada HTTP POST para informar sobre sus transacciones.

Si quieres conocer más sobre notificaciones IPN, accede a [esta documentación](/developers/es/docs/WooCommerce/additional-content/notifications/ipn).

Para recibir notificaciones IPN, sigue los pasos a continuación:

1. Ingresa a [Tus notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn).
2. Completa los campos solicitados:
    - URL del sitio web en producción: coloca la URL de la tienda.
    - Eventos: selecciona los eventos sobre los que quieres recibir notificaciones.
3. Ve a tu cuenta de [Wordpress](https://wordpress.com/).
4. Accede al Panel de tu cuenta y haz clic en **Plugins > Plugins instalados**.
5. Ingresa a la opción **2. Personaliza tu negocio > Opciones avanzadas de integración (opcional)**. 
6. Completa los campo **URL para IPN** con la URL del sitio web en producción.
7. Completa el campo **integrator_id** con tu número de miembro del **&lt;dev&gt;program** de Mercado Pago. Si aún no eres un miembro, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/developer-program) para obtener más información. 
8. Haz clic en **Guardar y continuar**.

> PREV_STEP_CARD_ES
>
> Instalación
>
> Aprende a instalar el plugin de Mercado Pago con WooCommerce.
>
> [Instalación](/developers/es/docs/woocommerce/installation)

> NEXT_STEP_CARD_ES
>
> Configura los medios de pago
>
> Conoce cómo configurar los distintos medios de pago en la tienda.
>
> [Configura los medios de pago](/developers/es/docs/woocommerce/payments-methods-configuration)