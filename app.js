(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const nodes = document.querySelector('#nodes');
  const map = document.querySelector('#map');
  const svg = document.querySelector('#connections');
  const panel = document.querySelector('#node-detail');
  let selected = 1;
  let filter = 'Tutti';
  const short = ['E-commerce','Buying','Strategia B2B','Performance media','Piano editoriale','Automazioni','Data & dashboard','Outlet / Veepee','Controllo economico','Hero product','Marketplace','Fotografia prodotto','Store locator','Logistica','Leadership','Impatto trasversale','Visione'];
  const positions = [[12,12],[37,10],[63,12],[87,11],[23,32],[50,31],[77,32],[12,53],[37,53],[63,52],[87,53],[23,73],[50,73],[77,73],[12,91],[44,92],[82,92]];
  const pad = n => String(n).padStart(2,'0');
  data.forEach(d => {
    const b = document.createElement('button');
    b.className = 'node'; b.id = `node-${d.id}`; b.dataset.id = d.id;
    b.setAttribute('aria-label', `${pad(d.id)} — ${d.title}`);
    b.setAttribute('aria-controls','node-detail');
    b.innerHTML = `<small>${pad(d.id)} / ${d.group.toUpperCase()}</small>${short[d.id-1]}`;
    b.addEventListener('click', () => select(d.id)); nodes.append(b);
  });
  function layout() {
    const mobile = matchMedia('(max-width:600px)').matches;
    const visible = data.filter(d => filter === 'Tutti' || d.group === filter);
    visible.forEach((d,i) => {
      let p;
      if (mobile) {const count = Math.ceil(visible.length/2);p = [i%2 ? 75:25, 7 + Math.floor(i/2)*(86/Math.max(count-1,1))];}
      else if (filter==='Tutti') p=positions[d.id-1];
      else p=[22+(i%3)*28,22+Math.floor(i/3)*45];
      const el=document.getElementById(`node-${d.id}`); el.style.left=p[0]+'%';el.style.top=p[1]+'%';
    });
    svg.replaceChildren();
    const d = data[selected-1];
    const a = document.getElementById(`node-${selected}`);
    const rect = map.getBoundingClientRect();
    d.links.forEach(id => {
      const b=document.getElementById(`node-${id}`); if(b.hidden || a.hidden) return;
      const ar=a.getBoundingClientRect(),br=b.getBoundingClientRect();
      const line=document.createElementNS('http://www.w3.org/2000/svg','line');
      Object.entries({x1:ar.left+ar.width/2-rect.left,y1:ar.top+ar.height/2-rect.top,x2:br.left+br.width/2-rect.left,y2:br.top+br.height/2-rect.top}).forEach(([k,v])=>line.setAttribute(k,v));svg.append(line);
    });
  }
  function select(id) {
    selected=id; const d=data[id-1];
    data.forEach(item => {const el=document.getElementById(`node-${item.id}`);el.setAttribute('aria-pressed',String(item.id===id));el.classList.toggle('connected',d.links.includes(item.id));});
    panel.innerHTML=`<div class="node-top"><span>${pad(id)} / ${d.group.toUpperCase()}</span><span>${d.status.toUpperCase()}</span></div><h3>${d.headline}</h3><p>${d.result}</p><div class="node-links">CONNESSIONI<br>${d.links.map(n=>`<button data-related="${n}" aria-label="Esplora ${data[n-1].title}">${pad(n)} ↗ ${short[n-1]}</button>`).join('')}</div><a class="text-link open-area" href="#ambito-${id}">Contesto e azione <span>↗</span></a>`;
    layout();
  }
  function setFilter(value) {
    filter=value;
    document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===value)));
    data.forEach(d=>document.getElementById(`node-${d.id}`).hidden=value!=='Tutti'&&d.group!==value);
    if (document.getElementById(`node-${selected}`).hidden) selected=data.find(d=>d.group===value).id;
    select(selected);
  }
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
  panel.addEventListener('click',e=>{const b=e.target.closest('[data-related]');if(!b)return;const id=Number(b.dataset.related);if(document.getElementById(`node-${id}`).hidden)setFilter('Tutti');select(id);document.getElementById(`node-${id}`).focus({preventScroll:true});});
  function reveal(hash) {if(!/^#ambito-\d+$/.test(hash))return;const target=document.querySelector(hash);if(target)target.open=true;}
  document.addEventListener('click',e=>{const a=e.target.closest('.open-area');if(a)reveal(a.hash);});
  window.addEventListener('hashchange',()=>reveal(location.hash));
  window.addEventListener('resize',layout);
  new ResizeObserver(layout).observe(map);
  reveal(location.hash);select(1);
})();
