## Cómo crear una clave pública/privada SSH

La autenticación se realizará mediante la clave pública `ssh-rs`. Durante el proceso de integración, debes proporcionar la clave pública al equipo, que la configurará en el servicio SFTP de Mercado Pago. 

Para generar esta clave, ejecuta el comando en tu terminal:

```
ssh-keygen -t rsa -b 4096 -C
```

> NOTE
>
> Nota
>
> `-b 4096` corresponde a 4096 bits, que son la cantidad recomendada, pero no obligatoria, para la creación de las llaves SSH.

Como resultado, se generarán dos claves: una **pública** y una **privada**. Mientras la llave pública será proveida a Mercado Pago, la clave privada será utilizada para establecer la conexión con el servidor SFTP.

Ambas llaves (pública y privada) deben estar almacenadas en el mismo directorio de la computadora desde el que se establecerá la conexión al servidor SFTP de Mercado Pago.

Después de generar las claves, comparte con el equipo de Mercado Pago los datos necesarios detallados en la sección de [Requisitos previos](/developers/es/docs/links-and-debts/prerequisites) y solo la clave pública generada. 
Con base en esta información, Mercado Pago creará y proporcionará para la integración un `user_name`, el host (`sftp.mercadolibre.io`) y el `seller_Id`, identificador interno necesario para el nombre de los archivos generados. Con estos datos proporcionados por Mercado Pago, podrás completar la integración.