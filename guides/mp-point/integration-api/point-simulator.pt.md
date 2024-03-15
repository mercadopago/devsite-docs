# Simulador Point

O Simulador Point é uma ferramenta que permite interagir com vários endpoints de nossa API para integrar os Pontos de Venda com os dispositivos. Seu objetivo principal é ajudar a entender o fluxo de criação e cancelamento de uma tentativa de pagamento.

Por esse motivo, o Simulador é uma ferramenta que também permitirá testar o funcionamento de sua integração Point e do processamento de pagamentos. Embora não replique exatamente o dispositivo, sua finalidade é educacional, para ajudar na familiarização com nossa API.

O simulador possui dois modos de uso:

 * **PDV mode**: simula a integração de um sistema completo (dispositivo e Ponto de Venda) com nossa API de Integrações.

 * **Device mode**: simula um dispositivo de ponto virtual para que você possa testar sua integração a partir de HTTP requests. 


Para usar o simulador, siga os passos abaixo.

## 1. Gere o ambiente de teste

Para começar a testar integrações e fluxos de pagamento com o Simulador Point, você precisará gerar um [usuário de teste](/developers/pt/docs/mp-point/additional-content/your-integrations/test/accounts) no modo vendedor, e acessar suas **credenciais de produção**. 

> WARNING
> 
> Importante
>
> Embora o Simulador peça as credenciais de teste, você precisará das credenciais produtivas para acessar a conta do vendedor e suas configurações.

Para gerar essas credenciais, acesse [Suas Integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/), selecione o aplicativo onde você integrou o Mercado Pago Point e, na seção **Contas de teste**, clique no botão **+ Criar conta de teste**. Você deverá preencher os campos solicitados de acordo com as instruções.

![Criar conta](/images/woocomerce/test-create-account.gif)


Se desejar, você também pode criar usuários de teste usando o seguinte comando:

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


## 2. Configure o ambiente de teste

Antes de acessar o Simulador, você precisará concluir a configuração do seu ambiente de testes. Siga as instruções abaixo para fazé-lo. 
 1. Faça login com as **credenciais produtivas do usuário vendedor de teste** em uma janela anônima. 
 2. Acesse [Suas Integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/) e crie um aplicativo com Mercado Pago Point como o produto a ser integrado. 
 3. Configure suas notificações de teste acessando a opção **Notificações > Webhooks** no painel lateral esquerdo. Tenha em mente que você deverá fazer isso na aba **Modo de teste** e é recomendável que a URL configurada seja diferente daquela em que você receberá as notificações de seus pagamentos reais. Consulte a documentação sobre [Notificações](/developers/pt/docs/mp-point/additional-content/your-integrations/notifications/webhooks) para obter mais detalhes sobre como configurá-las.
 4. No painel lateral esquerdo, acesse **Testes > Credenciais de teste** para obter o **Access Token de teste do seu usuário vendedor**. O Simulador vai solicitá-lo para lhe dar acesso à ferramenta e atribuir um dispositivo virtual associado à sua integração.


![Credenciais de teste no Painel do desenvolvedor](/images/woocomerce/test-test-credentials.png)


## 3. Acesse o Simulador 

Para acessar o Simulador, selecione a opção que corresponda ao seu tipo de integração e preencha os campos solicitados para cada um. 

* **PDV mode:** Acesse o [Simulador no PDV mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true) e forneça o _Access Token_ de teste do seu usuário vendedor de teste (`TEST-XXXXX-XXXXX-XXXXXXX`) Ao fazer isso, o Simulador irá atribuir um dispositivo virtual para você. 

 > Não é necessário alterar o modo de operação para utilizar o Simulador, pois ele já opera, por padrão, no modo PDV.

* **Device mode:** Acesse o [Simulador no Device mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true) e forneça o _Access Token_ do seu usuário vendedor de teste (`TEST-XXXXX-XXXXX-XXXXXXX`), juntamente com seu ID de dispositivo obtido ao [listar seus dispositivos](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/payment-processing).

Depois de fornecer as informações de acordo com o modo selecionado no Simulador, clique no botão Confirm para acessar o dispositivo virtual.

![Tela do Simulador](/images/point-api/point-device-simulator.png)


## 4. Simule a intenção de pagamento

Para testar diferentes fluxos de pagamento, preparamos diferentes cenários que permitem simular uma experiência real. 

Para iniciar a simulação, [crie uma intenção de pagamento](/developers/es/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents/post) e atribua-a ao seu dispositivo Simulador. No campo `amount`, você deve selecionar o valor de acordo com o estado desejado, conforme indicado na tabela abaixo.

> WARNING
>
> Importante
>
> Se você usar o Simulador no device mode, lembre-se de usar `X-Test-Scope:sandbox` no cabeçalho para garantir que a tentativa de pagamento chegue ao dispositivo simulado.


| Status | Valor |
|---|---|
| Reversed | R$1100 |
| Rejected | R$1200 |
| Error | R$1300 |
| Successful | Qualquer outro valor diferente dos anteriores |



## 5. Obtenha a intenção de pagamento do Simulador

Após criar a intenção de pagamento, clique no **botão verde** do dispositivo virtual para obter a intenção de pagamento criada.

Quando isso acontecer, verifique se o valor inserido inicialmente corresponde ao valor mostrado na tela do dispositivo.


## 5. Processe o pagamento

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


## 7. Receba a notificação

Quando as intenções de pagamento são processadas, um alerta é enviado para a URL configurada como canal de notificação pelo integrador. No caso das notificações de pagamentos de teste realizados através do Simulador, elas serão enviadas para o canal que você definiu como a via de notificação ao configurar seu ambiente de teste com seu usuário vendedor. 

Para validar o recebimento e o correto funcionamento das notificações, vá para o registro de suas notificações. Lá você encontrará a notificação enviada com o estado da transação e poderá verificar os detalhes.

> Uma vez concluídos os testes com o Simulador, lembre-se de **substituir as credenciais de teste do usuário vendedor pelas credenciais produtivas do seu usuário real**.