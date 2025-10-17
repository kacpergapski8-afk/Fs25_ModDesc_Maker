@echo off
REM Run the portable exe (place the exe in same folder as this .bat)
if exist "FS25 Mod Helper by Hackerek_.exe" (
  echo Launching FS25 Mod Helper...
  start "" "%~dp0FS25 Mod Helper by Hackerek_.exe"
) else (
  echo EXE not found. Please put 'FS25 Mod Helper by Hackerek_.exe' in this folder.
)
pause
