'use client';

import React, { useRef, useState, useEffect } from 'react';
import { getVideoPath } from '@/utils/paths';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    playerRef.current = videojs(videoRef.current, {
      controls: true,
      fluid: true,
      sources: [{
        src: `/ai-research-sc-analytics-v2${src}`,
        type: 'video/mp4'
      }],
      poster: poster ? `/ai-research-sc-analytics-v2${poster}` : undefined
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [src, poster]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
} 