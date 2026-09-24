@echo off
setlocal
cd /d "%~dp0"
xcopy "TeamE-sjecRacing-main\images\team" "images\team" /E /Y /I
xcopy "images\team" "TeamE-sjecRacing-main\images\team" /E /Y /I
endlocal
