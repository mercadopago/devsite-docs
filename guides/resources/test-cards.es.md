# Tarjetas de prueba locales

Puede usar tarjetas de prueba de métodos de pago locales y simular diferentes respuestas de pago, sin necesidad de usar una tarjeta real.

> WARNING
>
> Importante
>
> El DNI asociado a la tarjeta debe ser el mismo del usuario de prueba que realiza la compra. Para confirmar esta información, en tu cuenta de usuario de Mercado Pago, accede a **Tu Perfil > Tus informaciónes** y revisa el **campo Documento**, asegurando que será el mismo asociado a la tarjeta.
 
Para eso, dependiendo de tu país, utiliza una de las tarjetas que te proporcionamos a continuación.

----[mla]----
| Tarjeta | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: |
| mastercard | 5031 7557 3453 0604 | 123 | 25/11 |
| Visado | 4509 9535 6623 3704 | 123 | 25/11 |
| Expreso americano | 3711 803032 57522 | 1234 | 25/11 |
------------

----[mlb]----
| Tarjeta | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |
------------

----[mlc]----
| Tarjeta | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: |
| Mastercard | 5416 7526 0258 2580 | 123 | 11/25 |
| Visa | 4168 8188 4444 7115 | 123 | 11/25 |
| American Express | 3757 781744 61804 | 1234 | 11/25 |
------------

----[mco]----
| Tarjeta | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: |
| Mastercard | 5254 1336 7440 3564 | 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |
------------

----[mlm]----
| Tarjeta | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: |
| Visa | 4075 5957 1648 3764 | 123 | 11/25 |
------------

----[mlu]----
| Tarjeta | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
------------

----[mpe]----
| Tarjeta | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |
------------
 
Para **probar diferentes resultados de pago** con Checkout Pro, complete el estado deseado en el nombre del titular de la tarjeta:
 
| Estado de pago | Descripción |
| --- | --- |
| `APRO` | Pago aprobado |
| `CONT` | Pendiente de pago |
| `OTHE` | Rechazado por error general |
| `CALL` | Rechazado con validación para autorizar |
| `FUND` | Rechazado por importe insuficiente |
| `SECU` | Rechazado por código de seguridad inválido |
| `EXPI` | Rechazado debido a un problema de fecha de vencimiento |
| `FORM` | Rechazado debido a un error de formulario |