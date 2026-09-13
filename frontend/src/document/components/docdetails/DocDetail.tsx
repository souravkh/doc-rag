import type { docdetailstype } from "../../types/doctypes";

function DocDetail({
  docName,
  pages,
  chunks,
  path,
  onDelete,
}: docdetailstype) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow transition-shadow">
      <div className="text-sm font-medium text-gray-800 truncate mb-2" title={docName}>
        {docName}
      </div>

      <div className="flex flex-row items-center text-xs text-gray-500 mb-3 gap-2">
        <span>{pages} Pages</span>
        <span className="text-gray-300">|</span>
        <span>{chunks} Chunks</span>
      </div>

      <div className="flex flex-row gap-2 mt-auto pt-2 border-t border-gray-100">
        <a
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center rounded text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 py-1.5 transition-colors"
        >
          View
        </a>

        <button
          className="flex-1 text-center rounded text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 py-1.5 transition-colors"
          onClick={() => onDelete(docName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DocDetail;
