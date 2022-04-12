import shell from "shelljs"

const commitMessage =
  process.argv[2] ??
  `"commit-time: ${new Date().toLocaleString()}"`

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

pipe(
  shell.exec("npm run format"),
  chain(() => shell.exec("git add .")),
  chain(() => shell.exec("git commit -m " + commitMessage))
)
