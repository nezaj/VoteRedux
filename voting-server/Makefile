MAKEFLAGS = --no-print-directory --always-make --silent
MAKE = make $(MAKEFLAGS)

NODE_BIN = node_modules/.bin
NODE = $(NODE_BIN)/babel-node

.PHONY: \
	start \
	test test-watch

start:
	@echo "Starting dev-server..."
	$(NODE) index.js

test:
	@echo "Running tests..."
	$(NODE_BIN)/mocha

test-watch:
	@echo "Watching tests..."
	$(NODE_BIN)/mocha --watch --reporter min
