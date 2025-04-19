export default function Header() {
    return (
        <header className="fixed top-0 h-24 w-full hover:bg-white hover:text-stone-900">
            <div className="">

                <div className="">

                <div className="hidden md:block mt-3 ">

                    <p className="text-lime-400 ml-8 mt-8">logo</p>
                        <nav className="flex gap-8 text-sm text-center justify-center">
                            
                            <a href="#" className=" text-white/70 hover:text-black transition">Homepage</a>
                            <a href="#" className=" text-white/70 hover:text-black transition">Product Center</a>
                            <a href="#" className=" text-white/70 hover:text-black transition">Core technology</a>
                            <a href="#" className=" text-white/70 hover:text-black transition">Application scene</a>
                            <a href="#" className=" text-white/70 hover:text-black transition">about us</a>
                            <a href="#" className=" text-white/70 hover:text-black transition">contact us</a>

                        <p className="text-white hover:text-black text-right">medium</p>
                        </nav>
                    </div>
                </div>
            </div>

        </header>
    )
}