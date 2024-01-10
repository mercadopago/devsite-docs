# Como instalar aplicativos em dispositivos Redelcom com MacOS e Windows

Para realizar integrações com terminais Redelcom, você pode precisar instalar um aplicativo Android, como RDCPass, ou algum próprio que permita conectar-se ao RDCPass. 

Caso esteja trabalhando com MacOS ou Windows como sistema operacional, o `adb` (Android Debug Bridge) é a ferramenta que permitirá instalar aplicativos nos terminais para se comunicar corretamente com o RDCPass. 

Veja abaixo as etapas necessárias para instalar o `adb` em computadores MacOS e/ou Windows e também para instalar seu aplicativo Android.

## Instalar aplicativo Android no MacOS 

1. Comece instalando `adb` em seu computador MacOS executando o seguinte comando no terminal:

```terminal

brew install android-platform-tools;

```

2. Após a conclusão da instalação, verifique se o `adb` detecta corretamente o dispositivo Redelcom. Para isso, conecte-o ao computador por meio de USB e execute o seguinte comando:

```terminal

adb devices

```

Se o `adb` detectar corretamente o dispositivo, você receberá uma resposta como a seguinte:

```terminal

List of devices attached 
1850796495     device

```

3. Por último, ainda no terminal do computador, acesse pasta na qual está localizado o aplicativo Android e execute o seguinte comando, substituindo "prueba.apk" pelo nome do arquivo e a extensão `apk`.

```terminal

adb install prueba.apk

```

Após a conclusão do processo de instalação, a resposta será semelhante à seguinte:

```terminal

Performing Streamed Installed
Success

```

Ao concluir essas etapas, o aplicativo Android estará instalado e pronto para integrar pagamentos. Escolha o [tipo de integração](/developers/pt/docs/redelcom/types-of-integration) de sua preferência para começar a operar com a Redelcom. 


## Instalar aplicativo Android no Windows

1. Baixe o SDK do Android acessando o [site oficial](https://developer.android.com/tools/releases/platform-tools?hl=es-419#downloads) e clique em 'Como baixar as Ferramentas da Plataforma SDK para Windows'. É necessário ler e concordar com os termos e condições para realizar o download.

2. Após baixar o SDK, acesse a pasta ***platform-tools*** e execute o arquivo `adb.exe`, como mostrado na imagem a seguir.

</center>

![imagen de la carpeta platform-tools y los archivos internos donde está adb.exe](/images/Redelcom/adb-platformtools.jpg)

</center>

3. Após a conclusão da instalação, verifique se o `adb` detecta corretamente o dispositivo Redelcom. Para isso, conecte-o ao computador por meio de USB e, por meio do terminal de sua preferência, navegue até o diretório no qual a pasta foi baixada. Em seguida, execute o seguinte comando:

```terminal

adb.exe devices

```

Se o `adb` detectar corretamente o dispositivo, você receberá uma resposta como a seguinte:

```terminal

List of devices attached 
1850796495     device
```

4. Copie e cole seu aplicativo Android na pasta **platform-tools**.
5. Por fim, ainda no terminal do computador e na pasta `platform-tools`, execute o seguinte comando, substituindo "nome_do_arquivo + extensão" pelo nome do seu aplicativo seguido de sua extensão.

```terminal

adb.exe install nome_do_arquivo + extensão

```

Ao concluir essas etapas, o aplicativo Android estará instalado e pronto para integrar pagamentos. Escolha o [tipo de integração](/developers/pt/docs/redelcom/types-of-integration) de sua preferência para começar a operar com a Redelcom. 