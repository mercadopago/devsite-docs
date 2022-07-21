# PCI DSS

En Mercado Pago aseguramos la confidencialidad, disponibilidad e integridad de todos nuestros procesos siguiendo las mejores prácticas del mercado para que puedas utilizar todos nuestros productos de forma segura. 

Además, para que Mercado Pago pueda operar con tarjetas de crédito y débito debemos cumplir con uno de los estándares de seguridad más exigentes de la industria de pagos: Payment Card Industry Data Security Standard.

## Definición y contexto

Si alguna vez almacenaste, procesaste o transmitiste datos de tarjeta en tu compañía, seguramente escuchaste hablar de PCI. Desde Mercado Pago queremos ayudarte y simplificar la tarea de entender esta normativa y las distintas responsabilidades asociadas.

Como Proveedor de Servicios debemos cumplir responsabilidades normativas y de seguridad frente a las marcas de tarjetas y adquirentes, pero aún así, la seguridad en todo el proceso de pago es obligación de ambas partes. Comercios y/o plataformas de e-commerce que se integren con procesadores de pago como Mercado Pago deben cumplir requerimientos mínimos de seguridad para mitigar riesgos de fraude y fuga de información asegurando los datos de los usuarios.

PCI DSS (Payment Card Industry Data Security Standard) es una normativa internacional de seguridad que deben cumplir todas las entidades que almacenan, procesan o transmiten datos de tarjeta.

La normativa PCI establece un nivel básico de protección para los dueños de tarjetas (tarjetahabientes) y ayuda a reducir el fraude y las filtraciones de datos dentro de todo el ecosistema de pagos. 

El cumplimiento de la normativa PCI implica tres aspectos importantes:

- Transmitir de forma segura la información correspondiente a los datos de tarjetahabientes.
- Almacenar los datos acorde a las mejores prácticas de seguridad de la industria, bajo 12 requisitos normativos que se incluyen en el Estándar PCI.
- Validación anual del cumplimiento de los controles de seguridad y formularios de evaluación propuestos por el Council de PCI. 

Te recomendamos que puedas visitar el [sitio oficial de PCI](https://www.pcisecuritystandards.org/) para más información. A continuación proporcionamos un resumen de los objetivos que tienen los controles de seguridad PCI.

**Objetivo** | **Requerimiento**
------------- | ---------------
CREAR Y MANTENER SISTEMAS Y UNA RED SEGUROS | Instalar y mantener un firewall configurado para proteger los datos de los titulares de tarjeta. <br> <br> No usar los valores predeterminados suministrados por el proveedor para las contraseñas de los sistemas y otros parámetros de seguridad.|
PROTEGER LOS DATOS DE LOS TITULARES DE TARJETA | Proteger los datos del titular almacenados. <br> <br>Cifrar la transmisión de los datos de titulares de tarjeta en las redes abiertas o públicas.
MANTENER UN PROGRAMA DE GESTIÓN DE VULNERABILIDADES | Proteger todos los sistemas contra software maliciosos y actualizar periódicamente el software antivirus. <br> <br>Desarrollar y mantener sistemas y aplicaciones seguros.
APLICAR MEDIDAS SÓLIDAS DE CONTROL DE ACCESO | Restringir el acceso a los datos conforme a la necesidad de saber que tenga la organización. <br> <br>Identificar y autenticar el acceso a los componentes del sistema. Restringir el acceso físico a los datos de titulares de tarjeta.
VIGILAR Y VERIFICAR PERIÓDICAMENTE LAS REDES | Rastrear y monitorizar todo el acceso a los recursos de la red y los datos de titulares de tarjeta. <br> <br>Verificar periódicamente los sistemas y procesos de seguridad.
TENER UNA POLÍTICA DE SEGURIDAD DE LA INFORMACIÓN | Tener una política que contemple la seguridad de la información para todo el personal.


>Lee el documento PCI DSS - Data Security Standard para más detalles. El documento está disponible en la [biblioteca de documentos del sitio oficial de PCI](https://www.pcisecuritystandards.org/document_library).

Para cada uno de los 12 requisitos de PCI, existen básicamente cuatro niveles diferentes de cumplimiento que, por lo general, se basan en el volumen de transacciones con tarjeta que procese tu organización en forma anual y cada nivel tiene un conjunto de obligaciones.

- **Nivel 1**: (i) Organizaciones que procesan más de 6 millones de transacciones al año de Visa o MasterCard, o más de 2,5 millones para American Express; (ii) organizaciones en que ha habido una filtración de datos; (iii) organizaciones consideradas de nivel 1 por cualquier asociación de tarjetas.
   - Informe anual sobre cumplimiento (ROC) a cargo de un evaluador de seguridad cualificado (QSA) o un auditor interno.
   - Escaneo trimestral de red a cargo de proveedor aprobado (ASV).
   - Certificación de cumplimiento (AOC).
   <br>
- **Nivel 2**: organizaciones que procesan entre 1 y 6 millones de transacciones por año.
   - Cuestionario de autoevaluación (SAQ) anual de PCI correspondiente.
   - Escaneo trimestral de red a cargo de proveedor aprobado (ASV).
   - Certificación de cumplimiento (AOC) para cada uno de los SAQ correspondientes.
   <br>
- **Nivel 3**: organizaciones que procesan entre 20.000 y 1 millón de transacciones online por año y organizaciones que procesan menos de 1 millón de transacciones en total.
   - Cuestionario de autoevaluación (SAQ) anual de PCI correspondiente.
   - Escaneo trimestral de red a cargo de proveedor aprobado (ASV).
   - Certificación de cumplimiento (AOC) para cada uno de los SAQ correspondientes.
   <br>
- **Nivel 4**: Organizaciones que procesan menos de 20.000 transacciones online por año y organizaciones que procesan por año hasta 1 millón de transacciones en total. 
   - Cuestionario de autoevaluación (SAQ) anual de PCI correspondiente.
   - Escaneo trimestral de red a cargo de proveedor aprobado (ASV).
   - Certificación de cumplimiento (AOC) para cada uno de los SAQ correspondientes.

 >El [SAQ (Self-Assessment Questionnaire)](https://www.pcisecuritystandards.org/pci_security/completing_self_assessment) es un formulario de autoevaluación PCI que deben completar aquellos comercios o proveedores de servicio que no son elegibles para completar un Reporte de Cumplimiento Nivel 1, y que tiene como finalidad validar el cumplimiento normativo a través de una serie de controles resumidos en preguntas "sí" o "no". 

## Cumplimiento

Mercado Pago es responsable de asegurar la información de datos de tarjetahabiente una vez ingresan en su entorno, por lo que es importante que los comercios y/o plataformas de e-commerce cumplan con los controles de seguridad apropiados para transmitirlos de manera correcta. Como Proveedor de servicios, Mercado Pago puede validar el cumplimiento solicitando evidencia de la documentación PCI correspondiente de acuerdo al producto utilizado.

Mercado Pago simplifica considerablemente la carga del cumplimiento de esta normativa para las organizaciones que adoptan Checkout Pro y ----[mlb]---- Checkout Transparente ------------ ----[mla, mlu, mlm, mco, mpe, mlc]---- Checkout API ------------ ya que utilizan campos que se originan directamente en nuestros servidores en una zona segura para el ingreso de datos de tarjetas de parte del cliente. De esta manera la mayor parte de los requisitos de PCI DSS recaen sobre Mercado Pago y disminuyen considerablemente tu esfuerzo en controles de seguridad.

Para poder ser PCI DSS compliant, demostrar tu cumplimiento y a su vez, asegurar los datos de tarjeta de tus clientes, es importante que utilices este tipo de integraciones para asegurar que los datos que ingresan los tarjetahabientes no lleguen a tus servidores.

Como vimos en las secciones anteriores, para el nivel 1, es necesario realizar una auditoría con un asesor externo. En cambio para los niveles 2 a 4, hay diferentes tipos de SAQ según qué método de integración de pagos uses. Te recomendamos que completes el SAQ que corresponda de acuerdo al tipo de Checkout elegido debido a las obligaciones que impone la normativa PCI. 

Aquí te resumimos qué tipo de SAQ debes completar para cada solución de integración que ofrece Mercado Pago.

**Solución** | **SAQ**
------ | ------
Checkout Bricks | A
Checkout Pro | A
Checkout API | A

> Recuerda que Mercado Pago puede exigir esta documentación debido a su rol como PSP.

## Ventajas de un SAQ-A

El Self-Assessment Questionnaire A (SAQ A) es aplicable a los productos mencionados previamente, y es importante entender que la mayor ventaja de estas integraciones es que delegan casi en su totalidad los controles de seguridad a Mercado Pago, que se encuentra certificado en PCI-DSS.

El documento posee únicamente 22 requerimientos de seguridad que se deben aplicar y auditar anualmente, tales como políticas, controles de accesos, mantenimiento de red y aplicaciones seguras, como también restricciones de acceso físico a entornos de datos de tarjeta en caso de que aplique.

A diferencia de otro tipo de documentos como los Self-Assessment Questionnaire D(*) (aplicable a nuestras antiguas integraciones vía API) o Self-Assessment Questionnaire A-EP(**) estará reduciendo considerablemente su carga de trabajo en cuanto a controles de seguridad y delegando la responsabilidad en un tercero certificado.

> (*) El Self-Assessment Questionnaire D para Comercios se compone de 250 requerimientos de seguridad que se deben auditar y cumplir anualmente.
> <br>
> (**) El Self-Assessment Questionnaire A-EP se compone de 191 requerimientos de seguridad que se deben auditar y cumplir anualmente.

Además, baja considerablemente el riesgo de tu integración, dado que el entorno de datos de tarjeta se encuentra en una zona segura alojada por Mercado Pago y no necesitarás almacenar ningún tipo de información sensible de los tarjetahabientes. 

Es importante que consideres migrar a la nueva solución de Checkout ----[mlb]----Transparente------------ ----[mla, mlu, mlm, mlc, mpe, mco]----API------------ con Secure Fields en caso de que te encuentres integrado vía API para poder facilitar tu cumplimiento PCI, asegurar el canal de pago, reduciendo el riesgo de cualquier tipo de ataque y afectación a los datos de tus clientes y de Mercado Pago.

> Lee el documento **SAQ Instructions and Guidelines** de la [biblioteca oficial de documentos de PCI](https://www.pcisecuritystandards.org/document_library) para detalles de la descripción de cada SAQ.