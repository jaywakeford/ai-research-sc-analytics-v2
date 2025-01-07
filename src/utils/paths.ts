const getBasePath = () => {
  if (typeof window === 'undefined') {
    return process.env.NODE_ENV === 'production' ? '/ai-research-sc-analytics-v2' : '';
  }
  return window.location.pathname.startsWith('/ai-research-sc-analytics-v2') 
    ? '/ai-research-sc-analytics-v2' 
    : '';
};

export const getMediaPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};

export const getImagePath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/images/${path}`;
  return `${basePath}${cleanPath}`;
};

export const getPdfPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/pdfs/${path}`;
  return `${basePath}${cleanPath}`;
};

export const getAudioPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/audio/${path}`;
  return `${basePath}${cleanPath}`;
};

export const getVideoPath = (path: string): string => {
  const basePath = getBasePath();
  const cleanPath = path.startsWith('/') ? path : `/videos/${path}`;
  return `${basePath}${cleanPath}`;
}; 