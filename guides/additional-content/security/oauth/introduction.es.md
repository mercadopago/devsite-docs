# OAuth

OAuth es un protocolo de autorización que permite que las aplicaciones tengan acceso limitado a la información privada de las cuentas de Mercado Pago. A través del protocolo HTTP, introduce una capa de autenticación y autorización en la que solicitas acceso a los recursos protegidos de los vendedores mediante un token de acceso limitado a una aplicación en particular. Esto se logra sin necesidad de las credenciales de los vendedores a través de los flujos de acceso.

> NOTE
>
> Nota
>
> El uso del protocolo OAuth difiere del proceso de uso compartido de credenciales. OAuth no aborda cuestiones relacionadas con la autenticación del cliente, ni información relacionada con la misma. Su responsabilidad radica en los métodos de obtención de un token para acceder a un recurso.
 
Los flujos, también llamados _grant types_, se refieren a la forma en que una aplicación obtiene un Access Token que permite acceder a los datos expuestos a través de una API. En el caso de Mercado Pago, hay tres flujos de acceso disponibles: 

- **Authorization code**: flujo basado en redirección, caracterizado por la intervención del usuario para autorizar explícitamente el acceso a sus datos por la aplicación y por el uso de un código proporcionado por el servidor de autenticación para que la aplicación pueda obtener un Access Token y un `refresh_token` asociado. Veja mais informações em [Obter Access Token](/developers/es/docs/security/oauth/creation#bookmark_authorization_code).
- **Refresh token**: en caso de que un Access Token generado a partir del flujo _Authorization code_ esté inválido o expirado, este flujo se utilizará para intercambiar una concesión temporal del tipo `refresh_token` por un Access Token. Es decir, esto permite que el Access Token se actualice sin la necesidad de interacción del usuario nuevamente después de la autorización concedida por el flujo _Authorization code_. Veja mais informações em [Renovar Access Token](/developers/es/guides/additional-content/security/oauth/renewal).
- **Client credentials**: se utiliza para obtener un Access Token sin interacción del usuario. Este flujo se utiliza cuando las aplicaciones solicitan un Access Token usando solo sus propias credenciales para acceder a sus propios recursos, no pudiendo actuar en nombre de un usuario ni acceder a sus datos. Veja mais informações em [Obter Access Token](/developers/es/docs/security/oauth/creation#bookmark_client_credentials).

> NOTE
>
> PKCE (_Proof Key for Code Exchange_)
>
> Si vas a utilizar el flujo **Authorization code** para obtener el Access Token, puedes configurar el **PKCE** (_Proof Key for Code Exchange_), un protocolo de seguridad utilizado con OAuth para proteger contra ataques de código malicioso durante el intercambio de códigos de autorización por Access Token. Añade una capa extra de seguridad generando un _verifier_ que se transforma en un _challenge_ para asegurar que, incluso si el código de autorización es interceptado, no sea útil sin el _verifier_ original. <br><br>
> <br><br>
> Consulta [Configurar PKCE](/developers/en/docs/security/oauth/creation#:~:text=Access%20Token.-,Configurar%20PKCE,-El%20PKCE%20) para obtener más información.

## Access Token

És un código utilizado en diferentes _requests_ de origen público para acceder a un recurso protegido que representa una autorización otorgada por un vendedor a una aplicación cliente que contiene _scopes_ y un tiempo de vigencia limitado para dicho acceso.

> NOTE
>
> Nota
>
> Los **temporary grants** son códigos temporales utilizados para ser intercambiados por un Access Token. A diferencia de los Access Token, solo pueden ser usados para llamadas con el servidor de autorización y nunca se envían a servidores de recursos. Tipos de _temporary grants_:
> <br><br>
> - `authorization_code`: duración de 10 minutos y su uso es único.
> - `refresh_token`: duración de 6 meses y pueden ser reutilizados.

Vea cómo [obtener](/developers/es/guides/additional-content/security/oauth/creation) y [renovar](/developers/es/guides/additional-content/security/oauth/renewal) el Access Token.