# Descargar un archivo 

Utilizando la terminal, aprende cómo descargar un archivo via [Consola SFTP]() y [SFTP batch scripting](). La Consola SFTP es adecuada para uso manual, pero no para automatizaciones. Para automatizaciones, utiliza SFTP batch scripting, que requiere la creación de un script SFTP, donde cada línea representa un comando SFTP. 

## Consola SFTP

Tomando como ejemplo el código a continuación, sigue los siguientes pasos para descargar un archivo usando la consola SFTP.

```terminal
UY0FVFGW103Q05P:~ pabloengonza$ cd $HOME/demo
UY0FVFGW103Q05P:~ pabloengonza$ ls
UY0FVFGW103Q05P:~ pabloengonza$ sftp pg_sap@sftp-qa.mercadolibre.io
Connected to sftp-qa.mercadolibre.io.
sftp> ls
selfserviceinitiative	selfserviceinitiativeout
sftp> cd selfserviceinitiativeout
sftp> ls
report_589_216_20230804.csv	result_589_6_20230804.csv
sftp> get result_589_216_20230804.csv
Fetching /selfserviceinitiativeout/result_589_6_20230804.csv to result_589_6_20230804.csv
/selfserviceinitiativeout/result_589_6_20230804.csv
/Users/pabloengonza/debt_589_6_20230804.csv
sftp> get report_589_216_20230804.csv
Fetching /selfserviceinitiativeout/report_589_216_20230804.csv to report_589_216_20230804.csv
/selfserviceinitiativeout/report_589_216_20230804.csv
sftp> bye
UY0FVFGW103Q05P:~ demo pabloengonza$ ls
report_589_216_20230804.csv result_589_6_20230804.csv
```

1. Dirígete a la carpeta donde deseas descargar el archivo utilizando el comando "$HOME/${directoriodescarga}", donde “directoriodescarga” corresponde al nombre de la carpeta. En la primera línea del código a continuación, puedes ver un ejemplo de cómo hacerlo.
2. Inicia sesión en el SFTP, lo que abrirá la consola SFTP, como se indica en la línea 3.
3. Navega hasta la carpeta "Self-Service-Output", como se indica en la línea 7 del código.
4. Lista el contenido con el comando ls, como se indica en la línea 8 del código a continuación (opcional, solo para verificar qué archivo descargar).
5. Obtén el archivo resultado que está en el SFTP usando el comando `get ${archivoresultado`, como se indica en la línea 10.
6. Obtén el archivo de informe que está en el SFTP usando el comando `get ${archivoreporte}`, como se indica en la línea 14.
7. Sal de la consola SFTP, como se indica en la línea 17 del código.
8. Lista el directorio "$HOME/${directoriodescarga}" para verificar que los archivos se hayan descargado, como se indica en la línea 18 del código a continuación.

## SFTP batch scripting

Al igual que la descarga de un archivo via SFTP batch scripting, creamos en "$HOME/demo" un archivo `download_sftp_script` con el siguiente contenido:

```terminal
cd selfserviceinitiativeout
ls
get result_589_6_20230804.csv
get report_589_216_20230804.csv
bye
```

Esta es el resultado de la ejecución batch:

```terminal
UY0FVFGW103Q05P: demo pabloengonza$ sftp -b download_sftp_script pg_sap@sftp-qa.mercadolibre.io
sftp> cd selfserviceinitiativeout
sftp> ls
report_589_216_20230804.csv	result_589_6_20230804.csv
sftp> get result_589_6_20230804.csv
sftp> get report_589_216_20230804.csv
sftp> bye
UY0FVFGW103Q05P:demo pabloengonza$ ls
download_dftp_script	report_589_216_20230804.csv	result_589_6_20230804.csv
```