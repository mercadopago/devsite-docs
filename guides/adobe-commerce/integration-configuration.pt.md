# Configuração da integração

Com o Plugin do Mercado Pago instalado, será necessário configurá-lo para que seja possível cobrar utilizando nossa solução. 

> WARNING
>
> Importante
>
> Lançamos um **novo plugin** para Adobe Commerce (Magento) compatível com as atualizações mais recentes da plataforma. Recomendamos aos usuários das versões **3.5 a 3.19** a atualizarem para aproveitarem as novas funcionalidades. Versões anteriores não receberão mais atualizações, funcionalidades e correções. Veja como atualizar o plugin na [documentação de Adobe Commerce.](/developers/pt/docs/adobe-commerce/upgrade-to-the-new-plugin)

----[mlb]----
A configuração básica do plugin é feita em 3 etapas: **Integração com o Mercado Pago**, **Nome da loja**, **Categoria e ID do Integrador** e **API Integração**, seguida pela **Configuração dos pagamentos** (Checkout Transparente e Checkout Pro).

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
A configuração básica do plugin é feita em 3 etapas: **Integração com o Mercado Pago**, **Nome da loja**, **Categoria e ID do Integrador** e **API Integração**, seguida pela **Configuração dos pagamentos** (Checkout API e Checkout Pro).

------------
Siga os passos descritos nesta documentação para configurar o plugin do Mercado Pago na loja Adobe Commerce (Magento).


> NOTE
>
> Importante
>
> Para realizar vendas reais ou testar a loja, é preciso ter em mãos as credenciais de produção e/ou teste. Caso ainda não tenha criado suas credenciais, acesse a documentação [Credenciais](/developers/pt/guides/additional-content/your-integrations/credentials) e saiba como criá-las antes de seguir para as próximas etapas.


## Integração com o Mercado Pago

1. No Painel de Controle da loja, acesse **Lojas > Configuração > Vendas > Forma de pagamento**.
2. Em **Outros meios de pagamento**, clique em **Configurar** no plugin do Mercado Pago.
3. Clique em **Configurações Básicas > Integração com o Mercado Pago**.
4. Em **Modo de Operação do Checkout**, selecione **Produção** caso queira configurar para receber vendas reais, ou **Sandbox**, caso queira realizar testes antes de sair à produção.
5. Caso tenha selecionado **Produção**, insira sua _Public key_ e seu _Access Token_ de produção. Caso tenha selecionado **Sandbox**, insira sua _Public Key_ e seu _Access Token_ de Sandbox.
6. Clique em **Gravar Configuração** no canto superior direito da tela.

Ao finalizar estes passos, as informações básicas para a integração com o plugin estará concluída. Siga as próximas etapas para continuar o processo de configuração da integração.


## Nome da loja, Categoria e ID do Integrador

Nesta etapa da configuração, é necessário inserir as informações da loja e, de forma opcional, o `integrator_id`, o qual permite acompanhar as integrações realizadas pelo integrador.


1. Clique em **Nome da Loja, Categoria e ID do Integrador** e no campo **Nome da Loja** insira o nome que deverá ser exibido na fatura do comprador.
2. Em **Categoria da sua loja**, defina a categoria dos produtos que são vendidos, por exemplo, "Celulares e Acessórios".
3. Em **ID do integrador**, insira seu _integrator_id_ para que seja possível registrar quantas vendas foram processadas com sua conta. Caso não tenha, deixe o campo em branco.

![Store Name, Category and Integrator ID](/images/adobe-commerce/nome_cat_id.png)


## API Integração

Na etapa de **API Integração** será possível definir se deseja ou não receber notificação de reembolso. Ao selecionar "Sim", sua loja receberá a notificação de reembolso processando um "Memorando de Crédito".

![API Integration](/images/adobe-commerce/api_integracao.png)


## Suporte para desenvolvedores

Nesta etapa, é possível definir o comportamento de registro dos logs das transações, para isso, siga os passos abaixo de acordo com a descrição de cada opção.

1. Em **Depurar**, selecione "Sim" ou "Não". Esse campo permitirá registrar as comunicações da loja com o Mercado Pago para oferecer um suporte ainda melhor (não utilize o modo debug com a loja em modo de produção).
2. Em **Reescrever a URL de notificação**, é possível inserir uma URL alternativa para receber a notificação de reembolso. Essa função é exclusiva para desenvolvedores.

![Support](/images/adobe-commerce/suporte_para_devs.png)

----[mlb]----
Ao finalizar todas as etapas, a integração com o plugin do Mercado Pago estará finalizada e pronta para configuração dos pagamentos (Checkout Pro e Checkout Transparente).

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
Ao finalizar todas as etapas, a integração com o plugin do Mercado Pago estará finalizada e pronta para configuração dos pagamentos (Checkout Pro e Checkout API).

------------