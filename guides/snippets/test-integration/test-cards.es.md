# Tarjetas de prueba

Puedes utilizar tarjetas de prueba de medios de pago locales de cada país, y simular las distintas respuestas de pagos, sin necesidad de utilizar una tarjeta real.

Para eso, utiliza alguna de las tarjetas que te facilitamos a continuación, dependiendo de tu país:

----[mla]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------
----[mlb]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 4332 1540 6351 | 123 | 11/25 |
| Visa | 4235 6477 2802 5682 | 123 | 11/25 |
| American Express | 3753 651535 56885 | 1234 | 11/25 |

------------
----[mlc]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5416 7526 0258 2580 | 123 | 11/25 |
| Visa | 4168 8188 4444 7115 | 123 | 11/25 |
| American Express | 3757 781744 61804 | 1234 | 11/25 |

------------
----[mco]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5254 1336 7440 3564 | 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |

------------
----[mlm]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Visa | 4075 5957 1648 3764 | 123 | 11/25 |

------------
----[mlu]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |

------------
----[mpe]----

| Tarjeta | Número | Código de seguridad | Fecha de vencimiento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------

Para **probar distintos resultados de pago**, completa el estado deseado en el nombre del titular de la tarjeta:

| Estado de pago | Descripción |
| --- | --- |
| `APRO` | Pago aprobado |
| `CONT` | Pago pendiente |
| `OTHE` | Rechazado por error general |
| `CALL` | Rechazado con validación para autorizar |
| `FUND` | Rechazado por monto insuficiente | 
| `SECU` | Rechazado por código de seguridad inválido | 
| `EXPI` | Rechazado por problema con la fecha de expiración | 
| `FORM` | Rechazado por error en formulario | 