
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      all: true,
      skipFull: false,
      ignoreEmptyLines: true,
      reportOnFailure: true,
      exclude: [
        'node_modules/**',
        'coverage/**',
        'dist/**',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/__tests__/**',
        'test/**',
        '.next/**',
        '*.config.*',
        '*.d.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
