import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Gym_Wiki/', // замініть на назву вашого репозиторію
});
