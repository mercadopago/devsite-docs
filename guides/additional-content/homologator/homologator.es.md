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

Para medir la calidad de tu aplicación, sigue los pasos a continuación.

----[mla, mlm, mlu, mco, mlc, mpe]----

> WARNING
>
> Importante
>
> Antes de comenzar la evaluación, asegúrate de que la homologación de la aplicación en el entorno de producción haya sido completada, incluyendo la realización de al menos un pago productivo.  <br><br>
> <br><br>
> Es necesario que la aplicación a evaluar registre la integración de un producto de entre aquellos en los que la herramienta de medición está disponible. Por ahora, solo está disponible para integraciones con [Checkout Pro,](/developers/es/docs/checkout-pro/landing) [Checkout API](/developers/es/docs/checkout-api/landing), [Checkout Bricks](/developers/es/docs/checkout-bricks/landing) y [Mercado Pago Point.](/developers/es/docs/mp-point/landing)

------------
----[mlb]----

> WARNING
>
> Importante
>
> Antes de comenzar la evaluación, asegúrate de que la homologación de la aplicación en el entorno de producción haya sido completada, incluyendo la realización de al menos un pago productivo.  <br><br>
> <br><br>
> Es necesario que la aplicación a evaluar registre la integración de un producto de entre aquellos en los que la herramienta de medición está disponible. Por ahora, solo está disponible para integraciones con [Checkout Pro,](/developers/es/docs/checkout-pro/landing) [Checkout Transparente](/developers/es/docs/checkout-api/landing), [Checkout Bricks](/developers/es/docs/checkout-bricks/landing) y [Mercado Pago Point.](/developers/es/docs/mp-point/landing)

------------

1. En el [Devsite](/developers/es/docs), accede al menú [Tus integraciones](https://www.mercadopago.com.br/developers/panel/app).
2. En el [Panel del desarrollador](https://www.mercadopago.com.br/developers/panel/app), localiza la aplicación deseada y haz clic en **Evaluar la calidad**. También podrás acceder a la herramienta de homologación directamente desde los [detalles de tu aplicación](/developers/es/guides/additional-content/your-integrations/application-details), haciendo clic en **Evaluar la calidad** del _card_ "Status".
3. En la pantalla **Calidad de integración**, haz clic en **Evaluar la calidad** e ingresa el `payment ID` de un pago reciente realizado con [credenciales](/developers/es/guides/additional-content/your-integrations/credentials) de producción de la aplicación que estás queriendo homologar. Finalmente, haz clic nuevamente en **Evaluar la calidad**.

> Siempre que sea posible, ingresa en el campo el último `payment ID` productivo que identifiques en esa aplicación.

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
