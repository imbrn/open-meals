function imageLoader(src) {
  if (imageLoader.impl) {
    return imageLoader.impl(src);
  } else {
    return defaultImpl(src);
  }
}

function defaultImpl(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = error => reject(error);
    image.src = src;
  });
}

export default imageLoader;
