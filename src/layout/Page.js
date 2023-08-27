import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const Page = forwardRef(({ children, title = '', meta, style, ...other }, ref) => (
  <>
    <div ref={ref} {...other} style={{ ...style }}>
      {children}
    </div>
  </>
))

Page.displayName = 'Baumann'

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node
}

export default Page
