# Best practices for OAuth integration

When using OAuth, it is important to take certain aspects into account so that the integration works correctly.

Below, you will find a guide to possible errors and good practices to keep in mind.

## Correct use of values in request headers

Always use the `accept` and `content-type` headers in your POST request. Be careful not to add values to headers that are not part of the integration to avoid getting a response error.

![oauth_header](/images/oauth/oauth_header.png)

## Correct use of 'params' values

In your POST call, be careful to use only the requested `params` values. Do not add any other non-required values, otherwise you will receive an error code in response.

![oauth_params](/images/oauth/oauth-1.png)


## Correct use of Query Params

Remember not to send any parameters inside Query Params. Send the parameters within the request body as indicated in [API Reference](/developers/en/reference/oauth/_oauth_token/post).

![oauth_queryparams](/images/oauth/oauth_queryparams_v2.png)

## Correct use of the 'grant_type' field

Always use the `grant_type` field in your requests with the `authorization_code` value. Remember that if you send another value, it is possible that you will receive an error in response.

![oauth_grant_type](/images/oauth/oauth_granttype_v2.png)

## Using the 'state' field in the 'authorization code' request

To enhance integration security, we recommend including the `state` parameter in the `authorization code` request flow. This way, you can ensure that the response belongs to a request initiated by the same application.

Note that the `redirect_uri` must be a static URL. In case you want to send parameters at this URL, use `state` to send this information. Otherwise, the call will receive an error response if the `redirect_uri` does not exactly match the one configured in the application.

![oauth_state](/images/oauth/oauth_state_v4.png)

To find more information about the request, its parameters, and the possible success and error responses you may receive, go to [API Reference](/developers/en/reference/oauth/_oauth_token/post) documentation.

