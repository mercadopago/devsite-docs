
# Lógica de reintentos de cobro

Al automatizar la recurrencia de tus cobros, se crean pagos autorizados que tendrán una fecha de débito configurada en base a la periodicidad que se definió en la suscripción. 

## Cómo funciona
En el momento en que se cobre la cuota pueden surgir tres alternativas en base al resultado de su pago:

1. __El pago es realizado exitosamente__ por lo que la cuota quedará _processed_ y ya no se reintentará cobrarla. 
1. __El pago se está procesando__ por lo que la cuota quedará en _waiting for gateway_ hasta que se resuelva el pago.
1. __El pago es rechazado__ por lo que la cuota quedará en _recycling_ siempre y cuando la cuota no esté expirada o no haya alcanzado el máximo de reintentos. Caso contrario, quedará en _processed_.

Cuando una cuota queda en el estado recycling entra en un esquema de reintentos con un máximo de 4 posibilidades, en los que se vuelve a realizar el cobro de la cuota. El resultado puede ser cualquiera de los tres puntos mencionados arriba. 

Si el pago resulta rechazado se actualiza a una nueva fecha de cobro sumando 1 de las 4 posibilidades como ventana de tiempo de reintento a la última fecha de disponible.





*  Por defecto se reintenta dentro de una ventana de 10 días. En caso de que la cuota tenga fecha de expiración, la ventana de tiempo se ajusta a esa fecha y mantiene la lógica de 4 reintentos.

Si una cuota se encuentra en el estado _waiting for gateway_ y cuando se resuelve el pago resulta rechazada y se cumplió la fecha de expiración, la cuota automáticamente pasará a procesada con el estado _processed_. Caso contrario, entrará al esquema de reintento descrito en la imagen.

El día del reintento de cobro de la cuota puede dar como resultado alguna de las 3 situaciones ya mencionadas. En el caso de que no se pueda cobrar la cuota en el cuarto reintento, la cuota automáticamente quedará en el estado _processed_ asociada a un pago rechazado

> NOTE
> 
> Nota
> 
> El resultado de una cuota no afecta la generación y procesamiento del resto de las cuotas para la misma suscripción.

------------
### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Actualiza, modifica o cancela tus suscripciones.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/advenced-integration/)
