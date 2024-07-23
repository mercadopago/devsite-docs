# Requisitos para entrar em produção

Ao finalizar o processo de integração e testes, o ambiente estará pronto para ser colocado em produção. Nesta documentação, detalharemos os requisitos necessários para fazer essa transição de forma eficaz e segura, garantindo que sua integração esteja preparada para receber pagamentos reais.

## Verificar o uso de credenciais de produção

Embora todo o processo de teste de integração com o Mercado Pago Point seja realizado utilizando credenciais de produção de usuários produtivos, é importante **verificar se as credenciais que estão sendo utilizadas para entrar em produção pertencem à conta integradora**.

Para isso, acesse [Suas Integrações](/developers/panel/app), selecione a aplicação e, no menu lateral, acesse **Produção > Credenciais de produção**, onde será possível encontrar a Public Key e o Access Token de produção. Compare esses dados com aqueles utilizados durante a fase de desenvolvimento e testes. Se detectar alguma diferença, substitua as credenciais pelas que estão em Suas Integrações.

## Verificar a configuração de notificações Webhooks

Recomendamos que verifique se fez a configuração correta das [notificações Webhooks](/developers/pt/docs/mp-point/additional-content/your-integrations/notifications/webhooks) para manter o estado dos pedidos atualizado em seus sistemas.

Para isso, acesse [Suas Integrações](/developers/panel/app) e, no menu lateral, acesse **Webhooks**. Se suas notificações estiverem corretamente configuradas, você verá a URL e os eventos estabelecidos. Se detectar alguma irregularidade, pode redefinir suas configurações iniciais e substituí-las por novas.

----[mlb]----
## Chave Pix
A opção de pagamento via Pix só será exibida se houver uma Chave Pix cadastrada no Mercado Pago. Se ainda não criou uma, veja o [vídeo tutoral](https://www.youtube.com/watch?v=60tApKYVnkA) e consulte o passo a passo.

------------

## Medir a qualidade da integração

Para oferecer uma melhor experiência tanto para o vendedor quanto para o comprador, é importante analisar a [qualidade de sua integração](/developers/pt/docs/mp-point/how-tos/integration-quality) com a nossa ferramenta de homologação.

Este processo assegura que a integração atenda aos **requisitos de qualidade e segurança do Mercado Pago** antes de iniciar o processamento de pagamentos reais. Inserindo o `payment ID` de um pagamento efetuado com credenciais de produção, nossa ferramenta realiza uma avaliação completa, focando em aspectos fundamentais para a eficácia da integração, como a melhoria na aprovação de pagamentos, conciliação financeira ou segurança, entre outros.

Caso a ferramenta identifique necessidades de ajustes, serão recomendadas ações e boas práticas para otimizar esses pontos avaliados, garantindo que a integração preencha os requisitos necessários.

## Relatórios

Os [relatórios do Mercado Pago](/developers/pt/docs/mp-point/additional-content/reports/introduction) fornecem informações financeiras para acompanhar as movimentações da sua conta, como saldo disponível, transações e liquidez. Isso facilita a conciliação das vendas e outras operações com seus sistemas de gestão internos.

Recomendamos que você utilize os relatórios para melhorar a gestão financeira da sua empresa assim que sair à produção.
