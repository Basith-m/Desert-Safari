import React from 'react'
import SafariCar from '../assets/safari-car.jpg'
import CarouselCom from '../components/CarouselCom'

const Home = () => {
  return (
    <div id='home' className='home'>
        <CarouselCom />
        <div className="container">
            <div className='description-container d-flex flex-column gap-3 align-items-center'>
                <h1>Dubai Desert Safari</h1>
                <p className='text-center mt-3'>Our company organized a desert safari adventure in Dubai. we arrange a desert safari tour in such a way that you will experience all the interesting and thrilling Arabic activities. The Dubai Desert Safari is an entertaining tour that will provide you with an amazing time in the Arabian Desert. Choose the desert safari package that suits you best..</p>
                <p className='text-center'>There are four types of desert safaris: morning desert safari, evening desert safari, sunset desert safari, and overnight desert safari. We provide different packages for customer Convenience. Choose the desert safari package that suits you best. There are four types of desert safaris: morning desert safari, evening desert safari, sunset desert safari, and overnight desert safari.</p>
            </div>
            <section>
                <div className='row shadow rounded'>
                    <div className='col-md-6 p-3 d-flex align-items-center justify-content-center'>
                        <img width={'100%'} src={SafariCar} alt="" />
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex flex-column gap-2 p-3'>
                            <h3>What is Desert Safari Dubai?</h3>
                            <hr />
                            <p>Desert Safari is one of the most popular adventure sports in Dubai. Dubai is blessed with a great desert, the ideal venue for desert safari. This activity mainly consists of running up and down your vehicle on the desert dunes. The vehicles are custom-built Land Cruisers driven by expert and certified drivers who would give you all the thrill yet keep you entirely safe. Although a daily activity, it is most prevalent when the sun sets. Setting Sun against the backdrop of the vast red dunes makes this adventure unique. A standard desert safari would last almost six hours. The safari does not have any animal spotting. Still, the roller coaster drives through the desert dunes with sand splashing hard against your window occasionally would give you plenty of adventure.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Home