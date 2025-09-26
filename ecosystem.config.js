module.exports = {
    apps: [
        {
        name: "duybao.portfolio",
        script: "sh",
        args: "-c 'pnpm install && pnpm build && pnpm start'",
        env: {
            PORT: 5000,
            NODE_ENV: "production",
        },
        },
    ],
};
