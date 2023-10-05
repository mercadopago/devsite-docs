# Restrições

Para garantir a segurança e estabilidade do ecossistema de integração, considere as restrições do uso de funcionalidades do dispositivo e do sistema Android.

## Fluxo de OAuth

Para obter informações dos pagamentos, da pessoa usuária ou executar alguma operação sobre a conta da pessoa vendedora, como cobranças ou devoluções, gere um token por meio do [fluxo de OAuth](/developers/pt/docs/main-apps/additional-content/security/oauth/introduction) e utilize a [API pública do Mercado Pago](/developers/pt/reference).

## Versão do Ecossistema

Na configuração do aplicativo, verifique a versão do sistema operacional do dispositivo. A Point Smart usa o Android 6, o que implica em um API Level mínimo de 23.

Os dispositivos SmartPOS têm um sistema operacional AOSP, e por esta razão, não contam com diversos serviços do Google e Firebase. Consulte quais estão disponíveis na [página oficial do Firebase](https://firebase.google.com/docs/android/android-play-services?hl=pt).

## Permissões e configurações do Android Market

Durante o desenvolvimento, algumas [permissões](https://developer.android.com/guide/topics/permissions/overview?hl=pt-br) devem ser especificadas no [Android Manifest](https://developer.android.com/guide/topics/manifest/manifest-intro?hl=pt-br), a fim de acessar informações confidenciais ou determinadas funções do sistema. As que podem ser declaradas são aquelas essenciais para a comunicação em rede, como a permissão de internet (`android.permission.INTERNET`).

Se precisar de alguma funcionalidade adicional, entre em contato com a equipe de suporte do Mercado Pago.

## Segurança e uso de biblioteca de terceiros

Ao construir o aplicativo, não use bibliotecas obsoletas ou com vulnerabilidades de segurança. 

As que interagem diretamente com o hardware do dispositivo, como as dos fabricantes, são de uso exclusivo da equipe do Mercado Pago. Entre em contato caso precise de alguma funcionalidade desse tipo.

## Problema com o Build Tools

> WARNING
>
> Atenção
>
> Se a mensagem **"O Build Tools instalado revisão 32.0.0 está danificado”** for apresentada, exclua o programa e instale novamente utilizando o **SDK Manager**.

Em seguida, execute este comando no terminal:

```shell command
cd ~/Library/Android/sdk/build-tools/32.0.0 \
  && mv d8 dx \
  && cd lib  \
  && mv d8.jar dx.jar
```