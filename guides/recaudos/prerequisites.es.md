# Requisitos previos

Para poder comenzar a utilizar la herramienta de Gestión de deudas y Links masivos de Mercado Pago, debes ser dado de alta por el área comercial. Para ello, se requerirá la siguiente información.

> WARNING
>
> Importante
>
> Los datos deben ser compartidos con el consultor comercial a través de una hoja de cálculo o enviados mediante el ticket previamente creado para este fin, según la orientación proporcionada.

| Dato                             | Descripción                                                                                                                                                      | Valores posibles/Ejemplos                                                                                           |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Site                         | País donde opera el vendedor.                                                                                                                                    | Deudas: MLA (Argentina), MLM (México) Links: MLA (Argentina), MLB (Brasil), MCO (Colombia), MLC (Chile), MLM (México), MPE (Perú), MLU (Uruguay)        |
| Usuario Mercado Pago         | El user_ID de Mercado Pago del vendedor. Se trata del número de identificación de la cuenta de Mercado Pago que recibe el dinero de las ventas, es decir, la cuenta responsable de la recaudación de los valores. Puedes encontrarlo en el panel del desarrollador al acceder a cualquier aplicación. | 1117105806                                                                                                                                                            |
| Nombre de la empresa que será visible para el pagador | Nombre del vendedor que se mostrará al pagador dentro de las opciones de pago y búsqueda.                                                        | Nombre visible de la empresa.                                                                                      |

## Billetera 

Complete los siguientes datos en caso de que el vendedor publique deudas en la billetera de Mercado Pago:

| Dato                        | Descripción                                                                                                         | Valores posibles/Ejemplos                                                                                                    |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Identificación del cliente  | Tipo de identificador que utilizará el vendedor para distinguir a su cliente.                                      | DNI / CUIT / CUIL (sólo para MLA) <br> Código del cliente                                                                         |
| Formato del identificador del cliente | Define los caracteres que puede obtener el identificador.                                                          | Números, Letras, Números y letras                                                                                            |
| Segment                     | Segmento de mercado al que pertenece la empresa.                                                                   | telecom, energy, gas, government, financial, water, insurance, catalog, wallet, utilities, health, ecommerce, teaching, other, transport, electricity, bank, penalty, sanitation, subscriptions, municipality |
| Categoría del producto      | Categoría del producto de la empresa.                                                                              | electricity, gas, generic, home, tv, phone, water, teaching, catalog, government, telecom, transport, sube                     |
| Medios de Pago      | Medios de pago que la empresa desea habilitar a sus pagadores.                                                                              | account money (must), tarjeta de crédito, tarjeta de débito, medios offline (tickets), consumer credits (Mercado Credits), debin (exclusivo para Argentina - MLA)                     |
| Logos                       | Imágenes que serán mostradas a los pagadores en la billetera de Mercado Pago (opcional).                        | Los logos a cargar deben estar en formato .jpg o .png y deben pesar hasta 5 MP. El tamaño del logo debe ser de hasta 50x50px y la imagen debe ser circular. |

## SFTP

Complete los siguientes datos en caso de que el vendedor utilice SFTP para carga y descarga de información:

| Dato                        | Descripción                                                                                   | Valores posibles/Ejemplos                                                                                                    |
|-----------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Razón Social Empresa        |                                                                                          |                                                                                                                         |
| Tax ID                      | Identificador fiscal de la empresa.                                                                                         | CUIT en Argentina, CNPJ en Brasil.                                                                                                                        |
| Mail de contacto tercero    | Cuenta de e-mail del vendedor.                                                               |                                                                                                                         |
| Formato del archivo         | Formato de archivo que el vendedor creará al subir los datos.                               | CSV                                                                                                                          |
| SFTP - Nombre               | Responsable del usuario SFTP.                                                                |                                                                                                                         |
| SFTP - Email                | Email del responsable del usuario SFTP.                                                       |                                                                                                                         |
| SFTP - Teléfono             | Teléfono del responsable del usuario SFTP.                                                    |                                                                                                                         |
| SFTP - Clave Pública SSH    | Clave pública asociada al usuario que se conectará a SFTP. Para crear la clave, accede a la documentación [Cómo crear una clave pública/privada SSH](). | Clave generada con el comando `ssh-keygen -t rsa -b 4096 -C`.                                                                |
| SFTP - Rango IP             | Rango de IP pública que utilizará el vendedor para subir los archivos.                        | Formato 123.123.123.123/32                                                                                                  |
