# Suscripciones con plan asociado

Las suscripciones con plan asociado se utilizan cuando es necesario utilizar la misma suscripción en diferentes ocasiones para organizarlas en grupos identificables. Por ejemplo, para una suscripción mensual y anual a un gimnasio.

## Crear plan

La integración de **suscripciones con plan asociado** se realiza en dos pasos. En el primero es necesario **crear un plan** que irá asociado a la suscripción y en el segundo, la **creación de la suscripción**. 

El plan de suscripción te permite definir, entre otros atributos, el título, el valor y la frecuencia de las suscripciones creadas por el vendedor. Para crear un plan y asociarlo con una suscripción, mira el endpoint [/preapproval_plan](/developers/es/reference/subscriptions/_preapproval_plan/post), completa los atributos necesarios y ejecuta la solicitud. 

Al ejecutar la API, se creará el plan y tendrás acceso a `preapproval_plan_id`, **que en la respuesta de la API se mostrará como ìd`.** Este **atributo es obligatorio** para crear la suscripción. 

## Crear suscripción

Una vez que hayas creado un plan, puedes crear la suscripción. La suscripción es una autorización del pagador para cargos recurrentes con un medio de pago definido (tarjeta de crédito, por ejemplo). Al suscribirse a un producto/servicio, el cliente acepta que se le cobre periódicamente un cierto monto por el período de tiempo definido.

Para crear una suscripción, tenga a mano el `preapproval_plan_id`, accede al endpoint [/preapproval](/developers/es/reference/subscriptions/_preapproval/post) y completa los atributos como se indica en la tabla de parámetros. Es importante prestar atención al parámetro `preapproval_plan_id` e insertar el `id` generado en el paso de creación del plan.

Cuando termines de llenar los atributos, ejecuta la solicitud y ¡listo! Se habrá creado la suscripción con el plan asociado.

> PREV_STEP_CARD_ES
>
> Requisitos previos
>
> Consulta todos los requisitos necesarios para empezar a integrarte.
>
> [Requisitos previos](/developers/es/docs/subscriptions/requirements)

> NEXT_STEP_CARD_ES
>
> Suscripciones sin plan asociado
>
> Ver más información sobre las diferentes suscripciones que tienen características diferentes ya que son específicas de cada pagador.
>
> [Suscripciones sin plan asociado](/developers/es/docs/subscriptions/integration-configuration/subscription-no-associated-plan)