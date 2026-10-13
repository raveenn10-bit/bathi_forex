@echo off
setlocal
cd /d "%~dp0"
echo ====================================================
echo   ⚡ BHATHI FOREX / LANKAFOREX.COM - QUICK GIT PUSH
echo ====================================================
echo.

node scripts/push.js

if errorlevel 1 (
  echo.
  echo [Process exited with an alert or cancellation.]
)

pause
