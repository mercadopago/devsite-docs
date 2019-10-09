---	
sites_supported:	
  - mla	
  - mpe	
  - mco	
  - mlu	
  - mlm	
  - mlc	
---

# ¿Cómo usar el reporte?

Una vez listo y descargado el reporte, tendrás un archivo para consultar las planillas de cálculo o importar en el programa de conciliación que uses.

Para consultar el reporte te recomendamos descargarlo en formato .csv para abrirlo en el programa que lo visualices. Configura tu programa para que soporte el formato UTF-8, así evitas problemas de lectura.

## ¿Qué contiene el reporte?

El reporte está compuesto por distintos tipo de transacciones que puedes ver en la columna `TRANSACTION_TYPE`. Cada una de ellas tendrá el monto bruto de la operación.

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
> Ten a mano el [Glosario del reporte](https://www.mercadopago.com.ar/developers/es/guides/reports/account-money/glossary/) de Dinero en 

cuenta para revisarlo cuando necesites o quieras consultar algún término técnico.

## Ejemplo de un reporte

Observa cómo está compuesto el reporte de Dinero encuenta en este ejemplo para identificar las operaciones y leer tus propios reportes:


![Reporte de dinero en cuenta Ejemplos Mercado Pago](/images/manage-account/reports/example-settlement-es.png)

La versión por defecto mostrará una vista extendida de las columnas. El informe tendrá la mayor cantidad de detalle posible.

<hr/>

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Genera tus reportes
>
> Conoce las formas de generar un reporte y sigue los pasos para configurar tus preferencias.
>
> [Genera tus reportes](https://www.mercadopago.com.ar/developers/es/guides/reports/account-money/generate/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Glosario
>
> Conoce qué significa cada término y el detalle de las columnas que componen al reporte.
>
> [Glosario](https://www.mercadopago.com.ar/developers/es/guides/reports/account-money/glossary/)
