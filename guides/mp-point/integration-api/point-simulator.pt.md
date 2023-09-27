# Teste sua integração com o Simulador Point

O Simulador Point é uma ferramenta que permite interagir com vários endpoints de nossa API para integrar os Pontos de Venda com os dispositivos. Seu objetivo principal é ajudar a entender o fluxo de criação e cancelamento de uma tentativa de pagamento.

Tenha em mente que essa ferramenta não é uma réplica exata do dispositivo, mas sim uma abordagem educativa e projetada para familiarizar com nossa API.

O simulador possui dois modos de uso:

* **PDV mode**: simula a integração de um sistema completo (dispositivo e Ponto de Venda) com nossa API de Integrações. Acesse o [Simulador PDV Mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true).

 > Para usar o simulador não é necessário executar o serviço [Alterar o modo de operação](/developers/pt/reference/integrations_api/_point_integration-api_devices_device-id/patch) porque, por padrão, o simulador funciona no modo PDV.

* **Device mode**: simula um dispositivo de ponto virtual para que você possa testar sua integração a partir de HTTP requests. Acesse o [Simulador device mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true).


## Como usar o simulador

### 1. Gerar ambiente de teste

Para começar a testar integrações e fluxos de pagamento com o Simulador Point, você precisará gerar [usuários de teste](developers/pt/docs/mp-point/additional-content/your-integrations/test/accounts) e acessar suas credenciais de produção.

Se desejar, você também pode criar usuários de teste usando o seguinte comando:

``` curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"MLM","description" : "a description"}'
```

### 2. Configure suas credenciais

Ao usar o simulador pela primeira vez, você precisará inserir [suas credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). Para obtê-las, acesse [Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications), opção **Minhas credenciais > Credenciais de teste**.

Além disso, você precisará selecionar um dos seus dispositivos disponíveis.

* **PDV mode:** você deve inserir seu `access-token` de teste (`TEST-XXXXX-XXXXX-XXXXXXX`) e o simulador atribuirá a você um dispositivo virtual.

* **Device mode:** você deve inserir seu `access-token` de teste (`TEST-XXXXX-XXXXX-XXXXXXX`) e seu ID de dispositivo obtido em [lista seus dispositivos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/integration-api/create-payment-intent#https://www.mercadopago.com.br/developers/pt/guides/in-person-payments/integration-api/create-payment-intent#bookmark_obtenha_a_lista_de_seus_dispositivos_dispon%C3%ADveis).

### 3. Simule uma intenção de pagamento

Preparamos diferentes cenários que permitem simular uma experiência real. Para isso, você deve selecionar o valor de acordo com o estado desejado, conforme indicado na tabela abaixo:

| Estado | Valor |
|---|---|
| Reversed | R$1100 |
| Rejected | R$1200 |
| Error | R$1300 |
| Successful | Qualquer outro valor diferente dos anteriores |

> WARNING
>
> Importante
>
> Se você usar o Simulador no device mode, lembre-se de usar `X-Test-Scope:sandbox` no cabeçalho para garantir que a tentativa de pagamento chegue ao dispositivo simulado.


### 4. Obtenha a intenção de pagamento do dispositivo

Após criar a intenção de pagamento, clique no botão verde do dispositivo virtual para obter a intenção de pagamento criada.

Quando isso acontecer, verifique se o valor inserido inicialmente corresponde ao valor mostrado na tela do dispositivo.


### 5. Deslize o cartão e processe o pagamento

Se o passo anterior for bem-sucedido, clique na animação do cartão. Isso representa o deslizamento do cartão no dispositivo. Em seguida, o processamento será iniciado e o dispositivo mostrará o resultado.

> WARNING
>
> Importante
>
> Para consultar um pagamento feito pelo simulador através da [API de Pagamentos](/developers/pt/reference/payments/_payments_id/get), você deve usar o mesmo `access-token` de teste que está usando no Simulador.


### 6. Receba a notificação

> As notificações de pagamento de teste feitas pelo Simulador serão enviadas pelo mesmo canal que você definiu como método de notificação ao configurar sua integração. Consulte [Configurar notificações](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/notifications) em caso de dúvidas.

Após o processamento da intenção de pagamento, vá para o registro de suas notificações. Lá você verá que a notificação do estado da transação foi enviada e poderá verificar os detalhes.