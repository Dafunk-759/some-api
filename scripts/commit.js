import { exec } from "child_process"

const rest = process.argv.slice(2)

const commends = [
  "npm run format",
  "git add .",
  `git commit ${rest.join(" ")}`
].join(" && ")

console.log(commends)

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
