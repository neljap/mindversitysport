

interface TestCardType {
  img: any,
  name: String,
  text: String
}

const TestCard = ({img, name, text}: TestCardType) => {
  return (
    <div className="shadow bg-white rounded-lg" data-aos="flip-up">
        <img src={img} className="w-full h-80 object-cover" alt="" />
        <div className="px-4 py-8 text-center flex flex-col gap-2">
            <h4 className="font-[600] font-['Inter'] text-2xl">{name}</h4>
            <p className="font-[400] leading-5">{text}</p>
        </div>
    </div>
  )
}

export default TestCard