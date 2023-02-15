export default {
    hostingPort: 5000,
    apiSettings: {
        enabledApi: true,
        apiUrl: "http://l1_game_api_local:5000",
        authUrl: "http://l1_auth_api_local:5000",
        client: {
            id: "game-server",
            secret: "gameserver@20luminet&",
        },
        useAuthenticate: true,
        requestTimeout: 10000,
        placeBetTimeout: 4000,
        hitJackpotTimeout: 200000,
        enabledApiLogs: true,
    },
    socketOptions: {
        pingInterval: 60 * 1000,
        pingTimeout: 60 * 1000,
        transports: ["websocket"],
        allowUpgrades: false,
        perMessageDeflate: false,
    },
    enabledLogs: true,
    database: {
        url: "mongodb://lmn_backend:LmnBackend@10.10.50.12:39100,10.10.50.13:39100,10.10.50.14:39100/?replicaSet=L1Local&appName=FortuneCat",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auto_reconnect: true,
        },
    },
    sentry: {
        sentryUrl: "https://bfcba2ed6dbc4d4193bba01981b2812d@sentryuat.sabagame.com/19",
        logIdentifier: "fortune-cat",
        env: "LOCAL",
    },
    authenticateSettings: {
        url: "http://l1_auth_api_local:5000",
        id: "game-services",
        secret: "gameservices@20luminet&",
        requestTimeout: 10000,
        useAuthenticate: true,
        audiences: ["api", "admin-api"],
    },
    userServiceSettings: {
        url: "http://l1_user_service_local:5000",
    },
    adminSecretKey: "asWDEerfOIdgsdqRTFabvmgh",
    freeSpinLiveSeconds: 600, // 1 day
    bonusLiveSeconds: 123,
    enableMsgpackParser: false,
};
