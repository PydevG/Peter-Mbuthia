import * as express from 'express';

import contactRoutes from './routes/contact';
import * as cors from 'cors';

const app = express();
const PORT = 5000;

// CORS configuration
app.use(
  cors({
    origin: 'https://nexus-code-studio-front.onrender.com/', 
    credentials: true,
  })
);

app.use(express.json());

// Mount the contact API route
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on https://nexus-code-studio.onrender.com:${PORT}`);
});
