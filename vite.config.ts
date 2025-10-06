import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'process.env': {
      // NEXT_PUBLIC_BACKEND_URL: 'https://backend-two-zeta-63.vercel.app',
      NEXT_PUBLIC_CV_PREVIEW_URL: 'https://drive.google.com/file/d/1vRrNcQG2cb6lJjfgNli2eNT9MZF98SXh/view?usp=drive_link',
      NEXT_PUBLIC_CV_DOWNLOAD_URL: 'https://drive.google.com/uc?export=download&id=1vRrNcQG2cb6lJjfgNli2eNT9MZF98SXh',
    }
  }
});
