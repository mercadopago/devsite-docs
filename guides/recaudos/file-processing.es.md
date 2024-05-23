# Procesamiento de archivos

Al procesar un archivo nuevo, se realiza una validación de la estructura y el contenido de la información. La frecuencia para realizar cargas depende totalmente de su lógica de negocio, ya que la gestión de las facturas depende de procesos externos a Mercado Pago, como la generación de nuevas facturas.

## Flujo funcional
A continuación, se detalla el funcionamiento del producto:

1. El usuario genera y carga un archivo conteniendo la información a procesar, respetando el formato correcto para el archivo de carga. Para más información, consulta la [documentación sobre las especificaciones de formato](). 
| Domain               | Directory          |
|----------------------|--------------------|
| sftp.mercadolibre.io| `Self-Service-Input`|

2. El sistema procesa el archivo y realiza validaciones de formato y el contenido de la información (para obtener más detalles, consulta la sección de [Validaciones]()). Luego, retorna un archivo con los resultados de estas validaciones. Si se detectan errores, el archivo de resultados indica la fila y la naturaleza del error.
| Domain               | Directory          |
|----------------------|--------------------|
| sftp.mercadolibre.io| `Self-Service-Input`|

> WARNING
>
> Importante
>
> En caso de existir errores, el sistema continuará procesando las filas correctas (OK), ya sea para generar nuevos enlaces o para cargar deudas. Las filas con errores se registran en el archivo de errores. Los enlaces y deudas generados en cargas previas no se ven afectados por este nuevo procesamiento.

3. Para el flujo de Links masivos, el sistema procesa la información y devuelve una primera versión del archivo con el Layout de reporte, que incluye los Links de pago generados.
| Domain               | Directory          |
|----------------------|--------------------|
| sftp.mercadolibre.io| `Self-Service-Input`|

4. Después de procesar con éxito el archivo para la carga de deudas en la Wallet de Mercado Pago, se programan notificaciones y correos electrónicos para los usuarios pagadores. 
    - Las notificaciones push se envían a aquellos pagadores que tengan una cuenta en Mercado Pago y se hayan registrado en la opción "Agenda" dentro de "Cuentas y Servicios" de la cuenta. 
    - Los correos electrónicos se envían a las direcciones proporcionadas en el archivo de entrada, siempre y cuando no hayan sido excluidas de las notificaciones.
El envío de las notificaciones push y de los correos electrónicos está programado para que se realice a las 8:00, 12:00, 16:00 y 20:00 horas.

> NOTE
>
> Nota
> 
> Los archivos permanecen disponibles durante 7 días después de la carga. Actualmente, no está disponible la opción de realizar actualizaciones directas en una fila que haya sido cargada previamente.

![Fluxograma](/images/recaudos/fluxograma.png)
