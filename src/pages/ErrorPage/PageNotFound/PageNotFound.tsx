// import { Result } from "antd"
import { Link } from "react-router-dom"
import pageNotFound from "assets/images/404.png"

export default function PageNotFound() {
  return (
    <div style={{ height: "calc(100vh - 130px)" }}>
      <div className="h-full flex flex-col justify-center items-center">
        <img src={pageNotFound} alt="pageNotFound" />
        <div className="text-primary-700 text-[24px] font-bold">
          This page is not unknown or does not exsit
        </div>
        <div className="text-dark-400 font-medium mt-2">
          Sorry about that, but the page you looking for is not available
        </div>
        <div className="mt-2">
          <span className="text-dark-400 text-sm font-normal">Back to</span>
          <Link className="text-primary-700 text-sm font-bold ml-1" to="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
