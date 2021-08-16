# Painel do Desenvolvedor
O [Painel do Desenvolvedor](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel) é o seu ambiente de gerenciamento de aplicações. Ao abrir uma conta Mercado Pago, ele é automaticamente criado para você com um User ID que o identifica. 

As aplicações nada mais são do que as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. 

Cada aplicação possui um conjunto de credenciais e a possibilidade de configurar suas próprias notificações. Leia [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/credentials/credentials) e [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks) para mais informações.

> WARNING 
> 
> Atenção
> 
> Se você não é desenvolvedor, recomendamos que você integre o Mercado Pago à sua loja através de [plugins e plataformas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins) e recupere suas credenciais através da sua conta Mercado Pago em [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials). Leia [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/credentials/credentials) para mais informações.


## Criar aplicação
Para criar uma aplicação siga os passos abaixo.
1. Selecione “Nova aplicação” ou “Criar sua primeira aplicação”.
2. Nomeie sua aplicação.
3. Escolha uma solução a ser integrada.
4. Aceite nossos Termos e Condições.
5. Crie a aplicação clicando no botão "Criar aplicação".

A cada aplicação criada, um card novo contendo o nome, descrição e ID da aplicação é automaticamente criado na página inicial do painel do desenvolvedor.


## Detalhes da aplicação
Ao clicar no card de uma aplicação, você terá acesso aos seus detalhes, incluindo:
- **Minhas credenciais**. Senhas únicas com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas online e outras aplicações. Leia [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/credentials/credentials) para mais informações.
- **Notificações webhook**. Eventos que você pode receber através chamadas POST HTTP toda vez que houver um evento relacionado a transações na sua aplicação. Leia [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks) para maiores informações para mais informações.


## Editar aplicação
Depois de criar sua aplicação, você pode clicar no botão "Editar" para ver as configurações avançadas que incluem os dados da sua aplicação e o produto a ser integrado.
- **Dados da sua aplicação**. Esta seção define os dados básicos da aplicação e incluem:
  - **Nome da aplicação**.
  - **Descrição da aplicação**.
  - **Permissões da aplicação**. Este campo apresenta as opções de acesso da sua aplicação. Por padrão, sua aplicação é criada com todas as permissões ativadas, mas você pode desativar uma permissão clicando na caixa de seleção referente à permissão que você deseja alterar. 
  - **Redirect URL**. Este campo define a URL na qual você deseja receber o código de autorização quando sua integração for configurada como Marketplace ou for realizada através de OAuth.

- **Produto a ser integrado**. Esta seção define o produto a ser integrado na sua aplicação. O campo "Produtos disponíveis" apresenta a lista de produtos disponíveis a serem integrados. Por padrão, o valor deste campo é preenchido com o valor inserido no momento da criação da aplicação, mas você pode alterar o produto escolhido sem a necessidade de reconfigurar a integração. Este campo serve como um campo informativo do produto ao qual a aplicação se refere.


## Excluir aplicação
Caso você precise por algum motivo, excluir uma aplicação, basta clicar em "Excluir" e confirmar a ação na caixa de diálogo. 

>WARNING
>
>Atenção
>
>Tenha em conta que ao excluir uma aplicação, sua loja deixará de receber pagamentos através da integração associada à aplicação e todas as configurações serão perdidas, incluindo as credenciais associadas. Uma vez excluída uma aplicação, não é possível recuperá-la.


## Contas que você integra
Você pode integrar soluções para outras contas além da sua própria. Quando estiver integrando soluções para outras contas, você pode solicitar acesso às credenciais desta conta de forma a manter a segurança dos dados. Nesta seção constam as credenciais dessas outras contas. Para solicitar acesso, basta:
1. Clicar no botão "Solicitar credenciais".
2. Preencher o email da conta para a qual as credenciais serão solicitadas.
3. Confirmar a solicitação das credenciais.
Após o acesso às credenciais ser concedido, você pode usá-las para integrar soluções. Quando as integrações forem concluídas, remova as permissões de acesso para as credenciais que foram compartilhadas e cuide da segurança dos dados.


## ID de integrador
No painel do desenvolvedor consta também o seu ID de integrador. O ID de integrador é um número único que o identifica como membro do &lt;dev&gt; program. 

O &lt;dev&gt; program é um programa de benefícios para desenvolvedores, gratuito e exclusivo, criado para que você faça parte da nossa comunidade e receba benefícios extras. Para fazer parte, você deve ser aprovado em algumas das certificações oficiais do Mercado Pago. 

Verifique a página do [&lt;dev&gt;program](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) e realize a certificação no produto desejado, receba seu ID de integrador e o insira nas suas integrações para receber benefícios extras.
