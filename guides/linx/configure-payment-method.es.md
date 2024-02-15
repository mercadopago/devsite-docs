---
 sites_supported:
  - mlb
---

# Configura las formas de pago

Luego de agregar a Mercado Pago, tienes la opción de ofrecer pagos con [tarjeta de crédito](#bookmark_configura_los_datos_para_tarjetas_de_crédito) y [boleto](#bookmark_configura_los_datos_para_boleto).

También tienes la opción de [ofrecer cuotas sin interés](#bookmark_configura_las_cuotas_sin_interés_en_tu_cuenta_de_mercado_pago) y configurar las [tasas y plazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) de tus ventas online cuando quieras.

## Configura los datos para integrar

Después de agregar el medio de pago, **configura los datos para tu integración con Mercado Pago** de la siguiente manera: 

1. Accede a la pestaña “Integración” y completa los campos Public Key y Access Token Key que corresponden a las [credenciales](/developers/es/guides/additional-content/your-integrations/credentials) de producción de tu cuenta de Mercado Pago.
1. Completa el nombre que aparecerá en la factura de tu cliente para que pueda reconocerte.
1. Si quieres probar tus pagos, en la sección Modo de prueba, selecciona la opción “Sí”. Luego, completa los campos Public Key y Access Token key con las [credenciales](/developers/es/guides/additional-content/your-integrations/credentials) de prueba de tu cuenta de Mercado Pago. 
1. En la sección de Cuotas, selecciona “Externo (API de Mercado Pago) para utilizar las configuraciones de cuotas directamente de tu cuenta de Mercado Pago. 
1. Por último, haz clic en “Guardar”.
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_configurando_integracao-2.gif)
<p>&nbsp;</p>

## Configura los datos para tarjetas de crédito 

Para **configurar los datos de tarjetas de créditos en tu tienda**, sigue estos pasos:

1. Accede a “Medios de pago” en la sección de Configs del panel de administración de tu tienda. 
1. Busca el medio de pago creado y haz clic en “Editar”.
1. Ingresa en la pestaña “Tarjetas de Crédito”, elige la bandera que quieras configurar y selecciona el estado “Activo”. 
1. Completa los campos correspondientes si es necesario:

    | Campos | Datos |
    | --- | --- |
    | Porcentaje de interés | Completa el porcentaje de interés que quieras agregar. Si no quieres sumar ninguno, deja el dato en 0,00. |
    | Tipo de interés | Emisor - Incluye intereses en el pedido total. Emisor - Intereses devengados por el emisor. Comerciante - Incluye interés en el pedido total. |
    | Número total de cuotas | Ingresa el número total de cuotas que quieres ofrecer por venta. |
    | Número de cuotas sin interés | Ingresa el número total de cuotas sin interés que quieres ofrecer por venta. |
    | Cuota mínima | Valor mínimo disponible de cuotas para una compra. |
    | Identificador de integración | Agrega un código para identificarse en su ERP. |
    | Orden | Configura el orden en el que aparecerán las banderas al finalizar la compra. |
    | Imagen de ruta | Completa la ruta para obtener la imagen de las banderas de la tarjeta. |

1. Haz clic en “Guardar”.
<p>&nbsp;</p>

![LINX Configuracao](/images/linx/linx_configurando_cartao-3.gif)
<p>&nbsp;</p>

> WARNING
>
> Importante
>
> Si utilizas la configuración de cuotas externas, ten en cuenta que no se tomarán las configuraciones de cuotas realizadas en la plataforma.<br>
> Las cuotas externas no se mostrarán en los listados o en los detalles del producto.

## Configura los datos para boleto

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