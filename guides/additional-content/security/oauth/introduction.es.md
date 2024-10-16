# OAuth

OAuth es un protocolo de autorización que permite que las aplicaciones tengan acceso limitado a la información privada de las cuentas de Mercado Pago. A través del protocolo HTTP, introduce una capa de autenticación y autorización, que consiste en solicitar acceso a los recursos protegidos de los vendedores mediante un **Access token** limitado a una aplicación en particular. Esto se logra sin necesidad de obtener las credenciales de los vendedores a través de los **flujos de acceso**.

> NOTE
>
> Nota
>
> El uso del protocolo OAuth difiere del proceso de uso compartido de credenciales. OAuth no aborda cuestiones relacionadas con la autenticación del cliente, ni información relacionada con la misma. Su responsabilidad radica en los métodos de obtención de un token para acceder a un recurso.
> <br><br>
> A la hora de utilizar OAuth, es importante tener en cuenta ciertos aspectos para que la integración funcione correctamente. Accede a las [Buenas prácticas de integración de OAuth](/developers/es/docs/security/oauth/best-practices) y consulta una guía de posibles errores y de buenas prácticas a tener en cuenta. 

## Access Token

És un código utilizado en diferentes _requests_ de origen público para acceder a un recurso protegido y representa una autorización otorgada por un vendedor a una aplicación cliente, que contiene _scopes_ y un tiempo de vigencia limitado para dicho acceso.

### Temporary grants

Los **_temporary grants_** son códigos temporales utilizados para ser intercambiados por un Access Token. A diferencia de los Access Token, sólo pueden ser usados para llamadas con el servidor de autorización y nunca se envían a servidores de recursos. Los tipos de _temporary grants_ son:

- `authorization_code`: tiene una duración de 10 minutos y su uso es único.
- `refresh_token`: tiene una duración de 6 meses y puede ser reutilizado.

Si deseas conocer cómo obtener el Access Token, accede a [nuestra documentación](/developers/es/guides/additional-content/security/oauth/creation). También puedes consultar la información necesaria para saber cómo [renovarlo](/developers/es/guides/additional-content/security/oauth/renewal).

## Flujos de acceso (grant types)

Los flujos, también llamados _grant types_, se refieren a la forma en que una aplicación obtiene un Access Token, credencial permite acceder a los datos expuestos a través de una API. En el caso de Mercado Pago, hay tres flujos de acceso disponibles:

- **Authorization code**: flujo basado en redirección y que debe ser usado si se van a usar credenciales para acceder a un recurso a nombre de un tercero. Está caracterizado por la intervención del usuario para autorizar explícitamente el acceso a sus datos por medio de la aplicación, y por el uso de un código proporcionado por el servidor de autenticación para que esta aplicación pueda obtener un Access Token y un `refresh_token` asociado. Puedes ver más información dirigiéndote a [Obtener Access Token](/developers/es/docs/security/oauth/creation#bookmark_authorization_code).
- **Refresh token**: en caso de que un Access Token generado a partir del flujo _Authorization code_ sea inválido o haya expirado, este flujo se utilizará para intercambiar una concesión temporal del tipo `refresh_token` por un Access Token. Es decir, permitirá que el Access Token se actualice sin una nueva interacción del usuario luego de haber concedido  la autorización por el flujo _Authorization code_. Puedes ver más información accediendo a [Renovar Access Token](/developers/es/guides/additional-content/security/oauth/renewal).
- **Client credentials**: se van a usar credenciales para acceder a un recurso en nombre propio, o sea, se utiliza para obtener un Access Token sin interacción del usuario. Es útil para instancias en que  las aplicaciones solicitan este Access Token usando solo sus propias credenciales para acceder a sus propios recursos, sin permitir actuar en nombre de un usuario ni acceder a sus datos. Puedes ver más información en la documentación [Obtener Access Token](/developers/es/docs/security/oauth/creation#bookmark_client_credentials).

> NOTE
>
> PKCE (Proof Key for Code Exchange)
>
> Si vas a utilizar el flujo **Authorization code** para obtener el Access Token, puedes configurar el **PKCE** (_Proof Key for Code Exchange_), un protocolo de seguridad utilizado con OAuth para proteger contra ataques de código malicioso durante el intercambio de códigos de autorización por Access Token. Añade una capa extra de seguridad generando un _verifier_ que se transforma en un _challenge_ para asegurar que, incluso si el código de autorización es interceptado, no sea útil sin el _verifier_ original.  Consulta [Configurar PKCE](/developers/es/docs/security/oauth/creation#:~:text=Access%20Token.-,Configurar%20PKCE,-El%20PKCE%20) para obtener más información.