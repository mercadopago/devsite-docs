# Requisitos para salir a producción

Una vez finalizado el proceso de integración y pruebas, el ambiente estará listo para ser colocado en producción. En esta documentación, detallaremos los requisitos necesarios para realizar este pasaje de manera eficaz y segura, garantizando que tu integración esté preparada para recibir pagos reales.

## Verificar el uso de credenciales de producción

Si bien todo el proceso de prueba de integración con Mercado Pago Point es llevado adelante utilizando credenciales productivas de usuarios productivos, es importante **corroborar que las credenciales que se están utilizando para salir a producción pertenecen a la cuenta integradora**.

Para eso, ingresa a [Tus Integraciones](/developers/panel/app), accede a tu aplicación y, en el menú lateral, dirígete a **Producción > Credenciales de producción**, donde encontrarás tu **Public Key** y **Access Token** productivos. Puedes contrastar esta información con aquella que has usado durante la etapa de desarrollo y pruebas. Si detectas alguna diferencia, reemplaza las credenciales por aquellas presentes en Tus Integraciones.


## Verificar la configuración de notificaciones Webhooks

Recomendamos que verifiques haber hecho una correcta configuración de [notificaciones Webhooks](/developers/es/docs/mp-point/additional-content/your-integrations/notifications/webhooks) para mantener actualizado el estado de las órdenes en tus sistemas.  

Para eso, ingresa al [Tus Integraciones](/developers/panel/app) y, en el menú lateral, accede a **Webhooks**. Si tus notificaciones están correctamente configuradas, deberás visualizar la URL y los eventos establecidos. Si, por el contrario, detectas alguna irregularidad, puedes reestablecer tus configuraciones iniciales y reemplazarlas por nuevas.

----[mlb]----
## Clave Pix
La opción de pago por Pix solo se mostrará si existe una Clave Pix registrada en Mercado Pago. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso.
------------

## Medición de calidad

Antes de salir a producción, y para poder ofrecer tanto al vendedor como al comprador la mejor experiencia, deberás evaluar la [calidad de tu integración](/developers/es/docs/mp-point/how-tos/integration-quality) con nuestra herramienta de medición. Se trata de un proceso de certificación que te permitirá verificar si estás cumpliendo con los **estándares de calidad y seguridad de Mercado Pago** antes de comenzar a recibir pagos reales.

La medición podrá ser realizada de 2 formas: 
 * **Manual**, donde se requerirá que ingreses el `payment ID` de un pago realizado con credenciales productivas para poder hacer la medición cuando lo desees.
 * **Automática**, directamente llevada adelante por nuestra herramienta una vez al mes, siempre y cuando cuentes también con un pago realizado con credenciales productivas.

En ambos casos, la medición se realiza considerando aspectos fundamentales para la eficacia de tu integración, como la mejora en la aprobación de pagos, la conciliación financiera o la seguridad, entre otros.

Si tu integración llegara a precisar ajustes, se te sugerirán acciones necesarias y buenas prácticas para mejorar estos aspectos evaluados y, de esa manera, garantizar que tu integración cumpla con los estándares necesarios.

Una vez que los apliques, puedes volver a medir la calidad de tu integración o, si lo deseas, aguardar a recibir los resultados de la medición automática. 


## Reportes

Los [reportes de Mercado Pago](/developers/es/docs/mp-point/additional-content/reports/introduction) proporcionan información para dar seguimiento a las transacciones de las cuentas, como el saldo disponible, los movimientos y la liquidez. Esto facilita la conciliación de las ventas y otras operaciones con sus sistemas de gestión internos.

Te recomendamos utilizar los reportes para mejorar la gestión financiera empresarial una vez que hagas tu salida a producción.
