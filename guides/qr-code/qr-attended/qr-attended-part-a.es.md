---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
  - mlb
---

# Pagos QR modelo atendido

## ¿Qué es QR por modelo atendido?

Luego de haber tomado el pedido a un cliente, **este modelo permite que el operador asocie una orden a la caja** para ser cobrada. 
Se recomienda para tiendas de productos, restaurantes de comida rápida, entre otros.

## Características del modelo

Las características principales son: 

- El operador siempre trabaja desde su sistema de punto de venta al que le fue incluido la funcionalidad de Cobrar con Mercado Pago. Desde esa opción, se envía una orden a la caja asociada. 
- Para que el cliente realice el pago, es necesario asociar una orden a la caja. 
- El operador ve el cobro impactado en su sistema.

## Flujo del modelo

Te explicamos cómo funciona el modelo atendido: 

>![Flujo de pago en punto de venta QR Mercado Pago](/images/qr-user-flow.es.png)

---

> NOTE
> 
> Nota
> 
> El `pos_id`  es el identificador unívoco de la caja dentro de Mercado Pago. Se obtiene al momento de crear un caja y tiene un QR asociado.

1. (A) El punto de venta registra la orden y le envía sus datos al servidor del vendedor.<br/>
   (B) El servidor del vendedor le envía la orden al servidor de Mercado Pago para el `pos_id` asociado al punto de venta del cobro.
2. La orden se encuentra asociada al QR y queda a la espera del escaneo del cliente.
3. El cliente escanea el QR y Mercado Pago busca la orden a través del `pos_id`. No afecta el flujo si el escaneo se realiza antes de comenzar el registro de la orden.
4. (A) Luego, el servidor del vendedor recibe una notificación de la orden.<br/>
   (B) Se confirma la recepción.<br/>
   (C) Y el cliente verá desde la aplicación la pantalla para realizar el pago de la orden.
5. Finalmente, el cliente paga la orden. 
6. (A) El cliente verá la confirmación del pago.<br/>
   (B) El servidor del vendedor recibe una notificación con la orden. <br/>
   (C) Y confirma su recepción.
7. (A) El servidor del vendedor consulta el estado de la orden con el ID recibido en la última notificación para saber si está cerrada o si sigue abierta, pendiente de pago.<br/>
   (B) Mercado Pago devuelve los datos correspondientes como su estado, información de pagos, entre otros.
8. Si la orden se encuentra cerrada (**closed**), se puede imprimir el comprobante para finalizar la transacción.

> NOTE
> 
> Nota
> 
> En el punto 4 deberás ejecutar los pasos 7A y 7B para obtener el estado de la orden.

### Próximos pasos


> LEFT_BUTTON_REQUIRED_ES
>
> Cómo integrar QR modelo atendido
>
> Conoce paso a paso como integrar este modelo.
>
> [Cómo integrar QR modelo atendido](https://www.mercadopago.com.ar/developers/es/guides/qr-code/qr-attended/qr-attended-part-b/)


