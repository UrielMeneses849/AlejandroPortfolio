import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserPagesRepository = repositoryName?.endsWith('.github.io')

// GitHub Pages publica los repositorios de proyecto en /<repositorio>/.
// En local y para repositorios <usuario>.github.io, el sitio permanece en /.
const base =
  process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isUserPagesRepository
    ? `/${repositoryName}/`
    : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
