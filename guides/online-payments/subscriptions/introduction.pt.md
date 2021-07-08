# O que são Assinaturas?

As assinaturas do Mercado Pago permitem que você receba pagamentos recorrentes com cartão. A disponibilidade dos meios de pagamento varia de acordo com a forma de integração.

## Funções disponíveis

Há duas funções envolvidas: 
1. O __vendedor__ ou __collector__, proprietário da assinatura e credor dos valores devidos.
1. O __pagador__ ou __payer__, que pagará os valores automaticamente com o meio de pagamento escolhido.

> NOTE
> 
> Você quer criar assinaturas de forma rápida e fácil?
> 
> Entre na seção de [Assinaturas](https://www.mercadopago[FAKER][URL][DOMAIN]/subscription-plans) no painel da sua conta Mercado Pago, configure os dados que precisar e pronto!


## Conceitos-chave

Para poder integrar assinaturas, você deve conhecer quatro conceitos-chave: 

| Conceito | Descrição |
| --- |	--- |
| Plano ou template | É um modelo que permite definir, entre outros atributos, o título, valor e frequência das assinaturas criadas pelo vendedor. Serve para definir características gerais das assinaturas, que são criadas a partir desta instituição. É importante esclarecer que nenhum meio de pagamento está configurado aqui. |
| Assinatura ou pré-aprovação | Autorização do pagador para cobranças recorrentes com um meio de pagamento definido, que será a base para criar parcelas conforme a recorrência definida. Tem características semelhantes ao template, já que pode-se criar uma assinatura a partir de um plano. |
| Pagamento autorizado ou authorized payment | É a parcela de uma assinatura que é gerada e cobrada com base na recorrência definida. O mecanismo de assinatura agenda e gera os pagamentos automaticamente. |
| Cobrança de verificação | É uma cobrança mínima, feita no momento da adesão apenas para verificar se o cartão usado para pagar uma assinatura é válido. Em seguida, esse valor é reembolsado ao pagador. |
| Data de cobrança | É a data que o vendedor pode definir para receber as cobranças de uma assinatura com frequência de pagamento mensal. |


------------
### Próximos passos
> LEFT_BUTTON_REQUIRED_PT
>
> Requisitos para integrar
>
> Confira todos os requisitos necessários para começar a integrar.
>
> [Requisitos para integrar](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/subscriptions/previous-requirements)
