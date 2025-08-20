#!/bin/bash
# Zatrzymaj skrypt, jeśli którekolwiek polecenie zawiedzie
set -e

echo ">>> Przechodzenie do katalogu aplikacji..."
cd ~/domains/api.facetkazmajzy.pl/public_nodejs/ || exit

echo ">>> Czyszczenie starych modułów i artefaktów..."
rm -rf node_modules build .cache

echo ">>> Instalowanie wszystkich zależności (npm install)..."
# Używamy Twojego aliasu npm20
npm20 install

echo ">>> Budowanie aplikacji Strapi (npm run build)..."
npm20 run build

echo ">>> Restartowanie aplikacji..."
devil www restart api.facetkazmajzy.pl

echo ">>> Deploy zakończony pomyślnie."