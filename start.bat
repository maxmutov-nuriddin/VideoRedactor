@echo off
echo === OpenReel Video - Local Development ===

if not exist "node_modules\" (
    echo Installing dependencies...
    call pnpm install
)

echo Starting OpenReel development server...
call pnpm dev
pause
