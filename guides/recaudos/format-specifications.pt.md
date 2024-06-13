# Instruções para configuração do arquivo

Para criar Dívidas em grande quantidade, faça o upload de um arquivo com os dados dos clientes que serão cobrados, seguindo as especificações deste documento.

> AVISO
>
> Importante
>
> Utilize uma vírgula (,) para separar as informações no seu arquivo. <br>
> Não inclua o nome das colunas no arquivo.

| Ordem no arquivo | Categoria               | Dado                | Descrição                                                                                                                                          | Formato                         | Exemplo      |
|------------------|-------------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|--------------|
| 1                | Obrigatório             | Referência          | Identificador único da cobrança que o cliente pagará. Gerenciado pela empresa                                                                         | Campo alfanumérico de 1 a 50 caracteres | REF1234      |
| 2                | Links de pagamento: Opcional / Dívidas: Obrigatório condicional para empresas na Argentina que identificam seus clientes por meio de DNI/CUIL/CULT | DNI/CUIL/CUIT       | DNI, CUIL ou CUIT do cliente. | Campo numérico inteiro de até 11 caracteres | 01234567895 |
| 3                | Links de pagamento: Opcional / Dívidas: Obrigatório condicional para empresas na Argentina que identificam seus clientes por meio de Código do cliente | Código do cliente  | Identificador usado pela empresa para identificar seus clientes. | Campo alfanumérico de 1 a 20 caracteres | COD1234      |
| 4                | Obrigatório             | Data 1º vencimento | Data do primeiro vencimento, no formato AAAAMMDD                                                                                                          | Campo numérico de 8 caracteres | 20242012     |
| 5                | Obrigatório             | Valor 1º vencimento | Valor do primeiro vencimento. É um número inteiro onde os dois últimos dígitos são decimais                                                           | Campo numérico com até 2 decimais. Utilize ponto, não vírgula | 123.50       |
| 6                | Opcional                | Data 2º vencimento | Data do segundo vencimento, no formato AAAAMMDD                                                                                                        | Campo numérico de 8 caracteres | 20242212     |
| 7                | Opcional                | Valor 2º vencimento | Valor do segundo vencimento. É um número inteiro onde os dois últimos dígitos são decimais                                                          | Campo numérico com até 2 decimais. Utilize ponto, não vírgula | 130.00       |
| 8                | Opcional                | Data 3º vencimento | Data do terceiro vencimento, no formato AAAAMMDD                                                                                                        | Campo numérico de 8 caracteres | 20242212     |
| 9                | Opcional                | Valor 3º vencimento | Valor do terceiro vencimento. É um número inteiro onde os dois últimos dígitos são decimais                                                          | Campo numérico com até 2 decimais. Utilize ponto, não vírgula | 147.50       |
| 10               | Opcional                | Nome completo     | Nome completo do cliente (sem caracteres especiais)                                                                                                    | Campo alfabético de até 100 caracteres | José Silva   |
| 11               | Opcional                | Telefone cliente  | Telefone do cliente                                                                                                                                  | Campo alfanumérico de até 20 caracteres | 4852698653201|
| 12               | Opcional                | E-mail cliente    | Endereço de e-mail do cliente para receber notificações sobre novas cobranças                                                                            | Campo alfanumérico de até 64 caracteres | nome@mail.com |
| 13               | Opcional                | Motivo            | Descrição que aparece para o cliente ao pagar no app Mercado Pago. Recomendado para melhor aprovação.                                                  | Campo alfanumérico de até 30 caracteres | Parcela      |
| 14               | Opcional                | Comentário        | Conceito ou comentário. O vendedor decide como prefere identificar                                                                                    | Campo alfanumérico                  | Ref 2024     |
| 15               | Opcional (somente para casos na Colômbia) | Tax            | Imposto.                                                                                                                                              | Campo numérico inteiro. Pode ser 0, 5 ou 19. Se não for inserido um valor, será utilizado 19 por padrão | 5            |

> NOTE
>
> Como nomear o arquivo antes de fazer o upload
>
> Sua empresa pode escolher o nome do arquivo, que deve seguir o formato **.csv**. Os caracteres permitidos são letras, números, hífen, sublinhado e ponto.

## Exemplos de Arquivos para Links de Pagamento

### Arquivo de Carregamento

A seguir, um exemplo de arquivo carregado com todos os dados inseridos corretamente:

```csv
ext2024030614313,521998672,1002,20250312,549.57,20250315,778.87,20250318,801.87,Miss Kristopher Kautzer,1138225523,felica.walsh@example.com,Cuota,Ref2024,5
```

A seguir, está um exemplo de arquivo carregado apenas com os dados obrigatórios inseridos corretamente:

```csv
ext2024030614313,,,,,20250312,549.57,,,,,,,,,,,,,,,,,,,
```

Para identificar os exemplos de acordo com a obrigação e a ordem no arquivo, consulte a tabela abaixo:

| Ordem no arquivo | Categoria               | Exemplo               |
|------------------|-------------------------|-------------------------|
| 1                | Obrigatório             | ext2024030614313        |
| 2                | Opcional condicional    | 521998672               |
| 3                | Opcional condicional    | 1002                    |
| 4                | Obrigatório             | 20250312                |
| 5                | Obrigatório             | 549.57                  |
| 6                | Opcional                | 20250315                |
| 7                | Opcional                | 778.87                  |
| 8                | Opcional                | 20250318                |
| 9                | Opcional                | 801.87                  |
| 10               | Opcional                | Miss Kristopher Kautzer |
| 11               | Opcional                | 1138225523              |
| 12               | Opcional                | felica.walsh@example.com |
| 13               | Opcional                | Cuota                   |
| 14               | Opcional                | Ref2024                 |
| 15               | Opcional                | 5                       |

### Arquivos de Resultado

A seguir, está um exemplo de arquivo com Links de Pagamento devolvidos pelo Mercado Pago em caso de sucesso, sendo 'ext2024030615501' a referência e 'https://mpago.la/2WTWRHT' o Link de Pagamento.

```csv
"ext2024030615501", "https://mpago.la/2WTWRHT"
```

A seguir, está um exemplo de arquivo com relatório de erros devolvido pelo Mercado Pago em casos de processamento falho ou parcial. Neste caso, '4' representa a linha com o erro e 'E008 last date must be after today' é a descrição do erro encontrado na linha.

```
4,ext2024030615504,E008:Due last date must be after today
```

## Exemplo de Arquivo para Dívidas

### Arquivo de Carregamento

A seguir, está um exemplo de arquivo carregado com todos os dados inseridos corretamente:

```
ext2024030614313,521998672,1002,20250312,549.57,20250315,778.87,20250318,801.87,Miss Kristopher Kautzer,1138225523,felica.walsh@example.com,Cuota,Ref2024,5
```

A seguir, está um exemplo de arquivo carregado apenas com os dados obrigatórios inseridos corretamente:

```
ext2024030614313,521998672,,20250312,549.57,,,,,,,,,,
```

Para identificar os exemplos de acordo com a obrigação e a ordem no arquivo, consulte a tabela abaixo:

| Ordem no arquivo | Categoria               | Exemplo               |
|------------------|-------------------------|-------------------------|
| 1                | Obrigatório             | ext2024030614313        |
| 2                | Obrigatório condicional | 521998672               |
| 3                | Obrigatório condicional | 1002                    |
| 4                | Obrigatório             | 20250312                |
| 5                | Obrigatório             | 549.57                  |
| 6                | Opcional                | 20250315                |
| 7                | Opcional                | 778.87                  |
| 8                | Opcional                | 20250318                |
| 9                | Opcional                | 801.87                  |
| 10               | Opcional                | Miss Kristopher Kautzer |
| 11               | Opcional                | 1138225523              |
| 12               | Opcional                | felica.walsh@example.com |
| 13               | Opcional                | Cuota                   |
| 14               | Opcional                | Ref2024                 |
| 15               | Opcional                | 5                       |

### Arquivo de Resultado

A seguir, está um exemplo de arquivo de Dívidas devolvido pelo Mercado Pago em caso de sucesso, onde 'ext2024030615501' representa a referência e 'Success' indica que a dívida foi criada com sucesso.

```csv
"ext2024030615501", "Success"
```

A seguir, está um exemplo de arquivo com relatório de erros devolvido pelo Mercado Pago em casos de processamento falho ou parcial, onde '4' representa a linha com o erro, 'ext2024030615501' é a referência e 'E008
last date must be after today' é a descrição do erro encontrado na linha.

```csv
4,ext2024030615504,E008:Due last date must be after today
```