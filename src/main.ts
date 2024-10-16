import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import roomRoutes from './routes/roomRoutes';
import bookingRoutes from './routes/bookingRoutes';
import { errorHandler } from './middleware/errorHandlerMiddleware';
import connectDB from './config/db';
import 'reflect-metadata';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/rooms', roomRoutes);
app.use('/api/v1/booking', bookingRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
