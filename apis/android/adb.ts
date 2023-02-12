import { loadDB, updateDB } from "../../common/db"
import { execFile } from 'child_process'
import { promisify } from 'util'

const pexec = promisify(execFile)

export const updateAdbTest = async (newAdbPath: string) => {
  if (newAdbPath) {
    await updateDB(x => ({
      ...x,
      adbPath: newAdbPath
    }))
  } else {
    newAdbPath = (await loadDB()).adbPath
  }
  try {
    let { stdout } = await pexec(newAdbPath, ['devices'])
    // console.log(JSON.stringify(stdout))
    let devices = stdout2devices(stdout)
    return {
      devices,
    }
  } catch (e) {
    console.log(e)
    throw e.toString()
  }
}

export const loadCode = async () => {
  return (await loadDB()).androidCode
}

export const updateCode = async (code: string) => {
  await updateDB(data => ({
    ...data,
    androidCode: code
  }))
}

function stdout2devices(stdout: string) {
  /** 
   * $ adb devices
   * List of devices attached
   * emulator-5554   device
   */
  let lines = stdout.split('\n')
  let devices = lines.slice(1).filter(x => x.trim())
  let rtn = devices.map(x => x.split(/\s+/)[0])
  // console.log({ lines, devices, rtn })
  return rtn
}