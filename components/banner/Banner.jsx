"use client"

function Banner({ headerText }) {
    return (
        <div className="h-[15rem] my-6 bg-red-700 flex items-center px-[5%] rounded-2xl shadow-lg shadow-black">
            <h2 className="font-bold text-stone-100 text-4xl">{headerText || "Banner Client Component"}</h2>
        </div>
    )
}

export { Banner }