# Cargar un archivo

Utilizando la terminal, puedes cargar un archivo vía [Consola SFTP](/developers/es/docs/links-and-debts/integration-configuration/upload#bookmark_consola_sftp) o [SFTP batch scripting](/developers/es/docs/links-and-debts/integration-configuration/upload#bookmark_sftp_batch_scripting). La consola SFTP es adecuada para uso manual, pero no para automatizaciones. Para estos casos, utiliza SFTP batch scripting, que requiere la creación de un script donde cada línea representa un comando SFTP.

> Recomendamos evitar subir archivos con el mismo nombre, ya que esto podría desencadenar un reprocesamiento. Como buena práctica, y para facilitar la identificación de los archivos de entrada y salida, se sugiere agregar una marca de tiempo o _timestamp_ al final del nombre del archivo.

## Consola SFTP

Usando como ejemplo el código a continuación, sigue estos pasos para cargar un archivo utilizando la consola SFTP.

```terminal
UY0FVFGW103Q05P: ~ user$ sftp pg_sap@sftp-qa.mercadolibre.io
Connected to sftp-qa.mercadolibre.io.
sftp> ls
selfserviceinput	selfserviceoutput
sftp> cd selfserviceinput
sftp> ls
sftp> put /	Users/user/debt_589_6_20230804.csv
Uploading /Users/user/debt_589_6_20230804.csv to /selfserviceinput/debt_589_6_20230804.csv
/Users/user/debt_589_6_20230804.csv
sftp> ls
debt_589_6_20230804.csv
sftp> bye
```

1. Inicia sesión en SFTP para abrir la consola SFTP, como se indica en la línea 1 del código.
2. Accede a la carpeta 'selfserviceinput', como se indica en la línea 5 del código.
3. Lista el contenido con el comando `ls`, como se indica en la línea 6 del código (opcional, solo para revisar antes de cargar un archivo).
4. Carga el archivo usando el comando `put ${absolutePathFileName}`, como se indica en la línea 7 del código, pudiendo ser la ruta relativa.
5. Verifica que se haya subido, como se indica en la línea 10 del código.
6. Sal de la consola SFTP, como se indica en la línea 12.

## SFTP batch scripting

Los comandos del ejemplo anterior en consola, para el batch scripting, serían los siguientes:

```terminal
ls
cd selfserviceinput
put /Users/user/debt_589_6_20230804.csv
ls
bye
```

El script SFTP se ejecuta con el siguiente comando, donde `batch_script_file_name` es el nombre del archivo con los comandos SFTP.

```
shell> sftp -b batch_script_file_name username@sftp.mercadolibre.io
```

> NOTE
>
> Nota
>
> En este ejemplo, se utilizan el nombre y el directorio por defecto cuando se genera la clave `ssh-rsa`. De lo contrario, se debe utilizar el parámetro `-i`.

Este es el resultado  de la ejecución batch:

```terminal
UY0FVGW103Q0SP: ~ user$ sftp -b upload_sftp_script pg_sap@sftp-qa.mercadolibre.io sftp> ls
selfserviceinput	selfserviceoutput
sftp> cd selfserviceinput
sftp> put /Users/user/debt_589_6_20230804.csv
sftp> ls
debt_589_6_20230804.csv
sftp> bye
UY0FVFGW103Q05P:~ user$
```