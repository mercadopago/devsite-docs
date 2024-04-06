# Requisitos para entrar em produção

Ao finalizar o processo de integração, o ambiente estará pronto para ser colocado em produção. Nesta documentação, detalharemos os requisitos necessário para realizar essa mudança de maneira eficaz e segura, garantindo que a integração esteja preparada para o recebimento de pagamentos reais.

## Ativar credenciais de produção

Para começar a receber pagamentos, você deve **ativar as credenciais de produção** e substituir as credenciais de teste. 

Para isso, acesse o [Painel do Desenvolvedor](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials) e, no menu lateral, acesse **Produção > Credenciais de Produção**. Ali você encontrará seu _Public Key_ e _Access Token_ produtivos, que devem substituir os de teste utilizados nas etapas anteriores.

![Credenciais de produção](/images/woocomerce/test-prod-credentials.png)

Para obter mais informações, consulte nossa documentação sobre [Credenciais](/developers/pt/guides/additional-content/your-integrations/credentials).

## Certificado SSL

Para garantir uma integração segura e que proteja os dados de cada transação, é necessário implementar um certificado SSL. Além disso, é importante que a forma de pagamento seja disponibilizada em uma página web que utilize o protocolo HTTPS. Este protocolo assegura a criptografia dos dados transmitidos entre o cliente e o servidor.

Adotar estas medidas não apenas reforça a segurança dos dados dos usuários, mas também assegura a conformidade com as normativas e leis específicas de cada país relativas à proteção de dados e à segurança da informação. Além disso, contribui significativamente para proporcionar uma experiência de compra mais segura e confiável.

Embora a exigência do certificado SSL não se aplique durante o período de testes, sua implementação é obrigatória para entrar em produção. Para mais informações, [confira os termos e condições do Mercado Pago](/developers/pt/guides/resources/legal/terms-and-conditions).

----[mlb]----
## Chave Pix

A opção de pagamento com Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.

------------

## Considerações adicionais

### Homologação

Para oferecer a melhor experiência tanto para o vendedor quanto para o comprador, é importante analisar a [qualidade de sua integração](/developers/pt/guides/additional-content/homologator/homologator) com nossa ferramenta de homologação. 

Este processo assegura que a integração atenda aos **requisitos de qualidade e segurança do Mercado Pago** antes de iniciar o processamento de pagamentos reais. Inserindo o `payment ID` de um pagamento efetuado com credenciais de produção, nossa ferramenta realiza uma avaliação completa, focando em aspectos fundamentais para a eficácia da integração, como a melhoria na aprovação de pagamentos, conciliação financeira ou segurança, entre outros.

Caso a ferramenta identifique necessidades de ajustes, serão recomendadas ações e boas práticas para otimizar esses pontos avaliados, garantindo que a integração preencha os requisitos necessários.

### Aprovação de pagamentos

Para otimizar a taxa de aprovação de pagamentos, diversas estratégias podem ser adotadas, abrangendo desde a inclusão precisa de informações relacionadas ao item vendido e aos dados do comprador, até a entrega de detalhes sobre o envio e especificidades do setor de atuação. 

Para mais informações sobre os principais motivos pelos quais um pagamento pode ser recusado e como fazer para evitar essas recusas, acesse a documentação [Como melhorar a aprovação de pagamentos](/developers/pt/guides/additional-content/how-tos/payment-rejections)

### Notificações

Mantenha o status dos pedidos atualizados em seus sistemas, usando e processando as notificações [IPN](/developers/pt/guides/additional-content/your-integrations/ipn) ou [Webhooks](/developers/pt/guides/additional-content/your-integrations/webhooks).

### Relatórios

Os [relatórios do Mercado Pago](/developers/pt/guides/additional-content/reports/introduction) fornecem informações financeiras para acompanhar as movimentações da sua conta, como saldo disponível, transações e liquidez. Isso facilita a conciliação das vendas e outras operações com seus sistemas de gestão internos.

Recomendamos que você utilize os relatórios para melhorar a gestão financeira da sua empresa assim que sair a produção.