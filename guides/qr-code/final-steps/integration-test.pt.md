---
sites_supported:
  - mla
  - mpe
  - mco
  - mlu
  - mlm
  - mlc
  - mlb
---


# Teste sua integração

## Como testar sua integração? 

Os usuários de teste lhe permitem checar a integração de seu sistema com Mercado Pago sem utilizar dinheiro real. 

Tipos de usuários | Descrição
----------------- | -------------------------------------
Vendedor | É a **conta de testes que você utiliza para obter as credenciais** a ser configuradas em seu sistema para poder interagir com os APIs de Mercado Pago. Também poderá acessar a [conta Mercado Pago](https://www.mercadopago.com.br/activities) e revisar as transações comprovadas.  
Comprador | É a **conta de testes que você utiliza para comprovar o processo de compra**.  Deve acessar o app de Mercado Pago com os dados deste usuário. Se houver dinheiro disponível na conta ou cartões guardados, estarão habilitados como meio de pagamento. 


## Gerar usuários de teste

Para realizar os testes, é necessário que você tenha, no mínimo, dois usuários: um comprador e um vendedor. 

Execute o comando seguinte para gerar um usuário de teste: 

```curl
curl -X POST \

-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=PROD_ACCESS_TOKEN
-d '{"site_id":"MLB"}'
```

> NOTE
> 
> OBS.
> 
> As credenciais utilizadas são as produtivas da conta com a qual você vai operar.   

Resposta:

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

> WARNING
> 
> IMPORTANTE
> 
> * Você pode gerar até 10 contas de usuários de teste em simultâneo. Por isso, recomendamos você salvar o e-mail e senha de cada um. 
> * Os usuários de teste caducam após 60 dias sem atividade em Mercado Pago.
> * Para realizar pagamentos de teste, recomendamos que você utilize valores baixos.
> * Tanto o comprador como o vendedor devem ser usuários de teste.
> * Utiliza cartões de teste, já que não é possível sacar o dinheiro.

## Cartões de teste

Cartão | Número | CVV | Data de Validade
------------ | ------------------------ | ------------ | ------------------------
Mastercard | 5031 7557 3453 0604 | 123 | 11/25
Visa | 4170 0688 1010 8020 | 123 | 11/25
American Express | 3711 8030 3257 522 | 1234 | 11/25

Para **testar diferentes resultados de pagamento**, preencha o dado que quiser no nome do titular do cartão: 

- APRO: Pagamento aprovado.
- OTHE: Recusado por erro geral. 
- CALL: Recusado com validação para autorizar.
- FUND: Recusado por valor insuficiente.
- SECU: Recusado por código de segurança inválido.
- EXPI: Recusado por problema com a data de validade.

> NOTE
> 
> Nota
> 
> Aqui você encontra mais [cartões de teste](https://www.mercadopago.com.br/developers/pt/guides/localization/local-cards/).

## Teste o fluxo de pagamento

### 1. Com seu usuário vendedor, atribui um pedido a um ponto de venda. 

Gera um pedido com as [credenciais]([FAKER][CREDENTIALS][URL]) do usuário de testes que quiser utilizar como  vendedor:

  - Para [modelo atendido](https://www.mercadopago.com.br/developers/pt/guides/qr-code/qr-attended/qr-attended-part-a/), envia um pedido ao QR previamente criado.
  - Para [modelo desatendido](https://www.mercadopago.com.br/developers/pt/guides/qr-code/qr-unattended/qr-unattended-part-a/), disponibiliza o pedido no URL atribuído.

### 2. Realize um pagamento com seu usuário comprador
  - A. Inicie sessão no app de Mercado Pago com seu usuário de teste comprador. 
  - B. Clique em Pagar com QR e escaneie o QR do ponto de venda. 
  - C. Escolha um cartão já carregado ou preencha os dados com um cartão novo e faça o pagamento. 

### 3. Receba notificações do pedido

Comprove que tenha recebido as notificações do estado do pedido em seu sistema e pronto! 

## Casos para validar

Caso | Resultado esperado | Observações
------------- | ----------- | ----------
**Escaneio prévio à criação do pedido**. O cliente escaneia um código QR válido antes de fazer o pedido.  | O app mostra a tela de espera.  | Verifique que `fixed_amount` = **true** no caixa.
**Escaneio de QR**. O usuário escaneia um código QR válido uma vez realizado o pedido e criada a ordem. | O app mostra a tela de pagamento. | Verifique o valor na tela de pagamento. 
**Pagamento aprovado**. O usuário realiza um pagamento aprovado. | O sistema de Ponto de Venda recebe as informações de um pagamento aprovado. | Verifique recebimento de [notificações](https://www.mercadopago.com.br/developers/pt/guides/notifications/ipn/).
**Pagamento recusado**. O usuário realiza um pagamento recusado. | O sistema de Ponto de Venda recebe as informações de um pagamento recusado e continua esperando o pagamento do pedido.| O `status` da `merchant_order` deve ser **opened**.
**Segunda tentativa de pagamento**. O usuário realiza primeiramente um pagamento recusado e depois um pagamento aprovado.| O sistema de Ponto de Venda recebe as informações de um pagamento recusado e depois um pagamento aprovado. | Não remover a ordem depois de um pagamento recusado. 
**Restituição de pagamento**. Uma restituição é realizada desde o Ponto de Venda. | Na conta do comprador impacta a restituição. | Ver [devoluções](https://www.mercadopago.com.br/activities).
**Cancelar ordem**. O usuário se arrepende e decide pagar em dinheiro.  | O pedido é eliminado e, portanto, ao escanear o QR somente é mostrada a tela de espera. | Remover a ordem de pagamento do caixa. 

## Quero ir para Produção

Quando tiver o aplicativo **pronto e funcionando** na modalidade de teste e quiser começar a processar pagamentos reais, deverá preencher o formulário [Quero ir para produção]([FAKER][CREDENTIALS][URL]). Mais tarde, Mercado Pago poderá auditar seu website, app ou Software de Ponto de Venda, verificando que as regras detalhadas acima sejam atendidas. No caso contrário, um assessor entrará em contato com você para discutir se tem coisas para corrigir em sua integração. 

> WARNING
> 
> IMPORTANTE
> 
> Se não preencher o formulário de [Quero ir para produção](FAKER][CREDENTIALS][URL]), não poderá fazer qualquer tipo de restituições. 

## Por que este processo é necessário? 

Porque assim podemos garantir a segurança dos dados de seus clientes e conseguir a melhor experiência de compra, que contribua para maximizar a conversão dos pagamentos que receba. O inadimplemento destas normas pode acarretar desde o não processamento de pagamentos até ações legais conforme o estabelecido nos [termos e condições](https://www.mercadopago.com.br/ajuda/termos-e-condicoes_300). 
