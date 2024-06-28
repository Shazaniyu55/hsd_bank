import React from "react";

const MyModal = ({isVisible, onClose})=>{
    if(!isVisible) return null;
    const handleClose = (e) =>{
        if(e.target.id === "wrapper") onClose()

    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30
        backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="w-[600px] flex flex-col">
                <button className="text-white text-xl
                place-self-end" onClick={()=> onClose()}>X</button>
                <div className="bg-white">
                
                    <div className="py-6 px-6 lg:px-8 text-left">


                    <h1 className="text-4xl font-bold">Transaction Error</h1>
                    <p>Send us an email for more information at a0960801911@gmail.com</p>
                    </div>
                
             
                </div>

            </div>
        </div>
    )

}

export default MyModal;