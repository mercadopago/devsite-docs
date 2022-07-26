# Salida a producción

Cuando tengas la aplicación **lista y funcionando** en modalidad de prueba y quieras empezar a procesar pagos reales, debes [activar tus credenciales](/developers/es/docs/qr-code/additional-content/credentials), y **solicitar el proceso de homologación al equipo de integraciones**.

## Homologación

En esta etapa, se realizarán pruebas en tu entorno con el equipo técnico, socios y software house, se te solicitará que uses Sponsor ID y [OAuth](/developers/es/docs/qr-code/additional-content/security/oauth/introduction), (autenticación entre cuentas de Mercado Pago).

Mercado Pago podrá auditar tu sitio, app o Software de Punto de Venta y verificar que se cumplan las reglas detalladas en el apartado **Prueba de integración**. Caso contrario, un asesor entrará en contacto contigo para discutir si hay cosas que debes corregir en tu integración.

> WARNING
>
> IMPORTANTE
>
> Si no activas tus credenciales, no podrás hacer ningún tipo de devoluciones.

## ¿Por qué es necesario este proceso?

Porque así podemos garantizar la seguridad de los datos de tus clientes y lograr la mejor experiencia de compra, que ayude a maximizar la conversión de los pagos que recibas.
El incumplimiento de estas normas puede implicar desde el no procesamiento de pagos, hasta acciones legales de acuerdo a lo establecido en los [Términos y Condiciones](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/terminos-y-condiciones_299).

## Consideraciones adicionales

Estos son algunos puntos a tener en cuenta para aumentar la calidad de tus integraciones:

* Mantén actualizado el estado de los pedidos en tus sistemas usando y procesando notificaciones de IPN o Webhooks.
* Utiliza los reportes de conciliación de API para mejorar la gestión financiera empresarial.


