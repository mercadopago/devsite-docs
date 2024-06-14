# Procesamiento de archivos

Mercado Pago ofrece una solución eficiente para la gestión de deudas y la generación de links masivos, permitiendo el uso de un servicio SFTP para procesar la información contenida en archivos. 

Al procesar un archivo nuevo, se realiza una validación de la estructura y el contenido de la información. La frecuencia para realizar cargas depende totalmente de tu lógica de negocio, ya que la gestión de las facturas depende de procesos externos a Mercado Pago, como la generación de nuevas facturas.

Para más información, lee los detalles del flujo de procesamiento de archivos a continuación.

## Flujo funcional

1. El usuario genera y carga un archivo que contiene la información a procesar, respetando el formato correcto para el archivo de carga. Para más información, consulta las [instrucciones para la configuración de un archivo](/developers/es/docs/links-and-debts/format-specifications). 
| Domain               | Directory          |
|----------------------|--------------------|
| sftp.mercadolibre.io| `selfserviceinput`|

2. El sistema procesa el archivo y realiza validaciones de formato y del contenido de la información. Luego, retorna un archivo `.zip` con los resultados de estas validaciones. Si se detectan errores, el archivo de resultados indica la fila y la naturaleza del error. Para obtener más detalles, puedes consultar la sección de [Errores en el procesamiento](/developers/es/docs/links-and-debts/validations).
| Domain               | Directory          |
|----------------------|--------------------|
| sftp.mercadolibre.io| `selfserviceoutput`|

> WARNING
>
> Importante
>
> En caso de existir errores, el sistema continuará procesando las filas correctas (OK), ya sea para generar nuevos enlaces o para cargar deudas. Las filas con errores se registran en el archivo de errores. Los enlaces y deudas generados en cargas previas no se ven afectados por este nuevo procesamiento.

3. Para el flujo de Links masivos, el sistema procesa la información y devuelve los Links de pago generados en el archivo _success_.
| Domain               | Directory          |
|----------------------|--------------------|
| sftp.mercadolibre.io| `selfserviceoutput`|

4. Después de procesar con éxito el archivo para la carga de deudas en la Wallet de Mercado Pago, se programan notificaciones y correos electrónicos para los usuarios pagadores. 
    - Las notificaciones push se envían a aquellos pagadores que tengan una cuenta en Mercado Pago y se hayan registrado en la opción "Agenda" dentro de "Cuentas y Servicios" de la cuenta. 
    - Los correos electrónicos se envían a las direcciones proporcionadas en el archivo de entrada, siempre y cuando no hayan sido excluidas de las notificaciones.
El envío de las notificaciones push y de los correos electrónicos se hará luego de que finalice el procesamiento, siempre que sea dentro del horario de 8:00 a 19:30 horas. En caso de cargas fuera de este horario, las comunicaciones serán agendadas para las 8:00 horas del día siguiente.

> NOTE
>
> Nota
> 
> Los archivos permanecen disponibles durante 7 días después de la carga. Actualmente, no está disponible la opción de realizar actualizaciones directas en una fila que haya sido cargada previamente.

![Fluxograma](/images/recaudos/fluxograma.png)
