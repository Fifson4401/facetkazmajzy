#!/bin/bash

# Przejście do odpowiedniego katalogu
cd domains/facetkazmajzy.pl/public_nodejs

# Instalacja zależności produkcyjnych z node20
npm20 ci --only=production

# Sprawdzenie czy sharp jest zainstalowany, jeśli nie - instalacja
if ! npm20 list sharp >/dev/null 2>&1; then
    echo "Installing sharp explicitly"
    npm20 install sharp
fi

# Restart aplikacji
devil www restart facetkazmajzy.pl