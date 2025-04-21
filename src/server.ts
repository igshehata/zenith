import cors from 'cors';
import express from 'express';

console.log('Initializing Zenith E-commerce server...');

const app = express();
const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3001;

app.use(
  cors({
    origin: '*', // Allow all origins for now (adjust for production)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  }),
);

// Basic Express route for root path
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Zenith E-commerce API!');
});

// --- Start Server ---
try {
  app.listen(port, () => {
    console.log('✅ Server started successfully.');
  });
} catch (error) {
  console.error('❌ Failed to start server:', error);
  process.exit(1); // Exit if server fails to start
}

// --- Graceful Shutdown ---
process.on('SIGINT', () => {
  console.log('\n🚦 Received SIGINT, shutting down gracefully...');
  // Add any cleanup logic here (e.g., close database connections if needed)
  process.exit(0);
});

export default app;
