---
content_section_with_media: 
 - title: Validação de cartões (Zero Dollar Auth)
 - message: Zero Dollar Auth é uma funcionalidade desenvolvida para aprimorar a validação de cartões de crédito ou débito, visando otimizar a experiência do cliente. Com ela, é possível assegurar que não haja cobranças efetivas no cartão do cliente, eliminando a necessidade de cancelamentos ou estornos após a autorização da transação.
 - media_image: /zero-dollar-auth/credit-card.png
---

> WARNING
> 
> Importa
>
> É importante destacar que a utilização de procedimentos de validação de pagamentos seguidos de estornos imediatos não é recomendada como prática padrão. Tais ações, especialmente quando realizadas em volumes elevados, podem resultar em penalizações por parte das operadoras de cartão de crédito.

Esta validação é feita via API e utiliza-se do token do cartão de crédito do cliente. Após a requisição, e recebendo um retorno positivo, será possível associar o cartão ao cliente para futuramente gerar pagamentos.

Veja abaixo o fluxo que ilustra como funciona a validação Zero Dollar Auth.

![Fluxo de funcionamento para a validação do Zero Dollar Auth](/images/zero-dollar-auth/zero-dollar-auth/flujo-zda-pt.png)

