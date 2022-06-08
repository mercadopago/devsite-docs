
# ¿Cómo generar tu reporte de Dinero retirado?

----[mlm, mlb, mla]----
> WARNING
>
> Importante
>
> El reporte de Dinero retirado será deshabilitado desde el 1 de marzo de 2022. Usa el [reporte de Liberaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/introduction) para conciliar las transacciones del dinero disponible en tu cuenta, incluidos tus retiros bancarios.
------------
----[mpe, mlu]----
> WARNING
>
> Importante
>
> Limitamos el uso de la API a la consulta y descarga manual de archivos históricos, como consecuencia del deprecado del reporte Dinero retirado en los próximos meses. En su lugar, te recomendamos usar el [reporte Liberaciones.](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/23879?utm_source=faq_mp&utm_medium=faq&utm_campaign=bank_disable)
------------
----[mco, mlc]----
> WARNING
>
> Importante
>
> A partir del 1 de agosto no podrás crear nuevos reportes **Dinero retirado**. Para seguir llevando el control de todos los retiros y movimientos de tu dinero disponible [usa el reporte Liberaciones.](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/lleva-el-control-de-tu-dinero-con-el-reporte-de-liberaciones)
------------

## Canales de generación

Existen tres formas de generar un reporte de Dinero retirado:

| Canales | Descripción |
| --- | --- |
| Panel de Mercado Pago | <br/>Es muy simple y rápido. Para generarlo desde tu cuenta de Mercado Pago, ve a [tus Informes](https://www.mercadopago.com.ar/balance/reports) y elige la opción de Reportes.<br/><br/>Sigue el paso a paso para [generar reportes desde el panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/available-money/panel).<br/><br/> |
| Integración vía API | <br/>----[mco, mla, mlb, mlc, mlm]---- Programa la frecuencia de tu reporte según tus necesidades. Puede ser tanto de forma manual como de forma programada.<br/><br/>Lee la documentación para [generar reportes por API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/available-money/api). ------------ ----[mpe, mlu]---- El uso de esta integración está restringida a la consulta y descarga manual de reportes y no permite generar nuevos reportes. ------------ <br/><br/> |
| Por retiro | <br/>Genera un reporte automáticamente cada vez que retires tu dinero a una cuenta bancaria.<br/><br/>Sigue el paso a paso para [generar reportes por cada retiro de dinero](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/available-money/withdrawal).<br/><br/> |


## Características técnicas del reporte

Ten en cuenta la siguiente información técnica cuando quieras generar, programar y configurar tus reportes.

### Programación del reporte

Programa cómo y con qué frecuencia quieres generar tus reportes.


| Elemento | Características |
| --- | --- |
| Programacion | <br/>- Diaria.<br/> - Semanal.<br/>- Mensual. <br/><br/> |
| Generación | <br/>- Manual.<br/> - Automática por retiro de dinero disponible, total o parcial. <br/><br/>Las tres instancias de generación conviven. Es decir, aunque programes la generación de tus reportes automáticamente, cada vez que retires dinero se generará un reporte adicional.<br/> <br/> |


### Estructura del reporte

Conoce las características de los elementos que conforman tu reporte.


| Elemento o acción | Características |
| --- | --- |
| Detalle de tablas | <br/>El detalle de las tablas comprende información generada en día 1 como mínimo. Excepto en los reportes generados por retiro de dinero. <br/> <br/> |
| Orden de columnas |<br/> Fijo <br/> <br/> |
| Período máximo | <br/> Reportes con datos de hasta 60 días. <br/> <br/> |
| Moneda | <br/> Local (basada en el país donde esté registrada la cuenta de Mercado Pago) <br/> <br/> |
| Zona horaria de las columnas con fechas | <br/> GMT-4 <br/> <br/> Toma como referencia el lugar desde el que se descarga el reporte. <br/> <br/> |
| Selección de fechas vía API |<br/> Formato del timezone: UTC / GMT-0 <br/> <br/> |
| Selección de fechas vía web | <br/> Debe basarse en el timezone de la cuenta. <br/>Por ejemplo, a la cuenta registrada en Brasil le corresponde el timezone de São Paulo. <br/> <br/> |


### Exportación del reporte

Todas las opciones que tienes disponibles a la hora de descargar tu reporte.

| Elemento o acción | Características |
| --- | --- |
| Formato del nombre del archivo | <br/>Cuando el reporte es programado o manual:<br/> "prefijo-configurable-<span style='color:#999999;'>fecha-de-creación.csv</span>" <br/> Ejemplo: mitienda-28-05-2019.csv <br/><br/> Cuando el reporte se genera por un retiro de dinero: <br/> "prefijo-configurable-<span style='color:#999999;'>id-de-retiro-fecha-de-creación.csv</span>"<br/> Ejemplo: mitienda-ID123456789-28-05-2019.csv <br/> <br/> |
| Formatos de descarga | <br/>.csv, .xlsx <br/><br/>Tip: descarga el reporte en .csv para importar los datos y usarlos en otras aplicaciones. Descárgalo en .xlsx para leer la información en las tablas de la hoja de cálculo. <br/><br/> |
| Archivo | <br/>Los reportes generados quedan guardados en tu cuenta de Mercado Pago.<br/><br/> |
| Configuración disponible vía API | <br/>- Columnas a generar por reporte<br/> - Prefijo del archivo para identificarlo fácilmente<br/> - Carga por SFTP<br/> - Separador de columnas (punto o punto y coma)<br/> - Separador decimal (coma o punto)<br/> - Notificación por e-mail<br/> - Retiro al final del reporte (opcional) <br/><br/> |

----[mlm, mlb, mlc, mco, mla]----
> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reportes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/available-money/glossary) de Dinero retirado para revisarlo cuando lo necesites o quieras consultar algún término técnico.
------------

----[mpe]----
> Ten a mano el [Glosario del reportes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/available-money/glossary) de Dinero retirado para revisarlo cuando lo necesites o quieras consultar algún término técnico.

> INFO
>
> Próximamente verás los registros de tus movimientos en orden cronológico.
>
> En los reportes que generes a partir de Febrero vas a ver todos tus movimientos en el orden en que se realizaron para que puedas identificarlos más fácil y controlar mejor tus ventas.
------------
----[mlu]----
> Ten a mano el [Glosario del reportes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/available-money/glossary) de Dinero retirado para revisarlo cuando lo necesites o quieras consultar algún término técnico.

> INFO
>
> Próximamente verás los registros de tus movimientos en orden cronológico.
>
> En los reportes que generes a partir de Marzo vas a ver todos tus movimientos en el orden en que se realizaron para que puedas identificarlos más fácil y controlar mejor tus ventas.
------------

<hr/>

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Generación desde Mercado Pago  
>
> Crea tus reportes de forma manual o programada desde tu cuenta de Mercado Pago.
>
> [Generación desde Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/available-money/panel)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Generación por API
>
> Crea reportes de forma programada y manual por medio de una integración con Mercado Pago.
>
> [Generación por API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/available-money/api)
