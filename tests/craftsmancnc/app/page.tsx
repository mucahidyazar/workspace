import Image from 'next/image'
import {HomeSlider, InstagramFeedSlider} from '@/views/components'
import BrandsSlider from '@/views/components/BrandsSlider'

export default function Home() {
  return (
    <div id="home">
      <HomeSlider />
      <section className="container mx-auto my-20 text-center">
        <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
          Craftsman
        </h2>
        <h3 className="w-2/3 mx-auto font-semibold text-gray-600 mb-14">
          A family owned and operated business
        </h3>
        <p className="w-3/4 mx-auto my-16">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          perferendis veniam nihil esse cum inventore eum tempora accusamus
          fugiat provident nemo aliquam blanditiis obcaecati quos qui dolore
          iure dolores pariatur, repellat, hic fuga. Reprehenderit deserunt
          suscipit ullam quas iste! Cum, soluta. Voluptatem dicta aliquam
          doloribus sit obcaecati maxime numquam iusto.
        </p>

        <article className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20">
          <div className="relative w-full h-[400px] rounded overflow-hidden shadow-lg hover:shadow-xl duration-150">
            <Image
              src="/img/room/room-0.jpeg"
              alt="room"
              width={1920}
              height={1080}
              className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 duration-150 bg-black bg-opacity-30 hover:bg-opacity-10" />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-8 text-gray-200">
              <h3 className="text-2xl font-semibold uppercase">Aerospace</h3>
            </div>
          </div>
          <div className="relative w-full h-[400px] rounded overflow-hidden shadow-lg hover:shadow-xl duration-150">
            <Image
              src="/img/room/room-0.jpeg"
              alt="room"
              width={1920}
              height={1080}
              className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 duration-150 bg-black bg-opacity-30 hover:bg-opacity-10" />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-8 text-gray-200">
              <h3 className="text-2xl font-semibold uppercase">Industrial</h3>
            </div>
          </div>
        </article>

        {/* create a circle */}
        {/* there is another circle and there is an image inside that circle */}
        {/* there are 200px empty space between the circle and the image's circle */}
        {/* the image's circle is 200px */}
        {/* and there are 9 image circles arround the image's circle */}
        <Image
          src="/img/stock/industry-0.png"
          alt="industry"
          width={500}
          height={500}
          className="mx-auto my-20 md:my-40 object-cover w-full md:w-[800px]"
        />
      </section>

      <section className="bg-gray-200">
        <div className="container mx-auto text-center py-28">
          <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
            Our quality guarantee
          </h2>
          <h3 className="w-2/3 mx-auto font-semibold text-gray-600 mb-14">
            Korta is governed by a robust quality assurance policy, and is
            certified under the main international standards. We have Company
            Registration Certificate ER-071/2/96 in accordance with the ISO 9001
            standard.
          </h3>
          <BrandsSlider />
        </div>
      </section>

      <section className="bg-blue-800 bg-opacity-80 text-gray-200 grid grid-cols-1 lg:grid-cols-2 max-h-[500px] overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full p-20 text-center lg:p-28">
          <h2 className="text-3xl font-bold uppercase">
            Korta is committed to innovation and development, renewal of
            knowledge and the human factor.
          </h2>
        </div>
        <Image
          src="/img/room/room-0.jpeg"
          alt="industry"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </section>

      <section id="introduction-video">
        <div className="container py-40 mx-auto">
          <iframe
            width="100%"
            height="630"
            src="https://www.youtube.com/embed/qLHItgLHx9g?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="shadow-2xl rounded-2xl"
          ></iframe>
        </div>
      </section>

      <section className="w-full">
        <div className="container mx-auto text-center py-28">
          <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
            Korta's work is based on three pillars
          </h2>
          <h3 className="w-2/3 mx-auto font-semibold text-gray-600 mb-14">
            Korta is governed by a robust quality assurance policy, and is
            certified under the main international standards. We have Company
            Registration Certificate ER-071/2/96 in accordance with the ISO 9001
            standard.
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/img/room/room-0.jpeg"
                alt="industry"
                width={500}
                height={500}
                className="object-cover mb-3 duration-150 border-4 border-solid rounded-full w-60 h-60 border-primary hover:-translate-y-2"
              />
              <h3 className="text-lg font-semibold">People</h3>
              <h4 className="text-gray-500">Integrity and honesty</h4>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/room/room-0.jpeg"
                alt="industry"
                width={500}
                height={500}
                className="object-cover mb-3 duration-150 border-4 border-solid rounded-full w-60 h-60 border-primary hover:-translate-y-2"
              />
              <h3 className="text-lg font-semibold">
                Cutting-edge technology:
              </h3>
              <h4 className="text-gray-500">
                Innovation in machinery both locally and internationally,
                focusing on industry 4.0
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/room/room-0.jpeg"
                alt="industry"
                width={500}
                height={500}
                className="object-cover mb-3 duration-150 border-4 border-solid rounded-full w-60 h-60 border-primary hover:-translate-y-2"
              />
              <h3 className="text-lg font-semibold">Commercial strategy:</h3>
              <h4 className="text-gray-500">
                KORTA includes service and added value in its sales products.
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section id="instagram-feed" className="w-full mt-20 -mb-16">
        <div className="max-w-[1920px] mx-auto text-center px-4">
          <InstagramFeedSlider />
        </div>
      </section>
    </div>
  )
}
