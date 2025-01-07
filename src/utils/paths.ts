export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/ai-research-sc-analytics-v2' : '';
};

export const getMediaPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/media/${path}`;
  return `${basePath}${cleanPath}`;
};

export const getImagePath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/images/${path}`;
  return `${basePath}${cleanPath}`;
};

export const getPdfPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/media/pdfs/${path}`;
  return `${basePath}${cleanPath}`;
};

export const getAudioPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/media/audio/${path}`;
  return `${basePath}${cleanPath}`;
};

export const getVideoPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/media/videos/${path}`;
  return `${basePath}${cleanPath}`;
}; 