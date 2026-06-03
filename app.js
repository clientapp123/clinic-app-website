/* Clinic App marketing site — interactions
   Mirrors the behaviour of the React prototype (Nav scroll, RevenueCalc, FAQ). */
(function () {
  "use strict";

  // ---- Render Lucide icons ----
  function drawIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  // ---- Nav: blur + hairline border once scrolled past 12px ----
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 12) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Revenue calculator ----
  var membersRange = document.getElementById("membersRange");
  var membersOut = document.getElementById("membersOut");
  var memberPresets = document.getElementById("memberPresets");
  var pricePresets = document.getElementById("pricePresets");
  var mrrEl = document.getElementById("calcMrr");
  var arrEl = document.getElementById("calcArr");
  var priceEl = document.getElementById("calcPrice");
  var membersLabel = document.getElementById("calcMembersLabel");

  var members = 100;
  var price = 99;

  function gbp(n) { return "£" + n.toLocaleString("en-GB"); }

  function render() {
    var mrr = members * price;
    membersOut.textContent = members;
    mrrEl.textContent = gbp(mrr);
    arrEl.textContent = gbp(mrr * 12);
    priceEl.textContent = price;
    membersLabel.textContent = members + " MEMBERS";

    // sync member preset active states (active only on exact preset match)
    memberPresets.querySelectorAll("button").forEach(function (b) {
      b.classList.toggle("is-active", Number(b.dataset.members) === members);
    });
    pricePresets.querySelectorAll("button").forEach(function (b) {
      b.classList.toggle("is-active", Number(b.dataset.price) === price);
    });
  }

  membersRange.addEventListener("input", function (e) {
    members = Number(e.target.value);
    render();
  });
  memberPresets.addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    members = Number(btn.dataset.members);
    membersRange.value = members;
    render();
  });
  pricePresets.addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    price = Number(btn.dataset.price);
    render();
  });
  render();

  // ---- FAQ accordion (single-open, toggle to close) ----
  var faq = document.getElementById("faq");
  faq.addEventListener("click", function (e) {
    var btn = e.target.closest(".acc-item__btn");
    if (!btn) return;
    var item = btn.parentElement;
    var isOpen = item.classList.contains("is-open");

    faq.querySelectorAll(".acc-item").forEach(function (it) {
      it.classList.remove("is-open");
      var b = it.querySelector(".acc-item__btn");
      b.setAttribute("aria-expanded", "false");
      var ico = it.querySelector(".acc-item__ico");
      if (ico) ico.setAttribute("data-lucide", "plus");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      var ico = item.querySelector(".acc-item__ico");
      if (ico) ico.setAttribute("data-lucide", "minus");
    }
    drawIcons();
  });

  // initial icon paint (and re-run after fonts settle just in case)
  drawIcons();
  window.addEventListener("load", drawIcons);
})();
