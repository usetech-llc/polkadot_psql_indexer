FROM node:12.15.0
WORKDIR /src
EXPOSE 4200

COPY [".", "polkascan-pre-explorer-gui/"]

WORKDIR /src/polkascan-pre-explorer-gui
RUN npm uninstall @angular/cli && npm install -g @angular/cli

RUN node --version && ng --version
RUN ng build
CMD ["ng", "serve", "--host", "0.0.0.0"]
