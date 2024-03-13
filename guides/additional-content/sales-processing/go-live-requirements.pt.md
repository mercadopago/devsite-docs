# Requisitos para entrar em produção

Quando sua integração estiver pronta e você quiser começar a receber pagamentos, você deve [ativar as credenciais](/developers/pt/guides/additional-content/your-integrations/credentials) de produção e substituir as credenciais de teste, se necessário. 

Além disso,  recomendamos que você cumpra as seguintes considerações adicionais.

## Homologação

Para oferecer a melhor experiência tanto para o vendedor quanto para o comprador, é importante avaliar a [qualidade de sua integração](/developers/pt/guides/additional-content/homologator/homologator) com nossa ferramenta de homologação. Este processo possibilita certificar-se de que a integração cumpre com os requisitos de qualidade e segurança necessários.  

## Certificado SSL

Para garantir uma integração segura e que proteja os dados de cada transação, é necessário implementar um certificado SSL. Além disso, é importante que a forma de pagamento seja disponibilizada em uma página web que utilize o protocolo HTTPS. Este protocolo assegura a criptografia dos dados transmitidos entre o cliente e o servidor.

Adotar estas medidas não apenas reforça a segurança dos dados dos usuários, mas também assegura a conformidade com as normativas e leis específicas de cada país relativas à proteção de dados e à segurança da informação. Além disso, contribui significativamente para proporcionar uma experiência de compra mais segura e confiável.

Apesar de não ser obrigatório durante a fase de testes, o certificado é obrigatório para iniciar em produção. Para mais informações, [confira os termos e condições do Mercado Pago](/developers/pt/guides/resources/legal/terms-and-conditions).

----[mlb]----
## Chave Pix

A opção de pagamento com Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo.

------------

## Aprovação de pagamentos

Para otimizar a taxa de aprovação de pagamentos, diversas estratégias podem ser adotadas, abrangendo desde a inclusão precisa de informações relacionadas ao item vendido e aos dados do comprador, até a entrega de detalhes sobre o envio e especificidades do setor de atuação. 

Para mais informações sobre os principais motivos pelos quais um pagamento pode ser recusado e como fazer para evitar essas recusas, acesse a documentação [Como melhorar a aprovação de pagamentos](/developers/pt/guides/additional-content/how-tos/payment-rejections)

## Notificações

Mantenha o status dos pedidos atualizados em seus sistemas, usando e processando as notificações [IPN](/developers/pt/guides/additional-content/your-integrations/ipn) ou [Webhooks](/developers/pt/guides/additional-content/your-integrations/webhooks).

## Relatórios

Os [relatórios do Mercado Pago](/developers/pt/guides/additional-content/reports/introduction) fornecem informações financeiras para acompanhar as movimentações da sua conta, como saldo disponível, transações e liquidez. Isso facilita a conciliação das vendas e outras operações com seus sistemas de gestão internos.

Recomendamos que você utilize os relatórios para melhorar a gestão financeira da sua empresa assim que sair a produção.