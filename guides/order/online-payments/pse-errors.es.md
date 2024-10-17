# Errores en pagos con PSE

Al procesar transacciones mediante PSE, el llamado para enviar un pago puede devolver errores externos al Checkout. 

A continuación, puedes ver cuáles son y qué vías puedes ofrecer al comprador para solucionarlos. 

| Código | Descripción | Mensaje sugerido |
|---|---|---|
| 400 | El monto de la transacción excede los límites establecidos en PSE para el comercio. | *El monto de la transacción excede los límites establecidos en PSE para la empresa. Por favor, comuníquese con nuestras líneas de atención al cliente al télefono (nnn)nnnn, o bien al correo electrónico email@email.com* |
| 500 - cause code 9034 | La transacción no puede completarse en ese momento. Es necesario volver a intentarlo más tarde. | *No se pudo crear la transacción. Por favor, intente más tarde, o comuníquese con nosotros al teléfono: (nnn)nnnn, o al correo electrónico: email@email.com* |