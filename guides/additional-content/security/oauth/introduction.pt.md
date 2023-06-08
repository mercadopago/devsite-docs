# OAuth
 
> WARNING
>
> Importante
>
> A partir de 1º de julho de 2023, todas as integrações OAuth que não atenderem aos padrões exigidos receberão uma resposta de erro e não serão validadas. Certifique-se de aderir às [Boas práticas de uso do OAuth](/developers/pt/security/oauth/best-practices) e, para obter mais informações, visite [Referência da API](/developers/es/reference/oauth/_oauth_token/post).

OAuth é um protocolo de autorização que permite que aplicações tenham acesso limitado às informações privadas de contas Mercado Pago através do protocolo HTTP que introduz uma camada de autenticação e autorização na qual você solicita acesso a recursos protegidos dos vendedores mediante um token de acesso limitado à uma determinada aplicação sem precisar das credenciais dos vendedores através de fluxos de acesso.
 
Os fluxos, também chamados de grant types, fazem referência ao modo no qual uma aplicação obtém um token de acesso que permite acessar os dados expostos através de uma API. No caso do Mercado Pago, existem dois fluxos de acesso disponíveis: `authorization_code` e `refresh_token`. Em ambos fluxos, as entidades principais envolvidas nos processos são:
 
* **Access token**: código utilizado nas diferentes requests de origem pública para ter acesso a um recurso protegido que representa uma autorização concedida por um vendedor a uma aplicação cliente contendo scopes e um tempo de validade limitado para o referido acesso.
* **Temporal grants**: códigos temporários utilizados para serem trocados por um access token. São do tipo `authorization_code` e `refresh_token`.
 
> NOTE
>
> Nota
>
> A utilização do protocolo OAuth se difere do processo do compartilhamento de credenciais. OAuth não aborda questões relacionadas à autenticação do cliente, nem informações relacionadas a ela, sua responsabilidade está nos métodos de obtenção de um token para acessar um recurso.