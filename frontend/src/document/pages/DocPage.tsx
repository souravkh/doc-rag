import DocDetail from "../components/docdetails/DocDetail";
import DocHeader from "../components/docheader/DocHeader";
import { useEffect, useState } from "react";
import type { docdetailstype } from "../types/doctypes";

export default function DocPage() {
  const [files, updateFiles] = useState<File[]>([]);
  const [docdetails, updateDocDetails] = useState<docdetailstype[]>([]);

  const handleOnDeleteOfDocument = (docName: string) => {
    const documentToDelete = docdetails.find(
      (doc) => doc.docName === docName
    );

    if (documentToDelete) {
      URL.revokeObjectURL(documentToDelete.path);
    }

    updateFiles((previousFiles) =>
      previousFiles.filter((file) => file.name !== docName)
    );

    updateDocDetails((previousDetails) =>
      previousDetails.filter((doc) => doc.docName !== docName)
    );
  };

  const handleFileSelected = (file: File) => {
    updateFiles((previousFiles) => [...previousFiles, file]);
  };

  useEffect(() => {
    if (files.length === 0) return;

    const file = files[files.length - 1];

    const alreadyExists = docdetails.some(
      (doc) => doc.docName === file.name
    );

    if (alreadyExists) return;

    const path = URL.createObjectURL(file);

    updateDocDetails((previousDetails) => [
      ...previousDetails,
      {
        docName: file.name,
        pages: 0,
        chunks: 0,
        path: path,
        onDelete: handleOnDeleteOfDocument,
      },
    ]);
  }, [files]);

  return (
    <>
      <DocHeader onFileSelected={handleFileSelected} />

      {docdetails.map((doc) => (
        <DocDetail
          key={doc.docName}
          pages={doc.pages}
          docName={doc.docName}
          chunks={doc.chunks}
          path={doc.path}
          onDelete={doc.onDelete}
        />
      ))}
    </>
  );
}
