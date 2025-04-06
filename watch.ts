import { spawn } from "child_process";
import { readdirSync } from "fs";
import { join } from "path";

const BASE_DIRECTORY = "./src";
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("File Path Not Provided");
  process.exit(1);
}

const getFiles = (source: string, isFile = false) =>
  readdirSync(source, { withFileTypes: true })
    .filter((file) => isFile || file.isDirectory())
    .map((file) => file.name);

const pathIds = args[0].split(".").map((id) => +id);
let filePath = join(BASE_DIRECTORY);

for (let index = 0; index < pathIds.length; index++) {
  const fileId = pathIds[index];
  const isFile = index == pathIds.length - 1;
  const filesAtPath = getFiles(filePath, isFile);
  if (!filesAtPath.length) break;
  const regex = new RegExp(`^0?${fileId}(.\\w+)+`, "i");
  const path = filesAtPath.find((file) => file.match(regex));
  if (!path) break;
  filePath = join(filePath, path);
}

const child = spawn("tsx", ["watch", "--inspect", filePath], {
  stdio: "inherit",
  shell: true,
});

child.on("error", (err) => {
  console.error("❌ Failed to start process:", err);
});

child.on("exit", (code) => {
  console.log(`🔚 Process exited with code ${code}`);
});
