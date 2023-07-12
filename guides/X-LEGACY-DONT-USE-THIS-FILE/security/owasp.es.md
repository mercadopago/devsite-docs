# OWASP

En Mercado Pago protegemos los pagos de nuestros clientes y usuarios para que se procesen de forma segura en todas las plataformas web y mobile. Para ello, implementamos controles de seguridad que mantienen la confidencialidad, la integridad y la disponibilidad de la información que procesamos a través de las integraciones.
    
Open Web Application Security Project (OWASP) es una comunidad abierta y segura que brinda herramientas y estándares para el desarrollo y mantenimiento de aplicaciones web. Busca fomentar la investigación y desarrollo de seguridad en aplicaciones. 

OWASP Top 10 es una clasificación de las vulnerabilidades más usuales en conjunto con su mitigación para proteger las aplicaciones de este tipo de ataques. Te recomendamos que visites el [sitio oficial de OWASP Top 10](https://owasp.org/www-project-top-ten/) para más información.

Debido a la integración que estas realizando con Mercado Pago, para protegernos ante las vulnerabilidades más comunes, te sugerimos seguir los siguientes consejos acerca de Input Validation y Server-Side Request Forgery Prevention.  Mira [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/index.html) para más información.

>NOTE
>
>Importante
>
>Es importante seguir buenas prácticas de codificación en todas las etapas del ciclo de vida del desarrollo del software para poder mantener la seguridad en todas las transacciones. 

## Input validation
El [input validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) se realiza para garantizar que todos los datos sean correctos (sintáctica y semánticamente) antes de ingresar al flujo de trabajo de nuestro sistema, permitiéndonos detectar entradas no autorizadas antes de que sean procesadas por la aplicación.

De esta manera, evitamos que datos incorrectos persistan en nuestras bases de datos y como consecuencia, provoquen un mal funcionamiento en nuestro sistema. Todos los datos de fuentes no confiables deben estar sujetos a esta validación.

Para su implementación, se utiliza cualquier técnica de programación que permita la aplicación efectiva de la corrección de datos de entrada: 
- Validadores de tipos de datos disponibles de forma nativa en marcos de aplicaciones web.
- Validación contra el esquema JSON y el esquema XML para la entrada en estos formatos.
- Conversión de tipos de datos con un estricto manejo de excepciones.
- Verificación de rango de valores mínimo y máximo para parámetros numéricos y fechas, verificación de longitud mínima y máxima para cadenas de caracteres.

Es importante asegurar que cualquier validación de entrada realizada en el cliente también sea realizada en el servidor, ya que las mismas podrían ser omitidas del lado del cliente por un atacante. 

## Server-Side Request Forgery (SSRF)
Server-Side Request Forgery (SSRF) es un vector de ataque que abusa de una aplicación para interactuar con la red interna y/o externa, o con la propia máquina de nuestra aplicación. Dependiendo de la funcionalidad y los requisitos de la aplicación, hay dos casos de uso en los que puede ocurrir SSRF:

1. **La aplicación puede enviar una solicitud solo a las aplicaciones identificadas y de confianza**

     Este caso ocurre cuando una aplicación necesita realizar una solicitud a otra, que suele estar ubicada en otra red, para realizar una tarea específica. En este caso es posible utilizar un enfoque de lista de aplicaciones permitidas. Podemos protegernos a través de las capas de Aplicación y de Red. 

    - **Capa de Aplicación**: a través de la validación de entrada, podemos aplicar el enfoque de lista de aplicaciones permitidas. El formato de la información que se espera del usuario ya es conocido. En este contexto, también se pueden agregar validaciones para garantizar que la cadena de entrada respete el formato esperado. 

    - **Capa de Red**: el objetivo es evitar que se realicen llamadas a aplicaciones arbitrarias. Se puede utilizar un firewall para limitar el acceso de la aplicación y, a su vez, limitar el impacto de una aplicación vulnerable a SSRF. 
    <br>


2. **La aplicación puede enviar solicitudes a cualquier dirección IP o nombre de dominio externo**
    Este caso ocurre cuando un usuario puede controlar una URL a un recurso externo y la aplicación hace una petición a esta URL. Un recurso externo es cualquier IP que no pertenezca a la red interna y que debe ser alcanzada a través de Internet de forma pública. 

    En este caso, no es posible utilizar listas de aplicaciones permitidas ya que en principio se desconocen y cambian de forma dinámica. 


