# Integrar Checkout Pro para Android con Flutter

> WARNING
>
> Importante
>
> Antes de comenzar a integrar Checkout Pro para Mobile, deberás contar con una preferencia creada en tu backend. Si aún no lo has hecho, ve a [Creación de preferencia](/developers/es/docs/checkout-pro/integrate-preferences).

Para integrar Checkout Pro en una aplicación móvil desarrollada con Flutter, deberás mostrar el checkout web dentro de la aplicación. Para lograr esto, existen varias opciones, entre las cuales se destacan el uso de Custom Tabs. Esta tecnología te permitirá abrir páginas web en un navegador nativo integrado en la aplicación, brindando una experiencia de navegación más fluida y coherente para los usuarios.

En este paso vamos a implementar Custom Tabs en una aplicación de Flutter utilizando **flutter_custom_tabs**. Te mostraremos como realizar la instalación de las bibliotecas necesarias, cómo configurar las dependencias y te daremos ejemplos prácticos de cómo abrir páginas web utilizando Custom Tabs.

> CLIENT_SIDE
>
> h2
>
> Instalación de la dependencia Flutter Custom Tabs

Para la instalación de la dependencia Flutter Custom Tabs, ejecutaa el siguiente comando en el directorio raíz de tu proyecto:

```terminal
$ flutter pub add flutter_custom_tabs
```

Esto agregará la línea `dependencies:  flutter_custom_tabs: ^1.2.1` al archivo **pubspec.yaml** del paquete. También ejecutará un comando implícito `flutter pub get`.

> NOTE
>
> Nota
> 
> Te invitamos a conocer más en la [documentación oficial de Flutter Custom Tabs](https://pub.dev/packages/flutter_custom_tabs).

Para hacer uso de la dependencia deberás importarla primero en el código Dart donde vayas a requerir mostrar el Checkout. Para importarla, utiliza el siguiente comando:

```terminal
import 'package:flutter_custom_tabs/flutter_custom_tabs.dart';
```

### Ejemplo de integración de Flutter Custom Tabs

A continuación, compartimos un ejemplo de integración de Flutter usando Custom Tabs:

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
> Personalizar la visualización según la plataforma
>
> Es posible personalizar el look & feel de la pantalla que se mostrará especificando opciones para cada plataforma. Para personalizar la apariencia en Android, deberás hacerlo con CustomTabsOption. Conoce más en la [documentación oficial](https://pub.dev/packages/flutter_custom_tabs).

> CLIENT_SIDE
>
> h2
>
> Cómo volver a tu App 

Los **Deep Links**, también conocidos como enlaces profundos, son una forma poderosa de permitir la navegación directa a pantallas o secciones específicas de una aplicación móvil. En Flutter, configurar correctamente los Deep Links es esencial para garantizar una experiencia de usuario fluida y sin problemas.

En esta sección de la documentación, encontrarás cómo configurar los Deep Links en una aplicación de Flutter basados en la [documentación oficial de Flutter](https://docs.flutter.dev/ui/navigation/deep-linking?gclid=CjwKCAjwrranBhAEEiwAzbhNtSuZ4qnpJoRrs1AgJ8SzP80sc4EmZA3_VlFInWPQ-42suf1Wm31K9RoC0f4QAvD_BwE&gclsrc=aw.ds).

Con la configuración adecuada de los Deep Links en Flutter, podrás ofrecer a los usuarios la capacidad de acceder directamente a contenido específico en tu aplicación, mejorando la navegación y la experiencia general del usuario.


### Crear un Deep Link

Desde el checkout es posible configurar Deep Links para volver a tu aplicación, ya sea haciendo click en un link de “Volver”, o de forma automática al terminar todo un flujo de pago exitoso, para luego ser redirigido a tu App.

Para esto debemos agregar en la creación de la preferencia de pago las propiedades `back_urls` y `auto_return` según corresponda.

Para conocer más, puedes acceder a la documentación de [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Configuración de la aplicación para la gestión del Deep Link

Flutter admite deep linking en Android y navegadores web. Al abrir una URL, se mostrará esa pantalla en tu app. A continuación, te mostraremos cómo puedes lanzar y mostrar rutas creando rutas con nombre (ya sea con el parámetro routes o con onGenerateRoute), o con el widget Router.

> WARNING
> 
> Importante
> 
> Las rutas con nombre ya no se recomiendan para la mayoría de las aplicaciones.

Si se ejecuta la aplicación en un navegador web, no es necesaria ninguna configuración adicional. Las rutas se gestionan del mismo modo que un enlace profundo de Android. Por defecto, las aplicaciones web leen la ruta del enlace profundo a partir del fragmento de url utilizando el patrón `/#/path/to/app/screen`, pero esto puede cambiarse configurando la estrategia de URL para tu app. 

> Para conocer más, ingresa a las documentaciones oficiales sobre [cómo manejar DeepLinks para aplicaciones Flutter](https://medium.com/flutter-community/deep-links-and-flutter-applications-how-to-handle-them-properly-8c9865af9283) y [cómo configurar App Link para Android](https://docs.flutter.dev/cookbook/navigation/set-up-app-links)