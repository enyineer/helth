import { MetaTags } from '@redwoodjs/web'
import StatusCell from 'src/components/Status/StatusCell'

const DashPage = () => {
  return (
    <>
      <MetaTags title="Dash" description="Dash page" />
      <h1>Service Helth</h1>
      <StatusCell />
    </>
  )
}

export default DashPage
