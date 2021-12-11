Cuando recibes una notificación en tu plataforma, Mercado Pago espera una respuesta para validar que la recibiste correctamente. Para eso, debe devolver un `HTTP STATUS 200 (OK)` o `201 (CREATED)`. Si no se envía esta respuesta, se entenderá que no ha recibido la notificación y se realizará un nuevo intento de envío hasta que reciba la respuesta.

En la siguiente tabla puede encontrar los principales eventos, plazos y tiempo de espera para recibir nuevos intentos de notificación.

| Evento | Plazo después del primer envío | Tiempo de espera de confirmación |
| --- | --- | --- |
| Envío | - | 22 segundos |
| Primer intento | 5 minutos | 5 segundos |
| Segundo intento | 45 minutos | 5 segundos |
| Tercer intento | 6 horas | 5 segundos |
| Cuarto intento | 2 días | 5 segundos |
| Quinto intento | 4 días | 5 segundos |