# ¿Cómo usar el reporte?


> INDEX
>
> En esta página
>
> [¿Qué contiene el reporte?](#bookmark_¿qué_contiene_el_reporte?)
>
> [Ejemplo de un reporte](#bookmark_ejemplo_de_un_reporte)


Una vez listo y descargado el reporte, tendrás un archivo para consultar las planillas de cálculo o importar en el programa de conciliación que uses.

Para consultar el reporte te recomendamos descargarlo en formato .csv para abrirlo en el programa que lo visualices. El archivo debe estar configurado en formato UTF-8 para evitar problemas de lectura. 
A esto lo puedes comprobar en los ajustes del programa que uses.


## ¿Qué contiene el reporte?

El reporte contiene 4 secciones:
1. Balance Inicial (Initial Available Balance)
1. Detalle de Liberaciones de dinero (Releases)
1. Bloqueos de dinero por disputas (Block)
1. Desbloqueos por la resolución de la disputa (Unblock)


Verás una sección de **subtotales** por cada bloque y, finalmente, el **resultado total**. A este total lo calculamos sobre los subtotales netos de cada sección, es la suma neta de: 

<p style="text-align:center" >Subtotal `release` - Subtotal `block` + Subtotal `unblock` = resultado total</p>

> Ten a mano el [Glosario completo](https://www.mercadopago.com/developers/es/guides/manage-account/reports/available-money/glossary) para revisarlo cuando lo necesites.

Reflejamos los conceptos contables universales del debe (dinero que tienes que pagar) y haber (dinero que tienes por cobrar) escribiendo el reporte en dos columnas, una por cada concepto:  
 
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

## Ejemplo de un reporte

Observa cómo está compuesto el reporte de dinero disponible en este ejemplo para identificar las secciones y leer tus propios reportes:

![Reporte de dinero disponible Ejemplos Mercado Pago](/images/manage-account/reports/examples-es.png)

La versión por defecto mostrará una vista extendida de las columnas. El informe final tendrá la mayor cantidad de detalle posible.

> WARNING
> 
> Importante: diferencias entre retiro parcial y retiro total.
> 
> Cuando retires todo tu dinero disponible, el total del reporte va a coincidir con ese monto. En cambio, cuando hagas un retiro parcial, que no incluya la totalidad de tu dinero en cuenta liberado, el total de dinero disponible y el total del reporte no van a coincidir.
>
>Por ejemplo, imagina que tienes $ 3.000 disponibles para retirar a una cuenta bancaria pero solo retiras $ 2.000. El retiro es parcial pero el valor total del reporte seguirá mostrándote el monto del balance inicial que había al momento del retiro, es decir, los $ 3.000 que tenías disponibles. En cambio, si retiras los $ 3.000, el valor total del reporte va a coincidir con el valor de ese retiro.
