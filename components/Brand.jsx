import Image from 'next/image';
import amazon from '../assets/amazon.png'
import dribbble from '../assets/dribbble.png'
import hobspot from '../assets/hobspot.png'
import notion from '../assets/notion.png'
import netflix from '../assets/netflix.png'
import zoom from '../assets/zoom.png'

function Brand() {
  return (
    <section className="container font-spaceGrotesk" id="brand">
      <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-5">
        <Image src={amazon} className='rounded-lg object-cover filter grayscale' width={'100%'} height={'100%'} alt={amazon}/>
        <Image src={dribbble} className='rounded-lg object-cover filter grayscale' width={'100%'} height={'100%'} alt={dribbble}/>
        <Image src={hobspot} className='rounded-lg object-cover filter grayscale' width={'100%'} height={'100%'} alt={hobspot}/>
        <Image src={notion} className='rounded-lg object-cover filter grayscale' width={'100%'} height={'100%'} alt={notion}/>
        <Image src={netflix} className='rounded-lg object-cover filter grayscale' width={'100%'} height={'100%'} alt={netflix}/>
        <Image src={zoom} className='rounded-lg object-cover filter grayscale' width={'100%'} height={'100%'} alt={zoom}/>
      </div>
    </section>
  )
}

export default Brand