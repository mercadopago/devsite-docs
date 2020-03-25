# Preferências de pagamento


Configure as preferências de pagamento para oferecer diversas opções na área de compras. Escolha qual você quer oferecer na sua loja virtual e faça os ajustes necessários para que tudo funcione bem.

> NOTE
>
> Nota
>
> Lembre-se de que temos diversos [tipos de checkout](https://www.mercadopago.com.br/developers/pt/plugins_sdks/plugins/prestashop/introduction/#bookmark_tipos_de_checkout) que se adaptam às necessidades do seu negócio e que cada um conta com a sua própria configuração. 


## Informações do negócio

Insira o nome do seu negócio para que apareça na fatura dos seus clientes e seja mais fácil reconhecer o pagamento quando parecer no resumo da fatura. Selecione a qual categoria pertencem os produtos e/ou serviços que a loja oferece e faça outros ajustes de acordo com as suas necessidades. 

![Informação básica](/images/prestashop/preferences_pt.png)

> WARNING
>
> Importante
>
> **Você já trabalha com o Mercado Pago?** Não esqueça de inserir seu Integrator_ID, assim identificamos todas as suas transações e sabemos quantas vendas sua conta processa.

<span></span>

> NOTE
>
> Nota
>
> Todos os nossos módulos contam com uma licença de código aberto. Quer participar da criação? [Sugira melhorias e edições no Github](https://github.com/mercadopago/cart-prestashop-7).

## Configuração básica

* Defina a experiência que seus clientes terão:
 * Use o Checkout do Mercado Pago para aceitar pagamento com cartão, boleto e dinheiro em conta. Você vai proporcionar segurança e conforto ao usuário. E agora, você também pode configurá-lo como um modal para abrir na sua loja!
 * Use o Checkout Personalizado e o Ticket Checkout para ter controle sobre outras configurações. Ative ambos para oferecer todos os meios de pagamento.

> WARNING
>
> Importante
>
> Embora você possa ativar todos os checkouts, recomendamos selecionar apenas uma das experiências para não confundir seus clientes.

* Escolha os [meios de pagamento disponíveis](https://www.mercadopago.com.br/developers/pt/guides/localization/payment-methods/) para seus clientes conforme o país em que você opera e o tipo de checkout que você está configurando.

* Defina o número máximo de parcelas nas quais podem pagar.

* Indique o vencimento dos pagamentos presenciais (somente Ticket Checkout).

## Configurações avançadas

Você terá diferentes ajustes disponíveis conforme o tipo de checkout que ativar na sua loja. Personalize a experiência de compra com os ajustes avançados que correspondam a cada um.

### Ajustes comuns para todos os checkouts

| Configuração  | Descrição                                                               	                |
|---------------|-----------------------------------------------------------------------------------------------|
| Modo binário  | Ative esta opção quando não desejar deixar pagamentos pendentes ou em revisão. No modo binário, os pagamentos serão aceitos ou rejeitados automaticamente.|

> WARNING
>
> Importante
>
> A ativação do modo binário pode afetar a prevenção de fraude. Deixe-o inativo para que possamos cuidar dos pagamentos que você recebe.

### Checkout Mercado Pago

| Configuração               | Descrição                                                              	                                   |
|----------------------------|----------------------------------------------------------------------------------------------------------------|
| Voltar à loja              | Ao escolher redirect, você sempre terá a opção de fazer com que seus clientes retornem ou não à sua loja quando o pagamento for finalizado.|
| Cancelamento de preferências de pagamento | Quando o usuário acessa nosso checkout, geramos um link de pagamento com as informações dessa compra. Aqui você pode definir o horário em que salvamos essa preferência. |

Escolha a experiência de compra que seus clientes terão ao pagar: 

| Experiência de pagamento      | Características                                                              	                                 |
|-------------------------------|----------------------------------------------------------------------------------------------------------------|
| Redirect     	                | Seus clientes serão redirecionados para uma página do Mercado Pago com o formulário de pagamento para concluir a compra.|
| Modal **(NOVO)**              | Seus clientes acessarão o formulário de pagamento do Mercado Pago sem sair de sua loja. Se você desativá-lo, eles serão redirecionados para outra página.|

> NOTE
>
> Nota
>
> Confira a [documentação do Checkout do Mercado Pago ](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/introduction/) para saber mais sobre todos os recursos e funcionalidades.

### Checkout Personalizado

| Configuração                    | Descrição                                                                        |
|---------------------------------|----------------------------------------------------------------------------------|
| Desconto por compra             | Ofereça um desconto especial para incentivar seus clientes a fazer a compra.     |

### Último passo

> LEFT_BUTTON_REQUIRED_PT
>
> Teste e receba pagamentos
>
> Teste o módulo e confira se tudo está funcionando bem para começar a receber o dinheiro das suas vendas no Mercado Pago.
>
>
> [Receber pagamentos](https://www.mercadopago.com.br/developers/pt/plugins_sdks/plugins/prestashop/receive-payments/)