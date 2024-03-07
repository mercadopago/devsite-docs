# Integration test

It is crucial to test the entire flow before going into production, ensuring that payment creation is done correctly and that messages are effective in communicating with the user. A good experience for your customers at the checkout helps improve conversion.

To perform a test purchase, it is necessary to use the **test credentials of your production user**. To obtain them, access **Application details > Credentials** within the [Developer dashboard](/developers/panel/app) or in your Mercado Pago account by accessing [Your Business > Settings > Management and Administration > Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

You can use test cards of local payment methods and simulate different payment responses, without the need to use a real card.
 
For this, depending on your country, use one of the **credit** cards we provide below.

----[mla]----

| Card | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------
----[mlb]----
| Card | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 4332 1540 6351 | 123 | 11/25 |
| Visa | 4235 6477 2802 5682 | 123 | 11/25 |
| American Express | 3753 651535 56885 | 1234 | 11/25 |

------------
----[mlc]----
| Card | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5416 7526 0258 2580 | 123 | 11/25 |
| Visa | 4168 8188 4444 7115 | 123 | 11/25 |
| American Express | 3757 781744 61804 | 1234 | 11/25 |

------------
----[mco]----
| Card | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5254 1336 7440 3564| 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |

------------
----[mlm]----
| Card | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5474 9254 3267 0366 | 123 | 11/25 |
| Visa | 4075 5957 1648 3764 | 123 | 11/25 |

------------
----[mlu]----
| Card | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |

------------
----[mpe]----
| Card | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------

To **test different payment results**, fill in the desired status in the cardholder's name (field `card_holder_name`):

----[mla]----
| Payment Status | Description | Identity document |
| --- | --- | --- |
| `APRO` | Approved payment | (DNI) 12345678|
| `OTHE` | Declined for general error | (DNI) 12345678 |
| `CONT` | Pending payment | - |
| `CALL` | Declined with validation to authorize | - |
| `FUND` | Declined for insufficient amount | - |
| `SECU` | Declined for invalid security code | - |
| `EXPI` | Declined due to due date issue | - |
| `FORM` | Declined due to form error | - |

------------
----[mlb]----
| Payment Status | Description | Identity document |
| --- | --- | --- |
| `APRO` | Approved payment | (CPF) 12345678909 |
| `OTHE` | Declined for general error | (CPF) 12345678909 |
| `CONT` | Pending payment | - |
| `CALL` | Declined with validation to authorize | - |
| `FUND` | Declined for insufficient amount | - |
| `SECU` | Declined for invalid security code | - |
| `EXPI` | Declined due to due date issue | - |
| `FORM` | Declined due to form error | - |

------------
----[mlc]----
| Payment Status | Description | Identity document |
| --- | --- | --- |
| `APRO` | Approved payment | (otro) 123456789 |
| `OTHE` | Declined for general error | (otro) 123456789 |
| `CONT` | Pending payment | - |
| `CALL` | Declined with validation to authorize | - |
| `FUND` | Declined for insufficient amount | - |
| `SECU` | Declined for invalid security code | - |
| `EXPI` | Declined due to due date issue | - |
| `FORM` | Declined due to form error | - |

------------
----[mco]----
| Payment Status | Description | Identity document |
| --- | --- | --- |
| `APRO` | Approved payment | 123456789 |
| `OTHE` | Declined for general error | 123456789 |
| `CONT` | Pending payment | - |
| `CALL` | Declined with validation to authorize | - |
| `FUND` | Declined for insufficient amount | - |
| `SECU` | Declined for invalid security code | - |
| `EXPI` | Declined due to due date issue | - |
| `FORM` | Declined due to form error | - |

------------
----[mlm]----
| Payment Status | Description |
| --- | --- |
| `APRO` | Approved payment |
| `OTHE` | Declined for general error |
| `CONT` | Pending payment |
| `CALL` | Declined with validation to authorize |
| `FUND` | Declined for insufficient amount |
| `SECU` | Declined for invalid security code |
| `EXPI` | Declined due to due date issue |
| `FORM` | Declined due to form error | 

------------
----[mlu]----
| Payment Status | Description | Identity document |
| --- | --- | --- |
| `APRO` | Approved payment | (CI) 12345678 <br> (otro) 123456789 |
| `OTHE` | Declined for general error | (CI) 12345678 <br> (otro) 123456789 |
| `CONT` | Pending payment | - |
| `CALL` | Declined with validation to authorize | - |
| `FUND` | Declined for insufficient amount | - |
| `SECU` | Declined for invalid security code | - |
| `EXPI` | Declined due to due date issue | - |
| `FORM` | Declined due to form error | - |

------------
----[mpe]----
| Payment Status | Description | Identity document |
| --- | --- | --- |
| `APRO` | Approved payment | 123456789 |
| `OTHE` | Declined for general error | 123456789 | 
| `CONT` | Pending payment | - |
| `CALL` | Declined with validation to authorize | - |
| `FUND` | Declined for insufficient amount | - |
| `SECU` | Declined for invalid security code | - |
| `EXPI` | Declined due to due date issue | - |
| `FORM` | Declined due to form error | - |

------------