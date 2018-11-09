FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 52689
EXPOSE 44356

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["SansApp/SansApp.csproj", "SansApp/"]
RUN dotnet restore "SansApp/SansApp.csproj"
COPY . .
WORKDIR "/src/SansApp"
RUN dotnet build "SansApp.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "SansApp.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SansApp.dll"]