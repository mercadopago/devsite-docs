# Descontos

Descontos são reduções de valores aplicados ao preço original de um produto ou serviço, geralmente para incentivar uma compra ou oferecer uma condição especial. Este tipo de estratégia também pode ser utilizada para pagamentos feitos via Wallet Connect, e nesta documentação você encontra os passos necessários para realizar esta integração.

> WARNING
>
> Importante
>
> Antes de oferecer pagamentos com descontos usando Wallet Connect, lembre-se de alinhar a campanha de benefícios com o seu gerente de contas.

A implementação de descontos via Wallet Connect é feita a partir da criação de uma promessa de desconto, que deve ser feita após a conclusão da [vinculação de contas](/developers/pt/docs/wallet-connect/account-linking-flow/create-agreement) e antes de iniciar o [fluxo de pagamentos](/developers/pt/docs/wallet-connect/payment-flow). Este processo envolve:

## Criar promessa de desconto 

Existem duas opções principais para criar uma promessa de desconto, adequadas a diferentes situações:

* **Opção 1: [Com cupom pré-adicionado](/developers/pt/docs/wallet-connect/discounts/create-discount-promise-preadd-coupon)**
    * Esta opção envolve realizar uma solicitação com um cupom que o usuário já inseriu, permitindo a aplicação de descontos de forma personalizada e direcionada. Para implementá-la, é necessário seguir duas etapas.
        * **[Validar o cupom antes de realizar o pagamento](/developers/pt/docs/wallet-connect/discounts/create-discount-promise-preadd-coupon#bookmark_validar_cupom_antes_da_realização_do_pagamento)** - esta etapa refere-se à verificação da validade do cupom já inserido pelo usuário. Isso inclui checar se o cupom está dentro do prazo de validade, se atende aos critérios específicos como valor mínimo de compra, e se é aplicável aos itens no carrinho, além de confirmar se existe ou não uma campanha para ele.
        * **[Adicionar o cupom antes de prosseguir com o pagamento](/developers/pt/docs/wallet-connect/discounts/create-discount-promise-preadd-coupon#bookmark_adicionar_cupom_antes_de_prosseguir_para_pagamento)** - implica no ato de inserir o cupom no sistema antes de iniciar o processo de pagamento. Este passo é responsável por garantir que o desconto seja considerado somente na transação final. <br><br>

* **Opção 2: [Sem cupom pré-adicionado](/developers/pt/docs/wallet-connect/discounts/create-discount-promise-without-preadd-coupon)**
    * Neste caso, a solicitação é realizada sem um cupom. Aqui, o desconto é solicitado com base em uma campanha já existente. Isso é útil quando os descontos são oferecidos como parte de uma promoção geral, sem a necessidade de um código de cupom específico.

## Processar pagamento com desconto 

Após a criação da promessa de desconto, é necessário processar o pagamento. Isso assegura que o desconto seja processado corretamente durante a transação.

Defina a opção que mais se adequa à sua estratégia de negócio e siga os passos descritos na respectiva seção.