import Image from 'next/image'

const FAQ_LIST = [
  {
    question: 'How do I know if my design is suitable for Craftsman CNC?',
    answer:
      'Our team of engineers will work with you to find the best solution for your project. We have a lot of experience with different projects, so we can usually find a way to produce the parts you need.',
  },
  {
    question: 'How much does a Craftsman CNC machine cost?',
    answer:
      'It depends on the specific model and features that you want. You can contact us for a quote or visit our website to see the different models we offer.',
  },
  {
    question: 'How does the process work?',
    answer:
      'We have a team of highly skilled and experienced engineers who work with the latest in CNC technology. We can take your designs and ideas and turn them into reality.',
  },
  {
    question: 'How many products can Craftsman CNC process in a day?',
    answer:
      'We can process 10,000 parts in a day. We have a large team of engineers and technicians who work around the clock to ensure that we meet our customers` needs.',
  },
  {
    question:
      'What is the biggest difference between Craftsman CNC and other CNC manufacturers?',
    answer:
      'We take a craftsman`s approach to every project, no matter the size. This means that we pay attention to even the smallest details and make sure that each piece is perfect before moving on. This dedication to quality has earned us a reputation as one of the best CNC manufacturers in the business.',
  },
  {
    question: 'How long does it take to get a quote?',
    answer:
      'We can usually provide you with a quote within 24 hours. We will work with you to find the best solution for your project, and we will make sure that you are happy with the final product.',
  },
]

export default function FAQ() {
  return (
    <div id="faq-page">
      <div className="container mx-auto mt-20">
        <h2 className="mb-12 text-3xl font-black text-gray-800">
          Frequently Asked Questions
        </h2>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {FAQ_LIST.map(item => (
            <li key={item.question} className="col-span-1">
              <h3 className="mb-4 font-semibold text-gray-800">
                {item.question}
              </h3>
              <p className="text-sm">{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
