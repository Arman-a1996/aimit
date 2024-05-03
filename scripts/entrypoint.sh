#!/bin/sh

echo "Generate endpoint file";
node /scripts/nginx-conf.js > /aimit/endpoints.js;

exec "$@";
