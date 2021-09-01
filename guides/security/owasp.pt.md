# OWASP

No Mercado Pago protegemos os pagamentos dos nossos clientes e usuários para que sejam processados ​​com segurança em todas as plataformas web e mobile. Para isso, implementamos controles de segurança que mantêm a confidencialidade, integridade e disponibilidade das informações que processamos por meio de integrações.
    
O Open Web Application Security Project (OWASP) é uma comunidade aberta que fornece ferramentas e padrões para desenvolver e manter aplicativos web seguros. Visa promover pesquisa e desenvolvimento de segurança de aplicativos. 

OWASP Top 10 é uma classificação das vulnerabilidades mais comuns em conjunto com sua mitigação para proteger aplicativos contra esses tipos de ataques. Para mais informações, acesse [o site oficial Owasp Top 10](https://owasp.org/www-project-top-ten/).

Devido à integração que você está fazendo com o Mercado Pago, para nos protegermos das vulnerabilidades mais comuns, recomendamos que siga as seguintes dicas sobre: Input Validation e Prevenção de Falsificação de Solicitações do Lado do Servidor.  Veja [See OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/index.html) para mais informações.

>NOTE
>
>Observação
>
>É importante seguir boas práticas de codificação em todas as etapas do ciclo de vida de desenvolvimento do software, a fim de manter a segurança em todas as transações. 

## Input Validation
A [input validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) é realizada para garantir que todos os dados estejam corretos (sintática e semanticamente) antes de entrar no workflow do nosso sistema, nos permitindo detectar entradas não autorizadas antes de serem processadas pela aplicação.

Desta forma, evitamos que dados incorretos persistam em nossos bancos de dados e, como consequência, causem um mau funcionamento em nosso sistema. Todos os dados de fontes não confiáveis ​​devem estar sujeitos a esta validação. 
Para sua implementação, qualquer técnica de programação que permita a aplicação efetiva da correção dos dados de entrada é utilizada: 
* Validadores de tipos de dados disponíveis nativamente em frameworks de aplicações web.
* Validação em relação ao esquema JSON e esquema XML para entrada nesses formatos.
* Conversão de tipo de dados com tratamento estrito de exceção.
* Verificação de intervalo de valor mínimo e máximo para parâmetros numéricos e datas, verificação de comprimento mínimo e máximo para cadeias de caracteres.

É importante garantir que qualquer validação de entrada realizada no cliente também deva ser realizada no servidor, uma vez que pode ser contornada no lado do cliente por um invasor. 

## Server-Side Request Forgery (SSRF)
[Server-Side Request Forgery](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) é um vetor de ataque que abusa de um aplicativo para interagir com a rede interna e/ou externa, ou com a própria máquina do aplicativo.

Dependendo da funcionalidade e dos requisitos do aplicativo, há dois casos de uso em que o SSRF pode ocorrer:
1. **A aplicação pode enviar uma solicitação apenas para aplicativos identificados e confiáveis**
   Este caso ocorre quando um aplicativo precisa fazer uma solicitação a outro, que geralmente está localizado em outra rede, para realizar uma tarefa específica. Nesse caso, é possível usar uma abordagem de lista de permissões de aplicativos. Podemos nos proteger por meio das camadas de aplicativo e rede.

   * **Camada de aplicativo**: Por meio da validação de entrada, podemos aplicar a abordagem da lista de aplicativos permitidos. O formato das informações esperadas do usuário já é conhecido. Nesse contexto, as validações também podem ser adicionadas para garantir que a string de entrada respeite o formato esperado. 
   * **Camada de rede**: o objetivo é evitar que chamadas arbitrárias de aplicativos sejam feitas. O firewall pode ser usado para limitar o acesso ao aplicativo e, por sua vez, limitar o impacto de um aplicativo vulnerável ao SSRF. 
   <br>


2. **A aplicação pode enviar solicitações para qualquer endereço IP externo ou nome de domínio**.
 Este caso ocorre quando um usuário pode controlar uma URL para um recurso externo e o aplicativo faz uma solicitação para essa URL. Quando falamos de recurso externo, queremos dizer qualquer IP que não pertença à rede interna e deva ser alcançado através da Internet de forma pública. 

 Nesse caso, não é possível usar listas de aplicativos permitidos, pois eles são inicialmente desconhecidos e mudam dinamicamente. 


