# Prueba de integración

Es crucial realizar pruebas del flujo completo antes de pasar a producción, verificando que la creación de pagos se realice correctamente y que los mensajes sean efectivos en la comunicación con el usuario. Una buena experiencia para tus clientes en el proceso de pago ayuda a mejorar la conversión.

Para realizar una compra de prueba, es necesario utilizar las **credenciales de prueba de su usuario de producción**. Para obtenerlas, accede a **Detalles de la aplicación > Credenciales** dentro del [Panel del desarrollador](/developers/panel/app) o en tu cuenta de Mercado Pago, accediendo a [Tu negocio > Configuraciones > Gestión y administración > Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

Puedes usar tarjetas de prueba de métodos de pago locales y simular diferentes respuestas de pago, sin necesidad de usar una tarjeta real.
 
Para eso, dependiendo de tu país, utiliza una de las tarjetas de **crédito** que te proporcionamos a continuación.

----[mla]----
| Tarjeta | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------
----[mlb]----
| Tarjeta | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 4332 1540 6351 | 123 | 11/25 |
| Visa | 4235 6477 2802 5682 | 123 | 11/25 |
| American Express | 3753 651535 56885 | 1234 | 11/25 |

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
| Mastercard | 5254 1336 7440 3564| 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |

------------
----[mlm]----
| Tarjeta | Número | Código de seguridad | Fecha de caducidad |
| :--- | :---: | :---: | :---: |
| Mastercard | 5474 9254 3267 0366 | 123 | 11/25 |
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

Para **probar diferentes resultados de pago**, completa el estado deseado en el nombre del titular (campo `card_holder_name`) de la tarjeta:

----[mla]----
| Estado de pago | Descripción | Documento de identidad |
| --- | --- | --- |
| `APRO` | Pago aprobado | (DNI) 12345678 |
| `OTHE` | Rechazado por error general | (DNI) 12345678 |
| `CONT` | Pendiente de pago | - | 
| `CALL` | Rechazado con validación para autorizar | - |
| `FUND` | Rechazado por importe insuficiente | - |
| `SECU` | Rechazado por código de seguridad inválido | - |
| `EXPI` | Rechazado debido a un problema de fecha de vencimiento | - |
| `FORM` | Rechazado debido a un error de formulario | - |

------------
----[mlb]----
| Estado de pago | Descripción | Documento de identidad |
| --- | --- | --- |
| `APRO` | Pago aprobado | (CPF) 12345678909 |
| `OTHE` | Rechazado por error general | (CPF) 12345678909 |
| `CONT` | Pendiente de pago | - |
| `CALL` | Rechazado con validación para autorizar | - |
| `FUND` | Rechazado por importe insuficiente | - |
| `SECU` | Rechazado por código de seguridad inválido | - |
| `EXPI` | Rechazado debido a un problema de fecha de vencimiento | - |
| `FORM` | Rechazado debido a un error de formulario | - |

------------
----[mlc]----
| Estado de pago | Descripción |Documento de identidad |
| --- | --- | --- |
| `APRO` | Pago aprobado | (otro) 123456789 |
| `OTHE` | Rechazado por error general | (otro) 123456789 |
| `CONT` | Pendiente de pago | - |
| `CALL` | Rechazado con validación para autorizar | - |
| `FUND` | Rechazado por importe insuficiente | - |
| `SECU` | Rechazado por código de seguridad inválido | - |
| `EXPI` | Rechazado debido a un problema de fecha de vencimiento | - |
| `FORM` | Rechazado debido a un error de formulario | - |

------------
----[mco]----
| Estado de pago | Descripción | Documento de identidad |
| --- | --- | --- |
| `APRO` | Pago aprobado | 123456789 |
| `OTHE` | Rechazado por error general | 123456789 |
| `CONT` | Pendiente de pago | - |
| `CALL` | Rechazado con validación para autorizar | - |
| `FUND` | Rechazado por importe insuficiente | - |
| `SECU` | Rechazado por código de seguridad inválido | - |
| `EXPI` | Rechazado debido a un problema de fecha de vencimiento | - |
| `FORM` | Rechazado debido a un error de formulario | - |

------------
----[mlm]----
| Estado de pago | Descripción |
| --- | --- |
| `APRO` | Pago aprobado |
| `OTHE` | Rechazado por error general |
| `CONT` | Pendiente de pago |
| `CALL` | Rechazado con validación para autorizar |
| `FUND` | Rechazado por importe insuficiente |
| `SECU` | Rechazado por código de seguridad inválido |
| `EXPI` | Rechazado debido a un problema de fecha de vencimiento |
| `FORM` | Rechazado debido a un error de formulario |

------------
----[mlu]----
| Estado de pago | Descripción |Documento de identidad |
| --- | --- | --- |
| `APRO` | Pago aprobado | (CI) 12345678 <br> (otro) 123456789 |
| `CONT` | Pendiente de pago | (CI) 12345678 <br> (otro) 123456789 |
| `OTHE` | Rechazado por error general | - |
| `CALL` | Rechazado con validación para autorizar | - |
| `FUND` | Rechazado por importe insuficiente | - |
| `SECU` | Rechazado por código de seguridad inválido | - |
| `EXPI` | Rechazado debido a un problema de fecha de vencimiento | - |
| `FORM` | Rechazado debido a un error de formulario | - |

------------
----[mpe]----
| Estado de pago | Descripción | Documento de identidad |
| --- | --- | --- |
| `APRO` | Pago aprobado | 123456789 |
| `OTHE` | Rechazado por error general | 123456789 |
| `CONT` | Pendiente de pago | - |
| `CALL` | Rechazado con validación para autorizar | - |
| `FUND` | Rechazado por importe insuficiente | - |
| `SECU` | Rechazado por código de seguridad inválido | v
| `EXPI` | Rechazado debido a un problema de fecha de vencimiento | - |
| `FORM` | Rechazado debido a un error de formulario | - |

------------

> Para mais informações sobre o fluxo de teste, acesse a seção de **Realizar compra teste** no [Checkout Transparente](/developers/pt/docs/checkout-api/integration-test/make-test-purchase) ou no [Checkout Bricks.](/developers/pt/docs/checkout-bricks/integration-test/test-payment-flow)