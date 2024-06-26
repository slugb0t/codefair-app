import { Server, Probot } from "probot";
import app from "./index.js";
import "dotenv/config";

async function startServer() {
  const server = new Server({
    // log: "https://smee.io/7gWLni5NDY9oEGnk",
    Probot: Probot.defaults({
      appId: process.env.GITHUB_APP_ID,
      privateKey: process.env.PRIVATE_KEY,
      secret: process.env.WEBHOOK_SECRET,
    }),
  });

  await server.load(app);

  server.start();
}

startServer();
