# Casos para validar QR Comprador

|Caso|Resultado esperado|Observaciones|
|---|---|---|
|El vendedor oprime teclas del teclado mientras se realiza el escaneo.|El hardware no modifica la trama escaneada.|El pago debe efectuarse correctamente.|
|Cambiar el idioma del PDV antes de escanear.|No deben cambiar los caracteres de la trama escaneada, por lo tanto la transacción debe efectuarse de forma exitosa.|El PDV no debe permitir que se cambie el idioma del POS.|
|Pago aprobado. El usuario realiza un pago aprobado.|El sistema de Punto de Venta recibe la información de un pago aprobado.|El status de la respuesta debe approved.|
|Pago rechazado. El usuario realiza un pago rechazado.|El sistema de Punto de Venta recibe la información de un pago rechazado. Abre el escaner para volver a leer un QR.|El status de la respuesta debe rejected.|
|Devolución de pago. Se hace una devolución de un pago desde el Punto de Venta.|En la cuenta del comprador se impacta la devolución.|[Ver devoluciones](/developers/es/docs/qr-code/additional-content/refunds)|
|Busqueda del pago por pérdida de conexión.|Se elimina la orden y, por ende, al escanear el QR muestra pantalla de error.|Intentar escanear el QR una vez sobrepasado el `expiration_date`.|