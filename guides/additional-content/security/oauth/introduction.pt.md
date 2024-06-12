# OAuth

O OAuth é um protocolo de autorização que permite que aplicações tenham acesso limitado às informações privadas das contas do Mercado Pago. Ele utiliza o protocolo HTTP e introduz uma camada de autenticação e autorização. Por meio desse protocolo, é possível solicitar acesso a recursos protegidos dos vendedores, utilizando um **Access Token** limitado a uma determinada aplicação, sem precisar das credenciais dos vendedores por meio de **fluxos de acesso**.

> NOTE
>
> Nota
>
> A utilização do protocolo OAuth se difere do processo do compartilhamento de credenciais. OAuth não aborda questões relacionadas à autenticação do cliente, nem informações relacionadas a ele. Sua responsabilidade está nos métodos de obtenção de um token para acessar um recurso.
> <br><br>
> Ao usar o OAuth, é importante considerar alguns aspectos para que a integração funcione corretamente. Acesse as [Boas práticas para a integração do OAuth](/developers/pt/docs/security/oauth/best-practices) e veja um guia para possíveis erros e boas práticas para utilização do OAuth.

## Access Token

É um código utilizado em diferentes _requests_ públicos para acessar um recurso protegido. Ele representa uma autorização concedida por um vendedor a uma aplicação do cliente, contendo _scopes_ e um tempo de validade limitado para o acesso.

Veja como [obter](/developers/pt/guides/additional-content/security/oauth/creation) e [renovar](/developers/pt/guides/additional-content/security/oauth/renewal) o Access Token.

### Temporary grants

Os _temporary grants_ são códigos temporários utilizados para serem trocados por um Access Token. Ao contrário dos Access Token, eles só podem ser usados para chamadas com o servidor de autorização e nunca são enviados para servidores de recursos.

Como este é um fluxo baseado em redirecionamento, o cliente deve ser capaz de interagir com o agente do usuário do proprietário do recurso (normalmente um navegador web) e de receber solicitações de entrada (via redirecionamento) do servidor de autorização.

Tipos de _temporary grants_: 

- `authorization_code`: duração de 10 minutos e o seu uso é único.
- `refresh_token`: duração de 6 meses e podem ser reutilizados.

## Fluxos de acesso (grant types)

Os fluxos, também conhecidos como _grant types_, são diferentes maneiras de uma aplicação obter um Access Token para acessar os dados expostos por uma API. No Mercado Pago, existem três fluxos de acesso disponíveis: 

- **Authorization code**: fluxo baseado em redirecionamento, sendo caracterizado pela intervenção do usuário para autorizar explicitamente o acesso aos seus dados pela aplicação e pelo uso de um código fornecido pelo servidor de autenticação para que a aplicação possa obter um Access Token e um `refresh_token` associado. Veja mais informações em [Obter Access Token](/developers/pt/docs/security/oauth/creation#bookmark_authorization_code).
- **Refresh token**: caso um Access Token gerado a partir do fluxo _Authorization code_ esteja inválido ou expirado, este fluxo será usado para trocar um concessão temporária do tipo `refresh_token` por um Access Token. Ou seja, isso permite que o Access Token seja atualizado sem a necessidade de interação do usuário novamente após a autorização concedida pelo fluxo _Authorization code_. Veja mais informações em [Renovar Access Token](/developers/pt/guides/additional-content/security/oauth/renewal).
- **Client credentials**: é utilizado para obter um Access Token sem interação do usuário. Este fluxo é utilizado quando as aplicações solicitam um Access Token usando apenas as suas próprias credenciais para acessar seus próprios recursos, não podendo agir em nome de um usuário e acessar os seus dados. Veja mais informações em [Obter Access Token](/developers/pt/docs/security/oauth/creation#bookmark_client_credentials).

> NOTE
>
> PKCE (Proof Key for Code Exchange)
>
> Caso vá utilizar o fluxo **Authorization code** para obter o Acess Token, você poderá configurar o **PKCE** (_Proof Key for Code Exchange_), um protocolo de segurança usado com OAuth para proteger contra ataques de código malicioso durante a troca de códigos de autorização por Access Token. Ele adiciona uma camada extra de segurança gerando um _verifier_ que é transformado em um _challenge_ para garantir que mesmo se o código de autorização for interceptado, ele não seja útil sem o _verifier_ original.Veja [Configurar PKCE](/developers/pt/docs/security/oauth/creation#:~:text=Access%20Token.-,Configurar%20PKCE,-O%20PKCE%20) para mais informações.