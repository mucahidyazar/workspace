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

export default function InstagramFeedSlider({}: Props) {
  return (
    <div className="flex gap-2 overflow-auto">
      {BRANDS.map(brand => (
        <Image
          src="/img/room/room-0.jpeg"
          alt="industry"
          width={500}
          height={500}
          className="object-cover w-40 h-40 rounded-sm"
          key={brand.key}
        />
      ))}
    </div>
  )
}
