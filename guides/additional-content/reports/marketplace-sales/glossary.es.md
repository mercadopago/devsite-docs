# Campos del reporte

Puedes ver la descripción de cada campo presente en el informe en la tabla a continuación. 

| Campo                | Descripción                                                                                                                                                                                     |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Collector y Nickname** | _ID_ y nickname de cada _seller_ vinculado al marketplace.                                                                                                                                           |
| **Payment**              | Número de identificación de cada pago.                                                                                                                                                          |
| **Status description**   | Estado del pago. Puede ser _Approved_, si el pago ya está aprobado, o _Rejected_, en caso de que haya sido rechazado.                                                                            |
| **Status Detail**        | Detalles del _status_ del pago. Para aquellos pagos cuyo _status_ sea _Approved_, el detalle será _accredited_. En cambio, para los pagos rechazados podrás obtener tres detalles distintos dependiendo de los motivos del rechazo. Puedes consultar a qué se deben y cómo solucionarlos en nuestra documentación para [mejorar la aprobación de pagos](/developers/es/docs/checkout-pro/how-tos/improve-payment-approval). |
| **Purchase order**       | Número de orden de la compra.                                                                                                                                                                   |
| **Payment method type** | Indica el método de pago con el que fue realizada la compra, ya sea tarjeta de crédito, de débito, u otros medios.                                                                              |
| **Transaction amt. LC** | Valor bruto de la transacción.                                                                                                                                                                  |
| **Created y Approved Date Date** | Fechas de la creación del pago y de su aprobación, respectivamente.                                                                                                                          |
| **Marketplace fee amt. LC**   | Valor de la tasa correspondiente al marketplace.                                                                                                                                               |
| **MP fee amt. LC**       | Valor de la tasa correspondiente a Mercado Pago.                                                                                                                                               |
| **Total Paid Ammount**   | Monto total del pago realizado por el _payer_, expresado en la moneda correspondiente.                                                                                                            |
| **Net Received Amt LC**  | Monto cobrado por el _collector_ luego de las deducciones (tasas, impuestos, etc.).                                                                                                               |
