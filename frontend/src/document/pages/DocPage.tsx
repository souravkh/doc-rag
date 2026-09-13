import DocDetail from "../components/docdetails/DocDetail";
import DocHeader from "../components/docheader/DocHeader";
import { useEffect, useState } from "react";
import type { docdetailstype } from "../types/doctypes";

export default function DocPage() {
  const [files, updateFiles] = useState<File[]>([]);
  const [docdetails, updateDocDetails] = useState<docdetailstype[]>([]);

  const handleFileSelected = (file: File) => {
    updateFiles((previousFiles) => [...previousFiles, file]);
  };

  useEffect(() => {
    if (files.length === 0) return;

    const file = files[files.length - 1];

    updateDocDetails((previousDetails) => [
      ...previousDetails,
      {
        docName: file.name,
        pages: 0,
        chunks: 0,
      },
    ]);
  }, [files]);

  return (
    <>
      <DocHeader onFileSelected={handleFileSelected} />
      {docdetails.map((doc)=>(
        <DocDetail
            pages={doc.pages}
            docName={doc.docName}
            chunks={doc.chunks}
        />
      ))}
      
    </>
  );
}
