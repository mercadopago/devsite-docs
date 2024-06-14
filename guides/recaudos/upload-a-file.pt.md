# Carregar um arquivo

Utilizando o terminal, é possível carregar um arquivo via [Console SFTP](/developers/pt/docs/links-and-debts/integration-configuration/upload#bookmark_consola_sftp) ou via [SFTP batch scripting](/developers/pt/docs/links-and-debts/integration-configuration/upload#bookmark_sftp_batch_scripting). O Console SFTP é adequado para uso manual, mas não para automatizações. Para automatizações, utilize SFTP batch scripting, que requer a criação de um script onde cada linha representa um comando SFTP.

> Recomendamos evitar subir archivos con el mismo nombre, ya que esto podría desencadenar un reprocesamiento. Como buena práctica, y para facilitar la identificación de los archivos de entrada y salida, se sugiere agregar una marca de tiempo o _timestamp_ al final del nombre del archivo.

## Console SFTP

Usando como exemplo o código abaixo, siga os seguintes passos para carregar um arquivo usando o console SFTP.

```terminal
UY0FVFGW103Q05P: ~ user$ sftp pg_sap@sftp-qa.mercadolibre.io
Connected to sftp-qa.mercadolibre.io.
sftp> ls
selfserviceinput	selfserviceoutput
sftp> cd selfserviceinput
sftp> ls
sftp> put /	Users/user/debt_589_6_20230804.csv
Uploading /Users/user/debt_589_6_20230804.csv to /selfserviceinput/debt_589_6_20230804.csv
/Users/user/debt_589_6_20230804.csv
sftp> ls
debt_589_6_20230804.csv
sftp> bye
```

1. Faça login no SFTP para abrir o console SFTP, conforme indicado na linha 1 do código.
2. Acesse a pasta "selfserviceinput", conforme indicado na linha 5 do código.
3. Liste o conteúdo com o comando `ls`, conforme indicado na linha 6 do código (opcional, apenas para revisar antes de carregar um arquivo).
4. Carregue o arquivo usando o comando `put ${absolutePathFileName}`, conforme indicado na linha 7 do código, podendo ser o caminho relativo.
5. Verifique se o arquivo foi carregado, conforme indicado na linha 10 do código.
6. Saia do console SFTP, conforme indicado na linha 12.

## SFTP batch scripting

Os comandos do exemplo anterior no console, em batch scripting, seriam os seguintes:

```terminal
ls
cd selfserviceinput
put /Users/user/debt_589_6_20230804.csv
ls
bye
```

O script SFTP é executado com o seguinte comando, onde `batch_script_file_name` é o nome do arquivo com os comandos SFTP.

```
shell> sftp -b batch_script_file_name username@sftp.mercadolibre.io
```

> NOTE
>
> Importante
>
> Neste exemplo, são utilizados o nome e o diretório padrão quando a chave `ssh-rsa` é gerada. Caso contrário, deve-se utilizar o parâmetro `-i`.

Este é o resultado da execução batch:

```terminal
UY0FVGW103Q0SP: ~ user$ sftp -b upload_sftp_script pg_sap@sftp-qa.mercadolibre.io sftp> ls
selfserviceinput	selfserviceoutput
sftp> cd selfserviceinput
sftp> put /Users/user/debt_589_6_20230804.csv
sftp> ls
debt_589_6_20230804.csv
sftp> bye
UY0FVFGW103Q05P:~ user$
```