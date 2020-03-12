FROM node:12.15.0
WORKDIR /src
EXPOSE 4200

COPY [".", "polkascan-pre-explorer-gui/"]
COPY ["src/environments/environment.docker.ts", "polkascan-pre-explorer-gui/src/environments/environment.ts"]

WORKDIR /src/polkascan-pre-explorer-gui
RUN npm uninstall @angular/cli && npm install -g @angular/cli

RUN node --version && ng --version
RUN ng build
CMD ["ng", "serve", "--host", "0.0.0.0"]
