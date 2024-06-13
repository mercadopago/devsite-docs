# Erros no processamento

A seguir, são detalhados os controles realizados a partir do Self Service para assegurar o correto funcionamento do fluxo _end to end_ e para preservar a experiência dos nossos usuários. Se for detectada alguma das situações controladas, a informação completa não será processada e deverá ser enviada novamente por completo.

## Controles de conteúdo

| Código de Erro | Descrição                                             | Causa                                                                                   |
|-----------------|---------------------------------------------------------|-----------------------------------------------------------------------------------------|
| E053            | ID do registro                                         | O campo Reference não está presente.                              |
| E054            | Formato de código de cliente inválido                  | Se o vendedor declarar identificar o cliente com o código do cliente e este não estiver presente ou tiver um formato inválido. |
| E055            | Formato de DNI inválido                                 | Se o vendedor for da Argentina e declarar identificar o cliente pelo DNI e este não estiver presente ou tiver um formato inválido. |
| E056            | Formato de endereço de e-mail inválido                  | Formato inválido de e-mail.                                                              |
| E057            | Formato de data de vencimento inválido                | A primeira data de vencimento não está no formato AAAAMMDD.                              |
| E058            | Valor de data de vencimento inválido                  | A primeira data de vencimento é anterior ao dia em que a dívida é enviada.                        |
| E059            | Valor de montante vencido inválido                         | O montante da primeira data de vencimento não está presente ou tem um formato incorreto.                |
| E060            | Formato de data de vencimento secundária inválido     | A segunda data de vencimento não está no formato AAAAMMDD.                             |
| E061            | Valor de data de vencimento secundária inválido       | A segunda data de vencimento é anterior ou igual à data de vencimento da primeira.          |
| E062            | Valor de montante de vencimento secundária inválido       | A segunda data de vencimento está presente, mas não seu montante ou tem um formato inválido. |
| E063            | Formato de data de vencimento terciária inválido      | A terceira data de vencimento não está no formato AAAAMMDD.                              |
| E064            | Valor de data de vencimento terciária inválido        | A terceira data de vencimento é anterior ou igual à segunda data de vencimento.          |
| E065            | Valor de montante de vencimento terciária inválido        | A terceira data de vencimento está presente, mas não seu montante ou tem um formato inválido. |
