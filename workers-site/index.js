// Cloudflare Worker script to serve static content from the dist directory

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname === '/' ? '/index.html' : url.pathname
  const asset = await getAssetFromKV(request, { mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/dist${path}`) })
  return asset
}
