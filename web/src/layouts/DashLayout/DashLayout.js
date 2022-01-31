import { Toaster } from '@redwoodjs/web/toast'
import Container from 'react-bootstrap/Container'

const DashLayout = ({ children }) => {
  return (
    <Container>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <main>{children}</main>
    </Container>
  )
}

export default DashLayout
