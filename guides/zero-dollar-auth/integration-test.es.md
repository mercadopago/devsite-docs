# Prueba de integración

Para testar a validação de Zero Dollar Auth, siga as seguintes instruções.

## Agregar encabezado "X-Test-Token: true"

Es importante agregar el encabezado **X-Test-Token: true** a todos los curls de token de tarjeta, indicando a Payments para procesar elconsumo de ZDA en el ambiente de SandBox. Para aprobaciones, utiliza la tarjeta específica `4074090000000004` en el curl de token de tarjeta. Para simular rechazos, puedes utilizar cualquier otra tarjeta de prueba.

## Realizar transacciones con datos de tarjeta abiertos

Para poder realizar transacciones con datos de tarjeta abiertos, es necesario que el vendedor cumpla con los requisitos de [PCI Compliant](/developers/es/docs/security/pci). De lo contrario, estos datos no podrán ser procesados en el backend de su aplicación.