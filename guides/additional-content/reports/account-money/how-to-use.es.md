# ¿Cómo usar el reporte?

Una vez listo y descargado el reporte, tendrás un archivo para consultar las planillas de cálculo o importar en el programa de conciliación que uses.

Para consultar el reporte te recomendamos descargarlo en formato .csv para abrirlo en el programa que lo visualices. Configura tu programa para que soporte el formato UTF-8, así evitas problemas de lectura.

## ¿Qué contiene el reporte?

El reporte está compuesto por distintos tipo de transacciones que puedes ver en la columna `TRANSACTION_TYPE`. Cada una de ellas tendrá el monto bruto de la operación.

<br/>

| Transacciones | Tipo de operación |
| --- | --- |
| *SETTLEMENT* |<br/> Operación aprobada.<br/><br/>|
| *REFUND* | ----[mla, mlm, mco, mlu, mlb, mlc]---- <br/> Devolución total o parcial de dinero.<br/><br/> ------------ ----[mpe]---- <br/> Devolución total de dinero.<br/><br/> ------------ |
| *CHARGEBACK* |<br/> Contracargo.<br/><br/> |
| *DISPUTE* |<br/> Operación en reclamo.<br/><br/>|
| *WITHDRAWAL* |<br/> Retiro de dinero.<br/><br/>|
| *CASHBACK* |<br/> Devolución de dinero.<br/><br/> |
| *SETTLEMENT_SHIPPING* |<br/> Envíos aprobados.<br/><br/> |
| *REFUND_SHIPPING* | ----[mla, mlm, mco, mlu, mlb, mlc]---- <br/> Devolución total o parcial de costos de envíos.<br/><br/> ------------ ----[mpe]---- <br/> Devolución de costos de envíos.<br/><br/> ------------|
| *CHARGEBACK_SHIPPING* |<br/> Contracargo de envíos.<br/><br/> |
| *DISPUTE_SHIPPING* |<br/> Envíos en reclamo.<br/><br/> |

Y en la columna `SETTLEMENT_NET_AMOUNT` encontrarás el impacto real sobre tu dinero.

> NOTE
>
> Nota 
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/glossary) de Todas las transacciones para revisarlo cuando necesites o quieras consultar algún término técnico.

## Ejemplo de un reporte

Observa cómo está compuesto el reporte de Todas las transacciones en este ejemplo para identificar las operaciones y leer tus propios reportes:

![Reporte de Todas las transacciones Ejemplos Mercado Pago](/images/manage-account/reports/example-settlement-es.png)

La versión por defecto mostrará una vista extendida de las columnas. El informe tendrá la mayor cantidad de detalle posible.

<hr/>

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Genera tus reportes
>
> Conoce las formas de generar un reporte y sigue los pasos para configurar tus preferencias.
>
> [Genera tus reportes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/generate)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Glosario
>
> Conoce qué significa cada término y el detalle de las columnas que componen al reporte.
>
> [Glosario](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/glossary)