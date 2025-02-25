import { init, cleanup } from 'detox';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await cleanup();
});
