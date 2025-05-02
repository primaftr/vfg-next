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
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			lodash: 'lodash-es',
		},
	},
	build: {
		lib: {
			entry: 'src/index.js',
			name: pkg.name,
			formats: ['es', 'cjs'],
			fileName: format => {
				return format === 'es' ? 'vfg-vue3.esm.js' : 'vfg-vue3.umd.js'
			},
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
			external: ['vue', 'lodash-es', 'fecha'],
			output: {
				globals: {
					vue: 'Vue',
					fecha: 'fecha',
				},
				exports: 'named',
				compact: true,
			},
		},
	},
	optimizeDeps: {
		exclude: ['lodash'], // ✅ to be safe, explicitly exclude
		include: ['lodash-es'],
	},
})
