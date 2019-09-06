# ¿Cómo generar tu reporte de Dinero Disponible?

> INDEX
>
> En esta página
>
> [Canales de generación](#bookmark_canales_de_generación)
>
> [Cómo está compuesto el reporte](#bookmark_cómo_está_compuesto_el_reporte)


## Canales de generación

Existen tres formas de generar un reporte de Dinero Disponible:

| Canales | Descripción |
| ------- | ----------- |
| Panel de Mercado Pago | <br/>Es muy simple y rápido. Para generarlo desde tu cuenta de Mercado Pago, ve a [tus Informes](https://www.mercadopago.com.ar/balance/reports) y elige la opción de Reportes.<br/><br/>Sigue el paso a paso para [generar reportes desde el panel.](https://www.mercadopago.com/developers/es/guides/manage-account/reports/available-money/panel)<br/><br/> |
| Integración vía API | <br/>Programa la frecuencia de tu reporte según tus necesidades. Puede ser tanto de forma manual como de forma programada.<br/><br/>Lee la documentación para [generar reportes por API.](https://www.mercadopago.com/developers/es/guides/manage-account/reports/available-money/api) <br/><br/>|
| Con el retiro de dinero | <br/>Genera un reporte automáticamente cada vez que retires tu saldo disponible a una cuenta bancaria.<br/><br/>Sigue el paso a paso para [generar reportes por cada retiro de dinero.](https://www.mercadopago.com/developers/es/guides/manage-account/reports/available-money/withdrawal)<br/><br/> |


## Cómo está compuesto el reporte

Ten en cuenta la siguiente información técnica cuando quieras generar, programar y configurar tus reportes.

### Programación del reporte

Programa cómo y con qué frecuencia quieres generar tus reportes. 


| Elemento | Características |
| ------------ |	--------    |
| Programacion | <br/>-  Diaria.<br/>  -  Semanal.<br/>-  Mensual. <br/><br/> |
| Generación  | <br/>-  Manual.<br/>  -  Automática por retiro de dinero disponible, total o parcial. <br/><br/>Las tres instancias de generación conviven. Es decir, aunque programes la generación de tus reportes automáticamente, cada vez que retires dinero se generará un reporte adicional.<br/> <br/>  |


### Estructura del reporte

Conoce las características de los elementos que conforman tu reporte.


| Elemento o acción | Características |
| ------------ |	--------    |
| Detalle de tablas | <br/>El detalle de las tablas comprende información generada en día 1 como mínimo. Excepto en los reportes generados por retiro de dinero. <br/> <br/>  |
| Orden de columnas |<br/> Fijo <br/> <br/> |
| Período máximo | <br/> Reportes con datos de hasta 60 días. <br/> <br/> |
| Moneda | <br/> Local (basada en el país donde esté registrada la cuenta de Mercado Pago) <br/> <br/> |
| Zona horaria de las columnas con fechas | <br/> GMT-4 <br/> <br/> |
| Selección de fechas vía API |<br/>  Formato del timezone: UTC / GMT-0 <br/> <br/> |
| Selección de fechas vía web | <br/> Debe basarse en el timezone de la cuenta. <br/>Por ejemplo, a la cuenta registrada en Brasil le corresponde el timezone de São Paulo. <br/> <br/> |


### Exportación del reporte

Todas las opciones que tienes disponible a la hora de descargar tu reporte.

| Elemento o acción | Características |
| ------------ |	--------    |
| Formato del filename | <br/>Cuando el reporte es programado o manual:<br/> "prefijo-configurable-<span style='color:#999999;'>fecha-de-creación.csv</span>" <br/> Ejemplo:  mitienda-28-05-2019.csv <br/><br/> Cuando el reporte se genera por un retiro de dinero: <br/> "prefijo-configurable-<span style='color:#999999;'>id-de-retiro-fecha-de-creación.csv</span>"<br/> Ejemplo: mitienda-ID123456789-28-05-2019.csv <br/> <br/> |
| Formatos de descarga | <br/>.csv, .xlsx <br/><br/>Tip: descarga el reporte en .csv para importar los datos y usarlos en otras aplicaciones. Descárgalo en .xlsx para leer la información en las tablas de la hoja de cálculo. <br/><br/> |
| Archivo | <br/>Los reportes generados quedan guardados en tu cuenta de Mercado Pago.br/><br/> |
| Configuración disponible vía API | <br/>-  Columnas a generar por reporte<br/> -  Prefijo del archivo para identificarlo fácilmente<br/> -  Carga por SFTP<br/> -  Separador de columnas (punto o punto y coma)<br/> -  Separador decimal (coma o punto)<br/> -  Notificación por e-mail<br/> -  Retiro al final del reporte (opcional) <br/><br/> |



> NOTE
>
> Nota
>
> Ten a mano el [Glosario](https://www.mercadopago.com/developers/es/guides/manage-account/reports/available-money/glossary) del reporte de Dinero Disponible para revisarlo cuando lo necesites o quieras consultar algún término técnico.

<hr/>

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Generación desde Mercado Pago  
>
> Crea tus reportes de forma manual o programada desde tu cuenta de Mercado Pago.
>
> [Generación desde Mercado Pago](https://www.mercadopago.com/developers/es/guides/manage-account/reports/available-money/panel)

> RIGHT_BUTTON_REQUIRED_ES
>
> Generación por API
>
> Crea reportes de forma programada y manual por medio de una integración con Mercado Pago.
>
> [Generación por API](https://www.mercadopago.com/developers/es/guides/manage-account/reports/available-money/api)
