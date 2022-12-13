import regions from "../libs/regions"
import { useState } from "react"
import { NewsCard } from "./News/Card"

export default function Timeline(){

    const [region,setRegion] = useState("")
    const [year,setYear] = useState("")
    const [month,setMonth] = useState("")
    const [region,setRegion] = useState("")
    return(
        <div>
            <h2 className='text-3xl py-2 font-bold'>Latest News</h2>
            <div className="flex flex-col-reverse md:flex-row space-y-3 md:space-y-0 justify-between py-4">
              <div className='p-2 space-x-3'>

                <select value={region} onChange={(e) => setRegion(e.target.value)}>
                  {
                    regions.map((item) => (
                      <option value={item.title} key={item.title}>{item.title}</option>
                    ))
                  }
                </select>

                <select title='' value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                  {
                    MONTHS.map((month) => (
                      <option value={month} key={month}>{month}</option>
                    ))
                  }
                </select>
                <select value={day} onChange={(e) => setDay(Number(e.target.value))}>
                  {
                    [1,2,3,4,5,6,7,8,,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((item) => (
                      <option value={item} key={item}>{item}</option>
                    ))
                  }
                </select>
                
                
              </div>
              <div>
                <input type="search" name="" className='search' id="" placeholder='Search...' /><button className='btn'>Search</button>
              </div>
            </div>

          <div className='grid grid-cols-4'>
            <div className='col-span-4 md:col-span-3'>
              {
                [1,2,3].map((content,index) => (
                  <div key={index} className='flex flex-row justify-between p-2 items-center space-x-5'>
                    <div className='w-40'>6 Dec, 2022 </div>
                    <NewsCard 
                          title="Titlte of the news goes here"
                          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, excepturi adipisci labore odit quisquam doloremque sed earum illo provident aperiam autem soluta expedita, cum quidem voluptates nesciunt! Corporis, enim vitae!"
                          author="sadasdasd"
                          image='/img.webp'
                          imageSize={250}
                          publishedAt={"content.published_at"}
                          reverse
                          />
                    </div>
                ))
              }
            </div>
            <div className='hidden md:block'>
              <WideSkyscrapersAd/>
            </div>
          </div>
            <div className='block md:hidden'>
              <LeaderboardAd/>
            </div>

        </div>
    )
}