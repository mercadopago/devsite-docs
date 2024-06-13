# Errores en el procesamiento

A continuación se detallan los controles realizados desde Self Service para asegurar el correcto funcionamiento del flujo _end to end_ y para preservar la experiencia de nuestros usuarios. Si se detecta alguna de las situaciones controladas, la información completa no será procesada y deberá ser enviada nuevamente por completo.

## Controles a nivel de contenido

| Código de error | Descripción                                             | Causa                                                                                   |
|-----------------|---------------------------------------------------------|-----------------------------------------------------------------------------------------|
| E053            | ID del registro                                         | El campo Reference no está presente.                              |
| E054            | Formato de código de cliente inválido                  | Si el vendedor declara identificar el cliente con client code y no está presente ó tiene formato inválido. |
| E055            | Formato de DNI inválido                                 | Si el vendedor es de Argentina y el vendedor declara identificar al cliente a través del DNI y no está presente ó tiene formato inválido. |
| E056            | Formato de correo electrónico inválido                  | Formato inválido de email.                                                              |
| E057            | Formato de fecha de vencimiento inválido                | Fecha primer vencimiento no cumple con el formato AAAAMMDD.                              |
| E058            | Valor de fecha de vencimiento inválido                  | Fecha primer vencimiento es anterior al día que se sube la deuda.                        |
| E059            | Valor de monto vencido inválido                         | El monto del primer vencimiento no está presente o tiene formato erróneo.                |
| E060            | Formato de fecha de vencimiento secundario inválido     | Fecha segundo vencimiento no cumple con el formato AAAAMMDD.                             |
| E061            | Valor de fecha de vencimiento secundario inválido       | Fecha segundo vencimiento es anterior o igual a la fecha del primer vencimiento.          |
| E062            | Valor de monto de vencimiento secundario inválido       | La fecha del segundo vencimiento está presente pero no su monto ó tiene formato inválido. |
| E063            | Formato de fecha de vencimiento terciario inválido      | Fecha tercer vencimiento no cumple con el formato AAAAMMDD.                              |
| E064            | Valor de fecha de vencimiento terciario inválido        | Fecha tercer vencimiento es anterior o igual a la fecha del segundo vencimiento.          |
| E065            | Valor de monto de vencimiento terciario inválido        | La fecha del tercer vencimiento está presente pero no su monto ó tiene formato inválido. |
