# Entrar em produção

Quando a aplicação estiver **funcionando** em modo teste e chegue a hora de processar pagamentos reais, você deve [ativar suas credenciais](/developers/pt/docs/qr-code/additional-content/your-integrations/credentials) e **solicitar o processo de homologação à equipe de integrações**.

## Homologação

Nesta etapa, serão realizados testes no seu ambiente com a equipe técnica, parceiros e software house. Para isso, você deverá usar o Sponsor ID e a [OAuth](/developers/pt/docs/qr-code/additional-content/security/oauth/introduction)(autenticação entre contas Mercado Pago).

O Mercado Pago poderá auditar o seu site, aplicativo ou software de ponto de venda para verificar que as regras detalhadas na seção **Teste de integração** sejam cumpridas. Caso contrário, um consultor entrará em contato com você para analisar se existe a necessidade de corrigir sua integração.

> WARNING
>
> IMPORTANTE
>
> Se você não ativa as suas credenciais, não poderá efetuar nenhum tipo de reembolso.

## Por que este processo é necessário?

Desta maneira podemos garantir a segurança dos dados de seus clientes e oferecer a melhor experiência de compra, contribuindo para maximizar a conversão dos pagamentos que você recebe. A violação das normas de homologação pode acarretar desde o não processamento de pagamentos até ações legais conforme o estabelecido nos [Termos e Condições](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/termos-e-condicoes_300).

## Considerações adicionais

Estes são alguns pontos a considerar para aprimorar a qualidade das suas integrações:

* Mantenha atualizado o status dos pedidos nos seus sistemas, usando e processando notificações IPN ou Webhooks.
* Use relatórios de conciliação de API para melhorar a gestão financeira do seu negócio.