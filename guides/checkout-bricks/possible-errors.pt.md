# Possíveis erros

Abaixo você encontrará listas de erros que podem ocorrer durante a integração dos Bricks. Sejam eles relacionados ao **envio das variáveis** ou à **comunicação com serviços externos** (APIs Mercado Pago).

> As mensagens de erro da API são retornadas em inglês como padrão. Porém na tabela abaixo você encontra a mensagem original e sua tradução.

## Variáveis passadas pelo integrador 

Durante o processo de integração do Brick, é possível que diferentes erros relacionados ao envio das variáveis sejam exibidos ao integrador **no momento de instanciar o Brick**. Esses erros serão mostrados através de um log no console do navegador (o comprador não recebe qualquer mensagem).

| Erro | Mensagem | Código da causa |
|--- |--- |--- |
| Objeto de configuração vazio | [Initialization error] Settings object is empty, please pass required properties <br><br>  _[Erro de inicialização] O objeto de configurações está vazio, passe as propriedades necessárias._ | settings_empty |
| Ausência da propriedade amount (valor total da compra) | [Initialization error] Amount property is required <br><br>  _[Erro de inicialização] A propriedade Amount é obrigatória._ | missing_amount_property |
| Ausência dos callbacks de onReady e onError | [Initialization error] Callbacks onReady and onError are required <br><br>  _[Erro de inicialização] Callbacks onReady e onError são obrigatórios._ | missing_required_callbacks |
| Ausência do ID de um elemento HTML para servir de container ao Brick | [Initialization error] You must provide an HTML element ID as a container to allow component rendering <br><br>  _[Erro de inicialização] Você deve fornecer um ID de elemento HTML como um contêiner para permitir a renderização do componente._ |missing_container_id |
| Ausência da propriedade locale (idioma desejado) | [Initialization error] Locale property is required <br><br>  _[Erro de inicialização] Propriedade de localidade é obrigatória._ | missing_locale_property |
| Erro genérico ocorrido durante a inicialização do Brick, geralmente alguma validação que falhou por causa de um valor enviado pelo integrador  | [Initialization error] Brick incorrectly initialized: {error} <br><br>  _[Erro de inicialização] Brick inicializado incorretamente._ |incorrect_initialization |

## Comunicação com serviços externos (APIs do Mercado Pago)

Durante o processo de integração do Brick, é possível que diferentes erros relacionados à **comunicação com as APIs do Mercado Pago** aconteçam.

| Erro | Mensagem para o usuário | Mensagem para o integrador | Crítico? |Código da causa |
|--- |--- |--- |--- |--- |
| Impossibilidade de renderização dos Secure Fields dentro do formulário do Brick de Card Payment | Ocorreu um erro. | The integration with Secure Fields failed<br><br>_A integração com o Secure Fields falhou._ | Sim | fields_setup_failed |
| Falha na busca de informações de métodos de pagamentos baseado na public_key do integrador | Ocorreu um erro. Por favor, tente novamente mais tarde. | An error occurred while trying to search for payment methods<br><br>_Ocorreu um erro ao tentar buscar meios de pagamento._ | Não | get_payment_methods_failed |
| Falha na criação do token que representa as informações do cartão | Ocorreu um erro e não foi possível processar o pagamento. Por favor, tente novamente mais tarde. | Failed to create card token<br><br>_Falha ao criar o token do cartão._ | Não | card_token_creation_failed |
| Falha na busca dos tipos de documento de identificação baseado no país definido na SDK MercadoPago.js | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get identification types<br><br> _Falha ao obter tipos de identificação._ | Não | get_identification_types_failed |
| Falha na busca de informações do cartão baseado no bin. | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get payment methods using card bin<br><br>_Falha ao realizar o pagamento utilizando o bin do cartão._ | Não | get_card_bin_payment_methods_failed |
| Falha ao buscar bancos emissores do cartão | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get card issuer(s)<br><br> _Falha ao obter emissor(es) de cartão._ | Não | get_card_issuers_failed |
| Falha ao buscar quantidade e valores das parcelas do pagamento baseado no amount enviado pelo integrador | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get payment installments<br><br> _Falha ao obter parcelas de pagamento._| Não | get_payment_installments_failed |
| Campos do pagamento incompletos por algum motivo (parcelas, emissor do cartão, payment_method_id) | Ocorreu um erro. Por favor, tente novamente mais tarde. | Será retornada uma das seguintes mensagens de acordo com o tipo de erro: <br><br> -The payment method id is missing <br> -The payment installments are missing <br> -The card issuer is missing<br><br> _-Falta o id da forma de pagamento._ <br> _-Faltam as parcelas de pagamento._ <br> _-Falta o emissor do cartão._ |Não|missing_payment_information |