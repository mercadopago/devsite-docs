# Configuración de integración
 
Para integrarte con Mercado Pago, sigue los procedimientos a continuación.
 
1. En el Panel Administrativo de tu tienda de tu tienda PrestaShop, accede al menú **Módulos y Servicios**, localiza el plugin Mercado Pago y haz clic en **configure**.
2. En la pantalla de administración de complementos, completa los campos obligatorios de acuerdo con la información de tu empresa.
3. En el campo **Localización**, selecciona el país de operación de tu cuenta de Mercado Pago.
4. En la sección **Credenciales**, confirma que los campos se hayan completado correctamente de acuerdo con las [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) indicadas en tu [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/dashboard/introduction).  
5. A continuación, configura la información comercial necesaria para identificar tu tienda.
 
* **Nombre de la tienda:** ingresa el nombre de tu tienda.
* **Categoría de tienda:** Ingresa la categoría de producto de tu tienda.
* **Integrator ID** Ingresa tu *integrator_id* como miembro del **Dev Program**, de Mercado Pago. Si aún no eres miembro, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/developer-program) para obtener más información.
 
6. Por último, configura las experiencias de pago de tu tienda de acuerdo con el tipo de pago que has elegido configurar, que podría ser [Checkout Pro](https://www.mercadopago.[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction), el [Checkout API](https://www.mercadopago.[FAKER][URL][DOMINIO]/developers/es/guides/online-payments/checkout-api/introduction) y **Ticket Checkout**.

> NOTE
>
> Importante
>
> Recuerda que la disponibilidad de las configuraciones descritas abajo depende del tipo de pago elegido.
 
* **Activar checkout:** selecciona **sí** para habilitar la experiencia de Mercado Pago en el pago de tu tienda.
* **Medios de pago:** elige los métodos de pago que deseas ofrecer.
* **Máximo de cuotas:** Selecciona las cuotas máximas que deseas ofrecer en tu tienda.
* **Cuotas e intereses:** [configura](https://www.mercadopago.[FAKER][URL][DOMAIN]/costs-section) la tasa que se pagará en cada compra y también ofrece cuotas sin intereses para tus clientes.
* **Volver a la tienda:** selecciona si deseas o no que el cliente regrese automáticamente a tu tienda después de completar el pago.
* **Modal checkout:** define si los clientes tendrán acceso al formulario de pago de Mercado Pago sin salir de tu tienda.
* **Modo binario:** habilítalo cuando no desees dejar los pagos en estado pendiente o de revisión. Con el modo binario, los pagos se aceptarán o rechazarán automáticamente.
* **Cancelación de preferencias de pago:** indica el período en el que se guardarán las preferencias de pago del cliente sin que el cliente tenga que volver a añadirlas.
* **Descuento por comprar con Mercado Pago:** establece un porcentaje de descuento para los clientes que pagan con Mercado Pago.
* **Medios de pago en persona:** selecciona qué métodos de pago se ofrecerán para los pagos realizados a través de Ticket Checkout.
* **Vencimiento del pago:** después de seleccionar el medio de pago en persona, indica en cuántos días caducarán después de su emisión.
 
¡Listo! Ahora el plugin Mercado Pago con PrestaShop está integrado en tu tienda.
 
> NEXT_STEP_CARD_ES
>
> Prueba de pago
>
> Descubre cómo realizar una compra de prueba y asegúrate de que la integración funcione.
>
> [Prueba de pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/prestashop/testing)