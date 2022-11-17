import React from 'react'

function Navbar() {
    const items = ['Über uns', 'Wie wir arbeiten', 'Services', 'Projekte', 'Branchen', 'Karriere', 'What’s up?']
  return (
    <div>
        <div className="flex justify-between bg-secondary text-white px-6 py-3 fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-8">
                <div className="text-[23px]">IBM <strong>iX</strong></div>
                <div className="flex gap-8">
                    {
                        items.map((item, i) =>(
                            <div className="cursor-pointer hover:text-primary transition-all duration-150" key={i}>{item}</div>
                        ))
                    }
                </div>
            </div>
            <div className="">EN</div>
        </div>
    </div>
  )
}

export default Navbar