// One-off migration script: uploads the 3 new project videos to Cloudinary
// under the same techexa-vision/ folder as the rest of the site's media.
// Mirrors scripts/upload-to-cloudinary.mjs's config/pattern.
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

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

const VIDEOS = ["textmarketing.mp4", "rizwanomega.mp4"];
const FOLDER = "techexa-vision";

async function main() {
  const map = {};

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
    map[file] = { public_id: res.public_id, resource_type: "video", width: res.width, height: res.height, duration: res.duration, bytes: res.bytes };
    console.log("done");
  }

  fs.writeFileSync(
    path.join(__dirname, "new-project-videos-map.json"),
    JSON.stringify(map, null, 2)
  );
  console.log(`\nWrote scripts/new-project-videos-map.json with ${Object.keys(map).length} entries.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
