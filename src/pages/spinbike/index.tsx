import Slider from "react-slick";
import { caloriespng, defsolu, makexe, quaterbike, spinbikepng, testCard01, testCard02, testCard03, upqual } from "../../assets";
import { useRef, useState } from "react";
import axios from "axios";
import { Navbar, TestCard } from "../ui";
import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import { BiSmile } from "react-icons/bi";
import { FaTruckArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";

const Spinbike = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("")
    const [state, setState] = useState("");
    const [phoneNo, setPhoneNo] = useState<null | any>(null);
    const [altPhoneNo, setAltPhoneNo] = useState<null | any>(null);
    const [message, setMessage] = useState("")
    const [formLoading, setFormLoading]= useState(false)


    const formRef = useRef<HTMLDivElement | null>(null)

    const settings = {
        dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
    }

   const scrolToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
   }


    const handleSubmit = async(e:any) => {
      e.preventDefault()
      try {
        setFormLoading(true)
        const formData = {firstName, lastName, email, phoneNo, altPhoneNo, city, state, message}

        console.log("formdata", formData)
          await axios.post("https://mindversity-server.vercel.app/api/contact", formData)

        toast.info(`Data Received, ${firstName}`, {position: 'bottom-left'})
      } catch (error) {
        toast.error(`An Error occurred, ${error}`)
      }finally{
        setFormLoading(false);
        setFirstName("")
        setLastName("")
        setEmail("");
        setCity("");
        setAddress("");
        setState("");
        setMessage("");
        setPhoneNo(null)
        setAltPhoneNo(null)
      }
      
    }

    const TestData = [
      {
        id: 1,
        img: testCard01,
        name: "Mrs Jennifer",
        text: "This spin bike has been an excellent addition to my home gym, keeping me motivated to achieve my fitness goals. It’s pushed me to stay consistent and explore new, challenging workout routines to improve my fitness journey."
      },
      {
        id: 2,
        img: testCard02,
        name: "Mr Sola Joseph",
        text: "Initially, I was unsure if this bike would deliver a real workout, but it exceeded my expectations. Its high-quality build and adjustable features make it perfect for customizing to my fitness level. I absolutely love it—highly recommended!"
      },
      {
        id: 3,
        img: testCard03,
        name: "Miss Victoria",
        text: "This is undoubtedly an excellent product! The clear digital display provides diverse metrics to monitor progress, making it an essential part of my daily fitness routine. It keeps me active, motivated, and on track toward my fitness goals."
      }
    ]
  return (

    <div>
      <Navbar navRef={scrolToForm}/>
        <div>
        <Slider {...settings}>
            <div className="h-[50vh] md:h-[80vh] bg-heroimgone bg-center bg-opacity-50 bg-contain flex justify-center items-center align-middle w-full ">
                <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-2/3 w-full flex flex-col gap-2 md:gap-4 justify-center items-center text-center">
                  <h3 className="text-2xl md:text-6xl font-['Inter'] font-[800]">INVEST IN <span className="text-primary"> YOURSELF</span></h3>

                    <p className="text-center md:text-lg text:sm leading-4">Just a few minutes on the spin bike today can pave the way for a healthier, happier life, proving that small efforts now yield lasting benefits for your well-being.</p>
                    <button onClick={scrolToForm} className="md:py-3 py-1 md:px-6 px-3 text-sm md:text-md rounded-full border-2 border-white text-white bg-red-900 hover:bg-primary">ORDER NOW</button>

                    
                </div>
              </div>
               
            </div>
            <div className="h-[50vh] md:h-[80vh] bg-heroimgtwo bg-center bg-contain bg-opacity-80">
              <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center text-center">
                  <h3 className="text-2xl md:text-6xl font-['Inter'] font-[800] uppercase">Why wait for <span className="text-primary">  tomorrow? </span></h3>
                    <p className="text-center md:text-lg leading-4" >Pedal your way to greater strength, boosted energy, and newfound confidence. Start today and experience the empowering benefits of spinning for both your body and mind.</p>
                    <button onClick={scrolToForm} className="py-1 md:py-3 md:px-6 px-3 text-sm md:text-md rounded-full border-2 border-white text-white bg-red-900 hover:bg-primary">ORDER NOW</button>
                </div>
              </div>
                
                
            </div>
            <div className="h-[50vh] md:h-[80vh] bg-heroimgthree bg-center bg-contain">
                <div className="flex justify-center items-center backdrop-brightness-50 border-l-indigo-900 w-full h-full text-white">
                <div className="md:w-2/3 w-full flex flex-col gap-4 justify-center items-center text-center">
                  <h3 className="text-2xl md:text-6xl font-['Inter'] font-[800] uppercase">Make your health a <span className="text-primary"> priority </span> </h3>
                    <p className="text-center md:text-lg leading-4">Pedal towards a stronger, more energized version of yourself. Embrace the power of spinning to boost both your physical strength and happiness, transforming into the best version of you.</p>
                    <button onClick={scrolToForm} className="py-1 md:py-3 md:px-6 px-3 text-sm md:text-md rounded-full text-white bg-red-900 hover:bg-primary border-2 border-white">ORDER NOW</button>
                </div>
              </div>
                
            </div>
        </Slider>
        </div>
        {/*  */}
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-8 py-12">
          <div>
            <p className="font-[700] font-['Inter'] text-3xl text-primary text-center">"Revitalize Your Fitness Journey With Our Cutting-edge Spin Bikes!"</p>
            <img src={spinbikepng} alt="" />
          </div>
          <div className="flex flex-col gap-4">
          <h2 className="font-[700] font-['Inter'] text-3xl text-primary text-center">Spin Bike</h2>
          <p className="font-[500] text-center">SUPERIOR METHOD FOR GETTING A CARDIOVASCULAR WORKOUT AND ALSO STRENGTHEN LOWER BODY MUSCLES</p>
          <img src={quaterbike} alt="" />
          </div>
        </div>
        <div className="w-full py-12">
        <iframe className="w-full h-[500px]" src="https://www.youtube.com/embed/GtBBYvL29dk?si=KV4LKabExcT96aor" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
          <div>
            <img src="https://res.cloudinary.com/dr6a80sph/image/upload/v1735421428/vsabiecrt4fvptwbrgk4.jpg" alt="" />
          </div>
          <div>
            <img src={caloriespng} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 py-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-4xl text-primary font-['Inter'] font-[600]">Your Fitness Solution Awaits!</h3>
            <p>Say goodbye to costly gym memberships and intense workouts. With the CYCLING SPINNING BIKE, you can stay fit right in your work clothes—whether you're reading a book or watching your favorite show.</p>
            <p className="text-green-800 font-[600]">A quick 10-15 minute session daily delivers the same benefits as a 2-hour workout, without putting stress on your joints or heart.</p>
            <p>This bike, equipped with removable resistance bands, is easy to set up. Just unbox, attach the bands, and kick-start your fitness journey today!</p>
          </div>
          <div>
            <img src={defsolu} className="h-['80%']" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 py-16">
          <div>
            <h3 className="text-2xl md:text4xl text-primary font-['Inter'] font-[600] pb-6">INCREDIBLE FEATURES TO MAKE WORKOUTS ENJOYABLE</h3>
            <img src={makexe} alt="" />
          </div>
          <div>
            <h3 className="text-2xl md:text-4xl text-primary font-['Inter'] font-[600] pb-2">EASY AND STRAIGHTFORWRD TO OPERATE</h3>
            <p className="py-2 font-[600] leading-4">Everything is labelled so anyone can easily operate it on their own, you would also have the number of our customer care in case you need our help with anything and it comes with an instruction manual for further guidance.</p>
            <img src={upqual} alt="" />
          </div>
        </div>
        {/* Testimonials */}
        <div className="container">
          <h3 className="text-center py-8 font-['Inter'] font-[700] text-2xl md:text-5xl text-red-900">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between items-center">
          {TestData.map((item: any) => (
           <TestCard key={item.id} img={item.img} name={item.name} text={item.text}/>  
          ))}
          
        </div>
        </div>
        {/* Fill in Order */}
        <div className="container py-12 text-center flex flex-col gap-4">
          <h2 className="font-[700] font-['Inter'] text-2xl md:text-5xl text-red-900">HOW TO ORDER</h2>
          <p className="font-[500] text-lg">How To Get Your Fitness Machine (BEFORE WE RUN OUT OF STOCK)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center pt-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <FaShoppingCart size={60} color="#d21334" />
            <p className="font-[500] text-lg">Fill The Form Below To Order</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <FaPhoneAlt size={60} color="#d21334"/>
            <p className="font-[500] text-lg">We'll Call You To Confirm Your Order</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <FaTruckArrowRight size={60} color="#d21334" />
            <p className="font-[500] text-lg">We'll Process And send Your Product</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <BiSmile  size={60} color="#d21334"/>
            <p className="font-[500] text-lg">Receive Your Product (1-3 Days)</p>
          </div>
          </div>
          <div className="py-8">
          <button className="bg-red-900 hover:bg-primary px-6 py-3 rounded-full text-white w-fit mx-auto border-2 border-black" onClick={scrolToForm}>CLICK HERE TO FILL THE FORM</button>
          </div>
        </div>
        
        </div>
        <div className="bg-black text-white py-12">
          <div className="container">
          <div className="flex flex-col gap-6 text-center">
            <h3 className="font-['Inter'] font-[800] text-3xl">DO YOU WANT FREE DELIVERY?</h3>
            <p>We’ve set up an exclusive delivery offer for our next 17 customers!</p>
            <p>Normally, delivery costs N1,500 within Lagos or N2,500 nationwide, but if you order now, you’ll enjoy free delivery.</p>
            <p>Don’t miss this chance to own this life-changing product with free shipping. Click the button below to place your order now!</p>
            <button className="bg-red-900 rounded-full py-3 px-6 border border-white text-white mx-auto" onClick={scrolToForm}>Click Here To Fill The Form</button>

          </div>  

          </div>
          
        </div>
          {/* Contact Us */}
        <div className="container py-6" ref={formRef}>
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-center font-[700] font-['Inter'] py-4 md:text-4xl text-2xl">Contact <span className="text-primary">Us</span> </h2>
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col md:gap-2 gap-0 shadow rounded-xl md:p-8 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 justify-start items-center md:pt-2 pt-0">
               <div className="flex flex-col md:gap-1 gap-0">
                <label className="font-[500]">First Name</label>
                <input type="text" className="rounded border-inpcolor border-opacity-90 border-2 p-1" value={firstName} onChange={(e:any) => setFirstName(e.target.value)} />
              </div> 
              <div className="flex flex-col md:gap-1 gap-0">
                <label className="font-[500]">Last Name</label>
                <input type="text" className="rounded border-inpcolor border-opacity-90 border-2 p-1" value={lastName} onChange={(e: any) => setLastName(e.target.value)} />
              </div>
              </div>
              <div className="flex flex-col md:gap-1 gap-0 md:pt-2 pt-0">
                <label className="font-[500]">Email</label>
                <input type="email" className="rounded border-inpcolor border-opacity-90 border-2 p-1" value={email} onChange={(e:any) => setEmail(e.target.value)} />
              </div>
              <div>
              <div className="flex flex-col md:gap-1 gap-0 md:pt-2 pt-0">
                    <label className="font-[500]">Address</label>
                    <input type="text" className="rounded border-inpcolor border-opacity-90 border-2 p-1" value={address} onChange={(e:any) => setAddress(e.target.value)} />
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-center md:pt-2 pt-0">
                  <div className="flex flex-col md:gap-1 gap-0">
                    <label className="font-[500]">City</label>
                    <input type="text" className="rounded border-inpcolor border-opacity-90 border-2 p-1" value={city} onChange={(e:any) => setCity(e.target.value)} />
                  </div>
                  <div className="flex flex-col md:gap-1 gap-0">
                    <label className="font-[500]">State</label>
                    <input type="text" className="rounded border-inpcolor border-opacity-90 border-2 p-1" value={state} onChange={(e:any) => setState(e.target.value)}/>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-center">
               <div className="flex flex-col md:gap-1 gap-0">
                <label className="font-[500]">Phone Number</label>
                <input type="number" className="rounded border-inpcolor border-opacity-90 border-2 p-1" value={phoneNo} onChange={(e: any) => setPhoneNo(e.target.value)}/>
              </div> 
              <div className="flex flex-col md:gap-1 gap-0">
                <label className="font-[500]">Alternative Phone Number</label>
                <input type="number"  className="rounded border-inpcolor border-opacity-90 border-2 p-1" value={altPhoneNo} onChange={(e: any) => setAltPhoneNo(e.target.value)}/>
              </div>
              </div>
              <div className="flex flex-col md:gap-1 gap-0 justify-start items-start">
                <label className="font-[700] font-['Inter']">Message</label>
                <textarea className="w-full md:h-80 h-48 rounded border-inpcolor border-opacity-90 border-2 p-1" value={message} onChange={(e: any) => setMessage(e.target.value)} ></textarea>
              </div>
              <div className="pt-2 md:pt-4">
              <button className="bg-red-900 hover:bg-primary py-2 px-4 float-end  text-white w-fit rounded">{formLoading ? 'Submitting': 'Submit'}</button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black text-white">
          <div className="container">
            <div className="flex flex-col gap-2 text-center py-12">
              <h3 className="text-2xl md:text-5xl font-['Inter'] text-primary font-[700]">Got Questions?</h3>
              <p>REACH OUT TO OUR CUSTOMER SUPPORT TEAM</p>
              <p className="text-4xl font-['Inter'] font-[600]">0803 517 2276</p>
              <p>Delivery Time: 1-3 Working Days </p>

<p>Our Customer Care team will contact you within 24 hours after placing your order.</p>

<p>This website is not affiliated with or endorsed by Facebook or Facebook Inc. "Facebook" is a registered trademark of Facebook, Inc.</p>

<p>© 2021 | Policy | Terms</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Spinbike