# Validación de integración

Para comprobar que tu integración Zero Dollar Auth sea válida, ten en cuenta las siguientes recomendaciones.

## Agregar encabezado "X-Test-Token: true"

Es importante agregar el encabezado **X-Test-Token: true** a todos los curls de token de tarjeta. Esto indicará a la API que debe procesar el consumo de ZDA en el ambiente de pruebas (Sandbox).
## Simular aprobaciones y rechazos en pruebas 

Para aprobaciones, utiliza la tarjeta específica `4074090000000004` en el curl de [/v1/payments](/developers/es/docs/zero-dollar-auth/integration). 

Para simular rechazos, puedes utilizar cualquier otra tarjeta de prueba.

## Realizar transacciones con datos de tarjeta abiertos

Para poder realizar transacciones con datos de tarjeta abiertos, directamente en la llamada de API, necesario que el vendedor cumpla con los requisitos de [PCI Compliant](/developers/es/docs/security/pci). De lo contrario, estos datos no podrán ser procesados en el backend de su aplicación.