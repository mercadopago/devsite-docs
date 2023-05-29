# Desativação da criptografia TLS 1.1 no Mercado Pago

No Mercado Pago procuramos sempre otimizar nossa plataforma oferecendo a mais alta eficiência e segurança no processamento de pagamentos.

No momento, estamos trabalhando no desligamento do protocolo de criptografia TLS 1.1 para os domínios https://api.mercadopago.com e https://pagamento.mercadopago.com com o objetivo de manter os mais altos padrões de qualidade e promover a segurança de dados de nossos clientes.

> WARNING
>
> Importante
>
> Uma vez desativado o protocolo TLS 1.1, **qualquer tentativa de conexão utilizando o TLS 1.1, falhará**. Além disso, o Mercado Pago exigirá que suas conexões com os domínios https://api.mercadopago.com e https://pagamento.mercadopago.com sejam realizados utilizando o protocolo TLS 1.2 ou superior.

## Pontos para serem levados em conta

* Se você usa apenas Mercado Livre, essa alteração não afetará você.
* Se você usa apenas os botões de pagamento de Mercado Pago, essa alteração não afetará você.
* Se você usa apenas Mercado Shops, essa alteração não afetará você.
* Se você usa apenas VTEX, essa alteração não afetará você.
* Caso tenha seu **próprio e-commerce, consulte sua equipe de TI**.
* Caso **opere com alguma plataforma de e-commerce**, como por exemplo: Magento, Shopify ou outros **Consulte seu respectivo suporte técnico**.


## Introdução

TLS é o acrônimo para "Transport Layer Security". É um protocolo que garante privacidade e integridade de dados entre dois aplicativos que se comunicam pela rede.

É o protocolo de segurança mais utilizado atualmente e é usado em navegadores e outros aplicativos que exigem que os dados sejam trocados com segurança em uma rede. O TLS garante que uma conexão entre dois pontos finais se realize através de criptografia e que os pontos de origem e destino tenham sua identidade verificada. As versões do TLS até o momento são TLS 1.0, 1.1 e 1.2 e 1.3.

As conexões de Internet e das APIs do Mercado Pago utilizam o protocolo TLS como um componente chave de sua segurança.

HTTPS (web) e STARTTLS SMTP (email), também usam o TLS como um componente de segurança.

## Por que essa mudança será feita?

No Mercado Pago levamos a segurança muito a sério e ajudamos nossos clientes a melhorá-la usando os protocolos de segurança mais recentes.


## Ação necessária para integrações via API

Se suas integrações que usam conexões de entrada com o Mercado Pago, não tiverem os protocolos TLS 1.1 e/ou TLS 1.2 ativados após essa alteração, elas começarão a falhar

> WARNING
>
> Importante
>
> Recomendamos que você atualize para o protocolo TLS 1.2 **antes de 12 de junho de 2023**.

Veja as diretrizes de compatibilidade abaixo:

| Plataforma  | Notas de Compatibilidade  |
| --- | --- |
| Java (Oracle)  | Compatível com a versão mais recente, independente do sistema operacional.  |
| Java 8 (1.8) y versões posteriores  | Compatível com a criptografia TLS 1.2 ou versões posteriores, por padrão.  |
| Java 7 (1.7)  | Ative TLS 1.2 usando a propriedade do sistema Java https.protocols para HttpsURLConnection. Para ativar o TLS 1.2 em conexões sem HttpsURLConnection, defina os protocolos ativos nas instâncias criadas de SSLSocket e SSLEngine, no código-fonte do aplicativo. A mudança para o IBM Java, pode ser uma solução eficaz caso a atualização para uma versão mais recente do Oracle Java, não seja possível.  |
| Java 8  | Compatível com a criptografia TLS 1.2 ou versões posteriores por padrão. Você pode ter que configurar com.ibm.jsse2.overrideDefaultTLS = true, caso seu aplicativo ou uma biblioteca de chamadas use SSLContext.getinstance (TLS).  |
| Java 7 e versões posteriores; atualização de serviço 1 do Java 6.0.1 (J9 VM2.6) e versões posteriores; e a atualização de serviço 10 do Java 6 e versões posteriores.  | Ative o TLS 1.2 usando a propriedade do sistema Java https.protocols para HttpsURLConnection e a propriedade do sistema Java com.ibm.jsse2.overrideDefaultProtocol para conexões SSLSocket e SSLEngine, conforme recomendado pela documentação da IBM. Você também pode ter que configurar com.ibm.jsse2.overrideDefaultTLS = true.  |
| .NET  | Compatível com a versão mais recente quando executado em um sistema operacional que suporte TLS 1.2  |
| .NET 4.6 e versões posteriores  | Compatível com criptografia TLS 1.2 ou versões posteriores por padrão.  |
| .NET 4.5 à 4.5.2  | O .NET 4.5, 4.5.1 e 4.5.2 não ativam TLS 1.2 por padrão. Existem duas opções para ativá-las, conforme descrito abaixo.  |
| .NET 4.0  | O .NET 4.0 não ativa o TLS 1.2 por padrão. Para configurar o TLS 1.2 como padrão, é possível instalar o .NET Framework 4.5 ou posterior e definir o valor DWORD de SchUseStrongCrypto como 1 nas duas seguintes chaves do registro do sistema. Caso essas chaves não existam, é necessário criá-las: HKEY_LOCAL_MACHINE \ SOFTWARE \ Microsoft \ .NETFramework \ v4.0.30319 e HKEY_LOCAL_MACHINE \ SOFTWARE \ Wow6432Node \ Microsoft \ .NETFramework \ v4.0.30319. Essas chaves de registro podem ativar o TLS 1.2 por padrão em todos os aplicativos .NET 4.0, 4.5, 4.5.1 e 4.5.2 instalados nesse sistema. Recomendamos testar essa alteração antes de implementá-la em seus servidores de produção. Isso também está disponível como um arquivo de importação para o registro do sistema, porém essas configurações de registro do sistema não afetarão os aplicativos .NET que definem o valor System.Net.ServicePointManager.SecurityProtocol.  |
| .NET 3.5 e versões anteriores  | Não são compatíveis com criptografia TLS 1.2 ou versões posteriores  |
| Python  | Compatível com a versão mais recente, quando executado em um sistema operacional que suporte TLS 1.2  |
| Python 2.7.9 e versões posteriores  | Compatível com criptografia TLS 1.2 ou versões posteriores por padrão.  |
| Python 2.7.8 e versões anteriores  | Não são compatíveis com criptografia TLS 1.1 ou versões posteriores.  |
| Ruby  | Compatível com a versão mais recente e estável quando está vinculado ao OpenSSL 1.0.1 ou versões posteriores.  |
| Ruby 2.0.0  | O TLS 1.2 é ativado por padrão quando usado com o OpenSSL 1.0.1 ou posterior. O uso dos símbolos: TLSv1_2 com ssl_version do SSLContext, ajuda a garantir que o TLS 1.1 ou versões anteriores sejam desativadas.  |
| Ruby 1.9.3 e versões anteriores  | O símbolo: TLSv1_2 não existe na versão 1.9.3 nem anteriores, mas é possível corrigir o Ruby para adicionar esse símbolo e compilar o Ruby com o OpenSSL 1.0.1 ou posterior.  |
| Android 5.x e versões posteriores  | TLS 1.2 é suportado por padrão.  |

## Como verificar a versão atual do TLS?


Para validar se sua integração está mantendo uma conexão usando um protocolo diferente do TLS 1.2, utilize um dos seguintes trechos dentro de seu aplicativo para verificar qual protocolo é usado por padrão para conexões.

[[[
```php
<?php
  $curl_info = curl_version();
  echo "protocol: " . $curl_info['ssl_version'];
?>

```
```java
SSLSocket ss = (SSLSocket) SSLSocketFactory.getDefault().createSocket("api.mercadopago.com", 443);
System.out.println("protocol: " + ss.getSession().getProtocol());

```
```csharp
string strWebsiteName = "api.mercadopago.com";
TcpClient _myClient = new TcpClient();
SslStream _myStream;
_myClient.Connect(strWebsiteName, 443);
_myStream = new SslStream(_myClient.GetStream());
_myStream.AuthenticateAsClient(strWebsiteName);

Console.WriteLine("protocol : " + _myStream.SslProtocol);

```
]]]