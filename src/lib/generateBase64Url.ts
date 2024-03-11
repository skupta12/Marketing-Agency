import { getPlaiceholder } from "plaiceholder";

 // Function to generate blur data URL

 const generateBlurDataURL = async (src) => {
    const buffer = await fetch(src).then(async (res) => {
      return Buffer.from(await res.arrayBuffer());
    });
    const { base64 } = await getPlaiceholder(buffer);
    return base64;
  };
