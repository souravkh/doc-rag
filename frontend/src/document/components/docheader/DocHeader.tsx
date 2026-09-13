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
    <div className="flex flex-row items-center justify-between">
      <h3>Documents</h3>

      <label className="px-4 py-2 rounded-md text-amber-950 bg-amber-300 cursor-pointer">
        + Upload
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
