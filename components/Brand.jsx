import Image from 'next/image';
import amazon from '../assets/amazon.png'
import dribbble from '../assets/dribbble.png'
import hobspot from '../assets/hobspot.png'
import notion from '../assets/notion.png'
import netflix from '../assets/netflix.png'
import zoom from '../assets/zoom.png'

function Brand() {
  return (
    <section className="container font-spaceGrotesk my-20" id="brand">
      <ul className="flex flex-wrap justify-evenly items-center text-white">
          <li className="flex flex-col flex-grow items-center gap-3 rounded-lg p-3">
            <Image src={amazon} className="filter grayscale" width={'100%'} alt={amazon}/>
          </li>
          <li className="flex flex-col flex-grow items-center gap-3 rounded-lg p-3">
            <Image src={dribbble} className="filter grayscale" width={'100%'} alt={dribbble}/>
          </li>
          <li className="flex flex-col flex-grow items-center gap-3 rounded-lg p-3">
            <Image src={hobspot} className="filter grayscale" width={'100%'} alt={hobspot}/>
          </li>
          <li className="flex flex-col flex-grow items-center gap-3 rounded-lg p-3">
            <Image src={notion} className="filter grayscale" width={'100%'} alt={notion}/>
          </li>
          <li className="flex flex-col flex-grow items-center gap-3 rounded-lg p-3">
            <Image src={netflix} className="filter grayscale" width={'100%'} alt={netflix}/>
          </li>
          <li className="flex flex-col flex-grow items-center gap-3 rounded-lg p-3">
            <Image src={zoom} className="filter grayscale" width={'100%'} alt={zoom}/>
          </li>
      </ul>
    </section>
  )
}

export default Brand