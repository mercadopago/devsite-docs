# Mercado Pago para Shopify


## Introducción

Las soluciones de Mercado Pago en Shopify te permitirán cobrar online en tu sitio web sin necesidad de tener conocimientos técnicos o de programación.

> Mercado Pago es partner oficial de Shopify: le brindamos seguridad a todos los pagos realizados en tu tienda.


### Tipos de integración

----[mlb]----
Elige la solución que mejor se adapte a tu negocio:

__Checkout transparente Mercado Pago__: *app extension* de Shopify que brinda una experiencia de compra rápida y segura, ¡sin salir de tu tienda! Puedes instalarla desde el [app store de Shopify](https://apps.shopify.com/).
------------
__Checkout redirect Mercado Pago__: configura Checkout Pro para que tus clientes finalicen su pago en nuestro sitio. Ya se encuentra pre-instalada en tu administrador de Shopify.

----[mlb]----


## Checkout transparente

Instala la [app extension de nuestro checkout transparente](https://apps.shopify.com/checkout-transparente) en tu tienda de Shopify y deja todo en nuestras manos: tus clientes podrán completar sus datos en un paso y finalizar la compra de forma rápida y segura.


### ¿Qué puedo hacer con el checkout transparente de Mercado Pago?

| Características    | Descripción                                                                                             |
|---|---|
| Compras en un paso | Ofrece una experiencia de compra clara y rápida, desarrollada dentro de tu tienda y en la misma página. |
| Experiencia mobile | Brinda un flujo de compra pensado y optimizado para dispositivos móviles.                               |
| Envíos             | Conecta el checkout con tu herramienta de envíos y ofrece entregas durante el proceso de compra.        |
| Ads tracking       | Realiza un seguimiento detallado de tus campañas de marketing durante todo el proceso.                  |
| Medios de pago     | Acepta pagos con tarjeta de crédito y débito, efectivo y dinero en cuenta de Mercado Pago.              |
| Financiación       | Vende en cuotas y ofrece las promociones disponibles.                                                   |
| Pago como invitado | Permite que tus clientes paguen sin necesidad de tener cuenta en Mercado Pago.                          |


### ¿Cómo instalar el checkout transparente?

Instala Mercado Pago para Shopify de forma automática siguiendo estos pasos desde el app store de Shopify:

1. Ingresa al sitio [https://apps.shopify.com/](https://apps.shopify.com/) desde tu navegador y logueate a tu cuenta. También podrás acceder desde la sección Apps de tu panel de Shopify.
1. Busca *“Checkout transparente de Mercado Pago”* entre la oferta de apps.
1. Haz clic en *Agregar app*.
1. Dirígete a la sección Apps de tu panel de administración.

**¡Excelente! El checkout ya está instalado en tu tienda, solo debes activarlo para empezar a vender.**


### ¿Cómo activarlo con mi cuenta de Mercado Pago?

Conecta una cuenta de Mercado Pago a la app para capturar los cobros de tus ventas en Shopify. ¡Es fácil! Solo necesitas tener una cuenta vendedor en Mercado Pago y obtener las credenciales de prueba y producción. 

Una vez instalado el checkout, sigue estos pasos:

1. Crea una [cuenta vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-company?confirmation_url=https%3A%2F%2Fwww.mercadopago[FAKER][URL][DOMAIN]%2Fcomo-cobrar) en Mercado Pago si todavía no tienes una.
1. Obtén las [credenciales]([FAKER][CREDENTIALS][URL]) **Public Key** y **Access Token**, y pégalas en los campos de Producción y Pruebas que encontrarás en la configuración de la app.
1. Homologa la cuenta para [ir a Producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/api/goto-production/) y recibir el dinero de tus ventas en Mercado Pago.

**¡Listo! Con esta configuración podrás comenzar a vender y obtener los pagos que recibas en tu cuenta de Mercado Pago.**

> WARNING
>
> Importante
>
> Las [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/faqs/credentials) son las claves que te identifican de forma única dentro de Mercado Pago. Te permitirán simular pagos en un entorno de prueba y recibir pagos reales una vez que estés listo para ir a producción.


### ¿Cómo probar el checkout?

La app extension de Mercado Pago viene con el entorno de testeos activo por defecto para que puedas simular pagos en la tienda y verificar que todo funciona bien antes de empezar a recibir pagos reales de tus clientes. 
 
Aquí es donde entran en juego las credenciales de prueba que ingresaste en el módulo al momento de integrar Mercado Pago a tu tienda.

Cuando hagas pruebas, revisa que el flujo de pagos funcione correctamente. 

**¿Ves que todo va bien? Desactiva Pruebas y ve al modo Producción para recibir pagos reales.**


### Ir a producción

Para empezar a cobrar debes [activar tus credenciales]([FAKER][CREDENTIALS][URL]).

> Consulta los [requisitos para ir a producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/api/goto-production/) si tienes alguna duda con el proceso.

Al activarlas, asegúrate que las credenciales de Producción ingresadas sean las de la cuenta que reciba el dinero de las ventas. 

Activa el modo Producción solo cuando estés listo para vender y hayas puesto a prueba el checkout con pagos simulados en la fase de testeos. 

**¡Listo! El checkout transparente de Mercado Pago está preparado para recibir cobros online.**

------------


## Checkout redirect Mercado Pago

Configura nuestro módulo para finalizar la compra en el sitio de Mercado Pago durante el proceso de compra en tu tienda de Shopify.


### ¿Qué puedo hacer con el gateway de pagos de Mercado Pago?

| Características       | Descripción                                                                                            |
|---|---|
| Interfaz Mercado Pago | ¡Nosotros nos encargamos! No tienes que preocuparte por la implementación y diseño de un checkout.     |
| Ads tracking          | Realiza un seguimiento detallado de tus campañas de marketing y su conversión durante todo el proceso. |
| Medios de pago        | Acepta pagos con tarjeta de crédito y débito, efectivo y dinero en cuenta de Mercado Pago.             |
| Financiación          | Vende en cuotas y ofrece las promociones disponibles.                                                  |
| Pago como invitado    | Permite que tus clientes paguen sin necesidad de tener cuenta en Mercado Pago.                         |
| Descuentos            | Utiliza cupones para ofrecer promociones a tus clientes.                                               |


### ¿Cómo configurar el módulo de Mercado Pago?

Sigue estos pasos para procesar los pagos con el Checkout de Mercado Pago:

1. En el panel de administración de Shopify, dirígete a la sección *Payments* dentro de *Settings*.
1. En el box *Third-party providers*, busca y selecciona Mercado Pago.
1. Obtén las [credenciales]([FAKER][CREDENTIALS][URL]) **Client id** e **Client secret**, y pégalas en los campos correspondientes.
1. Elige los medios de pago que quieres ofrecerle a tus clientes.
1. Asegúrate de seleccionar el modo Test para verificar que todo funcione correctamente antes de ir a producción.
1. Activa el módulo para guardar los cambios.

**¡Listo! Mercado Pago fue instalado y configurado. Una vez que hayas hecho pruebas, puedes venir a esta misma sección para desactivar el entorno de test y recibir pagos reales.**

> NOTE
>
> Nota
>
> Consulta la documentación del [Checkout de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/payments/web-payment-checkout/introduction/) para conocer mejor todas sus características y funcionalidades.


### Mapeo de estados de pago

El siguiente esquema representa la correlación entre los estados de un pago en Mercado Pago y el estado de la orden en Shopify.

| Estado del pago | Mercado Pago status | Shopify order status |
|---|---|---|
| Aprobado        | Approved            | Completed            |
| Pendiente       | Pending             | Pending              |
| En proceso      | In process          | Pending              |
| En mediación    | In mediation        | Pending              |
| Cancelado       | Cancelled           | Failed               |
| Reembolsado     | Refunded            | Failed               |
| Rechazado       | Rejected            | Failed               |
