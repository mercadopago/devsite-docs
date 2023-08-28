# Integrar Checkout Pro para iOS com React Native Expo Go

> WARNING
>
> Importante
>
> Antes de começar a integrar o Checkout Pro para Mobile, você precisará ter uma preferência criada em seu backend. Se ainda não o fez, vá para [Criação de preferência](/developers/pt/docs/checkout-pro/integrate-preferences).

No desenvolvimento de aplicações móveis, muitas vezes surge a necessidade de exibir conteúdo da web dentro da aplicação. Para isso, existem diversas opções, entre as quais se destacam a utilização de Custom Tabs (para Android) e Safari View Controller (para iOS). Essas tecnologias permitem que páginas da web sejam abertas em um navegador nativo incorporado á aplicação, proporcionando uma experiência de navegação mais suave e consistente aos usuários.

Nesta etapa iremos instalar e configurar as dependências necessárias para implementar o **Safari View Controller** em seu projeto desenvolvido em React Native.

> CLIENT_SIDE
>
> h2
>
> Uso de Expo-Web-Browser

Essa dependência fornece acesso ao navegador, neste caso o Safari View Controller para iOS. Ele também realiza manipulação de redirecionamento.

Para instalá-lo, execute o seguinte comando em seu terminal

```yarn
yarn add expo-web-browser
```

> CLIENT_SIDE
>
> h2
>
> Implementação do Expo-Web-Browser

Para implementar a dependência Expo-Web-Browser, siga o exemplo abaixo.

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
> Como retornar ao sua app

**Deep Links**, também conhecidos como links diretos, são uma forma poderosa de permitir a navegação direta para telas ou seções específicas de uma aplicação móvel.

### Criar um Deep Link

A partir do nosso checkout, é possível configurar Deep Links para retornar ao sua aplicação, seja clicando em um link "Voltar" ou automaticamente após concluir um fluxo de pagamento bem-sucedido, redirecionando-o de volta ao sua aplicação.

Para isso, devemos adicionar as propriedades back_urls e auto_return ao criar a preferência de pagamento, conforme necessário.

Para saber mais, você pode acessar a documentação sobre [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Configuração da aplicação para gerenciar o Deep Link

Para receber e gerenciar o Deep Link é necessário configurar em nosso projeto React Native o esquema e caminho que compõem os Deep Links que recebemos para redirecionar para alguma parte da sua aplicação.
Para fazer isso, verifique se seu arquivo **app.json** contém o nome do esquema:

```app.json
"expo": {
	"scheme": "myapp"
}
```
Quando você executa `npx expo prebuild`, seu arquivo `ios/appname/Info.plist` deve conter algo semelhante ao código abaixo.

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
> Recepção e gerenciamento de Deep Link

Por fim, veremos como podemos configurar nossa aplicação React Native para receber e gerenciar Deep Links. Isso será resolvido usando a dependência react-native-inappbrowser.

No caso do iOS **é necessário fechar o Safari View Controller manualmente**. Para fazer isso, você precisará ouvir o evento de alteração de URL do componente que abre a janela ou o ponto de entrada da aplicação e, em seguida, chamar o método para fechar o Safari View Controller.

### Uso do Expo-Web-Browser

No caso do iOS é necessário fechar o Safari View Controller manualmente. Para fazer isso, você precisará ouvir o evento de alteração de URL do componente que abre a janela ou o ponto de entrada da aplicação e, em seguida, chamar o método para fechar o Safari View Controller.

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
