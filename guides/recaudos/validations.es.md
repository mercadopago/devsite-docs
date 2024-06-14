# Errores en el procesamiento

A continuación se detallan los controles realizados desde Self Service para asegurar el correcto funcionamiento del flujo _end to end_ y para preservar la experiencia de nuestros usuarios. Si se detecta alguna de las situaciones controladas, la información completa no será procesada y deberá ser enviada nuevamente por completo.

## Controles a nivel de contenido

| Código de error | Descripción                                                                         | Causa                                                                                      |
|-----------------|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| E001            | Field {fieldname} not present                                                       | Uno de los campos requeridos no está presente.                                              |
| E002            | Invalid format in field {fieldname}                                                 | Uno de los campos cargados no respeta el formato indicado.                                  |
| E003            | Due last date must be after today                                                   | La fecha de vencimiento debe ser posterior a la actual.                                     |
| E004            | Second Due date must be after first due date                                        | La segunda fecha de vencimiento debe ser posterior a la primera.                            |
| E005            | Third Due date must be after second due date                                        | La tercera fecha de vencimiento debe ser posterior a la segunda.                            |
| E006            | Second due date is missing                                                          | Existe el importe del segundo vencimiento, pero falta la segunda fecha de vencimiento.      |
| E007            | First Due amount not present or is not greater than 0                               | Falta el importe del primer vencimiento.                                                    |
| E008            | Second Due amount not present or is not greater than 0                              | Existe fecha de segundo vencimiento, pero falta el importe del segundo vencimiento.         |
| E009            | Third Due amount not present or is not greater than 0                               | Existe fecha de tercer vencimiento, pero falta el importe del tercer vencimiento.           |
| E010            | Amount has decimals, only integers are allowed                                      | Para Chile y Colombia. Alguno de los montos contiene decimales, y no están permitidos.                                  |
| E012            | Reason length must be less than or equal to 100                                     | El campo `motivo` supera los 100 caracteres.                                                |
| E013            | External Reference length must be less than or equal to 50                          | El campo `reference` supera los 50 caracteres.                                             |
| E014            | Tax must be 0, 5 or 19                                                              | Para Colombia. Los valores de `taxes` deben ser del listado de valores posibles.                  |