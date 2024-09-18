import { execSync } from 'node:child_process'
import { consola } from 'consola'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
// import { version } from '../package.json'

const packageDir = './packages'
const packageJsonPath = join(packageDir, 'package.json')
const versionList = [
  'major',
  'minor',
  'patch',
  'premajor',
  'preminor',
  'prepatch',
  'prerelease'
] as const
type Version = (typeof versionList)[number]

const version = process.argv[2] as Version

if (!versionList.includes(version)) {
  consola.error(new Error('Invalid version: ' + version))
  process.exit(1)
}

// 打包
consola.start('Start building...')
execSync('npm run type:check', { stdio: 'inherit' })
execSync('npm run build', { stdio: 'inherit' })
consola.success('Build successfully')

// 更新版本号
consola.start(`Start updating version ${version}`)
execSync(`npm version ${version} --prefix ${packageDir}`, { stdio: 'inherit' })

// 发布
execSync(`cd ${packageDir} && npm publish`, { stdio: 'inherit' })
consola.success(`Published successfully `)

// 读取更新后的 package.json 文件
const packageJsonContent = readFileSync(packageJsonPath, 'utf8')
const packageJson = JSON.parse(packageJsonContent)

// 提交
consola.start('Start push...')
execSync(`git add . `, { stdio: 'inherit' })
execSync(`git commit -m publish:${packageJson.version}`, { stdio: 'inherit' })
execSync(`git push origin main`, { stdio: 'inherit' })
execSync(`git tag -a v${packageJson.version} -m "Release version 1.0.0" HEAD`, { stdio: 'inherit' })
execSync(`git push origin v${packageJson.version}`, { stdio: 'inherit' })
consola.success('Push successfully')
