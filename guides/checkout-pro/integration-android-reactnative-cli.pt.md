# Integrar o Checkout Pro para Android com o React Native CLI

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
> Uso do InAppBrowser

Com o React Native CLI, recomendamos o uso do [React-Native-InAppBrowser](https://www.npmjs.com/package/react-native-inappbrowser-reborn), uma dependência altamente flexível que oferece uma solução abrangente para integrar um navegador web dentro do seu aplicativo React Native. Ao considerar o uso do React-Native-InAppBrowser-Reborn, os seguintes aspectos foram levados em consideração:

* É uma dependência que permite fornecer uma experiência de navegação web integrada e fluida dentro do aplicativo.
* Possui uma ampla variedade de funções personalizáveis para se adaptar às necessidades específicas do aplicativo.
* Mantém os usuários dentro do contexto do aplicativo, aumentando a retenção e a coerência da experiência.

Para instalá-la, execute o seguinte comando no seu terminal.

[[[
```npm
npm install react-native-inappbrowser-reborn --save
```
```yarn
yarn add react-native-inappbrowser-reborn
```
]]]


### Android support

Se você estiver usando o Android Support, seu arquivo android/build.gradle deve conter as propriedades que descrevemos abaixo. Caso alguma esteja faltando, adicione-a. As versões podem ser iguais ou superiores.

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

Se você estiver usando o Android Support, seu arquivo deverá ter essas propriedades. Caso alguma esteja faltando, adicione-a. As versões podem ser iguais ou superiores.

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
> Implementação do React-Native-Inappbrowser

Para implementar a dependência React-Native-Inappbrowser, siga o exemplo que mostramos abaixo.

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
				openUrl('YOUR-URL-PREFERENCE')
			}
			/> );
		};
		export default ButtonCustomTabs;
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

Para poder receber e gerenciar o Deep Link, é necessário configurar no projeto do React Native o esquema (scheme) e o caminho (path) que compõem os Deep Links que você recebeu para redirecionar para alguma parte do seu aplicativo. Para fazer isso, adicione o Deep Link no arquivo Android **/app/src/main/AndroidManifest.xml** entre as tags "activity".

No exemplo a seguir, você configurará um Deep Link da forma _myapp://checkout/congrats_.

```AndroidManifest.xml
<activity ....> ....
<intent-filter data-generated="true">
<action android:name="android.intent.action.VIEW"/>
<data android:scheme="myapp" android:host="checkout" android:pathPrefix="/congrats"/> <category android:name="android.intent.category.BROWSABLE"/>
<category android:name="android.intent.category.DEFAULT"/>
</intent-filter>
.... </activity>
```

A propriedade pathPrefix é opcional e pode ser adicionada para direcionar a uma visualização específica do aplicativo.

> CLIENT_SIDE
>
> h2
>
> Recepção e gerenciamento de Deep LinkR

Por fim, veremos como configurar nosso aplicativo React Native para receber e gerenciar os Deep Links. Isso será abordado usando a dependência react-native-inappbrowser.

No caso do Android, **o fechamento do custom tab é feito automaticamente** ao redirecionar para um Deep Link válido. No caso em que o link não seja válido, nenhuma ação de redirecionamento será executada a partir do custom tab.


