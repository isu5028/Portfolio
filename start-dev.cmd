@echo off
setlocal
set "ASTRO_TELEMETRY_DISABLED=1"
cd /d "%~dp0"
if exist "%LOCALAPPDATA%\Programs\NodeJS\node-v22.23.3-win-x64\node.exe" set "PATH=%LOCALAPPDATA%\Programs\NodeJS\node-v22.23.3-win-x64;%PATH%"
call npm.cmd run dev -- --host 0.0.0.0
if errorlevel 1 pause
