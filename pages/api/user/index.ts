// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST"){
    try{
      const user = await prisma.user.create({
        data:{
          fullname:req.body.fullname,
          email:req.body.email,
          password:req.body.password,
        }
      })
      
      res.status(200).json(user)
    }
    catch{
      res.status(404).json({message:"ERROR"})
    }
  }
  else if (req.method == "GET"){
    if (req.query.userId){
        try{
        const user = await prisma.user.findUnique({
          where:{
            id:req.body.userId
          }
        })
        
        res.status(200).json(user)
      }
      catch{
        res.status(404).json({message:"ERROR"})
      }    
    }else{
      try{
        const user = await prisma.user.findMany()
        res.status(200).json(user)
      }
      catch{
        res.status(404).json({message:"ERROR"})
      }
    }
  }
}
