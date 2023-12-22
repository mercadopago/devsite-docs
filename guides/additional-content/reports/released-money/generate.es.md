# Generar reporte

Puedes generar un reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------ a través de tu cuenta de Mercado Pago o mediante la integración a través de la API. Consulta la tabla a continuación para obtener más información.

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

Puedes generar un reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------ a través de tu cuenta de Mercado Pago:

| Canales                    | Descripción                                                                                                                                                                                                                                                                                                                  |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Panel de Mercado Pago      | Es posible crear el reporte manualmente a través del panel de Mercado Pago. Accede a la sección de [Informes y facturación](https://www.mercadopago.com.ar/movements), haz clic en **Ir a reportes de pagos y extractos de cuenta** y selecciona el reporte. Para obtener más información, consulta la documentación [Generar informe desde el panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/panel).                                               |
| Integración vía API | Crea el reporte manualmente o programa su generación según la frecuencia deseada utilizando nuestra integración a través de la API. Para obtener más información, consulta la documentación [Generar informe a través de la API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/api). |

## Características técnicas del reporte

Ten en cuenta la siguiente información técnica siempre que estés creando, programando o configurando un reporte.

### Estructura del reporte

Comprende las características de los elementos que componen tu informe.

| Elemento o acción | Características |
| --- | --- |
| Detalles de las tablas | El detalle de las tablas comprende información generada en día 1 como mínimo. |
| Orden de las columnas | Fija |
| Período máximo | Reportes con datos de hasta 60 días. |
| Moneda | Local (según el país donde esté registrada la cuenta de Mercado Pago). |
| Zona horaria de las columnas con fechas | GMT-4 <br/> <br/> Toma como referencia el lugar desde el que se descarga el reporte. |
| Selección de fechas vía web | Según  el timezone de la cuenta. <br/>Por ejemplo, a la cuenta registrada en Brasil le corresponde el timezone de São Paulo. |

### Exportación del reporte

Todas las opciones disponibles al descargar tu reporte.

| Elemento o acción | Características |
| --- | --- |
| Formato del nombre del archivo | Informe programado o manual:<br/> "prefijo-configurable-<span style='color:#999999;'>fecha-de-creación.csv</span>" <br/> Ejemplo: mitienda-28-05-2024.csv. |
| Formatos de descarga | ._csv_, ._xlsx_ <br/><br/>**Nota**: descarga el reporte en formato ._csv_ para importar los datos y usarlos en otras aplicaciones. Descárgalo en formato ._xlsx_ para leer la información en tablas de hojas de cálculo. |
| Archivo | Los informes generados se guardan en tu cuenta de Mercado Pago. |

## Notificaciones

### Webhook

Webhook, también conocido como "retorno de llamada web", es un método eficiente para recibir información en tiempo real cada vez que ocurre un evento en una aplicación o sistema. Este enfoque permite la transferencia pasiva de datos entre dos sistemas mediante solicitudes HTTP POST. En relación con los informes utilizados en la conciliación, se envía una notificación al usuario que haya configurado este servicio cuando sus archivos sean generados.

| Atributo        | Descripción                         |
|-----------------|-----------------------------------|
| `transaction_id`  | ID de la transacción                   |
| `request_date`    | Fecha de la solicitud               |
| `generation_date` | Fecha de creación                   |
| `files`           | Archivos disponibles              |
| `type`            | Formato del archivo                |
| `url`             | Enlace de descarga                  |
| `name`            | Nombre del archivo                   |
| `status`          | Estado del reporte               |
| `creation_type`   | Creación manual o programada        |
| `report_type`     | Tipo de reporte                 |
| `is_test`         | Determina si es una prueba           |
| `signature`       | Firma digital de la notificación |

### Contraseña para cifrado

La contraseña de cifrado es esencial para asegurar el proceso de notificación al sistema. En el cuerpo del mensaje (_payload_), se envía un atributo llamado **_"signature"_** para validar la origen legítima de la notificación Webhook de Mercado Pago, evitando posibles imitaciones.

La creación de la **_signature_** ocurre mediante la combinación del `transaction_id` con la `contraseña para cifrado` en la sección **_"Notificación por Webhook"_**, junto con la `generation_date` del reporte. Estos valores se cifran utilizando el algoritmo **_BCrypt_** de la siguiente manera:

`signature = BCrypt(transaction_id + '-' + password_for_encryption + '-' + generation_date)`

Para validar que sea Mercado Pago quien emitió la notificación, es necesario utilizar la **_función de verificación_**  ofrecida por el algoritmo de **_BCrypt_** para el lenguaje deseado.

**Ejemplo en Java:**

`BCrypt.checkpw(transaction_id + '-' + password_for_encryption + '-' + generation_date, payload_signature)`

> Ten a mano el [Glosario del Reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/glossary) para revisarlo cuando lo necesites o quieras consultar algún término técnico.