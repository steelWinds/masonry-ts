import { defineConfig } from 'vitest/config'
import { URL } from 'url'

export default defineConfig({
	resolve: {
		alias: {
			'@/': new URL('./', import.meta.url).pathname,
		},
	},
	test: {
		setupFiles: ['./tests/setup/setup-faker.ts'],
		exclude: ['node_modules', 'dist/*', '*.config.*', 'docs/**/*'],
		include: ['./tests/**/*.spec.ts'],
	},
})
