# Gerenciar Access Token
 
Atualmente existem formas diferentes através das quais o **_Access token_** e seus **_temporary grants_** criados podem ser desabilitados e invalidados para autorizar requests de recursos protegidos ou para trocar por novos tokens.
 
* **Expiração**: após o tempo estabelecido no momento da criação, o token expira automaticamente e não pode ser obtido.
* **Alteração de senha pelo usuário**: existem fluxos de alteração de senha em que o vendedor pode revogar todas as suas credenciais, incluindo os tokens associados e _temporary grants_.
* **Revogação de autorização**: ao revogar uma autorização entre o vendedor e o aplicativo, é acionada a exclusão de todos os tokens e _temporary grants_ associadas a eles.
* **Lavagem de credenciais por fraude**: é possível que o departamento de segurança da informação e prevenção de fraudes realizem uma atualização total das credenciais de um usuário. Isso aciona a exclusão de todos os tokens e _temporary grants_ associadas ao vendedor em questão.
* **Limpeza de sessão do usuário**: aciona a atualização de todos os tokens de vendedor e _temporary grants_.
* **Exclusão de aplicação**: quando uma aplicação é excluída, todos os tokens e _temporary grants_ pertencentes a ele são excluídos.
 
Você pode receber notificações webhook sempre que um vendedor autorizar ou desautorizar sua aplicação. Para configurá-las, veja mais informações na documentação de [Webhooks](/developers/pt/docs/checkout-pro/additional-content/your-integrations/notifications/webhooks).