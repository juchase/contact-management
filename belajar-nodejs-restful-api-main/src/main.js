import { web } from "./application/web.js";
import { logger } from "./application/logging.js";
import { prismaClient } from "./application/database.js";

async function startServer() {
  try {
    // Test Prisma connection
    await prismaClient.$connect();
    logger.info("Database connected");

    // Start the web server
    web.listen(3000, () => {
      logger.info("App start");
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  logger.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  logger.error("Uncaught Exception thrown:", error);
  process.exit(1);
});

startServer();
