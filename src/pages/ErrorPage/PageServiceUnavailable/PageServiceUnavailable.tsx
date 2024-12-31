// import { Result } from "antd"
import { Link } from 'react-router-dom';
import pageServiceUnavailable from 'assets/images/500.png';

export default function PageServiceUnavailable() {
  return (
    <div style={{ height: 'calc(100vh - 130px)' }}>
      <div className="h-full flex flex-col justify-center items-center">
        <img src={pageServiceUnavailable} alt="pageNotFound" />
        <div className="text-primary-700 text-[24px] font-bold">
          Service unavailable
        </div>
        <div className="text-dark-400 font-medium mt-2">
          This server is temporary busy, try again later
        </div>
        <div className="mt-2">
          <span className="text-dark-400 text-sm font-normal">Back to</span>
          <Link
            className="text-primary-700 text-sm font-bold ml-1"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
