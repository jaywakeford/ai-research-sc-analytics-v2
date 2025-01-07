'use client';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `/ai-research-sc-analytics-v2/pdf.worker.min.js`;

interface PdfViewerProps {
  src: string;
}

export default function PdfViewer({ src }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return Math.min(Math.max(1, newPageNumber), numPages);
    });
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-3xl overflow-auto max-h-[800px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
        <Document
          file={`/ai-research-sc-analytics-v2${src}`}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex justify-center"
        >
          <Page
            pageNumber={pageNumber}
            className="border border-gray-200 dark:border-gray-700 shadow-lg"
            width={800}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>

      <div className="flex items-center gap-4 mt-4 sticky bottom-0 bg-gray-900/80 p-4 rounded-lg backdrop-blur-sm">
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="px-4 py-2 text-sm font-medium text-gray-200 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <p className="text-gray-300">
          Page {pageNumber} of {numPages}
        </p>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          className="px-4 py-2 text-sm font-medium text-gray-200 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
} 