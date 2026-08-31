document.querySelectorAll('details').forEach(d=>{d.addEventListener('toggle',()=>{const s=d.querySelector('summary span');s.textContent=d.open?'−':'+';});});
