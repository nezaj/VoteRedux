MAKEFLAGS = --no-print-directory --always-make --silent
MAKE = make $(MAKEFLAGS)

NODE_BIN = node_modules/.bin
NODE = $(NODE_BIN)/babel-node

.PHONY: \
	build start \
	test test-watch

build:
	@echo "Creating bundle.js..."
	$(NODE_BIN)/webpack

start:
	@echo "Starting dev-client..."
	$(NODE_BIN)/webpack-dev-server

test:
	@echo "Running tests..."
	$(NODE_BIN)/mocha 'test/**/*.@(js|jsx)'

test-watch:
	@echo "Watching tests..."
	$(NODE_BIN)/mocha 'test/**/*.@(js|jsx)' --watch --reporter min
