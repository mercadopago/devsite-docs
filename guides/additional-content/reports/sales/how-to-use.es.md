# Usos del reporte

## ¿Cómo usar el reporte?

Una vez listo y descargado el reporte, tendrás un archivo para consultar las planillas de cálculo o importar en el programa de conciliación que desees.

Para consultarlo, te recomendamos descargarlo en formato *.csv* y abrirlo, o bien en una hoja de cálculos, o bien en cualquier programa de visualización. Si eliges esta última opción, es importante que configures previamente el programa para que soporte el formato *UTF-8*, y así evites problemas de lectura.

### ¿Qué contiene el reporte?

El reporte está compuesto por un listado de transacciones realizadas por los *sellers* vinculados a un marketplace. Cada fila representa una transacción independiente con el detalle de los distintos montos y *fees*, así como su **status** y **status_detail**. 

| Status   | Status_detail                      |
| -------- | --------------------------------- |
| Approved | accredited                        |
| Rejected | cc_rejected_insufficient_amount   |
| Rejected | cc_rejected_bad_filled_security_code |
| Rejected | cc_rejected_other_reason          |
| Rejected | cc_rejected_high_risk             |

> NOTE
>
> Además, en la columna **Net Received Amt LC** encontrarás el impacto real sobre tu dinero.

Observa cómo está compuesto el reporte de ventas de *Marketplace* en este ejemplo para identificar las operaciones y leer tus propios reportes: