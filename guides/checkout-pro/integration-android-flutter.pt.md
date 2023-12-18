# Integrar o Checkout Pro para Android com Flutter

> WARNING
>
> Importante
>
> Antes de começar a integrar o Checkout Pro para Mobile, certifique-se de ter uma preferência criada em seu backend. Se você ainda não fez isso, vá para [Criar preferências](/developers/pt/docs/checkout-pro/integrate-preferences).

Para integrar o Checkout Pro em uma aplicação móvel desenvolvida com o Flutter, você precisará exibir o checkout da web dentro da aplicação. Para isso, existem diversas opções, sendo uma delas o uso de Custom Tabs. Essa tecnologia permite que páginas da web sejam abertas em um navegador nativo incorporado à aplicação, proporcionando uma experiência de navegação mais fluída e consistente aos usuários.

Nesta etapa, vamos implementar o Custom Tabs em uma aplicação Flutter usando **flutter_custom_tabs**. Mostraremos como instalar as bibliotecas necessárias, como configurar as dependências e daremos exemplos práticos de como abrir páginas da web usando o Custom Tabs.

> CLIENT_SIDE
>
> h2
>
> Instalação da dependência Flutter Custom Tabs

Para instalar a dependência Flutter Custom Tabs, execute o seguinte comando no diretório raiz do seu projeto:

```terminal
$ flutter pub add flutter_custom_tabs
```

Isso adicionará a linha `dependencies: flutter_custom_tabs: ^1.2.1` ao arquivo **pubspec.yaml** do pacote. Ele também executará um comando implícito `flutter pub get`.

> NOTE
>
> Nota
> 
> Conheça mais na [documentação oficial do Flutter Custom Tabs.](https://pub.dev/packages/flutter_custom_tabs)

Para usar a dependência, você deve importá-la primeiro no código Dart onde deseja exibir o Checkout. Para importar, adicione a seguinte linha no seu código:

```dart
import 'package:flutter_custom_tabs/flutter_custom_tabs.dart';
```

### Exemplo de integração do Flutter Custom Tabs

A seguir, compartilhamos um exemplo de integração do Flutter usando o Custom Tabs:

```dart
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
> É possível personalizar a aparência da tela que será exibida, especificando opções para cada plataforma. Para personalizar a aparência no Android, você deve fazer isso com o CustomTabsOption. Saiba mais na [documentação oficial.](https://pub.dev/packages/flutter_custom_tabs)

> CLIENT_SIDE
>
> h2
>
> Como retornar à sua app

**Deep Links**, também conhecidos como links diretos, são uma forma poderosa de permitir a navegação direta para telas ou seções específicas de uma aplicação móvel.

Nesta seção da documentação, você encontrará como configurar os Deep Links em uma aplicação Flutter com base na [documentação oficial do Flutter](https://docs.flutter.dev/ui/navigation/deep-linking?gclid=CjwKCAjwrranBhAEEiwAzbhNtSuZ4qnpJoRrs1AgJ8SzP80sc4EmZA3_VlFInWPQ-42suf1Wm31K9RoC0f4QAvD_BwE&gclsrc=aw.ds).

Com a configuração adequada dos Deep Links no Flutter, você poderá oferecer aos usuários a capacidade de acessar diretamente um conteúdo específico em sua aplicação, melhorando a navegação e a experiência geral do usuário.

### Criar um Deep Link

A partir do nosso checkout, é possível configurar Deep Links para retornar à sua aplicação. Isso pode ser feito clicando em um link "Voltar" ou automaticamente após a conclusão bem-sucedida de um fluxo de pagamento, redirecionando-o de volta à sua aplicação.

Para isso, devemos adicionar as propriedades `back_urls` e `auto_return` ao criar a preferência de pagamento, conforme necessário.

Para saber mais, você pode acessar a documentação sobre [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Configuração da aplicação para gerenciar o Deep Link 

O Flutter oferece suporte para Deep Links no Android e navegadores da web. Ao abrir uma URL, a tela correspondente será exibida em sua aplicação. A seguir, mostraremos como você pode lançar e exibir rotas. Isso pode ser feito criando rotas com nome, seja através do parâmetro `routes` ou `onGenerateRoute`, ou utilizando o widget `Router`.

> WARNING
>
> Importante
>
> As rotas com nome não são mais recomendadas para a maioria dos aplicativos.

Se a aplicação for executada em um navegador da web, nenhuma configuração adicional será necessária. As rotas são tratadas da mesma forma que um Deep Link do Android. Por padrão, as aplicações da web lêem o caminho do Deep Link a partir do fragmento de URL usando o padrão `/#/path/to/app/screen`, mas isso pode ser alterado configurando a estratégia de URL para a sua aplicação.

> Para saber mais, acesse as documentações oficiais sobre [como lidar com Deep Links para aplicações Flutter](https://medium.com/flutter-community/deep-links-and-flutter-applications-how-to-handle-them-properly-8c9865af9283) e [como configurar o App Link para Android](https://docs.flutter.dev/cookbook/navigation/set-up-app-links).
