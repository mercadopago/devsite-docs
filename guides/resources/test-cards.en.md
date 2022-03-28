# Local test cards

You can use test cards of local payment methods and simulate different payment responses, without the need to use a real card.

> WARNING
>
> Important
>
>The DNI associated with the card must be the same as the test user making the purchase. To confirm this information, go to your Mercado Pago user account, access **Your profile > Your information** and review the **Document** field, ensuring that it will be the same to be associated with the card.
 
For this, depending on your country, use one of the cards provided below.

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
| Mastercard | 5254 1336 7440 3564 | 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |
------------

----[mlm]----
| Card | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: |
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
 
To **test different payment results** with Checkout Pro, fill in the desired status in the cardholder's name:
 
| Payment Status | Description |
| --- | --- |
| `APRO` | Approved payment |
| `CONT` | Pending payment |
| `OTHE` | Declined for general error |
| `CALL` | Declined with validation to authorize |
| `FUND` | Declined for insufficient amount |
| `SECU` | Declined for invalid security code |
| `EXPI` | Declined due to due date issue |
| `FORM` | Declined due to form error |