# Integrar vía Bluetooth para dispositivos móviles

Mercado Pago Point ofrece, además de la integración de dispositivos Point vía API, la posibilidad de integrar dispositivos móviles vía Bluetooth. Se trata de un tipo de integración ideal para pequeños negocios.

Lo único que tienes que hacer para vincular ambos dispositivos es activar sus conexiones bluetooth, ¡y listo! Tus dispositivos estarán vinculados. 


> WARNING
>
> Importante
>
> La integración de dispositivos móviles vía deep linking no está disponible para tablets o dispositivos Huawei.

Vincular tus dispositivos vía bluetooth te permitirá realizar una integración mediante Deep Linking, o intent-based. Los Deep Links, también conocidos como enlaces profundos, son una forma de permitir la navegación directa a pantallas o secciones específicas de una aplicación móvil.

Cuando se llama a dicho link, el mismo va a ser interceptado como un Point-handled address por parte de la aplicación de Mercado Pago. El cliente será redireccionado a la pantalla de la aplicación de Mercado Pago para realizar el pago y, una vez que este sea procesado, lo redireccionará a la `success_url` o `fail_url`, dependiendo del estado del pago. Esto deberá ser interceptado para retornar al usuario al flujo de la aplicación.

Puedes ver el diagrama de flujo a continuación para entender el funcionamiento de este tipo de integración.

![Diagrama de flujo de Deep linking Mercado Pago Point](/images/point_diagram.png)

