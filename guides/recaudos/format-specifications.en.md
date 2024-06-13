# Instructions for file configuration

To create Debts in bulk or Massive links, upload a file with customer data following the specifications in this document.

> WARNING
>
> Important
>
> Use a comma (,) to separate the information in your file. <br>
> Do not enter the column names in the file.

| Order in the File | Category               | Data                | Description                                                                                                                                          | Format                         | Example      |
|-------------------|------------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|--------------|
| 1                 | Mandatory              | Reference           | Unique identifier of the payment that the customer will make. Managed by the company                                                                 | Alphanumeric field of 1 to 50 characters | REF1234      |
| 2                 | Payment Links: Optional / Debts: Conditionally mandatory for companies in Argentina that identify their customers by DNI/CUIL/CUIT | DNI/CUIL/CUIT       | DNI, CUIL, or CUIT of the customer. | Integer field up to 11 characters | 01234567895 |
| 3                 | Payment Links: Optional / Debts: Conditionally mandatory for companies that identify their customers by Customer Code | Customer Code       | Identifier used by the company to identify their customers. | Alphanumeric field of 1 to 20 characters | COD1234      |
| 4                 | Mandatory              | 1st Due Date        | Date of the first due date, in YYYYMMDD format                                                                                                          | Numeric field of 8 characters | 20242012     |
| 5                 | Mandatory              | 1st Due Amount      | Amount of the first due date. It is an integer where the last two digits are decimals                                                                | Numeric field with up to 2 decimals. Use a dot, not a comma | 123.50       |
| 6                 | Optional               | 2nd Due Date        | Date of the second due date, in YYYYMMDD format                                                                                                        | Numeric field of 8 characters | 20242212     |
| 7                 | Optional               | 2nd Due Amount      | Amount of the second due date. It is an integer where the last two digits are decimals                                                                | Numeric field with up to 2 decimals. Use a dot, not a comma | 130.00       |
| 8                 | Optional               | 3rd Due Date        | Date of the third due date, in YYYYMMDD format                                                                                                         | Numeric field of 8 characters | 20242212     |
| 9                 | Optional               | 3rd Due Amount      | Amount of the third due date. It is an integer where the last two digits are decimals                                                                 | Numeric field with up to 2 decimals. Use a dot, not a comma | 147.50       |
| 10                | Optional               | Full Name           | Full name of the customer (no special characters)                                                                                                     | Alphabetic field up to 100 characters | Jose Silva   |
| 11                | Optional               | Customer Phone      | Customer's phone number                                                                                                                               | Alphanumeric field up to 20 characters | 4852698653201|
| 12                | Optional               | Customer E-mail     | Customer's e-mail address to receive notifications about new debts                                                                                    | Alphanumeric field up to 64 characters | name@mail.com |
| 13                | Optional               | Reason              | Description that appears for the customer when paying in the Mercado Pago app. Recommended for better approval.                                        | Alphanumeric field up to 30 characters | Fee          |
| 14                | Optional               | Comment             | Concept or comment. The seller decides what to use for identification                                                                                 | Alphanumeric field                  | Ref 2024     |
| 15                | Optional (only for cases in Colombia) | Tax                  | Tax.                                                                                                                                                   | Integer field. Can be 0, 5, or 19. If no value is entered, 19 will be used by default | 5            |

> NOTE
>
> How to name the file before uploading
>
> Your company can choose the name of the file, which must follow the **.csv** format. Allowed characters are letters, numbers, hyphen, underscore, and dot.

## Sample files for Payment links

### Upload files

Below is an example of an uploaded file with all the data entered correctly:

```csv
ext2024030614313,521998672,1002,20250312,549.57,20250315,778.87,20250318,801.87,Miss Kristopher Kautzer,1138225523,felica.walsh@example.com,Cuota,Ref2024,5
```

Below is an example of an uploaded file with only the mandatory data entered correctly:

```csv
ext2024030614313,,,,,20250312,549.57,,,,,,,,,,,,,,,,,,,
```

To identify the examples according to the mandatory fields and the order in the file, refer to the table below:

| Order in the File | Category              | Example               |
|-------------------|-----------------------|-----------------------|
| 1                 | Mandatory             | ext2024030614313      |
| 2                 | Conditional Optional  | 521998672             |
| 3                 | Conditional Optional  | 1002                  |
| 4                 | Mandatory             | 20250312              |
| 5                 | Mandatory             | 549.57                |
| 6                 | Optional              | 20250315              |
| 7                 | Optional              | 778.87                |
| 8                 | Optional              | 20250318              |
| 9                 | Optional              | 801.87                |
| 10                | Optional              | Miss Kristopher Kautzer |
| 11                | Optional              | 1138225523            |
| 12                | Optional              | felica.walsh@example.com |
| 13                | Optional              | Cuota                 |
| 14                | Optional              | Ref2024               |
| 15                | Optional              | 5                     |

### Result files

Below is an example of a file with payment links returned by Mercado Pago in case of success, where 'ext2024030615501' is the reference, and 'https://mpago.la/2WTWRHT' is the payment link.

```csv
"ext2024030615501", "https://mpago.la/2WTWRHT"
```

Below is an example of a file with an error report returned by Mercado Pago in cases of failed or partial processing. In this case, '4' represents the line with the error, and 'E008 last date must be after today' is the description of the error found in the line.

```csv
4,ext2024030615504,E008:Due last date must be after today
```

## Sample files for Debts

### Upload files

Below is an example of an uploaded file with all the data entered correctly:

```csv
ext2024030614313,521998672,1002,20250312,549.57,20250315,778.87,20250318,801.87,Miss Kristopher Kautzer,1138225523,felica.walsh@example.com,Cuota,Ref2024,5
```

Below is an example of an uploaded file with only the mandatory data entered correctly:

```csv
ext2024030614313,521998672,,20250312,549.57,,,,,,,,,,
```

To identify the examples according to the mandatory fields and the order in the file, refer to the table below:

| Order in the File | Category               | Example               |
|-------------------|------------------------|-----------------------|
| 1                 | Mandatory              | ext2024030614313      |
| 2                 | Conditional Mandatory  | 521998672             |
| 3                 | Conditional Mandatory  | 1002                  |
| 4                 | Mandatory              | 20250312              |
| 5                 | Mandatory              | 549.57                |
| 6                 | Optional               | 20250315              |
| 7                 | Optional               | 778.87                |
| 8                 | Optional               | 20250318              |
| 9                 | Optional               | 801.87                |
| 10                | Optional               | Miss Kristopher Kautzer |
| 11                | Optional               | 1138225523            |
| 12                | Optional               | felica.walsh@example.com |
| 13                | Optional               | Cuota                 |
| 14                | Optional               | Ref2024               |
| 15                | Optional               | 5                     |

### Result files

Below is an example of a debt file returned by Mercado Pago in case of success, where 'ext2024030615501' represents the reference, and 'Success' indicates the debt was successfully created.

```csv
"ext2024030615501", "Success"
```

Below is an example of a file with an error report returned by Mercado Pago in cases of failed or partial processing, where '4' represents the line with the error, 'ext2024030615501' is the reference, and 'E008 last date must be after today' is the description of the error found in the line.

```csv
4,ext2024030615504,E008:Due last date must be after today
```