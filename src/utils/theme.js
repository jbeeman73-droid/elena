export function setTheme(name) {
  const oldLink = document.getElementById("theme-style");
  if (oldLink) oldLink.remove();

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.id = "theme-style";
  link.href = `/src/themes/${name}.css`;

  document.head.appendChild(link);

  localStorage.setItem("theme", name);
}

export function loadSavedTheme() {
  const saved = localStorage.getItem("theme") || "beach";
  setTheme(saved);
}