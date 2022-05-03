## Alterar textos

| Brick | Card Payment Brick |
|--- |--- |
| Momento de customização | Ao renderizar brick |
| Propriedade | 'customization.texts.{cardNumber, cardExpirationDate, cardSecurityCode, cardholderName, cardholderIdentification, cardholderEmail, formTitle, emailSectionTitle, installmentsSectionTitle, selectInstallments, formSubmit} |
| Atributo | label, placeholder |
| Tipo | String |
| Observações | Ao enviar um texto vazio, a tela apresentará o texto definido pelo layout padrão. Por outro lado, ao se enviar um texto customizado, este substituirá o texto padrão. Para verificar quais são os textos padrões, veja a seção Layout do brick desejado. <br> <br> Caso os textos customizados sejam maiores do que o espaço disponível, o texto apresentado será interrompido até o tamanho máximo permitido e o excedente será substituído pelo símbolo "...". |
