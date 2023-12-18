import PropTypes from 'prop-types'
import { useState } from 'react'
import ArrowUpIcon from '../assets/icon-arrow-up.svg?react'
import ArrowDownIcon from '../assets/icon-arrow-down.svg?react'

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen((s) => !s)
  }

  return (
    <div className="relative text-medium-grey">
      <button
        onClick={handleToggle}
        className="flex w-full items-center gap-2 font-medium"
      >
        <span>{title}</span>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>
      {isOpen && (
        <div className="right-0 py-4 leading-none lg:absolute lg:z-20 lg:rounded-lg lg:bg-white lg:p-6 lg:shadow-xl ">
          {children}
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
}

export default Dropdown
