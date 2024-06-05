# Errores en el procesamiento

A continuación se detallan los controles realizados desde Self Service para asegurar el correcto funcionamiento del flujo _end to end_ y para preservar la experiencia de nuestros usuarios. Si se detecta alguna de las situaciones controladas, la información completa no será procesada y deberá ser enviada nuevamente por completo.

## Controles a nivel de contenido

| Formato | Código de error | Descripción                                             | Causa                                                                                   |
|---------|-----------------|---------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Todos   | E051            | Igual que {register}                                    | Este caso ocurre cuando un registro tiene todos los mismos valores en los campos que un registro ya procesado. |
| Todos   | E052            | Mismos datos en {register}                              | Este caso es cuando todos los campos coinciden menos el id registro.                     |
| Todos   | E053            | ID del registro                                         | El campo external reference (id registro) no está presente.                              |
| Todos   | E054            | Formato de código de cliente inválido                  | Si el vendedor es MLA y el vendedor declara identificar el cliente con client code y no está presente ó tiene formato inválido. |
| Todos   | E055            | Formato de DNI inválido                                 | Si el vendedor es MLA y el vendedor declara identificar al cliente a través del DNI y no está presente ó tiene formato inválido. |
| Todos   | E056            | Formato de correo electrónico inválido                  | Formato inválido de email.                                                              |
| Todos   | E057            | Formato de fecha de vencimiento inválido                | Fecha primer vencimiento no cumple con el formato AAAAMMDD.                              |
| Todos   | E058            | Valor de fecha de vencimiento inválido                  | Fecha primer vencimiento es anterior al día que se sube la deuda.                        |
| Todos   | E059            | Valor de monto vencido inválido                         | El monto del primer vencimiento no está presente o tiene formato erróneo.                |
| Todos   | E060            | Formato de fecha de vencimiento secundario inválido     | Fecha segundo vencimiento no cumple con el formato AAAAMMDD.                             |
| Todos   | E061            | Valor de fecha de vencimiento secundario inválido       | Fecha segundo vencimiento es anterior o igual a la fecha del primer vencimiento.          |
| Todos   | E062            | Valor de monto de vencimiento secundario inválido       | La fecha del segundo vencimiento está presente pero no su monto ó tiene formato inválido. |
| Todos   | E063            | Formato de fecha de vencimiento terciario inválido      | Fecha tercer vencimiento no cumple con el formato AAAAMMDD.                              |
| Todos   | E064            | Valor de fecha de vencimiento terciario inválido        | Fecha tercer vencimiento es anterior o igual a la fecha del segundo vencimiento.          |
| Todos   | E065            | Valor de monto de vencimiento terciario inválido        | La fecha del tercer vencimiento está presente pero no su monto ó tiene formato inválido. |
| Todos   | E066            | Razón inválida                                          | Si el campo motivo está presente y no corresponde a la lista de motivos para el site del vendedor. |