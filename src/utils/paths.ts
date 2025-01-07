export const getBasePath = () => {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
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