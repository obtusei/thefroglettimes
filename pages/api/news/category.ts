import { title } from 'process';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'
import { request } from 'http';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const cat:string = data.category != null ? data.category:"Politics";
  if(req.method === "GET"){
    if (req.query.title){
        try{
          const category = await prisma.category.findUnique({
            where:{
              title:String(req.query.title)
            },
            include:{
              articles:true
            }
          });
          res.send(category)
        }
        catch{
          res.status(404).json({message:"ERROR"})
        }
    }
    else{
      try{
          const category = await prisma.category.findMany();
          res.send(category)
        }
        catch{
          res.status(404).json({message:"ERROR"})
        }
    }
  }

  else if (req.method === "POST"){
    try{
      const newCategory = await prisma.category.create({
        data:{
          title:req.body.title,
          ne:req.body.ne,
          href:req.body.href
        }
      }) 
      res.json(newCategory)
    }
    catch{
      res.send("ERROR")
    }
  }
  else if (req.method === "DELETE"){
    try{
      const newCategory = await prisma.category.delete({
        where:{
          id:req.body.id
        }
      }) 
      res.json(newCategory)
    }
    catch{
      res.send("ERROR")
    }
  }
}
