Write-Host "=== OpenReel Video - Local Development ===" -ForegroundColor Cyan

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    pnpm install
}

Write-Host "Starting OpenReel development server..." -ForegroundColor Green
pnpm dev
