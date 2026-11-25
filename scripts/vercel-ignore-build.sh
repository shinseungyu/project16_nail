#!/bin/sh
# Vercel "Ignored Build Step" — 종료코드 0 = 빌드 건너뜀, 1 = 빌드.
#
# 발행 API 가 초안(content/blog/drafts)이나 블로그 이미지(public/images/blog)만 커밋했을 때는
# 사이트에 바뀌는 게 없으니 빌드하지 않는다(무료 플랜 배포 횟수·빌드 시간 절약).
# 글을 발행하면 content/blog/posts 가 바뀌므로 그때 이미지까지 같이 배포된다.
#
# 비교 기준은 "마지막으로 배포에 성공한 커밋"(VERCEL_GIT_PREVIOUS_SHA). 그 사이에 코드 커밋이
# 하나라도 섞여 있으면 빌드한다. 기준이 없거나 git 명령이 실패하면 무조건 빌드(안전한 쪽).

if [ -z "$VERCEL_GIT_PREVIOUS_SHA" ]; then
  echo "이전 배포 기준 없음 → 빌드"
  exit 1
fi

git cat-file -e "$VERCEL_GIT_PREVIOUS_SHA^{commit}" 2>/dev/null || git fetch --depth=50 origin "$VERCEL_GIT_COMMIT_REF" >/dev/null 2>&1
if ! git cat-file -e "$VERCEL_GIT_PREVIOUS_SHA^{commit}" 2>/dev/null; then
  echo "이전 배포 커밋을 찾을 수 없음 → 빌드"
  exit 1
fi

if git diff --quiet "$VERCEL_GIT_PREVIOUS_SHA" HEAD -- . ':(exclude)content/blog/drafts' ':(exclude)public/images/blog'; then
  echo "블로그 초안·이미지만 바뀜 → 빌드 건너뜀"
  exit 0
fi

echo "사이트 변경 있음 → 빌드"
exit 1
