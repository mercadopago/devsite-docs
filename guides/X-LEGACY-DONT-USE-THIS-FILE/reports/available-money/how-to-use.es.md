
# ¿Cómo usar el reporte?



Una vez listo y descargado el reporte, tendrás un archivo para consultar las planillas de cálculo o importar en el programa de conciliación que uses.

Para consultar el reporte te recomendamos descargarlo en formato .csv para abrirlo en el programa que lo visualices. Configura tu programa para que soporte el formato UTF-8, así evitas problemas de lectura.

> WARNING
>
> El reporte de Dinero retirado será deshabilitado desde el 1 de marzo de 2022.
>
> Puedes usar el [reporte de ----[mla]----Liquidaciones------------ ----[mlm, mlb, mlc, mco, mlu, mpe]----Liberaciones------------](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/released-money/introduction) para conciliar las transacciones del dinero disponible en tu cuenta, incluidos tus retiros bancarios.

## ¿Qué contiene el reporte?

El reporte está compuesto por:


| Composición del reporte | Descripción |
| --- | --- |
| Initial Available Balance |<br/> Balance inicial.<br/><br/>|
| Release |<br/> El detalle de las liberaciones de dinero que incluye el balance inicial.<br/><br/> |
| Block | <br/>Los bloqueos de dinero por disputas.<br/><br/> |
| Unblock |<br/> Los desbloqueos por la resolución de las disputas.<br/><br/>|
| Subtotal | <br/>Es la suma de las operaciones que componen a cada sección.<br/><br/>|
| Total| <br/> Es el resultado final compuesto por la suma de todos los subtotales. <br/><br/>Es decir:<br/> subtotal `Release` + subtotal `Block` + subtotal `Unblock` = resultado total<br/><br/> |

Ademas el reporte refleja los conceptos contables del *debe* (dinero que tienes que pagar) y *haber* (dinero que tienes por cobrar) escribiendo el reporte en dos columnas, una por cada concepto:  

> Tu haber lo verás en la columna `NET_CREDIT`
>
> Tu debe estará en la columna `NET_DEBIT`

Verás el dinero disponible de las operaciones liquidadas en las columnas `NET_CREDIT` (acreditado) y `NET_DEBIT` (debitado), dependiendo de si el monto es positivo o negativo. También verás ahí el monto bruto y los gastos de financiamiento, impuestos y costos de envío que descontamos para llegar al monto neto.

**¿Qué pasa si un retiro falla?**

Si esto pasa, el reporte sigue siendo válido. El dinero vuelve a tu cuenta y la operación aparecerá en el reporte como una nueva línea en la columna `NET_CREDIT`.

----[mlm, mlb, mlc, mco, mlu, mla]----
> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/available-money/glossary) de Dinero retirado para revisarlo cuando lo necesites o quieras consultar algún término técnico.
------------

----[mpe]----
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/available-money/glossary) de Dinero retirado para revisarlo cuando lo necesites o quieras consultar algún término técnico.
------------
## Ejemplo de un reporte

Observa cómo está compuesto el reporte de Dinero retirado en este ejemplo para identificar las secciones y leer tus propios reportes:

![Reporte de Dinero retirado Ejemplos Mercado Pago](/images/manage-account/reports/examples-es.png)

La versión por defecto mostrará una vista extendida de las columnas. El informe final tendrá la mayor cantidad de detalle posible.

----[mlm, mlb, mlc, mco, mlu, mla]----
> WARNING
>
> Importante: diferencias entre retiro parcial y retiro total
>
> Cuando retires todo tu dinero disponible, el total del reporte va a coincidir con ese monto. En cambio, cuando hagas un retiro parcial, que no incluya la totalidad de tu dinero listo para usar, el total de dinero retirado y el total del reporte no van a coincidir. 
>
>Por ejemplo, imagina que tienes $ 3.000 disponibles para retirar a una cuenta bancaria pero solo retiras $ 2.000. El retiro es parcial pero el valor total del reporte seguirá mostrándote el monto del balance inicial que había al momento del retiro, es decir, los $ 3.000 que tenías disponibles. En cambio, si retiras los $ 3.000, el valor total del reporte va a coincidir con el valor de ese retiro.
------------
----[mpe]----
## Diferencias entre retiro parcial y retiro total

Cuando retires todo tu dinero disponible, el total del reporte va a coincidir con ese monto. En cambio, cuando hagas un retiro parcial, que no incluya la totalidad de tu dinero listo para usar, el total de dinero retirado y el total del reporte no van a coincidir. Por ejemplo, imagina que tienes $ 3.000 disponibles para retirar a una cuenta bancaria pero solo retiras $ 2.000. El retiro es parcial pero el valor total del reporte seguirá mostrándote el monto del balance inicial que había al momento del retiro, es decir, los $ 3.000 que tenías disponibles. En cambio, si retiras los $ 3.000, el valor total del reporte va a coincidir con el valor de ese retiro.
------------
----[mpe]----
## ¿Cómo leer los reportes que generes a partir de enero de 2022?
------------
----[mlu]----
## ¿Cómo leer los reportes que generes a partir de marzo de 2022?
------------
----[mpe, mlu]---- 
Los reportes que generes a partir de  ------------ ----[mpe]----enero de 2022 ------------  ----[mlu]---- marzo de 2022 ------------ ----[mpe, mlu]---- tienen las siguientes características:
1. Los movimientos se presentan en el orden en que ocurrieron, con lo cual podrás identificarlos con mayor facilidad y controlar mejor tus ventas. 
2. Cuando se presenta alguna reclamación o contracargo por algún problema con el servicio o producto que vendiste, tu dinero es retenido hasta que la mediación se resuelva. Esta información se visualiza en tu reporte y la reconoces porque su descripción lleva el prefijo reserve-.
3. Los movimientos relacionados con los retiros sobre tu dinero disponible se muestran como payout y todas las mediaciones que surgen cuando se inicia o resuelve un reclamo se presentan como dispute. Para conocer la descripción de otros movimientos y términos, puedes usar [este glosario](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/released-money/glossary). 

## ¿Qué contiene el reporte?

El reporte presenta una estructura más simple para facilitar su comprensión:

| Composición del reporte | Descripción |
| --- | --- |
| Initial Available Balance |<br/> Balance inicial. Indica el dinero que tenías disponible en la fecha inicial del periodo que elegiste para conciliar. <br/><br/>|
| Release |<br/> El detalle de las transacciones que impactan el balance total.<br/><br/> |
| Total| <br/> Es la diferencia entre el monto neto acreditado total y el monto neto debitado total. <br/><br/> |

## Ejemplo de un reporte
Observa cómo está compuesto el reporte de Dinero retirado en este ejemplo para identificar las secciones y leer tus propios reportes:

![Reporte de Dinero retirado Ejemplos Mercado Pago](/images/manage-account/reports/example-n-ledger-es.jpg)

------------
<hr/>

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Genera tus reportes
>
> Conoce las formas de generar un reporte y sigue los pasos para configurar tus preferencias.
>
> [Genera tus reportes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/available-money/generate)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Glosario
>
> Conoce qué significa cada término y el detalle de las columnas que componen al reporte.
>
> [Glosario](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/available-money/glossary)
