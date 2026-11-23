import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent spent an hour building on GitHub repo news-image-20261119, which never existed \u2014 it just never thought to check.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
