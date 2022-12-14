# Simulador Point

Esta ferramenta permite que você teste sua integração com segurança, como se você estivesse em sua loja com um dispositivo físico.
Com este simulador, você poderá criar uma intenção de pagamento e processá-la desde o dispositivo virtual, simulando os possíveis status que um pagamento pode apresentar.

O simulador possui dois modos de uso:

* **PDV mode**: simula a integração de um sistema completo (dispositivo e PDV) com nossa API de Integrações. Acesse o [Simulador PDV Mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true).
* **Device mode**: simula um dispositivo de ponto virtual para que você possa testar sua integração a partir de HTTP requests. Acesse o [Simulador device mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true).

> Para usar o simulador não é necessário executar o serviço [Alterar o modo de operação](/developers/pt/reference/integrations_api/_point_integration-api_devices_device-id/patch), pois o simulador funciona por padrão no modo PDV.

## Como usar o simulador

### 1. Configure suas credenciais

Ao usar o simulador pela primeira vez, você precisará inserir suas chaves e selecionar um dos dispositivos disponíveis.

* **PDV mode:** você deve inserir seu `access-token` de teste e o simulador atribuirá a você um dispositivo virtual.

* **Device mode:** você deve inserir seu `access-token` de teste e seu ID de dispositivo obtido em [lista seus dispositivos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/integration-api/create-payment-intent#https://www.mercadopago.com.br/developers/pt/guides/in-person-payments/integration-api/create-payment-intent#bookmark_obtenha_a_lista_de_seus_dispositivos_dispon%C3%ADveis).

> WARNING
>
> Importante
>
> * Lembre-se que para usar o simulador você deve configurar um `access-token` de teste (`TEST-XXXXX-XXXXX-XXXXXXX`) e você pode obtê-lo em suas [integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications), opção **Minhas credenciais > Credenciais de teste**.
> * Para efetuar uma consulta de um pagamento efetuado pelo simulador através da [API de Pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get), deve-se utilizar o `access-token` de teste (o mesmo utilizado no simulador).
> * Se você for usar o modo dispositivo do simulador, lembre-se que deve colocar `X-Test-Scope:sandbox` no header para garantir que a tentativa de pagamento chegue ao dispositivo simulador.

### 2. Simule uma intenção de pagamento

Preparamos diversos cenários que permitem simular uma experiência real. Para fazer isso, você deve selecionar o valor de acordo com o status que deseja obter:

| Estado | Valor |
|---|---|
| Reversed | $1100 |
| Rejected | $1200 |
| Error | $1300 |
| Successful | Qualquer outro valor diferente dos anteriores |

### 3. Obter a intenção de pagamento no dispositivo

Uma vez criada a intenção de pagamento, deve-se clicar no botão verde do dispositivo virtual para obter a intenção de pagamento criada. Uma vez encontrada, você pode verificar se o valor inicialmente inserido corresponde ao mostrado na tela do dispositivo.

### 4. Passe o cartão e processe o pagamento

Se a etapa anterior foi bem-sucedida, você pode clicar na animação do cartão, que representa o passe do cartão no dispositivo. O processamento começará imediatamente e o dispositivo exibirá o respectivo resultado.

### 5. Receba a notificação

Se você executou as etapas de configuração para as [notificações de Webhooks](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/notifications), é hora de você revisar seus registros. Lá você verá que a notificação do status da transação foi enviada.

> NOTE
>
> Nota
>
> O simulador permitirá que você faça pagamentos de teste. Você pode consultar todas as informações correspondentes na seção [API de pagamento](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments_id/get).