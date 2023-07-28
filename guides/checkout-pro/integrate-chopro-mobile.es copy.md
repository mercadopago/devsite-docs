# Integrar Checkout Pro

[TXTSNIPPET][/guides/snippets/chopro-integration-serverside]

> CLIENT_SIDE
>
> h2
>
> Instalar dependencias Chrome Custom Tabs y Safari View Controller 

El siguiente paso es instalar y configurar las dependencias necesarias para implementar Custom Tabs y Safari View Controller en tu proyecto desarrollado en React Native. 

Puedes utilizar [Expo Go](https://expo.dev/client), un ecosistema de desarrollo de aplicaciones móviles que se ha establecido como una herramienta esencial y poderosa, o React Native CLI, en donde tenemos un mayor control sobre la compilación y configuración de la aplicación, lo que nos permite personalizar y optimizar la experiencia de integración de contenido web de acuerdo con los requisitos específicos del proyecto. 

Con React Native CLI te sugerimos usar  [inappbrowser-reborn](https://www.npmjs.com/package/react-native-inappbrowser-reborn), una dependencia  altamente flexible que brinda una solución integral para integrar un navegador web dentro de tu aplicación de React Native. Al considerar el uso de React-Native-InAppBrowser se tuvieron en cuenta los siguientes aspectos:

* Es una dependencia que permite brindar una experiencia de navegación web integrada y fluida dentro de la aplicación.
* Cuenta con una gran variedad de funciones personalizables para adaptarse a las necesidades específicas de la aplicación.
* Mantiene a los usuarios dentro del contexto de la aplicación aumentando la retención y la coherencia de la experiencia.

### Especificaciones técnicas para Expo Go y React Native CLI con inanppbrower-reborn

**Expo Go:**
* Node 14.17.0
* expo ~48.0.15
* expo-web-browser ^12.1.1
* react 18.2.0
* react-dom 18.2.0
* react-native 0.71.8

**React Native CLI**
* Node 14.17.0
* react 18.2.0
* react-native 0.71.8
* react-native-inappbrowser-reborn 3.7.0


Para instalar las dependencias, ejecuta el siguiente código en la línea de comandos de tu terminal.

[[[
```Expo Go
yarn add expo-web-browser
```
```React Native CLI
===
Para instalar las dependencias de `inappbrowser-reborn` en React-Native < 0.6 debes ejecutar el siguiente código en la línea de comandos de tu terminal. Para versiones superiores no es necesario ya que este se hace automáticamente.
===
// Usando npm
npm install react-native-inappbrowser-reborn --save
// Usando yarn
yarn add react-native-inappbrowser-reborn
// Para la plataforma de iOS, es necesario realizar este paso.
cd ios && pod install && cd ..
```
]]]

> Para la instalación con React Native CLI debes verificar su archivo "android/build.gradle".

[[[
```Android support
===
Si utilizas Android support, tu archivo debería tener estas propiedades. En caso de faltar alguna, agrégala. Las versiones pueden ser iguales o superiores.
===
buildscript {
  ext {
    buildToolsVersion = "28.0.3"
    minSdkVersion = 16
    compileSdkVersion = 28
    targetSdkVersion = 28
    // Only using Android Support libraries
    supportLibVersion = "28.0.0"
  }
```
```AndroidX
===
Si utilizas AndroidX, tu archivo debería tener estas propiedades. En caso de faltar alguna, agrégala. Las versiones pueden ser iguales o superiores.
===
buildscript {
  ext {
    buildToolsVersion = "30.0.2"
    minSdkVersion = 21
    compileSdkVersion = 30
    targetSdkVersion = 30
    ndkVersion = "21.4.7075529"
    // Remove 'supportLibVersion' property and put specific versions for AndroidX libraries
    androidXAnnotation = "1.2.0"
    androidXBrowser = "1.3.0"
    // Put here other AndroidX dependencies
  }
```
]]]


> CLIENT_SIDE
>
> h2
>
> Implementar Chrome Custom Tabs y Safari View Controller

Para implementar Chrome Custom Tabs y Safari View Controller, ejecuta el siguiente código en la línea de comandos de tu terminal.

[[[
```Expo Go
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

export default function ExpoWebBrowserExample(url) {
  return (
    <View style={styles.container}>
      <Button
        title="Open Browser"
        onPress={() => openBrowserAsync('https://url-to-open.com')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```
```React Native CLI
import {Button, Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const ButtonCustomTabs = () => {
  const openUrl = async (url) => {
    if (await InAppBrowser.isAvailable()) {
      InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalEnabled: true,
        // Android Properties
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Animation
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
      });
    } else {
      Linking.openURL(url);
    }
  };
  return (
    <Button
      title="Press Me"
      onPress={() =>
        openUrl('https://url-to-open.com')
      }
    />
  );
};
export default ButtonCustomTabs;
```
]]]


> CLIENT_SIDE
>
> h2
>
> Deep Links: Cómo volver a tu App 

Los **Deep Links**, también conocidos como enlaces profundos, son una forma poderosa de permitir la navegación directa a pantallas o secciones específicas de una aplicación móvil. En React Native, configurar correctamente los Deep Links es esencial para garantizar una experiencia de usuario fluida y sin problemas.
En esta sección de la documentación, nos centraremos en la configuración de los Deep Links en una aplicación de React Native. Revisaremos los pasos necesarios para habilitar los enlaces profundos y cómo manejarlos de manera efectiva en nuestra aplicación.
Con la configuración adecuada de los Deep Links en React Native, podrás ofrecer a los usuarios la capacidad de acceder directamente a contenido específico en tu aplicación, mejorando la navegación y la experiencia general del usuario.

### Crear un Deep Link
Desde nuestro checkout es posible configurar Deep Links para volver a tu aplicación ya sea haciendo click en un link de “Volver” o de forma automática al terminar todo un flujo de pago exitoso, para luego ser redirigido a tu App.
Para esto debemos agregar en la creación de la preferencia de pago las propiedades `back_urls` y `auto_rerturn` según corresponda.

* Las `back_urls` contienen los Deep Links para redirigir a nuestra aplicación. Se componen de un *scheme* seguido del *path* a donde queremos redirigir al usuario.

![back urls](/images/cow/back-urls.png)

* La propiedad `auto_return` es **opcional**. Es utilizada para redirigir automáticamente al Deep Link al terminar exitosamente un flujo de pago.


> CLIENT_SIDE
>
> h2
>
> Deep Links: Recepción y gestión del DeepLink 

En esta sección veremos cómo podemos configurar nuestra aplicación de React Native para recibir y gestionar los Deep Links. Esto se abordará según la dependencia que hayamos implementado en nuestro proyecto ya sea usando `expo-web-browser` o `react-native-inappbrowser`.

En el caso de Android tanto con expo-web-browser como con react-native-inappbrowser el cierre del custom tab se hace de manera automática al momento de redireccionar a un deep link valido. En que caso que el link no sea válido, no se ejecutará ninguna acción de redireccionamiento desde el custom tab.
