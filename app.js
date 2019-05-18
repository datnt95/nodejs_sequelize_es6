import express from 'express';
import middleware from './utils/middleware';

const app = express();
middleware(app);

export default app;
