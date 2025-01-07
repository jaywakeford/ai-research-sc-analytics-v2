'use client';

import React from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface AudioPlayerProps {
  src: string;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  return (
    <div className="w-full">
      <H5AudioPlayer
        src={`/ai-research-sc-analytics-v2${src}`}
        autoPlay={false}
        showJumpControls={true}
        layout="horizontal"
        customProgressBarSection={[
          "CURRENT_TIME",
          "PROGRESS_BAR",
          "DURATION",
        ]}
        customControlsSection={[
          "MAIN_CONTROLS",
          "VOLUME_CONTROLS",
        ]}
      />
    </div>
  );
} 