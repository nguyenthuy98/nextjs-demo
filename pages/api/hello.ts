import type { NextApiRequest, NextApiResponse } from 'next'
import { posts } from '../../data'

type Data = {
  postsList: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({postsList: posts})
}
