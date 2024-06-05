# Descargar un archivo 

Utilizando la terminal, aprende cómo descargar un archivo via [Consola SFTP](/developers/es/docs/links-and-debts/integration-configuration/download#bookmark_consola_sftp) y [SFTP batch scripting](/developers/es/docs/links-and-debts/integration-configuration/download#bookmark_sftp_batch_scripting). La Consola SFTP es adecuada para uso manual, pero no para automatizaciones. Para automatizaciones, utiliza SFTP batch scripting, que requiere la creación de un script SFTP, donde cada línea representa un comando SFTP. 

## Consola SFTP

Tomando como ejemplo el código a continuación, sigue los siguientes pasos para descargar un archivo usando la consola SFTP.

```terminal
UY0FVFGW103Q05P:~ user$ cd $HOME/demo
UY0FVFGW103Q05P:~ user$ ls
UY0FVFGW103Q05P:~ user$ sftp pg_sap@sftp-qa.mercadolibre.io
Connected to sftp-qa.mercadolibre.io.
sftp> ls
selfserviceinitiative	selfserviceinitiativeout
sftp> cd selfserviceinitiativeout
sftp> ls
report_589_216_20230804.csv	result_589_6_20230804.csv
sftp> get result_589_216_20230804.csv
Fetching /selfserviceinitiativeout/result_589_6_20230804.csv to result_589_6_20230804.csv
/selfserviceinitiativeout/result_589_6_20230804.csv
/Users/user/debt_589_6_20230804.csv
sftp> bye
UY0FVFGW103Q05P:~ demo user$ ls
report_589_216_20230804.csv result_589_6_20230804.csv
```

1. Dirígete a la carpeta donde deseas descargar el archivo utilizando el comando "cd $HOME/${directoriodescarga}", donde “directoriodescarga” corresponde al nombre de la carpeta. En la primera línea del código, puedes ver un ejemplo de cómo hacerlo.
2. Inicia sesión en el SFTP, lo que abrirá la consola SFTP, como se indica en la línea 3.
3. Navega hasta la carpeta "Self-Service-Output", como se indica en la línea 7 del código.
4. Lista el contenido con el comando ls, como se indica en la línea 8 del código (opcional, solo para verificar qué archivo descargar).
5. Obtén el archivo resultado que está en el SFTP usando el comando `get ${archivoresultado}`, como se indica en la línea 10.
6. Sal de la consola SFTP, como se indica en la línea 13 del código.
7. Lista el directorio "$HOME/${directoriodescarga}" para verificar que los archivos se hayan descargado, como se indica en la línea 14 del código.

## SFTP batch scripting

Al igual que la descarga de un archivo via SFTP batch scripting, creamos en "$HOME/demo" un archivo `download_sftp_script` con el siguiente contenido:

```terminal
cd selfserviceinitiativeout
get result_589_6_20230804.csv
bye
```

1. Dirígete a la carpeta desde donde deseas descargar el archivo utilizando el comando `cd selfserviceinitiativeout`.
2. Obtén el archivo resultado que está en el SFTP usando el comando `get ${archivoresultado}`, como se indica en la línea 2.

Esta es el resultado de la ejecución batch:

```terminal
UY0FVFGW103Q05P: demo user$ sftp -b download_sftp_script pg_sap@sftp-qa.mercadolibre.io
sftp> cd selfserviceinitiativeout
sftp> get result_589_6_20230804.csv
sftp> get report_589_216_20230804.csv
sftp> bye
UY0FVFGW103Q05P:demo user$ ls
download_dftp_script	report_589_216_20230804.csv	result_589_6_20230804.csv
```