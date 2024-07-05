# Pré-requisitos

Para integrar a solução Split de pagamentos usando o Checkout Pro ou o Checkout ----[mla, mlu, mlc, mlm, mpe, mco]----API------------ ----[mlb]----Transparente------------, é importante atender aos requisitos mostrados abaixo.

> NOTE
>
> Importante
>
> Esta documentação é específica para o modelo de Split de pagamentos 1:1. Caso necessite de informações sobre o modelo 1:N, recomendamos entrar em contato com nossa equipe comercial para obter mais detalhes. Além disso, caso seja necessário realizar configurações sobre a data de liberação da comissão (_marketplace fee_ ou _application fee_), entre em contato com o seu **executivo comercial de carteira assessorada**.

| Requisito                        | Descrição                                                                                                                                                                                                                                      |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Conta de vendedor Mercado Pago    | Para integrar, você precisa ter uma conta de vendedor no Mercado Pago com um nível de identificação KYC 6. Isso assegura uma base sólida de confiança e segurança nas transações. Se você não tiver uma, pode [criá-la](https://www.mercadopago.com.br/hub/registration/landing) gratuitamente. |
| Aplicativo Mercado Pago           | É necessário ter o aplicativo Mercado Pago para gerenciar os recebimentos realizados. Você pode baixar [a versão para dispositivos Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419) ou [para dispositivos iOS](https://apps.apple.com/br/app/mercado-pago/id925436649).                                                                       |
| OAuth                            | Os revendedores no Marketplace devem passar pelo processo de autorização OAuth para estabelecer uma conexão segura e autenticada. Este procedimento garante a legitimidade das transações comerciais e protege a integridade das operações. Consulte a documentação de OAuth para obter mais informações. |
| Integração com o Mercado Pago     | O Marketplace está disponível para ser integrado com Mercado Pago usando o **Checkout Pro e o ----[mla, mlu, mlc, mlm, mpe, mco]----Checkout API------------ ----[mlb]----Checkout Transparente------------** (modelo 1:1).                                                                                                           |
| Credenciais                     | Senhas exclusivas usadas para identificar uma integração em sua conta e permitir a navegação segura e a proteção de dados dos usuários. Consulte a [documentação de Credenciais](/developers/en/docs/split-payments/additional-content/your-integrations/credentials) para obter mais informações.                     |
| Contas de teste                 | Contas de teste permitem realizar testes na aplicação para garantir que tudo está funcionando corretamente. Você pode criá-las em [Suas integrações](https://www.mercadopago.com.br/developers/panel/app).                                                                              |
