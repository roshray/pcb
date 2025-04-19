export default function Products() {
    return (
        <section className="w-screen h-screen flex justify-center mt-14">
            <div className="">
                <div className="flex items-center max-w-6xl w-full px-4">
                    <div className="border-t border-blue-200"></div>
                    <span className="px-4 text-lg font-bold text-blue-400">Recommended products</span>
                    <div className="border-t text-blue-200"></div>
                </div>

                    <p className="flex items-center justify-center text-sm  text-gray-600 font-semibold">
                        Entrance management, digital Id card, for the field of biometrics Application such as mobile payment provide semiconductorhardware and software solutions
                    </p>

                {/* Grid of Images : left vertical image & on the right top single horizontal image and below 2 small image */}
                <div className="flex items-center justify-center gap-6 mt-8">
                    {/*Panel resizing */}
                    <div>Vertical Image</div>
                    <div className="">
                        <div>{/*Right vertical  Images */}Top Image</div>
                        <div>
                            <div className="">
                                Image 1
                                Image 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}