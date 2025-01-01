

const Navbar = ({navRef} : any) => {
  return (
    <div>
        <div className="container">
          <div className="flex flex-row justify-between items-center py-4">
            <div>
              <p className="font-[700] text-sm md:text-xl">Mind <span className="text-primary">versity</span> Sport</p>
            </div>
            <div>
              <p className="font-[600] text-[0px] md:text-2xl text-primary ">FREE NATIONWIDE DELIVERY</p>
            </div>
            <div>
              <button className="bg-red-900 md:py-3 py-1 md:px-6 px-3 rounded-full border-black border-2 hover:bg-primary text-white text-sm md:text-lg" onClick={navRef}>Order Now</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar