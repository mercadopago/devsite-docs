## Configuración del FileZilla

FileZila es un proveedor SFTP de código abierto que te permitirá gestionar la subida y descarga de archivos de forma sencilla. Si bien puedes elegir utilizar otro proveedor SFTP,  en esta documentación vas a encontrar cómo configurarlo en caso de que desees hacerlo.

1. En el menú, selecciona **File > Site Manager**.
2. Haz clic en **New Site** e ingresa el nombre deseado para el sitio.
3. Selecciona el protocolo SFTP.
4. Ingresa el dominio `sftp.mercadolibre.io` para producción o `sftp-qa.mercadolibre.io` para prueba.
5. En "Logon Type", elige **Key file**.
6. Ingresa el usuario proporcionada por Mercado Pago durante la configuración del SFTP.  Por ejemplo, `user_seller_sftp_ml`.
7. Haz clic en **Conectar**.
Después de esto, se mostrarán las siguientes directorios disponibles:
- Self-Service-Input
- Self-Service-Output

## Cargar un archivo 
En en panel de FileZilla, encontrarás dos ventanas. La de la izquierda representa tu computador, y la  de la derecha, el servidor SFTP. Por lo tanto, la carga de archivos puede ser realizada arrastrando el contenido que deseas subir, y soltándolo en la ventana del servidor.


> WARNING
>
> Importante
>
> Si activaste tus notificaciones, recuerda ingresar un correo electrónico o usuario con el que puedas probar la recepción de las mismas.

![1](/images/recaudos/filezilla1.png)

## Descargar un archivo de resultado y reporte

Un archivo de resultados contiene el procesamiento del archivo de deudas y/o enlaces masivos cargados. Por otro lado, el archivo de informe proporciona el informe de deudas y/o enlaces masivos.

Para descargar un archivo de resultado y reporte, arrastra y suelta el archivo desde la ventana derecha, correspondiente al servidor SFTP, hacia la izquierda, correspondiente a tu computador. 

De esta manera, el archivo se encontrará automáticamente disponible en tu directorio.

![2](/images/recaudos/filezilla2.png)