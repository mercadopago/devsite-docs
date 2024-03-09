# Salir a producción

Cuando tengas lista tu integración y quieras comenzar a recibir pagos, activa tus [credenciales](/developers/es/docs/qr-code/additional-content/your-integrations/credentials) de producción y reemplaza las de prueba.

Además, te recomendamos cumplir con las siguientes consideraciones adicionales.

## Homologación

Para poder ofrecer tanto al vendedor como al comprador la mejor experiencia, es importante que puedas validar la **calidad de tu integración** de acuerdo a los estándares de Mercado Pago antes de salir a producción.

El proceso de homologación te permitirá certificar que tu integración cuenta con los requisitos de calidad necesarios y, en caso de que así no sea, te sugerirá los ajustes que debes realizar para que tu desarrollo esté optimizado a la hora de recibir pagos reales. 

Para poder medir la calidad de tu integración con Código QR, sigue los pasos indicados a continuación.

> WARNING
>
> Importante
> 
> El proceso de homologación debe ser realizado para la aplicación que creaste con tu **usuario y contraseña productivos**.

1. Dirígete a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) en el panel superior derecho del Devsite. 
2. Luego, haz clic en la aplicación que creaste, y selecciona **"Evaluar calidad"** para acceder a la herramienta donde puedes realizar la homologación. 

![Detalles de aplicación dentro del Panel del Desarrollador](/images/qr/homologacion-qr-es.png)

3. Sigue las instrucciones proporcionadas por la herramienta de homologación para poder realizar el proceso. No olvides que las acciones indicadas como **necesarias** deben completarse para sumar puntos que mejorarán la calidad de tu integración, mientras que las indicadas como **buenas prácticas** son recomendables, pero no afectarán la puntuación.

> NOTE
>
> Nota
> 
> Si formas parte de nuestra Cartera Asesorada, contáctate con el equipo de Integraciones para llevar adelante tu homologación.

## Certificado SSL

Para que tu integración sea segura y cuide los datos involucrados en las transacciones, es necesario que tengas un **certificado SSL**. 

Con este proceso, se busca garantizar la seguridad de lo datos de tus clientes, el cumplimiento de las normas o disposiciones legales de cada país y lograr la mejor experiencia de compra para tus ventas. 

Si bien durante la etapa de pruebas puedes no contar con el certificado, este es obligatorio para salir a producción.

## Reportes

Los [reportes de Mercado Pago](/developers/es/docs/qr-code/additional-content/reports/introduction) proporcionan información financiera para dar seguimiento a las transacciones de las cuentas, como el saldo disponible, los movimientos y la liquidez. Esto facilita la conciliación de las ventas y otras operaciones con sus sistemas de gestión internos.

Te recomendamos utilizar los reportes para mejorar la gestión financiera empresarial una vez que hagas tu salida a producción.
