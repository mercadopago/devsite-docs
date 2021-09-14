# Configuración de la integración

Actualmente hay 4 tipos de pago disponibles para WooCommerce. Si deseas configurar todos los métodos de pago ofrecidos, el proceso debe realizarse de forma individual, en caso contrario, elige el que más se adapte a tu negocio y configúralo de la siguiente manera:

1. Accede al **Panel** de WordPress.
2. Haga clic en **Plugins > Plugins instalados**.
3. Busque por **Mercado Pago payments for WooCommerce** y haga clic en **Configurar**.
4. Seleccione **una o más opciones de checkout / medios de pago** que desee ofrecer y haga clic en **Gestionar** para abrir la pantalla de administración del plugin.

En la pantalla de administración del plugin, deberá completar los campos obligatorios de acuerdo con la información de su negocio considerando las secciones a continuación.

## País de operación

En el campo _País de operação_, seleccione el país en el que opera su cuenta de Mercado Pago. 

## Activación de credenciales

En la sección _Ingresa las credenciales para el Modo Test o el Modo Producción_, se pedirá que ingrese sus credenciales de **producción** y **test**.

Credenciales de producción, porque al finalizar las pruebas iniciales habilitaremos a la tienda para procesar las ventas reales y es a través de esta credencial que se realiza la activación.

Credenciales de test, porque en un primer momento será necesario realizar pruebas para asegurar el correcto funcionamiento del flujo de compra y pago.

Para activar las credenciales, siga los pasos a continuación.

1. Acceda a la sección de credenciales.
2. En **Configura los pagos de la tienda para el modo Test o Producción**, seleccione la opción **Activar Modo Test para checkouts Mercado Pago**. (Al mantener este campo habilitado, su tienda estará en **modo test**, lo que le permitirá probar el funcionamiento del plugin antes de habilitar la tienda para producción).
3. Ingrese sus credenciales de **test** y **producción** en los campos obligatorios. Si aún no tiene esta información, acceda nuestra documentación [Credenciales](https://www.mercadopago.com.br/developers/en/guides/resources/credentials) y siga el paso a paso para obtenerlas. 
4. Cuando termine de completar, haga clic en _Salvar alterações_.

Con las credenciales completadas, configure la información del negocio.


## Información del negocio

Se requiere información del negocio para identificar su tienda. Complete los campos como se muestra a continuación.

1. **Nome da loja:** ingrese el nombre de su tienda.
2. **Categoria da loja:** ingrese la categoría de los productos de su tienda.
3. **ID da loja:** use un número o prefijo para identificar pedidos y pagos de su tienda.
4. **Integrator ID:** ingrese su *integrator_id* como asociado de Mercado Pago. Si aún no es un asociado, [haga clic aquí](https://www.mercadopago.com.br/developers/es/developer-program#dev-program-benefits) para obtener más información.

En *Ajustes avançados*, configura las opciones relacionadas con el almacenamiento de información en un archivo para depurar problemas técnicos, así como para configurar las [notificaciones de IPN](https://www.mercadopago.com.br/developers/es/guides/notifications/ipn).

## Experiencia de pago

Además de la configuración anterior, encontrará diferentes opciones relacionadas con la experiencia de pago de su tienda, según el tipo de pago que haya elegido configurar. Consulte a continuación las principales características que puede ofrecer.

> NOTE
>
> Importante
>
> Recuerde que la disponibilidad de la configuración que se describe a continuación está sujeta al tipo de pago elegido.

1. **Ativar o checkout:** seleccione _Sim_ para habilitar la experiencia de Mercado Pago en el checkout de tu tienda.
2. **Título:** mantenga el texto predeterminado o cámbielo por el suyo. Este texto se mostrará al finalizar la compra, junto con las opciones de pago.
3. **Meios de pagamento:** elija los medios de pago que desea ofrecer.
4. **Converter moeda:** active esta opción para que el valor de la moneda configurado en WooCommerce coincida con el valor de la moneda que usa en Mercado Pago.
5. **Máximo de parcelas:** seleccione las cuotas máximas que quieres ofrecer en tu tienda.
6. **Experiência de pagamento:** seleccione entre **Redirect** y **Modal**. En **Redirect**, los clientes serán redirigidos a una página de Mercado Pago con el formulario de pago para completar la compra. En **Modal**, los clientes tendrán acceso al formulario de pago de Mercado Pago sin salir de su tienda.
7. **Voltar à loja:** seleccione si desea o no que el cliente regrese automáticamente a su tienda después de completar el pago.
8. **URL de sucesso / URL de pagamento recusado / URL de pagamento pendente:** si desea crear una URL y personalizar la página de devolución para los 3 estados informados, simplemente introduzca los en el campo solicitado.
9. **Modo binário:** actívelo cuando no desee dejar los pagos en estado pendiente o de revisión. Con el modo binario, los pagos se aceptarán o rechazarán automáticamente.
10. **Cupons de desconto:** seleccione si desea ofrecer cupones de descuento en su tienda.
11. **Reduzir inventário:** seleccione _Sim_ si desea que el producto sea retirado durante la creación del pedido, independientemente si el pago se aprueba o no. De lo contrario, mantenga _Não_ para retirar el producto del stock solo cuando se apruebe el pago. 
12. **Desconto por comprar com Mercado Pago:** elija un porcentaje de descuento para los clientes que pagan con Mercado Pago.
13. **Comissão por compra com Mercado Pago:** elija un porcentaje adicional que desea cobrar como tarifa a sus clientes por pagar con Mercado Pago.
14. **Pix:** si desea ofrecer pagos de Pix, debe activar el **pago personalizado** **- Paga con Pix** y sigue los pasos descritos en pantalla para completar la integración. **(Solo para Brasil)**
15. **Vencimento do Pix:** elija un período de validez del código enviado al cliente después de realizar el pedido. Este será el período que el cliente deberá pagar por la compra. **(Solo para Brasil)**
16. **Pagamento com cartões salvos:** permite a los clientes comprar con los datos de su tarjeta guardados en Mercado Pago, sin tener que completar los datos de la tarjeta al momento de pagar en la tienda.

> WARNING
>
> Importante
>
> Antes de configurar Pix como método de pago, te recomendamos descargar la última versión del plugin Mercado Pago para WooCommerce y registrar tu clave Pix en Mercado Pago. **(Solo para Brasil)**

¡Listo! Ahora el plugin Mercado Pago con WooCommerce está integrado en tu tienda y se puede probar realizando compras que solo serán con el propósito de validar el funcionamiento del plugin, pero que no moverán ningún valor.

> LEFT_BUTTON_REQUIRED_ES
>
> Prueba de compra
>
> Aprenda a realizar una compra de prueba y asegúrese de que la integración funcione.
>
> [Prueba de compra](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/woocommerce/testing)