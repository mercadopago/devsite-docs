----[mla]----
# Reporte de Liquidaciones
------------

----[mlm, mlb, mlc, mco, mlu, mpe]----
# Reporte de Liberaciones
------------

El Reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------ es un archivo que se puede descargar y detalla el saldo disponible en tu cuenta de Mercado Pago. No solo muestra el valor total disponible, sino que también proporciona información sobre las transacciones realizadas en un período determinado, incluyendo situaciones como bloqueos y desbloqueos de fondos.

Además, le permite saber si su dinero se encuentra en un estado disponible o retirado, y puede solicitar esta información para el período de fechas que le resulte más conveniente. Ten presente que actualmente este reporte solo se genera a través de tu computadora.

----[mpe]----
## Análisis de los reportes a partir de enero de 2022
------------
----[mlu]----
## Análisis de los reportes a partir de marzo de 2022
----[mlc, mco]----
## Análisis de los reportes a partir de agosto de 2022
------------
----[mla, mlm]----
## Análisis de los reportes a partir de octubre de 2022
------------
----[mlb]----
## Análisis de los reportes a partir de enero de 2023
------------

Los informes que genere a partir de ----[mpe]---- enero de 2022------------  ----[mlu]---- marzo de 2022------------ ----[mla, mlm]---- octubre de 2022------------  ----[mco, mlc]---- agosto de 2022------------ ----[mlb]---- enero de 2023------------ tienen las siguientes características: 

1. Los movimientos ahora se presentan en el orden en que ocurrieron, con lo cual puedess identificarlos con mayor facilidad y controlar tus ventas.
2. En caso de reclamación o contracargo relacionada con algún problema en el servicio o producto que vendiste, el valor correspondiente se retiene hasta que se resuelva la mediación. Esta información se refleja en su reporte y puede encontrarse buscando el prefijo "reserve-".
3. Las transacciones relacionadas con retiros y/o transferencias de su saldo disponible aparecen como _payout_, y todas las mediaciones que surgen cuando se inicia o resuelve una reclamación aparecen como _dispute_. Para obtener la descripción de otras transacciones y términos, consulte [el glosario](/developers/es/docs/checkout-pro/additional-content/reports/released-money/report-use).
4. Encontrará una nueva columna llamada "Sale detail" o "Detalle de venta" que proporciona información detallada sobre los artículos vendidos, facilitando la conciliación y el control de sus ventas. Cada entrada en esta columna muestra el primer elemento de la venta, seguido del agrupamiento de otros artículos.

## Descargar reporte

Siga esta ruta para saber cómo generar y descargar el reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------:
[Informes y facturación](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports) > **Reportes de ventas y extractos de cuenta > [----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/release)** > **Crear reporte**.

### Crear reporte por API

Genera el reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------ manualmente tantas veces desee o prográmelo según sus necesidades de frecuencia a través de la [API](/developers/es/docs/checkout-pro/additional-content/reports/released-money/api).

La generación del reporte lleva algunos minutos dependiendo de cuánta información desee incluir. No siempre estará listo instantáneamente y, hasta que lo esté, verá el estado "En preparación" en la pantalla.

> Consulte ["Cómo analizar el reporte de ----[mla]---- Liquidaciones------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones------------?"](https://www.mercadopago.com.ar/ayuda/28771) para comprender mejor su reporte.

### Valores del reporte

Dependiendo de las [tasas y plazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options) seleccionados, el valor obtenido con la venta se va a liquidar un tiempo después de acreditado el cobro. Por lo tanto, el valor total indicado en el reporte puede no coincidir siempre con su saldo total o con el valor total en los reportes de facturación.

Los plazos de liberación están relacionados con los procesos bancarios y los flujos de intermediación cuando las transacciones se realizan en Mercado Libre. Además, las reclamaciones y contracargos recibidas en las ventas pueden afectar la liberación del dinero.

> Para obtener la fecha exacta de disponibilidad del dinero de una transacción, es importante revisar los [detalles de los pagos acreditados.](https://www.mercadopago[FAKER][URL][DOMAIN]/activities/balance)

## Uso del reporte

El reporte de ----[mla]---- Liquidaciones ------------ ----[mlm, mlb, mlc, mco, mlu, mpe]---- Liberaciones ------------ es una herramienta importante tanto para la conciliación como para el análisis de su historial financiero. Detalla las transacciones de la cuenta, proporciona comprensión y conciliación del saldo disponible en fechas específicas y ofrece datos de cada transacción, incluyendo la fecha, concepto y el monto. 

Además, este reporte presenta el historial completo del dinero liberado, abordando eventos como transferencias bancarias, disputas, reembolsos y estornos, y destaca las cuotas liquidadas en comparación con las pendientes de pago.

> NOTE
>
> Nota
>
> Utilice el [Glosario del Reporte](/developers/es/docs/checkout-pro/additional-content/reports/released-money/report-use) para consultar términos técnicos, si es necesario.