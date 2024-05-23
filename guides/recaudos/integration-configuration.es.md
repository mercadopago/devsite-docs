# Configuración de la integración

El acceso seguro al servidor SFTP será configurado por Mercado Pago utilizando los datos de conexión proporcionados al equipo (SFTP Nombre, Email, Teléfono y Rango IP) y la clave pública para autenticación, tal como se detalla en la sección de [Requisitos previos](). Una vez configurado, será posible [Conectar al SFTP]().

## Conectar con SFTP
Para conectarse al servidor SFTP de Mercado Pago, utilice la clave privada asociada a la clave pública que fue proporcionada a Mercado Pago durante la creación del servidor. Para más información, consulte la documentación [Cómo crear una clave pública/privada SSH]().

Podrá conectarse desde una terminal o desde un script ejecutado desde un cron. El comando a ejecutar es:

`shell> sftp -i ${dirname}/${id_rsa_sftp_ml} ${user_seller_sftp_ml}@sftp.mercadolibre.io`

> NOTE
>
> Nota
>
> En caso de haber utilizado la clave por defecto del protocolo `ssh ($HOME/id_rsa)`, no es necesario el parámetro `-i ${dirname}/${id_rsa_sftp_ml}` anterior.

Ambas las claves (pública y privada) deben ser almacenadas en el mismo directorio en la máquina utilizada para conectarse al servidor SFTP de Mercado Pago. La tabla a continuación describe cómo cada elemento es identificado por Mercado Pago:

| Elemento                        | Identificación desde Mercado Pago    | Detalles                                         |
|---------------------------------|--------------------------------------|--------------------------------------------------|
| **Directorio**                  | `${dirname}`                           | Directorio interno del vendedor                  |
| **Archivo de la clave privada** | `${id_rsa_sftp_ml}`                    | Clave privada para la autenticación en el servidor SFTP |
| **Archivo de la clave pública** | `${id_rsa_sftp_ml}.pub`                | Clave pública compartida con Mercado Pago        |
| **Usuario para conexión**       | `${user_seller_sftp_ml}`               | Usuario proporcionado por Mercado Pago           |
| **Dominio de los servidores SFTP** | `sftp.mercadolibre.io`               | Dominio para acceder a los servidores SFTP       |