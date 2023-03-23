import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 //vamos rodar o front na porta 3000, que é a porta definida no back que o front esta rodando
  }
})
