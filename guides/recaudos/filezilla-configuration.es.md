# Cliente SFTP

Aunque puedes optar por usar otro proveedor SFTP, en esta documentación abordaremos la configuración del cliente FileZilla, un proveedor SFTP de código abierto que permite gestionar la carga y descarga de archivos de forma sencilla.

Para configurarlo, sigue las instrucciones a continuación:

1. En el menú, selecciona **File > Site Manager**.
2. Haz clic en **New Site** e ingresa el nombre deseado para el sitio.
3. Selecciona el protocolo SFTP.
4. Ingresa el dominio `sftp.mercadolibre.io` para producción.
5. En "Login Type", elige **Key file**.
6. Ingresa el usuario proporcionada por Mercado Pago durante la configuración del SFTP.  Por ejemplo, `user_seller_sftp_ml`.
7. Haz clic en **Conectar**.

Después de esto, se mostrarán las siguientes directorios disponibles:
- selfserviceinput
- selfserviceoutput 

## Cargar un archivo 

En el panel de FileZilla, encontrarás dos ventanas. La de la izquierda representa tu computador, y la  de la derecha, el servidor SFTP. La carga de archivos puede ser realizada arrastrando el contenido que deseas subir, y soltándolo en la ventana del servidor.

![1](/images/recaudos/filezilla1.png)

## Descargar un archivo de resultado

Un archivo de resultados contiene el procesamiento del archivo de deudas o de enlaces masivos cargados. Para descargar un archivo de resultado, arrastra y suelta el archivo desde la ventana derecha, correspondiente al servidor SFTP, hacia la izquierda, correspondiente a tu computador. 

De esta manera, el archivo se encontrará automáticamente disponible en tu directorio.

![2](/images/recaudos/filezilla2.png)