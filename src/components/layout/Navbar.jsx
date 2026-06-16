import React from 'react'
import Aslan from '../skills/aslan'

const Navbar = () => {
	return (
		<header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-slate-950/60 backdrop-blur-xl" >
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
				<div className="flex items-center gap-3">
					<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500">
						<span className="text-sm font-bold text-white">MA</span>
					</div><span className="hidden font-semibold text-white sm:block">Muhammad Aslan</span>
				</div>
				{/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#about" className="relative group transition-colors hover:text-white">
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#skills" className="relative group transition-colors hover:text-white">
            Skills
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#experience" className="relative group transition-colors hover:text-white">
            Experience
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-500 transition-all group-hover:w-full"></span>
          </a>
          <a href="#projects" className="relative group transition-colors hover:text-white">
            Projects
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-500 transition-all group-hover:w-full"></span>
          </a>
        </nav>
        <Aslan/>
			</div>
		</header>
	)
}

export default Navbar
