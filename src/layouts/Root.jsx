
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='max-w-[1170px] font-allFont w-full mx-auto'>
        <Outlet/>
    </div>
  )
}

export default Root