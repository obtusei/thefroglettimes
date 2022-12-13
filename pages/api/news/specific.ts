import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const cat:string = data.category != null ? data.category:"Politics";
  try{
    if(req.query.id){
      const news = await prisma.article.findUnique({
        where:{
          id:String(req.query.id)
        }
      })
      res.status(200).json(news)
    }
    
  }
  catch{
    res.status(404).json({message:"ERROR"})
  }
}
