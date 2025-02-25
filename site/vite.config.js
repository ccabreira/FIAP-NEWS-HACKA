import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './', // Define que a raiz é a pasta do projeto
  plugins: [react()],
  build: {
    outDir: 'dist', // Pasta onde os arquivos compilados serão gerados
    emptyOutDir: true, // Garante que a pasta seja limpa antes do build
  },
  server: {
    port: 3000, // Define a porta local para desenvolvimento
  },
});
