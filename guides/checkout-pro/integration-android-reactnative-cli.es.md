# Integrar Checkout Pro 

En el desarrollo de aplicaciones móviles con React Native, a menudo surge la necesidad de mostrar contenido web dentro de la aplicación. Para lograr esto, existen varias opciones, entre las cuales se destacan el uso de Custom Tabs (para Android) y Safari View Controller (para iOS). Estas tecnologías permiten abrir páginas web en un navegador nativo integrado en la aplicación, brindando una experiencia de navegación más fluida y coherente para los usuarios.

En este paso vamos a instalar y configurar las dependencias necesarias para implementar **Custom Tabs** en tu proyecto desarrollado en React Native. Para eso, puedes utilizar React Native CLI, que brinda un mayor control sobre la compilación y configuración de la aplicación, lo que permite personalizar y optimizar la experiencia de integración de contenido web de acuerdo con los requisitos específicos del proyecto. 

### Especificaciones técnicas

* Node 14.17.0
* react 18.2.0
* react-native 0.71.8
* react-native-inappbrowser-reborn 3.7.0

> CLIENT_SIDE
>
> h2
>
> Uso de InAppBrowser

Con React Native CLI, te sugerimos usar [React-Native-InAppBrowser](https://www.npmjs.com/package/react-native-inappbrowser-reborn), una dependencia  altamente flexible que brinda una solución integral para integrar un navegador web dentro de tu aplicación de React Native. Al considerar el uso de React-Native-InAppBrowser-Reborn se tuvieron en cuenta los siguientes aspectos:

* Es una dependencia que permite brindar una experiencia de navegación web integrada y fluida dentro de la aplicación.
* Cuenta con una gran variedad de funciones personalizables para adaptarse a las necesidades específicas de la aplicación.
* Mantiene a los usuarios dentro del contexto de la aplicación aumentando la retención y la coherencia de la experiencia.

Para instalarla, ejecuta el siguiente comando en tu terminal

[[[
```npm
npm install react-native-inappbrowser-reborn --save
```
```yarn
yarn add react-native-inappbrowser-reborn
```
]]]

> Para las versiones de React Native >0.60 no es necesario importar y configurar manualmente las dependencias en el código nativo ya que este se hace automáticamente.

Para la instalación con React Native CLI debes **verificar el archivo android/build.gradle**.

### Android support

Si utilizas Android support, tu archivo debería tener estas propiedades. En caso de faltar alguna, agrégala. Las versiones pueden ser iguales o superiores.

```
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

### AndroidX

Si utilizas AndroidX, tu archivo debería tener estas propiedades. En caso de faltar alguna, agrégala. Las versiones pueden ser iguales o superiores.

```
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


> CLIENT_SIDE
>
> h2
>
> Implementación de React-Native-Inappbrowser

Para implementar la dependencia React-Native-Inappbrowser, ejecuta el siguiente comando.

```JavaScript
import {Button, Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
const ButtonCustomTabs = () => { const openUrl = async (url) => {
if (await InAppBrowser.isAvailable()) { InAppBrowser.open(url, {
// iOS Properties
dismissButtonStyle: 'cancel', preferredBarTintColor: '#453AA4', preferredControlTintColor: 'white', readerMode: false,
animated: true,
modalEnabled: true,
// Android Properties
showTitle: true,
toolbarColor: '#6200EE', secondaryToolbarColor: 'black', enableUrlBarHiding: true, enableDefaultShare: true, forceCloseOnRedirection: false, // Animation
animations: {
startEnter: 'slide_in_right', startExit: 'slide_out_left', endEnter: 'slide_in_left', endExit: 'slide_out_right',
}, });
} else { Linking.openURL(url);
} };
return ( <Button
title="Press Me" onPress={() =>
openUrl('https://url-to-open.com') }
/> );
};
export default ButtonCustomTabs;
```

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
> Configuración de la aplicación para la gestión del Deep Link

Para poder recibir y gestionar el Deep Link es necesario configurar en nuestro proyecto de React Native el scheme y path que componen los Deep Links que recibimos para redireccionar a alguna parte de tu aplicación. 
Para ello, agrega el deep link en el archivo android **/app/src/main/AndroidManifest.xml** entre las etiquetas "activity".

```AndroidManifest.xml
<activity ....> ....
<intent-filter data-generated="true">
<action android:name="android.intent.action.VIEW"/>
<data android:scheme="myapp" android:host="checkout" android:pathPrefix="/congrats"/> <category android:name="android.intent.category.BROWSABLE"/>
<category android:name="android.intent.category.DEFAULT"/>
</intent-filter>
.... </activity>
```


> CLIENT_SIDE
>
> h2
>
> Recepción y gestión del Deep Link 

Por último, veremos cómo podemos configurar nuestra aplicación de React Native para recibir y gestionar los Deep Links. Esto se abordará usando la dependencia react-native-inappbrowser. 

En el caso de Android, **el cierre del custom tab se hace de manera automática** al momento de redireccionar a un Deep Link válido. En que caso que el link no sea válido, no se ejecutará ninguna acción de redireccionamiento desde el custom tab.


