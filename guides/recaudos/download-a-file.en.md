# Download a file

Using the terminal, learn how to download a file via [SFTP Console](/developers/es/docs/links-and-debts/integration-configuration/download#bookmark_consola_sftp) and [SFTP batch scripting](/developers/es/docs/links-and-debts/integration-configuration/download#bookmark_sftp_batch_scripting). The SFTP Console is suitable for manual use but not for automation. For automation, use SFTP batch scripting, which requires creating an SFTP script where each line represents an SFTP command.

## SFTP console

Taking the example code below, follow the steps to download a file using the SFTP console.

```terminal
UY0FVFGW103Q05P:~ user$ cd $HOME/demo
UY0FVFGW103Q05P:~ user$ ls
UY0FVFGW103Q05P:~ user$ sftp pg_sap@sftp-qa.mercadolibre.io
Connected to sftp-qa.mercadolibre.io.
sftp> ls
selfserviceinitiative	selfserviceinitiativeout
sftp> cd selfserviceinitiativeout
sftp> ls
report_589_216_20230804.csv	result_589_6_20230804.csv
sftp> get result_589_216_20230804.csv
Fetching /selfserviceinitiativeout/result_589_6_20230804.csv to result_589_6_20230804.csv
/selfserviceinitiativeout/result_589_6_20230804.csv
/Users/user/debt_589_6_20230804.csv
sftp> bye
UY0FVFGW103Q05P:~ demo user$ ls
report_589_216_20230804.csv result_589_6_20230804.csv
```

1. Navigate to the folder where you want to download the file using the command "cd $HOME/${downloadfolder}", where “downloadfolder” corresponds to the folder name. In the first line of the code, you can see an example of how to do this.
2. Log in to the SFTP, which will open the SFTP console, as shown in line 3.
3. Navigate to the "Self-Service-Output" folder, as indicated in line 7 of the code.
4. List the contents with the ls command, as shown in line 8 of the code (optional, just to verify which file to download).
5. Fetch the result file from the SFTP using the `get ${resultfile}` command, as indicated in line 10.
6. Exit the SFTP console, as shown in line 13 of the code.
7. List the "$HOME/${downloadfolder}" directory to verify that the files have been downloaded, as indicated in line 14 of the code.

## SFTP batch scripting

Similarly, to download a file via SFTP batch scripting, create a file `download_sftp_script` in "$HOME/demo" with the following content:

```terminal
cd selfserviceinitiativeout
get result_589_6_20230804.csv
bye
```

1. Navigate to the folder from which you want to download the file using the command `cd selfserviceinitiativeout`.
2. Fetch the result file from the SFTP using the `get ${resultfile}` command, as indicated in line 2.

This is the result of the batch execution:

```terminal
UY0FVFGW103Q05P: demo user$ sftp -b download_sftp_script pg_sap@sftp-qa.mercadolibre.io
sftp> cd selfserviceinitiativeout
sftp> get result_589_6_20230804.csv
sftp> get report_589_216_20230804.csv
sftp> bye
UY0FVFGW103Q05P:demo user$ ls
download_dftp_script	report_589_216_20230804.csv	result_589_6_20230804.csv
```