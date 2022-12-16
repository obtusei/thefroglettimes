import { Language } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const cat:string = data.category != null ? data.category:"Politics";
  try{
      const news = await prisma.article.findMany({
        take:Number(req.query.take),
        where:{
          OR:[
            {
              category:{
                title:{
                  equals:String(req.query.cat)
                }
              },
            },
            {
              tag:{
                equals:String(req.query.tag)
              }
            },
          ],
          AND:[
            {
              language:{
                equals:(req.query.lang as Language)
              }
            },
          ],
          region:{
            equals:String(req.query.region)
          }
        },
        
      })
      res.status(200).json(news)
    
  }
  catch{
    res.status(404).json({message:"ERROR"})
  }
}
