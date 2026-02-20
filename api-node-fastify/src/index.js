import Fastify from 'fastify';

const app = Fastify({ logger: false });
const port = Number(process.env.PORT || 3000);

app.get('/', async () => ({ status: 'ok' }));
app.get('/healthz', async () => ({ status: 'healthy' }));

app.listen({ host: '0.0.0.0', port }).catch((error) => {
  console.error(error);
  process.exit(1);
});
