import { useContext } from "react";
import { MyContext } from "../context/myContext";


function useMyContext() {
  const {content,setContent,openNav,setOpenNav,viewProjectInfo,setViewProjectInfo} = useContext(MyContext)

  return (
    {content,setContent,openNav,setOpenNav,viewProjectInfo,setViewProjectInfo}
  )
}

export default useMyContext