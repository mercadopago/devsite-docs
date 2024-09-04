# Como medir qualidade da integração

Para garantir a melhor experiência tanto para o vendedor quanto para o comprador, o Mercado Pago avalia suaintegração considerando os padrões necessários de segurança e qualidade.

Abaixo, você encontrará todas as informações necessárias sobre como essa medição é realizada, permitindo que você aproveite ao máximo nossa ferramenta e mantenha um processo contínuo de melhoria da qualidade.

## O que é a medição de qualidade?

A medição de qualidade é um processo de certificação de sua integração que busca garantir que seu desenvolvimento atenda aos requisitos necessários de qualidade e segurança para proporcionar tanto ao vendedor quanto ao comprador a melhor experiência no Mercado Pago.

## Que aspectos a medição de qualidade avalia?

Durante o processo de medição serão analisados ​​uma série de campos associados a aspectos fundamentais que uma integração do Mercado Pago deve ter, independentemente do produto integrado. Veja abaixo quais os atributos avaliados e a importância de cada um deles:

| Aspecto | Descrição |
|---|---|
| Experiência da pessoa que compra | Para crescer e manter o índice de usuários em sua integração, é importante oferecer uma boa experiência de pagamento. As sugestões fornecidas pelo Mercado Pago, resultantes da medição de qualidade irão guiá-lo para alcançar os melhores resultados. |
| Conciliação Financeira | A consistência em conferir informações financeiras visa manter a integridade dos dados em seu sistema. Por isso, é importante incluir as medidas necessárias e as boas práticas recomendadas pelo resultado de sua avaliação. |
| Aprovação de pagamentos | Para garantir uma boa taxa de aprovação de pagamento, é importante validar todos os campos indicados como melhorias necessárias e seguir as boas práticas recomendadas pelo Mercado Pago. Isso fornecerá dados mais completos às nossas ferramentas de fraude,  permitindo uma avaliação mais precisa e detalhada. |
| Escalabilidade | Ao avaliar a qualidade é importante utilizar as versões mais atualizadas das nossas APIs e bibliotecas oficiais. Isso assegura que você alcançará os melhores resultados possíveis. |
| Segurança | O Mercado Pago buscará garantir a confidencialidade dos dados envolvidos no processo de compra. As melhorias indicadas ou as boas práticas sugeridas no resultado da sua medição permitirão obter os dados necessários de forma segura. |

## Como medir a qualidade da sua integração?

Dependendo da solução integrada, a avaliação da sua integração pode ser feita de duas maneiras distintas: manual ou automática.

> WARNING
>
> Importante
>
> Em ambos os casos, é requisito indispensável ter um `payment ID` (identificador de pagamento) realizado com credenciais produtivas, que permitirá a avaliação correta do funcionamento da integração.

### Medição automática

Entre os dias 1 e 7 de cada mês, o Mercado Pago realiza uma avaliação automática de todas as aplicações integradas com **Checkout Pro, Checkout ----[mla, mlm, mlu, mco, mlc, mpe]----API------------ ----[mlb]----Transparente------------, Checkout Bricks e Mercado Pago Point** que possuam ao menos um `payment ID` produtivo.

> NOTE
>
> Nota
>
> As integrações com **Código QR** serão avaliadas exclusivamente de forma manual. Veja a seção "Medição manual" para mais detalhes ou consulte os [Requisitos para entrar em produção com Código QR](/developers/pt/docs/qr-code/integration-test/attended-model/go-to-production). Além disso, as integrações com **Plugins e Plataformas** não poderão ser avaliadas de nenhuma das duas formas.

**Esse processo de medição automática é realizado mensalmente, mesmo quando você já tiver realizado uma medição manual por conta própria**. Como as integrações podem sofrer alterações ao longo do tempo devido às melhorias aplicadas, o Mercado Pago busca garantir que o seu trabalho com nossas soluções seja cada vez mais satisfatório, oferecendo diferentes opções para alcançar uma qualidade ideal.

Os resultados dessa medição automática poderão ser visualizados dentro dos [Detalhes da sua aplicação](/developers/pt/docs/mp-point/additional-content/your-integrations/application-details). Assim como na medição manual, você poderá visualizar a pontuação da sua aplicação, conhecer as ações indicadas como necessárias e as boas práticas sugeridas. Para mais detalhes, consulte [Como ler o resultado da sua avaliação?]()

### Medição manual

Se desejar, você pode realizar uma avaliação manual da sua integração, desde que possua um `payment ID` de um pagamento produtivo. Isso pode ser útil para novas integrações que estejam entrando em produção fora do período em que o Mercado Pago realiza a medição automática, ou para aquelas que implementaram melhorias e desejam verificar o impacto dessas mudanças.

> WARNING
>
> Importante
>
> Lembre-se que, mesmo após ter realizado uma medição manual, o Mercado Pago efetuará uma medição automática do dia 1 ao 7 de cada mês, exceto em integrações com Código QR, que permitem apenas avaliações manuais, e com Plugins e Plataformas, que não estão habilitadas para nenhum tipo de avaliação.

Para medir a qualidade da sua integração manualmente, acesse o menu [Suas integrações](/developers/panel/app). Lá, você terá 2 opções para acessar a ferramenta de medição:

 * É possível localizar a aplicação desejada e, a partir do botão **“>”**, entrar na tela de onde pode realizar a avaliação da sua integração.
 ![Suas integrações](/homologator/integration-quality-your-integrations-pt.png)

 * Você pode selecionar a aplicação desejada e, nos [Detalhes da sua aplicação](/developers/pt/docs/your-integrations/application-details), clicar em **Iniciar medição** no painel "Status", caso seja a primeira medição, ou em **Medir novamente**, caso já tenha realizado uma medição anteriormente.
 ![Detalhes da sua aplicação](/homologator/integration-quality-aplication-details-pt.png)

Uma vez na seção **“Medir qualidade da sua integração”**, siga os passos abaixo:

1. Insira o `payment ID` do último pagamento realizado com [credenciais de produção](/developers/pt/guides/additional-content/your-integrations/credentials) da aplicação que deseja avaliar. 

2. Clique novamente em **Medir a qualidade**.

Ao concluir as etapas acima, você terá realizado a medição de qualidade manualmente. Acesse [Como ler o resultado da sua medição?]() para saber como interpretá-lo e manter sua integração alinhada com os padrões do Mercado Pago.

## Como ler o resultado da sua medição?

Seja através de uma medição manual de qualidade ou ao receber os resultados de uma avaliação automática, você encontrará a seguinte tela nos [Detalhes da aplicação](/developers/panel/app).

![resultados da medição](/homologator/integration-quality-results-pt.png)

1. **Pontuação**: indica o quanto a configuração da sua aplicação é segura e está alinhada com as boas práticas de integração do Mercado Pago. A **pontuação mínima** para que sua aplicação atenda aos requisitos é de **73**, mas **recomendamos obter os 100 pontos para obter uma melhor experiência de usuário e aumentar a taxa de aprovação de pagamentos**.
2. **Data da última medição** e **Payment ID:**: indica o dia e a hora da última medição e o `payment ID` do qual está baseada a pontuação de qualidade da aplicação.
3. **Aspectos avaliados**: indica qual pontuação foi obtida para cada um dos aspectos avaliados. Clique neles para saber quais oportunidades de melhoria foram identificadas no processo e como você pode abordá-las. Consulte a seção [Como melhorar a qualidade da sua integração?]() para explorar mais possibilidades de otimização.
4. **Medir de novo**: uma vez que você tenha aplicado as oportunidades de melhoria, há a opção de medir novamente a qualidade da sua integração de forma manual ou, se preferir, aguardar a medição automática mensal realizada pelo Mercado Pago.

## Como melhorar a qualidade da sua integração?

Como resultado da medição de qualidade da sua integração, nossa ferramenta irá apontar diferentes aspectos que permitirão otimizar seu desempenho e melhorar a experiência tanto do vendedor quanto do comprador. Estes podem ser:

 * **Ações obrigatórias:** são tarefas que devem ser implementadas para somar pontos que melhorarão a qualidade da sua integração. Por exemplo, ativar as [notificações Webhooks](/developers/pt/docs/your-integrations/notifications/webhooks) ou enviar uma referência externa que permita fazer a correlação de pagamentos entre o Mercado Pago e o sistema integrador.
 * **Ações recomendadas:** são tarefas que ajudam a melhorar a pontuação da sua integração na medição de qualidade, mas não são bloqueadoras. Um exemplo dessas ações pode ser enviar todas as informações referentes ao comprador para melhorar a validação e segurança dos pagamentos, diminuindo assim as probabilidades de recusas por parte do nosso motor de prevenção de fraude.
 * **Boas práticas:** são recomendações que, embora não afetem a pontuação na medição de qualidade, contribuem para melhorar determinados aspectos da sua integração. Por exemplo, adicionar os SDKs do MercadoPago.js V2 ao seu projeto ou manter seu sistema atualizado conforme os diferentes eventos recebidos por meio de notificações.

As ações e boas práticas recomendadas pelo Mercado Pago variam de acordo com cada integração específica e a solução integrada. Embora ofereçamos algumas diretrizes aqui, é importante que você utilize as informações fornecidas por nossa ferramenta de medição de qualidade para entender como otimizar o funcionamento da sua integração e, assim, melhorar sua pontuação.
