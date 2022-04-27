# Desativação da criptografia TLS 1.0 no Mercado Pago

No Mercado Pago procuramos sempre otimizar nossa plataforma oferecendo a mais alta eficiência e segurança no processamento de pagamentos.

No momento, estamos trabalhando no desligamento do protocolo de criptografia TLS 1.0 para os domínios https://api.mercadopago.com e https://pagamento.mercadopago.com com o objetivo de manter os mais altos padrões de qualidade e promover a segurança de dados de nossos clientes.
Consequentemente, o Mercado Pago exigirá que suas conexões com os domínios https://api.mercadopago.com e https://pagamento.mercadopago.com sejam realizados utilizando o protocolo TLS 1.2 ou superior.

Depois desse prazo, o protocolo TLS 1.0 estará desativado e qualquer tentativa de conexão utilizando o TLS 1.0, falhará.

### Pontos para serem levados em conta

* Se você usa apenas Mercado Livre, essa alteração não afetará você.
* Se você usa apenas os botões de pagamento de Mercado Pago, essa alteração não afetará você.
* Se você usa apenas Mercado Shops, essa alteração não afetará você.
* Se você usa apenas VTEX, essa alteração não afetará você.
* Caso tenha seu **próprio e-commerce, consulte sua equipe de TI**.
* Caso **opere com alguma plataforma de e-commerce**, como por exemplo: Magento, Shopify ou outros **Consulte seu respectivo suporte técnico**.


## Introdução

### O que é o TLS?

TLS é o acrônimo para "Transport Layer Security". É um protocolo que garante privacidade e integridade de dados entre dois aplicativos que se comunicam pela rede.

É o protocolo de segurança mais utilizado atualmente e é usado em navegadores e outros aplicativos que exigem que os dados sejam trocados com segurança em uma rede. O TLS garante que uma conexão entre dois pontos finais se realize através de criptografia e que os pontos de origem e destino tenham sua identidade verificada. As versões do TLS até o momento são TLS 1.0, 1.1 e 1.2.

As conexões de Internet e das APIs do Mercado Pago utilizam o protocolo TLS como um componente chave de sua segurança.

HTTPS (web) e STARTTLS SMTP (email), também usam o TLS como um componente de segurança.

### Por que essa mudança será feita?

No Mercado Pago levamos a segurança muito a sério e ajudamos nossos clientes a melhorá-la usando os protocolos de segurança mais recentes.


## Ação necessária para a integrações da API

Se suas integrações que usam conexões de entrada com o Mercado Pago, não tiverem os protocolos TLS 1.1 e/ou TLS 1.2 ativados após essa alteração, elas começarão a falhar

Recomendamos que você comece a planejar a inclusão do protocolo TLS 1.2 o mais rápido possível.

Veja as diretrizes de compatibilidade abaixo:

| Plataforma | Notas de Compatibilidade |
| --- | --- |
| Java (Oracle) | Compatível com a versão mais recente, independente do sistema operacional.  |
| Java 8 (1.8) y versões posteriores | Compatível com a criptografia TLS 1.1 ou versões posteriores, por padrão. |
| Java 7 (1.7) | Ative o TLS 1.1 e o TLS 1.2 usando a propriedade do sistema Java https.protocols para HttpsURLConnection. Para ativar o TLS 1.1 e o TLS 1.2 em conexões sem HttpsURLConnection, defina os protocolos ativos nas instâncias criadas de SSLSocket e SSLEngine, no código-fonte do aplicativo. A mudança para o IBM Java, pode ser uma solução eficaz caso a atualização para uma versão mais recente do Oracle Java, não seja possível. |
| Java 6 (1.6) atualização 111 e posteriores | Ative o TLS 1.1 usando a propriedade do sistema Java https.protocols para HttpsURLConnection. Para ativar o TLS 1.1 em conexões sem HttpsURLConnection, defina os protocolos ativados nas instâncias criadas de SSLSocket e SSLEngine, no código-fonte do aplicativo. Esta atualização do Java 6 e as atualizações posteriores não estão publicamente disponíveis e exigem um contrato de suporte para o Java 6 da Oracle. |
| Java 6 (1.6) e versões anteriores (versões disponíveis publicamente) | Não são compatíveis com criptografia TLS 1.1 ou versões posteriores. A mudança para o IBM Java pode ser uma solução eficaz, caso a atualização para uma versão mais recente do Oracle Java não seja possível. |
| Java 8 |	Compatível com a criptografia TLS 1.1 ou versões posteriores por padrão. Você pode ter que configurar com.ibm.jsse2.overrideDefaultTLS = true, caso seu aplicativo ou uma biblioteca de chamadas use SSLContext.getinstance (TLS). |
| Java 7 e versões posteriores; atualização de serviço 1 do Java 6.0.1 (J9 VM2.6) e versões posteriores; e a atualização de serviço 10 do Java 6 e versões posteriores. | Ative o TLS 1.2 usando a propriedade do sistema Java https.protocols para HttpsURLConnection e a propriedade do sistema Java com.ibm.jsse2.overrideDefaultProtocol para conexões SSLSocket e SSLEngine, conforme recomendado pela documentação da IBM. Você também pode ter que configurar com.ibm.jsse2.overrideDefaultTLS = true. |
| .NET | Compatível com a versão mais recente quando executado em um sistema operacional que suporte o TLS 1.1 ou o TLS 1.2 |
| .NET 4.6 e versões posteriores | Compatível com criptografia TLS 1.1 ou versões posteriores por padrão. |
| .NET 4.5 à 4.5.2 | O .NET 4.5, 4.5.1 e 4.5.2 não ativam o TLS 1.1 e o TLS 1.2 por padrão. Existem duas opções para ativá-las, conforme descrito abaixo. |
| .NET 4.0 | O .NET 4.0 não ativa o TLS 1.2 por padrão. Para configurar o TLS 1.2 como padrão, é possível instalar o .NET Framework 4.5 ou posterior e definir o valor DWORD de SchUseStrongCrypto como 1 nas duas seguintes chaves do registro do sistema. Caso essas chaves não existam, é necessário criá-las: HKEY_LOCAL_MACHINE \ SOFTWARE \ Microsoft \ .NETFramework \ v4.0.30319 e HKEY_LOCAL_MACHINE \ SOFTWARE \ Wow6432Node \ Microsoft \ .NETFramework \ v4.0.30319. Essas chaves de registro podem ativar o TLS 1.2 por padrão em todos os aplicativos .NET 4.0, 4.5, 4.5.1 e 4.5.2 instalados nesse sistema. Recomendamos testar essa alteração antes de implementá-la em seus servidores de produção. Isso também está disponível como um arquivo de importação para o registro do sistema, porém essas configurações de registro do sistema não afetarão os aplicativos .NET que definem o valor System.Net.ServicePointManager.SecurityProtocol. |
| .NET 3.5 e versões anteriores | Não são compatíveis com criptografia TLS 1.1 ou versões posteriores |
| Python | Compatível com a versão mais recente, quando executado em um sistema operacional que suporte o TLS 1.1 ou o TLS 1.2 |
| Python 2.7.9 e versões posteriores | Compatível com criptografia TLS 1.1 ou versões posteriores por padrão. |
| Python 2.7.8 e versões anteriores | Não são compatíveis com criptografia TLS 1.1 ou versões posteriores. |
| Ruby | Compatível com a versão mais recente e estável quando está vinculado ao OpenSSL 1.0.1 ou versões posteriores. |
| Ruby 2.0.0 | O TLS 1.2 é ativado por padrão quando usado com o OpenSSL 1.0.1 ou posterior. O uso dos símbolos: TLSv1_2 (preferencial) ou TLSv1_1 com ssl_version do SSLContext, ajuda a garantir que o TLS 1.0 ou versões anteriores sejam desativadas. |
| Ruby 1.9.3 e versões anteriores | O símbolo: TLSv1_2 não existe na versão 1.9.3 nem anteriores, mas é possível corrigir o Ruby para adicionar esse símbolo e compilar o Ruby com o OpenSSL 1.0.1 ou posterior. |
| Android 4.x | Necessário forçar o uso do TLS 1.2, veja o exemplo [neste snippet de código](https://gist.github.com/zehemz/fdf777a64a173a58beb6f9132eb7655c). |
| Android 5.x | TLS 1.2 é suportado por padrão. |

Caso você precise fazer adaptações, **é importante que você se lembre de fazer essa alteração em tempo hábil, porque caso contrário, é muito provável que suas conexões com o Mercado Pago comecem a falhar.**

Se você tiver alguma dúvida ou precisar de ajuda para concluir com êxito essa mudança, entre em contato conosco através do seguinte e-mail: soportemigraciones@mercadopago.com.

Equipe do Mercado Pago.
