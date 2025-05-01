import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import banner from 'vite-plugin-banner'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'

const pkg = require('./package.json')

// Banner text generation (same as your original)
const bannerText = `/** 
 * ${pkg.name}
 * ${pkg.description}
 * v${pkg.version}
 * @license ${pkg.license} License
 */`

export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/],
			template: {
				compilerOptions: {
					whitespace: 'condense',
				},
			},
		}),
		banner(bannerText),
		cssInjectedByJs(),
	],
	build: {
		lib: {
			entry: 'src/index.js',
			name: pkg.name,
			formats: ['es', 'umd'],
			fileName: format => (format === 'es' ? pkg.module.split('/').pop() : pkg.main.split('/').pop()),
		},
		sourcemap: true,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
			format: {
				comments: /@preserve|@license|@cc_on/i,
			},
		},
		rollupOptions: {
			external: ['vue', 'lodash', 'fecha'],
			output: {
				globals: {
					vue: 'Vue',
					lodash: 'lodash',
					fecha: 'fecha',
				},
				exports: 'named',
				compact: true,
				inlineDynamicImports: true,
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
