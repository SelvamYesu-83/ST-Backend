export const apps = [
    {
        name: "company",
        script: "services/company/app.ts",
        interpreter: "ts-node",
        cwd: "D:/tickets/TicketingTool",
        env: {
            NODE_ENV: "development",
            PORT: "3001",
        },
    },
];
  