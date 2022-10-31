# ¿Cómo gestionar disputas de contracargos?

Se produce una disputa cuando desea argumentar el reclamo de contracargo con información de respaldo que valide y asegure que el producto se entregó de conformidad.

Toda la información necesaria para gestionar las disputas de contracargos realizadas se puede encontrar aquí:

1. Configure [las notificaciones IPN](/developers/panel/notifications/ipn) y habilite la opción **Contracargos**
   
2. Verifique toda la información relacionada con un contracargo utilizando la solicitud [Obtener contracargo](/developers/pt/reference/chargebacks/_chargebacks_id/get)
   1. Verifica si el [contracargo se puede cubrir](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/294) y si se requiere alguna documentación, a través de los campos `coverage_eligible` y `documentation_required`, respectivamente.

>WARNING
>
>Importante
>Solo es necesario continuar con los siguientes pasos si:
>1. La disputa de contracargo es elegible para la cobertura
>2. Se requiere documentación
>3. El plazo no ha vencido
>

1. Envía los documentos a través del siguiente solitud:
```curl
curl -X GET \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
https://api.mercadopago.com/v1/chargebacks/ID
```

>NOTE
>
>Nota
>
>Los archivos pueden ser `.jpg`, `.png` o `.pdf` y no deben exceder los 10 MB en total.

Si la documentación se cargó correctamente, la API responderá con el estado `200 OK` y el valor de `documentation_status` cambiará a `review_pending`.

4. Espere la notificación de IPN con respecto a la resolución. Vuelva a verificar la disputa usando el método [Obtener contracargo](/developers/pt/reference/chargebacks/_chargebacks_id/get). El valor de `coverage_applied` podría haber tomado uno de los valores posibles:

| Value           | Descripción
| ----            | ----
| **true**  | Indica que se falló a favor del vendedor y se le devuelve el dinero.
| **false** | Indica que se falló en contra del vendedor y se le descuenta el dinero.
