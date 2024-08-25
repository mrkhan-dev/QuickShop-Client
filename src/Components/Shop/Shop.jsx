import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import './Shop.css'
import card from '../../assets/s1.png'
import { useState } from "react";
import { FaChartBar } from "react-icons/fa";

const Shop = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='flex bg-[#f2f4f8] pt-10 relative'>
            {/* Product Filtering */}
            <div className={`fixed z-10 left-0 translate-y-16 transform ${isOpen ? 'translate-x-2 translate-y-16 p-3 border' : '-translate-x-full'} transition-transform duration-300 ease-in-out   md:relative md:translate-x-0 bg-white w-72 min-h-screen space-y-2`}>
                <select className="select select-bordered w-full">
                    <option disabled selected>Category</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered w-full">
                    <option disabled selected>Color</option>
                    <option>Black</option>
                    <option>Orange</option>
                    <option>Blue</option>
                    <option>Green</option>
                </select>
                <select className="select select-bordered w-full">
                    <option disabled selected>Category</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered w-full">
                    <option disabled selected>Category</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <div className=' bg-white w-full  flex flex-col  justify-center'>
                    <div className="p-3 border-b">
                        <h1 className="">Price Range</h1>
                    </div>
                    <div className="px-2 py-5">
                        <RangeSlider
                            id="range-slider-gradient"
                            className="margin-lg"
                            step={"any"}
                        />
                    </div>
                    <div className="flex items-center justify-around pb-5">
                        <div className="flex justify-center items-center border w-20 h-10">
                            <p>104,0</p>
                        </div>
                        <div className="flex justify-center items-center border w-20 h-10">
                            <p>108,0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-screen'>
                <div className=" bg-white flex justify-between items-center w-[96%] m-auto p-2">
                    <div>
                        <h1 className="hidden lg:block">All Laptop</h1>
                        <div className="md:hidden">
                            <FaChartBar className="cursor-pointer" onClick={toggleSidebar} />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <h3 className="w-28">Sort By:</h3>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Default</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                </div>
                <div className="w-[96%] m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>
                        {/* card 1 */}
                        <div className="relative border flex flex-col justify-center items-center py-5 me-2 bg-white rounded-lg">
                            <div className="absolute top-0 right-0 p-2 bg-[#00bba6]">
                                <h1 className="text-white">25 % OFF</h1>
                            </div>
                            <div className="p-5">
                                <img className="w-40 h-40" src={card} alt="" />
                            </div>
                            <div className="text-center text-2xl">
                                <h1>Full Shart</h1>
                                <p>$150</p>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                                <button className="btn bg-[#00bba6] text-white rounded-md">Buy Now</button>
                                <button className="btn border  border-[#00bba6] bg-opacity-0 hover:bg-[#00bba6] hover:text-white duration-500 text-[#00bba6] rounded-md">Add to Cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;