import type { Handler } from "./_types"

const handler: Handler<void> = (req, res) => {
  res.status(200).json({
    message: "hello world!!!"
  })
}

export default handler
