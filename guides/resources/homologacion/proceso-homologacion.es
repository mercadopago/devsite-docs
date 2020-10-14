# Proceso de Homologación

Es el proceso mediante el cual el equipo de integraciones realiza una validación de la calidad de la integración. 
Un integrante del equipo ejecuta un control, dependiendo del producto integrado, y avanza punto por punto chequeando si se cumplió o no con ese requerimiento con el fin de obtener un nota por la integración.

## ¿Por qué es importante la homologación?

Una correcta integración tiene impacto tanto en la conversión como en la aprobación de pagos, y contribuye a evitar problemas operativos. 
A su vez, se revisan distintos factores que impactan directamente en los sistemas de fraude de Mercado Pago, lo que permite lograr una mayor aprobación reduciendo el riesgo de fraude (contracargos). 

## ¿Cuál es el objetivo?
El objetivo de la homologación es asegurar la calidad de la integración y para lograrlo nos apoyamos en un sistema de puntos.
Además de los puntos que se suman de manera directa, existen buenas prácticas que suman puntos extras que son los que le permitirán llegar al puntaje necesario para hacer el Go Live.


## ¿Qué se revisa durante la Homologación?
- Flujos y experiencias de pago.
- Aspectos que implican garantizar una integración segura.
- Aspectos que ayudan a nuestros sistemas de fraude ha ser más efectivos. 

### Validaciones que aplican a todos los Checkouts de Mercado Pago
Los diferentes Checkouts de Mercado Pago son: Checkout Pro, Checkout Tokenizer o Checkout API.

Sea cuál sea el Checkout integrado que hayan realizado:  
- Se realizan pruebas de pagos aprobados y pagos rechazados con tarjetas. 
- Se comprueba el uso del campo _external_reference_ para facilitar la conciliación de tus transacciones.
- Se comprueba el uso de notificaciones de pago (IPN o Webhooks) para automatizar la conciliación de transacciones.



