# Qualidade da integração

Para proporcionar tanto ao vendedor quanto ao comprador a melhor experiência, você precisa validar sua integração de acordo com os padrões do Mercado Pago antes de ir para a produção.
Abaixo, você encontrará todas as informações necessárias para saber como homologar sua integração.

## O que é a Homologação?

A homologação é um processo de certificação de sua integração, com isso você pode garantir que seu desenvolvimento tenha os requisitos de qualidade e segurança necessários para proporcionar tanto ao vendedor quanto ao comprador a melhor experiência com o Mercado Pago.

## Que aspectos avalia a Homologação?

No processo da homologação serão analisados ​​uma série de campos associados a 5 aspectos fundamentais que uma integração do Mercado Pago deve ter, independentemente do produto integrado. 
Você pode ver esses atributos avaliados e a importância de cada um abaixo:

| **Aspecto**                  | **Descrição**                                                                                                                                                                                                                                                                                                                                     |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   Aprovação de pagamento | Para garantir uma boa taxa de aprovação de pagamento, é muito importante validar cada um dos campos destacados como melhorias necessárias e boas práticas que são sugeridas pelo Mercado Pago no resultado de sua homologação. Isso dará mais informações às nossas ferramentas de fraude para que possam fazer uma avaliação mais detalhada. |
| Experiência de Usuário   | Para crescer e manter o índice de usuários em sua integração, você deve oferecer uma boa experiência de pagamento. As sugestões fornecidas pelo Mercado Pago como resultado da homologação irão orientá-lo para obter os melhores resultados.                                                                                                 |
| Segurança                | O Mercado Pago buscará garantir a confidencialidade dos dados envolvidos no processo de compra. As melhorias indicadas ou boas práticas sugeridas no resultado da sua homologação permitir-lhe-ão obter os dados necessários de forma segura e fiável.                                                                                        |
| Escalabilidade           | Ao homologar a sua integração, ter as versões mais atualizadas das nossas APIs e bibliotecas oficiais vão te garantir os melhores resultados.                                                                                                                                                                                                 |
| Conciliação Financeira   | A consistência em conferir informações financeiras visa manter a integridade dos dados em seu sistema. Por isso, é importante que você inclui as medidas necessárias e as boas práticas sugeridas pelo resultado de sua homologação.                                                                                                          |

## Como homologar minha integração?

Para medir a qualidade da sua aplicação, siga os passos abaixo.

----[mla, mlm, mlu, mco, mlc, mpe]----

> WARNING
>
> Atenção
>
> Antes de iniciar a avaliação, certifique-se de que a homologação da aplicação em ambiente de produção foi concluída, incluindo a realização de pelo menos um pagamento produtivo. <br><br>
> <br><br>
>É necessário que seja uma aplicação em que haja um produto a ser integrado daqueles em que a ferramenta de medição está disponível. Por enquanto, a ferramenta para medir a qualidade da integração só está disponível para integrações com o [Checkout Pro](/developers/pt/docs/checkout-pro/landing) [Checkout API,](/developers/pt/docs/checkout-api/landing), [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing) e [Mercado Pago Point.](/developers/pt/docs/mp-point/landing) 

------------
----[mlb]----

> WARNING
>
> Atenção
>
> Antes de iniciar a avaliação, certifique-se de que a homologação da aplicação em ambiente de produção foi concluída, incluindo a realização de pelo menos um pagamento produtivo. <br><br>
> <br><br>
> É necessário que seja uma aplicação em que haja um produto a ser integrado daqueles em que a ferramenta de medição está disponível. Por enquanto, a ferramenta para medir a qualidade da integração só está disponível para integrações com o [Checkout Pro](/developers/pt/docs/checkout-pro/landing) [Checkout Transparente,](/developers/pt/docs/checkout-api/landing), [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing) e [Mercado Pago Point.](/developers/pt/docs/mp-point/landing)

------------

1. No [Devsite](/developers/pt/docs), acesse o menu [Suas integrações](https://www.mercadopago.com.br/developers/panel/app).
2. No [Painel do desenvolvedor](https://www.mercadopago.com.br/developers/panel/app), localize a aplicação desejada e clique em **avaliar qualidade**. Você também poderá acessar a ferramenta de homologação diretamente dos [detalhes de sua aplicação](/developers/pt/guides/additional-content/your-integrations/application-details), clicando em **Avaliar qualidade** do _card_ "Status".
3. Na tela **"Qualidade da integração"**, clique em **Avaliar qualidade** e insira o `payment ID` de um pagamento recente feito com [credenciais](/developers/pt/guides/additional-content/your-integrations/credentials) de produção da aplicação você está certificando. Por fim, clique novamente em **Avaliar qualidade**. 

> Sempre que possível, insira no campo de preenchimento o último `payment ID` produtivo que você identifica na aplicação em questão.

Pronto! Você realizou a medição de qualidade. Agora poderá saber sua pontuação e quais aspectos de sua integração você pode melhorar.

## Como ler o resultado da minha homologação?

Depois de realizar a medição de qualidade da sua integração, você encontrará a seguinte tela:

![homologation-screen](/homologator/integration-quality-screen-pt.png)

1. **Pontuação**: indica o quanto a configuração da sua aplicação é segura e está alinhada com as boas práticas de integração do Mercado Pago. A pontuação mínima para que seu aplicativo atenda aos requisitos é 75. Lembre-se também que quanto mais perto dos 100 pontos sua integração estiver, melhor será a experiência do usuário e a taxa de aprovação de pagamentos.
2. **Payment ID** e **Última atualização**: `payment ID` do qual está baseada a pontuação de qualidade da aplicação e a data da última atualização.
3. **Melhorias pendentes**: indica quais oportunidades de melhoria foram identificadas no processo e como você pode resolvê-las. Você deve clicar neles para vê-las.

> WARNING
>
> Importante
>
> As ações indicadas como **necessárias** deverão ser concluidas para somar os pontos que irão melhorar a qualidade da sua integração, enquanto as indicadas como **boas práticas** são recomendações, mas não impactarão na pontuação.

4. **Atualizar pontuação**: após aproveitar as oportunidades de melhoria, você pode testar novamente a qualidade da sua integração para ir para a produção.