# Uploading a file

Using the terminal, you can upload a file via [SFTP Console](/developers/en/docs/links-and-debts/integration-configuration/upload#bookmark_consola_sftp) or [SFTP batch scripting](/developers/en/docs/links-and-debts/integration-configuration/upload#bookmark_sftp_batch_scripting). SFTP Console is suitable for manual use but not for automations. For automations, use SFTP batch scripting, which requires the creation of a script where each line represents an SFTP command.

## SFTP console

Using the code below as an example, follow the steps to upload a file using the SFTP console.

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

1. Log in to SFTP to open the SFTP console, as indicated in line 1 of the code.
2. Access the 'selfserviceinput' folder, as indicated in line 5 of the code.
3. List the contents with the `ls` command, as indicated in line 6 of the code (optional, only for review before uploading a file).
4. Upload the file using the command `put ${absolutePathFileName}`, as indicated in line 7 of the code, which can be the relative path.
5. Verify that it has been uploaded, as indicated in line 10 of the code.
6. Exit the SFTP console, as indicated in line 12.

## SFTP batch scripting

The commands from the previous example in the console, for batch scripting, would be as follows:

```terminal
ls
cd selfserviceinput
put /Users/user/debt_589_6_20230804.csv
ls
bye
```

The SFTP script is executed with the following command, where `batch_script_file_name` is the name of the file with the SFTP commands.

```
shell> sftp -b batch_script_file_name username@sftp.mercadolibre.io
```

> NOTE
>
> Note
>
> In this example, the default name and directory are used when generating the `ssh-rsa` key. Otherwise, the `-i` parameter should be used.

This is the result of the batch execution:

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