export default function Task2Page() {
    return(
        <div className="bg-white h-235 w-335 flex gap-4 justify-center items-center flex-col">

            <div className="flex gap-5 justify-center">
        
                <div className="bg-cyan-100 h-77 w-113 flex flex-col justify-between p-9 rounded-4xl text-cyan-950">
                    <div className="flex gap-3">
                        <img className="h-5.5 w-5.5" src="/palette.svg"/>
                        <p className="text-1xl font-bold">Design</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Adobe Photoshop</h1>
                        <br/>
                        <div className="flex justify-between">
                            <p className="text-1xl font-bold">in 6 days</p>
                            <div className="flex -space-x-3 items-center">
                                <img src="/steven.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <img src="/Finnn.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <img src="/James.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <div className="flex items-center w-7 h-7 rounded-full bg-white p-1.5 text-xs">
                                    <p>+9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="bg-green-100 h-77 w-113 flex flex-col justify-between p-9 rounded-4xl text-green-950">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <img className="h-5.5 w-5.5" src="/terminal-2.svg"/>
                            <p className="text-1xl font-bold">AI</p>
                        </div>
                        <img className="h-4 w-4" src="/star.svg"/>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">DALL·E 2, Midjourney, Stable Diffusion</h1>
                        <br/>
                        <div className="flex justify-between">
                            <p className="text-1xl font-bold">in 7 days</p>
                            <div className="flex -space-x-3 items-center">
                                <img src="/Grizzly.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <img src="/Panda.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <img src="/Ice.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <div className="flex items-center w-7 h-7 rounded-full bg-white p-1.5 text-xs">
                                    <p>+3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        
            <div className="flex gap-5 justify-center">
        
                <div className="bg-purple-200 h-67 w-73 flex flex-col justify-between p-9 rounded-4xl text-blue-950">
                    <div className="flex gap-3">
                        <img className="h-5.5 w-5.5" src="/palette.svg"/>
                        <p className="text-1xl font-bold">Design</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Figma</h1>
                        <p className="text-1xl font-bold">1 days ago</p>
                    </div>
                </div>
        
                <div className="bg-orange-200 h-67 w-73 flex flex-col justify-between p-9 rounded-4xl text-orange-950">
                    <div className="flex gap-3">
                        <img className="h-5.5 w-5.5" src="/code.svg"/>
                        <p className="text-1xl font-bold">Codding</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Python</h1>
                        <p className="text-1xl font-bold">2 days ago</p>
                    </div>
                </div>
        
                <div className="bg-pink-200 h-67 w-73 flex flex-col justify-between p-9 rounded-4xl text-pink-950">
                    <div className="flex gap-3">
                        <img className="h-5.5 w-5.5" src="/palette.svg"/>
                        <p className="text-1xl font-bold">Design</p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Sketch</h1>
                        <p className="text-1xl font-bold">3 days ago</p>
                    </div>
                </div>
        
            </div> 
        
        </div>
    )
};