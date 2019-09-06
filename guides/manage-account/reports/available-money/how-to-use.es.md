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

Verás el dinero disponible de las operaciones liberadas en las columnas `NET_CREDIT` (acreditado) y `NET_DEBIT` (debitado), dependiendo de si el monto es positivo o negativo. También verás ahí el monto bruto y los gastos de financiamiento, impuestos y costos de envío que descontamos para llegar al monto neto.

**¿Qué pasa si un retiro falla?**

Si esto pasa, el reporte sigue siendo válido. El dinero vuelve a tu cuenta y la operación aparecerá en el reporte como una nueva línea en la columna `NET_CREDIT`.


> NOTE
>
> Nota
>
> Ten a mano el [Glosario](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/available-money/glossary) del reporte de Dinero Disponible para revisarlo cuando lo necesites o quieras consultar algún término técnico.

## Ejemplo de un reporte

Observa cómo está compuesto el reporte de dinero disponible en este ejemplo para identificar las secciones y leer tus propios reportes:

![Reporte de dinero disponible Ejemplos Mercado Pago](/images/manage-account/reports/examples-es.png)

La versión por defecto mostrará una vista extendida de las columnas. El informe final tendrá la mayor cantidad de detalle posible.

> WARNING
> 
> Importante: diferencias entre retiro parcial y retiro total
> 
> Cuando retires todo tu dinero disponible, el total del reporte va a coincidir con ese monto. En cambio, cuando hagas un retiro parcial, que no incluya la totalidad de tu dinero en cuenta liberado, el total de dinero disponible y el total del reporte no van a coincidir.
>
>Por ejemplo, imagina que tienes $ 3.000 disponibles para retirar a una cuenta bancaria pero solo retiras $ 2.000. El retiro es parcial pero el valor total del reporte seguirá mostrándote el monto del balance inicial que había al momento del retiro, es decir, los $ 3.000 que tenías disponibles. En cambio, si retiras los $ 3.000, el valor total del reporte va a coincidir con el valor de ese retiro.

<hr/>

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Genera tus reportes
>
> Conoce las formas de generar un reporte y sigue los pasos para configurar tus preferencias.
>
> [Genera tus reportes](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/available-money/generate)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Glosario
>
> Conoce qué significa cada término y el detalle de las columnas que componen al reporte.
>
> [Glosario](https://www.mercadopago.com.ar/developers/es/guides/manage-account/reports/available-money/glossary)
