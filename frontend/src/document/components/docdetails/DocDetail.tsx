import react from "react";
import type { docdetailstype } from "../../types/doctypes";
import { useState } from "react";


function DocDetail({ docName, pages, chunks, path }: docdetailstype) {
  return (
    <div className="flex flex-col">
      <div className="text-cyan-800 left-0.5"> {docName} </div>
      <div className="flex flex-row gap-0.5 justify-evenly">
        <div>{pages} Pages</div>
        <div>|</div>
        <div>{chunks} Chunks</div>
      </div>
      <div className="flex flex-row gap-0.5 justify-evenly">
        <a href={path} target="_blank" className="rounded-md text-black bg-blue-300 p-0.5">
          View 
        </a>
        <button className="rounded-md text-white bg-red-500 p-0.5">
          X delete
        </button>
      </div>
    </div>
  );
}

export default DocDetail;
