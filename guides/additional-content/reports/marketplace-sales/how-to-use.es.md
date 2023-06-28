# Usos del reporte

## ¿Cómo usar el reporte?

Una vez listo y descargado el reporte, tendrás un archivo para consultar las planillas de cálculo o importar en el programa de conciliación que desees.

Para consultarlo, te recomendamos descargarlo en formato *.csv* y abrirlo, o bien en una hoja de cálculos, o bien en cualquier programa de visualización. Si eliges esta última opción, es importante que configures previamente el programa para que soporte el formato *UTF-8*, y así evites problemas de lectura.

### ¿Qué contiene el reporte?

El reporte está compuesto por un listado de transacciones realizadas por los *sellers* vinculados a un marketplace. Cada fila representa una transacción independiente con el detalle de los distintos montos y *fees*, así como su **status** y **status_detail**. El campo de `status` indica si el pago fue aprobado o no, mientras que el campo `status_detail` proporciona más detalles, incluidos los motivos del rechazo. Puedes encontrar más información sobre los ***status*** y ***status_detail*** en la sección **Parámetros de respuesta** de la documentación de la [API de Pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments/post).

> NOTE
>
> Además, en la columna Net Received Amt LC encontrarás el impacto real sobre tu dinero.

Observa cómo está compuesto el reporte de ventas de *Marketplace* en este ejemplo para identificar las operaciones y leer tus propios reportes:

![Ejemplo para identificar las operaciones y leer tus propios reportes](/images/manage-account/reports/marketplace-sales/image2.png)