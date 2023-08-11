# OAuth



O OAuth é um protocolo de autorização que permite que aplicações tenham acesso limitado às informações privadas das contas do Mercado Pago. Ele utiliza o protocolo HTTP e introduz uma camada de autenticação e autorização. Por meio desse protocolo, é possível solicitar acesso a recursos protegidos dos vendedores, utilizando um token de acesso limitado a uma determinada aplicação, sem precisar das credenciais dos vendedores por meio de fluxos de acesso.
 
Os fluxos, também conhecidos como `grant types`, são diferentes maneiras de uma aplicação obter um token de acesso para acessar os dados expostos por uma API. No Mercado Pago, existem dois fluxos de acesso disponíveis: `authorization_code` e `refresh_token`. Ambos os fluxos envolvem as mesmas entidades principais nos processos, sendo eles:
 
* **Access token**: código utilizado em diferentes requests públicos para acessar um recurso protegido. Ele representa uma autorização concedida por um vendedor a uma aplicação cliente, contendo scopes e um tempo de validade limitado para o acesso.
* **Temporal grants**: códigos temporários utilizados para serem trocados por um access token. São do tipo `authorization_code` e `refresh_token`.
 
> NOTE
>
> Nota
>
> A utilização do protocolo OAuth se difere do processo do compartilhamento de credenciais. OAuth não aborda questões relacionadas à autenticação do cliente, nem informações relacionadas a ele. Sua responsabilidade está nos métodos de obtenção de um token para acessar um recurso.