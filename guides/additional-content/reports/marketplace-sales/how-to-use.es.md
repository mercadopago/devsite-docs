# Usos del reporte

Una vez listo y descargado el reporte, tendrás un archivo para consultar las planillas de cálculo o importar en el programa de conciliación que desees.

Para consultarlo, te recomendamos descargarlo en formato *.csv* y abrirlo, o bien en una hoja de cálculos, o bien en cualquier programa de visualización. Si eliges esta última opción, es importante que configures previamente el programa para que soporte el formato *UTF-8*, y así evites problemas de lectura.

### Contenido del reporte

El reporte enumera las transacciones realizadas por vendedores asociados a un marketplace. Cada línea detalla una transacción independiente, incluyendo valores, tarifas, *status* y *status_detail*. Mientras que el campo *status* indica la aprobación del pago, *status_detail* proporciona información adicional, como razones de rechazo.

Para obtener más detalles sobre *status* y *status_detail*, consulta la sección "Parámetros de respuesta" en la documentación de la [API de Pagos](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments/post).

> NOTE
>
> Nota
> 
> Además, en la columna **Net Received Amt LC** encontrarás el impacto real sobre tu dinero.

Observa cómo está compuesto el reporte de ventas de *Marketplace* en este ejemplo para identificar las operaciones y leer tus propios reportes:

![Ejemplo para identificar las operaciones y leer tus propios reportes](/images/manage-account/reports/marketplace-sales/image2.png)