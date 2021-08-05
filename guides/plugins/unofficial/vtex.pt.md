----[mla, mlm, mlu, mlc, mco, mpe]----

<!-- -->
> WARNING
>
> Importante
>
> Desculpe! No momento, esta página não está disponível em português.<br>
> [Ver documentação em espanhol](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex)

------------

----[mlb]----
# VTEX

## O que é VTEX?

VTEX é uma **plataforma e-commerce para sua loja virtual**, que permite processar pagamentos através do Mercado Pago.

Você poderá oferecer aos seus clientes a possibilidade de pagar com [cartão de crédito](#bookmark_condição_de_pagamento_cartão_de_crédito), [boleto bancário](#bookmark_condição_de_pagamento_boleto_bancário), [Pix](#bookmark_condição_de_pagamento_pix), [Mercado Pago Offline](#bookmark_condição_de_pagamento_mercado_pago_offline) no próprio checkout da sua loja ou [redirecionado para o site do Mercado Pago](#bookmark_condição_de_pagamento_checkout_pro).


## Etapas para configurar

Os **passos para começar a operar com Mercado Pago**, são os seguintes:

1. Crie uma [conta de vendedor](https://www.mercadopago.com.br/activities) no Mercado Pago caso ainda não tenha uma.
2. Cadastre uma afiliação de gateway de pagamento com o "Mercado Pago".
3. Configure as condições de pagamento Mercado Pago.
4. Configure device fingerprint.

## Cadastre uma afiliações de gateway

Uma afiliação de gateway é um conjunto de configurações que representam o processamento de seus pagamentos com o Mercado Pago.
Você poderá utilizar a **afiliação de gateway [MercadoPagoV1](#bookmark_criando_afiliação_de_gateway_mercadopagov1)**, onde possibilita processar pagamentos com cartão de crédito e também adicionar a **afiliação de gateway [MercadoPagoV2](#bookmark_criando_afiliação_de_gateway_mercadopagov2)** para o processamento de pagamento com [boleto bancário](#bookmark_condição_de_pagamento_boleto_bancário), [Pix](#bookmark_condição_de_pagamento_pix), [Mercado Pago Offline](#bookmark_condição_de_pagamento_mercado_pago_offline) e [Checkout Pro](#bookmark_condição_de_pagamento_checkout_pro).

### Criando afiliação de gateway MercadoPagoV1

> WARNING
>
> Importante
>
> Lembre-se que o gateway MercadoPagoV1 adiciona apenas a condição de pagamento cartão de crédito.

Para criar uma **afiliação de gateway de pagamento com o Mercado Pago**, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Afiliações de Gateways", clique no botão "+".
3. Clique no conector MercadoPagoV1.
4. Preencha os campos correspondentes.

| Campos | Dados necessários |
| --- | --- |
| Nome da afiliação | Defina o nome que identificará a sua Afiliação. |
| OAuth login | Não é utilizado. Deixe-o como está. |
| PublicKey | Refere-se às suas [credenciais]([FAKER][CREDENTIALS][URL]) do Mercado Pago. Complete com sua Public Key. |
| AccessToken | Refere-se às suas [credenciais]([FAKER][CREDENTIALS][URL]) do Mercado Pago. Complete com seu Access Token. |
| RefreshToken | Deixar em branco. |
| ExpiredTokenIn | Deixar em branco. |
| Merchant Account Id | Deixar em branco. |
| Processing Mode | Escolha aggregator, modo de processamento a partir de MercadoPagoV1. |
| CountryName | Selecione o país da sua loja. |
| SoftDescriptor | Indique o nome que vai aparecer para identificar a transação realizada na sua loja. |
| Description | Escreva uma breve descrição do seu negócio (o preenchimento é opcional). |
| CategoryId | Escolha a categoria dos produtos que você vende na sua loja. |
| Financial Institution | Deixar em branco. Preenchimento apenas se sua loja operar do "Chile". |
| External Installments | Sim. Utilização das condições de parcelamento diretamente de sua conta Mercado Pago. |
| Antifraud | Informe se deseja usar um antifraude. |
| Time Zone | Indique a região que define seu horário local. |
| OrderExpirationHours | Defina por quantas horas o sistema deve checar o status do pedido antes de sua expiração. Quando essa opção não é preenchida, é adotado o padrão de 192 horas. |
| MaxInstallments | Escolha a quantidade máxima de parcelas enviadas ao Mercado Pago. |
| Categoria Principal | Escolha a categoria que mais se encaixa com sua loja. |
| Captura de segurança antecipada | Você pode desativar a função ou escolher em quanto tempo quer realizar a captura (depois da aprovação da transação e da análise do antifraude). |

5. e clique em "Salvar".

![Setting affiliation in VTEX](/images/vtex/vtex_afiliacao_gateway_1.gif)

E pronto! Sua afiliação com o MercadoPagoV1 já está ativa!

### Criando afiliação de gateway MercadoPagoV2

> WARNING
>
> Importante
>
> Lembre-se que o gateway MercadoPagoV2 por enquanto adiciona apenas as condições de pagamento boleto bancário, Pix, Mercado Pago Offline e Checkout Pro.

Para criar uma **afiliação de gateway MercadoPagoV2**, siga os passos abaixo:

1. No painel de administração de sua loja, acesse “Configurações do módulo de pagamentos”.
2. Na aba "Afiliações de Gateways", clique no botão "+".
3. Clique no conector MercadoPagoV2.
4. Preencha os campos correspondentes:

| Campos | Dados necessários |
| --- | --- |
| Application Key | Refere-se às suas [credenciais]([FAKER][CREDENTIALS][URL]) do Mercado Pago. Complete com sua Public Key. |
| Application Token | Refere-se às suas [credenciais]([FAKER][CREDENTIALS][URL]) do Mercado Pago. Complete com seu Access Token. |
| Prazo de vencimento do boleto - Periodo de vencimiento del ticket | Prazo, em dias úteis, de vencimento do boleto. Caso o cliente efetue o pagamento após o prazo, o dinheiro será depositado na conta do mesmo no Mercado Pago. |
| Nome da loja - Nombre para resúmenes | Nome da loja, o valor deste campo aparecerá na fatura do cartão do cliente. |
| Parcelamento máximo - Cuotas máximas | Número máximo de parcelas disponíveis. |
| Categoría principal da loja - Categoría principal de la tienda | Categoria da loja. |
| Reembolso automático / manual | Selecionar se deseja que o Mercado Pago realize automaticamente o reembolso em caso de cancelamento ou se deseja reter o valor pago para o cliente usar em compras futuras. |
| Modo binário - binário | Configura se o pagamento poderá passar por revisão manual ou não. |
| Métodos de pagamento excluídos - Métodos de pago excluídos (visa, paypal, bolbradesco, oxxo...) | Métodos de pagamento a serem excluídos no momento da compra. |
| Tipos de pagamento excluídos - Tipos de pago excluidos (credit_card, bank_transfer, ticket...) | Tipos de pagamento a serem excluídos no momento da compra. |
| Modo de processamento - Modo de procesamiento | Configura se o pagamento será gateway ou agregador. |
| Integrator ID | Para programadores ou agências que realizam a integração. |
| Moeda - Moneda | Moeda a ser configurada (USD ou Local). |

5. Clique em "Salvar".

![Setting affiliation in VTEX](/images/vtex/vtex_afiliacao_gateway_v2.gif)

E pronto! Sua afiliação com o MercadoPagoV2 já está ativa!


## Configurar condições de pagamento

Após ter criado sua afiliação com o Mercado Pago, você tem a opção de oferecer em sua loja pagamentos com [cartão de crédito](#bookmark_condição_de_pagamento_cartão_de_crédito), [boleto bancário](#bookmark_condição_de_pagamento_boleto_bancário), [Pix](#bookmark_condição_de_pagamento_pix), [Mercado Pago Offline](#bookmark_condição_de_pagamento_mercado_pago_offline) e também pagamentos via [Checkout Pro](#bookmark_condição_de_pagamento_checkout_pro).

> WARNING
>
> Importante
>
> Certifique em sua loja de aplicativos da VTEX se o App **Mercado Pago Payment APP** esteja instalado para utilização das condições de pagamento **MercadoPagoOff, MercadoPagoPro e MercadoPagoWallet** ou solicite a instalação pela equipe VTEX sob demanda através de ticket no [Support VTEX](https://support.vtex.com). <br>

<!-- -->
> NOTE
> 
> Nota
>
> As mudanças nas Condições de pagamento podem levar até 10 minutos para serem aplicadas. <br>

### Condição de pagamento cartão de crédito

Para criar uma **condição de pagamento cartão de crédito** utilizando sua afiliação com o MercadoPagoV1, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+".
3. Na seção "Cartão de Crédito", escolha qual bandeira irá adicionar ao meio de pagamento.
4. Informe o "Nome da regra" para facilitar a identificação e ative a condição de pagamento no campo "Status".
5. Informe sua afiliação com o MercadoPagoV1, no campo "Processar com a afiliação".
6. Em opções de parcelamento, escolha parcelamento "Automático", onde utiliza as condições de **parcelamento diretamente de sua conta Mercado Pago**.
7. Clique em "Salvar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_pagamento_cartao_2.gif)

### Condição de pagamento boleto bancário

Para criar uma **condição de pagamento boleto bancário utilizando sua afiliação com o Mercado Pago**, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+".
3. Na seção "Boleto", escolha "Boleto Bancário" para adicionar ao meio de pagamento.
4. Informe o "Nome da regra" para facilitar a identificação e ative a condição de pagamento no campo "Status".
5. Informe sua afiliação com o MercadoPagoV2, no campo "Processar com a afiliação".
6. Clique em "Salvar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_pagamento_boleto_3.gif)

### Condição de pagamento Pix

#### Requisito prévio
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Obtenha uma chave Pix

Para configurar Pix como condição de pagamento, você deve ter cadastrada uma chave Pix na conta do vendedor. Este dado é único, serve para identificar sua conta e permitirá que você utilize as funcionalidades do meio de pagamento.

[Conheça como criar uma chave Pix](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required)

> Considere que o registro da chave Pix pode levar alguns minutos.

Para **criar uma condição de pagamento Pix utilizando sua afiliação com o [MercadoPagoV2](#bookmark_criando_afiliação_de_gateway_mercadopagov2)**, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+".
3. Na seção “Pagamento Instantâneo”, escolha o meio de pagamento Pix.
4. Informe o "Nome da regra" para facilitar a identificação e ative a condição de pagamento no campo "Status".
5. Informe sua afiliação com o MercadoPagoV2, no campo "Processar com a afiliação".
6. Clique em "Salvar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_pagamento_pix.gif)

### Condição de pagamento Mercado Pago Offline

Para criar uma **condição de pagamento Mercado Pago Offline, onde poderá contar com Boleto Bancário e Pagamentos com PEC (em lotéricas), utilizando sua afiliação com o MercadoPagoV2**, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+".
3. Na seção Outro, selecione a condição de pagamento "MercadoPagoOff".
4. Informe o "Nome da regra" para facilitar a identificação e ative a condição de pagamento no campo "Status".
5. Informe sua afiliação com o MercadoPagoV2, no campo "Processar com a afiliação".
6. Clique em "Salvar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_mercado_pago_offline.gif)

E pronto! Sua condição de pagamento Mercado Pago Offline já está ativa!

### Condição de pagamento Checkout Pro

O [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction) é a integração que te permite cobrar através do Mercado Pago, contando com as meios de pagamentos como Pix, boleto parcelado, débito virtual da Caixa e carteira digital do Mercado Pago.

#### Configuração do meio de pagamento Mercado Pago

**O comprador será redirecionado ao site do Mercado Pago** e uma vez finalizado o processo, voltará para sua loja.

Para criar essa condição de pagamento, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+".
3. Na seção "Outro", selecione a condição de pagamento "Mercado Pago".
4. Informe o "Nome da regra" para facilitar a identificação e ative a condição de pagamento no campo "Status".
5. Informe sua afiliação com o MercadoPagoV1, no campo "Processar com a afiliação".
6. Clique em "Salvar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_redirect_4.gif)

#### Configuração do meio de pagamento Mercado Pago PRO

**O comprador finalizará o pagamento no Mercado Pago via formulário web modal** diretamente em sua loja.

Para criar essa condição de pagamento, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+".
3. Na seção "Outro", selecione a condição de pagamento "MercadoPagoPro ".
4. Informe o "Nome da regra" para facilitar a identificação e ative a condição de pagamento no campo "Status".
5. Informe sua afiliação com o MercadoPagoV2, no campo "Processar com a afiliação".
6. Clique em "Salvar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_pro_4.gif)

#### Configuração do meio de pagamento Mercado Pago Wallet

**O comprador finaliza o pagamento com a carteira do Mercado Pago exclusivamente de usuários cadastrados** e uma vez concluído o processo, voltará para sua loja.

Para criar essa condição de pagamento, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+".
3. Na seção "Outro", selecione a condição de pagamento "MercadoPagoWallet".
4. Informe o "Nome da regra" para facilitar a identificação e ative a condição de pagamento no campo "Status".
5. Informe sua afiliação com o MercadoPagoV2, no campo "Processar com a afiliação".
6. Clique em "Salvar".
<p>&nbsp;</p>

![Setting payments in VTEX](/images/vtex/vtex_condicao_wallet_4.gif)


## Configurando o parcelamento em sua conta Mercado Pago

1. Acesse sua [conta Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/business) e clique em "Seu negócio"
2. Clique na opção "Configurações", navegue até o campo "Oferecer parcelas sem acréscimo" e clique em "Ativar".
3. Escolha "Quantas parcelas você quer oferecer?" e clique em "Ativar" para confirmar as alterações.
<p>&nbsp;</p>

![Setting affiliation in VTEX](/images/vtex/vtex-account-installment-7.gif)

E pronto! Você está oferecendo parcelamento sem acréscimo, assumindo as tarifas de parcelamento que você configurou.

## Obtenha aprovação mais rápida enviando o device fingerprint

O Mercado Pago possui suas próprias ferramentas de prevenção de fraudes. Sempre que possível, **recomendamos que envie informações sobre o comportamento do cliente para detectar movimentos incomuns e evitar transações fraudulentas**. Não se preocupe, cuidamos dos dados de seus clientes e não os compartilhamos com ninguém.

Para configurar o device fingerprint, siga os passos abaixo:

1. No painel de administração de sua loja, acesse Checkout do módulo "Configurações da Loja".
2. Clique no ícone "editar", referente a configuração de seu site.
3. Acessar a aba "Código" e clique em "checkout5-custom.js" no módulo arquivos.
4. Copiar e colar o seguinte código e clique em "Salvar".
<p>&nbsp;</p>

```javascript
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```
<br>

![Setting deviceid in VTEX](/images/vtex/vtex_deviceid_6.gif)

## Entendendo sobre os principais logs da VTEX

**Os logs permitem revisar a informação que retorna Mercado Pago** e VTEX expõe para poder ter um maior entendimento de o que ocorreu com uma transação. Também em caso de modificação ou ativação de novos meios de pagamento, nos dão a possibilidade de poder validar se tudo está funcionando segundo o previsto. Por último, provém um maior entendimento às equipes comerciais para que possam dar um melhor suporte aos vendedores e converter se em uma primeira instância de suporte.

Acesse a transação da VTEX, então busque pelo LOG que contenha o status response e clique em _ver mais_.

Os dados mais significativos são os seguintes:

| Campo | Dado | Descrição |
| --- | --- | --- |
| ID | 10302316 | Número da transação de Mercado Pago. |
| Payment_method_id | visa | Meio de pagamento. |
| Payment_type_id | credit_card | Meio de pagamento. |
| Status | authorized | Estado do pagamento. |
| Status_detail | pending_capture | Detalhe do estado do pagamento. |
| External_reference | 503451 | Identificador da VTEX enviado a Mercado Pago. |
| First_six_digits | 450995 | Bin do cartão de crédito. |
| Processing_mode | agregador | Modo de processamento do pagamento. |

Quando confrontado com uma rejeição, é muito importante rever o `status_detail` que especifica o motivo do mesmo.

Para mais informações acesse o link [Resultados da criação de uma cobrança](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/handling-responses).

## Erros comuns

Os erros mais comuns são os seguintes:

| Mensagem | Significado |
| --- | --- |
| `unauthorized_use_of_live_credentials` | Isso significa que as credenciais da conta do Mercado Pago não estão ativadas. Você deve ir para a página de credenciais e ativá-las |
| `invalid installments` | Está sendo feita uma tentativa de processar o pagamento com uma taxa que não está ativada. Você deve acessar a configuração do método de pagamento e definir as taxas como "Automático". |
| `invalid_users` | Você está tentando pagar com o mesmo usuário que está cobrando. Repetir o pagamento com um e-mail de pagador diferente.|
| `Cannot infer Payment Method` | Você está tentando pagar com um cartão que não seja o tipo de cartão selecionado (por exemplo, um número de cartão de crédito foi inserido na opção de cartão de débito). |

> WARNING
>
> Importante
>
> Antes de iniciar sua operação em produção, você deve [ativar suas credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). Caso já tenha realizado este passo o link não será apresentado.

<!-- -->
> Para mais informação, visite o site [oficial da VTEX](https://help.vtex.com/) e o [site de status da Vtex](https://status.vtex.com/).

------------
