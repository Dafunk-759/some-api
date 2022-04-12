import { exec } from "child_process"

process.argv.forEach((arg, i) => {
  console.log(i, arg)
})

const commends = ["git --help"].join(";")

exec(commends, (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stdout)

  if (stderr) {
    console.log(stderr)
  }
})
