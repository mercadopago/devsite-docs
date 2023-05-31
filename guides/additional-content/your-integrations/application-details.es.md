# Detalles de la aplicación

Para acceder a los datos generales de tu aplicación, ve al [Panel del desarrollador](/developers/panel/app) y haz clic en la tarjeta de una aplicación para acceder a los **Detalles de la aplicación**.

## Calidad de la aplicación

En esta sección, nos aseguraremos de que tu aplicación cumpla con los requisitos de calidad y seguridad necesarios para brindar la mejor experiencia tanto a vendedores como a compradores con Mercado Pago.

### Actualizar puntaje

El puntaje indica qué tan segura y alineada con las buenas prácticas de integración de Mercado Pago está la configuración de tu aplicación.

Haz clic en **Actualizar puntaje** para iniciar el proceso de análisis de tu integración. Revisa los puntos de mejora identificados durante el análisis y haz los cambios necesarios en tu integración. Durante este proceso, se analizarán una serie de campos asociados.

> Después de realizar las mejoras, haz clic nuevamente en **Actualizar puntaje** para reevaluar tu integración y verificar si cumple con los estándares requeridos.

----[mla, mlm, mlu, mco, mlc, mpe]----
> WARNING
>
> Atención
>
> Por el momento, la sección **Calidad de integración** solo está disponible para integraciones con [Checkout Pro](/developers/es/docs/checkout-pro/landing), [Mercado Pago Point](/developers/es/docs/mp-point/landing), [Checkout API](/developers/es/docs/checkout-api/landing) y [Checkout Bricks](/developers/es/docs/checkout-bricks/landing).


------------
----[mlb]----
> WARNING
>
> Atención
>
> Por el momento, la sección **Calidad de integración** solo está disponible para integraciones con [Checkout Pro](/developers/es/docs/checkout-pro/landing), [Mercado Pago Point](/developers/es/docs/mp-point/landing), [Checkout Transparente](/developers/es/docs/checkout-api/landing) y [Checkout Bricks](/developers/es/docs/checkout-bricks/landing).


------------
## Datos de la aplicación
* **Datos de la aplicación**: esta sección muestra los datos básicos de la aplicación, incluyendo:
  - **ID de usuario**: número de identificación de usuario, que es creado automáticamente.
  - **Número de aplicación**: número de identificación de la aplicación, que es creado automáticamente.
  - **Integración con**: el producto o plataforma integrada con la aplicación.
  - **Modelo de integración** (si corresponde): las opciones de modelo de integración se proporcionan según el producto o plataforma utilizada.

### Editar datos
Puedes hacer clic en el botón **Editar datos** para ver y editar las configuraciones avanzadas que incluyen los datos de tu aplicación y el producto a integrar. Estas son:
* **Logo**: imagen en formato JPG o PNG de hasta 1 MB.
* **Nombre de la aplicación**: sirve para identificar tus aplicaciones con más facilidad (permite un máximo de 50 caracteres).
* **Nombre corto de la aplicación**: sirve para identificación personal del usuario creador de la aplicación.
* **Descripción de la aplicación** (máximo 150 caracteres).
* **Sector**: elige la categoría que mejor describa tu negocio.
* **URL del sitio en producción** (opcional).
* **Solución de pago a integrar**: edita la solución de pago a integrar entre **Pagos online** y **Pagos presenciales**.
   - **Pagos online**: si vas a utilizar una plataforma de comercio electrónico, marca **Sí**. Luego, selecciona la **plataforma** con la que vas a integrar. Por último, selecciona el **producto** que estás integrando. 

Si no estás utilizando una plataforma de comercio electrónico, marca **No** y selecciona el **producto** que estás integrando. Opcionalmente, podrás seeccionar el/los modelos de integración.

  - **Pagos presenciales**: Selecciona el **producto** que estás integrando. Si seleccionas la opción Código QR, opcionalmente también podrás eligir el/los modelos de integración.
* **URL de redireccionamiento**: URL (en https) donde deseas recibir el código de autorización cuando tu integración sea configurada como Marketplace o se realice a través de OAuth. Consulta [OAuth](/developers/es/docs/security/oauth/introduction) para obtener más detalles.
* **Permisos de la aplicación**: son opciones de acceso de tu aplicación: leer (read), acceso sin conexión (offline access) y escribir (write). Por defecto, tu aplicación se crea con todos los permisos activados, pero puedes desactivar un permiso haciendo clic en la casilla de verificación correspondiente al permiso que deseas cambiar.
</br>

### Eliminar aplicación
Para eliminar una aplicación, sigue estos pasos:
1. Accede a la página "Editar aplicación".
2. Desplázate hasta el final de la página y haz clic en el botón **Eliminar aplicación**.
De esta manera, la aplicación se eliminará correctamente.

> WARNING
>
> Atención
>
> Al eliminar una aplicación, ten en cuenta que tu tienda perderá la capacidad de recibir pagos a través de la integración asociada. Además, se perderán todas las configuraciones, incluidas las credenciales que tenga asociadas. **Una vez eliminada una aplicación, no se puede recuperar**.