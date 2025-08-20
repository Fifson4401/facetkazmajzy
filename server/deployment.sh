#!/bin/bash

cd ~/domains/api.facetkazmajzy.pl/public_nodejs/ || exit

echo ">>> Instalowanie zależności z flagami dla FreeBSD..."

npm20 install --platform=freebsd --arch=x64 --ignore-scripts=false

echo ">>> Restartowanie aplikacji..."
devil www restart api.facetkazmajzy.pl

echo ">>> Deploy zakończony pomyślnie."