# Apagado del cifrado TLS 1.1 en Mercado Pago

En Mercado Pago siempre buscamos optimizar nuestra plataforma ofreciendo la mayor capacidad y seguridad en el procesamiento de pagos.

En esta ocasión, estamos trabajando en el apagado de TLS 1.1 para los dominios https://api.mercadopago.com y https://pagamento.mercadopago.com con el objetivo de mantener los más altos estándares de calidad y promover la seguridad de los datos de nuestros clientes.

> WARNING
>
> Importante
>
> Una vez que desactivemos TLS 1.1, **cualquier conexión que establezcas utilizando TLS 1.0 fallará**. Además, Mercado Pago requerirá que sus conexiones a los dominios https://api.mercadopago.com y https://pagamento.mercadopago.com sean a través del protocolo de cifrado TLS 1.2 o superior.



## Puntos a tener en cuenta

* Si operás sólo en Mercado Libre este cambio no te afectará.
* Si operás sólo con botones de pago de Mercado Pago este cambio no te afectará.
* Si operás sólo en Mercado Shops este cambio no te afectará.
* Si operás sólo en VTEX este cambio no te afectará.
* Si tenés **tu propio e-commerce consulta a tu soporte técnico**.
* Si operas con alguna **plataforma de e-commerce** por ejemplo: Magento, Shopify u otros **consulta a su soporte técnico**.

## Introducción


TLS es el acrónimo de “Transport Layer Security” (Seguridad de la capa de transporte). Es un protocolo que proporciona privacidad e integridad de los datos entre dos aplicaciones que se comunican.

Es el protocolo de seguridad más extendido que se utiliza en la actualidad, y se emplea para navegadores y otras aplicaciones que requieran que los datos se intercambien de forma segura en una red. TLS garantiza que una conexión con un extremo remoto se realiza en el extremo que se espera a través de cifrado y la verificación de la identidad del extremo. Las versiones de TLS hasta la fecha son TLS 1.0, 1.1 y 1.2 y 1.3.

Las conexiones de Internet y de API de Mercado Pago utilizan TLS como componente clave de su seguridad.

HTTPS (web) y STARTTLS SMTP (email) también utilizan TLS como componente de seguridad.

## ¿Por qué se va a realizar este cambio?

En Mercado Pago nos tomamos muy en serio la seguridad y ayudamos a nuestros clientes a mejorarla empleando los protocolos de seguridad más recientes.

## Acción requerida para integraciones de API

Si tus integraciones que utilizan conexiones entrantes con Mercado Pago no tiene el protocolo TLS 1.2 o superior activado tras realizar este cambio, empezarán a fallar

> WARNING
>
> Importante
>
> Te recomendamos que realices la inclusión del protocolo TLS 1.2 **antes del 12 de junio de 2023**.

Consulte las directrices de compatibilidad a continuación:

| Plataforma  | Notas de Compatibilidad  |
| --- | --- |
| Java (Oracle)  | Compatible con la versión más reciente, sin que el sistema operativo sea relevante.  |
| Java 8 (1.8) y versiones posteriores  | Compatible con el cifrado TLS 1.2 o versiones posteriores de forma predeterminada.  |
| Java 7 (1.7)  | Active TLS 1.2 utilizando la propiedad del sistema Java https.protocols para HttpsURLConnection. Para activar TLS 1.2 en conexiones sin HttpsURLConnection, establezca los protocolos activados en las instancias creadas de SSLSocket y SSLEngine dentro del código fuente de la aplicación. Cambiar a IBM Java puede ser una solución efectiva si la actualización a una versión de Oracle Java más reciente no es posible.  |
| Java 8  | Compatible con el cifrado TLS 1.2 o versiones posteriores de forma predeterminada. Es posible que tenga que establecer com.ibm.jsse2.overrideDefaultTLS=true si su aplicación o una biblioteca que la llame utiliza SSLContext.getinstance("TLS").  |
| Java 7 y versiones posteriores, la actualización de servicio 1 de Java 6.0.1 (J9 VM2.6) y versiones posteriores y la actualización de servicio 10 de Java 6 y versiones posteriores  | Active TLS 1.2 empleando la propiedad del sistema de Java https.protocols para HttpsURLConnection y la propiedad del sistema de Java com.ibm.jsse2.overrideDefaultProtocol para conexiones SSLSocket y SSLEngine, según recomienda la documentación de IBM. Es posible que también tenga que establecer com.ibm.jsse2.overrideDefaultTLS=true.  |
| .NET  | Compatible con la versión más reciente cuando se ejecuta en un sistema operativo que admita TLS 1.2  |
| .NET 4.6 y versiones posteriores  | Compatible con el cifrado TLS 1.2 o versiones posteriores de forma predeterminada.  |
| .NET 4.5 a 4.5.2  | .NET 4.5, 4.5.1 y 4.5.2 no activan TLS 1.2 de forma predeterminada. Existen dos opciones para activarlas, como se describe a continuación.  |
| .NET 4.0  | .NET 4.0 no activa TLS 1.2 de forma predeterminada. Para activar TLS 1.2 de forma predeterminada, es posible instalar .NET Framework 4.5 o una versión posterior, y establecer el valor DWORD de SchUseStrongCrypto en 1 en las siguientes dos entradas del registro del sistema, creándolas si no existen: "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft.NETFramework\v4.0.30319" y "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft.NETFramework\v4.0.30319". No obstante, esas claves del registro del sistema pueden activar TLS 1.2 de forma predeterminada en todas las aplicaciones .NET 4.0, 4.5, 4.5.1 y 4.5.2 instaladas en ese sistema. Recomendamos probar este cambio antes de implementarlo en sus servidores de producción. Esto también está disponible como un archivo de importación para el registro del sistema.Sin embargo, estos valores del registro del sistema no afectarán a las aplicaciones .NET que establecen el valor System.Net.ServicePointManager.SecurityProtocol.  |
| .NET 3.5 y versiones anteriores  | No son compatibles con el cifrado TLS 1.2 o versiones posteriores  |
| Python  | Compatible con la versión más reciente cuando se ejecuta en un sistema operativo que admita TLS 1.2  |
| Python 2.7.9 y versiones posteriores  | Compatible con el cifrado TLS 1.2 o versiones posteriores de forma predeterminada.  |
| Python 2.7.8 y versiones anteriores  | No son compatibles con el cifrado TLS 1.2 o versiones posteriores  |
| Ruby  | Es compatible con la versión más reciente y estable cuando se vincula con OpenSSL 1.0.1 o versiones posteriores.  |
| Ruby 2.0.0  | TLS 1.2 se activa de forma predeterminada cuando se utiliza con OpenSSL 1.0.1 o versiones posteriores. El uso de los símbolos :TLSv1_2 con ssl_version de SSLContext ayuda a garantizar que se desactiva TLS 1.0 o versiones anteriores.  |
| Ruby 1.9.3 y versiones anteriores  | El símbolo :TLSv1_2 no existe en la versión 1.9.3 y anteriores, pero es posible parchear Ruby para agregar ese símbolo y compilar Ruby con OpenSSL 1.0.1 o versiones posteriores.  |
| Android 5.x y superior  | TLS 1.2 Está soportado de forma predeterminada.  |

En caso que requieras hacer adaptaciones, **es importante que recuerdes hacer este cambio en tiempo y forma, ya que de lo contrario es muy probable que tus conexiones con Mercado Pago comiencen a fallar.**

## ¿Cómo verificar la versión actual de TLS integración?

Para poder validar si tu integración mantiene una conexión usando un protocolo distinto a TLS 1.0, puedes usar el siguiente snippet dentro de tu aplicación para verificar que protocolo se está usando por defecto para las conexiones.

[[[
```php
<?php
  $curl_info = curl_version();
  echo "protocol: " . $curl_info['ssl_version'];
?>
```
```java
SSLSocket ss = (SSLSocket) SSLSocketFactory.getDefault().createSocket("api.mercadopago.com", 443);
System.out.println("protocol: " + ss.getSession().getProtocol());
```
```csharp
string strWebsiteName = "api.mercadopago.com";
TcpClient _myClient = new TcpClient();
SslStream _myStream;
_myClient.Connect(strWebsiteName, 443);
_myStream = new SslStream(_myClient.GetStream());
_myStream.AuthenticateAsClient(strWebsiteName);

Console.WriteLine("protocol : " + _myStream.SslProtocol);
```
]]]
