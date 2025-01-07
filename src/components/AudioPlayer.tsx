'use client';

import React, { useRef, useState, useEffect } from 'react';
import { getAudioPath } from '@/utils/paths';

interface AudioPlayerProps {
  src: string;
  title: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const fullPath = getAudioPath(src);

  useEffect(() => {
    // Reset error state when retrying
    if (retryCount > 0) {
      setError(null);
      setLoading(true);
    }
  }, [retryCount]);

  const handleLoadedData = () => {
    setLoading(false);
    setError(null);
  };

  const handleError = () => {
    const audioError = audioRef.current?.error;
    console.error('Audio error:', audioError);
    setError('Failed to load audio. Please try refreshing the page.');
    setLoading(false);
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    if (audioRef.current) {
      audioRef.current.load();
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      
      {error ? (
        <div className="flex flex-col items-center justify-center p-4 text-center bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p className="text-red-600 dark:text-red-400 mb-2">{error}</p>
          <button
            onClick={handleRetry}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors text-sm"
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800 bg-opacity-90 z-10 rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          )}
          <audio
            key={retryCount} // Force remount on retry
            ref={audioRef}
            className="w-full"
            controls
            preload="auto"
            onLoadedData={handleLoadedData}
            onError={handleError}
          >
            <source src={fullPath} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer; 