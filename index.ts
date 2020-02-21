import path from 'path'
import glob from 'glob'

export interface FileRoutesOptions {
	glob: string
	indexFileRegExp: RegExp
}

const memo: { [key: string]: string } = {}
const defaultOptions = {
	glob: '**/*.{js,ts}',
	indexFileRegExp: /(?:index)?\.(j|t)s$/
}

function compare(a: string, b: string) {
	const ar = {
		dirname: path.dirname(a).replace(/^\./g, ''),
		basename: path.basename(a).replace(/\:/g, '~')
	}
	const br = {
		dirname: path.dirname(b).replace(/^\./g, ''),
		basename: path.basename(b).replace(/\:/g, '~')
	}
	return ar.dirname === br.dirname ? (ar.basename > br.basename ? 1 : -1) : ar.dirname < br.dirname ? -1 : 1
}

function fileRoutes(dir: string, options: FileRoutesOptions = defaultOptions) {
	dir = path.resolve(process.cwd(), dir)
	const cacheKey = dir + options.glob
	return !memo[cacheKey] && glob.sync(options.glob, { cwd: dir }).sort(compare).map(file => ({
		path: path.resolve(dir, file),
		route: `/${file.replace(options.indexFileRegExp, '')}`
	}))
}

export default fileRoutes
