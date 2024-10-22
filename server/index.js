import dotenv from 'dotenv';
import express from 'express';

import { getDocuments } from './Routes/documents.js';
import { authenticatedMiddleware } from './Routes/authenticate.js';

dotenv.config();

const { PORT } = process.env;
const app = express();

app.use('/documents', authenticatedMiddleware, getDocuments);

app.listen(PORT, () => {
  console.log(`Backend started on port ${PORT}`);
});
