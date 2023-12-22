# Usos del reporte

Una vez que el reporte esté listo y descargado, tendrás un archivo preparado para consultar las planillas de cálculo e importarlas al programa de conciliación que utilices.

Para consultar el reporte, recomendamos descargarlo en formato .csv y abrirlo en una hoja de cálculos o cualquier programa de visualización. Configura tu programa para que soporte el formato UTF-8, así evitas problemas de lectura.

## Contenido del reporte

| Campo del informe | Descripción |
| --- | --- |
| Initial Available Balance |<br/> Saldo inicial. Indica el valor que estaba disponible en la fecha inicial del período seleccionado para la conciliación. <br/><br/>|
| Release |<br/>Detalle de las ----[mla]---- liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- liberaciones ------------ de dinero que incluyen el saldo inicial y las transacciones que impactan el saldo total. <br/><br/> |
| Block | <br/>Bloqueos de dinero por disputas.<br/><br/> |
| Unblock |<br/> Desbloqueos después de la resolución de las disputas.<br/><br/>|
| Subtotal | <br/>Suma de las transacciones que componen cada sección.<br/><br/>|
| Total| <br/> Resultado final compuesto por la suma de todos los subtotales. <br/><br/>Es decir:<br/> subtotal `Release` + subtotal `Block` + subtotal `Unblock` = resultado total. <br/><br/>Es la diferencia entre el valor neto total acreditado y el valor neto total debitado. |

Además, el reporte refleja los conceptos contables del debe (dinero que debes pagar) y haber (dinero que debes cobrar), organizando el reporte en dos columnas, una para cada concepto:

> Tu **haber** estará en la columna `NET_CREDIT_AMOUNT`.
><br>
> Tu **debe** estará en la columna `NET_DEBIT_AMOUNT`.

Los saldos disponibles de las transacciones liquidadas se muestran en las columnas `NET_CREDIT_AMOUNT` (acreditado) y `NET_DEBIT_AMOUNT` (debitado) dependiendo de si el monto es positivo o negativo. En estos campos también se detallan el monto bruto y los descuentos relacionados con financiamientos, impuestos y costos de envío, dando como resultado el valor neto final.

Si esto pasa, el reporte sigue siendo válido. El dinero vuelve a tu cuenta y la operación aparecerá en el reporte como una nueva línea en la columna `NET_CREDIT_AMOUNT`.

> NOTA
>
> Importante
>
> Ten a mano el [Glosario del Reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------](/developers/es/guides/additional-content/reports/released-money/glossary) para consultarlo cuando necesites revisar algún término técnico.

## Ejemplo de reporte

Observa lo que compone el Reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------ en el siguiente ejemplo para identificar las secciones y analizar tus propios reportes:
----[mla]----
![Reporte de liquidaciones](/images/manage-account/reports/example-release-es.jpg)

------------
----[mlm, mlb, mlc, mco, mlu, mpe]----
![Reporte de liberaciones](/images/manage-account/reports/example-release-es.jpg)

------------
La versión por defecto mostrará una vista extendida de las columnas. El reporte final tendrá la mayor cantidad de detalles posible.

## Organización del informe

Mira el siguiente ejemplo para entender la organización del reporte:

![Reporte de Dinero retirado Ejemplos Mercado Pago](/images/manage-account/reports/example-nledger-es.jpg) 