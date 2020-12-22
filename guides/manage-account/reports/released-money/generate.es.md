# ¿Cómo generar tu reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------?


## Canales de generación

Puedes generar un reporte de ----[mla]---- liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberaciones ------------ desde tu cuenta de Mercado Pago:

| Canales | Descripción |
| Panel de Mercado Pago | Es muy simple y rápido. Para generarlo desde tu cuenta de Mercado Pago, ve a [Reportes](https://www.mercadopago[FAKER][URL][DOMAIN]/movements) y elige la opción de "Ver reportes creados".<br/><br/>Sigue el paso a paso para [generar reportes desde el panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/released-money/panel/). |

## Características técnicas del reporte

Ten en cuenta la siguiente información técnica cuando quieras generar tus reportes.


### Estructura del reporte

Conoce las características de los elementos que conforman tu reporte.


| Elemento o acción | Características |
| ------------ | -------- |
| Detalle de tablas | El detalle de las tablas comprende información generada en día 1 como mínimo. |
| Orden de columnas | Fijo |
| Período máximo | Reportes con datos de hasta 60 días. |
| Moneda | Local (basada en el país donde esté registrada la cuenta de Mercado Pago) |
| Zona horaria de las columnas con fechas | GMT-4 <br/> <br/> Toma como referencia el lugar desde el que se descarga el reporte. |
| Selección de fechas vía web | Debe basarse en el timezone de la cuenta. <br/> Por ejemplo, a la cuenta registrada en Brasil le corresponde el timezone de São Paulo. |


### Exportación del reporte

Considera estas opciones a la hora de descargar tu reporte:

| Elemento o acción | Características |
| ------------ | -------- |
| Formato del nombre del archivo | Cuando el reporte es programado o manual:<br/> "prefijo-configurable-<span style='color:#999999;'>fecha-de-creación.csv</span>" <br/> Ejemplo:  mitienda-28-05-2019.csv |
| Formatos de descarga | .csv, .xlsx <br/><br/>Tip: descarga el reporte en .csv para importar los datos y usarlos en otras aplicaciones. Descárgalo en .xlsx para leer la información en las tablas de la hoja de cálculo. |
| Archivo | Los reportes generados quedan guardados en tu cuenta de Mercado Pago. |


> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/release-money/glossary/) de ----[mla]---- liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberaciones ------------ para revisarlo cuando lo necesites o quieras consultar algún término técnico.

<hr/>

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Introducción al reporte de ----[mla]---- liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberaciones ------------ 
>
> Conoce qué es y para qué sirve el reporte de ----[mla]---- liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberaciones ------------.
>
> [Introducción al reporte de ----[mla]---- liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberaciones ------------](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/released-money/introduction/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Cómo usar el reporte
>
> Qué es y para qué sirve el reporte de ----[mla]---- liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberaciones ------------. Descubre ejemplos y casos de uso.
>
> [Cómo usar el reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/released-money/how-to-use/)
