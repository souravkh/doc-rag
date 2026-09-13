import React from "react";
import type { DocHeaderProps } from "../../types/doctypes";

function DocHeader({ onFileSelected }: DocHeaderProps) {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      onFileSelected(file);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between pb-4 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">Documents</h3>

      <label className="px-3 py-1.5 text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 cursor-pointer transition-colors shadow-sm border border-blue-200 flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
        Upload
        <input
          type="file"
          accept=".pdf"
          onChange={handleUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default DocHeader;
