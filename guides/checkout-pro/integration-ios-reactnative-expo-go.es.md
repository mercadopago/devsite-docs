# Integrar Checkout Pro 

En el desarrollo de aplicaciones móviles con React Native, a menudo surge la necesidad de mostrar contenido web dentro de la aplicación. Para lograr esto, existen varias opciones, entre las cuales se destacan el uso de Custom Tabs (para Android) y Safari View Controller (para iOS). Estas tecnologías permiten abrir páginas web en un navegador nativo integrado en la aplicación, brindando una experiencia de navegación más fluida y coherente para los usuarios.

En este paso vamos a instalar y configurar las dependencias necesarias para implementar **Custom Tabs** en tu proyecto desarrollado en React Native. Para eso, puedes utilizar React Native CLI, que brinda un mayor control sobre la compilación y configuración de la aplicación, lo que permite personalizar y optimizar la experiencia de integración de contenido web de acuerdo con los requisitos específicos del proyecto. 

### Especificaciones técnicas

* Node 14.17.0
* expo ~48.0.15
* expo-web-browser ^12.1.1
* react 18.2.0
* react-dom 18.2.0
* react-native 0.71.8


> CLIENT_SIDE
>
> h2
>
> Uso de Expo-Web-Browser

Esta dependencia provee el acceso al navegador, en este caso Safari View Controller para iOS. También realiza el manejo del redireccionamiento.

Para instalarla, ejecuta el siguiente comando en tu terminal

```yarn
yarn add expo-web-browser
```

> CLIENT_SIDE
>
> h2
>
> Implementación de Expo-Web-Browser

Para implementar la dependencia Expo-Web-Browser, ejecuta el siguiente comando.

```JavaScript
import {
	StatusBar
} from "expo-status-bar";
import {
	StyleSheet,
	Button,
	View
} from "react-native";
import {
	openBrowserAsync
} from "expo-web-browser";
export default function ExpoWebBrowserExample(url) {
	return ( <
		View style = {
			styles.container
		} > < Button title = "Open Browser"
		onPress = {
			() => openBrowserAsync('https://url-to-open.com')
		}
		/> <StatusBar style="auto" / >
		<
		/View> );
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
Para ello, verifica que ru archivo **app.json** contenga el nombre del scheme:

```app.json
"expo": {
	"scheme": "myapp"
}
```
Al ejecutar `npx expo prebuild` su archivo `ios/appname/Info.plist` debería contener algo similar al siguiente código

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

> CLIENT_SIDE
>
> h2
>
> Recepción y gestión del Deep Link 

Por último, veremos cómo podemos configurar nuestra aplicación de React Native para recibir y gestionar los Deep Links. Esto se abordará usando la dependencia react-native-inappbrowser. 

En el caso de iOS **es necesario cerrar la Safari View Controller de manera manual**. Para esto, deberás escuchar el evento de cuando cambia la url desde el componente que abre la ventana o el punto de entrada de la aplicación, y luego llamar el método para cerrar la Safari View Controller.

```AppDelegate.mm
// iOS 9.x or newer
#import <React/RCTLinkingManager.h>
- (BOOL)application:(UIApplication *)application
openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
return [RCTLinkingManager application:application openURL:url options:options];
}
```

### Usando expo-web-browser

```JavaScript
import {
	StatusBar
} from "expo-status-bar";
import {
	StyleSheet,
	Button,
	View,
	Linking,
	Platform
} from "react-native";
import {
	openBrowserAsync
} from "expo-web-browser";
import * as WebBrowser from "expo-web-browser";
import {
	useEffect
} from "react";
export default function App() {
	useEffect(() => {
		Linking.addEventListener("url", (event) => {
			const {
				url
			} = event;
			if (url !== null && url.includes("myapp://")) {
				Platform.OS === "ios" && WebBrowser.dismissBrowser();
			}
		});
	}, []);
	const url = "https://url-to-open.com";
	return ( <
		View style = {
			styles.container
		} >
		<
		Button title = "Open Browser"
		onPress = {
			() => openBrowserAsync(url)
		}
		/> <
		StatusBar style = "auto" / > < /View>
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
