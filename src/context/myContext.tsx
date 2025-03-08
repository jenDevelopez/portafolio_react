import React, { Dispatch, SetStateAction, createContext, useState } from "react";
interface StateContextType {
  content:string,
  openNav:boolean,
  viewProjectInfo:boolean,
  setContent: Dispatch<SetStateAction<string>>,
  setOpenNav: Dispatch<SetStateAction<boolean>>,
  isSending:boolean,
  setIsSending: Dispatch<SetStateAction<boolean>>,
  setViewProjectInfo:Dispatch<SetStateAction<boolean>>,
}

interface ProviderProps {
  children: React.ReactNode;
}

export const MyContext = createContext<StateContextType>({
  content:'about',
  setContent:()=>{},
  openNav:false,
  setOpenNav:()=>{}
  ,
  isSending:false,
  setIsSending:()=>{},
  viewProjectInfo:false,
  setViewProjectInfo: () => {}
  

});

export const MyProvider = ({ children }: ProviderProps) => {
  const [content,setContent] = useState('about')
  const [openNav,setOpenNav] = useState(false)
  const [viewProjectInfo,setViewProjectInfo] = useState(false)
  return (
    <MyContext.Provider
      value={{
        content,setContent,
        openNav,setOpenNav,
        viewProjectInfo,setViewProjectInfo,
        isSending:false,
        setIsSending:()=>{},
        

      }}
    >
      {children}
    </MyContext.Provider>
  );
};