---
 sites_supported:
  - mlb
---

# iSET

## ¿Qué es iSET?


iSET es una **plataforma virtual que te permite recibir pagos con Mercado Pago**.
Puedes ofrecer a tus clientes la posibilidad de pagar con tarjeta de crédito o boleto y [vender directo en tu sitio](#bookmark_checkout_transparente), [cobrar por el sitio de Mercado Pago](#bookmark_checkout_mercado_pago) o por [ambos checkouts](#bookmark_ambos_checkouts).

## Pasos para configurar

Los **pasos para comenzar a cobrar con Mercado Pago** son los siguientes:

### Checkout Pro

1. Crea una [cuenta vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si todavía no tienes una.
1. Activa a Mercado Pago como medio de pago dentro de tu tienda.
1. Configura las formas de pago.

## Activa Mercado Pago en tu tienda

Para **activar tu cuenta de Mercado Pago en iSET**, sigue estos pasos:

1. Accede a las “Formas de pago” en la sección de Módulos del panel de administración de tu tienda. 
1. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
1. En el campo Status, selecciona la opción “Activo”.
1. Haz clic en “Cerrar” y después en “Guardar cambios”.
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_active_modulo_1.gif)
<p>&nbsp;</p>

¡Y listo! Mercado Pago ya se encuentra instalado en tu tienda.

## Configura las formas de pago

Luego de activar Mercado Pago, tienes la opción de ofrecer los siguientes formas de pago: [Checkout Mercado Pago](#bookmark_checkout_mercado_pago), [Checkout Transparente](#bookmark_checkout_transparente) o [ambos checkouts](#bookmark_ambos_checkouts).

También tienes la opción de [ofrecer cuotas sin interés](#bookmark_configura_las_cuotas_sin_interés_en_tu_cuenta_de_mercado_pago) y configurar las [tasas y plazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) de tus ventas online cuando quieras.

### Configura los tipos de pago

1. Ingresa en “Formas de pago” en la sección de Módulos panel de administración de tu tienda. 
1. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
1. Selecciona los tipos de pagos que quieras ofrecer: “Boleto bancario” y/o “Tarjeta de crédito”.
1. Completa en "Breve descripción/Nombre de la tienda" el nombre que aparecerá en la factura de tu cliente para que pueda reconocerte (máximo de 13 caracteres).
1. Haz clic en “Cerrar” y después en “Guardar cambios”.
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_methods_2.gif)
<p>&nbsp;</p>

### Checkout Mercado Pago

**El comprador será redireccionado a Mercado Pago** para realizar el pago y terminar la compra.

Para activar este modelo, sigue estos pasos:

1. Ingresa en “Formas de pago” en la sección de Módulos del panel de administración de tu tienda. 
1. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
1. En la sección Modelo de checkout, elige la opción “Patrón”.
1. Agrega el [e-mail de tu cuenta de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/profile#from-section=menu) en “E-mail de registro en Mercado Pago”.
1. Completa los campos Client ID y Client Secret con las [credenciales]([FAKER][CREDENTIALS][URL]) de tu cuenta de Mercado Pago.
1. Haz clic en “Cerrar” y después en “Guardar cambios”.
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_checkout_padrao_3.gif)
<p>&nbsp;</p>

### Checkout Transparente

Permite que el **cliente finalice la compra en tu tienda** sin ser redireccionado para otro sitio.

Para activar este modelo, sigue estos pasos:

1. Ingresa en “Formas de pago” en la sección de Módulos del panel de administración de tu tienda. 
1. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
1. En la sección Modelo de checkout, elige la opción “Transparente”.
1. Completa el [e-mail de tu cuenta de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/profile#from-section=menu) en “E-mail de registro en Mercado Pago”.
1. Completa en los campos Client ID, Client Secret y Public Key, las [credenciales]([FAKER][CREDENTIALS][URL]) de tu cuenta de Mercado Pago.
1. Haz clic en “Cerrar” y después en “Guardar cambios”.
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_checkout_transparente_4.gif)
<p>&nbsp;</p>

### Ambos checkouts

Puedes ofrecer a tus clientes la opción de finalizar el pago directamente en tu tienda o ser redirigidos al sitio web de Mercado Pago.

Para **activar los dos checkouts**, sigue estos pasos:

1. Ingresa en “Formas de pago” en la sección de Módulos del panel de administración de tu tienda. 
1. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
1. En la sección Modelo de checkout elige la opción “Ambos”.
1. Agrega el [e-mail de tu cuenta de Mercado Pago](https://www.mercadopago.com.br/profile#from-section=menu) en “E-mail de registro en Mercado Pago”.
1. Completa los campos “Cliend ID, Clien Secret y Public Key” con las [credenciales de tu cuenta de Mercado Pago]([FAKER][CREDENTIALS][URL]).
1. Haz clic en “Cerrar” y después en “Guardar cambios”.
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_checkout_ambos_5.gif)
<p>&nbsp;</p>

> Encuentra toda la información sobre tus credenciales en nuestras [preguntas frecuentes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/faqs/credentials/).

## Configuración de cuotas

Puedes establecer la cantidad máxima o mínima de cuotas y la aplicación de aumentos o descuentos para las cuotas en tu tienda.

> WARNING
>
> Importante
>
> Las cuotas deben quedar configuradas como automáticas para evitar problemas al procesar los pagos. Vamos a tomar las cuotas habilitadas en tu cuenta de Mercado Pago según corresponda.

1. Ingresa en “Formas de pago” en la sección de Módulos del panel de administración de tu tienda. 
1. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
1. Selecciona en “Categoría de productos” la categoría que aplica a tus productos. 
1. Completa los siguientes campos según la configuración de tu cuenta de Mercado Pago:

    | Campo | Descripción |
    | --- | --- |
    | Venta a plazos hasta | Selecciona el número máximo de cuotas que quieras ofrecer. |
    | Valor mínimo de cuota R$ | Indica el valor mínimo de cuotas que quiera ofrecer en reales. |
    | Solo pedidos superiores a R$ | Configura si quieres utilizar un rango de valor mínimo para aceptar pedidos en tu tienda. 
    | Descuentos para pagos en efectivo (%) | Ingresa el valor de descuento para pagos en efectivo que quieras. 
    | Adición/Descuento | Aplica un aumento o descuento en el pedido. | 

1. Haz clic en “Cerrar” y después en “Guardar cambios”.
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_installments_6.gif)
<p>&nbsp;</p>

## Configura las cuotas sin interés en tu cuenta de Mercado Pago

1. Ingresa a la sección [Tu negocio](https://www.mercadopago[FAKER][URL][DOMAIN]/business/) en tu cuenta de Mercado Pago.
1. Accede en la opción “Configuraciones”, navega hasta “Ofrecer cuotas sin interés” y haz clic en “Activar”.
1. Elige “¿Cuántas quieres ofrecer?” y confirma los cambios con el botón “Activar”.
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_account_installment_7.gif)
<p>&nbsp;</p>

¡Y listo! Ya estás ofreciendo cuotas sin interés, con el costo de financiación que hayas configurado.

## Información para los pedidos de tu tienda iSET

Para **configurar la información de los pedidos en tu tienda**, sigue estos pasos:

1. Accede a las “Formas de pago” en la sección de Módulos del panel de administración de tu tienda.
1. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
1. Completa los siguientes campos según la configuración de tu tienda:

    | Campo | Descripción |
    | --- | --- |
    | Información al usuario sobre el tipo de pago | Instrucciones al momento de realizar el pago. |
    | Información al usuario sobre el tipo de pago | Instrucciones para mostrarse luego de finalizado el pago |
    | Estado de nuevos pedidos | Selecciona un estado para los nuevos pedidos. 
    | Estado de pedidos aprobados | Selecciona un estado para los pedidos aprobados. 
    | Estado de pedidos cancelados | Selecciona un estado para los pedidos cancelados. |
    | Usar campaña de descuento | Informa si tienes disponibles cupones de descuentos desde tu cuenta de Mercado Pago. 

1. Haz clic en “Cerrar” y después en “Guardar cambios”. 
<p>&nbsp;</p>
    ![Payments Connect - iSET](/images/iset/iset_configuration_informacion_9.gif)
<p>&nbsp;</p>

> WARNING
>
> Importante
>
> Por el momento, no es posible utilizar las campañas de descuentos con Mercado Pago. 

<!-- -->
> Para más información, visita el [sitio oficial de iSET](https://www.iset.com.br/).
