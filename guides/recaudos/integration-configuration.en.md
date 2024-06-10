# Integration configuration

Secure access to the SFTP server will be configured by Mercado Pago using the connection data provided to the team (SFTP Name, Email, Phone, and IP Range) and the public key for authentication, as detailed in the [Prerequisites](/developers/en/docs/links-and-debts/prerequisites) section. Once configured, it will be possible to Connect to the SFTP.

## Connect with SFTP
To connect to the Mercado Pago SFTP server, use the private key associated with the public key provided to Mercado Pago during server creation. For more information, see the documentation [How to create an SSH public/private key](/developers/en/docs/links-and-debts/public-and-private-key).

You can connect from a terminal or from a script executed from a cron. The command to execute is:

```terminal
shell> sftp -i ${dirname}/${id_rsa_sftp_ml} ${user_seller_sftp_ml}@sftp.mercadolibre.io
```

> NOTE
>
> NOTE
>
> In case the default `ssh` protocol key was used ($HOME/id_rsa), the `-i ${dirname}/${id_rsa_sftp_ml}` parameter above is not necessary.

Both keys (public and private) must be stored in the same directory on the machine used to connect to the Mercado Pago SFTP server. The table below describes how each element is identified by Mercado Pago:

| Element                         | Identified by Mercado Pago           | Details                                         |
|---------------------------------|--------------------------------------|--------------------------------------------------|
| **Directory**                   | `${dirname}`                         | Seller's internal directory                      |
| **Private key file**            | `${id_rsa_sftp_ml}`                  | Private key for authentication on the SFTP server |
| **Public key file**             | `${id_rsa_sftp_ml}.pub`              | Public key shared with Mercado Pago             |
| **User for connection**         | `${user_seller_sftp_ml}`             | User provided by Mercado Pago                    |
| **SFTP servers domain**         | `sftp.mercadolibre.io`               | Domain to access SFTP servers                    |