En esta página se explica cómo configurar el módulo para aceptar Suscripciones con pagos recurrentes. En la administración de su tienda, vaya a la ficha *WooCommerce > Configuración > Checkout*. En *Opciones de Checkout*, haga clic en *Mercado Pago - Suscripción*. Usted debe obtener la siguiente página:

[[/images/wiki3/subscription_checkout_config.png|Configuración de Suscripciones]]

Si ha configurado correctamente sus credenciales en <a href="https://github.com/mercadopago/cart-woocommerce/wiki/Configuraciones-Generales-de-Mercado-Pago">Configuraciones Generales de Mercado Pago</a>, puede ahora personalizar su checkout por Suscripciones:

### Interface de Checkout
Cómo se muestra el pago.
  * *Título*: Este es el título de la opción de pago que se mostrará a sus clientes;
  * *Descripción*: Esta es la descripción de la opción de pago que se mostrará a sus clientes.
  * *Medio de Integración*: Cómo sus clientes interactúan con Mercado Pago para pagar sus pedidos;
  * *Ancho del iFrame*: El ancho, en píxeles, del iFrame (utilizado sólo con el Medio de Integración de iFrame);
  * *Altura del iFrame*: La altura, en píxeles, del iFrame (utilizado sólo con el Medio de Integración de iFrame).

### Navegación del Checkout
Cómo se comportarán las navegaciones de pago.
  * *URL de Notificación Instantánea de Pago (IPN)*: En esta parte, puede verificar su URL de IPN, donde recibirá notificaciones sobre las actualizaciones de pago. Para esta solución, debe configurar una URL de IPN en su cuenta de Mercado Pago. Tome nota de su URL, haga clic en el link de su país y coloque la URL en el campo solicitado. Entonces guárdelo;
  * *URL de Éxito*: Personaliza una URL que se redirigirá cuando se apruebe un pago. Deje en blanco para redirigir a la tienda;
  * *URL de Error*: Personaliza una URL para ser redirigida cuando un pago ha fallado. Deje en blanco para redirigir a la tienda;
  * *URL para Pendiente*: Personaliza una URL para ser redirigida cuando hay un pago pendiente. Deje en blanco para redirigir a la tienda.

### Opciones de Pago
Cómo se comporta la opción de pago.
  * *Descuento por Gateway*: Ofrece un descuento porcentual para sus clientes si utilizan Suscripciones como medio de pago.

# Creación de un Producto Asignable
Una suscripción necesita un tipo especial de producto, que será vendido periódicamente. Puede configurar un producto para que se pueda asignar siguiendo los siguientes pasos:
1. Vaya a *Productos* en el menú lateral y haga clic en el botón *Agregar Producto*. La página abierta debe contener los detalles del producto y los campos en la ventana *Datos del Producto*;<br>[[/images/wiki3/subscription_checkout_product.png|Producto de Suscripción]]
2. Completa la información de su producto (nombre, precio, imágenes, etc) y entonces marque el checkbox *Producto Recurrente*;
3. Llene los campos de información para la suscripción: *Frecuencia* (frecuencia que los cobros se harán a su cliente), *Tipo de Frecuencia* (el tipo de frecuencia puede estar en [Días] o [Meses]) y *Fecha de Finalización* (fecha en que debe finalizar la suscripción).

> IMPORTANTE: Una suscripción debe ser única en el carrito del cliente. Los clientes sólo pueden asignar un producto por vez, y no puede mezclarse con otros productos que no sean asignables.