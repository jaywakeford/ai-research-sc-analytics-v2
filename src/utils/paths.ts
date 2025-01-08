export const getBasePath = () => {
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_BASE_PATH || '';
  }
  const pathname = window.location.pathname;
  return pathname.startsWith('/ai-research-sc-analytics-v2') ? '/ai-research-sc-analytics-v2' : '';
};

export const getMediaPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.replace(/^\/+/, '');
  return `${basePath}/media/${cleanPath}`;
};

export const getImagePath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.replace(/^\/+/, '');
  return `${basePath}/images/${cleanPath}`;
};

export const getPdfPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.replace(/^\/+/, '');
  return `${basePath}/media/pdfs/${cleanPath}`;
};

export const getAudioPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.replace(/^\/+/, '');
  return `${basePath}/media/audio/${cleanPath}`;
};

export const getVideoPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.replace(/^\/+/, '');
  return `${basePath}/media/videos/${cleanPath}`;
}; 