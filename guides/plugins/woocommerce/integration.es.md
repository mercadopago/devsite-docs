# Configuración de la integración

Actualmente hay cuatro tipos de pago disponibles para WooCommerce. Si deseas configurar todos los métodos de pago ofrecidos, el proceso debe realizarse de forma individual, en caso contrario, elige el que más se adapte a tu negocio y configúralo de la siguiente manera:

1. Accede al **Panel** de WordPress.
2. Haz clic en **Plugins > Plugins instalados**.
3. Busca **Mercado Pago payments for WooCommerce** y haz clic en **Ajustes**.
4. Selecciona **una o más opciones de checkout / medios de pago** que desees ofrecer y haz clic en **Gestionar** para abrir la pantalla de administración del plugin.

En la pantalla de administración del plugin, deberás completar los campos obligatorios de acuerdo con la información de tu negocio considerando las secciones a continuación.

## ¿En qué país opera tu cuenta de Mercado Pago?

En el campo **¿En qué país opera tu cuenta de Mercado Pago?**, selecciona el país en el que opera tu cuenta de Mercado Pago. 

## Activación de credenciales

En la sección **Ingresa las credenciales para el Modo Test o el Modo Producción**, se te pedirá que ingreses tus credenciales de **producción** y **test**.

Necesitarás las **credenciales de producción** porque al finalizar las pruebas iniciales habilitaremos la tienda para procesar las ventas reales y es a través de estas credenciales que se realiza la activación.

Las **credenciales de test** serán necesarias para realizar pruebas para asegurar el correcto funcionamiento del flujo de compra y pago.

Para activar las credenciales, sigue estos pasos:

1. Accede a la sección de credenciales.
2. En **Configura los pagos de la tienda para el modo Test o Producción**, selecciona la opción **Activar Modo Test para checkouts Mercado Pago**. Al mantener este campo habilitado, tu tienda estará en **modo test**, lo que te permitirá probar el funcionamiento del plugin antes de habilitar la tienda para producción.
3. Ingresa tus credenciales de **test** y **producción** en los campos obligatorios. Si aún no tienes esta información, accede a nuestra documentación [Credenciales](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) y sigue el paso a paso para obtenerlas. 
4. Cuando termines de completar los pasos, haz clic en **Guardar cambios**.

Con las credenciales completadas, configura la información del negocio.

## Información del negocio

Se requiere información del negocio para identificar tu tienda. Completa los campos como se muestra a continuación.

1. **Nombre de la tienda:** ingresa el nombre de tu tienda.
2. **Categoría de la tienda:** ingresa la categoría de los productos de tu tienda.
3. **ID de la tienda:** usa un número o prefijo para identificar pedidos y pagos de tu tienda.
4. **Integrator ID:** ingresa tu *integrator_id* como miembro del **&lt;dev&gt;program** de Mercado Pago. Si aún no eres un miembro, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/developer-program) para obtener más información.

En **Ajustes avanzados**, configura las opciones relacionadas con el almacenamiento de información en un archivo para depurar problemas técnicos, así como para configurar las [notificaciones de IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction).

## Experiencia de pago

Además de la configuración anterior, encontrarás diferentes opciones relacionadas con la experiencia de pago de tu tienda, según el tipo de pago que hayas elegido configurar. Consulta a continuación las principales características que puedes ofrecer.

> NOTE
>
> Importante
>
> Recuerda que la disponibilidad de la configuración que se describe a continuación está sujeta al tipo de pago elegido.

1. **Activar checkout:** selecciona **Sí** para habilitar la experiencia de Mercado Pago en el checkout de tu tienda.
2. **Título:** mantén el texto predeterminado o cámbialo por el tuyo. Este texto se mostrará al finalizar la compra, junto con las opciones de pago.
3. **Medios de pago:** elige los medios de pago que deseas ofrecer.
4. **Convertir moneda:** activa esta opción para que el valor de la moneda configurada en WooCommerce coincida con el valor de la moneda que usas en Mercado Pago.
5. **Máximo de cuotas:** selecciona las cuotas máximas que quieres ofrecer en tu tienda.
6. **Experiencia de pago:** selecciona entre **Redirect** y **Modal**. En **Redirect**, los clientes serán redirigidos a una página de Mercado Pago con el formulario de pago para completar la compra. En **Modal**, los clientes tendrán acceso al formulario de pago de Mercado Pago sin salir de tu tienda.
7. **Volver a la tienda:** selecciona si deseas o no que el cliente regrese automáticamente a tu tienda después de completar el pago.
8. **URL de éxito / URL de pago rechazado / URL de pago pendiente:** si deseas crear una URL y personalizar la página de devolución para los 3 estados informados, simplemente introdúcelos en el campo solicitado.
9. **Modo binario:** actívalo cuando no desees dejar los pagos en estado pendiente o de revisión. Con el modo binario, los pagos se aceptarán o rechazarán automáticamente.
10. **Cupones de descuento:** selecciona si deseas ofrecer cupones de descuento en tu tienda.
11. **Reduzir inventário:** selecciona **Sí** si deseas que el producto sea retirado durante la creación del pedido, independientemente de si el pago se aprueba o no. De lo contrario, mantén **No** para retirar el producto del stock solo cuando se apruebe el pago. 
12. **Descuentos por compra con Mercado Pago:** elige un porcentaje de descuento para los clientes que pagan con Mercado Pago.
13. **Comisión por compra con Mercado Pago:** elige un porcentaje adicional que desees cobrar como tarifa a sus clientes por pagar con Mercado Pago.
14. **Pago con tarjeta guardado en Mercado Pago:** permite a los clientes comprar con los datos de su tarjeta guardados en Mercado Pago, sin tener que completar los datos de la tarjeta al momento de pagar en la tienda.
----[mlb]----
15. **Pix:** si deseas ofrecer pagos de Pix, debes activar el **pago personalizado - Paga con Pix** y seguir los pasos descritos en pantalla para completar la integración.
16. **Vencimento do Pix:** elige un período de validez del código enviado al cliente después de realizar el pedido. Este será el período que el cliente deberá pagar por la compra.
------------

----[mlb]----
> WARNING
>
> Importante
>
> Antes de configurar Pix como método de pago, te recomendamos descargar la última versión del plugin Mercado Pago para WooCommerce y registrar tu clave Pix en Mercado Pago. 
------------

## E-mail de notificación

Habiendo seleccionado el **Checkout API** para recibir pagos de tu tienda, es importante configurar el envío de los e-mails que notificarán al usuario de sus transacciones. Ve a continuación cómo personalizar el envío del **e-mail transaccional** en el panel de administración de WooCommerce.

1. En **E-mails**, habilita la configuración del envío seleccionando la opción ˜activar este e-mail de notificación".
2. Personaliza la plantilla de correo electrónico con: destinatarios, asunto del correo electrónico y encabezado.
3. Ingresa el **contenido** a enviar y selecciona el tipo de correo electrónico.
4. Indica también el nombre y la dirección de correo electrónico del remitente, así como el logotipo y los colores de tu tienda.
5. Una vez realizadas las configuraciones necesarias, instala y configura un **servidor SMTP** de tu elección para habilitar el envío de correos electrónicos.
6. Envía un **correo electrónico de prueba** para asegurarte de que la plataforma envíe los correos electrónicos correctamente.

¡Listo! Ahora el plugin Mercado Pago con WooCommerce está integrado en tu tienda y se puede probar realizando compras que solo serán con el propósito de validar el funcionamiento del plugin, pero que no moverán ningún valor.

> NEXT_STEP_CARD_ES
>
> Prueba de compra
>
> Aprende a realizar una compra de prueba y asegúrate de que la integración funcione.
>
> [Prueba de compras](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/woocommerce/testing)