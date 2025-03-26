import { Outlet } from 'react-router-dom'
import './startup.component.scss'
import Banner from './banner/banner.component'

export default function Startup(){
    return(
        <>
            <div className="startup">
                <div className="startup__banner">
                    <Banner />
                </div>
                <div className="startup__forms">
                    <Outlet />
                </div>
            </div>
        </>
    )
}