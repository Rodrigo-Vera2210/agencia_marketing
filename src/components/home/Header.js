import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header(){
    return(
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-full xl:pt-40 xl:pb-64 lg:pt-56 lg:pb-48 pt-24 pb-12">
                    <div>
                        <div>
                            <h1 className="text-4xl font-semibold tracking-tight pb-24 sm:text-7xl">
                                Agency for <span> </span>
                                <div className="inline-flex" style={{color: 'blue', fontWeight: 'bold'}}> 
                                    <Typewriter 
                                        words={['Dreamers','Entrepreneurs','Creators', 'You!']}
                                        loop={0}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        // onLoopDone={handleDone}
                                        // onType={handleType}
                                    />
                                </div>
                            </h1>
                            <ul className="flex gap-8 item-center  py-12">
                                <li className="inline-flex border-b-2 border-transparent hover:border-orange-btn transition duration-300 ease-in-out"><Link to='/servicios/a' className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">Web</Link> </li>
                                <li className="inline-flex border-b-2 border-transparent hover:border-orange-btn transition duration-300 ease-in-out"><Link to='/servicios/a' className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">Apps</Link> </li>
                                <li className="inline-flex border-b-2 border-transparent hover:border-orange-btn transition duration-300 ease-in-out"><Link to='/servicios/a' className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">Video Juegos</Link> </li>
                                <li className="inline-flex border-b-2 border-transparent hover:border-orange-btn transition duration-300 ease-in-out"><Link to='/servicios/a' className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">Marketing</Link> </li>
                                <li className="inline-flex border-b-2 border-transparent hover:border-orange-btn transition duration-300 ease-in-out"><Link to='/servicios/a' className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">Consultorías</Link> </li>
                            </ul>
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
                            <img src="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" className='w-full h-full object-cover'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Header