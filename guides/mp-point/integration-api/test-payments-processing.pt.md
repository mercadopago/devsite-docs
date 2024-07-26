# Testar o processamento de pagamentos

Para testar o processamento correto de pagamentos com o Mercado Pago Point, você precisará realizar uma série de transações e suas respectivas validações utilizando nossa API.

> WARNING
>
> Importante
>
> Nessas transações, utilize **cartões reais** e realize operações com **valores mínimos**. Este fluxo de teste garante que o dinheiro será reembolsado no cartão utilizado para pagamento.

## Criar e processar uma intenção de pagamento

Para testar a correta criação e processamento de uma intenção de pagamento, siga os passos abaixo.

1. Faça uma requisiçao para o endpoint ----[mlb]----[Criar uma intenção de pagamento](/developers/pt/reference/integrations_api_paymentintent_mlb/_point_integration-api_devices_deviceid_payment-intents/post)------------ ----[mla, mlm]----[Criar uma intenção de pagamento](/developers/en/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents/post)------------ utilizando suas credenciais de produção. Você deve associá-la ao dispositivo Point previamente configurado, substituindo o valor `deviceId` no *path* da chamada pelo valor correspondente ao seu identificador. Além disso, utilize um valor que permita identificar essa intenção de teste em seu sistema por meio do campo `external_reference`, e lembre-se de ter um valor mínimo no campo `amount`.

> NOTE
>
> Nota
>
> Recomendamos que, **antes de processar a intenção de pagamento**, valide sua correta criação fazendo uma requisição para [Buscar intenção de pagamento](/developers/pt/reference/integrations_api/_point_integration-api_payment-intents_paymentintentid/get) utilizando o `id` obtido na resposta. Embora não seja obrigatório, isso permitirá verificar se sua integração está funcionando corretamente e comparar as informações da intenção com aquelas recebidas por meio das notificações Webhooks.

2. Processe a intenção de pagamento **pressionando o botão para iniciar a cobrança** no seu dispositivo Point e seguindo os passos indicados na tela.

3. Certifique-se de ter recebido as notificações Webhooks do Mercado Pago para cada um dos eventos ocorridos.

| Tópico | Evento | Valor de Referência |
|---|---|---|
| Integrações Point | Criação da intenção de pagamento | Você identificará a intenção de pagamento pelo campo `external_reference`, que terá o mesmo valor atribuído no momento da criação. |
| Integrações Point | Finalização da intenção de pagamento | Você identificará a intenção de pagamento pelo campo `external_reference`, que terá o mesmo valor atribuído no momento da criação. Além disso, o campo `payment.id` permitirá identificar o pagamento e comparar essa informação com o valor recebido na notificação de Pagamentos. |

> NOTE
>
> Nota
>
> Recomendamos validar o sucesso do processamento do pagamento enviando um **GET** para a API [v1/payments](/developers/pt/reference/payments/_payments_id/get), utilizando o `id` do pagamento obtido em suas notificações.

## Reembolsar um pagamento

Para confirmar que o fluxo de pagamentos está funcionando corretamente, realize o reembolso da transação processada na etapa anterior diretamente do seu dispositivo Point. Dessa forma, o valor referente a essa etapa de testes será devolvido.

Para isso, siga os passos abaixo.

1. Na tela principal do seu dispositivo Point, deslize até chegar à aba **Mais opções**.
2. Pressione o botão **Ver mais** dentro da seção "Atividade com este Point". Você acessará os detalhes da operação realizada.
3. Na tela de "Detalhes da operação", abaixo dos detalhes, selecione a opção **Devolver dinheiro**. 
4. Confirme que deseja devolver o dinheiro daquela operação de teste.

A tela de "Detalhes da operação" agora deverá exibir o valor devolvido e, ao voltar para "Mais opções", você poderá ver essa nova atividade com o dispositivo.

## Criar uma intenção de pagamento e rejeitar o pagamento

Para validar que o fluxo de rejeição de pagamentos funciona corretamente, siga os próximos passos.

1. Faça uma requisiçao para o endpoint ----[mlb]----[Criar uma intenção de pagamento](/developers/pt/reference/integrations_api_paymentintent_mlb/_point_integration-api_devices_deviceid_payment-intents/post)------------ ----[mla, mlm]----[Criar uma intenção de pagamento](/developers/en/reference/integrations_api/_point_integration-api_devices_deviceid_payment-intents/post)------------ utilizando suas credenciais de produção. Você deve associá-la ao dispositivo Point previamente configurado, substituindo o valor `deviceId` no *path* da chamada pelo valor correspondente ao seu identificador. Além disso, utilize um valor que permita identificar essa intenção de teste em seu sistema por meio do campo `external_reference`, e lembre-se de ter um valor mínimo no campo `amount`.

2. Obtenha a intenção de pagamento no dispositivo Point e pressione o botão **MMais opções** no canto inferior direito da tela.

3. Na tela, aparecerá uma mensagem perguntando se deseja sair sem concluir o pagamento. Clique em **Sim** para rejeitar o pagamento gerado.

4. Certifique-se de ter recebido as notificações Webhooks do Mercado Pago para cada um dos eventos ocorridos.

| Tópico | Evento | Valor de referência |
|---|---|---|
| Integraciones Point | Criação da intenção de pagamento | Você identificará a intenção de pagamento pelo campo `external_reference`, que terá o mesmo valor atribuído no momento da criação. |
| Integraciones Point | Cancelamento da intenção de pagamento | Você identificará a intenção de pagamento pelo campo `external_reference`, que terá o mesmo valor atribuído no momento da criação. |
