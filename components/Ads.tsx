import Image from "next/image"
import Link from "next/link"
export const LeaderboardAd = ({m}:{m?:boolean}) => {
  return (
    <div className={`bg-yellow-500 h-24 ${!m && "m-4"} flex items-center justify-center text-3xl text-white`}>ADS</div>
  )
}

export const WideSkyscrapersAd = () => {
  return (
    <div className='bg-green-500 h-96 m-4 flex items-center justify-center text-3xl text-white'>ADS</div>
  )
}

export const RectangleAd = () => {
  return (
    <div className='bg-yellow-500 h-24 m-4 text-center text-3xl text-white'>ADS</div>
  )
}

export const ProductAd = () => {
  return (
    <div className='flex flex-col md:flex-row md:space-x-3'>
      <Image src={"/img.webp"} width={300} height={10} style={{objectFit:"cover"}} alt="sadsa"/>
        <div className='py-2'>
          <p className='font-bold'>ADS</p>
          <h3 className={`text-xl md:text-2xl text-red-500 font-bold font-title hover:underline`}><Link href={""}>Check our application</Link></h3>
          <p className='text-gray-500 line-clamp-2 md:line-clamp-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aut consequuntur consectetur aliquam, dolores illo voluptatum corrupti error perferendis. Sapiente in at doloribus rerum quae possimus eligendi qui et temporibus?</p>
        </div>
    </div>
  )
}