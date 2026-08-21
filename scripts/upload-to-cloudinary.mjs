// One-off migration script: uploads the referenced /public media files to
// Cloudinary and writes a mapping (local filename -> Cloudinary public_id)
// to scripts/cloudinary-map.json so the app code can be rewritten to use
// CldImage/CldVideoPlayer instead of local files.
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// Load .env.local manually (no dotenv dependency in this project).
const envPath = path.join(root, ".env.local");
for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) process.env[m[1]] = m[2].replace(/^"(.*)"$/, "$1");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const IMAGES = [
  "ad.jpg", "ad.webp", "ad2.png", "adil.jpeg", "fd.jpg", "five.png",
  "four.png", "hk.jpg", "hw.jpg", "ik.jpeg", "logo1.jpg", "mahneera.jpeg",
  "mylogo.png", "nimra.jpeg", "planet.avif", "saniatariq.png", "sha.png",
  "sirmali.png", "taha.jpeg", "two.png", "ujk.jpeg",
];

const VIDEOS = [
  "ecommerce.mp4", "personalassistant.mp4", "portfolio.mp4",
  "steelfabrications.mp4", "video.mp4",
];

const FOLDER = "techexa-vision";

async function main() {
  const map = {};

  for (const file of IMAGES) {
    const filePath = path.join(root, "public", file);
    if (!fs.existsSync(filePath)) { console.log(`skip (missing): ${file}`); continue; }
    const publicId = `${FOLDER}/${path.parse(file).name}`;
    process.stdout.write(`uploading image ${file} ... `);
    const res = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      resource_type: "image",
      overwrite: true,
    });
    map[file] = { public_id: res.public_id, resource_type: "image", width: res.width, height: res.height };
    console.log("done");
  }

  for (const file of VIDEOS) {
    const filePath = path.join(root, "public", file);
    if (!fs.existsSync(filePath)) { console.log(`skip (missing): ${file}`); continue; }
    const publicId = `${FOLDER}/${path.parse(file).name}`;
    process.stdout.write(`uploading video ${file} ... `);
    const res = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      resource_type: "video",
      overwrite: true,
      chunk_size: 6000000,
    });
    map[file] = { public_id: res.public_id, resource_type: "video", width: res.width, height: res.height, duration: res.duration };
    console.log("done");
  }

  fs.writeFileSync(
    path.join(__dirname, "cloudinary-map.json"),
    JSON.stringify(map, null, 2)
  );
  console.log(`\nWrote scripts/cloudinary-map.json with ${Object.keys(map).length} entries.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
