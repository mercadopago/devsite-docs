## Como criar uma chave pública/privada SSH

A chave pública `ssh-rsa` refere-se à parte pública do par de chaves (junto com a chave privada correspondente) utilizada para autenticação e criptografia em SSH. Essa chave pública é compartilhada com o Mercado Pago para permitir a autenticação.

Durante o processo de integração, você deve fornecer a chave pública à equipe, que a configurará no serviço SFTP do Mercado Pago.

Para gerar essa chave, execute o seguinte comando no seu terminal:

```terminal
ssh-keygen -t rsa -b 4096
```

> NOTE
>
> Nota
>
> `-b 4096` corresponde a 4096 bits, que é a quantidade recomendada, mas não obrigatória, para a criação das chaves SSH.

Como resultado, serão geradas duas chaves: uma **pública** e uma **privada**. Enquanto a chave pública será fornecida ao Mercado Pago, a chave privada será utilizada para estabelecer a conexão com o servidor SFTP.

Ambas as chaves (pública e privada) devem estar armazenadas no mesmo diretório do computador a partir do qual será estabelecida a conexão com o servidor SFTP do Mercado Pago.

A chave pública gerada consiste em 3 colunas:
- algoritmo
- valor da chave pública
- host / comentário

Exemplo:
```
ssh-rsa CCCCB3NzaC1yc2EAAAADAQABAAABgQDIuC0emFLk1nGC1MCmJDqHzJy9N3WGJFCrDY8EuhcrpCP+5R6X/LnVESwn291IR2B7cO6jZtv6v8OohdWl9nCfNndm5w9HRuujrbpPebADGbrG89srHCuQVLY8zg+/cvLk0yGGvsSkpCZsJDm74VHngkwxdnR3T0dfpHFG/JcFjeNPpCW4d9N9gfkpmclBpfB14VMLoQ2K2xwLbujaxra0p0EbEbc/eq1vdN+m2Ja7WyR1L+66Cp3NKw1+suFIlP2H58kn7988JZ4baenfwOv8qQZu6WqsyJTecSwDgBn6Jr7WbpKfq2+nARif96nip5rFwxKWkHs7pDGu2XniurzlGe7MQaRc/XLdeAewS1qkt9qS51b1hy816KvcBFC5zPOH2P3yFWTcEFDT3WUfJ0o1MQk22eAHuCSK1tjRdDCGoB5sCjYYGCPonIaRc85CRNi/5CpD0i+xmopW1gOK6Q7dZSj6kSaphK1WK47Mdn20Eeu+OADLqnWN/np2qWyK/68= user@host
```

Depois de gerar as chaves, compartilhe com a equipe do Mercado Pago os dados necessários detalhados na seção de [Requisitos prévios](/developers/pt/docs/links-and-debts/prerequisites) e apenas a chave pública gerada com as três colunas descritas.

Com base nessas informações, o Mercado Pago criará e fornecerá para a integração um `user_name`, o host (`sftp.mercadolibre.io`) e o `seller_Id`, identificador interno necessário para o nome dos arquivos gerados. Com esses dados fornecidos pelo Mercado Pago, você poderá completar a integração.