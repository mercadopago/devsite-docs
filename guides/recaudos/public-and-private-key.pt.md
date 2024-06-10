## Como criar uma chave pública/privada SSH

A chave pública `ssh-rs` refere-se à parte pública do par de chaves (junto com a chave privada correspondente) utilizada para autenticação e criptografia em SSH. Essa chave pública é compartilhada com o Mercado Pago para permitir a autenticação.

Durante o processo de integração, você deve fornecer a chave pública à equipe, que a configurará no serviço SFTP do Mercado Pago.

Para gerar essa chave, execute o comando no seu terminal:

```terminal
ssh-keygen -t rsa -b 4096 -C
```

> NOTE
>
> Nota
>
> `-b 4096` corresponde a 4096 bits, que é a quantidade recomendada, mas não obrigatória, para a criação das chaves SSH.

Como resultado, serão geradas duas chaves: uma **pública** e uma **privada**. Enquanto a chave pública será fornecida ao Mercado Pago, a chave privada será utilizada para estabelecer a conexão com o servidor SFTP.

Ambas as chaves (pública e privada) devem estar armazenadas no mesmo diretório do computador a partir do qual será estabelecida a conexão com o servidor SFTP do Mercado Pago.

Depois de gerar as chaves, compartilhe com a equipe do Mercado Pago os dados necessários detalhados na seção de [Requisitos prévios](/developers/pt/docs/links-and-debts/prerequisites) e apenas a chave pública gerada.
Com base nessas informações, o Mercado Pago criará e fornecerá para a integração um `user_name`, o host (`sftp.mercadolibre.io`) e o `seller_Id`, identificador interno necessário para o nome dos arquivos gerados. Com esses dados fornecidos pelo Mercado Pago, você poderá completar a integração.