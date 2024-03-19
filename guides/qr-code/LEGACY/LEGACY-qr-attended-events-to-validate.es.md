# Casos para validar QR Atendido

| Caso | Resultado esperado | Observaciones |
| --- | --- | --- |
| **Escaneo previo a creación de la orden**. El cliente escanea un código QR válido antes de hacer el pedido. | La app muestra la pantalla de espera. | Verifica que `fixed_amount=true` en la caja. |
| **Escaneo de QR**. El usuario escanea un código QR válido una vez realizado el pedido y creada la orden. | La app muestra la pantalla de pago.| Verifica el monto en la pantalla de pago. |
| **Pago aprobado**. El usuario realiza un pago aprobado.| El sistema de Punto de Venta recibe la información de un pago aprobado. | [Verifica recepción de notificaciones](/developers/es/docs/qr-code/additional-content/your-integrations/notifications). |
| **Pago rechazado**. El usuario realiza un pago rechazado.| El sistema de Punto de Venta recibe la información de un pago rechazado y continúa esperando el pago de la orden.| El `status` de la `merchant_order` debe ser **opened**. |
| **Segundo intento de pago**. El usuario realiza primero un pago rechazado y después un pago aprobado.| El sistema de Punto de Venta recibe la información de un pago rechazado y luego un pago aprobado.| No eliminar la orden luego de un pago rechazado. |
| **Devolución de pago**. Se hace una devolución de un pago desde el Punto de Venta.| En la cuenta del comprador se impacta la devolución.| [Ver reembolsos y cancelaciones](/developers/es/docs/qr-code/additional-content/cancellations-and-refunds). |
| **Cancelar orden**. El usuario se arrepiente y decide pagar en efectivo. | Se elimina la orden, y por ende al escanear el QR sólo se muestra la pantalla de espera. | Eliminar la orden de la caja. |