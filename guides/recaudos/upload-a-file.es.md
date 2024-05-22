# Cargar un archivo

Utilizando la terminal, puedes cargar un archivo vía [Consola SFTP]() o [SFTP batch scripting](). Consola SFTP es adecuada para uso manual, pero no para automatizaciones. Para automatizaciones, utiliza SFTP batch scripting, que requiere la creación de un script SFTP, donde cada línea representa un comando SFTP. 

## Consola SFTP

Tomando como ejemplo el código a continuación, sigue los siguientes pasos para cargar un archivo usando la consola SFTP.

```terminal
UY0FVFGW103Q05P: ~ pabloengonza$ sftp pg_sap@sftp-qa.mercadolibre.io
Connected to sftp-qa.mercadolibre.io.
sftp> ls
selfserviceinitiative	selfserviceinitiativeout
sftp> cd selfserviceinitiative
sftp> ls
sftp> put /	Users/pabloengonza/debt_589_6_20230804.csv
Uploading /Users/pabloengonza/debt_589_6_20230804.csv to /selfserviceinitiative/debt_589_6_20230804.csv
/Users/pabloengonza/debt_589_6_20230804.csv
sftp> ls
debt_589_6_20230804.csv
sftp> bye
```

1. Inicia sesión en SFTP para abrir la consola SFTP, como se indica en la línea 1 del código a continuación.
2. e a la carpeta 'iniciativa in', como se indica en la línea 5 del código a continuación.
3. Lista el contenido con el comando 'ls', como se indica en la línea 6 del código (opcional, solo para revisar antes de cargar un archivo).
4. Carga el archivo usando el comando put ${absolutePathFileName,como se indica en la línea 7 del código a continuación, pudiendo ser la ruta relativa.
5. Verifica que se haya subido, como se indica en la línea 10 del código.
6. Sal de la consola SFTP, como se indica en la línea 12.

## SFTP batch scripting

Un script batch sería el contenido de los siguientes comandos:

```terminal
ls
cd selfserviceinitiative
put /Users/pabloengonza/debt_589_6_20230804.csv
ls
bye
```

El script SFTP se ejecuta con el siguiente comando, donde `batch_script_file_name` es el nombre del archivo con los comandos SFTP.
`shell> sftp -b batch_script_file_name username@sftp.mercadolibre.io`

> NOTE
>
> Nota
>
> En este ejemplo, se utilizan el nombre y el directorio por defecto cuando se genera la clave `ssh-rsa`. De lo contrario, se debe utilizar el parámetro `-i`.

Este es el resultado  de la ejecución batch:

```terminal
UY0FVGW103Q0SP: ~ pabloengonza$ sftp -b upload_sftp_script pg_sap@sftp-qa.mercadolibre.io sftp> ls
selfserviceinitiative	selfserviceinitiativeout
sftp> cd selfserviceinitiative
sftp> put /Users/pabloengonza/debt_589_6_20230804.csv
sftp> ls
debt_589_6_20230804.csv
sftp> bye
UY0FVFGW103Q05P:~ pabloengonza$
```