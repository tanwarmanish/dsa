import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

export async function loadTestcases(scriptPath) {
  try {
    const filePath = testCaseFilePath(scriptPath);
    const data = await fs.readFile(filePath, "utf-8");
    const testcases = cleanTestCases(data);
    return testcases;
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

function testCaseFilePath(scriptPath) {
  const __filePath = fileURLToPath(scriptPath);
  const __dirPath = path.dirname(__filePath);
  const filename = __filePath.replace(__dirPath, "").replaceAll("/", "");
  const tsFileName = filename.split(".")[0] + ".csv";
  const tsFilePath = path.join(__dirPath, "testcases", tsFileName);
  return tsFilePath;
}

function cleanTestCases(testcases) {
  return JSON.parse(testcases).map((testcase) => {
    const [input, output] = testcase;
    return {
      input,
      output,
    };
  });
}
