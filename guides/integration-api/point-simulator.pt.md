# Simulador Point

Esta ferramenta permite que você teste sua integração com segurança, como se você estivesse em sua loja com um dispositivo físico.
Com este simulador, você poderá criar uma intenção de pagamento e processá-la desde o dispositivo virtual, simulando os possíveis status que um pagamento pode apresentar.

O simulador possui dois modos de uso:

* **PDV Mode**: simula a integração de um sistema completo (dispositivo e PDV) com nossa API de Integrações. Acesse o [Simulador PDV Mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true)
* **Device Mode**: simula um dispositivo de ponto virtual para que você possa testar sua integração a partir de HTTP requests. Acesse o [Simulador Device Mode](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true).

## Como usar o simulador

### 1. Configure suas credenciais

Ao usar o simulador pela primeira vez, você precisará inserir suas chaves e selecionar um dos dispositivos disponíveis.

Para usar o **PDV Mode**, você precisará de sua chave Access Token. Se você estiver usando um Access Token de teste, o simulador atribuirá a você um dispositivo virtual.

Ao usar o **Device Mode**, você deve inserir seu Access Token e sua Device ID obtida quando você [lista seus dispositivos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/integration-api/create-payment-intent#bookmark_criar_intenção_de_pagamento)

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

Se você executou as etapas de configuração para as [notificações de Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/integration-api/integration), é hora de você revisar seus registros. Lá você verá que a notificação do status da transação foi enviada.


> PREV_STEP_CARD_PT
>
> Configure suas notificações
>
> Explicamos como começar a receber notificações de Webhooks.
>
> [Configure suas notificações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/integration-api/notifications)
