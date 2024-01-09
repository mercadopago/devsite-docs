---
sites_supported:
  - mlb
---

# Los cobros mes a mes en el reporte de Dinero disponible

Te mostramos cómo ver los cobros mes a mes de tu cuenta de Mercado Pago en el reporte de Dinero disponible.

## Movimientos de tus cobros mes a mes

La cantidad de cuotas que elige el comprador determina la cantidad de pagos que recibes. Por esto, la visualización de los pagos difiere del esquema tradicional de liberación.

## Cómo ver tus cobros

La venta va a estar dividida en la cantidad de cuotas en las que fue realizada. Por lo tanto, el reporte mostrará cada cuota por separado, ya que cada una de ellas tiene una fecha de liberación distinta. Es decir, cada cuota corresponde a un mes distinto. 

En la columna `DESCRIPTION` puedes identificar a la cuota con el valor `installment` y en la columna `INSTALLMENTS` puedes ver a qué número de cuota refiere.

![Ejemplo de liberación de cuota](/images/manage-account/reports/reports-information-details/pnf-liberacion-de-cuota-bank.png)

## Tipos de devoluciones

Existen distintas formas de ver tus devoluciones según su tipo y las cuotas liberadas.

### Devoluciones totales

Si la devolución es total, vas a encontrar el detalle de todas las cuotas en tu reporte y al mismo tiempo, el reembolso correspondiente del pago completo.

En la columna `DESCRIPTION` puedes identificar cada cuota con el valor `installment` y a la devolución total como `refund`.

> Si tienes dudas sobre cuáles son las cuotas que corresponden a un pago, busca los movimientos que tengan el mismo `SOURCE_ID`.

![Ejemplo de reembolso antes de liberar alguna cuota](/images/manage-account/reports/reports-information-details/pnf-reembolso-antes-de-liberar-bank.png)

> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/available-money/glossary) de Dinero disponible para revisarlo cuando lo necesites o quieras consultar algún término técnico.


### Devoluciones parciales

Si la devolución es parcial antes del primer cobro, solo se va a actualizar el número de cuotas y sus cantidades según corresponda. En el caso de que ya hayas recibido algún pago, se restará la devolución del total que falte cobrar y se volverá a especificar el monto de las cuotas.

Si la devolución es mayor que el monto que te falta recibir, no te preocupes, en el próximo reporte verás el valor por la diferencia para poder completarla.

## Contracargos

Cuando un [contracargo](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/account/chargebacks) o una mediación se resuelve a favor del comprador puedes encontrar el detalle en el reporte. Aparecerá el listado con el detalle de todas las cuotas, o las que falten liberar, y el monto total por el contracargo del pago.

Para identificar este caso, puedes ver en la columna de `DESCRIPTION` el valor `chargeback` que corresponde a los contracargos de las cuotas que ya habían sido cobradas.


> Si tienes dudas sobre cuáles son las cuotas que corresponden a un pago, busca los movimientos que tengan el mismo `SOURCE_ID`.

![Ejemplo de contracargo](/images/manage-account/reports/reports-information-details/pnf-contracargo-luego-de-liberar-bank.png)

## Adelanto de cuotas

Si pediste un adelanto vas a poder ver todas las cuotas que anticipaste en el reporte y la comisión que corresponda.

En la columna de `DESCRIPTION` puedes identificar cada cuota con el valor `installment` y a la comisión como `fee-release_in_advance`.

![Ejemplo de adelanto de cuotas](/images/manage-account/reports/reports-information-details/pnf-adelanto-de-cuotas-bank.png)

> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/available-money/glossary) de Dinero disponible para revisarlo cuando lo necesites o quieras consultar algún término técnico.

