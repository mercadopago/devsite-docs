---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
---
# Probando la integración

Es muy importante que antes de salir a producción realices pruebas del flujo de pagos, verificando que las configuraciones que realizaste a nivel de preferencia se reflejen efectivamente en el _checkout_.
Debes verificar que:

+ La información del bien o servicio a pagar es correcta.
+ Se reconoce la cuenta del cliente, porque envías el _email_.
+ Ofreces la formas de pago que deseas.
+ La experiencia de pagos es la adecuada y se informa el resultado del pago.

Para probar la integración sigue estos pasos:

1. Configura la [_public key_ de _sandbox_]([FAKER][CREDENTIALS][URL])en tu aplicación.
2. Crea la preferencia en tu servidor con el access token.
3. Completa los datos del formulario, ingresando los dígitos de una tarjeta de prueba. En fecha de expiración debes ingresar cualquier fecha posterior a la actual y en código de seguridad 3 o 4 dígitos dependiendo de la tarjeta.
4. En el nombre del titular de la tarjeta debes ingresar el prefijo correspondiente a lo que quieras probar:

* **APRO**: Pago aprobado.  
* **CONT**: Pago pendiente.  
* **CALL**: Rechazo llamar para autorizar.  
* **FUND**: Rechazo por monto insuficiente.  
* **SECU**: Rechazo por código de seguridad.  
* **EXPI**: Rechazo por fecha de expiración.  
* **FORM**: Rechazo por error en formulario.  
* **OTHE**: Rechazo general.  

### Tarjetas para probar nuestro checkout

Usa estas tarjetas de prueba para testear los diferentes resultados del pago.

| País | Visa | Mastercard | American Express |
| --- | --- | --- | --- |
| Argentina | 4509 9535 6623 3704 |5031 7557 3453 0604 | 3711 803032 57522 |
| Brasil | 4235 6477 2802 5682 | 5031 4332 1540 6351 | 3753 651535 56885 |
| Chile | 4168 8188 4444 7115 | 5416 7526 0258 2580 | 3757 781744 61804 |
| Colombia | 4013 5406 8274 6260 | 5254 1336 7440 3564 | 3743 781877 55283 |
| México | 4075 5957 1648 3764 | no disponible | 3766 7520 5781 151|
| Perú | 4009 1753 3280 6176 | no disponible | no disponible |
| Uruguay | 4157 2362 1173 6486 | 5161 4413 1585 2061 | no disponible |
| Venezuela | 4966 3823 3110 9310 | 5177 0761 6430 0010 | no disponible |

También [puedes utilizar tarjetas de prueba de medios de pago locales de cada país](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/localization/local-cards).
