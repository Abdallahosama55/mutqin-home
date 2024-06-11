import React from 'react'
import Navbar from '../../components/Navbar'
import OfferSection1 from '../../components/OfferSection1'
import Offersection2 from '../../components/Offersection2'
import OfferSection3 from '../../components/offerSection3'
import OfferSection4 from '../../components/OfferSection4'

function OfferPage() {
  return (
    <div>
    <div className=" py-6 md:px-24 px-6 ">
    
    
    <Navbar/>
    </div>

    <main className=' pt-12 px-12 md:px-32'>
    <OfferSection1/>
<Offersection2/>
<OfferSection3/>
<OfferSection4/>
    </main>
    
    </div>
  )
}

export default OfferPage