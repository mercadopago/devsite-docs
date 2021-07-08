# Preferencias de pago
<br/>

Encuentra la configuración de las preferencias de pago en los *Ajustes* de WooCommerce una vez que tengas instalado el módulo. Una vez dentro, ve a la sección *Payments*, activa el checkout que quieras ofrecer y configura las opciones que prefieras para tu pasarela de compra.

> NOTE
>
> Nota
>
> Recuerda que tenemos distintos [tipos de checkout]() que se adaptan a las necesidades de tu negocio y que cada uno tiene ajustes propios.

## Información del negocio

Ingresa el **nombre del negocio** para que aparezca en la factura de tus clientes y les sea más fácil reconocer el pago cuando les llegue un resumen de compras. Selecciona a qué **categoría** pertenecen los productos o servicios que ofrece la tienda y haz otros ajustes según tus necesidades.

![Información básica](/images/woocomerce/es_info_basica.png)

> NOTE
>
> Nota
>
> El campo de `integrator_id` no es obligatorio a la hora de realizar una integración. Deberán completarlo los Partners de Mercado Pago.
>
> Para ser un Partner deberás homologarte o certificarte como tal. Para conocer más sobre las certificaciones para desarrolladores de Mercado Pago y cómo obtener tu ID, [déjanos tu contacto](https://docs.google.com/forms/d/e/1FAIpQLSdbA1Y8_9RD2xTCRDHLxeVYrrSIy5s2ME8Ku6_gEcSu60KUHQ/viewform). 

<span></span>

> NOTE
>
> Nota
>
> Todos nuestros módulos cuentan con una licencia de código abierto. ¿Quieres participar en su construcción? [Sugiere mejoras y ediciones](https://github.com/mercadopago/cart-woocommerce) en Github.

## Configuración básica

Activa el checkout que quieras ofrecer a tus clientes según tus preferencias y elige los medios de pago con los que podrán hacer la compra.

* Activa un tipo de checkout.
 * Usa Checkout Pro para soportar pagos con tarjetas, ----[mlb]---- Pix,------------ en efectivo y dinero en cuenta de Mercado Pago.
 * Usa el Checkout Personalizado para tener control sobre otras configuraciones y acepta pagos con tarjeta de crédito, ----[mlb]---- Pix,------------ boleta de pago y en persona.

* Elige los [medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/payment-methods) para tus clientes según el país en el que operes y el tipo de checkout que estés configurando. 

* Establece el máximo de cuotas en el que podrán pagarte.

* Activa la conversión de moneda con la que tienes en Mercado Pago.

----[mlb]----
> WARNING
>
> Importante
>
> Antes de configurar Pix como medio de pago, recuerda hacer esto:
>
> - [Descarga la última versión](https://br.wordpress.org/plugins/woocommerce-mercadopago/#description) para actualizar tu plugin de Mercado Pago.
> - Registra tu clave en Mercado Pago. Si no lo haces, tus clientes no podrán finalizar la compra. [Conoce cómo hacerlo](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).

<span></span>
------------

> NOTE
>
> Nota
>
> La opción de activar la conversión de moneda está disponible solo en el checkout personalizado. El Checkout Pro hace la conversión de forma automática.

## Configuración avanzada

Tendrás distintos ajustes disponibles según el tipo de checkout que actives en tu tienda. Personaliza la experiencia de compra con los ajustes avanzados que correspondan a cada uno. 

### Ajustes comunes a todos los checkouts

| Configuración | Descripción |
| --- | --- |
| Modo binario | Activa esta opción cuando no quieras dejar pagos en estado pendiente o en revisión. Con el modo binario los pagos se aceptarán o rechazarán de forma automática. |

### Checkout Pro

#### Experiencias de pago en Checkout Pro

Elige qué experiencia de compra tendrán tus clientes a la hora de pagar: 

| Experiencia de pago | Características |
| --- | --- |
| Redirect | Tus clientes serán redirigidos a una página de Mercado Pago con el formulario de pagos para terminar la compra. |
| Modal | Tus clientes accederán al formulario de pagos de Mercado Pago sin salir de tu tienda. |

> NOTE
>
> Nota
>
> Consulta la [documentación del Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction) para conocer mejor todas sus características y funcionalidades.

| Configuración | Descripción |
| --- | --- |
| Volver a la tienda | Cuando elijas redirect, siempre tendrás la opción de hacer que tus clientes vuelvan o no a tu tienda una vez finalizado el pago.|
| URLs configurables | De éxito, pago rechazado, pago pendiente.|

### Checkout Personalizado

#### Pagos con tarjetas

| Configuración | Descripción |
| --- | --- |
| Cupon de descuento | Activa esta opción cuando quieras ofrecer descuentos a tus clientes. Aparecerá un campo en el formulario donde podrán ingresar su cupón. |

#### Pagos presenciales

| Configuración | Descripción |
| --- | --- |
| Cupon de descuento | Activa esta opción cuando quieras ofrecer descuentos a tus clientes. Aparecerá un campo en el formulario donde podrán ingresar su cupón. |
| Reducir inventario | Activa esta opción cuando quieras automatizar la reducción del inventario por cada orden de compra que se aprueba tras un pago con Mercado Pago. |

----[mlb]----
#### Pagos con Pix

| Configuración | Descripción |
| --- | --- |
| Vencimiento Pix | Establece el tiempo de expiración del código que se envía al cliente después de realizar el pedido. Este es el periodo en el que el cliente tendrá que pagar la compra. |
| Descuentos en Mercado Pago | Habilita esta opción cuando quieras seleccionar un monto porcentual a descontar de tus clientes que pagan con Mercado Pago. |
| Comisión por compras con Mercado Pago | Habilita esta opción cuando quieras seleccionar un monto adicional para cobrar de tus clientes que pagan con Mercado Pago, como una tasa. |
------------

---

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Prueba y recibe pagos
>
> Pon a prueba el módulo y verifica que todo funcione bien para empezar a recibir el dinero de tus ventas en Mercado Pago.
>
>
> [Recibir pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/woocommerce/receive-payments)
