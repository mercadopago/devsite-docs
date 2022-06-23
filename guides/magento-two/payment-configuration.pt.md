# Configure os meios de pagamento

Para configurar o módulo e aceitar pagamentos por cartão de crédito ----[mlb]----, Pix------------ e ticket no Checkout Transparente, siga estas etapas:

## Configure suas credenciais

Primeiro, você deve inserir suas credenciais para poder habilitar os meios de pagamento disponíveis no país de origem da loja. Para isso, siga os passos abaixo.

1. Vá para o menu Stores > Configuration > Sales > Payment Methods

2. Para essa etapa, recomendamos que você tenha suas [Credenciais]([FAKER][CREDENTIALS][URL]) em mãos. Em seguida, acesse a opção **Mercado Pago > Credenciais**. Lá você encontrará os campos **Public key** e **Access token**, que você deve preencher com suas credenciais.

Existem dois tipos de credenciais:

* **Modo sandbox**: As credenciais neste modo são usadas para fins de teste.
* **Modo de produção**: As credenciais neste modo são usadas para receber pagamentos em produção. Para usar as credenciais do modo de produção, você deve ativá-las. Veja mais informações em [Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/credentials)

3. Depois de definir suas credenciais, clique no botão **Save Config** no canto superior direito.

> É importante que você salve suas credenciais antes de continuar porque isso habilitará os meios de pagamento disponíveis em seu país.

## Habilitar o meio de pagamento

O próximo passo é habilitar o meio de pagamento. Para isso, você deve ir para o meio que deseja habilitar:

* Para ativar **pagamentos com cartão**, vá para Checkout > Credit and Debit Card.
* Para habilitar **pagamentos de boleto**, vá para Custom Checkout > Offline Payment Methods (Ticket).
----[mlb]----
* Para habilitar **pagamentos Pix**, vá para Custom Checkout > Pix.
------------

----[mlb]----
> WARNING
>
> Importante
>
> Antes de configurar Pix como meio de pagamento, leve em consideração os seguintes passos: <br/> <br/>
> * [Verifique a versão mais recente](https://marketplace.magento.com/mercadopago-core.html#product.info.details.release_notes) e atualize seu plugin do Mercado Pago. <br>
> * Cadastre sua chave no Mercado Pago. Do contrário, seus clientes não conseguirão concluir a compra. Aqui nós contamos [como fazer](https://www.mercadopago.com.br/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).
> [Clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/receiving-payment-by-pix) para mais informações sobre pagamentos com Pix no Checkout Transparente. 
------------

## Configurar o Checkout para pagamentos com cartões de crédito e débito

Ao configurar essa forma de pagamento, o comprador poderá efetuar pagamentos com os cartões de crédito e débito disponíveis no país onde a loja foi instalada.
Compartilhamos um detalhe das diferentes opções que você encontrará para configurá-lo:


| Campo | Descrição
| --- | --- |
| Checkout Transparente - Cartões de crédito e débito | A configuração desse campo oferecerá ao comprador a opção de efetuar pagamentos com cartão de crédito e débito disponível em seu país. Por padrão, o método de pagamento com cartão já está ativado. Para desativá-lo, basta alterar a opção **Habilitado** de "Sim" para "Não". |
| Título do meio de pagamento | Essa opção permite que você altere o título do meio de pagamento que aparecerá para o comprador. |
| Identificação na fatura do cartão de crédito | Texto que identificará o pagamento na fatura do cartão. Esta funcionalidade não está disponível em todos os países. |
| Modo binário | Quando ativado, este modo de processamento só resultará no status de um pagamento como `approved` ou` rejected`. Não existirão estados intermediários como `in_proccess` ou` pending`. |
| Banner do Checkout | Por padrão, o plugin Mercado Pago irá configurar um banner com os meios de pagamento disponíveis de acordo com o seu país. Se você quiser, pode personalizá-lo alterando a URL da imagem. |
| Posição do meio de pagamento | Permite alterar a posição em que o meio de pagamento está disponível para o comprador no fluxo de checkout. |
| Cupons de desconto do Mercado Pago | Se você habilitar essa opção, aparecerá um campo no qual o comprador poderá inserir seu cupom de desconto criado no Mercado Pago. |

Em seguida, clique em "Save Config" para salvar suas preferências.


## Configurar o Checkout Transparente com métodos de pagamento offline

A configuração dessa forma de pagamento oferecerá ao comprador a opção de realizar pagamentos com os meios de pagamento offline (Boleto e Caixa eletrônico) disponíveis no país onde a loja foi instalada.
Compartilhamos um detalhe das diferentes opções que você encontrará para configurar o seu checkout personalizado:

| Campo | Descrição
| --- | --- |
| Checkout Transparente - Métodos de pagamento desativados (ticket) | A configuração desse campo oferecerá ao comprador a opção de realizar pagamentos com os meios de pagamento disponíveis em seu país. Por padrão, o método de pagamento com cartão já está ativado. Para desativá-lo, basta alterar a opção **Habilitado** de "Sim" para "Não". |
| Título do meio de pagamento | Esta opção permite que você altere o título do meio de pagamento que aparecerá para o comprador. |
| Banner do Checkout | Por padrão, o plugin Mercado Pago irá configurar um banner com os meios de pagamento disponíveis de acordo com o seu país. Se você quiser, pode personalizá-lo alterando a URL da imagem. |
| Exclua métodos de pagamento | Por padrão, o plugin irá mostrar ao comprador todas as formas de pagamento dos tipos ticket e ATM. Você pode escolher apenas os meios que deseja aceitar e deixar desmarcado aqueles que não deseja oferecer. |
| Posição da forma de pagamento | Permite alterar a posição em que o meio de pagamento está disponível para o comprador no fluxo de checkout. |
| Cupons de desconto Mercado Pago | Se você habilitar essa opção, aparecerá um campo no qual o comprador poderá inserir seu cupom de desconto criado no Mercado Pago. |

Em seguida, clique em "Save Config”" para salvar suas preferências.

## Devoluções e cancelamentos

**Devoluções** são transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta em sua conta ou na fatura do cartão de crédito, o valor pago na aquisição de determinado produto ou serviço.

**Cancelamentos** acontecem quando uma compra é realizada mas o pagamento ainda não foi aprovado por algum motivo. Neste caso, considerando que a transação não foi processada e o estabelecimento não recebeu qualquer valor, a compra é cancelada e não ocorre cobrança.

Nas seções abaixo você encontra os passos necessários para aceitar devoluções e realizar cancelamentos em sua loja.

### Devoluções
Para aceitar a devolução de determinado pagamento realizado em sua loja, ative a opção na configuração do seu meio de pagamento selecionando a opção "Sim" no campo pendente. Ao habilitar essa opção, o módulo fará o reembolso parcial ou total do pagamento no Mercado Pago quando for criada uma nota de crédito no pedido. O reembolso é feito apenas em pagamentos que tenham o status 'approved'.

> Se o reembolso for feito no painel Mercado Pago, o módulo não estará preparado para criar nota de crédito automaticamente. Devido a esta limitação, é aconselhável que seja criado a partir da loja.

### Cancelamentos

Para cancelar pagamentos das transações realizadas em sua loja, você deve ativar a opção na configuração do seu método de pagamento selecionando a opção "Sim" no campo pendente. Ao habilitar essa opção, o módulo irá cancelar o pagamento no Mercado Pago quando o pedido for cancelado.

O pagamento será cancelado quando o status estiver em `pending` ou `in_process`, caso contrário o plugin retornará uma mensagem de erro.

> PREV_STEP_CARD_PT
>
> Instalação do plugin
>
> Siga as etapas para instalar o plugin do Mercado Pago.
>
> [Instalação do plugin](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/magento-two/instalation)

> NEXT_STEP_CARD_PT
>
> Configurar o Checkout Pro
>
> Configure o plugin para aceitar pagamentos com o Checkout Pro.
>
> [Configuração do Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/magento-two/checkout-pro-configuration)
