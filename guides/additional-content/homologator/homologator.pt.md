# Qualidade da integração

O Homologator é a ferramenta em que você poderá **medir a qualidade da sua aplicação**, sendo possível identificar pontos de melhoria em sua integração para deixá-la de acordo com os padrões do Mercado Pago.

> WARNING
>
> Atenção
>
> Por enquanto, a ferramenta para medir a qualidade da integração só está disponível para integrações com o [Checkout Pro](/developers/pt/docs/checkout-pro/landing).

Para medir a qualidade sa sua aplicação, siga os passos abaixo.

1. No [Devsite](/developers/pt/docs), acesse o menu **Suas integrações > [Dashboard](/developers/pt/guides/additional-content/dashboard/introduction)**.
2. Na área de [Suas Aplicações](/developers/pt/docs/dashboard/applications) do Dashboard, **clique no card** da aplicação desejada. 
3. Em seguida, clique em **Detalhes da pontuação** para acessar a ferramenta em que você poderá **medir a qualidade da sua aplicação** e visualizar a pontuação que indica o quanto a configuração da sua aplicação é segura e está alinhada com as boas práticas de integração do Mercado Pago. 
4. Na tela "Qualidade da integração", clique em **Avaliar qualidade** e insira o `payment ID` de um pagamento feito com [credenciais](/developers/pt/guides/additional-content/credentials/credentials) de produção da aplicação em questão. Sempre que possível, mostraremos no campo de preenchimento o último `payment ID` produtivo que identificamos na aplicação em questão.

Pronto! A medição da qualidade foi realizada e serão exibidas as seguintes informações:

* **Pontuação**: indica o quanto a configuração da sua aplicação é segura e está alinhada com as boas práticas de integração do Mercado Pago.
* **Payment ID**: `payment ID` do qual está baseada a pontuação de qualidade da aplicação.
* **Última atualização**: data da última atualização da pontuação de qualidade da aplicação.
* **Melhorar a experiência da pessoa que compra**: ações necessárias ou boas práticas que poderão melhorar a experiência das pessoas que compram utilizando o Mercado Pago como solução de pagamento.
* **Conciliação financeira**: ações necessárias ou boas práticas que poderão melhorar a consistência em conferir informações financeiras.
* **Aumentar a aprovação dos pagamentos**: ações necessárias ou boas práticas que poderão aumentar as aprovações de pagamento da solução de pagamento integrada à aplicação.
* **Escalabilidade**: ações necessárias ou boas práticas que poderão melhorar a escalabilidade de sua integração, ou seja, atendendo as demandas sem perder as qualidades que lhe agreguem valor.
* **Segurança**: ações necessárias ou boas práticas que poderão aumentar a segurança da sua integração.

> WARNING
>
> Importante
>
> As ações indicadas como **necessárias** deverão ser concluidas para somar os pontos que irão melhorar a qualidade da sua integração, enquanto as indicadas como **boas práticas** não impactarão na pontuação.

Após finalizar as ações indicadas, clique em **Atualizar pontuaçã** para concluir a medição e deixar a sua aplicacão completa para integração.