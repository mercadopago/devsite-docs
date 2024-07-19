# Configurar integração teste

Para testar sua integração com o Mercado Pago Point e o processamento de pagamentos, é necessário primeiramenteconfigurar sua integração. Nesta documentação, você encontrará o passo a passo para fazê-lo corretamente utilizando nossas APIs.

> WARNING
>
> Importante
>
> Para testar a integração com dispositivos Point, é preciso utilizar **usuários produtivos do Mercado Pago e suas credenciais de produção**, pois os pagamentos com usuários de teste não estão habilitados.

## Criar loja e caixa

1. Para criar uma loja, faça uma chamada para o endpoint [Criar loja](/developers/pt/reference/stores/_users_user_id_stores/post). Envie seu **Access Token de produção** e substitua o valor `user_id` pela **identificação de usuário** atribuída a você ao criar sua aplicação. Se tiver dúvidas sobre como identificar esse valor, consulte a documentação [Detalhes da aplicação](/developers/pt/docs/mp-point/additional-content/your-integrations/application-details).

2. Para criar um caixa, faça uma chamada para o endpoint [Criar caixa](/developers/es/reference/pos/_pos/post), e associe-o à loja criada no passo anterior. Isso é feito substituindo os parâmetros `external_store_id` pelo `external_id` que você atribuiu à loja, e `store_id` pelo valor obtido no campo `id` na resposta à criação da loja.

3. Por fim, associe o dispositivo Point à sua conta do Mercado Pago. Para isso, baixe e instale o aplicativo Mercado Pago em seu dispositivo móvel, faça login com sua conta e pressione o ícone QR para escanear o código que aparece ao ligar o dispositivo Point.


## Ativar o modo PDV

A ativação do modo operacional Ponto de Venda (PDV) em seu dispositivo é um **requisito obrigatório** para operar com nossa API. O processo consiste em duas etapas:

1. Primeiro, é necessário **obter a identificação do seu dispositivo Point**. Para isso, realize uma chamada para o endpoint [Obter dispositivos](/developers/pt/reference/integrations_api/_point_integration-api_devices/get), que retornará uma lista dos dispositivos associados à conta do Mercado Pago. Você poderá identificar o Point que deseja ativar pelos últimos caracteres do campo `id`, que devem corresponder ao número de série que aparece na etiqueta traseira do dispositivo. Lembre-se de fazer essa chamada utilizando suas credenciais de produção.

> NOTE
>
> Nota
>
> Recomendamos enviar os parâmetros `store_id` y `pos_id` nesta solicitação para verificar se as configurações estão corretas. Esses parâmetros permitem obter os dispositivos associados a uma conta do Mercado Pago, bem como os vinculados a uma loja e um caixa específicos dentro dessa conta. Use os valores recebidos nas respostas à criação de cada um.

2. Por fim, faça uma requisição **PATCH** para o endpoint [Alterar o modo de operação](/developers/pt/reference/integrations_api/_point_integration-api_devices_device-id/patch), substituindo o valor `device-id` do *path* pelo `id` do dispositivo obtido no passo anterior. Além disso, você deverá preencher o campo `operating_mode` com o valor `PDV`, que habilita o funcionamento do dispositivo no modo integrado com a API.


## Configurar notificações

Antes de iniciar os testes com o processamento de pagamentos, configureas notificações Webhooks através do [Suas integrações](/developers/panel/app). Dessa forma, será possível testar também o recebimento dos alertas necessários para cada transação realizada e comparar as informações recebidas com o seu sistema.

Para configurar as notificações com o Mercado Pago Point, siga as instruções abaixo:
1. Acesse [Suas integrações](/developers/panel/app) e selecione o aplicativo com o qual está testando sua integração.
2. No menu à esquerda, clique em **Webhooks**.
3. Na tela exibida, clique em **Configurar notificações** e configure a URL que será utilizada para receber as notificações de teste. Recomendamos utilizar umas URLs diferentes para o modo de teste e o modo produção:
 * **URL modo teste**: URL que permite testar o correto funcionamento das notificações dessa aplicação durante a fase de teste ou desenvolvimento. 
 * **URL modo produção**: URL para receber notificações com sua integração produtiva. Essas notificações deverão ser configuradas com credenciais produtivas.
4. Selecione **Integrações Point** como o tópico sobre o qual deseja receber notificações. Isso manterá você informado sobre as intenções de pagamento e as mudanças de status.
5. Por fim, clique em **Salvar**. Isso irá gerar uma **assinatura secreta** exclusiva para o aplicativo, que permitirá validar a autenticidade das notificações recebidas, garantindo que tenham sido enviadas pelo Mercado Pago. Se desejar obter mais informações sobre como validar a origem de uma notificação, consulte a documentação correspondente.

Assim que todas as configurações forem feitas, você poderá começar a testar o processamento de pagamentos.



