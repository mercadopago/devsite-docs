# ¿Qué es el Reporte de Dinero Disponible?

> INDEX
>
> En esta página
>
> - [Introducción](#bookmark_introducción) 
>
> - [Casos de uso](#bookmark_casos_de_uso)
>
> - [Cómo usar el reporte](#bookmark_cómo_usar_el_reporte) 
>
>    + [Ejemplos](#bookmark_ejemplos)
>

## Introducción

El Reporte de Dinero Disponible es un **informe descargable** en formato .csv o .xlsx que te permite conocer la liquidez de tu negocio, es decir, cuánto dinero tienes para usar. Contiene el **detalle de los pagos liberados** que están listos para retirar a una cuenta bancaria o invertir en Mercado Pago. 

Accede a tus reportes desde la sección de Informes en tu cuenta en Mercado Pago siguiendo estos pasos:
1. [Inicia sesión](https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAy2OQQ7DIAwE_-JzlNw59iPIIoagQo2MI1pF_XtN1OOux2NfUDjll9dPI3BA71ZyyAoLtIIaWarPuw1qs6pnpX8sOBEUrKQkHdw1RYn2B9nSVKmcZAyeevhYeFh1n7IusYVDtXW3bWOMtZIE3Llh4jVwXVE2w4RS7man-cCt-y4QsatXwfAEF7F0-v4AxU1qhMMAAAA/user) en Mercado Pago.
1. Ve a [Informes](https://www.mercadopago.com/mla/account/movements) y de ahí accede a tus [Reportes](https://www.mercadopago.com.ar/balance/reports).
1. En Reportes, elige Dinero Disponible, allí encontrarás un listado de los reportes generados.

Ten en cuenta que la generación del reporte lleva un tiempo, es decir, que no siempre estará listo al instante y verás el estado “En preparación”. Una vez disponible, estará en tu bandeja de reportes y siempre lo podrás descargar de dos formas: 
* Desde un link de descarga que te enviaremos por mail.
* Desde tu cuenta de Mercado Pago, en Reportes de Dinero Disponible.

Es importante aclarar que el valor total del reporte no siempre coincide con los valores del reporte de Dinero en Cuenta o los reportes de facturación. Dependiendo de [los plazos y tasas que elijas](https://www.mercadopago.com.ar/settings/release-options), el dinero que ganes por una venta se liberará un tiempo después de acreditado el cobro. Para saber la fecha exacta en que estará disponible el dinero de una operación, revisa el detalle de tus [cobros acreditados](https://www.mercadopago.com.ar/activities/balance). 
 
Esos plazos tienen que ver con los tiempos de los bancos o por los flujos de intermediación cuando las operaciones se realizan en Mercado Libre. Otras operaciones que pueden afectar la liberación de tu dinero son los Contracargos y Reclamos que puedas recibir por una venta. 

## Casos de uso

Por lo general, **este reporte se usa para conciliar** los retiros de dinero e incluye las transacciones que lo componen. 

Generamos un Reporte de Dinero Disponible en estas tres situaciones: 
1. Cada vez que lo generas manualmente. 
1. De forma programada, según tus ajustes.
1. Con cada retiro de dinero a una cuenta bancaria. 

Usa el Reporte de Dinero Disponible en estos casos: 
1. Cuando quieras tener un informe de liquidez de la cuenta.
1. Para conciliar cómo están compuestas las operaciones que impactan en tu dinero disponible en un nivel transaccional.
1. Conciliación mensual o periódica con el detalle de los movimientos que generan saldo disponible para retirar.
1. Para conocer:
    + El historial de dinero disponible entre dos fechas o dos retiros. 
    + El detalle de los eventos que componen un retiro automático o manual, total o parcial. 
    + El detalle de disputas, reembolsos, shipping, contracargos, impuestos y otras operaciones que afecten el dinero disponible.
    + El detalle de las cuotas liberadas y de las operaciones “En cuotas”.


## Cómo usar el reporte

Para leer el reporte te recomendamos usar un archivo .csv y que revises la configuración de los caracteres. Debe estar en formato UTF-8. Compruébalo en los ajustes de tu planilla de cálculo (Excel, LibreOffice Calc, etc): 

![Reporte de dinero disponible excel Mercado Pago](/images/manage-account/reports/excel-es.png)
<p style="text-align:center;font-size:12px;">Ejemplo en Excel </p>

![Reporte de dinero disponible Open Office Mercado Pago](/images/manage-account/reports/open-office-es.png)
<p style="text-align:center;font-size:12px;">Ejemplo en Open Office </p>


El reporte contiene 4 secciones:
1. Balance Inicial (Initial Available Balance).
1. Detalle de Liberaciones de dinero (Releases).
1. Bloqueos de dinero por disputas (Block).
1. Desbloqueos por la resolución de la disputa (Unblock).

Verás una sección de **subtotales** por cada bloque y, finalmente, el **resultado total**. A este total lo calculamos sobre los subtotales netos de cada sección, es la suma neta de: 

> Subtotal release - Subtotal block + Subtotal unblock = resultado total

Revisa el [Glosario completo](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/available-money-reports-glossary)

Reflejamos los conceptos contables universales del *debe* (dinero que tienes que pagar) y *haber* (dinero que tienes por cobrar) escribiendo el reporte en dos columnas, una por cada concepto:  

> NOTE
>
> Nota
>
> Tu haber lo verás en la columna `NET_CREDIT`
>
> Tu deber estará en la columna `NET_DEBIT`

Verás el dinero disponible de las operaciones liberadas en las columnas `NET_CREDIT` (acreditado) y `NET_DEBIT` (debitado), dependiendo de si el monto es positivo o negativo. También verás ahí el monto bruto y los gastos de financiamiento, impuestos y costos de envío que descontamos para llegar al monto neto.

**¿Qué pasa si un retiro falla?**

Si esto pasa, el reporte sigue siendo válido. El dinero vuelve a tu cuenta y la operación aparecerá en el reporte como una nueva línea en la columna `NET_CREDIT`.

### Ejemplos

Observa cómo está compuesto el reporte de dinero disponible en este ejemplo para identificar las secciones y leer tus propios reportes:

![Reporte de dinero disponible Ejemplos Mercado Pago](/images/manage-account/reports/examples-es.png)

La versión por defecto mostrará una vista extendida de las columnas. El informe final tendrá la mayor cantidad de detalle posible. Si quieres menos detalle o hay columnas que no te sirven para la conciliación, puedes modificar cuáles incluir y cuáles no en Ajustes.  

> WARNING
> 
> Importante
>
> **Diferencias entre retiro parcial y retiro total.**
> 
> Cuando retires todo tu dinero disponible, el total del reporte va a coincidir con ese monto. En cambio, cuando hagas un retiro parcial, que no incluya la totalidad de tu dinero en cuenta liberado, el total de dinero disponible y el total del reporte no van a coincidir.
>
>Por ejemplo, imagina que tienes $ 3.000 disponibles para retirar a una cuenta bancaria pero solo retiras $ 2.000. El retiro es parcial pero el valor total del reporte seguirá mostrándote el monto del balance inicial que había al momento del retiro, es decir, los $ 3.000 que tenías disponibles. En cambio, si retiras los $ 3.000, el valor total del reporte va a coincidir con el valor de ese retiro.
