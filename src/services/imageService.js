const MAX_DIMENSION = 1200;
const JPEG_QUALITY = 0.75;

// Marge sous la limite de 1 Mo par document Firestore (le reste du document occupe de la place)
const MAX_IMAGE_DATA_URL_SIZE = 900_000;

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Impossible de lire l'image."));
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onerror = () => reject(new Error("Impossible de lire l'image."));
    img.onload = () => resolve(img);
    img.src = src;
  });
}

export async function fileToCompressedDataUrl(file) {
  const original = await readFileAsDataUrl(file);
  const img = await loadImage(original);

  const scale = Math.min(1, MAX_DIMENSION / Math.max(img.width, img.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);

  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const dataUrl = canvas.toDataURL("image/jpeg", JPEG_QUALITY);

  if (dataUrl.length > MAX_IMAGE_DATA_URL_SIZE) {
    throw new Error("L'image est trop volumineuse, même après compression. Choisissez une image plus légère.");
  }

  return dataUrl;
}
