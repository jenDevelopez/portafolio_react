import { PropsSection } from "../../types"


function Section({children,title,class:className}: PropsSection) {
  return (
    <section className={`w-full h-full mt-4 text-md flex flex-grow flex-col sm:w-full lg:mx-auto lg:w-3/4
    xl:w-[90%] ${className}
    `}>
      <h2 className="text-2xl font-bold pb-4">{title}</h2>

      {children}
    </section>
  )
}

export default Section