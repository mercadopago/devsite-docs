# Pagamentos com Pix

Você pode receber pagamentos instantaneamente com Pix (`bank_transfer`) de qualquer banco ou carteira digital, seja através de um **código QR** ou de um **código de pagamento** com um prazo de validade para que o pagamento seja efetuado.

```json
[
    {
        "id": "pix",
        "name": "PIX",
        "payment_type_id": "bank_transfer",
        "status": "active",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pix.gif",
        "thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/pix.gif",
        "deferred_capture": "does_not_apply",
        "settings": [],
        "additional_info_needed": []
    },
    {
        "...": "..."
    }
]
```

> WARNING
>
> Importante
>
> Lembre-se de que, por enquanto, o Banco Central do Brasil funciona de segunda a sexta-feira das 9h às 18h e, caso se solicite um cadastro fora desse horário, confirmaremos no próximo dia útil. Além disso, existe um limite para o valor de Pix que poderá ser movimentado no decorrer do período noturno (entre 20h e 6h) de R$1 mil. Para o período diurno (entre 6h e 20h), contudo, não há limite de movimentação.

## Cadastrar Chave Pix

Para começar a utilizar o Pix como forma de pagamento e se beneficiar de todas as suas funcionalidades, é necessário ter cadastrada uma Chave Pix na conta do vendedor para fins de identificação.  

Veja abaixo como cadastrar sua Chave Pix:

1. Baixe o app do Mercado Pago em seu celular.
2. Na página inicial de sua conta, clique em **Pix** no canto superior direito.
3. Em seguida, clique em Cadastrar.
4. Escolha um ou mais dados que serão cadastrados como **chaves Pix** e preencha as informações necessárias. 
5. Valide o cadastro da Chave Pix com o código de segurança enviado pelo Mercado Pago. Você poderá ver o status das suas chaves cadastradas e gerenciá-las pelo app do Mercado Pago.
