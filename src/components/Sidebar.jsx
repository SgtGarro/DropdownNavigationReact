import PropTypes from 'prop-types'
function Sidebar({ children }) {
  return (
    <div className="fixed right-0 top-0 z-20 h-auto min-h-screen w-60 bg-white p-6">
      {children}
    </div>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node,
}

export default Sidebar
