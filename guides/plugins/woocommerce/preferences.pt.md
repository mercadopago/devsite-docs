# Preferências de pagamento
<br/>

Encontre a configuração das preferências de pagamento nos *Ajustes* do WooCommerce assim que tiver instalado o módulo. Lá, vá à seção *Payments*, ative o checkout que quiser oferecer e configure as opções que preferir para o seu site.

> NOTE
>
> Nota
>
> Lembre-se de que temos diversos [tipos de checkout]() que se adaptam às necessidades do seu negócio e que cada um conta com a sua própria configuração.

## Informações do negócio

Insira o **nome do seu negócio** para que apareça na fatura dos seus clientes e seja mais fácil reconhecer o pagamento quando parecer no resumo da fatura. Selecione a qual **categoria** pertencem os produtos e/ou serviços que a loja oferece e faça outros ajustes de acordo com as suas necessidades.

![Informação básica](/images/woocomerce/br_info_basica.png)

> WARNING
>
> Importante
>
> Não esqueça de inserir seu `integrator_id` como [Parceiro](https://partners.mercadopago.com/) certificado do Mercado Pago. Se você não o possui, pode [solicitá-lo agora](https://docs.google.com/forms/d/e/1FAIpQLScTwPlLRVW2rB_BnCxekUnfJu9rn-tUMh8ENAnqpxLeB8ULUw/viewform?usp=sf_link).

<span></span>

> NOTE
>
> Nota
> 
> Todos os nossos módulos contam com uma licença de código aberto. Quer participar da criação? [Sugira melhorias e edições](https://github.com/mercadopago/cart-woocommerce) no Github.

## Configuração básica

Ative o checkout que quer oferecer aos seus clientes conforme suas preferências e escolha os meios de pagamento com os quais eles podem comprar.

* Ative um tipo de checkout.
  * Use o Checkout Pro para aceitar pagamentos com cartões, ----[mlb]---- Pix,------------ em dinheiro e saldo na conta do Mercado Pago.
  * Use o Checkout Personalizado para controlar outras configurações e aceitar pagamentos com cartões de crédito, ----[mlb]---- Pix,------------ boleto e pagamentos presenciais.

* Escolha os [meios de pagamento disponíveis](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/localization/payment-methods) para seus clientes conforme o país onde operam e o tipo de checkout que esteja configurando.

* Estabeleça o máximo de parcelas que poderão pagar.

* Ative a conversão de moeda do Mercado Pago.

----[mlb]----
> WARNING
>
> Importante
>
> **Antes de configurar o Pix como meio de pagamento, lembre-se de:**
>
> - [Baixar a última versão](https://br.wordpress.org/plugins/woocommerce-mercadopago/#description) para atualizar seu plugin do Mercado Pago.
> - Cadastrar sua chave no Mercado Pago. Se isso não for feito, seus clientes não conseguirão finalizar a compra. [Saiba como fazer](https://www.mercadopago[FAKER][URL][DOMAIN]/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required).

<span></span>
------------ 

> NOTE
>
> Nota
>
> A opção para ativar a conversão de moeda está disponível apenas no checkout personalizado. O Checkout Pro faz a conversão automaticamente.

## Configuração avançada

Você terá diferentes ajustes disponíveis conforme o tipo de checkout que ativar na sua loja. Personalize a experiência de compra com os ajustes avançados que correspondam a cada um.

### Ajustes comuns em todos os checkouts

| Configuración | Descripción |
| --- | --- |
| Modo binário | Ative esta opção quando não quiser deixar os pagamentos em estado pendente ou em revisão. Com o modo binário, os pagamentos serão aceitos ou recusados automaticamente. |

### Checkout Pro

#### Experiências de pagamento com Checkout Pro

Escolha qual experiência de compra seus clientes terão na hora de pagar:

| Experiencia de pagamento | Características |
| --- | --- |
| Redirect | Seus clientes serão redirecionados para uma página do Mercado Pago com o formulário de pagamentos para terminar a compra. |
| Modal | Seus clientes terão acesso ao formulário de pagamentos do Mercado Pago sem sair da sua loja. |

> NOTE
>
> Nota
>
> Veja a [documentação do Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-pro/introduction) para conhecer melhor todas as suas características e funcionalidades.

| Configuração | Descrição |
| --- | --- |
| Voltar à loja | Ao escolher redirect, você sempre terá a opção de fazer com que seus clientes retornem ou não à sua loja quando o pagamento for finalizado. |
| URLs configuráveis | De aprovação, pagamento recusado, pagamento pendente. |

### Checkout Personalizado

#### Pagamentos com cartões

| Configuração | Descrição |
| --- | --- |
| Cupons de desconto | Ative esta opção quando quiser oferecer descontos aos seus clientes. Aparecerá um campo no formulário onde poderão inserir seu cupom. |

#### Pagamentos presenciais

| Configuração | Descrição |
| --- | --- |
| Cupons de desconto | Ative esta opção quando quiser oferecer descontos aos seus clientes. Aparecerá um campo no formulário onde poderão inserir seu cupom. |
| Reduzir inventário | Ative esta opção quando quiser automatizar a diminuição do inventário por cada ordem de compra aprovada após um pagamento com Mercado Pago. |

----[mlb]----
#### Pagamentos com Pix

| Configuração | Descrição |
| --- | --- |
| Vencimento do Pix |  Defina o prazo de validade do código enviado ao cliente após a realização do pedido. Este será o período que o cliente terá para pagar a compra. |
| Descontos no Mercado Pago | Ative esta opção quando quiser selecionar um valor percentual para descontar dos seus clientes que pagarem com Mercado Pago. |
| Comissão por compra com Mercado Pago | Ative esta opção quando quiser selecionar um valor adicional para cobrar dos seus clientes que pagarem com Mercado Pago, em forma de tarifa. |
------------ 

---

### Próximos passos

> LEFT_BUTTON_REQUIRED_ES
>
> Teste e receba pagamentos
>
> Teste o módulo e confira se tudo está funcionando bem para começar a receber o dinheiro das suas vendas no Mercado Pago. 
>
>
> [Receber pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/woocommerce/receive-payments)
