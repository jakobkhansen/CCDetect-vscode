all:
	cd CCDetect-lsp && make && gradle build
	cp ./CCDetect-lsp/app/build/libs/app-all.jar ./launcher/launcher.jar
	npm run compile
