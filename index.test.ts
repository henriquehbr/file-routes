import path from 'path'
import fileRoutes from './index'

const testDir = path.resolve(__dirname, 'test-dir')

const expectedRoutes = [
	{ path: testDir + '/home.ts', route: '/home' },
	{ path: testDir + '/products/:id.ts', route: '/products/:id' },
	{ path: testDir + '/users/index.ts', route: '/users/' },
	{ path: testDir + '/users/query.js', route: '/users/query' },
	{ path: testDir + '/users/:id.js', route: '/users/:id' }
]

test('check if all route types are working', () => expect(fileRoutes('test-dir')).toStrictEqual(expectedRoutes))