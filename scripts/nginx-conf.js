console.log(
  `window.global = { api: 'https://${process.env.API_DOMAIN}/api', file: 'https://${process.env.FILE_DOMAIN}/upload', ws: 'wss://${process.env.WS_DOMAIN}' };`,
);
