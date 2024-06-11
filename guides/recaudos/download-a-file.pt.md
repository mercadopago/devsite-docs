# Baixar um arquivo

Utilizando o terminal, aprenda como baixar um arquivo via [Console SFTP](/developers/es/docs/links-and-debts/integration-configuration/download#bookmark_consola_sftp) e [SFTP batch scripting](/developers/es/docs/links-and-debts/integration-configuration/download#bookmark_sftp_batch_scripting). O Console SFTP é adequado para uso manual, mas não para automatizações. Para automatizações, utilize o SFTP batch scripting, que requer a criação de um script SFTP, onde cada linha representa um comando SFTP.

## Console SFTP

Tomando como exemplo o código abaixo, siga os seguintes passos para baixar um arquivo usando o console SFTP.

```terminal
UY0FVFGW103Q05P:~ user$ cd $HOME/demo
UY0FVFGW103Q05P:~ user$ ls
UY0FVFGW103Q05P:~ user$ sftp pg_sap@sftp-qa.mercadolibre.io
Connected to sftp-qa.mercadolibre.io.
sftp> ls
selfserviceinput	selfserviceoutput
sftp> cd selfserviceoutput
sftp> ls
report_589_216_20230804.zip	result_589_6_20230804.zip
sftp> get result_589_216_20230804.zip
Fetching /selfserviceoutput/result_589_6_20230804.zip to result_589_6_20230804.zip
/selfserviceoutput/result_589_6_20230804.zip
/Users/user/debt_589_6_20230804.zip
sftp> bye
UY0FVFGW103Q05P:~ demo user$ ls
report_589_216_20230804.zip result_589_6_20230804.zip
```

1. Acesse a pasta onde deseja baixar o arquivo utilizando o comando `cd $HOME/${diretoriodownload}`, onde “diretoriodownload” corresponde ao nome da pasta. Na primeira linha do código acima, você pode ver um exemplo de como fazer isso.
2. Faça login no SFTP, o que abrirá o console SFTP, como indicado na linha 3. Neste exemplo, são utilizados o nome e o diretório padrão ao gerar a chave `ssh-rsa`. Caso contrário, o parâmetro `-i` deve ser utilizado.
3. Navegue até a pasta "selfserviceoutput", conforme indicado na linha 7 do código.
4. Liste o conteúdo com o comando `ls`, conforme indicado na linha 8 do código (opcional, utilizado apenas para verificar qual arquivo baixar).
5. Obtenha o arquivo de resultado que está no SFTP usando o comando `get ${arquivoresultado}`, como indicado na linha 10.
6. Saia do console SFTP, como indicado na linha 13 do código.
7. Liste o diretório "$HOME/${diretoriodownload}" para verificar se os arquivos foram baixados, como indicado na linha 14 do código.

## SFTP batch scripting

Para baixar um arquivo via SFTP utilizando batch scripting, criamos um arquivo chamado `download_sftp_script` no diretório "$HOME/demo" com o seguinte conteúdo:

```terminal
cd selfserviceoutput
get result_589_6_20230804.zip
bye
```

1. Navegue até a pasta de onde deseja baixar o arquivo utilizando o comando `cd selfserviceinitiativeout`.
2. Obtenha o arquivo de resultado que está no SFTP usando o comando `get ${arquivoresultado}`, como indicado na linha 2.

Este é o resultado da execução do batch:

```terminal
UY0FVFGW103Q05P: demo user$ sftp -b download_sftp_script pg_sap@sftp-qa.mercadolibre.io
sftp> cd selfserviceoutput
sftp> get result_589_6_20230804.zip
sftp> get report_589_216_20230804.zip
sftp> bye
UY0FVFGW103Q05P:demo user$ ls
report_589_216_20230804.zip	result_589_6_20230804.zip
```