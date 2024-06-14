# Configuração da integração

O acesso seguro ao servidor SFTP será configurado pelo Mercado Pago utilizando os dados de conexão fornecidos à equipe (SFTP Nome, E-mail, Telefone, e Faixa de IP) e a chave pública para autenticação, assim como está detalhado na seção de [Requisitos prévios](/developers/pt/docs/links-and-debts/prerequisites). Uma vez configurado, será possível se conectar ao SFTP seguindo as instruções abaixo.

## Conectar ao SFTP

Para se conectar ao servidor SFTP do Mercado Pago, utilize a chave privada associada à chave pública fornecida ao Mercado Pago para a criação do servidor anteriormente. Para mais informações, consulte a documentação [Como criar uma chave pública/privada SSH](/developers/pt/docs/links-and-debts/public-and-private-key).

Você poderá se conectar a partir de um terminal ou de um script executado a partir de um cron. O comando a ser executado é:

```terminal
shell> sftp -i ${dirname}/${id_rsa_sftp_ml} ${user_seller_sftp_ml}@sftp.mercadolibre.io
```

> NOTE
>
> Nota
>
> Caso tenha utilizado a chave padrão do protocolo `ssh ($HOME/id_rsa)`, o parâmetro `-i ${dirname}/${id_rsa_sftp_ml}` anterior não é necessário.

Ambas as chaves (pública e privada) devem ser armazenadas no mesmo diretório na máquina utilizada para se conectar ao servidor SFTP do Mercado Pago. A tabela abaixo descreve cada uma das variáveis utilizadas no comando anterior.

| Elemento                        | Identificação pelo Mercado Pago      | Detalhes                                         |
|---------------------------------|--------------------------------------|--------------------------------------------------|
| **Diretório**                   | `${dirname}`                         | Diretório interno do vendedor                    |
| **Arquivo da chave privada**    | `${id_rsa_sftp_ml}`                  | Chave privada para autenticação no servidor SFTP |
| **Arquivo da chave pública**    | `${id_rsa_sftp_ml}.pub`              | Chave pública compartilhada com o Mercado Pago     |
| **Usuário para conexão**        | `${user_seller_sftp_ml}`             | Usuário fornecido pelo Mercado Pago              |
| **Domínio dos servidores SFTP** | `sftp.mercadolibre.io`               | Domínio para acessar os servidores SFTP          |