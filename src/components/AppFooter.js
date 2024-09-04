import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <>
      <div className="footer-container">
        <CFooter className="px-4">
          <div className="copy-right-box">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Copyright
            </a>
            <span className="ms-1">&copy; 2024 Mentation Soloutions.</span>
          </div>
          <div className="ms-auto">
            <span className="me-1">Powered by</span>
            <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
              Mentation Employee Attendence Management
            </a>
          </div>
        </CFooter>
      </div>
    </>
  )
}

export default React.memo(AppFooter)
