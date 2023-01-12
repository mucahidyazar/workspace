'use client'

import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper'

type Props = {}

const BRANDS = [
  {
    key: 'brightgas',
    label: 'Brightgas',
    image: '/img/brands/brightgas.png',
  },
  {
    key: 'dhl',
    label: 'DHL',
    image: '/img/brands/dhl.png',
  },
  {
    key: 'ferrari',
    label: 'Ferrari',
    image: '/img/brands/ferrari.png',
  },
  {
    key: 'gasgas',
    label: 'Gasgas',
    image: '/img/brands/gasgas.png',
  },
  {
    key: 'gazprom',
    label: 'Gazprom',
    image: '/img/brands/gazprom.png',
  },
  {
    key: 'mgl',
    label: 'MGL',
    image: '/img/brands/mgl.png',
  },
  {
    key: 'mitsubishi',
    label: 'Mitsubishi',
    image: '/img/brands/mitsubishi.png',
  },
  {
    key: 'opet',
    label: 'Opet',
    image: '/img/brands/opet.png',
  },
  {
    key: 'toyota',
    label: 'Toyota',
    image: '/img/brands/toyota.png',
  },
  {
    key: 'veico',
    label: 'Veico',
    image: '/img/brands/veico.png',
  },
]

export default function BrandsSlider({}: Props) {
  return (
    <Swiper
      observer
      slidesPerView={4.8}
      spaceBetween={20}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      autoplay={{
        delay: 500000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      className="-translate-x-[100px] w-[calc(100%+200px)]"
    >
      {BRANDS.map(brand => (
        <SwiperSlide key={brand.key} className="m-auto">
          <Image
            src={brand.image}
            alt={brand.label}
            width={280}
            height={280}
            className="mx-auto w-28 grayscale"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
