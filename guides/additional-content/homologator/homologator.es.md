# Cómo medir la calidad de tu integración

Para poder ofrecer tanto al vendedor como al comprador la mejor experiencia, Mercado Pago realiza una evaluación de tu integración teniendo en cuenta los estándares necesarios de seguridad y calidad. 

A continuación, encontrarás toda la información necesaria para saber cómo se realiza esta medición, y así poder sacarle el máximo provecho a nuestra herramienta para mantener un proceso de mejora de calidad constante.

## ¿Qué es la medición de calidad?

La medición de calidad es un proceso de certificación de tu integración, con el que podrás asegurar que tu desarrollo cuente con los requisitos de calidad necesarios para dar tanto al vendedor como al comprador la mejor experiencia con Mercado Pago.

## ¿Qué aspectos evalúa la medición de calidad?
En el proceso de medición se analizan una serie de campos asociados a aspectos fundamentales con los que debe contar una integración de Mercado Pago, independientemente del producto integrado. 

Puedes ver estos atributos evaluados y la importancia de cada uno a continuación: 

| Aspectos | Descripción |
|---|---|
| Experiencia de la persona que compra | Para crecer y mantener la tasa de usuarios en tu integración, debes poder ofrecer una buena experiencia de pago. Las sugerencias brindadas por Mercado Pago en la medición de calidad te guiarán para obtener los mejores resultados. |
| Conciliación Financiera | La consistencia en la verificación financiera de las transacciones registradas con Mercado Pago apunta a mantener la integridad de los datos en tu sistema, por lo que es importante que implementes las medidas necesarias y las buenas prácticas sugeridas en el resultado de tu medición. |
| Aprobación de Pagos | Para garantizar una buena tasa de aprobación de pagos, es importante validar cada uno de los campos resaltados como mejoras necesarias, así como implementar las buenas prácticas sugeridas por Mercado Pago. De esta forma, le darás más elementos a nuestras herramientas de fraude para que puedan hacer una evaluación más detallada. |
| Escalabilidad | Al medir la calidad de tu integración, asegúrate de contar con las versiones más actualizadas de nuestras APIs y bibliotecas oficiales para obtener un mejor resultado. |
| Seguridad | En Mercado Pago buscamos asegurar la confidencialidad de cada uno de los datos involucrados en un proceso de compra. Las mejoras indicadas o buenas prácticas sugeridas en el resultado de tu medición te permitirán obtener los datos necesarios de manera segura y confiable. |

## ¿Cómo medir la calidad de tu integración?

Dependiendo de la solución integrada, la evaluación de tu integración puede hacerse de dos maneras distintas: manual o automática. 


> WARNING
>
> Importante
>
> En ambos casos, es requisito indispensable contar con un `payment ID` (identificador de pago) realizado con **credenciales de producción**, que permitirá la correcta evaluación del funcionamiento de la integración.


### Medición automática

Entre los días 1 y 7 de cada mes, Mercado Pago realiza una evaluación automática de todas las aplicaciones integradas con **Checkout Pro, Checkout ----[mla, mlm, mlu, mco, mlc, mpe]----API,------------ ----[mlb]----Transparente,------------ Checkout Bricks y Mercado Pago Point** que cuenten con un `payment ID` productivo. 

> NOTE
>
> Nota
>
> Las integraciones con **Código QR** no serán evaluadas de manera automática. Para conocer cómo medir la calidad de integración, dirígete a “Medición manual”, o bien a [Requisitos para salir a producción con Código QR](/developers/es/docs/qr-code/integration-test/attended-model/go-to-production). Por su parte, las integraciones con **Plugins y Plataformas** no podrán ser evaluadas de ninguna de las dos formas.

**El proceso de medición automática es llevado adelante mensualmente, incluso cuando hayas realizado por tu cuenta una medición manual previa**. Como a lo largo del tiempo, y en función de las mejoras aplicadas, las integraciones pueden presentar cambios en sus configuraciones, en Mercado Pago buscamos garantizar que tu trabajo con nuestras soluciones sea cada vez más satisfactorio, acercándote distintas opciones para lograr una calidad ideal. 

Podrás encontrar los resultados de esta medición automática dentro de los [Detalles de la aplicación](/developers/es/docs/your-integrations/application-details). Al igual que con la medición manual, podrás visualizar el puntaje de tu aplicación, conocer las acciones indicadas como necesarias y buenas prácticas sugeridas. Para conocer más detalles, dirígete a [¿Cómo leer el resultado de tu evaluación?](/developers/es/docs/integration-quality#cmoleerelresultadodetuevaluacin)
 

### Medición manual

Si lo deseas, puedes realizar una evaluación manual de tu integración, siempre que cuentes con un `payment ID` de un pago productivo. Esto puede ser útil para integraciones nuevas, que estén realizando su salida a producción por fuera del período en el que Mercado Pago realiza su medición automática, o bien para aquellas integraciones que hayan aplicado mejoras señaladas y quieran verificar su impacto.

> WARNING
>
> Importante
>
> Recuerda que, incluso habiendo realizado una medición manual, Mercado Pago realizará una medición automática del 1 al 7 de cada mes, excepto en integraciones con Código QR, que solo permiten evaluaciones manuales, y con Plugins y Plataformas, que no están habilitadas para ningún tipo de evaluación.

Para medir la calidad de tu integración de manera manual, ingresa al menú [Tus integraciones](/developers/panel/app). Allí, tendrás 2 opciones para acceder a la herramienta de medición: 

 * Puedes localizar la aplicación deseada y, desde el botón **“>”**,  ingresar a la pantalla desde la que puedes realizar la evaluación de tu integración.
    ![Tus integraciones](/homologator/integration-quality-your-integrations-es.png)
 * Puedes seleccionar la aplicación deseada y, desde los [Detalles de la aplicación](/developers/es/docs/your-integrations/application-details), hacer clic en **Iniciar medición** dentro del panel "Status", en caso de que se trate de una primera medición, o en **Medir de nuevo**, en caso de haber realizado una medición con anterioridad.
    ![Detalles de aplicación](/homologator/integration-quality-aplication-details-es.png)

Una vez dentro de la sección **“Medir calidad de tu integración"**, sigue los pasos a continuación.

1. Ingresa el `payment ID` del último pago productivo, realizado con [credenciales de producción](/developers/es/docs/your-integrations/credentials), de la aplicación que estás queriendo evaluar.
 ![homologación manual](/homologator/integration-quality-payment-id-es.png)

2. Finalmente, haz clic en **Medir la calidad**.

De esta manera, habrás realizado la medición de calidad de manera manual. Accede a [¿Cómo leer el resultado de tu evaluación?](/developers/es/docs/integration-quality#cmoleerelresultadodetuevaluacin) para saber cómo interpretarla y mantener tu integración alineada con los estándares de Mercado Pago.


## ¿Cómo leer el resultado de tu evaluación?

Ya sea que hayas realizado una medición de calidad manual, o hayas recibido los resultados de tu evaluación automática, encontrarás en los [Detalles de la aplicación](/developers/panel/app) la siguiente pantalla:

![resultados de medición](/homologator/integration-quality-results-es.png)

1. **Puntuación**: indica qué tan segura es la configuración de tu aplicación y si está en línea con las buenas prácticas de integración de Mercado Pago. El **puntaje mínimo** para que su aplicación cumpla con los requisitos es de **73**, pero **recomendamos obtener 100 puntos para mejorar la experiencia del usuario y aumentar la tasa de aprobación de pagos**.
2. **Fecha de última medición** y **payment ID**: indica el día y la hora de la última medición y el `payment ID` en el que se basa el puntaje de calidad de la aplicación.
3. **Aspectos evaluados**: indica qué puntaje fue obtenido para cada uno de los aspectos evaluados. Haz clic en ellos para poder saber qué oportunidades de mejora fueron identificadas en el proceso y cómo puedes abordarlas. Consulta la sección [¿Cómo mejorar la calidad de tu integración?](/developers/es/docs/integration-quality#cmomejorarlacalidaddetuintegracin) para explorar más posibilidades de optimización.
4. **Medir de nuevo**: una vez que hayas aplicado las oportunidades de mejora, tienes la opción de medir nuevamente la calidad de tu integración de manera manual o, si lo prefieres, aguardar a la medición automática mensual realizada por Mercado Pago.

## ¿Cómo mejorar la calidad de tu integración?
Como resultado de la medición de calidad de tu integración, nuestra herramienta te señalará distintos puntos que te permitirán optimizar su rendimiento y mejorar la experiencia tanto del vendedor como del comprador. Estos pueden ser:

 * **Acciones obligatorias:** son requerimientos que deben ser cumplidos para asegurar la calidad de la integración y así sumar puntos de mejoría. Por ejemplo, activar las [notificaciones Webhooks](/developers/es/docs/your-integrations/notifications/webhooks) o enviar una referencia externa que permita hacer la correlación de pagos entre Mercado Pago y el sistema integrador.
 
 * **Acciones recomendadas:** son tareas que ayudan a mejorar el puntaje de tu integración en la medición de calidad, pero no te impiden asegurarla. Un ejemplo de estas acciones puede ser enviar toda la información referida al comprador para mejorar la validación y seguridad de los pagos, y así disminuir las probabilidades de rechazos por parte de nuestro motor de prevención de fraude.

 * **Buenas prácticas:** se trata de recomendaciones que, si bien no afectan el puntaje en la medición de calidad, sí aportan a mejorar determinados aspectos de tu integración. Por ejemplo, agregar los SDKs de MercadoPago.js V2 a tu proyecto, o bien mantener una actualización de tu sistema en función de los distintos eventos recibidos mediante notificaciones.

Las acciones y buenas prácticas sugeridas por Mercado Pago dependerán siempre de cada integración particular y, a su vez, de la solución integrada. Si bien aquí te proporcionamos información sobre algunas de ellas, deberás guiarte por la información devuelta por nuestra herramienta en el resultado de la medición de calidad para saber específicamente cómo optimizar el funcionamiento de tu integración y, consecuentemente, tu puntaje.

