FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS base
WORKDIR /src

COPY ["./PolkaIndexer/", "PolkaIndexer/"]
COPY ["./lib/", "lib/"]

RUN dotnet restore lib/api/Polkadot/Polkadot.csproj
RUN dotnet restore lib/api/Schnorrkel/Schnorrkel.csproj
COPY . .

RUN dotnet restore PolkaIndexer/PolkaIndexer.csproj
COPY . .

WORKDIR "/src/PolkaIndexer"
RUN dotnet build -c Release -o /app

COPY ["./PolkaIndexer/ca-chain.cert.pem", "bin/Debug/netcoreapp2.2/ca-chain.cert.pem"]

CMD [ "dotnet", "run" ]
