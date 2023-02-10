// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react'

export async function getRoutes() {
	const routes = {
		'404': { id: '404', path: '*', parentId: 'DocLayout' },
		'dumi-context-layout': {
			id: 'dumi-context-layout',
			path: '/',
			isLayout: true
		},
		DocLayout: {
			id: 'DocLayout',
			path: '/',
			parentId: 'dumi-context-layout',
			isLayout: true
		},
		'docs/guide': { path: 'guide', id: 'docs/guide', parentId: 'DocLayout' },
		'docs/index': { path: '', id: 'docs/index', parentId: 'DocLayout' },
		'components/alert/index': {
			id: 'components/alert/index',
			path: 'components/alert',
			parentId: 'DocLayout'
		},
		'demo-render': {
			id: 'demo-render',
			path: '~demos/:id',
			parentId: 'dumi-context-layout',
			prerender: false
		}
	} as const
	return {
		routes,
		routeComponents: {
			'404': React.lazy(
				() =>
					import(
						/* webpackChunkName: "nm__.pnpm__registry.npmmirror.com+dumi_2.1.9_26bkyrclqv5t5br4pab7hogptq__node_modules__dumi__dist__client__pages__404" */ '/Users/kkkkkk/Desktop/Development/perfect-design/node_modules/.pnpm/registry.npmmirror.com+dumi@2.1.9_26bkyrclqv5t5br4pab7hogptq/node_modules/dumi/dist/client/pages/404.js'
					)
			),
			'dumi-context-layout': React.lazy(
				() =>
					import(
						/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */ '/Users/kkkkkk/Desktop/Development/perfect-design/.dumi/tmp/dumi/theme/ContextWrapper.tsx'
					)
			),
			DocLayout: React.lazy(
				() =>
					import(
						/* webpackChunkName: "nm__.pnpm__registry.npmmirror.com+dumi_2.1.9_26bkyrclqv5t5br4pab7hogptq__node_modules__dumi__theme-default__layouts__DocLayout__index" */ '/Users/kkkkkk/Desktop/Development/perfect-design/node_modules/.pnpm/registry.npmmirror.com+dumi@2.1.9_26bkyrclqv5t5br4pab7hogptq/node_modules/dumi/theme-default/layouts/DocLayout/index.js'
					)
			),
			'docs/guide': React.lazy(
				() =>
					import(
						/* webpackChunkName: "docs__guide.md" */ '/Users/kkkkkk/Desktop/Development/perfect-design/docs/guide.md'
					)
			),
			'docs/index': React.lazy(
				() =>
					import(
						/* webpackChunkName: "docs__index.md" */ '/Users/kkkkkk/Desktop/Development/perfect-design/docs/index.md'
					)
			),
			'components/alert/index': React.lazy(
				() =>
					import(
						/* webpackChunkName: "packages__perfect-design__src__alert__index.md" */ '/Users/kkkkkk/Desktop/Development/perfect-design/packages/perfect-design/src/alert/index.md'
					)
			),
			'demo-render': React.lazy(
				() =>
					import(
						/* webpackChunkName: "nm__.pnpm__registry.npmmirror.com+dumi_2.1.9_26bkyrclqv5t5br4pab7hogptq__node_modules__dumi__dist__client__pages__Demo__index" */ '/Users/kkkkkk/Desktop/Development/perfect-design/node_modules/.pnpm/registry.npmmirror.com+dumi@2.1.9_26bkyrclqv5t5br4pab7hogptq/node_modules/dumi/dist/client/pages/Demo/index.js'
					)
			)
		}
	}
}
