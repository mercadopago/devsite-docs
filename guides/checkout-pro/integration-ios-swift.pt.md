# Integrar Checkout Pro para iOS com Swift

> WARNING
>
> Importante
>
> Antes de começar a integrar o Checkout Pro para Mobile, você precisará ter uma preferência criada em seu backend. Se ainda não o fez, vá para [Criação de preferência](/developers/pt/docs/checkout-pro/integrate-preferences).

Safari View Controller integra todo o Safari em seu aplicativo usando um controlador de visualização opaco. Ou seja, você não pode projetá-lo, não pode interagir com ele e não pode extrair dele nenhum dado privado. Como resultado, **SFSafariViewController** pode aproveitar as vantagens dos dados seguros da Web do usuário.

Nesta etapa iremos instalar e configurar as dependências necessárias para implementar o **SFSafariViewController** em seu projeto desenvolvido em Swift.

> CLIENT_SIDE
>
> h2
>
> Instalação do SFSafariViewController

SFSafariViewController não faz parte do [UIKit](https://developer.apple.com/documentation/uikit) então para usá-lo você **deve importar o Safari Services Framework** que contém os serviços necessários para integrar os comportamentos do Safari em seu aplicativo iOS.

> Certifique-se de que a estrutura SafariServices seja adicionada ao seu projeto. Se você ainda não o possui, vá em "Build Phases" e adicione-o em "Link Binary With Libraries".

Para instalá-lo, vá até o arquivo onde deseja usar o Safari View Controller e importe a biblioteca SafariServices.

```Main.swift
import SafariServices
```

Ao trabalhar com SFSafariViewController, você pode abrir o URL preferido apenas enviando o URL ou adicionando algumas definições de configuração. Aqui estão alguns exemplos de referência para a implementação do SFSafariViewController.

[[[
```SwiftUI
import SwiftUI
import SafariServices

struct ContentView: View {
    var body: some View {
        VStack {
            Button("Open Preference" ) {
                if let url = URL(string:"YOUR-URL-PREFERENCE")
                {
                    if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene {
                        if let rootViewController = windowScene.windows.first?.rootViewController {
                            let safariVC = SFSafariViewController(url: url)
                            rootViewController.present(safariVC, animated: true, completion: nil)
                        }
                    }
                    
                }
                
            }
        }
        .padding()
    }

}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

```UIKit
import SafariServices
import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        let button = UIButton()
        button.setTitle("Open Preference", for: .normal)
        button.backgroundColor = .systemBlue
        view.addSubview(button)
        button.frame = CGRect(x: 100, y: 100, width: 200, height: 50)
        button.layer.cornerRadius = 25
        button.addTarget(self, action: #selector(openSafariViewController)  , for: .touchDown)
    }
    
    @objc func openSafariViewController(_ sender: Any) {
        if let url = URL(string: "YOUR-URL-PREFERENCE") {
            let safariViewController = SFSafariViewController(url: url)
            present(safariViewController, animated: true, completion: nil)
        }
    }

}
```
]]]

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

Para configurar um Deep Link nativo no iOS, acesse o arquivo `<appname>/Info.plist` e adicione o código abaixo conforme apropriado.

O exemplo a seguir se aplica a um link direto no formato _iosapp://_:

```
<dict>
     …

	<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Editor</string>
			<key>CFBundleURLName</key>
			<string>your_identifier_here</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>iosapp</string>
			</array>
		</dict>
	</array>
    …
	
</dict>
```

O valor `CFBundleURLName` corresponde ao identificador da aplicação (Identifier) ​​e `CFBundleURLSchemes` ao esquema utilizado no Deep Link.

### Configure o Deep Link do Xcode

Você também pode **configurar o Deep Link no Xcode**. Para isso, acesse as informações do seu projeto e adicione um novo `Tipo de URL`.

![urltype_swift](/images/cow/urltype_swift.png)

Em seguida, insira o `identifier` da sua aplicação e os `Esquemas de URL` do Deep Link.

![deeplink-xcode-swift](/images/cow/deeplink-xcode-swift.png)

Isso gerará automaticamente o mesmo código acima no arquivo `<appname>/Info.plist`.

> CLIENT_SIDE
>
> h2
>
> Recepção e gerenciamento de Deep Link

No iOS, quando um deep link tenta redirecionar o usuário para a aplicação a partir de um Safari View Controller, é necessário configurar um manipulador para este evento para fechá-lo e carregar a view ou cena correspondente.

[[[
```SwiftUI
===
Do ContentView da aplicação você receberá um Deep Link no formato iosapp://congrat/success e após algum intervalo de tempo você precisará fechar o Safari View Controller para carregar uma view chamada SuccessView.
===
struct ContentView: View {
    @State private var showSuccessView = false
    
    var body: some View {
        VStack {
            Text("SwiftUI")
                .font(.system(size: 36, design: .rounded).weight(.bold)).foregroundColor(.black).padding(.bottom, 8)
            Text("POC")
                .font(.system(size: 24, design: .rounded)).foregroundColor(.gray).padding(.bottom)
            Button("Abrir Safari") {
                if let url = URL(string: "YOUR-URL-PREFERENCE") {
                    UIApplication.shared.windows.first?.rootViewController?.present(UIHostingController(rootView: SafariView(url: url)), animated: true, completion: nil)
                    }
                }.padding(.bottom)
            Button("Abrir Congrat") {
                showSuccessView = true
            }
        }
        .sheet(isPresented: $showSuccessView) {
            SuccessView(isPresented: $showSuccessView)
        }
        
        
// Aqui a recepção do deep link

.onOpenURL { url in
            if let components = URLComponents(url: url, resolvingAgainstBaseURL: false),
               components.scheme == "iosapp",
               components.host == "congrat",
               components.path.contains("success") {
                
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                    if let presenting = UIApplication.shared.windows.first?.rootViewController?.presentedViewController {
                        presenting.dismiss(animated: true, completion: nil)
                        showSuccessView = true
                    }
                }
            }
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```
```UIKit
===
Do AppDelegate.swift ou SceneDelegate.swift, dependendo do seu caso, você receberá um Deep Link no formato iosapp://congrat/success. Você precisará então fechar o Safari View Controller para carregar uma visualização chamada SuccessViewController.
===
import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let _ = (scene as? UIWindowScene) else { return }
    }

    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        if let urlContext = URLContexts.first {
            let url = urlContext.url

            if let components = URLComponents(url: url, resolvingAgainstBaseURL: false),
               components.scheme == "iosapp",
               components.host == "congrat",
               components.path.contains("success") {
                
                if let rootViewController = window?.rootViewController {
                    let successViewController = SuccessViewController {
                        rootViewController.dismiss(animated: true, completion: nil)
                    }
                    
                    if let presentingViewController = rootViewController.presentedViewController {
                        presentingViewController.dismiss(animated: true) {
                            rootViewController.present(successViewController, animated: true, completion: nil)
                        }
                    } else {
                        rootViewController.present(successViewController, animated: true, completion: nil)
                    }
                }
            }
        }
    }
}
```
]]]

