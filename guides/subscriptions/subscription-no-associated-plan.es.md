# Suscripciones sin plan asociado

Las suscripciones sin plan asociado se utilizan cuando distintas suscripciones tienen características diferentes por ser específicas de cada pagador. Por ejemplo: una suscripción de un solo mes con un descuento específico.

Este modelo de suscripción se puede realizar de dos formas. 

### Con pago autorizado
Permiten generar y facturar la cuota de una suscripción en función de la periodicidad definida, lo que hace que el motor de suscripciones programe y cree automáticamente pagos en función del método de pago definido en el momento de la creación de la firma.

[**Accede a suscripciones con pago autorizado**](/developers/es/docs/subscriptions/integration-configuration/subscription-no-associated-plan/authorized-payments)

### Con pago pendiente
Son un modelo de suscripción donde no se define un método de pago en el momento de su creación. Cuando esto ocurre, los pagos pasan automáticamente al estado `pending` y dependen de que el usuario busque una forma de completar el pago.

[**Accede a suscripciones con pago pendiente**](/developers/es/docs/subscriptions/integration-configuration/subscription-no-associated-plan/pending-payments)