# Realizar compra teste

A etapa de testes permite analisar se a integração foi feita de maneira correta e se os pagamentos estão sendo processados sem erros, evitando que erros apareçam ao disponibilizar o checkout para os compradores finais.

Para realizar uma compra teste é preciso utilizar as **credenciais de teste** do seu **usuário de produção**. Para obtê-las, acesse **Dashboard > Sua Aplicação > Credenciais de teste** e copie as informações disponíveis.

> WARNING
>
> Importante
>
> Para testar a integração é importante que você utilize outro navegador ou encerre a sessão da sua conta Mercado Pago, uma vez que os dados de comprador precisam ser diferentes dos dados do vendedor.   

Com as credenciais em mãos, siga os passos abaixo para realizar a compra teste.


1. Inicie a integração configurada com as **credenciais de teste**.
2. Insira um e-mail (lembrando que deve ser diferente do e-mail que você utiliza no Mercado Pago)
3. Confirme a compra.

Pronto! Finalizadas essas etapas a integração terá sido concluída e você já poderá utilizar suas credenciais de produção para utilizar o Checkout Transparente. Para mais informações, veja a seção [Requisitos para entrar em produção](/developers/pt/docs/checkout-api/integration-test/go-to-production-requirements)

> PREV_STEP_CARD_PT
>
> Criar usuário de teste
>
> Saiba como criar usuários para testar a integração do Checkout Transparente.
>
> [Criar usuário de teste](/developers/pt/docs/checkout-api/integration-test/create-test-user)

> NEXT_STEP_CARD_PT
>
> Cartões de teste
>
> Utilize os cartões de teste para simular todo fluxo de compra
>
> [Cartões de teste](/developers/pt/docs/checkout-api/integration-test/test-cards)