# Teste sua integração

Os usuários de teste lhe permitem checar a integração de seu sistema com Mercado Pago sem utilizar dinheiro real. 

Pra realizar os testes, é necessário ter pelo menos dois usuários: um comprador e um vendedor.

> Se você não gerou seus usuários neste momento, pode fazê-lo nos [pré-requisitos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/qr-code/pre-requisites).

| Tipos de usuários | Descrição |
| --- | --- |
| Vendedor | É a **conta de testes que você utiliza para obter as credenciais** a ser configuradas em seu sistema para poder interagir com os APIs de Mercado Pago. Também poderá acessar a [conta Mercado Pago](https://www.mercadopago.com.br/activities) e revisar as transações comprovadas. |
| Comprador | É a **conta de testes que você utiliza para comprovar o processo de compra**.  Deve acessar o app de Mercado Pago com os dados deste usuário. Se houver dinheiro disponível na conta ou cartões guardados, estarão habilitados como meio de pagamento. |

## Cartões de teste

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## Teste o fluxo de pagamento

### 1. Com seu usuário vendedor, atribui um pedido a um ponto de venda. 

Para testar o modelo atendido, gere um pedido com as [credenciais]([FAKER][CREDENTIALS][URL]) do usuário de teste que deseja utilizar como vendedor e envie um pedido ao QR previamente criado.


### 2. Realize um pagamento com seu usuário comprador
- A. Inicie sessão no app de Mercado Pago com seu usuário de teste comprador. 
- B. Clique em Pagar com QR e escaneie o QR do ponto de venda. 
- C. Escolha um cartão já carregado ou preencha os dados com um cartão novo e faça o pagamento. 

### 3. Receba notificações do pedido

Comprove que tenha recebido as notificações do estado do pedido em seu sistema e pronto! 

## Casos para validar

| Caso | Resultado esperado | Observações |
| --- | --- | --- |
| **Escaneio prévio à criação do pedido**. O cliente escaneia um código QR válido antes de fazer o pedido.  | O app mostra a tela de espera.  | Verifique que `fixed_amount` = **true** no caixa. |
| **Escaneio de QR**. O usuário escaneia um código QR válido uma vez realizado o pedido e criada a ordem. | O app mostra a tela de pagamento. | Verifique o valor na tela de pagamento. |
| **Pagamento aprovado**. O usuário realiza um pagamento aprovado. | O sistema de Ponto de Venda recebe as informações de um pagamento aprovado. | Verifique recebimento de [notificações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/introduction). |
| **Pagamento recusado**. O usuário realiza um pagamento recusado. | O sistema de Ponto de Venda recebe as informações de um pagamento recusado e continua esperando o pagamento do pedido.| O `status` da `merchant_order` deve ser **opened**. |
| **Segunda tentativa de pagamento**. O usuário realiza primeiramente um pagamento recusado e depois um pagamento aprovado.| O sistema de Ponto de Venda recebe as informações de um pagamento recusado e depois um pagamento aprovado. | Não remover a ordem depois de um pagamento recusado. |
| **Restituição de pagamento**. Uma restituição é realizada desde o Ponto de Venda. | Na conta do comprador impacta a restituição. | Ver [devoluções](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/sales-processing/cancellations-and-refunds/#bookmark_devolu%C3%A7%C3%B5es). |
| **Cancelar ordem**. O usuário se arrepende e decide pagar em dinheiro.  | O pedido é eliminado e, portanto, ao escanear o QR somente é mostrada a tela de espera. | Remover a ordem de pagamento do caixa. |

## Quero entrar em produção

Quando tiver o aplicativo **pronto e funcionando** na modalidade de teste e quiser começar a processar pagamentos reais, deverá [ativar suas credenciais]([FAKER][CREDENTIALS][URL]). 

Posteriormente, Mercado Pago poderá auditar seu website, app ou Software de Ponto de Venda, verificando que as regras detalhadas acima sejam atendidas. No caso contrário, um assessor entrará em contato com você para discutir se tem coisas para corrigir em sua integração. 

> WARNING
> 
> IMPORTANTE
> 
> Se não [ativar suas credenciais]([FAKER][CREDENTIALS][URL]), não poderá fazer qualquer tipo de restituições. 

## Por que este processo é necessário? 

Porque assim podemos garantir a segurança dos dados de seus clientes e conseguir a melhor experiência de compra, que contribua para maximizar a conversão dos pagamentos que receba. O inadimplemento destas normas pode acarretar desde o não processamento de pagamentos até ações legais conforme o estabelecido nos [Termos e Condições](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/termos-e-condicoes_300). 
