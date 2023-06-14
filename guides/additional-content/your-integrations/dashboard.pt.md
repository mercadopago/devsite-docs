# Painel do desenvolvedor
No [Painel do desenvolvedor](/developers/panel/app), você encontra a listagem das suas aplicações. 

As aplicações são as diferentes integrações contidas em uma ou mais lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de ter tudo organizado e manter um controle que facilite a gestão. 

Cada aplicação possui um conjunto de credenciais e a possibilidade de configurar suas próprias notificações. Cada *card* representa uma aplicação criada e exibe o nome e o número da aplicação e um botão que direciona aos **Detalhes da aplicação**, onde você pode gerenciá-la. 

## Criar nova aplicação
Crie sua aplicação e obtenha suas credenciais para fazer a integração com o Mercado Pago. Para criar uma aplicação, siga os passos abaixo.

1. Clique em **Suas integrações**, no canto superior direito da tela.
2. Clique em **Criar aplicação**.

![Criar aplicação](/images/dashboard/dashboard_01_pt.png)

> NOTE
>
> Importante
>
> Durante a criação da sua aplicação, pode ser necessário realizar reautenticação de identidade. Se você já concluiu o processo de verificação, será solicitado a reautenticar. Se ainda não realizou a verificação, será redirecionado para enviar os documentos necessários. 
>
> Essa etapa adicional de autenticação é essencial para proteger sua conta e garantir a conformidade das operações. Siga as instruções fornecidas para criar sua aplicação com sucesso.

3. Digite um nome para identificar sua aplicação (limite de 50 caracteres).
4. Escolha uma solução de pagamento a ser integrada entre **Pagamentos on-line** e **Pagamentos presenciais**.
  - **Pagamentos online**: Se você pretende usar uma plataforma de comércio eletrônico, selecione **Sim**. Em seguida, escolha a **plataforma** com a qual você irá integrar. Por último, selecione o **produto** que você está integrando.

Caso você não esteja usando uma plataforma de comércio eletrônico, selecione **Não** e escolha o **produto** que você está integrando. Opcionalmente, você poderá selecionar o(s) modelo(s) de integração.

   - **Pagamentos presenciais**: Selecione o **produto** que você está integrando. Se você selecionar a opção Código QR, opcionalmente você também poderá escolher o(s) modelo(s) de integração.

![Configuração](/images/dashboard/dashboard_02_pt.png)

5. Marque a caixa de seleção para autorizar o uso dos seus dados pessoais conforme a [Declaração de Privacidade](https://www.mercadopago.com.br/privacidade) e certificar que sua conta usa as ferramentas do Mercado Pago de acordo com os [Termos e condições](https://www.mercadopago.com.br/developers/pt/docs/resources/legal/terms-and-conditions).
6. Marque a caixa de seleção **Não sou um robô**.
7. Clique em **Criar aplicação**.

![Finalizar](/images/dashboard/dashboard_03_pt.png)

A cada aplicação criada, um novo card contendo o nome e o número da aplicação é automaticamente criado no [Painel do desenvolvedor](/developers/panel/app).

![Card criado](/images/dashboard/dashboard_04_pt.png)

## Acessar as credenciais de uma aplicação que você não gerencia
Você pode solicitar acesso às credenciais de aplicação de outras pessoas e integrar soluções para outras contas além da sua. Para solicitar acesso às credenciais de uma aplicação que você não gerencia de um jeito seguro, siga os passos abaixo:
1. No [Painel do desenvolvedor](/developers/panel/app), clique no botão **Solicitar acesso às credenciais**.
2. Preencher o e-mail associado à conta da qual as credenciais serão solicitadas.
3. Marque a caixa de seleção "N˜ao sou um robô".
4. Clique em **Solicitar credenciais**.
Após o acesso às credenciais ser concedido, você pode usá-las para integrar soluções. Quando as integrações forem concluídas, remova as permissões de acesso para as credenciais que foram compartilhadas e cuide da segurança dos dados.

> Ao solicitar acesso a outras credenciais, você pede para que outras contas do Mercado Pago compartilhem com você as chaves públicas e privadas das aplicações para fazer integrações. Não use as credenciais de outras contas sem o devido consentimento.