# Integrar Checkout Pro para iOS con React Native CLI

> WARNING
>
> Importante
>
> Antes de comenzar a integrar Checkout Pro para Mobile, deberás contar con una preferencia creada en tu backend. Si aún no lo has hecho, ve a [Creación de preferencia](/developers/es/docs/checkout-pro/common-initialization).

En el desarrollo de aplicaciones móviles con React Native, a menudo surge la necesidad de mostrar contenido web dentro de la aplicación. Para lograr esto, existen varias opciones, entre las cuales se destacan el uso de Custom Tabs (para Android) y Safari View Controller (para iOS). Estas tecnologías permiten abrir páginas web en un navegador nativo integrado en la aplicación, brindando una experiencia de navegación más fluida y coherente para los usuarios.

En este paso vamos a instalar y configurar las dependencias necesarias para implementar **Safari View Controller** en tu proyecto desarrollado en React Native. 

> CLIENT_SIDE
>
> h2
>
> Uso de InAppBrowser

Con React Native CLI, te sugerimos usar [React-Native-InAppBrowser](https://www.npmjs.com/package/react-native-inappbrowser-reborn), una dependencia  altamente flexible que brinda una solución integral para integrar un navegador web dentro de tu aplicación de React Native. Al considerar el uso de React-Native-InAppBrowser-Reborn se tuvieron en cuenta los siguientes aspectos:

* Es una dependencia que permite brindar una experiencia de navegación web integrada y fluida dentro de la aplicación.
* Cuenta con una gran variedad de funciones personalizables para adaptarse a las necesidades específicas de la aplicación.
* Mantiene a los usuarios dentro del contexto de la aplicación aumentando la retención y la coherencia de la experiencia.

Para instalarla, ejecuta el siguiente comando en tu terminal.

[[[
```npm
npm install react-native-inappbrowser-reborn --save
```
```yarn
yarn add react-native-inappbrowser-reborn
```
]]]

Luego, ejecuta el siguiente comando para instalar la dependencia.

```
cd ios && pod install && cd ..
```

> CLIENT_SIDE
>
> h2
>
> Implementación de React-Native-Inappbrowser

Para implementar la dependencia React-Native-Inappbrowser, sigue el ejemplo que mostramos a continuación.

```JavaScript
import {
	Button,
	Linking
} from 'react-native';
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
					forceCloseOnRedirection: false, // Animation
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
		return ( < Button title = "Press Me"
			onPress = {
				() =>
				openUrl('https://url-to-open.com')
			}
			/> );
		};
		export default ButtonCustomTabs;
```

> CLIENT_SIDE
>
> h2
>
> Cómo volver a tu App 

Los **Deep Links**, también conocidos como enlaces profundos, son una forma poderosa de permitir la navegación directa a pantallas o secciones específicas de una aplicación móvil. 

### Crear un Deep Link
Desde nuestro checkout es posible configurar Deep Links para volver a tu aplicación ya sea haciendo click en un link de “Volver” o de forma automática al terminar todo un flujo de pago exitoso, para luego ser redirigido a tu App.
Para esto debemos agregar en la creación de la preferencia de pago las propiedades `back_urls` y `auto_return` según corresponda.

Para conocer más, puedes acceder a la documentación de [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Configuración de la aplicación para la gestión del Deep Link

Para poder recibir y gestionar el Deep Link, deberás configurar en tu proyecto de React Native el scheme y path que componen los Deep Links que recibiste para redireccionar a alguna parte de tu aplicación. 
Para ello, desde Xcode ubícate en la información de tu proyecto y agrega una nueva "URL Types".

![xcode-paso1](/images/cow/xcode-paso1.png)

Ingresa el **identifier** de su aplicación y la **URL Schemes** del Deep Link.

![xcode-paso2](/images/cow/xcode-paso2.png)

Esto generará el siguiente código en el archivo **ios/<appname>/Info.plist**:

```info.plist
<key>CFBundleURLTypes</key>
    <array>
        <dict> <key>CFBundleURLSchemes
            </key>
            <array>
                <string>myapp</string>
                <string>com.test.TestExpoBrowser</string>
            </array>
        </dict> 
    </array>
```

Agrega el siguiente código al archivo **ios/<appname>/AppDelegate.mm**


```AppDelegate.mm
// iOS 9.x or newer
#import < React / RCTLinkingManager.h >
	-(BOOL) application: (UIApplication * ) application
openURL: (NSURL * ) url options: (NSDictionary < UIApplicationOpenURLOptionsKey, id > * ) options {
	return [RCTLinkingManager application: application openURL: url options: options];
}
```

> CLIENT_SIDE
>
> h2
>
> Recepción y gestión del Deep Link 

Por último, veremos cómo podemos configurar nuestra aplicación de React Native para recibir y gestionar los Deep Links. Esto se abordará usando la dependencia react-native-inappbrowser. 

En el caso de iOS **es necesario cerrar la Safari View Controller de manera manual**. Para esto, deberás escuchar el evento de cuando cambia la url desde el componente que abre la ventana o el punto de entrada de la aplicación, y luego llamar el método para cerrar la Safari View Controller.


### Uso de react-native-inappbrowser-reborn

En el caso de iOS es necesario cerrar la Safari View Controller de manera manual. Para esto, deberás escuchar el evento de cuando cambia la url desde el componente que abre la ventana o el punto de entrada de la aplicación, y luego llamar el método para cerrar la Safari View Controller.

```JavaScript
import {
	useEffect
} from 'react';
import React from 'react';
import MainStack from './navigation/MainStack';
import {
	Linking
} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import * as RootNavigation from './RootNavigation';

function App(): JSX.Element {
	useEffect(() => {
		Linking.addEventListener('url', event => {
			const {
				url
			} = event;
			if (url !== null && url.includes('myapp://')) {
				InAppBrowser.close();
				RootNavigation.navigate('Congrats');
			}
		});
	}, []);
	return <MainStack / > ;
}
export default App;
```

