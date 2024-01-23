
const NavbarMiddle = () => {
  return (
    <div className="container pt-[17px] flex items-center gap-3">
      <div className=" flex items-center gap-2">      
        <img className="w-8 h-8 rounded-[50%] cursor-pointer" src="./uzumm.png" alt="uzum"  />     
        {/* <span>uzum market</span> */}
        <img  className="w-[185px] h-5 cursor-pointer" src="./uzummarket.png" alt="" />
      </div>   
      <div className="text-[#7000FF] flex">
        <div className="flex flex-col">
          <div className="w-[13.99px] h-[1.6px] border-[2px]"></div>          
          <div className="w-[13.99px] h-[1.6px] border-[2px]"></div>          
          <div className="w-[15.98px] h-[1.6px] border-[2px]"></div>
          <div className="w-[18px] h-3 border"></div>
        </div>
        <p>Katalog</p>
      </div>
    </div>
  )
}

export default NavbarMiddle