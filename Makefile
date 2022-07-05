.PHONY = start

start: node_modules
	node index.js

node_modules:
	yarn -s
	touch node_modules
