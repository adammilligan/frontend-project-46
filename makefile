install:
	npm ci

link:
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-watch:
	npx jest --watch

test-coverage:
	npx jest --bail --coverage --coverageProvider=v8
