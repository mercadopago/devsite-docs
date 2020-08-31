---
 sites_supported:
  - mlb
---

# Linx Commerce

## ¿Qué es Linx Commerce?

Es una **plataforma virtual que te permite recibir pagos con Mercado Pago**.

Puedes ofrecer a tus clientes la posibilidad de pagar con [tarjeta de crédito](#bookmark_configura_los_datos_para_tarjetas_de_crédito) y [boleto](#bookmark_configura_los_datos_para_boleto) en tu tienda.

## Pasos para configurar

Los **pasos para comenzar a cobrar con Mercado Pago** son los siguientes:

1. Crea una [cuenta vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si todavía no tienes una.
1. Agrega a Mercado Pago como medio de pago dentro de tu tienda.
1. Configura las formas de pago con Mercado Pago.
1. Configura los medios de pago del contrato.  

## Agrega a Mercado Pago como medio de pago

Para **agregar Mercado Pago en tu tienda**, sigue estos pasos:

1. Accede a “Medios de pago” en la sección de Configs del panel de administración de tu tienda. 
1. Ingresa en “Adicionar medio de pago”.
1. En la lista Proveedor de Servicio, busca a Mercado Pago y haz clic en “Próximo paso”.
1. Define un nombre para el medio de pago Mercado Pago V2 y selecciona el estado “Activo”.
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_adicione_meio_pagamento-1.gif)
<p>&nbsp;</p>

## Configura las formas de pago

Luego de agregar a Mercado Pago, tienes la opción de ofrecer pagos con [tarjeta de crédito](#bookmark_configura_los_datos_para_tarjetas_de_crédito) y [boleto](#bookmark_configura_los_datos_para_boleto).

También tienes la opción de [ofrecer cuotas sin interés](#bookmark_configura_las_cuotas_sin_interés_en_tu_cuenta_de_mercado_pago) y configurar las [tasas y plazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) de tus ventas online cuando quieras.

### Configura los datos para integrar

Después de agregar el medio de pago, **configura los datos para tu integración con Mercado Pago** de la siguiente manera: 

1. Accede a la pestaña “Integración” y completa los campos Public Key y Access Token Key que corresponden a las [credenciales de producción]([FAKER][CREDENTIALS][URL]) de tu cuenta de Mercado Pago.
1. Completa el nombre que aparecerá en la factura de tu cliente para que pueda reconocerte.
1. Si quieres probar tus pagos, en la sección Modo de prueba, selecciona la opción “Sí”. Luego, completa los campos Public Key y Access Token key con las [credenciales de prueba]([FAKER][CREDENTIALS][URL]) de tu cuenta de Mercado Pago. 
1. En la sección de Cuotas, selecciona “Externo (API de Mercado Pago) para utilizar las configuraciones de cuotas directamente de tu cuenta de Mercado Pago. 
1. Por último, haz clic en “Guardar”.
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_configurando_integracao-2.gif)
<p>&nbsp;</p>

> Encuentra toda la información sobre tus credenciales en nuestras [preguntas frecuentes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/faqs/credentials/).

### Configura los datos para tarjetas de crédito 

Para **configurar los datos de tarjetas de créditos en tu tienda**, sigue estos pasos:

1. Accede a “Medios de pago” en la sección de Configs del panel de administración de tu tienda. 
1. Busca el medio de pago creado y haz clic en “Editar”.
1. Ingresa en la pestaña “Tarjetas de Crédito”, elige la bandera que quieras configurar y selecciona el estado “Activo”. 
1. Completa los campos correspondientes si es necesario:

    | Campos | Datos  |
    | --- | ---|
    | Porcentaje de interés | Completa el porcentaje de interés que quieras agregar. Si no quieres sumar ninguno, deja el dato en 0,00. |
    | Tipo de interés | Emisor - Incluye intereses en el pedido total. Emisor - Intereses devengados por el emisor. Comerciante - Incluye interés en el pedido total. |
    | Número total de cuotas | Ingresa el número total de cuotas que quieres ofrecer por venta. |
    | Número de cuotas sin interés | Ingresa el número total de cuotas sin interés que quieres ofrecer por venta. |
    | Cuota mínima | Valor mínimo disponible de cuotas para una compra. |
    | Identificador de integración | Agrega un código para identificarse en su ERP. |
    | Orden | Configura el orden en el que aparecerán las banderas al finalizar la compra. |
    | Imagen de ruta | Completa la ruta para obtener la imagen de las banderas de la tarjeta. |
1. Haz clic en “Guardar”. 

> WARNING
>
> Importante
>
> Si utilizas la configuración de cuotas externas, ten en cuenta que no se tomarán las configuraciones de cuotas realizadas en la plataforma.<br>
> Las cuotas externas no se mostrarán en los listados o en los detalles del producto.

<!-- -->
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_configurando_cartao-3.gif)
<p>&nbsp;</p>

### Configura los datos para boleto

Para **configurar los datos para Boleto Bancário en su tienda**, sigue estos pasos: 

1. Accede a “Medios de pago” en la sección de Configs del panel de administración de tu tienda. 
1. Busca el medio de pago creado y haz clic en “Editar”.
1. Ingresa en la pestaña “Boleto” y selecciona el estado “Activo”. 
1. Completa el campo Identificador de integración con la información que será identificada en su ERP. 
1. Ingresa el orden en el que quieres que aparezca la opción de boleto en tu tienda. 
1. Por último, haz clic en “Guardar”.
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_configurando_boleto-4.gif)
<p>&nbsp;</p>

## Configura las cuotas sin interés en tu cuenta de Mercado Pago

1. Ingresa a tu cuenta de Mercado Pago y ve a “Tu negocio”.
1. Accede en la opción “Configuraciones”, navega hasta “Ofrecer cuotas sin interés” y haz clic en “Activar”.
1. Elige “¿Cuántas quieres ofrecer?” y confirma los cambios con el botón “Activar”.
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_parcelamento_conta-5.gif)
<p>&nbsp;</p>

¡Y listo! Ya estás ofreciendo cuotas sin interés, con el costo de financiación que hayas configurado.

## Configura los medios de pago del contrato

El contrato tiene como objetivo determinar las configuraciones específicas que utilizará tu tienda.

### Crear un contrato

Para **crear un contrato en tu tienda**, sigue estos pasos: 

1. Desde Backoffice en el panel de administración, ingresa en “Contratos”.
1. Haz clic en “Agregar Contrato”. 
1. Completa el nombre para el contrato que estás creando 
1. Por último, haz clic en “Guardar”.
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_criando_um_contrato-6.gif)
<p>&nbsp;</p>

### Define los medios de pago para el contrato

Para **definir los medios de pago para el contrato**, sigue estos pasos: 

1. Desde Backoffice en el panel de administración, ingresa en “Contratos”.
1. Busca el contrato creado y haz clic en “Editar”.
1. Encuentra la sección de medios de pago y define qué opción de contrato quieres utilizar:
 - **Todos los medios de pago activos en la plataforma**. Permite que se muestren todos los métodos de pago habilitados en la plataforma.
 - **Definido a continuación**. Elige qué métodos de pago quieres que sean parte del contrato.
1. Por último, haz clic en “Guardar”.
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_meio_pagamento_contrato-7.gif)
<p>&nbsp;</p>

### Asigna medios de pago del contrato a un canal

Para **asignar los medios de pago del contrato a un canal**, sigue estos pasos: 

1. Desde Canales en el panel de administración, ingresa en “Canales”.
1. Busca el canal de tu tienda y haz clic en “Editar”.
1. En la sesión de contrato patrón, agrega el contrato que creaste.
1. Por último, haz clic en “Guardar”.
<p>&nbsp;</p>
    ![LINX Configuracao](/images/linx/linx_atribuindo_contrato_ao_canal-8.gif)
<p>&nbsp;</p>

<!-- -->
> Para más información, visita el [sitio oficial de Linx Commerce](https://docs.linxcommerce.com.br/docs).
