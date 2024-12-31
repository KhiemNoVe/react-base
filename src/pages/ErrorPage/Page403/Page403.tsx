// import { apiCommon } from "api"
import pageNotFound from "assets/images/403.png"
// import { getDomainFromUrl } from "lib/function"
// import { useEffect } from "react"

export default function PageNotFound() {
  // async function checkExistedDomain() {
  //   try {
  //     const { data } = await apiCommon.checkExistedDomain({
  //       subdomain: getDomainFromUrl(window.location.href)
  //     })
  //     window.location.href = "/"
  //   } catch (e) {
  //     const { response } = e
  //     console.log(response)
  //   }
  // }

  // useEffect(() => {
  //   checkExistedDomain()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <div className="max-w-[600px] m-auto" style={{ height: "100vh" }}>
      <div className="h-full flex flex-col justify-center items-center">
        <img src={pageNotFound} alt="pageNotFound" />
        <div className="text-primary-700 text-[24px] font-bold">403 Forbidden</div>
        <div className=" text-dark-400 font-medium leading-[24px] mt-2 text-center">
          You do not have permission to access this resource.
        </div>
        <div className=" text-dark-400 font-medium leading-[24px] text-center">
          Please contact the administrator if you believe this is an error.
        </div>
      </div>
    </div>
  )
}
