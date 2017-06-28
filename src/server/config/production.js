const port = Number.parseInt(process.env.PORT) || 9999;

export default {
  port: port,
  hostName: process.env.HOST_NAME_PRO,
  serveStatic: process.env.SERVE_STATIC_PRO || false,
  assetHost: process.env.ASSET_HOST_PRO || '',
  redisUrl: process.env.REDIS_URL_PRO
}