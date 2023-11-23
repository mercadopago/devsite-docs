# Integrar Checkout Pro para Android com React Native Expo Go

> WARNING
>
> Importante
>
> Antes de começar a integrar o Checkout Pro para Mobile, você precisará ter uma preferência criada em seu backend. Se ainda não o fez, vá para [Criação de preferência](/developers/pt/docs/checkout-pro/integrate-preferences).

No desenvolvimento de aplicações móveis, muitas vezes surge a necessidade de exibir conteúdo da web dentro da aplicação. Para isso, existem diversas opções, entre as quais se destacam a utilização de Custom Tabs (para Android) e Safari View Controller (para iOS). Essas tecnologias permitem que páginas da web sejam abertas em um navegador nativo incorporado á aplicação, proporcionando uma experiência de navegação mais suave e consistente aos usuários.

Nesta etapa iremos instalar e configurar as dependências necessárias para implementar **Custom Tabs** em seu projeto desenvolvido em React Native. 

> CLIENT_SIDE
>
> h2
>
> Uso de Expo-Web-Browser

Essa dependência fornece acesso ao navegador, neste caso Custom tabs para o Android. Também lida com o redirecionamento.

Para instalá-la, execute o seguinte comando no seu terminal:

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
			() => openBrowserAsync('YOUR-URL-PREFERENCE')
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

Para isso, devemos adicionar as propriedades `back_urls` e `auto_return` ao criar a preferência de pagamento, conforme necessário.

Para saber mais, você pode acessar a documentação sobre [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Configuração da aplicação para gerenciar o Deep Link 

Para receber e gerenciar o Deep Link, é necessário configurar no projeto React Native o esquema (scheme) e o caminho (path) que compõem os Deep Links que recebemos para redirecionar para alguma parte da sua aplicação.

Para fazer isso, adicione a seguinte configuração ao seu arquivo app.json localizado na raiz do seu projeto:

```JavaScript
{
"expo": {
"android": { "intentFilters": [
{
"action": "VIEW", "data": [
{
"scheme": "myapp", "host": "checkout", "pathPrefix": "/congrats"
} ],
"category": ["BROWSABLE", "DEFAULT"]
} ]
} }
}
```

* Neste exemplo, o Deep Link esperado para redirecionar para a aplicação é **myapp://checkout/congrats**
* A propriedade `pathPrefix` é **opcional**

Se o projeto ainda não tiver um **prebuild**, é possível testar o Deep Link usando o Expo Go no terminal da seguinte maneira:

```
// URL local do dispositivo de teste
npx uri-scheme open exp://192.168.0.7:19000/--/checkout/congrats --android
// Nota: Não é necessário passar o scheme nestes testes
```

Se você executar um **prebuild** da aplicação, verifique se o Deep Link para Android foi configurado no arquivo `android/app/src/main/AndroidManifest.xml`. O Deep Link deve estar entre as tags activity.

```AndroidManifest.xml
<activity ....> ....
<intent-filter data-generated="true">
<action android:name="android.intent.action.VIEW"/>
<data android:scheme="myapp" android:host="checkout" android:pathPrefix="/congrats"/> <category android:name="android.intent.category.BROWSABLE"/>
<category android:name="android.intent.category.DEFAULT"/> </intent-filter>
....
</activity>

```

> CLIENT_SIDE
>
> h2
>
> Recepcão e gerenciamiento do Deep Link

Por último, você deve configurar sua aplicação React Native para receber e gerenciar os Deep Links. Isso será abordado usando a dependência react-native-inappbrowser.

No caso do Android, **o fechamento do custom tab é feito automaticamente** ao redirecionar para um Deep Link válido. Caso o link não seja válido, nenhuma ação de redirecionamento será executada a partir do custom tab.


