# Erros no processamento

Nesta seção, detalhamos os controles realizados a partir do Self Service para assegurar o correto funcionamento do fluxo _end to end_ e para preservar a experiência dos nossos usuários. Se for detectada alguma das situações abaixo, a informação completa não será processada e deverá ser enviada novamente por completo.

## Controles de conteúdo

| Código do erro | Descrição                                                                                | Causa                                                                                       |
|----------------|------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| E001           | Field {fieldname} not present                                                            | Um dos campos requeridos não está presente.                                                 |
| E002           | Invalid format in field {fieldname}                                                      | Um dos campos carregados não respeita o formato indicado.                                   |
| E003           | Due last date must be after today                                                        | A data de vencimento deve ser posterior à atual.                                            |
| E004           | Second Due date must be after first due date                                             | A segunda data de vencimento deve ser posterior à primeira.                                 |
| E005           | Third Due date must be after second due date                                             | A terceira data de vencimento deve ser posterior à segunda.                                 |
| E006           | Second due date is missing                                                               | Existe o valor do segundo vencimento, mas falta a segunda data de vencimento.               |
| E007           | First Due amount not present or is not greater than 0                                     | Falta o valor do primeiro vencimento.                                                       |
| E008           | Second Due amount not present or is not greater than 0                                    | Existe data de segundo vencimento, mas falta o valor do segundo vencimento.                 |
| E009           | Third Due amount not present or is not greater than 0                                     | Existe data de terceiro vencimento, mas falta o valor do terceiro vencimento.               |
| E010           | Amount has decimals, only integers are allowed                                           | Para Chile e Colômbia. Algum dos valores contém decimais.                                        |
| E012           | Reason length must be less than or equal to 100                                          | O campo `motivo` supera os 100 caracteres.                                                  |
| E013           | External Reference length must be less than or equal to 50                               | O campo `reference` supera os 50 caracteres.                                               |
| E014           | Tax must be 0, 5 or 19                                                                   | Para Colômbia. Valores de taxas devem ser da lista de valores possíveis.                    |