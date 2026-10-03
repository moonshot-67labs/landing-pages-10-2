// Keep campaign and referral parameters when continuing to the existing store.
(() => {
  const button = document.getElementById("rsv-btn");
  if (!button) return;
  const target = new URL("https://moonshot.computer/#reserve");
  const query = new URLSearchParams(window.location.search);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gbraid", "wbraid", "fbclid", "ref"]) {
    const value = query.get(key);
    if (value) target.searchParams.set(key, value);
  }
  button.href = target.href;
  button.textContent = "Continue to pre-order";
})();
