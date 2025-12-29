#!/bin/bash

cd "$(dirname "$0")"

echo "🔍 Checking environment..."
if [ ! -f .env.local ]; then
    echo "⚠️  Creating .env.local file..."
    echo 'REPLICATE_API_TOKEN=your_replicate_api_token_here' > .env.local
fi

echo "📦 Installing dependencies..."
npm install

echo "🚀 Starting Next.js dev server..."
npm run dev

