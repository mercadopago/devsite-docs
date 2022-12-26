# Qualidade da integração

Com esta ferramenta você pode **medir a qualidade da sua aplicação**, sendo possível identificar pontos de melhoria em sua integração para deixá-la de acordo com os padrões do Mercado Pago.

----[mla, mlm, mlu, mco, mlc, mpe]---- 
> WARNING
>
> Atenção
>
> Por enquanto, a ferramenta para medir a qualidade da integração só está disponível para integrações com o [Checkout Pro,](/developers/pt/docs/checkout-pro/landing) [Checkout API](/developers/pt/docs/checkout-api/landing) e [Checkout Bricks.](/developers/pt/docs/checkout-bricks/landing)

------------
----[mlb]---- 
> WARNING
>
> Atenção
>
> Por enquanto, a ferramenta para medir a qualidade da integração só está disponível para integrações com o [Checkout Pro,](/developers/pt/docs/checkout-pro/landing) [Checkout Transparente](/developers/pt/docs/checkout-api/landing) e [Checkout Bricks.](/developers/pt/docs/checkout-bricks/landing)

------------

Para medir a qualidade sa sua aplicação, siga os passos abaixo.

1. No [Devsite](/developers/pt/docs), acesse o menu **Suas integrações >** [Dashboard](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel).
2. Na área de [Suas aplicações](/developers/pt/guides/additional-content/dashboard/applications) do Dashboard, **clique no card** da aplicação desejada. É necessário que seja uma aplicação em que haja um produto a ser integrado e que este seja um dos que a ferramenta de medição está disponível.
3. Em seguida, clique em **Detalhes da pontuação** para acessar a ferramenta em que você poderá **medir a qualidade da sua aplicação** e visualizar a pontuação que indica o quanto a configuração da sua aplicação é segura e está alinhada com as boas práticas de integração do Mercado Pago. 
4. Na tela "Qualidade da integração", clique em **Avaliar qualidade** e insira o `payment ID` de um pagamento feito com [credenciais](/developers/pt/guides/additional-content/credentials/credentials) de produção da aplicação em questão. Sempre que possível, mostraremos no campo de preenchimento o último `payment ID` produtivo que identificamos na aplicação em questão.

Pronto! A medição da qualidade foi realizada e serão exibidas as informações abaixo.

![integration-quality](homologator/integration-quality-pt.png)

* **Pontuação**: indica o quanto a configuração da sua aplicação é segura e está alinhada com as boas práticas de integração do Mercado Pago.
* **Payment ID**: `payment ID` do qual está baseada a pontuação de qualidade da aplicação.
* **Última atualização**: data da última atualização da pontuação de qualidade da aplicação.
* **Melhorar a experiência da pessoa que compra**: ações necessárias ou boas práticas que poderão melhorar a experiência das pessoas que compram utilizando o Mercado Pago como solução de pagamento.
* **Conciliação financeira**: ações necessárias ou boas práticas que poderão melhorar a consistência em conferir informações financeiras.
* **Aumentar a aprovação dos pagamentos**: ações necessárias ou boas práticas que poderão aumentar as aprovações de pagamento da solução de pagamento integrada à aplicação, visto que ao fornecer mais informações na hora de gerar uma transação, damos mais elementos às nossas ferramentas de fraude para que possam fazer uma avaliação mais detalhada.
* **Escalabilidade**: ações necessárias ou boas práticas que poderão facilitar algumas mudanças e a manutenção da integração no futuro (exemplos de itens de escalabilidade são os SDKs, que nos eximem de implementar a lógica de algumas mudanças), atendendo as demandas sem perder as qualidades que lhe agreguem valor.
* **Segurança**: ações necessárias ou boas práticas que poderão aumentar a segurança da sua integração.

> WARNING
>
> Importante
>
> As ações indicadas como **necessárias** deverão ser concluidas para somar os pontos que irão melhorar a qualidade da sua integração, enquanto as indicadas como **boas práticas** não impactarão na pontuação.

Após finalizar as ações indicadas, clique em **Atualizar pontuação** para reavaliar a qualidade e deixar a sua aplicacão completa para a integração.