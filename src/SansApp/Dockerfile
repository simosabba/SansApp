FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 64993
EXPOSE 44388

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["src/SansApp/SansApp.csproj", "src/SansApp/"]
RUN dotnet restore "src/SansApp/SansApp.csproj"
COPY . .
WORKDIR "/src/src/SansApp"
RUN dotnet build "SansApp.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "SansApp.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SansApp.dll"]