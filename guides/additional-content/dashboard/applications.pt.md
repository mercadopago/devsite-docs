# Suas aplicações
 
As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão.
 
Cada aplicação possui um conjunto de credenciais e a possibilidade de configurar suas próprias notificações. Cada card representa uma aplicação criada e exibe o **nome**, a **descrição**, o **ID da aplicação** e um **botão que permite gerenciar a aplicação**.

> Por padrão a tela exibe apenas 3 aplicações criadas. Para visualizar as outras aplicaçÕes, clique em **Ver todas as aplicações**.
 
## Criar nova aplicação
 
Para criar uma aplicação, siga os passos abaixo.
 
1. Selecione "Criar nova aplicação” ou “Criar sua primeira aplicação”.
2. Nomeie sua aplicação (limite de 50 caracteres).
3. Escolha uma solução de pagamento a ser integrada.
   - **Pagamentos on-line**. Se estiver utilizando uma plataforma de e-commerce, selecione a **plataforma** que você vai utilizar para integrar. Se não estiver, selecione o **produto do Mercado Pago** que está sendo integrado.
   - **Pagamentos presenciais**. Selecione o **produto do Mercado Pago** que está sendo integrado. 
6. Aceite nossos Termos e Condições.
7. Crie a aplicação clicando no botão "Criar aplicação".
 
A cada aplicação criada, um novo card contendo o nome, descrição e ID da aplicação é automaticamente criado na página inicial do seu [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel) de desenvolvedor.

## Gerenciar aplicação
 
### Editar aplicação
Você pode clicar no botão "Editar" para ver as configurações avançadas que incluem os dados da sua aplicação e o produto a ser integrado.
 
* **Dados da sua aplicação**: esta seção define os dados básicos da aplicação e inclui:
 
  - Nome da aplicação (limite de 50 caracteres).
  - Solução de pagamento a ser integrada.
  - Nome curto da aplicação. Nome curto serve para identificação pessoal do usuário que cria a aplicação e será exibido na ferramenta de **medir a qualidade da sua aplicação**. Veja [Qualidade da integração](/developers/pt/guides/additional-content/homologator/homologator) para mais informações.
  - Descrição da aplicação (limite de 150 caracteres).
  - Permissões da aplicação. Este campo apresenta as opções de acesso da sua aplicação, sendo elas: read (ler), offline access (acesso offline) e write (escrever). Por padrão, sua aplicação é criada com todas as permissões ativadas, mas você pode desativar uma permissão clicando na caixa de seleção referente à permissão que você deseja alterar.
  - Redirect URL. Este campo define a URL (em https) na qual você deseja receber o código de autorização quando sua integração for configurada como Marketplace ou realizada através de OAuth. Veja [OAuth](/developers/pt/docs/security/oauth/introduction) para mais detalhes.
  - Logotipo (formato PNG de 400 x 400 pixels).
  - Bloqueio de aplicação. Caso haja, indicará o motivo da aplicação estar bloqueada para uso. Clique em **Detalhes do bloqueio** para verificar [a solução](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/support/23064) do bloqueio informado. 
  </br>
 
### Excluir aplicação
Caso seja necessário excluir uma aplicação em seu Dashboard, clique nos 3 pontos verticais na card da aplicação, selecione a opção **Excluir** e confirme a ação na caixa de diálogo.
 
> WARNING
>
> Atenção
>
> Tenha em conta que ao excluir uma aplicação, sua loja deixará de receber pagamentos através da integração associada à aplicação e todas as configurações serão perdidas, incluindo as credenciais associadas. Uma vez excluída uma aplicação, não é possível recuperá-la.
 
### Detalhes da aplicação
 
Ao clicar no card de uma aplicação, você terá acesso aos seus detalhes, incluindo:
 
#### Nome da aplicação

Nessa área você poderá visualizar o nome da aplicação e, caso necessário, editar os dados da aplicação clicar no ícone correspondente.

#### Integração 

Apresenta o produto ou plataforma integrada com a aplicação.

#### Número da aplicação 

Nessa área você poderá visualizar o ID da aplicação. Os IDs da aplicação são números de identificação criados automaticamente que permitem localizar as aplicações sempre que uma nova aplicação for criada.

#### Pontuação

A pontuação indica o quanto a configuração da sua aplicação é segura e está alinhada com as boas práticas de integração do Mercado Pago.

#### Detalhes da pontuação

Botão de acesso à ferramenta em que você poderá **medir a qualidade da sua aplicação**, onde será possível identificar pontos de melhoria na sua integração e deixá-la de acordo com os padrões do Mercado Pago. Veja [Qualidade da integração](/developers/pt/guides/additional-content/homologator/homologator) para mais informações.

----[mla, mlm, mlu, mco, mlc, mpe]---- 
> WARNING
>
> Atenção
>
> Por enquanto, a ferramenta para medir a qualidade da integração só está disponível para integrações com o [Checkout Pro,](/developers/pt/docs/checkout-pro/landing) [Checkout API](/developers/pt/docs/checkout-api/landing) e [Checkout Bricks.](/developers/pt/docs/checkout-bricks/landing)

------------

----[mlb]---- 
> WARNING
>
> Atenção
>
> Por enquanto, a ferramenta para medir a qualidade da integração só está disponível para integrações com o [Checkout Pro,](/developers/pt/docs/checkout-pro/landing) [Checkout Transparente](/developers/pt/docs/checkout-api/landing) e [Checkout Bricks.](/developers/pt/docs/checkout-bricks/landing)

------------

#### Minhas credenciais

São apresentadas as credenciais de produção e de teste necessárias para acessar a sua aplicação, que são senhas únicas com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas online e outras aplicações.

As **credenciais de teste** devem ser usadas para testar suas integrações e podem ser utilizadas em conjunto com cartões de crédito de teste para simular recebimentos via cartão, enquanto as **credenciais de produção** são usadas para receber pagamentos.
 
Por padrão, as credenciais de produção estarão desativadas até que você as habilite clicando em **Ativar credenciais**, preencha as informações de seu negócio e aceite os nossos Termos e condições.
 
> NOTE
>
> Importante
>
> Obtenha suas credenciais através da sua conta Mercado Pago em **Seu negócio > Configurações > Gestão e Administração > Credenciais**. Leia [Credenciais](/developers/pt/guides/additional-content/credentials/credentials) para mais informações.
 
Também há a possibilidade de compartilhar as credenciais com outra conta do Mercado Pago, basta clicar em **compartilhar minhas credenciais** e preencher com o e-mail da conta que receberá as informações.

### Notificações webhooks

Eventos que você pode receber através chamadas POST HTTP toda vez que houver um evento relacionado a transações na sua aplicação.

Configure as URLs de produção e teste da qual serão recebidas as notificações webhook e selecione os eventos que serão responsáveis por gerar essas notificações. Leia [Webhooks](/developers/pt/guides/additional-content/notifications/webhooks/webhooks) para mais informações.