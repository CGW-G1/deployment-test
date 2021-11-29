const env = process.env.REACT_APP_ENV;

let config = {
    baseURL: "http://localhost:3000",
};

if (env) {
    switch (env.toUpperCase()) {
        case "STAGE":
            config.baseURL = "http://stage.localhost/";
            break;
        case "PRODUCTION":
            config.baseURL = "http://lcalhost.com/";
    }
};

export default config;