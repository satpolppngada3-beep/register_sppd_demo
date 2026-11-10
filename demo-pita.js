/* demo-pita.js - pita "VERSI DEMO" (hanya ada di repo/proyek Vercel DEMO, bukan di aplikasi asli).
   Dipasang dengan 1 baris di index.html repo demo:  <script src="demo-pita.js" defer></script>  */
(function () {
  var css = '#demo-pita{position:fixed;top:0;left:0;right:0;z-index:2147483000;background:#d00000;color:#fff;font:600 13px/1.3 system-ui,Arial,sans-serif;'
    + 'text-align:center;padding:6px 10px;box-shadow:0 2px 6px rgba(0,0,0,.35)}#demo-pita b{background:#fff;color:#d00000;border-radius:4px;padding:1px 6px;margin:0 2px}'
    + 'body{padding-top:30px!important}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var d = document.createElement('div'); d.id = 'demo-pita';
  d.innerHTML = '&#9888; VERSI DEMO &mdash; data fiktif, direset otomatis setiap malam &nbsp;|&nbsp; Login: <b>demo</b> / <b>demo123</b>';
  document.body.appendChild(d);
})();
