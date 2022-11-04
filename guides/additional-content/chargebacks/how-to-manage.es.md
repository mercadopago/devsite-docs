# ¿Cómo gestionar disputas de contracargos?

Se produce una disputa cuando deseas discutir el reclamo de contracargo con información de respaldo que valide y asegure que el producto se entregó conforme a lo acordado.

Toda la información necesaria para gestionar las disputas de contracargos realizadas se puede encontrar aquí:

1. Configura [las notificaciones IPN](/developers/panel/notifications/ipn) y habilita la opción **Contracargos**
   
2. Verifica toda la información relacionada con un contracargo utilizando la solicitud [Obtener contracargo](/developers/pt/reference/chargebacks/_chargebacks_id/get)
   1. Verifica si el [contracargo se puede cubrir](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/294) y si se requiere alguna documentación, a través de los campos `coverage_eligible` y `documentation_required`, respectivamente.

> WARNING
>
>Importante
>
>Solo es necesario continuar con los siguientes pasos si:
>1. La disputa de contracargo es elegible para la cobertura
>2. Se requiere documentación
>3. El plazo no ha vencido
>

3. Envía los documentos a través de la siguiente solicitud:
```curl
curl -X POST  \
-F 'files[]=@/path/to/file/file1.png' \
-F 'files[]=@/path/to/file/file2.pdf' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
https://api.mercadopago.com/v1/chargebacks/ID/documentation
```

>NOTE
>
>Nota
>
>Los archivos pueden ser `.jpg`, `.png` o `.pdf` y no deben exceder los 10 MB en total.

Si la documentación se cargó correctamente, la API responderá con el estado `200 OK` y el valor de `documentation_status` cambiará a `review_pending`.

4. Espera la notificación de IPN sobre la resolución. Vuelve a verificar la disputa usando el método [Obtener contracargo](/developers/pt/reference/chargebacks/_chargebacks_id/get). El valor de `coverage_applied` puede cambiar a uno de los siguientes valores:

| Value           | Descripción
| ----            | ----
| **true**  | Indica que se falló a favor del vendedor y se le devuelve el dinero.
| **false** | Indica que se falló en contra del vendedor y se le descuenta el dinero.
