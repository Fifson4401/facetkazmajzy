#!/bin/bash
set -e
cd ~/domains/api.facetkazmajzy.pl/public_nodejs/ || exit

echo ">>> Czyszczenie starych plików..."
rm -rf node_modules package-lock.json build .cache

echo ">>> Instalowanie wszystkich zależności bez skryptów..."
npm20 install --ignore-scripts

echo ">>> Instalowanie sharp bez kompilacji..."
npm20 install sharp --ignore-scripts --force || echo "Sharp install failed, continuing..."

echo ">>> Budowanie aplikacji Strapi..."
NODE_ENV=production npm20 run build

echo ">>> Czyszczenie dev dependencies..."
npm20 prune --production

echo ">>> Restartowanie aplikacji..."
devil www restart api.facetkazmajzy.pl

echo ">>> Deploy zakończony pomyślnie."