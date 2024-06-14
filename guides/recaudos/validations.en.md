# Errors in processing

Below are the controls carried out by Self Service to ensure the correct functioning of the end-to-end flow and to preserve our users' experience. If any of the controlled situations are detected, the complete information will not be processed and must be resent in its entirety.

## Content controls

| Error code | Description                                      | Cause                                                                                     |
|------------|--------------------------------------------------|-------------------------------------------------------------------------------------------|
| E001       | Field {fieldname} not present                   | One of the required fields is not present.                                                 |
| E002       | Invalid format in field {fieldname}             | One of the fields does not respect the indicated format.                                   |
| E003       | Due last date must be after today               | The due date must be after the current date.                                               |
| E004       | Second Due date must be after first due date    | The second due date must be after the first.                                               |
| E005       | Third Due date must be after second due date    | The third due date must be after the second.                                               |
| E006       | Second due date is missing                      | The second due amount is present, but the second due date is missing.                      |
| E007       | First Due amount not present or is not greater than 0 | The first due amount is missing or not greater than 0.                                      |
| E008       | Second Due amount not present or is not greater than 0 | The second due date is present, but the second due amount is missing.                       |
| E009       | Third Due amount not present or is not greater than 0 | The third due date is present, but the third due amount is missing.                         |
| E010       | Amount has decimals, only integers are allowed  | For Chile and Colômbia. Some of the amounts contain decimals.                                   |
| E012       | Reason length must be less than or equal to 100 | The `reason` field exceeds 100 characters.                                                 |
| E013       | External Reference length must be less than or equal to 50 | The `reference` field exceeds 50 characters.                                               |
| E014       | Tax must be 0, 5 or 19                          | For Colombia. Tax values must be from the list of possible values.                         |