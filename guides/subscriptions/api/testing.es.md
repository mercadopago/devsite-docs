---
sites_supported:
    - mla
    - mlb
    - mlm
    - global
---


# Prueba tu integración

Puedes probar tu integración antes de salir a producción, a fin de realizar los ajustes que necesites. Para ello, puedes utilizar tarjetas de prueba y simular las distintas respuestas de pagos, sin necesidad de utilizar una tarjeta real.

Utiliza tus credenciales de _Sandbox_ y alguna de las tarjetas que te facilitamos a continuación, dependiendo de tu país:

| País       | Visa                | Mastercard          | American Express  |
| ---------- | ------------------- | ------------------- | ----------------- |
| Argentina  | 4509 9535 6623 3704 | 5031 7557 3453 0604 | 3711 803032 57522 |
| Brasil     | 4235 6477 2802 5682 | 5031 4332 1540 6351 | 3753 651535 56885 |
| Chile      | 4168 8188 4444 7115 | 5416 7526 0258 2580 | 3757 781744 61804 |
| Colombia   | 4013 5406 8274 6260 | 5254 1336 7440 3564 | 3743 781877 55283 |
| México     | 4075 5957 1648 3764 | 5474 9254 3267 0366 | no disponible     |
| Perú       | 4009 1753 3280 6176 | no disponible       | no disponible     |
| Venezuela  | 4966 3823 3110 9310 | 5177 0761 6430 0010 | no disponible     |

Para probar los posibles resultados de un pago, utiliza alguno de los siguientes prefijos en el campo `name` de */card_tokens* o en el campo `cardholderName`:

| Prefijo | Descripción                     |
| ------- | ------------------------------- |
| APRO    | Pago aprobado                   |
| CONT    | Pago pendiente                  |
| CALL    | Rechazo llamar para autorizar   |
| FUND    | Rechazo por monto insuficiente  |
| SECU    | Rechazo por código de seguridad |
| EXPI    | Rechazo por fecha de expiración |
| FORM    | Rechazo por error en formulario |
| OTHE    | Rechazo general                 |

Una vez finalices tus pruebas y estés listo para recibir pagos productivos, deberás reemplazar las [credenciales](https://www.mercadopago.com/mla/account/credentials) por las de producción y [activar el Modo Producción](https://www.mercadopago.com/mla/account/credentials). **No necesitas cambiar otra cosa en tu código**.
