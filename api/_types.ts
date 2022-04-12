import type {
  VercelRequest,
  VercelResponse
} from "@vercel/node"

export type Handler<R> = (
  req: VercelRequest,
  res: VercelResponse
) => R
