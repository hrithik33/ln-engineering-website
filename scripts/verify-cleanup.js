const http = require("http");

async function get(urlPath) {
  return new Promise((resolve) => {
    http.get("http://localhost:3000" + urlPath, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    }).on("error", (err) => resolve({ error: err.message }));
  });
}

async function runAudit() {
  console.log("================================================================================");
  console.log("LN ENGINEERING — PRODUCT CATALOGUE VERIFICATION AUDIT");
  console.log("================================================================================");

  // 1. Check live public routes
  const publicRoutes = [
    "/",
    "/machines",
    "/machines/mono-wire-saw",
    "/machines/multiwire-saw",
    "/machines/cnc-wire-profile",
    "/products/wire-rope",
    "/about",
    "/contact",
  ];

  console.log("\n[1] VERIFYING ACTIVE PAGES (EXPECTING HTTP 200):");
  for (const route of publicRoutes) {
    const res = await get(route);
    const pass = res.statusCode === 200;
    console.log(`  ${route.padEnd(32)} -> HTTP ${res.statusCode} ${pass ? "✓ PASS" : "✗ FAIL"}`);
  }

  // 2. Check removed routes redirect
  const redirectRoutes = [
    { from: "/resources", to: "/machines" },
    { from: "/engineering", to: "/about" },
    { from: "/about-us", to: "/about" },
    { from: "/contact-us", to: "/contact" },
  ];

  console.log("\n[2] VERIFYING CLEAN REDIRECTS (EXPECTING HTTP 308):");
  for (const { from, to } of redirectRoutes) {
    const res = await get(from);
    const isRedirect = res.statusCode === 308 || res.statusCode === 307;
    const location = res.headers ? res.headers.location : "";
    console.log(`  ${from.padEnd(20)} -> HTTP ${res.statusCode} -> ${location} ${isRedirect ? "✓ PASS" : "✗ FAIL"}`);
  }

  // 3. Check Homepage 6-Part Structure & Map
  console.log("\n[3] VERIFYING HOMEPAGE REFINED STRUCTURE:");
  const home = await get("/");
  const hasHero = home.body.includes("PRECISION BUILT.") && home.body.includes("home-hero.jpg");
  const hasIntro = home.body.includes("Three Decades of Precision Stone Machinery");
  const hasShowcase = home.body.includes("Mono Wire Saw Machines") && home.body.includes("Multiwire Saw Machines");
  const hasHighlights = home.body.includes("2500 mm Largest Flywheels") && home.body.includes("50-Tonne Revolving Trolley");
  const hasMap = home.body.includes("Visit Our Manufacturing Facility") && home.body.includes("maps.google.com");
  const hasDirections = home.body.includes("Get Directions");
  const hasEnquiry = home.body.includes("Ready to Equip Your Stone Processing Facility");

  console.log(`  Hero with Red Machine Visuals:      ${hasHero ? "✓ PASS" : "✗ FAIL"}`);
  console.log(`  Concise Introduction:               ${hasIntro ? "✓ PASS" : "✗ FAIL"}`);
  console.log(`  Product Catalogue Showcase:         ${hasShowcase ? "✓ PASS" : "✗ FAIL"}`);
  console.log(`  Verified Technical Highlights:      ${hasHighlights ? "✓ PASS" : "✗ FAIL"}`);
  console.log(`  Factory Location & Google Map:      ${hasMap ? "✓ PASS" : "✗ FAIL"}`);
  console.log(`  Working Directions Link:            ${hasDirections ? "✓ PASS" : "✗ FAIL"}`);
  console.log(`  Contact/Quotation CTA:              ${hasEnquiry ? "✓ PASS" : "✗ FAIL"}`);

  // 4. Check Contact Page Map & Address
  console.log("\n[4] VERIFYING CONTACT PAGE MAP INTEGRATION:");
  const contact = await get("/contact");
  const contactMap = contact.body.includes("Visit Our Manufacturing Facility") && contact.body.includes("maps.google.com");
  const contactAddress = contact.body.includes("N. H. 8, Mokhampura, Rajsamand");
  const contactRegional = contact.body.includes("Ongole") && contact.body.includes("Martur");

  console.log(`  Interactive Map on Contact Page:    ${contactMap ? "✓ PASS" : "✗ FAIL"}`);
  console.log(`  Head Office & Works Address:        ${contactAddress ? "✓ PASS" : "✗ FAIL"}`);
  console.log(`  South India Sales Offices:          ${contactRegional ? "✓ PASS" : "✗ FAIL"}`);

  // 5. Test Quotation API delivery
  console.log("\n[5] TESTING ENQUIRY SUBMISSION ENDPOINT:");
  const payload = JSON.stringify({
    name: "Product Catalogue Audit Test",
    companyName: "Audit Stone Corp",
    email: "audit@test.com",
    phone: "+919876543210",
    countryLocation: "Italy",
    machineInterest: "LN 2500 PROMAXX",
    stoneType: "Granite",
    productionRequirement: "Squaring 30 blocks/day",
    message: "Product Catalogue PDF verification enquiry.",
    _formLoadedAt: Date.now() - 5000,
  });

  const postRes = await new Promise((resolve) => {
    const req = http.request(
      "http://localhost:3000/api/enquiry",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ statusCode: res.statusCode, body: data }));
      }
    );
    req.write(payload);
    req.end();
  });

  const postJson = JSON.parse(postRes.body || "{}");
  console.log(`  Quotation Submission:               HTTP ${postRes.statusCode} -> Ref ID: ${postJson.referenceId || "none"} ${postRes.statusCode === 200 ? "✓ PASS" : "✗ FAIL"}`);

  console.log("\n================================================================================");
}

runAudit();
