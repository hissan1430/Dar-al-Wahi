let pdfjsPromise: Promise<any> | null = null;

export async function getPdfJs(): Promise<any> {
  if (!pdfjsPromise) {
    const cdnUrl = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/+esm';
    pdfjsPromise = import(/* @vite-ignore */ cdnUrl).then((mod) => {
      const lib = mod.default || mod;
      lib.GlobalWorkerOptions.workerSrc =
        'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
      return lib;
    });
  }
  return pdfjsPromise;
}
