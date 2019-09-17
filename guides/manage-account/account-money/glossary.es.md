## Glosario

> INDEX
>
> En esta página
>
> - [Glosario](#bookmark_glosario)
>

Lo sabemos, algunos términos son técnicos y puede que no estés familiarizado con todos ellos. ¡Usa este glosario para no perderte!

| Nombre de la columna del reporte  | Qué significa |
| ----------------------------------- |	--------------- |
| EXTERNAL_REFERENCE | ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa. Tené en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. |
| SOURCE_ID | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). |
| USER_ID | Código de la cuenta del vendedor. (Cust ID) |
| PAYMENT_METHOD | Consulta los medios de pago disponibles según el país con el que operes en Mercado Pago. |
| PAYMENT_METHOD_TYPE | Consulta los ----[mla]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_argentina)  ------------ ----[mlb]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_brasil) ------------ ----[mpe]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_perú)  ------------ ----[mco]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_colombia)  ------------ ----[mlm]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_méxico) ------------ ----[mlu]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_uruguay) ------------ ----[mlc]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_chile) ------------ según el país con el que operes en Mercado Pago. |
| SITE | <table style="border:none;background:none;font-size:16px;" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> País al que pertenece la cuenta de Mercado Pago:<br/><ul><li> MLA: Argentina</li><li>MLM: México</li><li>MLU: Uruguay</li><li>MLC: Chile</li><li>MCO: Colombia</li><li>MPE: Perú</li><li>MLB: Brasil</li></ul></td></tr><tr style="border:none;"></table> |
| TRANSACTION_TYPE | <table style="border:none;background:none;font-size:16px;" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Tipo de operación. Puede ser:<br/><ul><li> SETTLEMENT: Pago aprobado.</li><li>REFUND: Pago devuelto total o parcialmente.</li><li>CHARGEBACK: El comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.</li><li>DISPUTE: El comprador inició un reclamo por ese pago.</li><li>WITHDRAWAL: Retiro a la cuenta bancaria.</li><li>COP (Peso Colombiano)</li><li>WITHDRAWAL_CANCEL: Retiro a la cuenta bancaria que fue cancelado</li></ul></td></tr><tr style="border:none;"></table> |
| TRANSACTION_AMOUNT | Monto bruto de la operación. |
| TRANSACTION_CURRENCY | <table style="border:none;background:none;font-size:16px;" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Moneda:<br/><ul><li> MXN (Peso mexicano)</li><li>CLP (Peso Chileno)</li><li>ARS (Peso Argentino)</li><li>BRL (Real Brasilero</li><li>PEN (Sol Peruano)</li><li>COP (Peso Colombiano)</li><li>UYU (Peso Uruguayo)</li><li>VES (Bolivar Venezolano)</li></ul></td></tr><tr style="border:none;"></table> |
| TRANSACTION_DATE | Fecha de acreditación de la operación. |
| FEE_AMOUNT | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. Incluyen IVA. |
| SETTLEMENT_NET_AMOUNT | Monto neto de la operación que impactó en el dinero en cuenta. Se le descontaron todas las comisiones involucradas del TRANSACTION_AMOUNT. |
| SETTLEMENT_CURRENCY | <table style="border:none;background:none;font-size:16px;" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Moneda:<br/><ul><li> MXN (Peso mexicano)</li><li>CLP (Peso Chileno)</li><li>ARS (Peso Argentino)</li><li>BRL (Real Brasilero</li><li>PEN (Sol Peruano)</li><li>COP (Peso Colombiano)</li><li>UYU (Peso Uruguayo)</li><li>VES (Bolivar Venezolano)</li></ul></td></tr><tr style="border:none;"></table> |
| SETTLEMENT_DATE | Fecha en que se acreditó el dinero de la operación. |
| REAL_AMOUNT | Monto neto de la operación, si es un settlement, se le descuentan los montos por contracargos, reclamos o devoluciones. |
| COUPON_AMOUNT | Monto del cupón de descuento. Solo se descuenta del monto bruto (TRANSACTION_AMOUNT) si está provisto por el vendedor. |
| METADATA | Datos extras como por ejemplo el ID de las devoluciones parciales o datos provistos por el vendedor en caso de tener una integración externa. |
| MKP_FEE_AMOUNT | Comisión de Mercado Libre. Incluye IVA. |
| FINANCING_FEE_AMOUNT | Costo por ofrecer cuotas sin interés. |
| SHIPPING_FEE_AMOUNT | Costo de envío. |
| TAXES_AMOUNT | ------------ ----[mla,mco]---- Impuestos cobrados por retenciones de IVA, ICA y Fuente según aplique el caso. ------------ ----[mlu]---- Impuestos cobrados por retenciones de IVA.  ------------ ----[mlu]---- Impuestos cobrados. ------------ ----[mpe]---- Impuestos cobrados. ------------ |
| INSTALLMENTS | Cantidad de cuotas en las que fue realizada la operación. |
| TAX_AMOUNT_TELCO | ------------ ----[mco,mlu]---- Es el valor del impuesto a las empresas de telecomunicaciones que se descuenta del valor bruto. ------------ |
| TAX_DETAIL | <br/> Descripción del impuesto retenido por operación en el `TAXES_AMOUNT`. ----[mla]---- Puede tomar los siguientes valores según la jurisdicción: <br/>cordoba<br/>mendoza<br/>la_pampa<br/>santa_fe<br/>tucuman<br/>entre_rios<br/>catamarca<br/>neuquen<br/>santiago_del_estero<br/>rio_negro<br/>jujuy ------------ <br/><br/> |
| POS_ID | ID de caja si el pago se realiza a través de un comercio físico. |
| POS_NAME | Nombre de caja para el pago realizado a través de un comercio físico. |
| EXTERNAL_POS_ID ||
| STORE_ID | ID de sucursal si el pago se realiza a través de un comercio físico. |
| STORE_NAME ||
| EXTERNAL_STORE_ID ||
<hr/>

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Cómo usar el reporte
>
> Conoce la composición del reporte y aprende a leerlo para hacer tu conciliación.
>
> [Cómo usar el reporte](https://www.mercadopago.com.ar/developers/es/guides/manage-account/account-money/how-to-use)

> RIGHT_BUTTON_REQUIRED_ES
>
> Genera tus reportes
>
> Conoce las formas de generar un reporte y sigue los pasos para configurar tus preferencias.
>
> [Genera tus reportes](https://www.mercadopago.com.ar/developers/es/guides/manage-account/account-money/generate)
