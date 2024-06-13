## How to create an SSH public/private Key

The SSH public key `ssh-rsa` refers to the public part of the key pair (along with the corresponding private key) used for authentication and encryption in SSH. This public key is shared with Mercado Pago to enable authentication.

During the integration process, you need to provide the public key to the team, which will configure it in the Mercado Pago SFTP service.

To generate this key, execute the following command in your terminal:

```terminal
ssh-keygen -t rsa -b 4096
```

> NOTE
>
> `-b 4096` corresponds to 4096 bits, which is the recommended, but not mandatory, amount for SSH key creation.

As a result, two keys will be generated: one **public** and one **private**. While the public key will be provided to Mercado Pago, the private key will be used to establish the connection to the SFTP server.

Both keys (public and private) must be stored in the same directory on the computer from which the connection to the Mercado Pago SFTP server will be established.

The generated public key consists of 3 columns:
- algorithm
- public key value
- host / comment

Example:
```
ssh-rsa CCCCB3NzaC1yc2EAAAADAQABAAABgQDIuC0emFLk1nGC1MCmJDqHzJy9N3WGJFCrDY8EuhcrpCP+5R6X/LnVESwn291IR2B7cO6jZtv6v8OohdWl9nCfNndm5w9HRuujrbpPebADGbrG89srHCuQVLY8zg+/cvLk0yGGvsSkpCZsJDm74VHngkwxdnR3T0dfpHFG/JcFjeNPpCW4d9N9gfkpmclBpfB14VMLoQ2K2xwLbujaxra0p0EbEbc/eq1vdN+m2Ja7WyR1L+66Cp3NKw1+suFIlP2H58kn7988JZ4baenfwOv8qQZu6WqsyJTecSwDgBn6Jr7WbpKfq2+nARif96nip5rFwxKWkHs7pDGu2XniurzlGe7MQaRc/XLdeAewS1qkt9qS51b1hy816KvcBFC5zPOH2P3yFWTcEFDT3WUfJ0o1MQk22eAHuCSK1tjRdDCGoB5sCjYYGCPonIaRc85CRNi/5CpD0i+xmopW1gOK6Q7dZSj6kSaphK1WK47Mdn20Eeu+OADLqnWN/np2qWyK/68= user@host
```

After generating the keys, share with the Mercado Pago team the necessary data detailed in the [Prerequisites](/developers/es/docs/links-and-debts/prerequisites) section and only the generated public key with the 3 described columns.
Based on this information, Mercado Pago will create and provide for integration a `user_name`, the host (`sftp.mercadolibre.io`), and the `seller_Id`, an internal identifier necessary for the naming of the generated files. With these data provided by Mercado Pago, you will be able to complete the integration.