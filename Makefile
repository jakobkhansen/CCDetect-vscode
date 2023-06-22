all:
	git submodule update --init --recursive
	cd CCDetect-lsp && make && gradle build
	mkdir launcher
	cp ./CCDetect-lsp/app/build/libs/app-all.jar ./launcher/launcher.jar
	npm install
	npm run compile
