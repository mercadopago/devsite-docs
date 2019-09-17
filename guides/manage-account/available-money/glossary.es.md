# Glosario


Lo sabemos, algunos términos son técnicos y puede que no estés familiarizado con todos ellos. ¡Usa este glosario para no perderte!

| Nombre de la columna del reporte  | Qué significa |
| ----------------------------------- |	--------------- |
| DATE | Fecha de liberación, bloqueo o desbloqueo, según corresponda.|
| SOURCE_ID | ID de operación en Mercado Pago (por ejemplo, el pago de una venta).|
| EXTERNAL_REFERENCE | <br/> ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br/><br/> Tené en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br/> <br/> |
| RECORD_TYPE | <br/> `initial_available_balance`: Dinero disponible del período anterior.<br/><br/> `block`: Dinero bloqueado por un reclamo o contracargo.<br/><br/> `unblock`: Dinero liberado porque se resolvió un reclamo o contracargo.<br/><br/> `release`: Dinero de un cobro que fue liberado.<br/><br/> `fullblock`: Dinero bloqueado por restricción<br/><br/> `subtotal`: Suma de los montos de cada record type.<br/><br/> `total`: Monto neto total. <br/> <br/> |
| DESCRIPTION | <table style="border:none;background:none;font-size:16px;" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Posibles valores que puede tomar el campo:<br/><ul ><li> Para `block o unblock`: chargeback, dispute, shipping_return, credit_payment</li><li>Para `release`: payment, withdrawal, refund, tax_payment_ibcf, tax_payment_ibcf_cancel, tax_payment_ibex, tax_payment_iibb, tax_payment_iibb_cancel, shipping, shipping_cancel, tax_withdholding, tax_withdholding_cancel, mediation,mediation_cancel, chargeback, fee_release_in_advance, asset_management_gain, asset_management_loss</li><li>Para `fullblock`: restriction.</li><li>Para `subtotal`: block, unblock o release.</li></ul></td></tr><tr style="border:none;"><td style="border:none;">Definiciones a tener en cuenta: <br/><br/> ----[mla,mlb]---- `chargeback`: aparece cuando se inicia o resuelve un contracargo asociado al pago al que hace referencia.<br/><br/> `dispute`: aparece cuando se inicia o resuelve una mediación o reclamo sobre el pago al que hace referencia. Puede ocurrir antes o después de que el pago se haya liberado como dinero disponible e incluso retirado de la cuenta.<br/><br/>`shipping_return`: aparece cuando se bloquea o desbloquea un pago realizado por devolución express.<br/><br/>`payment`: pago que se libera en alguno de los canales en los que opera el cliente.<br/><br/>`withdrawal`: retiro que se ejecuta sobre el dinero disponible.<br/><br/>`refund`: devolución asociada al pago al que hace referencia.<br/><br/>`tax_payment_ibcf`: percepción de ingresos brutos en Capital Federal, se calcula una vez por mes de acuerdo a las operaciones transaccionadas. Para conciliar por operación, ver el detalle en los [Informes de Facturas en MyML](https://vendedores.mercadolibre.com.ar/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/).<br/><br/>`tax_payment_ibcf_cancel`: cancelación del impuesto de percepción de ingresos brutos en Capital Federal.<br/><br/>`tax_payment_ibex`: percepción de ingresos brutos por sujeto excedido de régimen simplificado, se calcula una vez por mes de acuerdo a las operaciones transaccionadas. Para conciliar por operación, ver el detalle en los [Informes de Facturas en MyML](https://vendedores.mercadolibre.com.ar/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/). <br/><br/> `tax_payment_iibb`: percepción de ingresos brutos en provincia de Buenos Aires, se calcula una vez por mes de acuerdo a las operaciones transaccionadas. Para conciliar por operación, ver el detalle en los [Informes de Facturas en MyML](https://vendedores.mercadolibre.com.ar/blog/notas/todo-lo-que-tenes-que-saber-sobre-tu-facturacion/).<br/><br/> `tax_payment_iibb_cancel`: cancelación del impuesto de percepción de ingresos brutos.<br/><br/> `tax_withdholding`: el cobro de retenciones que no se pudieron ejecutar transaccionales al pago asociado. En Argentina son únicamente retenciones de Ingresos Brutos (las percepciones se debitan como otra operación). En Uruguay son retenciones de IVA. En Colombia son retenciones de IVA, ICA y Fuente según aplique el caso.<br/><br/> `tax_withdholding_cancel`: la cancelación de la retención tax_withdholding.<br/><br/> `shipping`: comisión de shipping para las compras de carrito que no se incluye en cada uno de los pagos del carrito.<br/><br/> `shipping_cancel`: cancelación de la comisión de shipping para las compras de carrito que no se incluye en cada uno de los pagos del carrito.<br/><br/> `mediation`: resolución de una mediación a favor del comprador que termina restando del dinero disponible del vendedor.<br/><br/> `mediation_cancel`: cancelación de la mediación resuelta a favor del comprador.<br/><br/> `chargeback`: contracargo ya sea a favor o en contra de una operación.<br/><br/>`fee-release_in_advance`: comisión por adelanto.<br/><br/> `asset_management_gain`: rendimiento positivo generado por la variación del valor de cuotapartes suscritas en el fondo común de inversión.<br/><br/> `asset_management_loss`: rendimiento negativo generado por la variación del valor de cuotapartes suscritas en el fondo común de inversión.<br/><br/> `restriction`: ocurre cuando se te aplica una restricción por comportamiento fraudulento.<br/><br/> `credit_payment`: aparece cuando se cobra la cuota de un préstamo otorgado. ------------ <br/><br/> </td></tr></table> |
| NET_CREDIT_AMOUNT | Acreditado al monto disponible. |
| NET_DEBIT_AMOUNT | Debitado al monto disponible.|
| GROSS_AMOUNT | Monto de la operación bruto. |
| MP_FEE_AMOUNT | Pago Comisión de Mercado Pago y/o Mercado Libre. ----[mla,mpe,mco,mlm,mlu,mlc]---- Incluye IVA. ------------ |
| FINANCING_FEE_AMOUNT | Costo por ofrecer cuotas sin interés. |
| SHIPPING_FEE_AMOUNT | Costo de envío. |
| TAXES_AMOUNT | ----[mla,mlm,mlb]---- Impuestos cobrados por retenciones de Ingresos Brutos. ------------ ----[mco]---- Impuestos cobrados por retenciones de IVA, ICA y Fuente según aplique el caso. ------------ ----[mlu]---- Impuestos cobrados por retenciones de IVA. ------------ ----[mpe,mlc]---- Impuestos cobrados. ------------ |
| COUPON_AMOUNT | Monto del cupón de descuento. Solo se descuenta del monto bruto (`GROSS_AMOUNT`) si está provisto por el vendedor.|
| INSTALLMENTS | Cantidad de cuotas en las que se realizó la operación. |
| PAYMENT METHOD | Consulta los ----[mla]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_argentina)  ------------ ----[mlb]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_brasil) ------------ ----[mpe]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_perú)  ------------ ----[mco]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_colombia)  ------------ ----[mlm]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_méxico) ------------ ----[mlu]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_uruguay) ------------ ----[mlc]---- [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_chile) ------------ según el país con el que operes en Mercado Pago. |
| TAX_DETAIL | <br/> Descripción del impuesto retenido por operación en el `TAXES_AMOUNT`. ----[mla]---- Puede tomar los siguientes valores según la jurisdicción: <br/>cordoba<br/>mendoza<br/>la_pampa<br/>santa_fe<br/>tucuman<br/>entre_rios<br/>catamarca<br/>neuquen<br/>santiago_del_estero<br/>rio_negro<br/>jujuy ------------  ----[mco]---- Puede tomar el valor de: <br/>fuente<br/>iva<br/>ica<br/> ------------ <br/><br/> |
| TAX_AMOUNT_TELCO | Es el valor del impuesto a las empresas de telecomunicaciones que se descuenta del valor bruto. |
| TRANSACTION_APPROVAL_DATE | Fecha de aprobación de la operación. |
| POS_ID | ID de caja si el pago se realiza a través de un comercio físico. |
| POS_NAME | Nombre de caja para el pago realizado a través de un comercio físico. |
| EXTERNAL_POS_ID | ID de caja definido por el usuario para el pago realizado a través de un comercio físico. |
| STORE_ID | ID de sucursal si el pago se realiza a través de un comercio físico. |
| STORE_NAME | Nombre de sucursal para el pago realizado a través de un comercio físico. |
| EXTERNAL_STORE_ID | ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. |


<hr/>

### Próximos pasos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Cómo usar el reporte
>
> Conoce la composición del reporte y aprende a leerlo para hacer tu conciliación.
>
> [Cómo usar el reporte](https://www.mercadopago.com.ar/developers/es/guides/manage-account/available-money/how-to-use/)

> RIGHT_BUTTON_REQUIRED_ES
>
> Genera tus reportes
>
> Conoce las formas de generar un reporte y sigue los pasos para configurar tus preferencias.
>
> [Genera tus reportes](https://www.mercadopago.com.ar/developers/es/guides/manage-account/available-money/generate/)
