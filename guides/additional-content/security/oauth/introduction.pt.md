# OAuth

O OAuth é um protocolo de autorização que permite que aplicações tenham acesso limitado às informações privadas das contas do Mercado Pago. Ele utiliza o protocolo HTTP e introduz uma camada de autenticação e autorização. Por meio desse protocolo, é possível solicitar acesso a recursos protegidos dos vendedores, utilizando um Access Token limitado a uma determinada aplicação, sem precisar das credenciais dos vendedores por meio de fluxos de acesso.

> NOTE
>
> Nota
>
> A utilização do protocolo OAuth se difere do processo do compartilhamento de credenciais. OAuth não aborda questões relacionadas à autenticação do cliente, nem informações relacionadas a ele. Sua responsabilidade está nos métodos de obtenção de um token para acessar um recurso.
 
Os fluxos, também conhecidos como `grant types`, são diferentes maneiras de uma aplicação obter um Access Token para acessar os dados expostos por uma API. No Mercado Pago, existem três fluxos de acesso disponíveis: 

- **Authorization code**: fluxo baseado em redirecionamento, sendo caracterizado pela intervenção do usuário para autorizar explicitamente o acesso aos seus dados pela aplicação e pelo uso de um código fornecido pelo servidor de autenticação para que a aplicação possa obter um Access Token e um `refresh_token` associado.
- **Refresh token**: caso um Access Token gerado a partir do fluxo `authorization_code` esteja invalido ou expirado, este fluxo será usado para trocar um concessão temporária do tipo `refresh_token` por um Access Token. Ou seja, isso permite que o Access Token seja atualizado sem a necessidade de interação do usuário novamente após a autorização concedida pelo fluxo `authorization_code`.
- **Client credentials**: é utilizado para obter um Access Token sem interação do usuário. Este fluxo é utilizado quando as aplicações solicitam um Access Token usando apenas as suas próprias credenciais para acessar seus próprios recursos, não podendo agir em nome de um usuário e acessar os seus dados.

## Access Token

É um código utilizado em diferentes _requests_ públicos para acessar um recurso protegido. Ele representa uma autorização concedida por um vendedor a uma aplicação do cliente, contendo _scopes_ e um tempo de validade limitado para o acesso.

> NOTE
>
> Nota
>
> Os **temporary grants** são códigos temporários utilizados para serem trocados por um Access Token. Ao contrário dos Access Token, eles só podem ser usados para chamadas com o servidor de autorização e nunca são enviados para servidores de recursos. Tipos de _temporary grants_: 
> <br><br>
> - `authorization_code`: duração de 10 minutos e o seu uso é único.
> - `refresh_token`: duração de 6 meses e podem ser reutilizados.

### PKCE 

O **PKCE** (_Proof Key for Code Exchange_) é um protocolo de segurança usado com OAuth para proteger contra ataques de código malicioso durante a troca de códigos de autorização por Access Token. Ele adiciona uma camada extra de segurança gerando um _verifier_ que é transformado em um _challenge_ para garantir que mesmo se o código de autorização for interceptado, ele não seja útil sem o _verifier_ original. 

Veja [Configurar PKCE](/developers/pt/docs/security/oauth/creation#bookmark_configurar_pkce) para mais informações.