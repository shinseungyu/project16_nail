@echo off
chcp 65001 >nul
title 블로그 콘솔 (nailstartup.com)
cd /d "%~dp0"

if not exist ".env.local" (
  echo [안내] .env.local 이 없습니다. .env.local.example 을 복사해 BLOG_API_TOKEN 을 채워 주세요.
  copy ".env.local.example" ".env.local" >nul
  notepad ".env.local"
)

if not exist "node_modules" (
  echo 처음 실행 — 필요한 프로그램을 설치합니다. 1~2분 걸립니다...
  call npm install
)

start "" http://localhost:3060
call npm run dev
pause
