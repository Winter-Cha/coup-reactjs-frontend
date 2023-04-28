# 가져올 이미지를 정의
FROM node:18-alpine

# 경로 설정하기
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
# package.json 및 package-lock.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
COPY . .

# npm의 캐시 삭제
RUN npm cache clean --force

# npm 버전업
RUN npm install -g npm@latest

# 명령어 실행 (의존성 설치)
RUN npm install

# 3000번 포트 노출
# EXPOSE 3000

# 빌드하기
# RUN npm run build

# npm start 스크립트 실행
# CMD ["npm", "run", "dev"]
