# Configuração da integração

Uma vez instalado o plugin Mercado Pago para WooCommerce, é necessário configurá-lo. Para isso, siga os seguintes passos:

1. Acesse sua conta [Wordpress](https://wordpress.com/).
2. Acesse o painel da sua conta e clique em **Plugins > Plugins instalados**.

![Add plugin](/images/woocomerce/installed-plugins-pt.png)

3. Busque por **Mercado Pago** na barra de pesquisa à direita.
4. O resultado da pesquisa exibirá o plugin Mercado Pago. Clique em **Configurar plugin**.

![Plugin MP](/images/woocomerce/mp-plugin-pt.png)

> NOTE
>
> Nota
>
> Continuamos aprimorando constantemente o plugin para proporcionar a melhor experiência possível. Para aproveitar as últimas funcionalidades e garantir a segurança e o bom funcionamento do plugin, recomendamos que você o mantenha sempre atualizado clicando em **Ativar as atualizações automáticas** no passo anterior. 

A seguir, explicaremos como configurar cada item do plugin. 

## Integrar loja ao Mercado Pago

1. Clique em **1. Insira suas credenciais para integrar sua loja ao Mercado Pago**.

![Plugin MP](/images/woocomerce/insert-credentials-pt.png)

2. Agora, é preciso vincular sua conta Mercado Pago à sua loja através das suas credenciais. No admin do Mercado Pago, acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** e selecione a sua aplicação. Caso ainda não tenha criado uma aplicação, acesse a [documentação Painel do desenvolvedor](/developers/pt/docs/woocommerce/additional-content/your-integrations/dashboard) e saiba como criá-la. 

> WARNING
>
> Importante
>
> As credenciais são responsáveis por identificar a conta coletora dos pagamentos que você receberá em sua loja. Caso não insira suas credenciais no painel administrativo da loja, você será automaticamente redirecionado para configurar essa etapa. **Lembre-se, a ativação dos meios de pagamento só será possível após a inserção bem-sucedida das suas credenciais**.

3. Clique em **Credenciais de produção** no menu à esquerda. Copie o `access_token` e a `public_key`.

![Credenciais de produção](/images/woocomerce/test-prod-credentials-api.png)

4. Insira suas credenciais produtivas `access_token` e a `public_key` no campo **Credenciais de produção**, tomando **cuidado para não inverter os campos no momento de copiar e colar as credenciais**.
5. Na sua aplicação, clique em **Credenciais de teste** no menu à esquerda. Copie o `access_token` e a `public_key`.

![Credenciais de teste](/images/woocomerce/test-test-credentials-api.png)

6. Insira também as credenciais de teste `access_token` e a `public_key` no campo **Credenciais de teste**, tomando **cuidado para não inverter os campos no momento de copiar e colar as credenciais**.

![Painel](/images/woocomerce/test-woo.png)

7. Clique em **Salvar e continuar**.

> NOTE
>
> Nota
>
> Renove suas credenciais conforme necessário, consultando a [documentação](/developers/pt/docs/woocommerce/additional-content/best-practices/credentials-best-practices/secure-credentials) correspondente como guia. Após a renovação, é essencial atualizá-las no painel de WooCommerce. Lembre-se: ao alterar a senha da sua conta Mercado Pago, **é necessário renovar suas credenciais**. Para isso, exclua as credenciais antigas do painel, copie as novas e insira no painel administrativo da loja.

## Personalizar negócio

Na seção **2. Personalize as informações da sua loja**, você tem a possibilidade de fornecer detalhes específicos sobre a sua loja, proporcionando uma experiência mais completa aos clientes com informações adicionais.

* **Nome da sua loja na fatura dos clientes**: Digite o nome da sua loja. Se este campo estiver vazio, a compra do cliente será identificada como "Mercado Pago" na fatura.
* **Identificação em Atividades do Mercado Pago**: Nas Atividades do Mercado Pago, você verá o termo inserido neste campo antes do número do pedido.
* **Categoria da loja**: Insira a categoria dos produtos da sua loja. Caso não encontre uma categoria adequada, selecione "Other categories".

![Painel](/images/woocomerce/customization-pt.png) 

### Opções avançadas

Em **Opções avançadas de integração**, clique em **Ver opções avançadas** e configure as opções relacionadas à integração da sua loja com o Mercado Pago. 

* **URL para IPN**: Insira a URL para receber notificações de pagamentos.
* **Integrator ID**: Insira seu `integrador_id` de parceiro do **&lt;dev&gt;program** do Mercado Pago. Se você ainda não é membro do programa, acesse a [página](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para obter mais informações.
* **Modo debug e log**: Habilite esta opção para permitir o registro de atividades da sua loja, possibilitando um suporte mais eficiente e a melhor depuração de problemas técnicos.

> NOTE
>
> Nota
>
> Para acessar os logs da sua loja, volte para o painel administrativo do plugin em **WooCommerce > Mercado Pago** e clique em "Precisa de ajuda?". Dentro deste componente, siga o passo 4 para encontrar e baixar o histórico de erros. Na página do **histórico de erros**, você terá acesso a todos os logs disponíveis para download.

![Painel](/images/woocomerce/advanced-settings-pt.png) 

Por fim, clique em **Salvar e continuar**.