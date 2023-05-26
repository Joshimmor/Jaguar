import React from 'react'

export default function media() {
  return (
    <div>media</div>
  )
}
const session = await Shopify.Utils.loadCurrentSession(
    req,
    res
  );
  const client = new Shopify.Clients.Graphql(
    session.shop,
    session.accessToken
  );
 
  