# Errors in processing

Below are the controls carried out by Self Service to ensure the correct functioning of the end-to-end flow and to preserve our users' experience. If any of the controlled situations are detected, the complete information will not be processed and must be resent in its entirety.

## Content-level controls

| Format | Error Code | Description                                         | Cause                                                                                    |
|--------|------------|-----------------------------------------------------|------------------------------------------------------------------------------------------|
| All    | E051       | Same as {register}                                  | This case occurs when a record has all the same values in the fields as a record already processed. |
| All    | E052       | Same data in {register}                             | This case is when all fields match except the record ID.                                 |
| All    | E053       | Record ID                                           | The external reference field (record ID) is not present.                                   |
| All    | E054       | Invalid client code format                          | If the seller is from Argentina and declares identifying the client with a client code and it is not present or has an invalid format. |
| All    | E055       | Invalid DNI format                                  | If the seller is from Argentina and declares identifying the client through the DNI and it is not present or has an invalid format. |
| All    | E056       | Invalid email format                                | Invalid email format.                                                                    |
| All    | E057       | Invalid due date format                             | First due date does not comply with the format AAAAMMDD.                                   |
| All    | E058       | Invalid due date value                              | First due date is before the day the debt is uploaded.                                    |
| All    | E059       | Invalid due amount value                            | The first due amount is not present or has an incorrect format.                           |
| All    | E060       | Invalid secondary due date format                   | Second due date does not comply with the format AAAAMMDD.                                  |
| All    | E061       | Invalid secondary due date value                    | Second due date is before or equal to the first due date.                                  |
| All    | E062       | Invalid secondary due amount value                  | The second due date is present but not its amount or has an invalid format.                |
| All    | E063       | Invalid tertiary due date format                    | Third due date does not comply with the format AAAAMMDD.                                   |
| All    | E064       | Invalid tertiary due date value                     | Third due date is before or equal to the second due date.                                  |
| All    | E065       | Invalid tertiary due amount value                   | The third due date is present but not its amount or has an invalid format.                 |
