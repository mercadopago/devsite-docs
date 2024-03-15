# Simulador Point

O Simulador Point é uma ferramenta que permite a interação com diferentes endpoints da nossa API para integrar os Pontos de Venda com dispositivos. O seu objetivo principal é esclarecer o processo de criação e cancelamento de uma tentativa de pagamento, ajudando a entender melhor este fluxo.

Por esse motivo, o Simulador também possibilita a realização de testes no funcionamento da sua integração com Point e no processamento de pagamentos. Ainda que não reproduza com exatidão o dispositivo, seu propósito é educacional, visando facilitar o processo de familiarização com nossa API.

O simulador possui dois modos de uso:

 * **PDV mode**: simula a integração de um sistema completo (dispositivo e Ponto de Venda) com nossa API de Integrações.

 * **Device mode**: simula um dispositivo de ponto virtual para que seja possível testar a integração a partir de HTTP requests. 


Para usar o simulador, siga os passos abaixo.

## 1. Gerar ambiente de teste

Para iniciar os testes de integrações e fluxos de pagamento com o Simulador Point, é necessário criar um [usuário de teste](/developers/pt/docs/mp-point/additional-content/your-integrations/test/accounts) no modo vendedor e obter suas **credenciais de produção**.

> WARNING
> 
> Importante
>
> Embora o Simulador peça as credenciais de teste, você precisará das credenciais produtivas para acessar a conta do vendedor e suas configurações.

Para gerar essas credenciais, acesse [Suas Integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/), selecione o aplicativo no qual você integrou o Mercado Pago Point e, na seção **Contas de teste**, clique no botão **+ Criar conta de teste**. Você deverá preencher os campos solicitados de acordo com as instruções.

![Criar conta](/images/woocomerce/test-create-account.gif)


Caso queira, também é possível criar usuários de teste usando o seguinte comando:

----[mlm]----
``` curl
curl -X POST \
-h "Content-Type: application/json" \
--h 'Authorization: Bearer YOUR_TEST_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"MLM","description" : "a description"}'
```
------------

----[mla]----
``` curl
curl -X POST \
-h "Content-Type: application/json" \
--h 'Authorization: Bearer YOUR_TEST_ACCESS_TOKEN'\
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"MLA","description" : "a description"}'
```
------------

----[mlb]----
``` curl
curl -X POST \
-h "Content-Type: application/json" \
--h 'Authorization: Bearer YOUR_TEST_ACCESS_TOKEN'\
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"MLB","description" : "a description"}'
```
------------


## 2. Configurar ambiente de teste

Antes de acessar o Simulador, você precisará concluir a configuração do seu ambiente de testes. Para isso, siga as etapas descritas abaixo.
 1. Faça login com as **credenciais produtivas do usuário vendedor de teste** em uma janela anônima. 
 2. Acesse [Suas Integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/) e crie uma aplicação com Mercado Pago Point como o produto a ser integrado. 
 3. No painel lateral esquerdo, acesse **Notificações > Webhooks** para configurar as notificações de teste. Tenha em mente que esta etapa precisa ser realizada na aba **Modo de teste**. Além disso, recomendamos que a URL configurada seja diferente daquela utilizada para receber notificações de pagamentos reais. Consulte a documentação sobre [Notificações](/developers/pt/docs/mp-point/additional-content/your-integrations/notifications/webhooks) para obter mais detalhes sobre como configurá-las.
 4. No painel lateral esquerdo, acesse **Testes > Credenciais de teste** para obter o **Access Token de teste do seu usuário vendedor**. O Simulador vai solicitá-lo para lhe dar acesso à ferramenta e atribuir um dispositivo virtual associado à sua integração.


![Credenciais de teste no Painel do desenvolvedor](/images/woocomerce/test-test-credentials.png)


## 3. Acessar Simulador 


Para acessar o Simulador, primeiro escolha a opção que corresponda ao seu tipo de integração. Em seguida, preencha todos os campos solicitados especificamente para este tipo de integração.

* **PDV mode:** Acesse o [Simulador no PDV mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true) e forneça o _Access Token_ **de teste do seu usuário vendedor de teste** (`TEST-XXXXX-XXXXX-XXXXXXX`). Com isso, o Simulador atribuirá um dispositivo virtual para você. 

 > Não é preciso modificar o modo de operação para utilizar o Simulador, uma vez que sua configuração padrão é no modo PDV.

* **Device mode:** Acesse o [Simulador no Device mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true) e forneça o _Access Token_ do seu **usuário vendedor de teste** (`TEST-XXXXX-XXXXX-XXXXXXX`), juntamente com seu ID de dispositivo obtido ao [listar seus dispositivos](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/payment-processing).

Depois de fornecer as informações de acordo com o modo selecionado no Simulador, clique no botão **Confirm** para acessar o dispositivo virtual.

![Tela do Simulador](/images/point-api/point-device-simulator.png)


## 4. Simular intenção de pagamento

Para testar diferentes fluxos de pagamento, preparamos diferentes cenários que permitem simular uma experiência real. 

Para iniciar a simulação, [crie uma intenção de pagamento](/developers/es/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents/post) e atribua-a ao seu dispositivo Simulador. No campo `amount`, selecione o valor de acordo com o estado desejado, conforme indicado na tabela abaixo.

> WARNING
>
> Importante
>
> Ao utilizar o Simulador no Device mode, é importante incluir `X-Test-Scope:sandbox` no cabeçalho para assegurar que a tentativa de pagamento seja direcionada ao dispositivo simulado.


| Status | Valor |
|---|---|
| Reversed | R$1100 |
| Rejected | R$1200 |
| Error | R$1300 |
| Successful | Qualquer outro valor diferente dos anteriores |



## 5. Obter intenção de pagamento do Simulador

Após criar a intenção de pagamento, clique no **botão verde** no dispositivo virtual para acessar a intenção de pagamento criada. Em seguida, confirme se o valor inserido inicialmente é o mesmo que está sendo exibido na tela do dispositivo.



## 5. Processar pagamento

Se a obtenção da intenção de pagamento for bem-sucedida, prossiga para realizar o pagamento clicando na animação do cartão. Isso representa o deslizamento do cartão no dispositivo. Em seguida, o processamento será iniciado e o dispositivo mostrará o resultado.

![Simulador com cartão](/images/point-api/point-simulator-process.png)

Em seguida, o processamento será iniciado e o dispositivo mostrará o resultado de acordo com o valor inserido.

| Status | Comportamento do Simulador |
|---|---|
| Reversed | A tela exibirá um erro e dará o detalhe “Reversed”. |
| Rejected | A tela exibirá um erro e dará o detalhe “Rejected”. |
| Error | A tela exibirá um erro e dará o detalhe “Error”. |
| Successful | Será exibida uma tela de pagamento bem-sucedido e fornecerá o detalhe “Approved”. |


> WARNING
>
> Importante
>
> Para consultar um pagamento feito pelo simulador através da [API de Pagamentos](/developers/pt/reference/payments/_payments_id/get), você deve usar o mesmo `access_token` de teste que está usando no Simulador.


## 7. Receber a notificação

Quando as intenções de pagamento são processadas, um alerta é enviado para a URL configurada como canal de notificação pelo integrador. No caso das notificações de pagamentos de teste realizados através do Simulador, elas serão enviadas para o canal que você definiu como a via de notificação ao configurar seu ambiente de teste com seu usuário vendedor. 

Para validar o recebimento e o correto funcionamento das notificações, vá para o registro de suas notificações. Lá você encontrará a notificação enviada com o estado da transação e poderá verificar os detalhes.

> Uma vez concluídos os testes com o Simulador, lembre-se de **substituir as credenciais de teste do usuário vendedor pelas credenciais produtivas do seu usuário real**.