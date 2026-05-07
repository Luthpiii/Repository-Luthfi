export default function holidayPage() {
    return (
        <div className="bg-gray-300 h-screen flex justify-center items-center">
            
            <div className="bg-white h-115 w-70 rounded-4xl gap-1">

                <div className="p-1">
                    <img src="San Fran.jpg" className=" h-65 rounded-4xl"/>
                </div>

                <div className="flex flex-col gap-1">

                    <div className="p-4">
                        <h1 className="font-bold text-xl">San Francisco</h1>
                        <p className="text-gray-400 text-xs">Premium economy</p>
                    </div>

                    <div className="flex p-4 gap-7">
                        <div className="flex gap-2">
                            <img src="/tag.svg" className="h-4 w-4"/>
                            <p className="font-bold text-xs">from $240</p>
                        </div>
                        <div className="flex gap-2">
                            <img src="/Plane.svg" className="h-4 w-4"/>
                            <p className="font-bold text-xs">SFO</p>
                        </div>
                    </div>

                    <div className="flex p-3 gap-2">
                        <div className="flex justify-center items-center w-50 h-10 rounded-full bg-black p-4.5">
                            <button className="text-white text-xs">Search flight</button>
                        </div>
                        <div className="bg-white border border-gray-300  rounded-full flex justify-center items-center h-10 w-10">
                        <button>
                            <img src="/heart.svg" className=" h-5 w-5"/>
                        </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}