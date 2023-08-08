# Ciclo de vida de la Mini App

El ciclo de vida de los MiniApps es controlado a través de eventos de callback a los que se puede suscribir como cualquier evento personalizado `DOM`. Hay tres categorías de eventos del ciclo de vida, cuya información puedes consultar a continuación.

## GlobalState

Esta categoría presenta el estado del ciclo de vida general de la Mini App, que puede ser:

* `GlobalState.shown`: Mini App está visible y en primer plano.
* `GlobalState.hidden`: Mini App no ​​está visible y se ha movido al primer plano.
* `GlobalState.error`: Mini App está en un estado no válido.

## PageState

Esta categoría presenta el estado del ciclo de vida de la página MiniApp, que puede ser:

* `PageState.ready`: si el MiniApp está listo para usarse pero pasa a un segundo plano antes de que se cargue por completo, es posible que este evento se envíe después de `GlobalState.hidden`.
* `PageState.back`: si en el manifiest `control_back_action` se declara como `true` y el usuario presiona el botón **Volver** en el dispositivo, este evento se enviará al Mini App.

## PointPayment

Esta categoría muestra el estado de los pagos, que pueden ser:

* `PointPayment.Success`: se inició un flujo de intento de pago, el pago se completó con éxito y el Mini App se cargó por completo.
* `PointPayment.Error`: se inició un flujo de intento de pago, pero el usuario presionó el botón **Volver** y el pago no se completó.

<center>

![miniapps-lifecycle](/mini-apps/miniapps-lifecycle-es.png)

</center>            