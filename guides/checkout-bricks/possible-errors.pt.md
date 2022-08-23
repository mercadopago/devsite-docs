# Possíveis erros

Abaixo você encontrará listas de erros que podem ocorrer durante a integração dos bricks. Sejam eles relacionados ao **envio das variáveis** ou à **comunicação com serviços externos** (APIs Mercado Pago).

## Variáveis passadas pelo integrador 

Durante o processo de integração do brick, é possível que diferentes erros relacionados ao envio das variáveis sejam exibidos ao integrador **no momento de instanciar o Brick**. Esses erros serão mostrados através de um log no console do navegador (o comprador não recebe qualquer mensagem).

| Erro | Mensagem | Código da causa |
|--- |--- |--- |
| Objeto de configuração vazio | [Card Payment Brick error] Settings object is empty, please pass required properties | settings_empty |
| Ausência da propriedade amount (valor total da compra) | [Card Payment Brick error] Amount property is required | missing_amount_property |
| Ausência dos callbacks de onReady e onError | [Card Payment Brick error] Callbacks onReady and onError are required | missing_required_callbacks |
| Ausência do ID de um elemento HTML para servir de container ao brick | [Card Payment Brick error] You must provide an HTML element ID as a container to allow component rendering|missing_container_id |
| Ausência da propriedade locale (idioma desejado) | [Card Payment Brick error] Locale property is required | missing_locale_property |
| Erro genérico ocorrido durante a inicialização do brick, geralmente alguma validação que falhou por causa de um valor enviado pelo integrador | [Card Payment Brick error] Brick incorrectly initialized: {error}|incorrect_initialization |

## Comunicação com serviços externos (APIs do Mercado Pago)

Durante o processo de integração do brick, é possível que diferentes erros relacionados à **comunicação com as APIs do Mercado Pago** aconteçam.

| Erro | Mensagem para o usuário | Mensagem para o integrador | Crítico? |Código da causa |
|--- |--- |--- |--- |--- |
| Impossibilidade de renderização dos Secure Fields dentro do formulário do brick de Card Payment | Ocorreu um erro. | The integration with Secure Fields failed | Sim | fields_setup_failed |
| Falha na busca de informações de métodos de pagamentos baseado na public_key do integrador | Ocorreu um erro. Por favor, tente novamente mais tarde. | An error occurred while trying to search for payment methods | Não | get_payment_methods_failed |
| Falha na criação do token que representa as informações do cartão | Ocorreu um erro e não foi possível processar o pagamento. Por favor, tente novamente mais tarde. | Failed to create card token | Não | card_token_creation_failed |
| Falha na busca dos tipos de documento de identificação baseado no país definido na SDK MercadoPago.js | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get identification types | Não | get_identification_types_failed |
| Falha na busca de informações do cartão baseado no bin | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get payment methods using card bin | Não | get_card_bin_payment_methods_failed |
| Falha ao buscar bancos emissores do cartão | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get card issuer(s) | Não | get_card_issuers_failed |
| Falha ao buscar quantidade e valores das parcelas do pagamento baseado no amount enviado pelo integrador | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get payment installments | Não | get_payment_installments_failed |
| Campos do pagamento incompletos por algum motivo (parcelas, emissor do cartão, payment_method_id) | Ocorreu um erro. Por favor, tente novamente mais tarde. | Será retornada uma das seguintes mensagens de acordo com o tipo de erro: <br> The payment <br> method id is missing <br> The payment installments are missing <br> The card issuer is missing|Não|missing_payment_information |