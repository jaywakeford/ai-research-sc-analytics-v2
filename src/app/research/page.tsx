'use client';

import dynamic from 'next/dynamic';
import React, { useState, Suspense } from 'react';

// Dynamically import components with loading states
const PdfViewer = dynamic(() => import('@/components/PdfViewer'), { 
  ssr: false,
  loading: () => (
    <div className="loading-container">
      <div className="loading-spinner">Loading PDF viewer...</div>
    </div>
  )
});

const AudioPlayer = dynamic(() => import('@/components/AudioPlayer'), { 
  ssr: false,
  loading: () => <div className="loading-spinner">Loading audio player...</div>
});

const researchPapers = [
  {
    id: 'powerbi',
    title: 'Power BI Analytics Development',
    description: 'Advanced analytics implementation for financial trading systems using Power BI',
    pdfUrl: '/media/pdfs/powerbi-analytics-development-a.pdf',
    audioUrl: '/media/audio/power-bi-analytics-for-at-the-money-trading.mp3',
    tags: ['Power BI', 'Analytics', 'Trading']
  },
  {
    id: 'agents',
    title: 'AI Agent Systems Research',
    description: 'Research on AI agent systems for finance and macroeconomic analysis',
    pdfUrl: '/media/pdfs/agents-research-b.pdf',
    audioUrl: '/media/audio/ai-agent-systems-for-finance-and-macroeconomics.mp3',
    tags: ['AI', 'Finance', 'Agents']
  },
  {
    id: 'interpreter',
    title: 'Open Interpreter Integration',
    description: 'Automating workflows through advanced interpreter systems',
    pdfUrl: '/media/pdfs/open-interpreter-c.pdf',
    audioUrl: '/media/audio/automating-workflows-with-open-interpreter.mp3',
    tags: ['Automation', 'Workflow', 'Integration']
  },
  {
    id: 'ml',
    title: 'Independent Machine Learning Research',
    description: 'Machine learning applications in financial trading systems',
    pdfUrl: '/media/pdfs/independent-ml-learning-model-d.pdf',
    audioUrl: '/media/audio/independent-machine-learning-research-in-financial-trading.mp3',
    tags: ['Machine Learning', 'Trading', 'Research']
  }
];

export default function ResearchPage() {
  const [selectedPaper, setSelectedPaper] = useState(researchPapers[0]);

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Research Papers</h1>
        <p className="text-lg text-text-secondary mb-12 text-center max-w-3xl mx-auto">
          A collection of research papers exploring AI innovation, machine learning applications, 
          and advanced analytics in financial systems.
        </p>

        {/* Paper Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {researchPapers.map((paper) => (
            <button
              key={paper.id}
              onClick={() => setSelectedPaper(paper)}
              className={`px-6 py-3 rounded-lg transition-colors ${
                selectedPaper.id === paper.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {paper.title}
            </button>
          ))}
        </div>

        {/* Selected Paper Display */}
        <div className="glass-card p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3 gradient-text">{selectedPaper.title}</h2>
                <p className="text-text-secondary mb-4">{selectedPaper.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPaper.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <Suspense fallback={
                <div className="loading-container">
                  <div className="loading-spinner">Loading PDF viewer...</div>
                </div>
              }>
                <div className="pdf-container">
                  <PdfViewer pdfUrl={selectedPaper.pdfUrl} />
                </div>
              </Suspense>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="sticky top-8">
                <h3 className="text-xl font-semibold mb-4">Audio Summary</h3>
                <div className="glass-card p-4">
                  <Suspense fallback={<div className="loading-spinner">Loading audio player...</div>}>
                    <AudioPlayer src={selectedPaper.audioUrl} title="Research Summary" />
                  </Suspense>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Key Points</h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li>• Advanced implementation techniques</li>
                    <li>• Real-world applications</li>
                    <li>• Performance metrics and results</li>
                    <li>• Future research directions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pdf-container {
          position: relative;
          width: 100%;
          min-height: 600px;
          height: calc(100vh - 400px);
          max-height: 1000px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .loading-container {
          width: 100%;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }
        .loading-spinner {
          padding: 2rem;
          text-align: center;
          color: #666;
        }
        @media (max-width: 1024px) {
          .pdf-container {
            height: 600px;
          }
        }
      `}</style>
    </main>
  )
} 