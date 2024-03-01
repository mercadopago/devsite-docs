# Entrar em produção

Ao finalizar os testes e garantir o correto funcionamento da integração, será necessário colocá-la em produção, o que permitirá o recebimento de pagamentos reais. Para isso, ative suas [credenciais de produção](/developers/pt/docs/qr-code/additional-content/your-integrations/credentials) e substitua as de teste. 

Feito isso, siga as etapas abaixo e garanta que cada uma delas seja cumprida. Isso garantirá que a saída à produção seja feita com êxito.

## Homologação 
Para oferecer a melhor experiência tanto para o vendedor quanto para o comprador, é importante **validar a qualidade da sua integração** de acordo com os padrões do Mercado Pago antes de ir para a produção. 

O processo de homologação possibilita certificar-se de que a integração cumpre com os requisitos de qualidade necessários. Caso não atenda, serão sugeridos ajustes necessários para otimizar o desenvolvimento antes do recebimento de pagamentos reais.

Para medir a qualidade da sua integração com o Código QR, siga as etapas descritas abaixo.

> WARNING
>
> Importante
> 
> O processo de homologação deve ser realizado para o aplicativo que criado com as **credenciais de produção**.

1. Acesse [Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) no painel superior direito do Devsite. 
2. Em seguida, clique no aplicativo criado e selecione **Avaliar a qualidade** para acessar a ferramenta na qual você pode medir a qualidade da sua integração.

![Detalhes da aplicação no Painel do Desenvolvedor](/images/qr/homologacion-qr-pt.png)

3. Siga as instruções fornecidas pela ferramenta de homologação para realizar o processo. Tenha em mente que as ações indicadas como **necessárias** devem ser concluídas para acumular pontos que irão melhorar a qualidade da sua integração, enquanto as indicadas como **boas práticas** são recomendadas, mas não afetarão a pontuação.

> NOTE
>
> Nota
> 
> Se você faz parte da nossa Carteira Assessorada, entre em contato com a equipe de Integrações para realizar a homologação.

## Certificado SSL
Para que sua integração seja segura e proteja os dados das transações, é necessário ter um **certificado SSL**. 

Com isto, é possível garantir a segurança dos dados de seus clientes, cumprir os regulamentos ou disposições legais de cada país e conseguir a melhor experiência de compra para suas vendas.

Apesar de não ser obrigatório durante a fase de testes, o certificado é obrigatório para iniciar em produção.

## Relatórios
Os [relatórios do Mercado Pago](/developers/pt/docs/qr-code/additional-content/reports/introduction) fornecem informações financeiras para acompanhar as movimentações da sua conta, como saldo disponível, transações e liquidez. Isso facilita a conciliação das vendas e outras operações com seus sistemas de gestão internos.

Recomendamos que você utilize os relatórios para melhorar a gestão financeira da sua empresa assim que sair a produção.
