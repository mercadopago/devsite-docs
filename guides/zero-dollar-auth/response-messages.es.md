# Mensajes de respuesta

Ofrece a tus clientes información clara y precisa sobre el resultado de la operación realizada. Esto les permite ser notificados sobre qué acción pueden tomar para solucionarla o si hay algún paso adicional que deben realizar.

Por ejemplo, si la tarjeta utilizada no puede ser validada, se puede recomendar que verifiquen si los datos ingresados son correctos o que utilicen otro medio de pago para completar la operación. Para obtener más información sobre los posibles errores, consulta la referencia de la respuesta de la API.

Aquí tienes una tabla con los mensajes sugeridos según el estado de cada operación:

| Estado | Escenario | Mensaje sugerido |
|---|---|---|
| APPROVED | Escenarios en los que la tarjeta es válida | Tu tarjeta ha sido validada. |
| REJECTED | Escenarios en los que la tarjeta no es válida | No se pudo validar tu tarjeta. |