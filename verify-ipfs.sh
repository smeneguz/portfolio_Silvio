#!/bin/bash

# Script per verificare CID IPFS prima di aggiornare ENS
# Usage: ./verify-ipfs.sh bafybeib7t7mlfl64wumqgabyvcvdxki7p7k4i4yntncvqmka4xosaupcmm

CID="$1"

if [ -z "$CID" ]; then
    echo "❌ Usage: $0 <IPFS_CID>"
    exit 1
fi

echo "🔍 Verificando CID: $CID"
echo ""

# Test 1: Accessibilità
echo "1️⃣ Test accessibilità..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$CID.ipfs.w3s.link")
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Accessibile (HTTP $HTTP_CODE)"
else
    echo "❌ Non accessibile (HTTP $HTTP_CODE)"
    exit 1
fi

# Test 2: Contenuto corretto
echo "2️⃣ Test contenuto..."
TITLE=$(curl -s "https://$CID.ipfs.w3s.link" | grep -o '<title>[^<]*</title>' | head -1)
if [[ "$TITLE" == *"Silvio Meneguzzo"* ]]; then
    echo "✅ Contenuto corretto: $TITLE"
else
    echo "❌ Contenuto non riconosciuto: $TITLE"
    exit 1
fi

# Test 3: Web3Badge presente
echo "3️⃣ Test Web3Badge..."
WEB3_BADGE=$(curl -s "https://$CID.ipfs.w3s.link" | grep -c "Decentralised Web" || echo "0")
if [ "$WEB3_BADGE" -gt "0" ]; then
    echo "✅ Web3Badge presente"
else
    echo "⚠️  Web3Badge non trovato"
fi

echo ""
echo "🎉 CID verificato! Sicuro per ENS:"
echo "   ipfs://$CID"
echo ""
echo "🔗 URL di test:"
echo "   https://$CID.ipfs.w3s.link"
echo "   https://ipfs.4everland.io/ipfs/$CID"
