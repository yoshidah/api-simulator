#!/usr/bin/sh
curl -X POST localhost:80/api.json -H 'Content-Type:application/json' -H 'User-Agent:iPhone' --data @request.json -o response.json
