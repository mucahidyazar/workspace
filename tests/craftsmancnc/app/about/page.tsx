import Image from 'next/image'

export default function Home() {
  return (
    <div id="about-page">
      <section id="about-cover" className="relative  w-full h-[400px]">
        <Image
          src="/img/room/room-0.jpeg"
          alt="Cover"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      </section>

      <section id="about-story">
        <div className="container mx-auto mt-20 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
            The story
          </h2>
          <h3 className="w-2/3 mx-auto mb-4 font-semibold text-gray-600">
            A one-stop shop for every metal part
          </h3>
          <article className="flex flex-col gap-4 mb-8">
            <p>
              CraftsmanCNC was founded by Harun Aysel and Mucahid Yazar, two
              engineers with a passion for precision and quality. Our company
              specializes in the production of metal parts for both military and
              civil enterprises.
            </p>
            <p>
              At CraftsmanCNC, we pride ourselves on our attention to detail and
              dedication to providing the highest quality products possible. We
              use advanced CNC technology to ensure that every part we produce
              is consistent and meets the exact specifications of our clients.
            </p>
            <p>
              In the military industry, we have gained a reputation for
              providing reliable and durable parts that are essential to the
              success of our clients` operations. Our products are used in a
              variety of applications, including weapons systems, vehicles, and
              aerospace components.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Image
                src="/img/room/room-0.jpeg"
                alt="Cover"
                width={400}
                height={400}
                className="object-cover w-full rounded-md h-96 sm:w-2/3"
              />
            </div>
          </article>
          <article className="flex flex-col gap-4">
            <p>
              In the civilian sector, we work with a range of industries, from
              automotive and aerospace to medical and construction. Our
              customers trust us to provide them with high-performance parts
              that meet their demanding requirements.
            </p>
            <p>
              At CraftsmanCNC, we are committed to continuous improvement and
              innovation. We are constantly updating our processes and equipment
              to stay at the forefront of the industry. Our goal is to provide
              our clients with the best possible solutions for their needs.
            </p>
            <p>
              We are grateful to our clients for their trust in us, and we
              strive to exceed their expectations every day. Thank you for
              considering CraftsmanCNC for your metal parts needs.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
