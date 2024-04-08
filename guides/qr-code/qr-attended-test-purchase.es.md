# Realizar compra de prueba

A continuación, te enseñaremos cómo simular un flujo de pago completo para Código QR modelo atendido.

> WARNING
>
> Importante
>
> Durante todo el flujo de prueba deberás usar las **credenciales productivas de los usuarios de prueba** que creaste previamente. En cada paso te será indicado si se trata del usuario vendedor o del comprador.

## Crear orden

1. Inicia sesión en la [web de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) con el usuario y la contraseña de la cuenta vendedor de prueba que creaste.
2. Crea una [nueva aplicación](/developers/es/docs/qr-code/additional-content/your-integrations/dashboard) de prueba para código QR y obtén las credenciales productivas (Access Token) del usuario de prueba vendedor.
3. Utiliza las credenciales productivas del usuario de prueba para crear una [sucursal](/developers/es/reference/stores/_users_user_id_stores/post) y una [caja](/developers/es/reference/pos/_pos/post) siguiendo las instrucciones para configurarlas. Ten en cuenta que, al crear la caja, el campo `fixed_amount` debe ser `true`. Los links devueltos en la respuesta para el objeto `qr` son las imágenes del QR asociado a tu caja.
4. Todavía con las credenciales del usuario de prueba vendedor, [crea una orden](/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put) y asígnala a la caja que creaste en el paso anterior. Al hacer esto, estarás asignando también esa orden al Código QR asociado a la caja. Asegúrate de configurar el campo `notification_url` con  la URL donde recibirás las notificaciones sobre las actualizaciones de los pagos con el tópico `merchant_order`. 


## Realizar pago

1. Descarga e instala la **App de Mercado Pago en tu dispositivo móvil**, e inicia sesión con la cuenta del usuario de prueba definido como comprador.
2. Escanea desde tu dispositivo móvil el Código QR que generaste. La app mostrará el monto de la orden generada y las opciones de pago disponibles. 

----[mlb]----
> WARNING
>
> Importante
>
>  Los pagos con Pix no pueden ser hechos utilizando credenciales de prueba. Recomendamos seleccionar otro medio de pago para realizar la prueba de integración con Código QR.
------------
3. Realiza el pago utilizando [tarjetas de prueba](/developers/es/docs/qr-code/additional-content/your-integrations/test/cards), que te permitirán además probar distintos flujos de pago. 

### Casos de validación

Si lo deseas, puedes probar diversos casos para validar que tu sistema esté integrado correctamente con Mercado Pago. Se trata de escenarios que simulan situaciones que pueden acontecer al momento de realizar un pago. 

> WARNING
>
> Importante
>
> Si bien el ambiente de pruebas no permite validar casos de devolución de pagos o reembolsos, recomendamos que implementes el flujo de devoluciones en tu integración productiva utilizando nuestra [API de reembolsos](/developers/es/reference/chargebacks/_payments_id_refunds/post).

A continuación, puedes ver estos casos en detalle, así como el resultado esperado en el sistema para cada situación, y una serie de observaciones que te indicarán cómo proceder.

| Caso | Resultado esperado | Observaciones |
|:---:|:---:|:---:|
| **Escaneo correcto de QR**. El usuario escanea un Código QR válido; es decir, un QR al cual se le asignó una orden previamente.  | La app muestra la pantalla de pago con el monto asignado. | Verifica que el monto en la pantalla de pago sea el asignado en la creación de la orden. Si no lo es, verifica haber asignado la orden a la caja correcta. |
| **Pago aprobado**. El usuario realiza un pago y resulta aprobado. | El sistema de Punto de Venta recibe la información de un pago aprobado. | Verifica haber recibido las [notificaciones](/developers/es/docs/qr-code/additional-content/your-integrations/notifications) con el tópico `merchant_order` y que su status sea `closed`. |
| **Cancelar orden**. El usuario se arrepiente y decide pagar, por ejemplo, en efectivo. | Se debe [eliminar la orden](/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/delete) de la caja. | Escanea el QR y verifica que se muestre la pantalla de espera. Así, confirmarás que la orden fue correctamente eliminada. |
| **Escaneo previo a la creación de la orden**. El cliente escanea un Código QR antes de asignar el pedido. | La app muestra la pantalla de espera. | Verifica haber configurado el campo `fixed_amount=true` al momento de crear la caja. |
| **Pago rechazado**. El usuario realiza un pago y resulta rechazado. | El sistema de Punto de Venta recibe la información de un pago rechazado y continúa esperando el pago de la orden. | Verifica haber recibido las [notificaciones](/developers/es/docs/qr-code/additional-content/your-integrations/notifications) con el tópico `merchant_order` y que su status sea `opened`.  Aguarda el segundo intento de pago. |
| **Segundo intento de pago**. El pago realizado por el usuario es rechazado y, sin necesidad de escanear nuevamente el QR, se realiza un segundo intento, que resulta aprobado. | El sistema de Punto de Venta recibe la información de un pago rechazado, y luego de un pago aprobado. | No elimines la orden luego de recibir un pago rechazado y verifica que tu Punto de Venta no cierre la transacción en caja. |


## Verificar notificaciones

Una vez que hayas realizado el pago con el usuario de prueba, verifica haber recibido las notificaciones con el tópico `merchant_order` de los estados de la orden en tu sistema. 

Para comprobar que las mismas se hayan procesado correctamente, envía un **GET** al endpoint [/merchant_orders](/developers/es/reference/merchant_orders/_merchant_orders_id/get) con el ID de la merchant order que recibiste en la notificación.  Esto te permitirá validar el estado de cada una:
 * Si el estado devuelto es `closed`, la orden fue pagada exitosamente.
 * Si el estado devuelto es `opened`, la orden todavía no ha sido pagada. Debes aguardar a que se realice el pago y resulte aprobado.  