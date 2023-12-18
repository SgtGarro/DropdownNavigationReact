import Logo from '../assets/logo.svg'
import MenuIcon from '../assets/icon-menu.svg?react'
import MenuCloseIcon from '../assets/icon-close-menu.svg?react'
import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from './Navbar'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(
    function () {
      const { body } = document

      isOpen ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto')
    },
    [isOpen],
  )

  function handleToggle() {
    setIsOpen((s) => !s)
  }
  return (
    <>
      <header className="flex h-16 items-center lg:h-24">
        <nav className="flex w-full items-center justify-between px-4 lg:justify-start lg:gap-x-16 lg:px-8">
          <a href="#">
            <img src={Logo} alt="Snap logo" />
          </a>
          <button type="button" onClick={handleToggle} className="lg:hidden">
            <MenuIcon />
          </button>
          <div className="hidden lg:block lg:w-full">
            <Navbar />
          </div>

          {isOpen && (
            <Sidebar>
              <button
                type="button"
                className="mb-8 ml-auto block"
                onClick={handleToggle}
              >
                <MenuCloseIcon />
              </button>
              <Navbar />
            </Sidebar>
          )}
        </nav>
      </header>
      {isOpen && (
        <div
          onClick={handleToggle}
          className="absolute bottom-0 left-0 right-0 top-0 z-10 h-screen w-full bg-black opacity-60"
        ></div>
      )}
    </>
  )
}

export default Header
