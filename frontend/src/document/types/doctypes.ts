export type docdetailstype={
    docName: string,
    pages: number,
    chunks: number,
}

export type DocHeaderProps = {
  onFilesSelected: (files: File[]) => void;
};