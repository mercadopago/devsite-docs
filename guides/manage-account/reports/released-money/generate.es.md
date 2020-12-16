# ¿Cómo generar tu reporte de liberaciones?


## Canales de generación

Puedes generar un reporte de liberaciones desde tu cuenta de Mercado Pago:

| Canales | Descripción |
| ------- | ----------- |
| Panel de Mercado Pago | <br/>Es muy simple y rápido. Para generarlo desde tu cuenta de Mercado Pago, ve a ----[mla]---- [tus informes](https://www.mercadopago.com.ar/movements) ------------ ----[mlm]---- [tus informes](https://www.mercadopago.com.mx/movements) ------------ ----[mlu]---- [tus informes](https://www.mercadopago.com.uy/movements) ------------ ----[mlc]---- [tus informes](https://www.mercadopago.cl/movements) ------------ ----[mco]---- [tus informes](https://www.mercadopago.com.co/movements) ------------ ----[mpe]---- [tus informes](https://www.mercadopago.com.pe/movements) ------------ ----[mlb]---- [tus informes](https://www.mercadopago.com.br/movements) ------------ y elige la opción de *Ver reportes creados*.<br/><br/>Sigue el paso a paso para [generar reportes desde el panel.](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/released-money/panel/)<br/><br/> |

## Características técnicas del reporte

Ten en cuenta la siguiente información técnica cuando quieras generar tus reportes.


### Estructura del reporte

Conoce las características de los elementos que conforman tu reporte.


| Elemento o acción | Características |
| ------------ |	--------    |
| Detalle de tablas | <br/>El detalle de las tablas comprende información generada en día 1 como mínimo. <br/> <br/>  |
| Orden de columnas |<br/> Fijo <br/> <br/> |
| Período máximo | <br/> Reportes con datos de hasta 60 días. <br/> <br/> |
| Moneda | <br/> Local (basada en el país donde esté registrada la cuenta de Mercado Pago) <br/> <br/> |
| Zona horaria de las columnas con fechas | <br/> GMT-4 <br/> <br/> Toma como referencia el lugar desde el que se descarga el reporte. <br/> <br/> |
| Selección de fechas vía web | <br/> Debe basarse en el timezone de la cuenta. <br/>Por ejemplo, a la cuenta registrada en Brasil le corresponde el timezone de São Paulo. <br/> <br/> |


### Exportación del reporte

Considera estas opciones a la hora de descargar tu reporte:

| Elemento o acción | Características |
| ------------ |	--------    |
| Formato del nombre del archivo | <br/>Cuando el reporte es programado o manual:<br/> "prefijo-configurable-<span style='color:#999999;'>fecha-de-creación.csv</span>" <br/> Ejemplo:  mitienda-28-05-2019.csv <br/><br/> |
| Formatos de descarga | <br/>.csv, .xlsx <br/><br/>Tip: descarga el reporte en .csv para importar los datos y usarlos en otras aplicaciones. Descárgalo en .xlsx para leer la información en las tablas de la hoja de cálculo. <br/><br/> |
| Archivo | <br/>Los reportes generados quedan guardados en tu cuenta de Mercado Pago.<br/><br/> |


> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reportes](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/release-money/glossary/) de liberaciones para revisarlo cuando lo necesites o quieras consultar algún término técnico.

<hr/>

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Introducción al reporte de liberaciones 
>
> Conoce qué es y para qué sirve el reporte de liberaciones.
>
> [Introducción al reporte de liberaciones](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/released-money/introduction/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Cómo usar el reporte
>
> Qué es y para qué sirve el reporte de liberaciones. Descubre ejemplos y casos de uso.
>
> [Cómo usar el reporte](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/released-money/how-to-use/)
