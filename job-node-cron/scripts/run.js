const startedAt = new Date().toISOString();
console.log(`[job] started at ${startedAt}`);

const payload = {
  status: 'completed',
  finishedAt: new Date().toISOString(),
};

console.log(JSON.stringify(payload));
