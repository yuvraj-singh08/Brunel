export default function Footer() {
    return (
        <>
            <div style={{ backgroundColor: '#F5F5F5' }} className="flex justify-between py-10 px-8 max-w-screen-2xl mx-auto rounded-3xl mb-10">
                {/* Left Div  */}
                <div className="flex">
                    <span className="mx-1"><img src="images/vector.png" alt="Copy Right" /></span>
                    <span className="mx-1">Talup 2023. All rights reserved</span>
                </div>

                {/* Right Div  */}
                <div className="flex">
                    <a className="mx-4" href="/">Terms & Conditions</a>
                    <a className="mx-4" href="/">Privacy Policy</a>
                </div>
            </div>
        </>
    )
}