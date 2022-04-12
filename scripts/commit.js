import shell from "shelljs"

const commitMessage = (() => {
  let s =
    process.argv[2] ??
    `commit at: ${new Date().toLocaleString()}`

  return `"${s}"`
})()

//change

const { code } = shell.exec(
  `
    npm run format;
    git add .;
    git commit -m ${commitMessage};
  `,
  { shell: "powershell" }
)

if (code !== 0) {
  shell.exit(1)
}
