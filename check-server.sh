#!/bin/bash

cd "$(dirname "$0")"

echo "🔍 Kontrola serveru..."
echo ""

# Zkontroluj, jestli běží na portu 3000
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "✅ Server běží na portu 3000"
    PID=$(lsof -ti:3000)
    echo "   PID: $PID"
else
    echo "❌ Server neběží na portu 3000"
fi

echo ""
echo "🌐 Testování HTTP odpovědi..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null)
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Server odpovídá (HTTP $HTTP_CODE)"
elif [ "$HTTP_CODE" = "000" ]; then
    echo "❌ Server neodpovídá (žádná odpověď)"
else
    echo "⚠️  Server odpovídá s kódem: $HTTP_CODE"
fi

echo ""
echo "📁 Kontrola souborů..."
if [ -f "app/error.tsx" ]; then
    echo "✅ app/error.tsx existuje"
else
    echo "❌ app/error.tsx chybí"
fi

if [ -f "app/not-found.tsx" ]; then
    echo "✅ app/not-found.tsx existuje"
else
    echo "❌ app/not-found.tsx chybí"
fi

if [ -f "app/layout.tsx" ]; then
    echo "✅ app/layout.tsx existuje"
else
    echo "❌ app/layout.tsx chybí"
fi

if [ -f "app/page.tsx" ]; then
    echo "✅ app/page.tsx existuje"
else
    echo "❌ app/page.tsx chybí"
fi

echo ""
echo "💡 Pro spuštění serveru:"
echo "   npm run dev"


