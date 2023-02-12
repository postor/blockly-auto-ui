import { Express, static as staticServe } from 'express'
import { join } from 'path'

interface Config {
  dev: boolean
  apiFolder: string
  assetsFolder: string
  url: string
  jsonLimit: string
  extension: string
}

export default async (app: Express, config: Config) => {
  app.use('public', staticServe(join(process.cwd(), 'public')))
  app.use('*', (req, res) => res.sendFile(join(config.assetsFolder, 'index.html')))
}