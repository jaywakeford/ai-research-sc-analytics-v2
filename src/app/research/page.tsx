'use client';

import React from 'react';
import PdfViewer from '@/components/PdfViewer';

const ResearchPage: React.FC = () => {
  return (
    <div className="research-container">
      <h1>Research Papers</h1>
      
      <section className="paper-section">
        <h2>AI Agent Systems</h2>
        <PdfViewer src="/pdfs/ai-agent-systems.pdf" />
      </section>

      <section className="paper-section">
        <h2>Open Interpreter</h2>
        <PdfViewer src="/pdfs/open-interpreter.pdf" />
      </section>

      <style jsx>{`
        .research-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        h1 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .paper-section {
          margin-bottom: 4rem;
        }
        h2 {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default ResearchPage; 