# Especificações de formato CSV e exemplos

Esta documentação fornece esclarecimentos importantes sobre o formato CSV dos arquivos utilizados, com detalhes específicos apresentados nas seções seguintes.

## Formato dos campos

O formato dos campos é detalhado da seguinte forma: T(Lmin - Lmax), onde Lmin é o comprimento mínimo e Lmax é o comprimento máximo, e T é o tipo de dados que são detalhados a seguir:

| Tipo | Descrição | Regexp |
|------|-------------|--------|
| **A** | Campo alfabético. Não são aceitos acentos. | `[a-zA-Z]` |
| **N(,2)** | Campo numérico com decimais. | `[0-9]+.[0-9]{2}` |
| **N** | Campo numérico com números inteiros. | `[0-9]+` |
| **AN** | Campo alfanumérico. | `[a-zA-Z0-9]` |
| **ANS** | Campo que suporta caracteres alfanuméricos e especiais. | `[a-zA-Z-0-9 _@.-()+]` |
| **AS** | Campo que suporta caracteres alfabéticos e caracteres especiais. | `[a-zA-Z- _@.-()+]` |

Para todos os formatos, espaços devem ser utilizados para preencher a quantidade de caracteres.

Por exemplo:
- AN(1-11) indica que é um campo alfanumérico de comprimento de 11 caracteres.
- AN(1-20) indica que o campo pode ter um comprimento de 1 a 20 caracteres.

### Layout de entrada

Consulte os campos que você pode configurar na entrada. Na coluna "Categoria", M representa Obrigatório, C Condicional e O Opcional - para estes casos, os campos devem permanecer vazios.

> WARNING
>
> Importante
>
> No caso de Dívidas com 'C' na coluna "Categoria", pelo menos um desses campos deve ser preenchido, de acordo com a configuração do vendedor.

| Coluna/índice | Atributo                  | Formato  | Detalhe                                                                                                                                           | Categoria                             |
|--------------|---------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| 1            | Referência                | AN(1-50) | Identificador único da dívida que o cliente pagará, gerenciado pela empresa. Tenha em conta que este identificador será utilizado para conciliação. | M                                     |
| 2            | DNI/CUIL/CUIT             | N(011)   | DNI, CUIL ou CUIT do cliente.                                                                                                                     | C*                                    |
| 3            | Código do cliente         | AN(020)  | Identificador utilizado pela empresa para identificar seus clientes. Lembre-se de que você deve respeitar o formato indicado durante o processo de incorporação. | C                                     |
| 4            | Data do primeiro vencimento  | N(008)   | Data do primeiro vencimento no formato AAAAMMDD.                                                                                                  | M                                     |
| 5            | Valor do primeiro vencimento | N(,2)    | Valor do primeiro vencimento. É um número inteiro onde os dois últimos dígitos representam os decimais.                                           | M                                     |
| 6            | Data do segundo vencimento   | N(008)   | Data do segundo vencimento, no formato AAAAMMDD.                                                                                                  | O                                     |
| 7           | Valor do segundo vencimento  | N(,2)    | Valor do segundo vencimento. Trata-se de um número inteiro no qual os dois últimos dígitos representam os decimais.                               | O                                     |
| 8           | Data do terceiro vencimento  | N(008)   | Data do terceiro vencimento, no formato AAAAMMDD.                                                                                                 | O                                     |
| 9           | Valor do terceiro vencimento | N(,2)    | Valor do terceiro vencimento. É um número inteiro onde os dois últimos dígitos são decimais.                                                      | O                                     |
| 10            | Nome completo             | AS(100)  | Nome completo do cliente sem caracteres especiais.                                                                                                | O - Links massivos <br>M - Carga na Wallet |
| 11            | Telefone do cliente          | ANS(20)  | Telefone do cliente.                                                                                                                              | O                                     |
| 12            | Endereço de e-mail        | ANS(64)  | E-mail do cliente onde ele receberá as notificações sobre a existência de uma nova dívida para a empresa.                                         | O                                     |
| 13           | Motivo                    | ANS(030) | Descrição que o usuário verá ao pagar uma dívida ou um link. Se não for preenchido, o valor padrão será "Outros".                                 | O                                     |
| 14           | Comentário                | ANS      | Conceito ou comentário.                                                                                                                           | O                                     |
| 15           | Imposto                   | N        | Imposto. Pode ser 0, 5 ou 19.                                                                                                                     | O - Apenas para casos de links massivos na Colômbia. |

> NOTE
>
> Nota
>
> As segundas e terceiras datas de vencimento, junto com seus valores associados, são opcionais. O sistema atualizará automaticamente os valores em cada data especificada, garantindo que o valor a pagar seja o correto em todos os momentos.

## Layout de sucesso para Links de pagamentos

| Coluna/índice | Atributo      | Formato | Detalhe                                                               |
|--------------|---------------|---------|-----------------------------------------------------------------------|
| 1            | Referência    | AN(020) | Identificador único da dívida que o cliente pagará, gerenciado pela empresa. |
| 2            | Link de pagamentos | ANS     | URL do Link de Pagamento gerado.                                       |

## Layout de sucesso para Dívidas

| Coluna/índice | Atributo   | Formato | Detalhe                                                                                   |
|--------------|------------|---------|-------------------------------------------------------------------------------------------|
| 1            | Referência | AN(020) | Identificador único da dívida que o cliente pagará, gerenciado pela empresa.              |
| 2            | Resultado  | ANS     | Valor fixo SUCCESS para as linhas processadas corretamente.                               |

## Layout de erro

| Coluna/índice | Atributo                         | Formato | Detalhe                                                                    |
|--------------|----------------------------------|---------|----------------------------------------------------------------------------|
| 1            | Número da linha do arquivo de dívidas. | AN(008) | Identificador do cliente. Deve respeitar o formato indicado durante a incorporação. |
| 2            | Referência                       | AN(020) | Identificador único da dívida que o cliente pagará, gerenciado pela empresa. |
| 3            | Erros                            | ANS     | Descrição dos erros encontrados na linha.                                    |

A seguir, um exemplo de arquivo de entrada para Links massivos e Dívidas:

```terminal
reflinks11,33334444,,20240531,33.33,,,,,,,,Parcela Demonstração ao Vivo 1,,
reflinks22,22228888,,20240531,44.44,20240601,22.22,20240602,122.11,Richie Jenkins,1113101138,test_user_1196837045@testuser.com,Parcela Demonstração ao Vivo 2,,
```

A seguir, um exemplo de sucesso para Links massivos:

```terminal
ext1602, https://mpago.la/2W66EvG
ext1600, https://mpago.la/2LdGavR
ext1601, https://mpago.la/1FVqpCV
```

A seguir, um exemplo de arquivo de sucesso para Dívidas:

```terminal
ext1602, SUCCESS
ext1600, SUCCESS
ext1601, SUCCESS
```