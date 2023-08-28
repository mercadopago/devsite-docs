# Integre o Checkout Pro para iOS com React Native CLI

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
> Uso de InAppBrowser

Com o React Native CLI, recomendamos o uso do [React-Native-InAppBrowser](https://www.npmjs.com/package/react-native-inappbrowser-reborn), uma dependência altamente flexível que oferece uma solução abrangente para integrar um navegador web dentro do seu aplicativo React Native. Ao considerar o uso do React-Native-InAppBrowser-Reborn, os seguintes aspectos foram levados em consideração:

* É uma dependência que permite oferecer uma experiência de navegação web integrada e fluída dentro do aplicativo.
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

Luego, ejecuta el siguiente comando para instalar la dependencia.

```
cd ios && pod install && cd ..
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
				openUrl('https://url-to-open.com')
			}
			/> );
		};
		export default ButtonCustomTabs;
```

> CLIENT_SIDE
>
> h2> CLIENT_SIDE
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

Para receber e gerenciar o Deep Link, você deve configurar no seu projeto React Native o esquema (scheme) e o caminho (path) que compõem os Deep Links que você recebeu para redirecionar para alguma parte do seu aplicativo. Para fazer isso, no Xcode, vá para as informações do seu projeto e adicione um novo "URL Types".

![xcode-paso1](/images/cow/xcode-paso1.png)

Insira o **identificador** do seu aplicativo e os **Esquemas de URL** do Deep Link.

![xcode-paso2](/images/cow/xcode-paso2.png)

Isso gerará o seguinte código no arquivo **ios/<appname>/Info.plist**:

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

Adicione o seguinte código ao arquivo **ios/<appname>/AppDelegate.mm**

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
> Recepção e gerenciamento de Deep Link

Por fim, veremos como podemos configurar nossa aplicação React Native para receber e gerenciar Deep Links. Isso será resolvido usando a dependência react-native-inappbrowser.

No caso do iOS **é necessário fechar o Safari View Controller manualmente**. Para fazer isso, você precisará ouvir o evento de alteração de URL do componente que abre a janela ou o ponto de entrada do aplicativo e, em seguida, chamar o método para fechar o Safari View Controller.


### Uso do react-native-inappbrowser-reborn

No caso do iOS é necessário fechar o Safari View Controller manualmente. Para fazer isso, você precisará ouvir o evento de alteração de URL do componente que abre a janela ou o ponto de entrada do aplicativo e, em seguida, chamar o método para fechar o Safari View Controller.

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

