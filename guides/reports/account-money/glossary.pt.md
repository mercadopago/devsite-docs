
# Glossário


Sabemos que alguns termos são técnicos e você pode não estar familiarizado com todos eles. Use este glossário para não se perder!

| Name on the report column | What it means|
| ----------------------------------- |	--------------- |
| EXTERNAL_REFERENCE | <br/> ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br/><br/> Ten en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br/> <br/> |
| SOURCE_ID | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). |
| USER_ID | Código de la cuenta del vendedor. (Cust ID) |
| PAYMENT_METHOD | Consulta los [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/#bookmark_argentina) según el país con el que operes en Mercado Pago. |
| PAYMENT_METHOD_TYPE | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Tipo de medio de pago.<br/><br/> Puede ser:<br/><ul><li>*credit_card*: tarjeta de crédito.</li><li>*debit_card*: tarjeta de débito.</li><li>*bank_transfer*: transferencia.</li><li>*atm*: cajero</li><li>*ticket*: efectivo</li><li>*account_money*: dinero en cuenta.</li></ul></td></tr></table> |
| SITE | ----[mla]---- MLA: Argentina ------------ ----[mlb]---- MLB: Brasil ------------ ----[mpe]---- MPE: Perú  ------------ ----[mco]---- MCO: Colombia  ------------ ----[mlm]---- MLM: México ------------ ----[mlu]---- MLU: Uruguay ------------ ----[mlc]---- MLC: Chile ------------  |
| TRANSACTION_TYPE | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Tipo de operación.<br/><br/> Puede ser:<br/><ul><li> *SETTLEMENT*: Pago aprobado.</li><li>*REFUND*: Pago devuelto total o parcialmente.</li><li>*CHARGEBACK*: El comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.</li><li>*DISPUTE*: El comprador inició un reclamo por ese pago.</li><li>*WITHDRAWAL*: Retiro a la cuenta bancaria.</li><li>*WITHDRAWAL_CANCEL*: Retiro a la cuenta bancaria que fue cancelado</li></ul></td></tr></table> |
| TRANSACTION_AMOUNT | Monto bruto de la operación. |
| TRANSACTION_CURRENCY | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Puede tomar algunos de estos valores según corresponda:<br/><ul><li> MXN (Peso mexicano)</li><li>CLP (Peso Chileno)</li><li>ARS (Peso Argentino)</li><li>BRL (Real Brasilero</li><li>PEN (Sol Peruano)</li><li>COP (Peso Colombiano)</li><li>UYU (Peso Uruguayo)</li><li>VES (Bolivar Venezolano)</li></ul></td></tr></table> |
| TRANSACTION_DATE | Fecha de acreditación de la operación. |
| FEE_AMOUNT | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. Incluyen IVA. |
| SETTLEMENT_NET_AMOUNT | Monto neto de la operación que impactó en el dinero en cuenta. Se le descontaron todas las comisiones involucradas del `TRANSACTION_AMOUNT`. |
| SETTLEMENT_CURRENCY | <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Puede tomar algunos de estos valores según corresponda:<br/><ul><li> MXN (Peso mexicano)</li><li>CLP (Peso Chileno)</li><li>ARS (Peso Argentino)</li><li>BRL (Real Brasilero</li><li>PEN (Sol Peruano)</li><li>COP (Peso Colombiano)</li><li>UYU (Peso Uruguayo)</li><li>VES (Bolivar Venezolano)</li></ul></td></tr></table> |
| SETTLEMENT_DATE | Fecha en que se acreditó el dinero de la operación. |
| REAL_AMOUNT | Monto neto de la operación, si es un *settlement*, se le descuentan los montos por contracargos, reclamos o devoluciones. |
| COUPON_AMOUNT | Monto del cupón de descuento. **Solo se descuenta del monto bruto** (`TRANSACTION_AMOUNT`) **si está provisto por el vendedor**. |
| METADATA | Datos extras como por ejemplo el ID de las devoluciones parciales o datos provistos por el vendedor en caso de tener una integración externa. |
| MKP_FEE_AMOUNT | Comisión de Mercado Libre. Incluye IVA. |
| FINANCING_FEE_AMOUNT | Costo por ofrecer cuotas sin interés. |
| SHIPPING_FEE_AMOUNT | Costo de envío. |
| TAXES_AMOUNT | ----[mla]---- Impuestos cobrados por retenciones de Ingresos Brutos. ------------ ----[mco]---- Impuestos cobrados por retenciones de IVA, ICA y Fuente según aplique el caso. ------------ ----[mlu]---- Impuestos cobrados por retenciones de IVA.  ------------ ----[mlu, mpe, mlm]---- Impuestos cobrados. ------------ |
| INSTALLMENTS | Cantidad de cuotas en las que fue realizada la operación. |
| TAX_AMOUNT_TELCO | ----[mco]---- <table style="border:none;background:none;font-size:16px;height:auto" ><tr style="border:none;background:none;"><td style="border:none;background:none;"> Descripción del impuesto retenido por operación en el TAXES_AMOUNT. <br/><br/> Puede tomar el valor de:<br/><ul><li> fuente</li><li>iva</li><li>ica</li></td></tr><tr style="border:none;"></table> ------------ ----[mlu]---- Es el valor del impuesto a las empresas de telecomunicaciones que se descuenta del valor bruto. ------------ |
| TAX_DETAIL | <br/> Descripción del impuesto retenido por operación en el `TAXES_AMOUNT`. ----[mla]---- Puede tomar los siguientes valores según la jurisdicción: <br/>cordoba<br/>mendoza<br/>la_pampa<br/>santa_fe<br/>tucuman<br/>entre_rios<br/>catamarca<br/>neuquen<br/>santiago_del_estero<br/>rio_negro<br/>jujuy ------------ <br/><br/> |
| POS_ID | ID de caja si el pago se realiza a través de un comercio físico. |
| POS_NAME | Nombre de caja para el pago realizado a través de un comercio físico. |
| EXTERNAL_POS_ID |  ----[mla, mlm]---- ID de caja definido por el usuario para el pago realizado a través de un comercio físico. ------------ |
| STORE_ID | ID de sucursal si el pago se realiza a través de un comercio físico. |
| STORE_NAME |  ----[mla, mlm]---- Nombre de sucursal para el pago realizado a través de un comercio físico. ------------ |
| EXTERNAL_STORE_ID |  ----[mla, mlm]---- ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. ------------ |
| ORDER_ID |  ----[mla, mlm]---- Orden de compra. ------------ |
| SHIPPING_ID |  ----[mla, mlm]---- Identificador de envío. ------------ |
| SHIPMENT_MODE |  ----[mla, mlm]---- Modalidad de envío ------------ |
| PACK_ID |  ----[mla, mlm]---- Identificador del paquete en el carrito. ------------ |

<hr/>

### Próximos passos

> LEFT_BUTTON_RECOMMENDED_ES
>
> Como usar o relatório
>
> Saiba como o relatório é composto e aprenda a analisá-lo.
>
> [Como usar o relatório](https://www.mercadopago.com.br/developers/pt/guides/reports/account-money/how-to-use/)

> RIGHT_BUTTON_REQUIRED_ES
>
> Gere seus relatórios
>
> Saiba as formas de gerar um relatório e siga as etapas para configurar suas preferências.
>
> [Gere seus relatórios](https://www.mercadopago.com.br/developers/pt/guides/reports/account-money/generate/)
