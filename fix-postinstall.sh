#!/bin/bash
sed -i '/"scripts": {/a\ \ \ \ "postinstall": "prisma generate && prisma db push",' package.json
