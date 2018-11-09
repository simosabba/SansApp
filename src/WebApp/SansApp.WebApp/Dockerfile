FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 65356
EXPOSE 44328

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["src/WebApp/SansApp.WebApp/SansApp.WebApp.csproj", "src/WebApp/SansApp.WebApp/"]
RUN dotnet restore "src/WebApp/SansApp.WebApp/SansApp.WebApp.csproj"
COPY . .
WORKDIR "/src/src/WebApp/SansApp.WebApp"
RUN dotnet build "SansApp.WebApp.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "SansApp.WebApp.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SansApp.WebApp.dll"]