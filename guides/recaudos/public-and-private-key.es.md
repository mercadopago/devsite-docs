## Cómo crear una clave pública/privada SSH

La clave pública `ssh-rsa` se refiere a la parte pública del par de claves (junto con la clave privada correspondiente) utilizada para autenticación y cifrado en SSH. Esta clave pública se comparte con Mercado Pago para permitir la autenticación.

Durante el proceso de integración, debes proporcionar la clave pública al equipo, que la configurará en el servicio SFTP de Mercado Pago. 

Para generar esta clave, ejecuta el comando en tu terminal:

```terminal
ssh-keygen -t rsa -b 4096 -C
```

> NOTE
>
> Nota
>
> `-b 4096` corresponde a 4096 bits, que son la cantidad recomendada, pero no obligatoria, para la creación de las llaves SSH.

Como resultado, se generarán dos claves: una **pública** y una **privada**. Mientras la llave pública será proveida a Mercado Pago, la clave privada será utilizada para establecer la conexión con el servidor SFTP.

Ambas llaves (pública y privada) deben estar almacenadas en el mismo directorio de la computadora desde el que se establecerá la conexión al servidor SFTP de Mercado Pago.

La clave pública generada consta de 3 columna:
- Algoritmo
- Valor de la clave pública
- host

Ejemplo:
```
ssh-rsa CCCCB3NzaC1yc2EAAAADAQABAAABgQDIuC0emFLk1nGC1MCmJDqHzJy9N3WGJFCrDY8EuhcrpCP+5R6X/LnVESwn291IR2B7cO6jZtv6v8OohdWl9nCfNndm5w9HRuujrbpPebADGbrG89srHCuQVLY8zg+/cvLk0yGGvsSkpCZsJDm74VHngkwxdnR3T0dfpHFG/JcFjeNPpCW4d9N9gfkpmclBpfB14VMLoQ2K2xwLbujaxra0p0EbEbc/eq1vdN+m2Ja7WyR1L+66Cp3NKw1+suFIlP2H58kn7988JZ4baenfwOv8qQZu6WqsyJTecSwDgBn6Jr7WbpKfq2+nARif96nip5rFwxKWkHs7pDGu2XniurzlGe7MQaRc/XLdeAewS1qkt9qS51b1hy816KvcBFC5zPOH2P3yFWTcEFDT3WUfJ0o1MQk22eAHuCSK1tjRdDCGoB5sCjYYGCPonIaRc85CRNi/5CpD0i+xmopW1gOK6Q7dZSj6kSaphK1WK47Mdn20Eeu+OADLqnWN/np2qWyK/68= user@host
```

Después de generar las claves, comparte con el equipo de Mercado Pago los datos necesarios detallados en la sección de [Requisitos previos](/developers/es/docs/links-and-debts/prerequisites) y solo la clave pública generada con las 3 columnas descritas. 

Con base en esta información, Mercado Pago creará y proporcionará para la integración un `user_name`, el host (`sftp.mercadolibre.io`) y el `seller_Id`, identificador interno necesario para el nombre de los archivos generados. Con estos datos proporcionados por Mercado Pago, podrás completar la integración.