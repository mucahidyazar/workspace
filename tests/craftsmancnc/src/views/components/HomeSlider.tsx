'use client'

import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper'

type Props = {}

export default function HomeSlider({}: Props) {
  return (
    <div className="w-full">
      <Swiper
        observer
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="relative h-[600px]">
            <Image
              src="/img/room/room-0.jpeg"
              alt="room"
              width={1920}
              height={1080}
              className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30" />
            <div className="absolute top-0 left-0 bottom-0 right-0 text-gray-200 text-center flex flex-col items-center justify-center gap-6">
              <h2 className="text-5xl font-semibold uppercase w-2/3 mx-auto leading-[120%]">
                Craftsman is your family company
              </h2>
              <p className="w-4/5">
                Craftsman is a family owned and operated business that has been
                in the machine industry for over 30 years. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Quos culpa et soluta
                aliquam assumenda alias numquam quasi sed nihil, consectetur
                recusandae. Explicabo labore earum ullam delectus error
                provident laboriosam illo!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/room/room-1.jpeg"
            alt="room"
            width={1920}
            height={1080}
            className="w-full h-[600px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
