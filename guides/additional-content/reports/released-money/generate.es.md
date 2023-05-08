
# ¿Cómo generar tu reporte de Liberaciones?

----[mla]----
> NOTE
>
> Lleva con facilidad el control de tus ventas con QR
>
> Creamos nuevas columnas que te permiten identificar las billeteras virtuales o los bancos que tus clientes usan para pagar cuando les cobras con un QR de Mercado Pago. Actualiza tus preferencias de configuración [desde el panel](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/release/settings) o [vía API](/developers/es/guides/additional-content/reports/released-money/api) para incluir las columnas en tus reportes.
------------
----[mco, mlc]----
> WARNING
>
> Importante
>
> Los reportes que generes a partir de junio presentarán tus movimientos en orden cronológico, para que sea más fácil identificar cuándo se realizaron. [Conoce cómo usar este reporte.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/subscriptions/additional-content/reports/released-money/how-to-use)
------------

## Canales de generación

Puedes generar un reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------ desde tu cuenta de Mercado Pago:

| Canales | Descripción |
| --- | --- |
| Panel de Mercado Pago | Para generar manualmente un reporte desde tu panel de Mercado Pago, ve a ----[mla, mlm]---- [Informes y facturación](https://www.mercadopago[FAKER][URL][DOMAIN]/movements),luego haz clic en *Ir a Reportes de tus cobros y estados de cuenta* y elige el reporte que deseas. ------------ ----[mlb, mpe, mlu, mco]---- [Reportes](https://www.mercadopago[FAKER][URL][DOMAIN]/movements) y elige la opción de *Ver reportes creados*. ------------ <br/><br/>Sigue el paso a paso para [generar reportes desde el panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/panel). |
| Integración vía API | Para generar manualmente un reporte o programar la frecuencia de uno según tus necesidades, utiliza nuestra integración vía API. <br/><br/>Lee la documentación para [generar reportes por API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/api). |


## Características técnicas del reporte

Ten en cuenta la siguiente información técnica cuando quieras generar tus reportes.


### Estructura del reporte

Conoce las características de los elementos que conforman tu reporte.


| Elemento o acción | Características |
| --- | --- |
| Detalle de tablas | El detalle de las tablas comprende información generada en día 1 como mínimo. |
| Orden de columnas | Fijo |
| Período máximo | Reportes con datos de hasta 60 días. |
| Moneda | Local (basada en el país donde esté registrada la cuenta de Mercado Pago) |
| Zona horaria de las columnas con fechas | GMT-4 <br/> <br/> Toma como referencia el lugar desde el que se descarga el reporte. |
| Selección de fechas vía web | Debe basarse en el timezone de la cuenta. <br/> Por ejemplo, a la cuenta registrada en Brasil le corresponde el timezone de São Paulo. |


### Exportación del reporte

Considera estas opciones a la hora de descargar tu reporte:

| Elemento o acción | Características |
| --- | --- |
| Formato del nombre del archivo | Cuando el reporte es programado o manual:<br/> "prefijo-configurable-<span style='color:#999999;'>fecha-de-creación.csv</span>" <br/> Ejemplo: mitienda-28-05-2019.csv |
| Formatos de descarga | .csv, .xlsx <br/><br/>Tip: descarga el reporte en .csv para importar los datos y usarlos en otras aplicaciones. Descárgalo en .xlsx para leer la información en las tablas de la hoja de cálculo. |
| Archivo | Los reportes generados quedan guardados en tu cuenta de Mercado Pago. |

## Notificaciones

### Webhook

Webhook (también conocido como devolución de llamada web) es un método simple que facilita que una aplicación o sistema proporcione información en tiempo real cada vez que ocurre un evento, es decir, es una forma de recibir datos pasivamente entre dos sistemas a través de un HTTP POST. Para el caso de los reportes que se utilizan para conciliar se enviará una notificación al usuario que tenga configurado este servicio cuando sus archivos sean generados.

| Atributo        | Descripción                  |
|-----------------|------------------------------|
| transaction_id  | ID de la transacción         |
| request_date    | Fecha de la solicitud        |
| generation_date | Fecha de la generación       |
| files           | Archivos disponibles         |
| type            | Formato del archivo          |
| url             | Enlace de descarga           |
| name            | Nombre del archivo           |
| status          | Estado del reporte           |
| creation_type   | Creación manual o programada |
| report_type     | Tipo de reporte              |
| is_test         | Define si es una prueba      |
| signature       | Firma de la notificación     |

### Contraseña para cifrado

Para hacer seguro el proceso de notificación hacia el sistema se enviará en el cuerpo del mensaje (payload) un atributo llamado **_Signature_**, con el objetivo de validar que la notificación Webhook se haya originado desde Mercado Pago y no se trate de una suplantación.

El **_Signature_** se construye uniendo el `transaction_id` con la `contraseña para cifrado` configurada en la sección de **_Notificación por Webhook_**, más el `generation_date` del reporte. Una vez concatenados los valores se cifran haciendo uso del algoritmo **_BCrypt_** de la siguiente manera:

`signature = BCrypt(transaction_id + '-' + password_for_encryption + '-' + generation_date)`

Para validar que sea Mercado Pago quien emitió la notificación se debe usar la **_función de verificación_** que ofrece el algoritmo de **_BCrypt_** para el lenguaje deseado.

**Ejemplo Java:**

`BCrypt.checkpw(transaction_id + '-' + password_for_encryption + '-' + generation_date, payload_signature)`

----[mlm, mlb, mla]----
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/glossary) de ------------ ----[mla]---- Liquidaciones ------------ ----[mlm, mlb]---- Liberaciones ------------ ----[mlm, mlb, mla]----para revisarlo cuando lo necesites o quieras consultar algún término técnico.
------------

----[mpe, mlu]----
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/glossary) de Liberaciones para revisarlo cuando lo necesites o quieras consultar algún término técnico.

> INFO
>
> Próximamente verás los registros de tus movimientos en orden cronológico.
>
> En los reportes que generes a partir de Diciembre vas a ver todos tus movimientos en el orden en que se realizaron para que puedas identificarlos más fácil y controlar mejor tus ventas.
------------

----[mco, mlc]----
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/glossary) de Liberaciones para revisarlo cuando lo necesites o quieras consultar algún término técnico.

> INFO
>
> Próximamente verás los registros de tus movimientos en orden cronológico.
>
> Los reportes que generes a partir del 27 de junio presentarán tus movimientos en orden cronológico para que puedas identificarlos más fácil y controlar mejor las finanzas de tu negocio. [Conoce la nueva anatomía del reporte.](https://vendedores.mercadolibre[FAKER][URL][DOMAIN]/lleva-el-control-de-tu-dinero-con-el-reporte-de-liberaciones)
------------