---
sites_supported:
  - mla
  - mlb
  - mlm
---

# Requisitos previos

## Para Producción

> LEFT_BUTTON_RECOMMENDED_ES
>
> Antes de comenzar
>
> Es importante conocer los datos de tu cuenta y tus credenciales de acceso para empezar a usar la API.
>
> [Requisitos previos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/overview)

## Ambiente de Pruebas

Puedes probar tus integraciones en un ambiente controlado mediante el uso de usuarios de prueba. Para crearlos puedes hacerlo usando el siguiente comando:

``` cURL
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test_user"
-d '{"site_id":"MLA"}'
```

> WARNING
> 
> IMPORTANTE
>
> * Debes realizar los pasos mencionados en **Antes de comenzar** para obtener las credeciales de acceso de tu usuario de pruebas.
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * No es posible obtener pagos exitosos con usuarios de pruebas, es por eso que hemos diseñado un [Simulador Point](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/simulator) que te ayudará a depurar la API.


## Colección Postman

> NOTE
>
> Descarga e importa la siguiente colección en Postman
>
> Hemos disponibilizado una colección de Postman para que puedas comenzar a utilizar la API lo más pronto posible. Recuerda tener tu **ACCESS_TOKEN** y **CLIENT_SECRET** a la mano. https://www.postman.com/collections/392c561db382e80ca146

En la colección de Postman, encontrarás los siguientes endpoints:

- **Register:** Mediante este endpoint te podrás dar de alta ante la API, esto nos permite tener control de los integradores que la usan.

- **Configure webhook:** Te permitirá informar una URL para recibir notificaciones acerca del cambio del estado de un intento de pago.

- **Validate webhook:** Nos permitirá validar la URL que configuraste en el paso anterior. Si la validación no es exitosa, no podrás recibir notificaciones webhook.

- **Devices:** Lista los dispositivos que tienes asociados.

- **Create Payment Intent:** Podrás crear intentos de pago y encolarlos en tus dispositivos.

- **Cancel Payment Intent:** Podrás eliminar los intentos de pago que hayas creado sobre tu dispositivo.


También podrás consultar la documentación de la colección en Postman: opciones(...) > View Documentation

---
### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Configura la API
>
> Si es tu primera vez usando la API de Integraciones, te invitamos a que la configures antes de crear tu primer intento de pago.
>
> [Configuración API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/configuration)

> LEFT_BUTTON_RECOMMENDED_ES
>
> Conoce nuestro simulador Point
>
> Haz uso de nuestro Simulador Point para que puedas probar la API de Integraciones sin necesidad de que tengas un dispositivo físico.
>
> [Simulador Point](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/mp-point/integration-api/simulator)