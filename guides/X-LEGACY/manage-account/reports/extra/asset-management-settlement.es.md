---
sites_supported:
  - mla
  - mlb
---

# Los rendimientos en el reporte de Todas las transacciones

Te mostramos cómo ver los rendimientos generados desde tu cuenta de Mercado Pago en el reporte de Todas las transacciones.

----[mla]----

> NOTE
>
> Nota
>
> ¿Quieres empezar a generar rendimientos? [Comienza ahora](https://www.mercadopago.com.ar/ayuda/Ayuda_con_tus_Rendimientos_4048).

------------

## Operaciones de tus rendimientos

----[mla]---- 

Puedes ver dos tipos de movimientos según la cantidad de [cuotapartes](https://www.mercadopago.com.ar/ayuda/Antes-de-invertir_4053) que adquieras en base a tu dinero disponible: rendimientos positivos y negativos.

------------
----[mlb]---- 

Puedes ver cuatro tipos de movimientos que se generan a partir de la cantidad de dinero en cuenta que tengas disponible:

* Positivos
* Negativos
* Impuesto a la renta
* Devolución de impuesta a la renta

> Para más información sobre el impuesto a la renta y su devolución [consulta nuestras preguntas frecuentes](https://www.mercadopago.com.br/ajuda/Como-gerar-rendimientos_4265).

------------


## Ejemplos de los rendimientos en el reporte

----[mlb]---- 

Cuando en la columna `DESCRIPTION` aparece el valor `asset_management_retention` puedes encontrar impactado el impuesto a la renta y cuando el valor es `asset_management_return` refiere a la devolución correspondiente.

------------

Para identificarlos en tus reportes, vas a encontrar que los datos de las columnas `EXTERNAL_REFERENCE`, `PAYMENY_METHOD_TYPE` y `PAYMENT_METHOD` están vacíos. Y según el valor del `SETTLEMENT_NET_AMOUNT`, ese rendimientos será negativo o positivo. 

### Rendimientos positivos

![Ejemplo rendimiento positivo en reporte de Todas las transacciones](/images/manage-account/reports/reports-information-details/asset-management-settlement-positive.png)

### Rendimientos negativos

![Ejemplo rendimiento negativo en reporte de Todas las transacciones](/images/manage-account/reports/reports-information-details/asset-management-settlement-negative.png)

----[mlb]---- 

### Impuesto a la renta

![Ejemplo impuesto a la renta en reporte de Dinero en cuenta](/images/manage-account/reports/reports-information-details/asset-management-settlement-with-taxes-negative.png)

### Devolución de impuesto a la renta

![Ejemplo devolución de impuesto a la renta en reporte de Dinero en cuenta](/images/manage-account/reports/reports-information-details/asset-management-settlement-with-taxes-positive.png)

------------

> NOTE
>
> Nota
>
> Ten a mano el [Glosario del reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/glossary) de Todas las transacciones para revisarlo cuando necesites o quieras consultar algún término técnico.


### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Genera tu reporte de Todas las transacciones
>
> Conoce las formas de generar un reporte y sigue los pasos para configurar tus preferencias.
>
> [Genera tu reporte de Todas las transacciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/account-money/generate)

> RIGHT_BUTTON_REQUIRED_ES
>
> Detalle de información sobre tu reporte
>
> Te explicamos toda la información necesaria sobre los datos de tus reportes y cómo leerlos.
>
> [Detalle de información sobre tu reporte](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/reports/extra/reports-information-details)