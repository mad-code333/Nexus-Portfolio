/**
 * Replace every project card image with a better live screenshot from its URL.
 * Falls back to the original local asset when capture fails or looks like an error page.
 *
 * Run: node scripts/refresh-project-shots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import catalog from "../src/data/projects.json" with { type: "json" };

const OUT = path.resolve("public/projects/shots");
const ORIG = path.resolve("public/projects");
fs.mkdirSync(OUT, { recursive: true });

const ORIGINALS = Object.fromEntries(
  (
    await import("../src/data/projects.json", { with: { type: "json" } })
  ).default.projects.map((p) => {
    // Prefer basename of current image if it's not already a shot
    const base = String(p.image || "").includes("/")
      ? null
      : p.image;
    return [p.id, base];
  }),
);

// Hard-coded originals from the repo's known assets
const KNOWN = {
  "web-0": "bloxlucky.png",
  "web-1": "ebert.png",
  "web-2": "xy12.png",
  "web-3": "vps-ai.png",
  "web-4": "aace.png",
  "web-5": "step-ai.png",
  "web-6": "koko.png",
  "web-7": "sphynxmarketplace.png",
  "web-8": "manekineko.png",
  "web-9": "hermanmiller.png",
  "web-10": "schlep.png",
  "web-11": "mew.png",
  "web-12": "blueheart.png",
  "web-13": "bigblueplumbing.png",
  "web-14": "vymex.png",
  "web-15": "vmoto.png",
  "web-16": "shiseido.png",
  "web-17": "garou.jpg",
  "web-18": "pavia.png",
  "web-19": "glenveagh.jpg",
  "web-20": "fortspot.png",
  "web-21": "looksmax.png",
  "mobile-0": "zoop.png",
  "mobile-1": "gardenvision.png",
  "mobile-2": "aerial.png",
  "mobile-3": "flood.png",
  "mobile-4": "bully.png",
  "software-0": "inventory.png",
  "software-1": "crm.png",
  "software-2": "passwordmanager.png",
  "software-3": "screennav.png",
  "bot-0": "chatbot-customer-service.png",
  "bot-1": "E-Commerce-Ass.png",
  "bot-2": "WalletWatch.jpeg",
  "bot-3": "safedeal.png",
  "bot-4": "QuizMaster.png",
  "bot-5": "copy-trader.jpg",
  "bot-6": "MoodTunes.png",
  "bot-7": "TrendTracker.png",
  "blockchain-0": "defi-platform.png",
  "blockchain-1": "manekineko.png",
  "blockchain-2": "supply-chain-management.jpg",
  "blockchain-3": "ebert.png",
  "blockchain-4": "solana-nft-marketplace.jpg",
  "blockchain-5": "aace.png",
  "blockchain-6": "sphynxmarketplace.png",
  "blockchain-7": "mew.png",
  "blockchain-8": "speedfun.png",
  "blockchain-9": "faucet.png",
  "blockchain-10": "crypto-betting.png",
  "ai-0": "PMS.jpg",
  "ai-1": "sentiment.png",
  "ai-2": "recognition.png",
  "ai-3": "fraud-detection.png",
  "scraping-0": "price-monitoring.png",
  "scraping-1": "posting-bot.jpeg",
  "scraping-2": "pdf-extraction.png",
  "scraping-3": "email-response.png",
  "scraping-4": "job-scraper.jpg",
  "scraping-5": "real-estate-scraper.jpg",
  "scraping-6": "news-aggregator.png",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchBuf(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    },
    redirect: "follow",
    signal: AbortSignal.timeout(75000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) throw new Error(`small ${buf.length}`);
  return buf;
}

async function probeStatus(url) {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    Accept: "text/html,application/xhtml+xml",
  };
  // Prefer HEAD; some hosts reject it — fall back to GET.
  try {
    const head = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
      headers,
    });
    if (head.status && head.status !== 405) return head.status;
  } catch {
    // ignore and try GET
  }
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
      headers,
    });
    return res.status;
  } catch {
    return 0; // network error — not necessarily 404
  }
}

async function scoreImage(filePath) {
  const st = fs.statSync(filePath);
  if (st.size < 18000) return { ok: false, reason: "tiny file" };
  const meta = await sharp(filePath).metadata();
  if ((meta.width || 0) < 500 || (meta.height || 0) < 280) {
    return { ok: false, reason: "small dims" };
  }
  const { data } = await sharp(filePath)
    .resize(96, 54, { fit: "fill" })
    .raw()
    .toBuffer({ resolveWithObject: true });
  let sum = 0;
  for (const v of data) sum += v;
  const avg = sum / data.length;
  let variance = 0;
  for (const v of data) variance += (v - avg) ** 2;
  variance /= data.length;
  // Classic browser / host 404 & timeout pages are mostly white or flat
  if (avg > 210 && variance < 1500) return { ok: false, reason: "error/404 page", avg, variance };
  if (variance < 90) return { ok: false, reason: "flat/empty", avg, variance };
  return { ok: true, avg, variance, kb: Math.round(st.size / 1024) };
}

async function saveCover(buf, outPath) {
  await sharp(buf)
    .resize(1200, 675, { fit: "cover", position: "top" })
    .png({ quality: 90 })
    .toFile(outPath);
}

async function captureLive(url) {
  const encoded = encodeURIComponent(url);
  const providers = [
    `https://image.thum.io/get/width/1440/crop/810/noanimate/${url}`,
    `https://api.microlink.io/?url=${encoded}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900`,
    `https://s0.wp.com/mshots/v1/${encoded}?w=1440`,
  ];

  const errors = [];
  for (const provider of providers) {
    try {
      if (provider.includes("mshots")) {
        await fetchBuf(provider).catch(() => null);
        await sleep(3500);
      }
      let buf = await fetchBuf(provider);
      if (buf[0] === 0x7b) {
        const json = JSON.parse(buf.toString("utf8"));
        const imageUrl = json?.data?.screenshot?.url || json?.data?.image?.url;
        if (!imageUrl) throw new Error("no image in json");
        buf = await fetchBuf(imageUrl);
      }
      const tmp = path.join(OUT, `_tmp-${Date.now()}-${Math.random().toString(16).slice(2)}.png`);
      await saveCover(buf, tmp);
      const score = await scoreImage(tmp);
      if (!score.ok) {
        fs.unlinkSync(tmp);
        throw new Error(score.reason);
      }
      return tmp;
    } catch (err) {
      errors.push(err.message);
    }
  }
  throw new Error(errors.join(" | "));
}

async function useOriginal(projectId) {
  const name = KNOWN[projectId] || ORIGINALS[projectId];
  if (!name) return null;
  const src = path.join(ORIG, name);
  if (!fs.existsSync(src)) return null;
  return name;
}

const stats = { live: 0, fallback: 0, skip: 0, notFound: 0, github: 0 };

for (const project of catalog.projects) {
  const outPath = path.join(OUT, `${project.id}.png`);
  const link = (project.link || "").trim();
  process.stdout.write(`${project.id} … `);

  if (!/^https?:\/\//i.test(link)) {
    const orig = await useOriginal(project.id);
    if (orig) {
      project.image = orig;
      stats.fallback++;
      console.log("original (no url)");
    } else {
      stats.skip++;
      console.log("skip");
    }
    continue;
  }

  // GitHub repo pages often 404 or show generic pages — keep original artwork.
  if (/github\.com/i.test(link)) {
    const orig = await useOriginal(project.id);
    if (orig) {
      project.image = orig;
      stats.github++;
      console.log(`original (github)`);
    } else {
      stats.skip++;
      console.log("github but no original");
    }
    continue;
  }

  // If the project URL is 404/410 (or other client errors except rate-limit),
  // always keep the original picture — never show a dead-page screenshot.
  const status = await probeStatus(link);
  if (status === 404 || status === 410 || (status >= 400 && status < 500 && status !== 429)) {
    const orig = await useOriginal(project.id);
    if (orig) {
      project.image = orig;
      stats.notFound++;
      console.log(`original (HTTP ${status})`);
    } else {
      stats.skip++;
      console.log(`HTTP ${status} but no original`);
    }
    continue;
  }

  try {
    const tmp = await captureLive(link);
    fs.renameSync(tmp, outPath);
    project.image = `shots/${project.id}.png`;
    stats.live++;
    const score = await scoreImage(outPath);
    console.log(`live ${score.kb}kb`);
  } catch (err) {
    const orig = await useOriginal(project.id);
    if (orig) {
      project.image = orig;
      stats.fallback++;
      console.log(`fallback (${err.message.slice(0, 60)})`);
    } else {
      stats.skip++;
      console.log(`fail ${err.message.slice(0, 80)}`);
    }
  }

  await sleep(450);
}

fs.writeFileSync(
  path.resolve("src/data/projects.json"),
  JSON.stringify(catalog, null, 2) + "\n",
);

console.log("\nDone:", stats);
