# Calidad de integración

Para poder ofrecer tanto al vendedor como al comprador la mejor experiencia, es importante que puedas validar la calidad de tu integración de acuerdo a los estándares de Mercado Pago antes de salir a producción.
A continuación, encontrarás toda la información necesaria para saber cómo homologar tu integración.

## ¿Qué es la homologación?

La homologación es un proceso de certificación de tu integración, con el que podrás asegurar que tu desarrollo cuente con los requisitos de calidad necesarios para dar tanto al vendedor como al comprador la mejor experiencia con Mercado Pago.

## ¿Qué aspectos evalúa la homologación?
En el proceso de homologación se analizan una serie de campos asociados a 5 aspectos fundamentales con los que debe contar una integración de Mercado Pago, independientemente del producto integrado. 
Puedes ver estos atributos evaluados y la importancia de cada uno a continuación: 

| **Aspectos**                | **Descripción**                                                                                                                                                                                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   Aprobación de Pagos   | Para garantizar una buena tasa de aprobación de pagos, es muy importante validar cada uno de los campos resaltados como mejoras necesarias, así como implementar las buenas prácticas sugeridas por Mercado Pago en el resultado de tu homologación. De esta forma, le darás más elementos a nuestras herramientas de fraude para que puedan hacer una evaluación más detallada. |
| Experiencia de Usuario  | Para crecer y mantener la tasa de usuarios en tu integración, debes poder ofrecer una buena experiencia de pago. Las sugerencias brindadas por Mercado Pago en la homologación te guiarán para obtener los mejores resultados.                                                                                                                                                  |
| Seguridad               | En Mercado Pago buscamos asegurar la confidencialidad de cada uno de los datos involucrados en un proceso de compra. Las mejoras indicadas o buenas prácticas sugeridas en el resultado de tu homologación te permitirán obtener los datos necesarios de manera segura y confiable.                                                                                              |
| Escalabilidad           | Cuando homologues tu integración, contar con las versiones más actualizadas de nuestras APIs y bibliotecas oficiales te asegurará un mejor resultado.                                                                                                                                                                                                                            |
| Conciliación Financiera | La consistencia en la verificación financiera de las transacciones registradas con Mercado Pago apunta a mantener la integridad de los datos en tu sistema, por lo que es importante que implementes las medidas necesarias y las buenas prácticas sugeridas en el resultado de tu homologación.                                                                                 |

## ¿Cómo homologar tu integración?

----[mla, mlm, mlu, mco, mlc, mpe]---- 
> WARNING
>
> Atención
>
> Por ahora, la herramienta de medición de la calidad de integración solo está disponible para integraciones con [Checkout Pro,](/developers/es/docs/checkout-pro/landing) [Checkout API](/developers/es/docs/checkout-api/landing), [Checkout Bricks](/developers/es/docs/checkout-bricks/landing) y [Mercado Pago Point](/developers/es/docs/mp-point/landing).

------------
----[mlb]---- 
> WARNING
>
> Atención
>
> Por ahora, la herramienta de medición de la calidad de integración solo está disponible para integraciones con [Checkout Pro,](/developers/es/docs/checkout-pro/landing) [Checkout Transparente](/developers/es/docs/checkout-api/landing), [Checkout Bricks](/developers/es/docs/checkout-bricks/landing) y [Mercado Pago Point](/developers/es/docs/mp-point/landing).

------------

Para medir la calidad de tu aplicación, sigue los pasos a continuación.

1. En el [Devsite](/developers/es/docs), accede al menú **Tus integraciones >** [Dashboard](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).
2. En el área [Tus aplicaciones](/developers/es/guides/additional-content/dashboard/applications) del Dashboard, **haz clic en la aplicación deseada**. Debe ser una aplicación en la que hayas integrado uno de los productos disponibles en la herramienta de medición (Checkout Pro, Checkout Bricks, ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------ ----[mlb]---- Checkout Transparente ------------, o Mercado Pago Point).
3. Luego haz clic en **Detalles de la puntuación** para acceder a la herramienta donde puedes **medir la calidad de tu aplicación** y ver el puntaje que indica qué tan segura y alineada está la configuración de tu aplicación con las buenas prácticas de integración de Mercado Pago.
4. En la pantalla **Calidad de integración**, haz clic en **Evaluar calidad** e ingresa el `payment ID` de un pago realizado con [credenciales](/developers/es/guides/additional-content/credentials/credentials) de producción de la aplicación que estás queriendo homologar. Siempre que sea posible, mostraremos en el campo el último `payment ID` productivo que identificamos en esa aplicación.

¡Listo! Has realizado la medición de calidad. Ya puedes saber tu puntaje y qué aspectos mejorar de tu integración.

## ¿Cómo leer el resultado de tu homologación?

Una vez que realices la medición de calidad de tu integración, encontrarás la siguiente pantalla: 

![homologation-screen](/homologator/integration-quality-screen-es.png)

1. **Puntuación**: indica qué tan segura es la configuración de tu aplicación y si está en línea con las buenas prácticas de integración de Mercado Pago. El puntaje mínimo para que tu aplicación cumpla con lo requerido es de 75. Recuerda, igualmente, que cuanto más cerca esté tu integración de los 100 puntos, mejor será la experiencia del usuario y la tasa de aprobación de pagos.
2. **Payment ID** y **Última actualización**: `payment ID` en el que se basa el puntaje de calidad de la aplicación y fecha de la última actualización de la homologación.
3. **Mejoras pendientes**: indica qué oportunidades de mejora fueron identificadas en el proceso y cómo puedes solucionarlas. Haz clic en ellas para poder verlas.

> WARNING
>
> Importante
>
> Las acciones indicadas como **necesarias** deben completarse para sumar puntos que mejorarán la calidad de tu integración, mientras que las indicadas como **buenas prácticas**  son recomendables, pero no afectarán la puntuación.

4. **Actualizar la puntuación**: Una vez que hayas aprovechado las oportunidades de mejora, puedes testear nuevamente la calidad de tu integración para salir a producción.
