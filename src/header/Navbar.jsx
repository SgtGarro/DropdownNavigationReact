import Dropdown from '../components/Dropdown'
import CalendarIcon from '../assets/icon-calendar.svg?react'
import PlanningIcon from '../assets/icon-planning.svg?react'
import RemindersIcon from '../assets/icon-reminders.svg?react'
import TodoIcon from '../assets/icon-todo.svg?react'

function Navbar() {
  return (
    <div className="flex flex-col items-center gap-y-4 lg:w-full lg:flex-row">
      <div className="flex w-full flex-col gap-y-4 lg:mr-auto lg:flex-row lg:gap-x-4">
        <Dropdown title="Features">
          <ul className="flex flex-col gap-y-4 whitespace-nowrap px-4 font-medium lg:px-0">
            <li>
              <a href="#" className="flex items-center gap-2">
                <TodoIcon className="h-6 w-6" />
                <span className="leading-none">Todo List</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <CalendarIcon className="h-6 w-6" />
                <span className="leading-none">Calendar</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <RemindersIcon className="h-6 w-6" />
                <span className="leading-none">Reminders</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <PlanningIcon className="h-6 w-6" />
                <span className="leading-none">Planning</span>
              </a>
            </li>
          </ul>
        </Dropdown>
        <Dropdown title="Company">
          <ul className="flex flex-col gap-y-4 whitespace-nowrap px-4 font-medium lg:px-0">
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </Dropdown>
        <a href="#" className="font-medium text-medium-grey">
          Carrers
        </a>
        <a href="#" className="font-medium text-medium-grey">
          About
        </a>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row">
        <a
          href="#"
          className="block rounded-lg px-6 py-4 text-center leading-none hover:bg-black hover:text-white"
        >
          Login
        </a>
        <a
          href="#"
          className="block rounded-lg border border-black px-6 py-4 text-center leading-none transition-colors hover:bg-black hover:text-white"
        >
          Register
        </a>
      </div>
    </div>
  )
}

export default Navbar
