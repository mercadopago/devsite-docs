---
sites_supported:
  - mla
---

# Probando la Integración

> WARNING
>
>Nota
>
> Esta documentación es sobre la versión antigua de Checkout.
>
> Ten en cuenta que solo hay soporte activo y nuevas funcionalidades en la [nueva versión del Web Checkout](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction/).

Es muy importante que antes de salir a producción realices pruebas del flujo de pagos, verificando que las configuraciones que realizaste a nivel de preferencia se reflejen efectivamente en el _checkout_.
Debes verificar que:

+ La información del bien o servicio a pagar es correcta.
+ Se reconoce la cuenta del cliente, porque envías el _email_.
+ Ofreces la formas de pago que deseas.
+ Tu cliente es redireccionado correctamente luego de finalizado el pago.
+ La experiencia de pagos es la adecuada y se informa el resultado del pago.

## ¿Cómo realizar las pruebas?

### Crea usuarios de prueba

Para simular el proceso de pago de punta a punta debes crear 2 usuarios de prueba: **vendedor** y **comprador**.

Debes efectuar la siguiente llamada a la API para crear cada uno de los usuarios.

Utiliza el dato *site_id* para indicar el país donde quieres realizar las pruebas.

| Pais  | Site_id |
| ---- 	| ----- |
| Argentina   | **MLA** |
| Brasil  | **MLB** |
| México  | **MLM** |
| Chile | **MLC** |
| Uruguay | **MLU** |
| Perú  | **MPE** |
| Colombia  | **MCO** |

##### _Request_
[[[
```php
<?php

  MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");

  $body = array(
    "json_data" => array(
      "site_id" => "[FAKER][GLOBALIZE][UPPER_SITE_ID]"
    )
  );

  $result = MercadoPago\SDK::post('/users/test_user', $body);

  var_dump($result);
?>
```
```curl
curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=ENV_ACCESS_TOKEN" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```
]]]
##### _Response_
```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

### Tarjetas de prueba

| País 		   | Visa 				       | Mastercard        | American Express |
| ---- 		   | ---- 				       | ----------        | ---------------- |
| Argentina  | 4509 9535 6623 3704 |5031 7557 3453 0604|3711 803032 57522 |
| Brasil  	 | 4235 6477 2802 5682 |5031 4332 1540 6351|3753 651535 56885 |
| Chile   	 | 4168 8188 4444 7115 |5416 7526 0258 2580|3757 781744 61804 |
| Colombia   | 4013 5406 8274 6260 |5254 1336 7440 3564|3743 781877 55283 |
| México  	 | 4075 5957 1648 3764 |5474 9254 3267 0366| no disponible    |
| Perú    	 | 4009 1753 3280 6176 |no disponible      | no disponible    |
| Uruguay  	 | 4157 2362 1173 6486 |5161 4413 1585 2061| no disponible    |

También puedes [usar tarjetas de prueba de medios de pago locales en cada país.](https://www.mercadopago.com.ar/developers/es/guides/localization/local-cards)


### Realiza las pruebas correspondientes

El proceso completo para probar el checkout es el siguiente:

1. Inicia sesión de Mercado Pago con el **vendedor** y toma las [credenciales](https://www.mercadopago.com/mla/account/credentials) para configurarlas en la creación preferencia de pago.
2. Cierra sesión de MercadoPago.
3. Envía el mail del **comprador** en la preferencia de pago.
4. Completa los datos del formulario, ingresando los dígitos de una tarjeta de prueba. En fecha de expiración debes ingresar cualquier fecha posterior a la actual y en código de seguridad 4 dígitos aleatorios para tarjetas Amex o 3 para cualquier otra.
5. En el nombre del titular de la tarjeta puedes ingresar alguno de los siguientes prefijos para probar los distintos resultados (pagos aprobados, rechazados o pendientes):
    * **APRO**: Pago aprobado  
    * **CONT**: Pago pendiente  
    * **CALL**: Rechazo llamar para autorizar  
    * **FUND**: Rechazo por monto insuficiente  
    * **SECU**: Rechazo por código de seguridad  
    * **EXPI**: Rechazo por fecha de expiración  
    * **FORM**: Rechazo por error en formulario  
    * **OTHE**: Rechazo general
6. En caso de pago rechazado, podrás efectuar el reintento del mismo y simular algún otro resultado tal como se indica en el punto anterior.
7. Verifica que la notificación te haya llegado correctamente.
8. Realiza la devolución de un pago acreditado y verifica que te haya llegado la notificación con la actualización del estado del pago.

### Condiciones de uso

+ Los usuarios de prueba caducan luego de 60 días sin actividad en MercadoPago.
+ Puedes tener hasta 10 cuentas en simultáneo.
+ Para hacer pagos de prueba usa montos bajos:
    * Puedes pagar una con tarjeta de crédito real, luego cancelar los pagos y recibir el reintegro.
    * Puedes hacer pagos con cupón pero no debes concretarlos.
+ Las simulaciones solo pueden realizarse entre usuarios de prueba.
+ No es posible retirar a cuentas bancarias el dinero recibido en las pruebas.

### Próximos pasos

* [Campañas de descuento](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/v1/discount-campaigns/)
* [Personalizaciones](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/v1/personalization/)
