# Casos para validar o QR Comprador

|Caso|Resultado esperado|Observações|
|---|---|---|
|O vendedor pressiona as teclas do teclado durante o escaneamento.|O hardware não modifica a trama escaneada.|O pagamento deve ser efetuado satisfatoriamente.|
|Alterar o idioma do POS antes do escaneamento.|Os caracteres da trama escaneada não mudam, portanto, a transação deve ser concluída com sucesso.|O POS não deve permitir a alteração do idioma|
|Pagamento aprovado. O usuário faz um pagamento aprovado.|O sistema do Ponto de Venda recebe as informações de um pagamento aprovado.|O status da resposta deve ser approved.|
|Pagamento recusado. O usuário efetua um pagamento que é recusado. |O sistema do Ponto de Venda recebe as informações de um pagamento recusado. Abre o scanner para a releitura de um QR.|O status da resposta deve ser rejected.|
|Devolução do pagamento. Uma devolução é realizada desde o Ponto de Venda.| O reembolso ou estorno impacta na conta do comprador.|[Ver Reembolsos](/developers/pt/docs/qr-code/additional-content/refunds)|
|Busca do pagamento devido à interrupção da conexão: O pedido é excluído, portanto, ao escanear o QR é exibida a tela de erro.|Tente escanear o QR após a expiração da `expiration_date`.|