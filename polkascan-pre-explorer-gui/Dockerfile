FROM node:12.2.0
RUN npm update
RUN npm install -g @angular/cli@7.3.9

WORKDIR /src
EXPOSE 4200

COPY [".", "polkascan-pre-explorer-gui/"]
COPY ["src/environments/environment.docker.ts", "polkascan-pre-explorer-gui/src/environments/environment.ts"]

WORKDIR /src/polkascan-pre-explorer-gui

RUN npm install
RUN node --version && ng --version
RUN ng build
CMD ["ng", "serve", "--host", "0.0.0.0"]
