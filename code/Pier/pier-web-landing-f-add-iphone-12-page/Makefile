export COMPOSE_FILE = docker-compose-sync.yml
ATTACH_TARGET ?= web-landing

# Start docker sync and all needed containers
start: start-sync
	docker-compose up --detach
.PHONY: start

# Stop docker sync and all needed containers
stop: stop-sync
	docker-compose stop
.PHONY: stop

# Display logs and attaches STDIN, STDOUT and STDERR to the specified docker container
attach: start-sync
	docker logs $(ATTACH_TARGET) && docker attach --sig-proxy=false $(ATTACH_TARGET)
.PHONY: attach

# Force docker image build without cache
rebuild:
	docker-compose build --no-cache
.PHONY: rebuild

# Build docker image
build:
	docker-compose build
.PHONY: build

# Start web-landing container running bash
bash:
	docker-compose run --rm web-landing bash
.PHONY: bash

# Setup app
setup: docker-setup start-sync build install
.PHONY: setup

# Install dependencies
install:
	docker-compose run --rm web-landing yarn install
.PHONY: install

# Set Up Docker
docker-setup:
	./bin/docker_setup.sh
.PHONY: docker-setup

# Run test
test: start-sync
	docker-compose run --rm -e NODE_ENV=test web-landing yarn test $(TEST_FILE)
.PHONY: test

# Enable docker sync
start-sync:
	docker-sync start
.PHONY: start-sync

# Disable docker sync
stop-sync:
	docker-sync stop
.PHONY: stop-sync

.SILENT: # this has no purpose but to prevent echoing of commands for all targets
