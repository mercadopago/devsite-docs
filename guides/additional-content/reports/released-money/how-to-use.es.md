# ¿Cómo usar el reporte?

Una vez listo y descargado el reporte, tendrás un archivo para consultar las planillas de cálculo o importar en el programa de conciliación que uses.

Para consultar el reporte te recomendamos descargarlo en formato .csv y abrirlo en una hoja de cálculos o cualquier programa de visualización. Configura tu programa para que soporte el formato UTF-8, así evitas problemas de lectura.

## ¿Qué contiene el reporte?

El reporte está compuesto por:

| Composición del reporte | Descripción |
| --- | --- |
| Initial Available Balance |<br/> Balance inicial.<br/><br/>|
| Release |<br/> El detalle de las ----[mla]---- liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberaciones ------------ de dinero que incluye el balance inicial.<br/><br/> |
| Block | <br/>Los bloqueos de dinero por disputas.<br/><br/> |
| Unblock |<br/> Los desbloqueos por la resolución de las disputas.<br/><br/>|
| Subtotal | <br/>Es la suma de las operaciones que componen a cada sección.<br/><br/>|
| Total| <br/> Es el resultado final compuesto por la suma de todos los subtotales. <br/><br/>Es decir:<br/> subtotal `Release` + subtotal `Block` + subtotal `Unblock` = resultado total<br/><br/> |

Además el reporte refleja los conceptos contables del *debe* (dinero que tienes que pagar) y *haber* (dinero que tienes por cobrar) escribiendo el reporte en dos columnas, una por cada concepto:  

> Tu **haber** lo verás en la columna `NET_CREDIT`
><br>
> Tu **debe** estará en la columna `NET_DEBIT`

Verás el dinero disponible de las operaciones liquidadas en las columnas `NET_CREDIT` (acreditado) y `NET_DEBIT` (debitado), dependiendo de si el monto es positivo o negativo. También verás ahí el monto bruto y los gastos de financiamiento, impuestos y costos de envío que descontamos para llegar al monto neto.

**¿Qué pasa si una transferencia falla?**

Si esto pasa, el reporte sigue siendo válido. El dinero vuelve a tu cuenta y la operación aparecerá en el reporte como una nueva línea en la columna `NET_CREDIT`.

----[mlm, mlb, mlc, mco, mla]----
> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/glossary) de ------------ ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco]---- Liberaciones ------------ ----[mlm, mlb, mlc, mco, mla]---- para revisarlo cuando lo necesites o quieras consultar algún término técnico.------------

----[mpe, mlu]----
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/glossary) de Liberaciones para revisarlo cuando lo necesites o quieras consultar algún término técnico.
------------

## Ejemplo de un reporte

Observa cómo está compuesto el reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------ en este ejemplo para identificar las secciones y leer tus propios reportes:

----[mla]----
![Reporte de liquidaciones](/images/manage-account/reports/example-release-es.jpg)
------------
----[mlm, mlb, mlc, mco, mlu, mpe]----
![Reporte de liberaciones](/images/manage-account/reports/example-release-es.jpg)
------------

La versión por defecto mostrará una vista extendida de las columnas. El informe final tendrá la mayor cantidad de detalle posible.

----[mpe]----
## ¿Cómo leer los reportes que generes a partir de enero de 2022?
------------
----[mlu]----
## ¿Cómo leer los reportes que generes a partir de marzo de 2022?
------------
----[mlc, mco]----
## ¿Cómo leer los reportes que generes a partir de agosto de 2022?
------------
----[mla, mlm]----
## ¿Cómo leer los reportes que generes a partir de octubre de 2022?
------------
----[mpe, mlu, mla, mlm, mlc, mco]----
Los reportes que generes a partir de  ------------ ----[mpe]----enero de 2022 ------------  ----[mlu]---- marzo de 2022 ------------ ----[mla, mlm]----octubre de 2022------------  ----[mco, mlc]----agosto de 2022 ------------  ----[mpe, mlu, mla, mlm, mlc, mco]---- tienen las siguientes características:
1. Los movimientos se presentan en el orden en que ocurrieron, con lo cual podrás identificarlos con mayor facilidad y controlar mejor tus ventas. 
2. Cuando se presenta alguna reclamación o contracargo por algún problema con el servicio o producto que vendiste, tu dinero es retenido hasta que la mediación se resuelva. Esta información se visualiza en tu reporte y la reconoces porque su descripción lleva el prefijo reserve-.
3. Los movimientos relacionados con los retiros sobre tu dinero disponible se muestran como payout y todas las mediaciones que surgen cuando se inicia o resuelve un reclamo se presentan como dispute. Para conocer la descripción de otros movimientos y términos, puedes usar [este glosario](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/reports/released-money/glossary). 

## ¿Qué contiene el reporte?

El reporte presenta una estructura más simple para facilitar su comprensión:

| Composición del reporte | Descripción |
| --- | --- |
| Initial Available Balance |<br/> Balance inicial. Indica el dinero que tenías disponible en la fecha inicial del periodo que elegiste para conciliar. <br/><br/>|
| Release |<br/> El detalle de las transacciones que impactan el balance total.<br/><br/> |
| Total| <br/> Es la diferencia entre el monto neto acreditado total y el monto neto debitado total. <br/><br/> |

## Ejemplo de un reporte
Observa cómo está compuesto el reporte de Dinero retirado en este ejemplo para identificar las secciones y leer tus propios reportes:

![Reporte de Dinero retirado Ejemplos Mercado Pago](/images/manage-account/reports/example-nledger-es.jpg) 

------------