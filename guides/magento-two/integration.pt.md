# Configuração da integração
 
Para realizar a integração com o Mercado Pago, siga os procedimentos abaixo.

# Configure suas credenciais

Primeiro, você deve inserir suas credenciais para poder habilitar os meios de pagamento disponíveis no país de origem da loja. Para isso, siga os passos abaixo.

1. Vá para o menu Stores > Configuration > Sales > Payment Methods
2. Em seguida, acesse a opção **Mercado Pago > Credenciais**. Lá você encontrará os campos **Public key** e **Access token**, que você deve preencher com as com as [credenciais](/developers/pt/guides/credentials/credentials) de **produção** e **teste** indicadas em seu seu [Dashboard](/developers/pt/guides/additional-content/dashboard/introduction). É importante que você salve suas credenciais antes de continuar porque isso habilitará os meios de pagamento disponíveis em seu país.
3. Na tela de gerenciamento do módulo, insira o **nome e a categoria da sua loja**.
4. Informe o seu *integrator_id* como membro do **&lt;dev&gt;program**, do Mercado Pago. Caso ainda não seja um membro, [clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para mais informações.
3. Depois de definir suas credenciais, clique no botão **Save Config** no canto superior direito.
 
Feitas as configurações de negócio, configure as experiências de pagamento da sua loja de acordo com o tipo de checkout, podendo ser:

* [Checkout Pro](/developers/pt/docs/prestashop/payment-setup/cho-pro)
* [----[mlb]----Checkout Transparente------------ ----[mla, mlm, mpe, mco, mlu, mlc]----Checkout API------------](/developers/pt/docs/prestashop/payment-setup/cho-api/introduction).

> PREV_STEP_CARD_PT
>
> Pré-requisitos da integração
>
> Conheça os pré-requisitos para realizar a integração.
>
> [Pré-requisitos da integração](/developers/pt/docs/prestashop/prerequisites)

> NEXT_STEP_CARD_PT
>
> Configurar os pagamentos com Checkout Pro
>
> Saiba como configurar o Checkout Pro para receber os pagamento de sua loja.
>
> [Configurar os pagamentos com Checkout Pro](/developers/pt/docs/prestashop/payment-setup/cho-pro)