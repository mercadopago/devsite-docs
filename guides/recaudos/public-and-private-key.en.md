## How to create an SSH public/private Key

The SSH public key `ssh-rs` refers to the public part of the key pair (along with the corresponding private key) used for authentication and encryption in SSH. This public key is shared with Mercado Pago to enable authentication.

During the integration process, you need to provide the public key to the team, which will configure it in the Mercado Pago SFTP service.

To generate this key, execute the following command in your terminal:

```
ssh-keygen -t rsa -b 4096 -C
```

> NOTE
>
> `-b 4096` corresponds to 4096 bits, which is the recommended, but not mandatory, amount for SSH key creation.

As a result, two keys will be generated: one **public** and one **private**. While the public key will be provided to Mercado Pago, the private key will be used to establish the connection to the SFTP server.

Both keys (public and private) must be stored in the same directory on the computer from which the connection to the Mercado Pago SFTP server will be established.

After generating the keys, share with the Mercado Pago team the necessary data detailed in the [Prerequisites](/developers/es/docs/links-and-debts/prerequisites) section and only the generated public key.
Based on this information, Mercado Pago will create and provide for integration a `user_name`, the host (`sftp.mercadolibre.io`), and the `seller_Id`, an internal identifier necessary for the naming of the generated files. With these data provided by Mercado Pago, you will be able to complete the integration.