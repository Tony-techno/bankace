// ── Resources Module ───────────────────────────────

function initResources() {
  document.getElementById("res-sec").addEventListener("change", renderResources);
  document.getElementById("res-type").addEventListener("change", renderResources);
  renderResources();
}

function renderResources() {
  const secFilter  = document.getElementById("res-sec").value;
  const typeFilter = document.getElementById("res-type").value;

  const filtered = RESOURCES.filter(r =>
    (secFilter  === "all" || r.sec  === secFilter) &&
    (typeFilter === "all" || r.type === typeFilter)
  );

  if (filtered.length === 0) {
    document.getElementById("res-list").innerHTML = `
      <div style="text-align:center;padding:20px;color:var(--text-muted);font-size:13px;">
        No resources found for this filter. Try "All sections" or "All types".
      </div>`;
    return;
  }

  document.getElementById("res-list").innerHTML = filtered.map(r => `
    <div class="res-row">
      <div class="res-icon" style="background:${r.bg};">${r.icon}</div>
      <div class="res-meta">
        <div class="res-title">
          ${r.name}
          <span class="tag ${r.type === "yt" ? "tag-red" : "tag-blue"}" style="margin-left:6px;">
            ${r.type === "yt" ? "YouTube" : "Website"}
          </span>
        </div>
        <div class="res-desc">${r.desc}</div>
        <a class="res-link" href="${r.url}" target="_blank" rel="noopener noreferrer">
          Open resource <i class="ti ti-external-link" style="font-size:11px;"></i>
        </a>
      </div>
    </div>
  `).join("");
}
