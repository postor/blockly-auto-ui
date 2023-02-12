
import { join } from 'path'
import { readFile, writeFile } from 'fs/promises'

type IData = {
  adbPath: string
  files: string[]
  androidCode: string
}

const defaultData: IData = {
  adbPath: 'adb',
  files: [],
  androidCode: ''
}

let file = join(process.cwd(), 'database.json')


export async function loadDB(): Promise<IData> {
  try {
    return JSON.parse(await readFile(file, 'utf-8'))
  } catch (e) {
    return defaultData
  }

}

export async function updateDB(reducer: (state: IData) => IData) {
  await writeFile(file, JSON.stringify(reducer(await loadDB())), 'utf-8')
}