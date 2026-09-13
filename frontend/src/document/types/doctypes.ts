export type docdetailstype={
    docName: string,
    pages: number,
    chunks: number,
    path:string,
    onDelete: (docName : string)=>void
}

export type DocHeaderProps = {
  onFilesSelected: (files: File[]) => void;
};