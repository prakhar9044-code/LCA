const devicePresets = {
  iphone_16_pro_max: { deviceName: "iPhone 16 Pro Max", lifetime: 4, weight: 0.227, manufacturingEnergy: 95, manufacturingEF: 0.55, distance: 9500, transportEF: 0.14, power: 5, hours: 4.5, useEF: 0.45, recycling: 60, eolEF: 2.7 },
  iphone_16: { deviceName: "iPhone 16", lifetime: 4, weight: 0.17, manufacturingEnergy: 85, manufacturingEF: 0.55, distance: 9500, transportEF: 0.14, power: 5, hours: 4.5, useEF: 0.45, recycling: 60, eolEF: 2.7 },
  iphone_15_pro: { deviceName: "iPhone 15 Pro", lifetime: 4, weight: 0.187, manufacturingEnergy: 88, manufacturingEF: 0.55, distance: 9500, transportEF: 0.14, power: 5, hours: 4.5, useEF: 0.45, recycling: 60, eolEF: 2.7 },
  iphone_15: { deviceName: "iPhone 15", lifetime: 4, weight: 0.171, manufacturingEnergy: 84, manufacturingEF: 0.55, distance: 9500, transportEF: 0.14, power: 5, hours: 4.5, useEF: 0.45, recycling: 60, eolEF: 2.7 },
  iphone_14: { deviceName: "iPhone 14", lifetime: 4, weight: 0.172, manufacturingEnergy: 82, manufacturingEF: 0.55, distance: 9500, transportEF: 0.14, power: 5, hours: 4.5, useEF: 0.45, recycling: 60, eolEF: 2.7 },
  iphone_13: { deviceName: "iPhone 13", lifetime: 4, weight: 0.174, manufacturingEnergy: 80, manufacturingEF: 0.55, distance: 9500, transportEF: 0.14, power: 5, hours: 4.5, useEF: 0.45, recycling: 60, eolEF: 2.7 },
  s24_ultra: { deviceName: "Galaxy S24 Ultra", lifetime: 4, weight: 0.232, manufacturingEnergy: 95, manufacturingEF: 0.55, distance: 9500, transportEF: 0.14, power: 5, hours: 4.5, useEF: 0.45, recycling: 60, eolEF: 2.7 },
  s24: { deviceName: "Galaxy S24", lifetime: 4, weight: 0.167, manufacturingEnergy: 85, manufacturingEF: 0.55, distance: 9500, transportEF: 0.14, power: 5, hours: 4.5, useEF: 0.45, recycling: 60, eolEF: 2.7 },
  pixel_9: { deviceName: "Google Pixel 9", lifetime: 4, weight: 0.198, manufacturingEnergy: 82, manufacturingEF: 0.55, distance: 9500, transportEF: 0.14, power: 5, hours: 4.5, useEF: 0.45, recycling: 60, eolEF: 2.7 },
  oneplus_12: { deviceName: "OnePlus 12", lifetime: 4, weight: 0.22, manufacturingEnergy: 88, manufacturingEF: 0.55, distance: 9500, transportEF: 0.14, power: 5, hours: 4.5, useEF: 0.45, recycling: 60, eolEF: 2.7 },
  macbook_air_m3: { deviceName: "MacBook Air M3", lifetime: 5, weight: 1.24, manufacturingEnergy: 280, manufacturingEF: 0.55, distance: 8000, transportEF: 0.12, power: 30, hours: 6, useEF: 0.45, recycling: 55, eolEF: 12 },
  dell_xps_13: { deviceName: "Dell XPS 13", lifetime: 5, weight: 1.2, manufacturingEnergy: 280, manufacturingEF: 0.55, distance: 8000, transportEF: 0.12, power: 35, hours: 6, useEF: 0.45, recycling: 55, eolEF: 12 },
  laptop: { deviceName: "Laptop", lifetime: 5, weight: 1.6, manufacturingEnergy: 320, manufacturingEF: 0.55, distance: 8000, transportEF: 0.12, power: 45, hours: 6, useEF: 0.45, recycling: 55, eolEF: 12 },
  desktop_pc: { deviceName: "Desktop PC", lifetime: 6, weight: 8.5, manufacturingEnergy: 450, manufacturingEF: 0.55, distance: 7000, transportEF: 0.11, power: 100, hours: 5, useEF: 0.45, recycling: 50, eolEF: 22 },
  ipad: { deviceName: "iPad", lifetime: 4, weight: 0.47, manufacturingEnergy: 120, manufacturingEF: 0.55, distance: 8500, transportEF: 0.13, power: 8, hours: 3.5, useEF: 0.45, recycling: 60, eolEF: 4.5 },
  airpods_pro_2: { deviceName: "AirPods Pro 2", lifetime: 2.5, weight: 0.051, manufacturingEnergy: 15, manufacturingEF: 0.55, distance: 9000, transportEF: 0.14, power: 0.1, hours: 2, useEF: 0.45, recycling: 35, eolEF: 0.8 },
  boat_airdopes_141: { deviceName: "boAt Airdopes 141", lifetime: 2.5, weight: 0.04, manufacturingEnergy: 8, manufacturingEF: 0.55, distance: 9000, transportEF: 0.14, power: 0.1, hours: 2, useEF: 0.45, recycling: 35, eolEF: 0.8 },
  noise_buds_vs102: { deviceName: "Noise Buds VS102", lifetime: 2.5, weight: 0.04, manufacturingEnergy: 8, manufacturingEF: 0.55, distance: 9000, transportEF: 0.14, power: 0.1, hours: 2, useEF: 0.45, recycling: 35, eolEF: 0.8 },
  jbl_flip: { deviceName: "JBL Flip", lifetime: 5, weight: 0.55, manufacturingEnergy: 30, manufacturingEF: 0.55, distance: 8000, transportEF: 0.12, power: 10, hours: 3, useEF: 0.45, recycling: 45, eolEF: 3 },
  tv_55: { deviceName: "Smart TV 55 inch", lifetime: 7, weight: 15, manufacturingEnergy: 550, manufacturingEF: 0.55, distance: 10000, transportEF: 0.15, power: 75, hours: 4, useEF: 0.45, recycling: 45, eolEF: 30 }
};

function applyDevicePreset(type) {
  if (type === "other" || !type) return;
  var p = devicePresets[type];
  if (!p) return;
  Object.keys(p).forEach(function (key) {
    var el = document.getElementById(key);
    if (el) el.value = p[key];
  });
  calculateLCA();
}

var lcaChart = null;
var currentChartType = "doughnut";

function getValue(id) {
  var el = document.getElementById(id);
  if (!el) return 0;
  var val = parseFloat(el.value);
  return isNaN(val) ? 0 : val;
}

function calculateLCA() {
  var lifetime = Math.max(0.1, getValue("lifetime"));
  var weight = Math.max(0, getValue("weight"));
  var nameEl = document.getElementById("deviceName");
  var deviceName = nameEl && nameEl.value.trim() ? nameEl.value.trim() : "Unnamed Device";

  var manufacturingImpact = getValue("manufacturingEnergy") * getValue("manufacturingEF");
  var transportImpact = (weight / 1000) * getValue("distance") * getValue("transportEF");
  var powerKW = getValue("power") / 1000;
  var yearlyEnergy = powerKW * Math.min(24, getValue("hours")) * 365;
  var useImpact = yearlyEnergy * lifetime * getValue("useEF");
  var recyclingRate = Math.min(100, Math.max(0, getValue("recycling")));
  var eolImpact = getValue("eolEF") * (1 - recyclingRate / 100);

  var total = manufacturingImpact + transportImpact + useImpact + eolImpact;
  var perYear = total / lifetime;

  function pct(v) {
    return total > 0 ? ((v / total) * 100).toFixed(1) + "%" : "0%";
  }
  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  setText("deviceTitle", deviceName + " · " + lifetime + "-year lifetime");
  setText("totalResult", total.toFixed(2) + " kg CO2e");
  setText("perYearResult", perYear.toFixed(2) + " kg CO2e / year");
  setText("manufacturingResult", manufacturingImpact.toFixed(2) + " kg");
  setText("transportResult", transportImpact.toFixed(2) + " kg");
  setText("useResult", useImpact.toFixed(2) + " kg");
  setText("eolResult", eolImpact.toFixed(2) + " kg");
  setText("manufacturingPct", pct(manufacturingImpact));
  setText("transportPct", pct(transportImpact));
  setText("usePct", pct(useImpact));
  setText("eolPct", pct(eolImpact));

  generateInsights({
    manufacturingImpact: manufacturingImpact,
    transportImpact: transportImpact,
    useImpact: useImpact,
    eolImpact: eolImpact,
    total: total,
    lifetime: lifetime,
    recyclingRate: recyclingRate
  });
  createChart(manufacturingImpact, transportImpact, useImpact, eolImpact);
}
function generateInsights(data) {
  var list = document.getElementById("insightList");
  if (!list) return;
  list.innerHTML = "";
  var phases = [
    { name: "Manufacturing", value: data.manufacturingImpact },
    { name: "Transportation", value: data.transportImpact },
    { name: "Use Phase", value: data.useImpact },
    { name: "End-of-Life", value: data.eolImpact }
  ].sort(function (a, b) { return b.value - a.value; });
  var dominant = phases[0];
  var dominantPct = data.total > 0 ? ((dominant.value / data.total) * 100).toFixed(0) : 0;
  var insights = [
    "<strong>" + dominant.name + "</strong> is the largest contributor (" + dominantPct + "% of total).",
    data.useImpact > data.manufacturingImpact
      ? "Use-phase electricity is higher than manufacturing."
      : "Manufacturing dominates. Extending lifetime reduces impact per year.",
    data.recyclingRate >= 70
      ? "Good recycling rate (" + data.recyclingRate + "%)."
      : "Increasing recycling above 70% would help.",
    "Annual footprint: <strong>" + (data.total / data.lifetime).toFixed(1) + " kg CO2e</strong> per year."
  ];
  insights.forEach(function (text) {
    var li = document.createElement("li");
    li.innerHTML = text;
    list.appendChild(li);
  });
}

function createChart(mfg, transport, use, eol) {
  var canvas = document.getElementById("lcaChart");
  if (!canvas || typeof Chart === "undefined") return;
  var ctx = canvas.getContext("2d");
  if (lcaChart) lcaChart.destroy();
  var isDark = document.documentElement.getAttribute("data-theme") === "dark";
  lcaChart = new Chart(ctx, {
    type: currentChartType,
    data: {
      labels: ["Manufacturing", "Transportation", "Use Phase", "End-of-Life"],
      datasets: [{
        data: [mfg, transport, use, eol],
        backgroundColor: ["#0f766e", "#0284c7", "#f59e0b", "#dc2626"],
        borderWidth: currentChartType === "doughnut" ? 3 : 0,
        borderColor: isDark ? "#1e293b" : "#ffffff"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { color: isDark ? "#e2e8f0" : "#334155" } },
        title: { display: true, text: "Carbon Footprint Breakdown", color: isDark ? "#f1f5f9" : "#1e293b" }
      },
      scales: currentChartType === "bar" ? {
        y: { beginAtZero: true },
        x: {}
      } : {}
    }
  });
}

function exportCSV() {
  var nameEl = document.getElementById("deviceName");
  var deviceName = nameEl && nameEl.value.trim() ? nameEl.value.trim() : "Device";
  var rows = [
    ["Metric", "Value"],
    ["Device", deviceName],
    ["Lifetime", getValue("lifetime")],
    ["Manufacturing", document.getElementById("manufacturingResult").textContent],
    ["Transportation", document.getElementById("transportResult").textContent],
    ["Use Phase", document.getElementById("useResult").textContent],
    ["End-of-Life", document.getElementById("eolResult").textContent],
    ["Total", document.getElementById("totalResult").textContent]
  ];
  var csv = rows.map(function (r) {
    return r.map(function (c) { return '"' + c + '"'; }).join(",");
  }).join("\n");
  var blob = new Blob([csv], { type: "text/csv" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "LCA_" + deviceName.replace(/\s+/g, "_") + ".csv";
  a.click();
  URL.revokeObjectURL(url);
}

function toggleTheme() {
  var isDark = document.documentElement.getAttribute("data-theme") === "dark";
  var next = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("lca-theme", next);
  var icon = document.querySelector(".theme-icon");
  if (icon) icon.textContent = next === "dark" ? "☀️" : "🌙";
  calculateLCA();
}

document.addEventListener("DOMContentLoaded", function () {
  var saved = localStorage.getItem("lca-theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  var icon = document.querySelector(".theme-icon");
  if (icon) icon.textContent = saved === "dark" ? "☀️" : "🌙";

  document.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("input", calculateLCA);
  });

  var deviceType = document.getElementById("deviceType");
  if (deviceType) {
    deviceType.addEventListener("change", function (e) {
      applyDevicePreset(e.target.value);
    });
  }

  var calcBtn = document.getElementById("calculateBtn");
  if (calcBtn) calcBtn.addEventListener("click", calculateLCA);
  var exportBtn = document.getElementById("exportBtn");
  if (exportBtn) exportBtn.addEventListener("click", exportCSV);
  var printBtn = document.getElementById("printBtn");
  if (printBtn) printBtn.addEventListener("click", function () { window.print(); });
  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  document.querySelectorAll(".chart-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".chart-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      currentChartType = btn.dataset.type;
      calculateLCA();
    });
  });

  calculateLCA();
});