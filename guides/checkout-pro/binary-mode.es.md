# Modo binario

Puede habilitar el modo binario si su modelo de negocio requiere que la aprobación del pago sea instantánea. De esta forma, el pago solo puede ser aprobado o rechazado.

Si está deshabilitado, el pago puede estar pendiente (si se requiere alguna acción por parte del comprador) o en proceso (si se requiere una revisión manual).


> NOTE
>
> Importante
>
> Habilitar el modo binario simplifica la integración con Checkout Pro, pero puede resultar en una disminución en la tasa porcentual de pagos aprobados. Esto se debe a que, para mantener el flujo instantáneo, los pagos pendientes o aún en proceso serán automáticamente rechazados por defecto.


Para habilitar el modo binario, envíe el parámetro `binary_mode` con el valor `true` al endpoint [/checkout/preferences](/developers/es/reference/preferences/_checkout_preferences/post) y ejecute el request como se indica en el ejemplo a continuación .


```json
"binary_mode": true
```

