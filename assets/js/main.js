/* Studio di Geologia Tecnica Fedele — script unico, vanilla, senza dipendenze */
(function () {
  "use strict";

  /* riquadro neutro mostrato quando una foto non è ancora stata caricata */
  var PLACEHOLDER =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
        '<rect width="100" height="100" fill="#eee9df"/>' +
        '<g fill="none" stroke="#cdbf9f" stroke-width="3">' +
        '<rect x="30" y="34" width="40" height="30" rx="3"/>' +
        '<circle cx="50" cy="49" r="7"/><path d="M40 34l4-6h12l4 6"/>' +
        "</g></svg>"
    );

  /* anno corrente nel footer */
  var y = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = y; });

  /* menu di navigazione su mobile */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* immagini opzionali non ancora fornite: sostituisci l'icona rotta con un riquadro neutro */
  function setPlaceholder(img) {
    if (img.getAttribute("src") !== PLACEHOLDER) img.src = PLACEHOLDER;
    img.classList.add("is-placeholder");
  }
  /* Foto non ancora fornite: al posto dell'icona di immagine rotta mostra un
     riquadro neutro. (Finché i file mancano, il browser registra dei 404 in
     console: è atteso e sparisce quando le foto vengono aggiunte.) */
  document.querySelectorAll("figure.photo img, .gallery-item img, [data-optional-img]").forEach(function (img) {
    img.addEventListener("error", function () { setPlaceholder(img); });
    if (img.complete && img.naturalWidth === 0) setPlaceholder(img);
  });

  /* lightbox della galleria */
  var lb = document.getElementById("lightbox");
  if (lb) {
    var lbImg = lb.querySelector(".lb-img");
    var lbCap = lb.querySelector(".lb-cap");
    var closeBtn = lb.querySelector(".lightbox-close");
    var lastFocus = null;

    lbImg.addEventListener("error", function () {
      if (lbImg.getAttribute("src") !== PLACEHOLDER) lbImg.src = PLACEHOLDER;
    });

    function openLb(src, caption) {
      lastFocus = document.activeElement;
      lbImg.setAttribute("src", src || PLACEHOLDER);
      lbCap.innerHTML = caption || "";
      lb.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }
    function closeLb() {
      lb.hidden = true;
      document.body.style.overflow = "";
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var img = btn.querySelector("img");
        var full = btn.getAttribute("data-full");
        /* se la miniatura è ancora un riquadro neutro, non chiedere il file grande */
        if (img && img.classList.contains("is-placeholder")) full = PLACEHOLDER;
        openLb(full || (img && img.getAttribute("src")) || "", btn.getAttribute("data-caption") || "");
      });
    });
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lightbox-close")) closeLb();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lb.hidden) closeLb();
    });
  }

  /* stato di invio del form di contatto (progressive enhancement) */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function () {
      var btn = form.querySelector("button[type=submit]");
      if (btn) { btn.disabled = true; btn.textContent = "Invio in corso…"; }
    });
  }
})();
