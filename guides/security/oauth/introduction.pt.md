# OAuth
 
OAuth é um protocolo de autorização que permite que aplicações tenham acesso limitado às informações privadas de contas Mercado Pago através do protocolo HTTP que introduz uma camada de autenticação e autorização na qual você solicita acesso a recursos protegidos dos vendedores mediante um token de acesso limitado à uma determinada aplicação sem precisar das credenciais dos vendedores através de fluxos de acesso.
 
Os fluxos, também chamados de grant types, fazem referência ao modo no qual uma aplicação obtém um token de acesso que permite acessar os dados expostos através de uma API. No caso do Mercado Pago, existem dois fluxos de acesso disponíveis: `authorization_code` e `refresh_token`. Em ambos fluxos, as entidades principais envolvidas nos processos são:
 
* **Access token**: código utilizado nas diferentes requests de origem pública para ter acesso a um recurso protegido que representa uma autorização concedida por um vendedor a uma aplicação cliente contendo scopes e um tempo de validade limitado para o referido acesso.
* **Temporal grants**: códigos temporários utilizados para serem trocados por um access token. São do tipo `authorization_code` e `refresh_token`.
 
> WARNING
>
> Importante
>
> A utilização do protocolo OAuth se difere do processo do compartilhamento de credenciais. OAuth não aborda questões relacionadas à autenticação do cliente, nem informações relacionadas a ela, sua responsabilidade está nos métodos de obtenção de um token para acessar um recurso.
 
> NEXT_STEP_CARD_PT
>
> Criação de acesso
>
> Conheça o fluxo de autorização de acesso aos dados.
>
> [Criação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/oauth/creation)