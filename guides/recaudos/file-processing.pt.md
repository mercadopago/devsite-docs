# Processamento de arquivos

O Mercado Pago oferece uma solução eficiente para a gestão de dívidas e a geração de links em massa, permitindo o uso de um serviço SFTP para processar as informações contidas em arquivos.

Ao processar um novo arquivo, são validadas a estrutura e o conteúdo das informações. A frequência das cargas depende da lógica de negócios, já que a gestão das faturas está vinculada a processos externos ao Mercado Pago, como a criação de novas faturas.

Para mais informações, leia os detalhes do fluxo a seguir.

## Fluxo funcional

1. O usuário gera e carrega um arquivo contendo as informações a serem processadas, respeitando o formato correto para o arquivo de carga. Para mais informações, consulte a [documentação sobre as especificações de formato](/developers/pt/docs/links-and-debts/format-specifications).
| Domínio               | Diretório          |
|----------------------|--------------------|
| sftp.mercadolibre.io | `selfserviceinput`|

2. O sistema processa o arquivo e realiza validações de formato e do conteúdo das informações (para obter mais detalhes, consulte a seção sobre [Erros de processamento](/developers/es/docs/links-and-debts/validations)). Em seguida, retorna um arquivo zip com os resultados dessas validações. Se forem detectados erros, o arquivo de resultados indica a linha e a natureza do erro.
| Domínio               | Diretório          |
|----------------------|--------------------|
| sftp.mercadolibre.io | `selfserviceoutput`|

> WARNING
>
> Importante
>
> Em caso de existirem erros, o sistema continuará processando as linhas corretas (OK), seja para gerar novos links ou para carregar dívidas. As linhas com erros são registradas no arquivo de erros. Os links e dívidas gerados em cargas anteriores não são afetados por este novo processamento.

3. Para o fluxo de Links massivos, o sistema processa as informações e retorna os Links de pagamento gerados no arquivo _success_.
| Domínio               | Diretório          |
|----------------------|--------------------|
| sftp.mercadolibre.io | `selfserviceoutput`|

4. Após processar com sucesso o arquivo para a carga de dívidas na carteira do Mercado Pago, são programadas notificações e e-mails para os usuários pagadores.
    - As notificações push são enviadas para aqueles pagadores que tenham uma conta no Mercado Pago e se cadastraram na opção "Agenda" dentro de "Contas e Serviços" da conta.
    - Os e-mails são enviados para os endereços fornecidos no arquivo de entrada, desde que não tenham sido excluídos das notificações.
O envio das notificações push e dos e-mails será feito após a conclusão do processamento, desde que finalize dentro do horário de 8:00 às 19:30 horas. No caso de cargas fora desse horário, as comunicações serão agendadas para as próximas 8:00 horas.

> NOTE
>
> Nota
>
> Os arquivos permanecem disponíveis durante 7 dias após a carga. Atualmente, não está disponível a opção de realizar atualizações diretas em uma linha que tenha sido carregada previamente.

![Fluxograma](/images/recaudos/fluxograma.png)