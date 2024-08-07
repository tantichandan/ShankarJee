import React from 'react'
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'
import { getAllProducts } from '@/lib/actions'
import ProductCard from '@/components/ProductCard'

const Home = async () => {

  const allProducts = await getAllProducts()






  return (
    <>

    <section className='px-6 md:px-20 py-24'>
      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>

          <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
            Amazon ki koi bhi product scrapped kare. Link copy karke submit karo, to know the price history of the product

            <Image 
              src="/assets/icons/arrow-right.svg"
              alt='arrow-right'
              width={16}
              height={16}
            />
          </p>

          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>

            Get the price histiry to purchase a product on<span className='text-primary'> right time</span>
          </h1>

          <p className='text-lg md:text-xl text-gray-700 mb-8 leading-relaxed'>
            Powerful selfserve product and growth analytic to help you convert, engage, and retain more
          </p>

          <Searchbar />



        </div>

        <HeroCarousel />

      </div>

    </section>

    <section className='trending-section'>
       <h2 className='section-text'>
        Trending
       </h2>

       <div className='flex flex-wrap gap-x-8 gap-y-16'>

        {allProducts?.map((product)=>(
          <ProductCard key={product._id} product={product}/>
        ))}

       </div>

    </section>




    </>
  )
}

export default Home