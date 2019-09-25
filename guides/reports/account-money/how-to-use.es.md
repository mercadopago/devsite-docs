# ¿Cómo usar el reporte?


> INDEX
>
> En esta página
>
> [¿Qué contiene el reporte?](#bookmark_¿qué_contiene_el_reporte?)
>
> [Ejemplo de un reporte](#bookmark_ejemplo_de_un_reporte)


Una vez listo y descargado el reporte, tendrás un archivo para consultar las planillas de cálculo o importar en el programa de conciliación que uses.

Para consultar el reporte te recomendamos descargarlo en formato .csv para abrirlo en el programa que lo visualices. Configura tu programa para que soporte el formato UTF-8, así evitas problemas de lectura. 

## ¿Qué contiene el reporte?

El reporte está compuesto por distintos tipo de transacciones que puedes ver en la columna `TRANSACTION_TYPE` . Cada una de ellas tendrá el monto bruto de la operación.
<br/>
| Transacciones | Tipo de operación |
| --- | --- |
| *SETTLEMENT* |<br/> Aprobadas<br/><br/>|
| *REFUND* |<br/> Devoluciones total o parcialmente.<br/><br/> |
| *CHARGEBACK* | <br/>Contracargo<br/><br/> |
| *DISPUTE* |<br/> Se encuentran en reclamo.<br/><br/>|
| *WITHDRAWAL* | <br/>Dinero retirado.<br/><br/>|
| *CASHBACK* | <br/> Devolución de dinero.<br/><br/> |
| *SETTLEMENT_SHIPPING* | <br/> Envíos aprobados.<br/><br/> |
| *REFUND_SHIPPING* | <br/> Devoluciones totales o parciales de costos de envíos.<br/><br/> |
| *CHARGEBACK_SHIPPING* | <br/> Contracargo de envíos.<br/><br/> |
| *DISPUTE_SHIPPING* | <br/> El envío se encuentran en reclamo.<br/><br/> |


Y en la columna `SETTLEMENT_NET_AMOUNT` encontrarás el impacto real sobre el dinero de tu cuenta.

> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago.com.ar/developers/es/guides/reports/account-money/glossary/) de Dinero encuenta para revisarlo cuando necesites o quieras consultar algún término técnico.

## Ejemplo de un reporte

Observa cómo está compuesto el reporte de dinero encuenta en este ejemplo para identificar las operaciones y leer tus propios reportes:


![Reporte de dinero en cuenta Ejemplos Mercado Pago](/images/manage-account/reports/example-settlement-es.png)

La versión por defecto mostrará una vista extendida de las columnas. El informe tendrá la mayor cantidad de detalle posible.

<hr/>

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Cómo usar el reporte          
>
> Conoce la composición del reporte y aprende a leerlo.
>
> [Cómo usar el reporte](https://www.mercadopago.com.ar/developers/es/guides/reports/account-money/how-to-use/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Genera tus reportes
>
> Elige la forma de generar tu reporte y sigue los pasos para configurar tus preferencias.
>
> [Genera tus reportes](https://www.mercadopago.com.ar/developers/es/guides/reports/account-money/generate/)
