import shell from "shelljs"

const pipe = (a, ...funs) =>
  funs.reduce((val, fn) => fn(val), a)

const chain = fn => preret => {
  switch (preret.code) {
    case 0:
      return fn(preret)
    case 1:
      return preret
  }
}

const commitMessage = pipe(
  process.argv[2] ??
    `commit at: ${new Date().toLocaleString()}`,
  s => `"${s}"`
)

console.log(commitMessage)

pipe(
  shell.exec("npm run format"),
  chain(() => shell.exec("git add .")),
  chain(() => shell.exec("git commit -m " + commitMessage))
)
