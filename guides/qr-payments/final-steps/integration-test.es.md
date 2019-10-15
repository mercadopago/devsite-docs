---
sites_supported:
  - mla
  - mlb
  - mlv
  - mco
  - mlm
  - global
---


# Prueba tu integración 

## ¿Cómo probar tu integración?

Los usuarios de prueba te permiten probar la integración de tu sistema con Mercado Pago sin usar dinero real. 

Tipos de usuarios | Descripción
----------------- | -------------------------------------
Vendedor | Es la **cuenta de pruebas que usas para obtener las credenciales** a configurar en tu sistema para poder interactuar con las APIs de Mercado Pago. También podrás acceder a la cuenta de Mercado Pago y revisar las transacciones probadas. 
Comprador | Es la **cuenta de pruebas que usas para probar el proceso de compra**. Debes acceder a la app de Mercado Pago con los datos de este usuario. En caso de tener disponible dinero en cuenta o tarjetas guardadas, estarán habilitadas como medio de pago.


## Generar usuarios de prueba

Para realizar las pruebas es necesario que tengas como mínimo dos usuarios: un comprador y un vendedor.

Ejecuta el siguiente comando para generar un usuario de prueba:  

```curl
curl -X POST \

-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=PROD_ACCESS_TOKEN
-d '{"site_id":"MLA"}'
```

> NOTE
> 
> Nota
> 
> Las credenciales usadas son las productivas de la cuenta con la cual vayas a operar.  

Respuesta:

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

> WARNING
> 
> IMPORTANTE
> 
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Para hacer pagos de prueba te recomendamos usar montos bajos.
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.
> * Usa tarjetas de pruebas, ya que no es posible retirar el dinero.

## Tarjetas de prueba 

Tarjeta | Número | CVV | Fecha de vencimiento
------------ | ------------------------ | ------------ | ------------------------
Mastercard | 5031 7557 3453 0604 | 123 | 11/25
Visa | 4170 0688 1010 8020 | 123 | 11/25
American Express | 3711 8030 3257 522 | 1234 | 11/25

Para **probar distintos resultados de pago**, completa el dato que quieras en el nombre del titular de la tarjeta:

- APRO: Pago aprobado.
- OTHE: Rechazado por error general.
- CALL: Rechazado con validación para autorizar.
- FUND: Rechazado por monto insuficiente.
- SECU: Rechazado por código de seguridad inválido.
- EXPI: Rechazado por problema con la fecha de expiración.

## Prueba el flujo de pago

### 1. Con tu usuario vendedor, asigna una orden a un punto de venta. 

Genera una orden con las [credenciales](https://www.mercadopago.com/mla/account/credentials) del usuario de pruebas que quieras usar como vendedor:
  - Para [modelo atendido](https://www.mercadopago.com.ar/developers/es/guides/qr-payments/qr-attended/qr-attended-part-a/), envía una orden al QR previamente creado. 
  - Para [modelo desatendido](https://www.mercadopago.com.ar/developers/es/guides/qr-payments/qr-unattended/qr-unattended-part-a/), disponibiliza la orden en la URL asignada.

### 2. Realiza un pago con tu usuario comprador
  - A. Inicia sesión en la app de Mercado Pago con tu usuario de prueba comprador.
  - B. Haz clic en Pagar con QR y escanea el QR del punto de venta.
  - C. Elige una tarjeta ya almacenada o completa los datos con una nueva y haz el pago.

### 3. Recibe notificaciones de la orden

Comprueba que hayas recibido las notificaciones del estado de la orden en tu sistema, ¡y listo!

## Casos para validar

Caso | Resultado esperado | Observaciones
------------- | ----------- | ----------
**Escaneo previo a creación de la orden**. El cliente escanea un código QR válido antes de hacer el pedido. | La app muestra la pantalla de espera. | Verifica que `fixed_amount`=**true** en la caja.
**Escaneo de QR**. El usuario escanea un código QR válido una vez realizado el pedido y creada la orden.| La app muestra la pantalla de pago.| Verifica el monto en la pantalla de pago.
**Pago aprobado**. El usuario realiza un pago aprobado.| El sistema de Punto de Venta recibe la información de un pago aprobado.| Verifica recepción de [notificaciones](https://www.mercadopago.com.ar/developers/es/guides/notifications/ipn/).
**Pago rechazado**. El usuario realiza un pago rechazado.| El sistema de Punto de Venta recibe la información de un pago rechazado y continua esperando el pago de la orden.| El `status` de la `merchant_order` debe ser **opened**
**Segundo intento de pago**. El usuario realiza primero un pago rechazado y después un pago aprobado.| El sistema de Punto de Venta recibe la información de un pago rechazado y luego un pago aprobado.| No eliminar la orden luego de un pago rechazado.
**Devolución de pago**. Se hace una devolución de un pago desde el Punto de Venta.| En la cuenta del comprador se impacta la devolución.| Ver [devoluciones](https://www.mercadopago.com.ar/activities).
**Cancelar orden**. El usuario se arrepiente y decide pagar en efectivo. | Se elimina la orden, y por ende al escanear el QR sólo se muestra la pantalla de espera. | Eliminar la orden de la caja.

## Quiero ir a Producción

Cuando tengas la aplicación **lista y funcionando** en modalidad de prueba y quieras empezar a procesar pagos reales, debes completar el formulario [Quiero ir a producción]([FAKER][CREDENTIALS][URL]). Más tarde Mercado Pago podrá auditar tu sitio, app o Software de Punto de Venta, verificando que se cumplan las reglas detalladas anteriormente. Caso contrario, un asesor entrará en contacto contigo para discutir si hay cosas que debes corregir en tu integración.

> WARNING
> 
> IMPORTANTE
> 
> * Si no completas el formulario de [Quiero ir a producción](https://www.mercadopago.com/mla/account/credentials/), no podrás hacer ningun tipo de devoluciones.

## ¿Por qué es necesario este proceso?

Porque así podemos garantizar la seguridad de los datos de tus clientes y lograr la mejor experiencia de compra, que ayude a maximizar la conversión de los pagos que recibas.
El incumplimiento de estas normas puede implicar desde el no procesamiento de pagos, hasta acciones legales de acuerdo a lo establecido en los [términos y condiciones](https://www.mercadopago.com.ar/ayuda/terminos-y-condiciones_299).
