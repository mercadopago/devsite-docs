# Homologar una integración local

El proceso de homologación de una integración local consta de dos partes: 

1. En videollamada con nuestro equipo, deberás **realizar una serie de transacciones predefinidas** que permitirán verificar si los comportamientos son los deseados, además de **mostrar ciertas funcionalidades** que tienen que estar presente en tu app. 
2. Una vez aprobado ese proceso, deberás **completar un formulario** para enviarlo a nuestro equipo, que utilizará esa información para subir tu aplicación.

## 1. Realizar transacciones y mostrar funcionalidades

A continuación, encontrarás cuáles son las transacciones que deberás llevar adelante como primer paso de tu homologación. Podrás realizarlas con tarjetas reales y datos falsos del comprador, ya que al tratarse de un ambiente de prueba no se realizarán cargos. 

> WARNING
>
> Importante
>
> Recuerda que este paso deberás hacerlo en viodeollamada con nuestro equipo, que podrá solicitarte mostrar las distintas pantallas o comportamientos del dispositivo. Además, debes almacenar los `usertransactionID` asociados a cada transacción en tu base de datos, y haber integrado obligatoriamente la [Búsqueda de pagos](/developers/es/docs/redelcom/local-integration/android/payments-processing/payment-query) mediante este mismo parámetro, ya que se te va a solicitar una demostración.

1. [Crear una transacción](/developers/es/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) a ser pagada con **tarjeta de débito** cuyo monto sea **superior a 20.000 CLP**.
2. [Crear una transacción](/developers/es/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) a ser pagada con **tarjeta de crédito**, en **dos cuotas o más**, y cuyo monto sea **superior a 30.000 CLP**.
3. [Crear una transacción](/developers/es/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) por el **monto exacto de 2.222 CLP**. Esta transacción devolverá un error configurado en el ambiente y, en tu aplicación, tienes que mostrar el campo `mensaje_visor`, que te permitirá informar al cliente el motivo del error. El uso de *pop up* para exhibir este mensaje será requerido.
4. [Crear una transacción](/developers/es/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) a ser pagada con **tarjeta de débito**, cuyo monto sea **menor a 50 CLP**, y que no debería poder ser procesada si has implementado correctamente la validación que no permite operaciones por montos bajos. También será requerido el uso de *pop up* para esta validación.
5. **Realizar el pago** de una transacción por cualquier monto y **cancelarlo desde el dispositivo** mientras está siendo procesado. En tu aplicación, debes mostrar el campo `mensaje_visor`, que te permitirá hacer una gestión desde el dispositivo. El uso de *pop up* para exhibir este mensaje será requerido.

Además, ciertos casos particulares pueden requerir de pasos adicionales:
* Si utilizas las **opciones multiservicios** (carga de saldo, pago de cuentas o de telecomunicaciones), es posible que se te solicite realizar nuevas operaciones.
* Si utilizas un **boleteador externo**, deberás mostrar cómo lucen las facturas impresas.
* Si utilizas el **infrarrojo y cámara del equipo**, deberás mostrar la operación en la cual te son necesarios.


## 2. Completar formulario

Una vez finalizado y aprobado el proceso de homologación por videollamada, nuestro equipo te facilitará un formulario que debes completar teniendo en cuenta los datos y particularidades de tu aplicación. 

Para hacerlo, guíate por las descripciones aquí debajo:
 * **App Icon:** se refiere al ícono de tu aplicación. Debe tener un tamaño recomendado de 512x512 píxeles, en formato PNG.
 * **App Name:** se refiere al nombre de tu aplicación en la tienda PAX. Su extensión máxima es de 60 caracteres.
 * **Business Category:** se refiere a la categoría del negocio integrado por medio de la aplicación. Deberás seleccionar esta categoría según el cuadro a continuación, y puedes elegir más de una opción. 

 ![opciones de Business Category](/images/Redelcom/rdc-business-category.png)

 * **Short Description:** es una descripción breve sobre la aplicación, de no más de 120 caracteres.
 * **Description:** es una descripción más elaborada sobre la aplicación, en la que debes mencionar los procesos de la misma, como pagos o menú. Su extensión máxima es de 5000 caracteres.
 * **Screenshots:** debes enviar capturas de pantalla de la aplicación en algunos de sus procesos de pago o menú. Deben ser al menos 3 en un tamaño recomendado de 720x1280 y en formato PNG.
 * **Featured Image:** esta imagen debe tener un tamaño recomendado de 320x280 y en formato PNG.
 * **Package Name:** nombre del paquete con el que se identificará la aplicación. Debe tener relación con la aplicación o empresa.
 * **Send login:** se refiere a una captura de pantalla del módulo de inicio de sesión antes de entrar a la aplicación.
 * **APK:** deberás enviar el APK de la aplicación, habiéndolo exportado en modo *release*.


> WARNING
>
> Importante
>
> Tu aplicación integrada con Redelcom **no debe hacer uso** de los permisos MAGCARD, ICC, PICC, PED, por tratarse de permisos potencialmente riesgosos para la seguridad de la integración. 

Una vez completo, envía el formulario al mismo e-mail por el que lo recibiste. Si la información es correcta, recibirás próximamente el permiso para salir a producción con tu integración Redelcom.






