const http = require("http");

const routes = [
  "/",
  "/machines",
  "/machines/mono-wire-saw",
  "/machines/multiwire-saw",
  "/machines/cnc-wire-profile",
  "/engineering",
];

async function check() {
  console.log("------------------------------------------------------------------------------------------------");
  console.log("LN ENGINEERING — VERIFYING LIVE RED MACHINE ASSETS ACROSS ROUTES");
  console.log("------------------------------------------------------------------------------------------------");

  for (const r of routes) {
    await new Promise((resolve) => {
      http.get("http://localhost:3000" + r, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          const gantry = data.includes("ln-stone-cutting-gantry");
          const field1 = data.includes("ln-promaxx-2500-field");
          const field2 = data.includes("ln-gantry-cutting-field");
          const homeHero = data.includes("home-hero");
          console.log(
            `Route: ${r.padEnd(28)} | HTTP ${res.statusCode} | Gantry: ${gantry ? "YES" : " - "} | Field(ProMaxx): ${field1 ? "YES" : " - "} | Field(Gantry): ${field2 ? "YES" : " - "} | Hero: ${homeHero ? "YES" : " - "}`
          );
          resolve();
        });
      }).on("error", (err) => {
        console.error(`Error fetching ${r}:`, err.message);
        resolve();
      });
    });
  }
  console.log("------------------------------------------------------------------------------------------------");
}

check();
