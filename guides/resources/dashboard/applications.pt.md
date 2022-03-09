# Suas aplicações
 
As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão.
 
Cada aplicação possui um conjunto de credenciais e a possibilidade de configurar suas próprias notificações. Cada card representa uma aplicação criada e exibe o **nome**, a **descrição**, o **ID da aplicação** e um botão que permite gerenciar a aplicação.
 
## Criar nova aplicação
 
Para criar uma aplicação, siga os passos abaixo.
 
1. Selecione “Nova aplicação” ou “Criar sua primeira aplicação”.
2. Nomeie sua aplicação (limite de 50 caracteres).
3. Escolha uma solução a ser integrada.
4. Aceite nossos Termos e Condições.
5. Crie a aplicação clicando no botão "Criar aplicação".
 
A cada aplicação criada, um novo card contendo o nome, descrição e ID da aplicação é automaticamente criado na página inicial do seu [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/dashboard/introduction) de desenvolvedor.

## Gerenciar aplicação
 
### Editar aplicação
Você pode clicar no botão "Editar" para ver as configurações avançadas que incluem os dados da sua aplicação e o produto a ser integrado.
 
* **Dados da sua aplicação**: esta seção define os dados básicos da aplicação e inclui:
 
  * Nome da aplicação (limite de 50 caracteres).
  * Descrição da aplicação (limite de 150 caracteres).
  * Permissões da aplicação. Este campo apresenta as opções de acesso da sua aplicação, sendo elas: read (ler), offline access (acesso offline) e write (escrever). Por padrão, sua aplicação é criada com todas as permissões ativadas, mas você pode desativar uma permissão clicando na caixa de seleção referente à permissão que você deseja alterar.
  * Redirect URL. Este campo define a URL (em https) na qual você deseja receber o código de autorização quando sua integração for configurada como Marketplace ou realizada através de OAuth. Veja [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/oauth/introduction) para mais detalhes.
  * Bloqueio de aplicação. Caso haja, indicará o motivo da aplicação estar bloqueada para uso. Clique em **Detalhes do bloqueio** para verificar [a solução](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/support/23064) do bloqueio informado. 
  </br>
* **Produto a ser integrado**. Esta seção define o produto a ser integrado na sua aplicação. O campo "Produtos disponíveis" apresenta a lista de produtos disponíveis a serem integrados. Por padrão, o valor deste campo é preenchido com o valor inserido no momento da criação da aplicação, mas você pode alterar o produto escolhido sem a necessidade de reconfigurar a integração. Este campo serve como um informativo do produto ao qual a aplicação se refere.
 
### Excluir aplicação
Caso seja necessário excluir uma aplicação em seu Dashboard, clique nos 3 pontos verticais na card da aplicação, selecione a opção **Excluir** e confirme a ação na caixa de diálogo.
 
> WARNING
>
> Importante
>
> Tenha em conta que ao excluir uma aplicação, sua loja deixará de receber pagamentos através da integração associada à aplicação e todas as configurações serão perdidas, incluindo as credenciais associadas. Uma vez excluída uma aplicação, não é possível recuperá-la.
 
## Detalhes da aplicação
 
Ao clicar no card de uma aplicação, você terá acesso aos seus detalhes, incluindo:
 
* **Nome e ID da aplicação**. Nessa área você poderá selecionar a aplicação que desejar a partir de seu ID. Basta clicar no número apresentado e selecionar o ID desejado.
* **Minhas credenciais**. Senhas únicas com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas online e outras aplicações. Leia [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) para mais informações.
* **Notificações webhook**. Eventos que você pode receber através chamadas POST HTTP toda vez que houver um evento relacionado a transações na sua aplicação. Leia [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks/webhooks) para mais informações para mais informações.
 
### ID da aplicação
Os IDs da aplicação são números de identificação criados automaticamente que permitem localizar as aplicações sempre que uma nova aplicação for criada.
 
### Credenciais
São apresentadas as credenciais de produção e de teste necessárias para acessar a sua aplicação. 

As **credenciais de teste** devem ser usadas para testar suas integrações e podem ser utilizadas em conjunto com cartões de crédito de teste para simular recebimentos via cartão, enquanto as **credenciais de produção** são usadas para receber pagamentos.
 
Por padrão, as credenciais de produção estarão desativadas até que você as habilite clicando em **Ativar credenciais**, preencha as informações de seu negócio e aceite os nossos Termos e condições.
 
> WARNING
>
> Atenção
>
> Se você não é desenvolvedor, recomendamos que você integre o Mercado Pago à sua loja através de [plugins e plataformas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins) e obtenha suas credenciais através da sua conta Mercado Pago em **Seu negócio > Configurações > Gestão e Administração > Credenciais**. Leia [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials) para mais informações.
 
Também há a possibilidade de compartilhar as credenciais com outra conta do Mercado Pago, basta clicar em **compartilhar minhas credenciais** e preencher com o e-mail da conta que receberá as informações.
 
### Notificações webhook
Configure as URLs de produção e teste da qual serão recebidas as notificações webhook e selecione os eventos que serão responsáveis por gerar essas notificações. Leia [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks/webhooks) para mais informações.

> NEXT_STEP_CARD_PT
>
> Contas que você integra
>
> Veja informações a respeito de contas de terceiro das quais você recebeu permissão para utilizar.
>
> [Contas que você integra](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/dashboard/integration)
