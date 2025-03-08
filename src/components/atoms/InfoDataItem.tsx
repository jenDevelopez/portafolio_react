import { PropsInfoDataItem } from "../../types";

function InfoDataItem({ text, icon, linkType }: PropsInfoDataItem) {
  return (
    <div className="flex items-center rounded-lg justify-start gap-2 md:text-lg lg:text-base bg-blue-200 py-2 px-2 ">
      <span className="text-lg p-2">{icon}</span>

      {!linkType ? <p>{text}</p> : <a href={`${linkType}${text}`}>{text}</a>}

   
    </div>
  );
}

export default InfoDataItem;