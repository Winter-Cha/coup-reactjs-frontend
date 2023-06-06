# Makefile

# 사용방법
# ex)
# make up
# 	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
# make down
# 	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -rmi

target := dev
COMPOSE_FILES := -f docker-compose.yml -f docker-compose.${target}.yml

up:
	@docker-compose ${COMPOSE_FILES} up

down:
	@docker-compose ${COMPOSE_FILES} down -rmi

shell: up
	@docker exec -it execapp /bin/bash

# 변수 테스트 용 명령어
echo:
	@echo ${COMPOSE_FILES}