
# ¿Cómo generar tu reporte de Todas las transacciones?

> NOTE
>
> Lleva con facilidad el control de tus ventas con QR
>
> Creamos nuevas columnas que te permiten identificar las billeteras virtuales o los bancos que tus clientes usan para pagar cuando les cobras con un QR de Mercado Pago. Actualiza tus preferencias de configuración [desde el panel](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/settlement/settings) o [vía API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/api) para incluir las columnas en tus reportes.

## Canales de generación

Existen dos formas de generar un reporte de Todas las transacciones:

| Canales | Descripción |
| --- | --- |
| Panel de Mercado Pago | <br/>Es muy simple y rápido. Para generarlo desde tu cuenta de Mercado Pago, ve a ----[mla]---- [tus informes](https://www.mercadopago.com.ar/balance/reports?page=1#!/settlement-report) ------------ ----[mlm]---- [tus informes](https://www.mercadopago.com.mx/balance/reports?page=1#!/settlement-report) ------------ ----[mlu]---- [tus informes](https://www.mercadopago.com.uy/balance/reports?page=1#!/settlement-report) ------------ ----[mlc]---- [tus informes](https://www.mercadopago.cl/balance/reports?page=1#!/settlement-report) ------------ ----[mco]---- [tus informes](https://www.mercadopago.com.co/balance/reports?page=1#!/settlement-report) ------------ ----[mpe]---- [tus informes](https://www.mercadopago.com.pe/balance/reports?page=1#!/settlement-report) ------------ ----[mlb]---- [tus informes](https://www.mercadopago.com.br/balance/reports?page=1#!/settlement-report) ------------ y elige la opción de *Reportes*.<br/><br/>Sigue el paso a paso para [generar reportes desde el panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/panel).<br/><br/> |
| Integración vía API | <br/>Programa la frecuencia de tu reporte según tus necesidades. Puede ser tanto de forma manual como de forma programada.<br/><br/>Lee la documentación para [generar reportes por API.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/api) <br/><br/> |

<br/>

## Características técnicas del reporte

Ten en cuenta la siguiente información técnica cuando quieras generar, programar y configurar tus reportes.

### Programación del reporte

Programa cómo y con qué frecuencia quieres generar tus reportes.


| Elemento | Características |
| --- | --- |
| Programacion | <br/>- Diaria<br/> - Semanal<br/>- Mensual<br/><br/> |
| Generación | <br/>- Manual<br/><br/> |


### Estructura del reporte

Conoce las características de los elementos que conforman tu reporte.


| Elemento o acción | Características |
| --- | --- |
| Detalle de tablas | <br/>El detalle de las tablas comprende información generada en día 1 como mínimo.<br/> <br/> |
| Orden de columnas |<br/> Fijo <br/> <br/> |
| Período máximo | <br/> Reportes con datos de hasta 60 días. <br/> <br/> |
| Moneda | <br/> Local (basada en el país donde esté registrada la cuenta de Mercado Pago) <br/> <br/> |
| Zona horaria de las columnas con fechas | <br/> GMT-4 <br/> <br>Toma como referencia el lugar desde el que se descarga el reporte.<br/><br/> |
| Selección de fechas vía API |<br/> Formato del timezone: UTC / GMT-0 <br/> <br/> |
| Selección de fechas vía web | <br/> Debe basarse en el timezone de la cuenta. <br/>Por ejemplo, a la cuenta registrada en Brasil le corresponde el timezone de São Paulo. <br/> |

### Exportación del reporte

Todas las opciones que tienes disponible a la hora de descargar tu reporte.

| Elemento o acción | Características |
| --- | --- |
| Formato del nombre del archivo | <br/>Cuando el reporte es programado o manual:<br/> "&#60;prefijo-configurable&#62;-<span>&#60;yyyy-MM-dd-hhmmss&#62;.&#60;formato&#62;</span>" <br/> Ejemplo: mitienda-2019-05-28-104010.csv<br/><br/> |
| Formatos de descarga | <br/>.csv, .xlsx <br/><br/>Tip: descarga el reporte en .csv para importar los datos y usarlos en otras aplicaciones. Descárgalo en .xlsx para leer la información en las tablas de la hoja de cálculo. <br/><br/> |
| Archivo | <br/>Los reportes generados quedan guardados en tu cuenta de Mercado Pago.<br/><br/> |
| Configuración disponible vía API | <br/>- Columnas a generar por reporte<br/> - Prefijo del archivo para identificarlo fácilmente<br/> - Carga por SFTP<br/> - Separador de columnas (punto o punto y coma)<br/> - Notificación por e-mail<br/><br/> |



> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/glossary) de Todas las transacciones para revisarlo cuando necesites o quieras consultar algún término técnico.

<hr/>

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Generación desde Mercado Pago  
>
> Crea tus reportes de forma manual o programada desde tu cuenta de Mercado Pago.
>
> [Generación desde Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/panel)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Generación por API
>
> Crea reportes de forma programada y manual por medio de una integración con Mercado Pago.
>
> [Generación por API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/api)
