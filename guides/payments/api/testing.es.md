# Prueba tu integración

Es muy importante que antes de salir a producción realices pruebas del flujo completo, verificando que la creación de pagos se realice en forma correcta y que los mensajes sean efectivos a la hora de comunicar al usuario.

Una buena experiencia de tus clientes en el _checkout_ ayuda a mejorar la conversión.

Cuentas con un par de [credenciales de _sandbox_]([FAKER][CREDENTIALS][URL]), que te permitián probar toda la integración en una réplica exacta del Modo Producción pudiendo simular transacciones utilizando las tarjetas de prueba:

| País     	 | Visa 				       | Mastercard        | American Express |
| ---- 		   | ---- 				       | ----------        | ---------------- |
| Argentina  | 4509 9535 6623 3704 |5031 7557 3453 0604|3711 803032 57522 |
| Brasil  	 | 4235 6477 2802 5682 |5031 4332 1540 6351|3753 651535 56885 |
| Chile   	 | 4168 8188 4444 7115 |5416 7526 0258 2580|3757 781744 61804 |
| Colombia   | 4013 5406 8274 6260 |5254 1336 7440 3564|3743 781877 55283 |
| México  	 | 4075 5957 1648 3764 |5474 9254 3267 0366| no disponible    |
| Perú    	 | 4009 1753 3280 6176 | no disponible     | no disponible    |
| Uruguay  	 | 4157 2362 1173 6486 |5161 4413 1585 2061| no disponible    |

También [puedes utilizar tarjetas de prueba de medios de pago locales de cada país](https://www.mercadopago.com.ar/developers/es/guides/localization/local-cards).

## Captura los datos de la tarjeta

Con tu `public_key` podrás obtener de manera segura los datos de tarjeta de crédito ingresados en el formulario. Valida que se cargue correctamente el método de pago disponible para el número de tarjeta ingresado y la cantidad de cuotas con su correspondiente financiación.

Verifica que el `card_token` generado al enviar el formulario contiene información, por ejemplo verificando que el atributo `first_six_digits` contenga un valor.

En caso de que algún dato ingresado sea incorrecto, te brindaremos un código de error especificando qué dato es el que debe ser corregido.


## Recibe un pago

Con tu `access_token` y el `card_token` obtenido, podrás hacer la prueba de creación de un pago.

Si al momento de la creación obtienes algún error vinculado al método de pago seleccionado o a las cuentas que están operando, te informaremos con un HTTP Status 400 Bad Request y el código detallando el error para que puedas efectuar la correción y reintento del pago.

Prueba todos los escenarios posibles de pago aprobado, pendiente o rechazado. Para ello debes ingresar en el formulario en el campo `card_holder_name` alguno de los siguientes prefijos:

* **APRO**: Pago aprobado.  
* **CONT**: Pago pendiente.  
* **CALL**: Rechazo llamar para autorizar.  
* **FUND**: Rechazo por monto insuficiente.  
* **SECU**: Rechazo por código de seguridad.  
* **EXPI**: Rechazo por fecha de expiración.
* **FORM**: Rechazo por error en formulario.  
* **OTHE**: Rechazo general.

En cada caso, debes comunicar a tu cliente el resultado del pago y qué debe hacer como próximo paso.
Para ello te informaremos con un HTTP Status 201 OK que el pago ha sido creado correctamente y enviaremos un código de resultado para que puedas redirigir al cliente a la página con el mensaje correcto.

## Verifica haber recibido la notificación Webhook

Mercado Pago te enviará una notificación del evento ocurrido. Valida que la hayas recibido correctamente e impactado en forma correcta en tu sistema de gestión.

### Efectúa la anulación del pago

Realiza la devolución de un pago aprobado o la cancelación de un pago pendiente y verifica que te llegue la notificación con la novedad correspondiente al recurso.


## Prueba la creación de un cliente

Verifica que se haya creado el `customer` con la tarjeta asociada y que sus datos de tarjeta sean recuperados en forma correcta cuando cargues nuevamente el _checkout_.
