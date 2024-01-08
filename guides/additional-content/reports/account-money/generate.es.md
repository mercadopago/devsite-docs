# Generar reporte

Puedes generar un reporte de Todas las transacciones a través de tu cuenta de Mercado Pago o mediante la integración a través de la API. Consulta la tabla a continuación para obtener más información.

> NOTE
>
> Lleva con facilidad el control de tus ventas con QR
>
> Creamos nuevas columnas que te permiten identificar las billeteras virtuales o los bancos que tus clientes usan para pagar cuando les cobras con un QR de Mercado Pago. Actualiza tus preferencias de configuración [desde el panel](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/settlement/settings) o [vía API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/account-money/api) para incluir las columnas en tus reportes.

## Canales de generación

Existen dos formas de generar un reporte de Todas las transacciones:

| Canales | Descripción |
| --- | --- |
| Panel de Mercado Pago | Es posible crear el reporte manualmente a través del panel de Mercado Pago. Accede a la sección de ----[mla]---- [Informes y facturación](https://www.mercadopago.com.ar/balance/reports?page=1#!/settlement-report) ------------ ----[mlm]---- [Informes y facturación](https://www.mercadopago.com.mx/balance/reports?page=1#!/settlement-report) ------------ ----[mlu]---- [Informes y facturación](https://www.mercadopago.com.uy/balance/reports?page=1#!/settlement-report) ------------ ----[mlc]---- [Informes y facturación](https://www.mercadopago.cl/balance/reports?page=1#!/settlement-report) ------------ ----[mco]---- [Informes y facturación](https://www.mercadopago.com.co/balance/reports?page=1#!/settlement-report) ------------ ----[mpe]---- [Informes y facturación](https://www.mercadopago.com.pe/balance/reports?page=1#!/settlement-report) ------------ ----[mlb]---- [Informes y facturación](https://www.mercadopago.com.br/balance/reports?page=1#!/settlement-report) ------------, haz clic en **Ir a reportes de pagos y extractos de cuenta** y selecciona el reporte. Para obtener más información, consulta la documentación [Generar reporte desde el panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/account-money/panel). |
| Integración vía API | Crea el reporte manualmente o programa su generación según la frecuencia deseada utilizando nuestra integración a través de la API. Para obtener más información, consulta la documentación [Generar reporte a través de la API.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/account-money/api) |

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

La contraseña de cifrado es esencial para asegurar el proceso de notificación al sistema. En el cuerpo del mensaje (_payload_), se envía un atributo llamado **_"signature"_** para validar la origen legítima de la notificación Webhook de Mercado Pago, evitando posibles imitaciones.

La creación de la **_signature_** ocurre mediante la combinación del `transaction_id` con la `contraseña para cifrado` en la sección **_"Notificación por Webhook"_**, junto con la `generation_date` del reporte. Estos valores se cifran utilizando el algoritmo **_BCrypt_** de la siguiente manera:

`signature = BCrypt(transaction_id + '-' + password_for_encryption + '-' + generation_date)`

Para validar que sea Mercado Pago quien emitió la notificación, es necesario utilizar la **_función de verificación_**  ofrecida por el algoritmo de **_BCrypt_** para el lenguaje deseado.

**Ejemplo en Java:**

`BCrypt.checkpw(transaction_id + '-' + password_for_encryption + '-' + generation_date, payload_signature)`

> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/account-money/glossary) de Todas las transacciones para revisarlo cuando necesites o quieras consultar algún término técnico.