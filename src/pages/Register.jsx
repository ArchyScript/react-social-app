
const Register = () => {
    return (
        <>
            <div className="w-[100vw] h-[100vh] flex bg-[#f0f2f5] items-center justify-center">
                <div className="w-[70%]   h-[70%] flex  space-x-4 p-6">
                    <div className="flex flex-1 flex-col justify-center space-y-4 p-2">
                        <h3 className="text-5xl text-blue-500 font-semibold"> ArchySript Social  </h3>
                        <span className=" text-gray-500 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis recusandae quae suscipit quibusdam illum l </span>
                    </div>

                    {/* right */ }
                    <div className="flex flex-1 flex-col justify-center space-y-4 p-2">
                        <div className="bg-white p-6 rounded-md flex flex-col justify-between pl-5 space-y-4">
                            <input type="email" className="h-[50px] rounded-[10px]  text-lg w-full border focus:outline-0 p-5" placeholder="Enter email address" />
                            <input type="email" className="h-[50px] rounded-[10px]  text-lg w-full border focus:outline-0 p-5" placeholder="Enter email address" />
                            <button className="h-[50px] rounded-[10px]  text-lg text-white w-full bg-blue-500 focus:outline-0 flex justify-center items-center" >Register</button>

                            <span className="text-center" >Have an account?</span>

                            <button className="h-[50px] rounded-[10px]   text-lg text-white mx-auto w-1/2 bg-green-500 focus:outline-0 flex justify-center items-center" >Login</button>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Register
