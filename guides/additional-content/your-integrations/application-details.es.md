# Detalles de la aplicación

Para acceder a los datos generales de tu aplicación, ve al [Panel del desarrollador](/developers/panel/app) y haz clic en la tarjeta de una aplicación para acceder a los **Detalles de la aplicación**.

## Datos de la aplicación

* **Datos de la aplicación**: esta sección muestra los datos básicos de la aplicación, incluyendo:
  - **ID de usuario**: número de identificación de usuario, que es creado automáticamente.
  - **Número de aplicación**: número de identificación de la aplicación, que es creado automáticamente.
  - **Integración con**: el producto o plataforma integrada con la aplicación.
  - **Modelo de integración** (si corresponde): las opciones de modelo de integración se proporcionan según el producto o plataforma utilizada.

### Editar datos

Puedes hacer clic en el botón **Editar datos** para ver y editar las configuraciones básicas y avanzadas que incluyen los datos de tu aplicación y el producto a integrar. Estas son:

#### Configuraciones básicas

* **Logo**: imagen en formato JPG o PNG de hasta 1 MB.
* **Nombre de la aplicación**: sirve para identificar tus aplicaciones con más facilidad (permite un máximo de 50 caracteres).
* **Nombre corto de la aplicación**: identificador secundario de la aplicación (este campo no puede contener espacios ni caracteres especiales).
* **Descripción de la aplicación** (máximo 150 caracteres).
* **Sector**: elige la categoría que mejor describa tu negocio.
* **URL del sitio en producción** (opcional).
* **Solución de pago a integrar**: edita la solución de pago a integrar entre **Pagos online** y **Pagos presenciales**.
  - **Pagos online**: si vas a utilizar una plataforma de comercio electrónico, marca **Sí**. Luego, selecciona la **plataforma** con la que vas a integrar. Por último, selecciona el **producto** que estás integrando. Si no estás utilizando una plataforma de comercio electrónico, marca **No** y selecciona el **producto** que estás integrando. Opcionalmente, podrás seeccionar el/los modelos de integración.
  - **Pagos presenciales**: Selecciona el **producto** que estás integrando. Si seleccionas la opción Código QR, opcionalmente también podrás eligir el/los modelos de integración.

#### Configuraciones avanzadas

* **URLs de redireccionamiento**: URLs (en https) donde deseas recibir el código de autorización cuando tu integración sea configurada como Marketplace o se utilice el flujo **Authorization code** de OAuth. **Asegúrate de que sea una URL estática**. Consulta [OAuth](/developers/es/docs/security/oauth/introduction) para obtener más detalles.
* **Usar el flujo de código de autorización con PKCE**: en caso de que la integración se realice a través del flujo **Authorization code** de OAuth, puedes habilitar el PKCE (_Proof Key for Code Exchange_) para generar un código secreto adicional que se usará durante el proceso de autorización. Consulta [Configurar PKCE](/developers/es/docs/security/oauth/creation#:~:text=Access%20Token.-,Configurar%20PKCE,-El%20PKCE%20) para obtener más detalles. 
* **Permisos de la aplicación**: son opciones de acceso de tu aplicación, cómo **lectura**, **acceso offline** y **escritura**. Por defecto, tu aplicación se crea con todos los permisos activados, pero puedes desactivar un permiso haciendo clic en la casilla de verificación correspondiente al permiso que deseas cambiar.

### Eliminar aplicación

Para eliminar una aplicación, sigue estos pasos:

1. Accede a la página "Editar aplicación".
2. Desplázate hasta el final de la página y haz clic en el botón **Eliminar aplicación**.
De esta manera, la aplicación se eliminará correctamente.

> WARNING
>
> Atención
>
> Al eliminar una aplicación, ten en cuenta que tu tienda perderá la capacidad de recibir pagos a través de la integración asociada. Además, se perderán todas las configuraciones, incluidas las credenciales que tengas asociadas. **Una vez eliminada una aplicación, no se puede recuperar**.

## Medición de calidad

La [medición de calidad](/developers/es/docs/integration-quality) es la última etapa del proceso de integración, donde podrás validar si cumple con los requisitos de calidad y seguridad necesarios para brindar la mejor experiencia tanto a vendedores como a compradores.

Existen 2 formas de medir la calidad de tu integración:
 * **Manual:** puedes realizar la medición por tu cuenta, cuando lo prefieras. Sólo necesitas contar con un `payment ID` de un pago realizado con credenciales de producción y acceder a **“Calidad de integración"**, dentro del menú lateral, donde podrás consultar el paso a paso. 

 * **Automática:**  del 1 al 7 de cada mes, Mercado Pago realiza una medición periódica de calidad para todas las integraciones con **Checkout Pro, Checkout ----[mla, mlm, mlu, mco, mlc, mpe]----API,------------ ----[mlb]----Transparente,------------ Checkout Bricks y Mercado Pago Point** que cuenten con un pago realizado con credenciales de producción.

> WARNING
>
> Importante
>
> La única manera de evaluar la calidad de una integración con **Código QR** es realizando una medición manual. Por su parte, integraciones con **Plugins y Plataformas** no podrán ser evaluadas.

Como resultado de esta medición, obtendrás un puntaje que indica qué tan segura y alineada con las buenas prácticas de integración de Mercado Pago está la configuración de tu aplicación, junto con las recomendaciones necesarias para hacer ajustes en caso de que sea necesario. 

Para saber más detalles, accede a la documentación sobre [calidad de integración](/developers/es/guides/additional-content/homologator/homologator).

## Prueba de integración

En esta sección, cuentas con una guía paso a paso para poder probar tu integración, que te permitirá validar estar cumpliendo con los requisitos necesarios en función del producto integrado. 

Además, cuentas con enlaces directos a la documentación correspondiente, así como con una barra de estado que te permitirá visualizar tus avances de manera sencilla.

![pantalla de validación de prueba de integración](/images/dashboard/testing-validation-es.gif)