MAKEFLAGS = --no-print-directory --always-make --silent
MAKE = make $(MAKEFLAGS)

NODE_BIN = node_modules/.bin
NODE = $(NODE_BIN)/babel-node

.PHONY: \
	test test-watch

test:
	@echo "Running tests..."
	$(NODE_BIN)/mocha \
		--compilers \
		--js:babel-core/register \
		--recursive \
		--reporter list \
		--require ./test/test_helper.js

test-watch:
	@echo "Watching tests..."
	$(NODE_BIN)/mocha \
		--compilers \
		--js:babel-core/register \
		--recursive \
		--reporter list \
		--require ./test/test_helper.js \
		--watch
