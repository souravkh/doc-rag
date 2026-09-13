export type docdetailstype={
    docName: string,
    pages: number,
    chunks: number,
    path:string,
}

export type DocHeaderProps = {
  onFilesSelected: (files: File[]) => void;
};