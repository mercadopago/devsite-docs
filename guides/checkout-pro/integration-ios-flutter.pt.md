# Integrar o Checkout Pro para iOS com Flutter

> WARNING
>
> Importante
>
> Antes de começar a integrar o Checkout Pro para Mobile, você precisará ter uma preferência criada em seu backend. Se você ainda não fez isso, vá para [Criar preferências](/developers/pt/docs/checkout-pro/integrate-preferences).

Para integrar o Checkout Pro em um aplicativo móvel desenvolvido com Flutter, você precisará mostrar o checkout web dentro do aplicativo. Para fazer isso, existem várias opções, sendo a mais destacada o uso de Custom Tabs. Essa tecnologia permite abrir páginas da web em um navegador nativo integrado ao aplicativo, proporcionando uma experiência de navegação mais suave e consistente para os usuários.

Nesta etapa, vamos implementar Custom Tabs em um aplicativo Flutter usando **flutter_custom_tabs**. Mostraremos como instalar as bibliotecas necessárias, como configurar as dependências e daremos exemplos práticos de como abrir páginas da web usando Custom Tabs.

> CLIENT_SIDE
>
> h2
>
> Instalar a dependência Flutter Custom Tabs

Para instalar a dependência Flutter Custom Tabs, você pode executar o seguinte comando no diretório raiz do seu projeto:

```terminal
$ flutter pub add flutter_custom_tabs
```

Isso adicionará a linha `dependencies:  flutter_custom_tabs: ^1.2.1` ao arquivo **pubspec.yaml** do pacote. Também executará um comando implícito `flutter pub get`.

> NOTE
> 
> Nota
>
> Conheça mais na [documentação oficial do Flutter Custom Tabs](https://pub.dev/packages/flutter_custom_tabs).

Para usar a dependência você deve primeiro importá-la para o código Dart onde será necessário mostrar o Checkout. Para importá-lo, use o seguinte comando:

```terminal
import 'package:flutter_custom_tabs/flutter_custom_tabs.dart';
```

### Exemplo de integração do Flutter Custom Tabs

A seguir, compartilhamos um exemplo da integração do Flutter usando Custom Tabs:

```javascript
import 'package:flutter/material.dart';
import 'package:flutter_custom_tabs/flutter_custom_tabs.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        body: Center(
          child: TextButton(
            child: const Text('Show Flutter homepage'),
            onPressed: () => _launchURL(context),
          ),
        ),
      ),
    );
  }

  void _launchURL(BuildContext context) async {
    try {
      await launch(
        'https://flutter.dev',
        customTabsOption: CustomTabsOption(
          toolbarColor: Theme.of(context).primaryColor,
          enableDefaultShare: true,
          enableUrlBarHiding: true,
          showPageTitle: true,
          animation: CustomTabsAnimation.slideIn(),
          // or user defined animation.
          animation: const CustomTabsAnimation(
            startEnter: 'slide_up',
            startExit: 'android:anim/fade_out',
            endEnter: 'android:anim/fade_in',
            endExit: 'slide_down',
          ),
          extraCustomTabs: const <String>[
            // ref. https://play.google.com/store/apps/details?id=org.mozilla.firefox
            'org.mozilla.firefox',
            // ref. https://play.google.com/store/apps/details?id=com.microsoft.emmx
            'com.microsoft.emmx',
          ],
        ),                    
        safariVCOption: SafariViewControllerOption(
          preferredBarTintColor: Theme.of(context).primaryColor,
          preferredControlTintColor: Colors.white,
          barCollapsingEnabled: true,
          entersReaderIfAvailable: false,
          dismissButtonStyle: SafariViewControllerDismissButtonStyle.close,        
        ),
      );
    } catch (e) {
      // An exception is thrown if browser app is not installed on Android device.
      debugPrint(e.toString());
    }
  }
}
```

> NOTE
>
> Personalizar a aparência de acordo com a plataforma
>
> É possível personalizar a aparência da tela que será exibida especificando opções para cada plataforma. Para personalizar a aparência no iOS, você precisará fazer isso com o SFSSafariViewController. Saiba mais na [documentação oficial](https://pub.dev/packages/flutter_custom_tabs).

> CLIENT_SIDE
>
> h2
>
> Como retornar ao sua app

**Deep Links**, também conhecidos como links diretos, são uma forma poderosa de permitir a navegação direta para telas ou seções específicas de uma aplicação móvel. No Flutter, configurar corretamente os Deep Links é essencial para garantir uma experiência de usuário fluida e sem problemas.


Nesta seção da documentação, você encontrará como configurar os Deep Links em um aplicativo Flutter com base na [documentação oficial do Flutter](https://docs.flutter.dev/ui/navigation/deep-linking?gclid=CjwKCAjwrranBhAEEiwAzbhNtSuZ4qnpJoRrs1AgJ8SzP80sc4EmZA3_VlFInWPQ-42suf1Wm31K9RoC0f4QAvD_BwE&gclsrc=aw.ds).

Com a configuração adequada dos Deep Links no Flutter, você poderá oferecer aos usuários a capacidade de acessar diretamente conteúdos específicos em seu aplicativo, aprimorando a navegação e a experiência geral do usuário.

### Criar um Deep Link

A partir do nosso checkout, é possível configurar Deep Links para retornar ao sua aplicação, seja clicando em um link "Voltar" ou automaticamente após concluir um fluxo de pagamento bem-sucedido, redirecionando-o de volta ao sua aplicação.

Para isso, devemos adicionar as propriedades `back_urls` e `auto_return` ao criar a preferência de pagamento, conforme necessário.

Para saber mais, você pode acessar a documentação sobre [URLs de retorno](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Configuração da aplicação para gerenciar o Deep Link

O Flutter suporta deep linking no iOS e navegadores da web. Ao abrir uma URL, essa tela será exibida no seu aplicativo. Abaixo, mostraremos como você pode iniciar e mostrar rotas criando rotas com nomes (seja com o parâmetro routes ou com onGenerateRoute) ou com o widget Router.

Se o aplicativo estiver sendo executado em um navegador da web, nenhuma configuração adicional será necessária. As rotas são gerenciadas da mesma forma que um deep link do iOS. Por padrão, os aplicativos da web leem o caminho do deep link a partir do fragmento da URL usando o padrão /#/path/to/app/screen, mas isso pode ser alterado configurando a estratégia de URL para o seu aplicativo.

> Para saber mais, consulte a documentação oficial sobre [como lidar com Deep Links para aplicativos Flutter](https://medium.com/flutter-community/deep-links-and-flutter-applications-how-to-handle-them-properly-8c9865af9283) e [como configurar Universal Link iOS](https://docs.flutter.dev/cookbook/navigation/set-up-universal-links)






