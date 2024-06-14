# Requisitos previos

Para poder comenzar a utilizar la herramienta de Gestión de deudas y Links masivos de Mercado Pago, debes ser dado de alta por el área comercial. Para ello, se requerirá la siguiente información.

> WARNING
>
> Importante
>
> Los datos deben ser compartidos con el consultor comercial a través de una hoja de cálculo, o enviados mediante el ticket previamente creado para este fin, según la orientación proporcionada.

| Dato                             | Descripción                                                                                                                                                      | Valores posibles/Ejemplos                                                                                           |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Site                         | País donde opera el vendedor.                                                                                                                                    | Deudas: MLA (Argentina), MLM (México) Links: MLA (Argentina), MLB (Brasil), MCO (Colombia), MLC (Chile), MLM (México), MPE (Perú), MLU (Uruguay)        |
| Usuario Mercado Pago         | El `user_ID` de Mercado Pago del vendedor. Se trata del número de identificación de la cuenta de Mercado Pago que recibe el dinero de las ventas, es decir, la cuenta responsable de la recaudación de los valores. Puedes encontrarlo en el Panel del Desarrollador al acceder a cualquier aplicación. | 1117105806                                                                                                                                                            |
| Nombre de la empresa que será visible para el pagador | Nombre del vendedor que se mostrará al pagador dentro de las opciones de pago y búsqueda.                                                        | Nombre visible de la empresa.                                                                                      |

## Billetera 

Complete los siguientes datos en caso de que el vendedor publique deudas en la billetera de Mercado Pago:

| Dato                        | Descripción                                                                                                         | Valores posibles/Ejemplos                                                                                                    |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Identificación del cliente  | Tipo de identificador que utilizará el vendedor para distinguir a su cliente.                                      | DNI / CUIT / CUIL (sólo para Argentina) <br> Código del cliente                                                                         |
| Formato del identificador del cliente | Define los caracteres que puede obtener el identificador.                                                          | Números; Letras; Números y letras                                                                                            |
| Segment                     | Segmento de mercado al que pertenece la empresa.                                                                   | telecom (servicios de telecomunicaciones), energy (servicios de energía), gas (servicios de gas), government (empresas gubernamentales), financial (sector financiero), water (servicios de agua/saneamiento), insurance (servicios de seguros), catalog (empresas de datos/información), wallet (sector financiero/carteras digitales), utilities (servicios de utilidad pública), health (salud), ecommerce (empresas de comercio en línea), teaching (escuelas y cursos), other (otros), transport (movilidad), electricity (empresas de electricidad), bank (sector bancario), penalty (penalización), sanitation (empresas de saneamiento), subscriptions (servicios de suscripción), municipality (servicios y empresas municipales) |
| Categoría del producto      | Categoría del producto de la empresa.                                                                              | electricity (empresas de eletricidad), gas (servicios de gas), generic (genérico), home (hogar), tv (televisión), phone (teléfono), water (servicios de agua/saneamiento), teaching (escuelas y cursoss), catalog (empresas de datos/información), government (empresas gubernamentales), telecom (servicios de telecomunicación), transport (movilidad), subscriptions (servicios de suscripciones)                     |
| Medios de Pago      | Medios de pago que la empresa desea habilitar a sus pagadores.                                                                              | dinero en cuenta (obligatorio), tarjeta de crédito, tarjeta de débito, medios offline (tickets), consumer credits (Mercado Crédito), debin (exclusivo para Argentina)                     |
| Logos                       | Imágenes que serán mostradas a los pagadores en la billetera de Mercado Pago (opcional).                        | Los logos a cargar deben estar en formato .jpg o .png y deben pesar hasta 5 MB.  |

## SFTP

Complete los siguientes datos en caso de que el vendedor utilice SFTP para carga y descarga de información:

| Dato                        | Descripción                                                                                   | Valores posibles/Ejemplos                                                                                                    |
|-----------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Razón Social Empresa        | Nombre legal de la empresa.                                                                                         |  Ejemplo: Mercado Libre SA                                                                                                                       |
| Tax ID                      | Identificador fiscal de la empresa.                                                                                         | Ejemplo: CUIT en Argentina, CNPJ en Brasil.                                                                                                                        |
| Mail de contacto tercero    | Cuenta de e-mail del vendedor.                                                               | melina@example.com                                                                                                                        |
| SFTP - Nombre               | Responsable del usuario SFTP.                                                                | Melina                                                                                                                         |
| SFTP - Email                | Email del responsable del usuario SFTP.                                                       | ana@example.com                                                                                                                         |
| SFTP - Teléfono             | Teléfono del responsable del usuario SFTP.                                                    | XXXXX-YYYY                                                                                                                          |
| SFTP - Clave Pública SSH    | Clave pública asociada al usuario que se conectará a SFTP. Para crear la clave, accede a la documentación [Cómo crear una clave pública/privada SSH](/developers/es/docs/links-and-debts/public-and-private-key). | Clave generada con el comando `ssh-keygen -t rsa -b 4096`.                                                                |
| SFTP - Rangos IP             | Lista de rangos de IP pública que utilizará el vendedor para subir los archivos.                        | Formato 123.123.123.123/32                                                                                                  |
