# CSV Format Specifications and Examples

This documentation provides important clarifications about the CSV format of the files used, with specific details presented in the following sections.

## Field Format

The format of the fields is detailed as follows: T(Lmin - Lmax), where Lmin is the minimum length and Lmax is the maximum length, and T is the data type detailed below:

| Type   | Description                                            | Regexp                |
|--------|--------------------------------------------------------|-----------------------|
| **A**  | Alphabetic field. Accents are not accepted.            | `[a-zA-Z]`            |
| **N(,2)** | Numeric field with decimals.                        | `[0-9]+.[0-9]{2}`     |
| **N**  | Numeric field with integers.                           | `[0-9]+`              |
| **AN** | Alphanumeric field.                                    | `[a-zA-Z0-9]`         |
| **ANS**| Field that supports alphanumeric and special characters. | `[a-zA-Z-0-9 _@.-()+]` |
| **AS** | Field that supports alphabetic and special characters. | `[a-zA-Z- _@.-()+]`   |

For all formats, spaces should be used to complete the fixed length.

For example:
- AN(1-11) indicates that it is an alphanumeric field of length 11.
- AN(1-20) indicates that the field can have a length of 1 to 20 characters.

### Input Layout

Consult the fields that you can configure in the input. In the "Category" column, M stands for Mandatory, C for Conditional, and O for Optional - for these cases, the fields should be left empty.

> WARNING
>
> Important
>
> In the case of debts with 'C' in the Category column, at least one of these fields must be completed, according to the seller's configuration.

| Column/index | Attribute                  | Format  | Detail                                                                                                                                         | Category                              |
|--------------|----------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| 1            | Reference                  | AN(1-50) | Unique identifier of the debt that the customer will pay, managed by the company. Keep in mind that this identifier will be used for reconciliation. | M                                     |
| 4            | ID/SSN/Tax ID              | N(011)  | ID, SSN, or Tax ID of the customer.                                                                                                           | C                                    |
| 2            | Client Code                | AN(020) | Identifier used by the company to identify its clients. Remember that you must respect the format indicated during the onboarding process.         | C                                     |
| 7            | First Due Date             | N(008)  | Date of the first due date in AAAAMMDD format.                                                                                                 | M                                     |
| 8            | First Due Amount           | N(,2)   | Amount of the first due date. It is an integer where the last two digits represent the decimals.                                               | M                                     |
| 9            | Second Due Date            | N(008)  | Date of the second due date, in AAAAMMDD format.                                                                                                | O                                     |
| 10           | Second Due Amount          | N(,2)   | Amount of the second due date. It is an integer where the last two digits represent the decimals.                                              | O                                     |
| 11           | Third Due Date             | N(008)  | Date of the third due date, in AAAAMMDD format.                                                                                                 | O                                     |
| 12           | Third Due Amount           | N(,2)   | Amount of the third due date. It is an integer where the last two digits are decimals.                                                          | O                                     |
| 3            | Full Name                  | AS(100) | Customer's full name without special characters.                                                                                                | O - Bulk Links <br>M - Wallet Upload |
| 5            | Customer Phone             | ANS(20) | Customer's phone number.                                                                                                                       | O                                     |
| 6            | Email Address              | ANS(64) | Customer's email address where they will receive notifications about the existence of a new debt for the company.                              | O                                     |
| 13           | Reason                     | ANS(030)| Description that the user will see when paying a debt or a link. If not loaded, the default value will be "Others".                             | O                                     |
| 14           | Comment                    | ANS     | Concept or comment.                                                                                                                             | O                                     |
| 15           | Tax                        | N       | Tax. It can be 0, 5, or 19.                                                                                                                     | O - Only for cases of bulk links in Colombia. |

> NOTE
>
> Note
>
> Second and third due dates, along with their associated amounts, are optional. The system will automatically update the amounts on each specified date, ensuring that the amount to be paid is correct at all times.

## Successful Layout for Payment Links

| Column/index | Attribute       | Format | Detail                                                            |
|--------------|-----------------|--------|--------------------------------------------------------------------|
| 1            | Reference       | AN(020) | Unique identifier of the debt that the customer will pay, managed by the company. |
| 2            | Payment Link    | ANS    | URL of the generated Payment Link.                                 |

## Successful Layout for Debts

| Column/index | Attribute   | Format | Detail                                                                  |
|--------------|-------------|--------|--------------------------------------------------------------------------|
| 1            | Reference   | AN(020) | Unique identifier of the debt that the customer will pay, managed by the company. |
| 2            | Result      | ANS    | Fixed value SUCCESS for rows processed successfully.                     |

## Error Layout

| Column/index | Attribute                         | Format | Detail                                                           |
|--------------|----------------------------------|--------|-------------------------------------------------------------------|
| 1            | Line number of the debts file.   | AN(008) | Customer identifier. Must comply with the format indicated during onboarding. |
| 2            | Reference                        | AN(020) | Unique identifier of the debt that the customer will pay, managed by the company. |
| 3            | Errors                           | ANS    | Description of errors found on the line.                         |

Below is an example of an input file for Bulk Links and Debts:

```terminal
reflinks11,33334444,,20240531,33.33,,,,,,,,Demo Installment Live 1,,
reflinks22,22228888,,20240531,44.44,20240601,22.22,20240602,122.11,Richie 
Jenkins,1113101138,test_user_1196837045@testuser.com,Demo Installment Live 2,,
```

Below is an example of success for Bulk Links:

```terminal
ext1602, https://mpago.la/2W66EvG
ext1600, https://mpago.la/2LdGavR
ext1601, https://mpago.la/1FVqpCV
```

Below is an example of a success file for Debts:

```terminal
ext1602, SUCCESS
ext1600, SUCCESS
ext1601, SUCCESS
```