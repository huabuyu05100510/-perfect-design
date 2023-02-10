// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
// Created by Umi Plugin

export interface IConfigFromPlugins {
	clientLoader?: {}
	codeSplitting?: {
		jsStrategy?: 'bigVendors' | 'depPerChunk' | 'granularChunks'
		jsStrategyOptions?: {}
		cssStrategy?: 'mergeAll'
		cssStrategyOptions?: {}
	}
	title?: string
	styles?: unknown[]
	scripts?: unknown[]
	routes?: {}[]
	reactRouter5Compat?: {}
	presets?: string[]
	plugins?: string[]
	npmClient?: 'pnpm' | 'tnpm' | 'cnpm' | 'yarn' | 'npm'
	mountElementId?: string
	metas?: unknown[]
	links?: unknown[]
	historyWithQuery?: {}
	history?: {
		type?: 'browser' | 'hash' | 'memory'
	}
	headScripts?: unknown[]
	conventionRoutes?: {
		base?: string
		exclude?: unknown[]
	}
	base?: string
	analyze?: {}
	writeToDisk?: boolean
	theme?: {}
	targets?: {}
	svgr?: {}
	svgo?: {} | boolean
	styleLoader?: {}
	srcTranspilerOptions?: {
		esbuild?: {}
		swc?: {}
	}
	srcTranspiler?: 'babel' | 'esbuild' | 'swc' | 'none'
	sassLoader?: {}
	runtimePublicPath?: {}
	purgeCSS?: {}
	publicPath?: string
	proxy?: {} | unknown[]
	postcssLoader?: {}
	outputPath?: string
	mfsu?:
		| {
				cacheDirectory?: string
				chainWebpack?: () => any
				esbuild?: boolean
				exclude?: unknown[]
				include?: string[]
				mfName?: string
				remoteAliases?: string[]
				remoteName?: string
				runtimePublicPath?: boolean
				shared?: {}
				strategy?: 'eager' | 'normal'
		  }
		| boolean
	mdx?: {
		loader?: string
		loaderOptions?: {}
	}
	manifest?: {}
	lessLoader?: {}
	jsMinifierOptions?: {}
	jsMinifier?: 'esbuild' | 'swc' | 'terser' | 'uglifyJs' | 'none'
	inlineLimit?: number
	ignoreMomentLocale?: boolean
	https?: {}
	hash?: boolean
	forkTSChecker?: {}
	fastRefresh?: boolean
	extraPostCSSPlugins?: unknown[]
	extraBabelPresets?: unknown[]
	extraBabelPlugins?: unknown[]
	extraBabelIncludes?: unknown[]
	externals?: {} | string | (() => any)
	esm?: {}
	devtool?: string | boolean
	depTranspiler?: 'babel' | 'esbuild' | 'swc' | 'none'
	define?: {}
	deadCode?: {}
	cssMinifierOptions?: {}
	cssMinifier?: 'cssnano' | 'esbuild' | 'parcelCSS' | 'none'
	cssLoaderModules?: {}
	cssLoader?: {}
	copy?: unknown[]
	cacheDirectoryPath?: string
	babelLoaderCustomize?: string
	autoprefixer?: {}
	autoCSSModules?: boolean
	alias?: {}
	crossorigin?:
		| boolean
		| {
				includes?: {}[]
		  }
	esmi?: {
		cdnOrigin?: string
		shimUrl?: string
	}
	exportStatic?: {
		extraRoutePaths?: (() => any) | string[]
	}
	favicons?: string[]
	icons?: {
		autoInstall?: {}
		defaultComponentConfig?: {}
		alias?: {}
	}
	mock?: {
		exclude?: string[]
		include?: string[]
	}
	mpa?: {
		template?: string
		layout?: string
		getConfigFromEntryFile?: boolean
		entry?: {}
	}
	phantomDependency?: {
		exclude?: string[]
	}
	polyfill?: {
		imports?: string[]
	}
	routePrefetch?: {}
	ssr?: {
		serverBuildPath?: string
		platform?: string
		builder?: 'esbuild' | 'webpack'
	}
	terminal?: {}
	tmpFiles?: boolean
	lowImport?: {
		libs?: unknown[]
		css?: string
	}
	vite?: {}
	apiRoute?: {
		platform?: string
	}
	monorepoRedirect?:
		| boolean
		| {
				srcDir?: string[]
				exclude?: {}[]
				peerDeps?: boolean
		  }
	test?: {}
	clickToComponent?: {
		editor?: string
	}
	legacy?: {
		buildOnly?: boolean
		nodeModulesTransform?: boolean
	}
	classPropertiesLoose?: {}
	verifyCommit?: {
		scope?: string[]
		allowEmoji?: boolean
	}
	run?: {
		globals?: string[]
	}
	logo?: string
	themeConfig?: {}
	extraRehypePlugins?: unknown[]
	extraRemarkPlugins?: unknown[]
	resolve?: {
		docDirs?: unknown[]
		atomDirs?: {
			type?: string
			dir?: string
		}[]
		entityDirs?: unknown
		codeBlockMode?: 'active' | 'passive'
		entryFile?: string
		forceKebabCaseRouting?: boolean
	}
	autoAlias?: boolean
	analytics?:
		| {
				baidu?: string
				ga?: string
				ga_v2?: string
		  }
		| boolean
	locales?:
		| {
				id?: string
				name?: string
				base?: string
		  }[]
		| {
				id?: string
				name?: string
				suffix?: ''
		  }[]
	apiParser?: {
		unpkgHost?: string
		resolveFilter?: () => any
	}
	assets?: {}
	sitemap?: {
		hostname?: string
		exclude?: string[]
	}
}
