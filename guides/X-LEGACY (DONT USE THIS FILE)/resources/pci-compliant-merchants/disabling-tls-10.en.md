# Shutting down TLS 1.1 encryption at Mercado Pago.

At Mercado Pago we always seek to optimize our platform by offering the greatest capacity and security in payment processing.

On this occasion, we are working on turning off TLS 1.1 for the domains https://api.mercadopago.com and https://pagamento.mercadopago.com, with the aim of maintaining the highest quality standards and promoting the security of the data of our clients.

> WARNING
>
> Important
>
> Once we disable TLS 1.1, **any connection you establish using TLS 1.1 will fail**. In addition to it, Mercado Pago will require that your connections to the domains https://api.mercadopago.com and https://pagamento.mercadopago.com be through the encryption protocol TLS 1.2 or higher.   


## Points to consider

* If you operate only in Mercado Libre, this change will not affect you.
* If you operate only with the Mercado Pago payment buttons, this change will not affect you.
* If you operate only in Mercado Shops, this change will not affect you.
* If you operate only in VTEX this change will not affect you.
* If you have your **own e-commerce consult your technical support**.
* If you **operate with an e-commerce platform**, for example: Magento, Shopify or others, **consult their technical support**.


## Introduction


TLS is the acronym for “Transport Layer Security”. It is a protocol that provides privacy and data integrity between two communicating applications.

It is the most widespread security protocol in use today, and is used for browsers and other applications that require data to be exchanged securely over a network. TLS ensures that a connection to a remote endpoint is made at the expected endpoint through encryption and verification of the endpoint's identity. TLS versions to date are TLS 1.0, 1.1, 1.2, and 1.3.

Mercado Pago's Internet and API connections use TLS as a key component of their security.

HTTPS (web) and STARTTLS SMTP (email) also use TLS as a security component.


## Why is this change being made?

At Mercado Pago we take security very seriously and we help our customers improve it by using the latest security protocols.


## Action required for API integrations

If your integrations that use incoming connections with Mercado Pago do not have TLS 1.2 or higher enabled after making this change, they will start to fail.

> WARNING
>
> Important
>
> We recommend that you opt-in to the TLS 1.2 protocol **before June 12, 2023**.

See compatibility guidelines below:

| Plataform | Compatibility notes  |
| --- | --- |
| Java (Oracle)  | Compatible with the latest version, regardless of the operating system.  |
| Java 8 (1.8) and later versions  | Supports TLS 1.2 or later encryption by default.  |
| Java 7 (1.7)  | Enable TLS 1.2 by using the https.protocols Java system property for HttpsURLConnection. To enable TLS 1.2 on connections without HttpsURLConnection, set the enabled protocols on the created instances of SSLSocket and SSLEngine within the application source code. Switching to IBM Java can be an effective solution if upgrading to a newer version of Oracle Java is not possible.  |
| Java 8  | Supports TLS 1.2 or later encryption by default. You might need to set com.ibm.jsse2.overrideDefaultTLS=true if your application or a library that calls it uses SSLContext.getinstance("TLS").  |
| Java 7 and later, Java 6.0.1 (J9 VM2.6) Service Update 1 and later, and Java 6 Service Update 10 and later  | Enable TLS 1.2 using the https.protocols Java system property for HttpsURLConnection and the com.ibm.jsse2.overrideDefaultProtocol Java system property for SSLSocket and SSLEngine connections, as recommended by the IBM documentation. You might also need to set com.ibm.jsse2.overrideDefaultTLS=true.  |
| .NET  | Compatible with the latest version when running on an operating system that supports TLS 1.2  |
| .NET 4.6 and later versions  | Supports TLS 1.2 or later by default.  |
| .NET 4.5 to 4.5.2  | .NET 4.5, 4.5.1, and 4.5.2 do not enable TLS 1.2 by default. There are two options to activate them, as described below.  |
| .NET 4.0  | .NET 4.0 does not enable TLS 1.2 by default. To turn on TLS 1.2 by default, you can install the .NET Framework 4.5 or later, and set the SchUseStrongCrypto DWORD value to 1 in the following two system registry entries, creating them if they don't exist: "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft .NETFramework\v4.0.30319" and "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft.NETFramework\v4.0.30319". However, those system registry keys can enable TLS 1.2 by default in all .NET 4.0, 4.5, 4.5.1, and 4.5.2 applications installed on that system. We recommend testing this change before deploying it to your production servers. This is also available as an import file for the system registry. However, these system registry values will not affect .NET applications that set the System.Net.ServicePointManager.SecurityProtocol value.  |
| .NET 3.5 and earlier versions  | They do not support TLS 1.2 or later  |
| Python  | Compatible with the latest version when running on an operating system that supports TLS 1.2  |
| Python 2.7.9 and later  | Supports TLS 1.2 or later encryption by default.  |
| Python 2.7.8 and earlier versions  | They do not support TLS 1.2 or later versions  |
| Ruby  | It is compatible with the latest and most stable version when linked with OpenSSL 1.0.1 or later.  |
| Ruby 2.0.0  | TLS 1.2 is enabled by default when used with OpenSSL 1.0.1 or later. Using the :TLSv1_2 tokens with the ssl_version of the SSLContext helps ensure that TLS 1.0 or earlier is disabled.  |
| Ruby 1.9.3 and earlier versions  | The :TLSv1_2 symbol does not exist in version 1.9.3 and earlier, but it is possible to patch Ruby to add that symbol and compile Ruby with OpenSSL 1.0.1 or later.  |
| Android 5.x and higher  | TLS 1.2 is supported by default.  |


## How can I check the current version of TLS?

In order to validate if your integration maintains a connection using a protocol other than TLS 1.2, you can use the following snippet within your application to verify which protocol is being used by default for connections.

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

