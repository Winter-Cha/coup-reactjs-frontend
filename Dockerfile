# 가져올 이미지를 정의
FROM node:16.17.1

# 경로 설정하기
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# package.json 및 package-lock.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
COPY package*.json ./


# npm의 캐시 삭제
RUN npm cache clean --force

# npm 버전업
RUN npm install -g npm@latest

# next강제 설치
RUN npm install next

# 명령어 실행 (의존성 설치)
RUN npm install

# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
COPY . .

# 불필요한 파일 제외
COPY .dockerignore ./

# 3000번 포트 노출
EXPOSE 3000

# 빌드하기
RUN npm run build

# npm start 스크립트 실행
CMD ["npm", "run", "dev"]

# 각각의 명령어들은 한줄 한줄씩 캐싱되어 실행된다.
# package.json의 내용은 자주 바뀌진 않을 거지만
# 소스 코드는 자주 바뀌는데
# npm install과 COPY . . 를 동시에 수행하면
# 소스 코드가 조금 달라질때도 항상 npm install을 수행해서 리소스가 낭비된다.

# 그리고 Dockerfile로 docker 이미지를 빌드해야한다.
# 도커 이미지 만들기
# docker build .
# docker build -t co-up-image .
# 도커 컨테이너 실행하기
# docker run -p 3000:3000 --name co-up-front co-up-image
# docker run -p 3000:3000 --name co-up-front co-up-image (백그라운드에서 실행)