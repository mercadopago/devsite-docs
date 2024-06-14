# Cliente SFTP

Embora você possa optar por usar outro provedor SFTP, nesta documentação abordaremos a configuração do cliente FileZilla, um provedor SFTP de código aberto que permite gerenciar o upload e download de arquivos de forma simples.

Para configurá-lo, siga as instruções abaixo:

1. No menu, selecione **File > Site Manager**.
2. Clique em **New Site** e insira o nome desejado para o site.
3. Selecione o protocolo SFTP.
4. Insira o domínio `sftp.mercadolibre.io` para produção.
5. Em "Login Type", escolha **Key file**.
6. Insira o usuário fornecido pelo Mercado Pago durante a configuração do SFTP. Por exemplo, `user_seller_sftp_ml`.
7. Clique em **Conectar**.

Depois disso, serão exibidos os seguintes diretórios disponíveis:
- selfserviceinput
- selfserviceoutput 

## Carregar um arquivo

No painel do FileZilla, você encontrará duas janelas. A da esquerda representa seu computador, e a da direita, o servidor SFTP. O upload de arquivos pode ser realizado arrastando o conteúdo que deseja enviar e soltando-o na janela do servidor.

![1](/images/recaudos/filezilla1.png)

## Baixar um arquivo de resultado

Um arquivo de resultados contém o processamento do arquivo de dívidas ou de links massivos carregados. Para baixar um arquivo de resultado, arraste e solte o arquivo da janela direita, correspondente ao servidor SFTP, para a esquerda, correspondente ao seu computador.

Ao realizar essas etapas, o arquivo estará disponível automaticamente em seu diretório.

![2](/images/recaudos/filezilla2.png)