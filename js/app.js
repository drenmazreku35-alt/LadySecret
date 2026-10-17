
const DEFAULT_PRODUCTS=[
{id:1,name:"Milano Tote Nude",cat:"bags",price:49,old:65,rating:5,tag:"-25%",img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80&auto=format&fit=crop",desc:"Çanta ikonë tote në nude mat — lëkurë premium, ndarje e brendshme me zinxhir, rrip i rregullueshëm. Perfekte për zyrë & darkë."},
{id:2,name:"Stiletto Noir 10cm",cat:"heels",price:39,old:52,rating:5,tag:"BESTSELLER",img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80&auto=format&fit=crop",desc:"Take stiletto të zeza klasike 10cm me majë të hollë. Shputë e butë anti-rrëshqitje, super komode për orë të gjata."},
{id:3,name:"Golden Hour Sandals",cat:"sandals",price:34,old:44,rating:4,tag:"NEW",img:"https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=80&auto=format&fit=crop",desc:"Sandale ari elegante me rrip të hollë rreth kyçit. Shkëlqim luksoz për dasma & mbrëmje verore."},
{id:4,name:"Paris Mini Bag Black",cat:"bags",price:42,old:null,rating:5,tag:"NEW",img:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80&auto=format&fit=crop",desc:"Mini çantë e zezë me zinxhir ari — modeli më i kërkuar në Instagram. E vogël jashtë, surprizuese brenda."},
{id:5,name:"Velvet Boots Camel",cat:"boots",price:59,old:79,rating:5,tag:"-25%",img:"https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&q=80&auto=format&fit=crop",desc:"Çizme camel mbi kyç me takë të trashë 7cm. Material velvet premium, të ngrohta & stabile për dimër."},
{id:6,name:"Bianca White Heels",cat:"heels",price:37,old:null,rating:4,tag:"",img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80&auto=format&fit=crop",desc:"Taka të bardha me rrip elegant — zgjedhja e nuseve & mbrëmjeve. Duken 3x më shtrenjtë se çmimi."},
{id:7,name:"Roma Shopper Beige",cat:"bags",price:45,old:58,rating:4,tag:"-22%",img:"https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&q=80&auto=format&fit=crop",desc:"Shopper bezhë XL për përditshmëri — nxë laptop, portofol & gjithçka. Qepje italiane, doreza të forta."},
{id:8,name:"Crystal Evening Heels",cat:"heels",price:46,old:null,rating:5,tag:"LIMITED",img:"https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=600&q=80&auto=format&fit=crop",desc:"Taka mbrëmjeje me detaje kristali. Për momente kur duhet të shkëlqesh më shumë se dritat."},
{id:9,name:"Comfy Street Sneaker",cat:"sandals",price:29,old:39,rating:4,tag:"-26%",img:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80&auto=format&fit=crop",desc:"Atlete të bardha minimaliste për stil casual-luksoz. Shputë memory-foam, zero lodhje."},
{id:10,name:"Diva Clutch Gold",cat:"bags",price:32,old:null,rating:5,tag:"",img:"https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80&auto=format&fit=crop",desc:"Clutch ari për darka & evente. Zinxhir i fshehur + rrip supe, shkëlqen në çdo foto."},
{id:11,name:"Knee-High Noir Boots",cat:"boots",price:69,old:89,rating:5,tag:"HOT",img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80&auto=format&fit=crop",desc:"Çizme të gjata të zeza deri mbi gju — elegancë absolute. Modeli viral i TikTok & Instagram."},
{id:12,name:"Nude Comfort Pumps",cat:"heels",price:36,old:46,rating:4,tag:"-22%",img:"https://images.unsplash.com/photo-1534653299134-96a171b61581?w=600&q=80&auto=format&fit=crop",desc:"Pumps nude all-day-comfort me takë 6cm. Ngjyra që zgjat këmbën, rehati që zgjat ditën."}
];
let PRODUCTS=[];
try{PRODUCTS=JSON.parse(localStorage.getItem('ls_products')||'null')||[...DEFAULT_PRODUCTS];}catch(e){PRODUCTS=[...DEFAULT_PRODUCTS];}
function persistProducts(){try{localStorage.setItem('ls_products',JSON.stringify(PRODUCTS));}catch(e){toast('Foto shumë e madhe — provo foto më të vogël ose URL');}}
const SIZES={"bags":["One Size"],"heels":["36","37","38","39","40","41"],"sandals":["36","37","38","39","40","41"],"boots":["36","37","38","39","40","41"]};
let cart=JSON.parse(localStorage.getItem('ls_cart')||'[]');
let wishlist=new Set(JSON.parse(localStorage.getItem('ls_wish')||'[]'));
let curCat='all',curSearch='',curSort='feat',modalId=null,modalSize=null,modalQty=1,lang='sq';

const I18N={
sq:{nav_home:"Ballina",nav_col:"Koleksionet",nav_shop:"Dyqani",nav_about:"Rreth Nesh",nav_contact:"Kontakti",hero_eye:"Prizren • 21.5K ndjekës në Instagram",hero_t1:"Elegancë që",hero_t2:"lë gjurmë.",hero_p:"Çanta & këpucë premium për femra — të përzgjedhura me stil italian, të dashura nga mbi 21,000 kliente në Kosovë, Shqipëri e Maqedoni.",hero_b1:"Shiko Koleksionin",hero_r:"Vlerësimi",hero_d:"Dërgesa KS",hero_badge:"Koleksioni Vjeshtë",col_t1:"Zgjidh universin",col_t2:"tënd",col_p:"Tre linja ikonike, një stil: ai i një zonje që nuk kalon kurrë pa u vënë re.",shop_t1:"Bestsellerat",shop_t2:"e javës",shop_p:"Porosit direkt online — pagesa me доставë (cash on delivery). Kliko produktin për detaje."},
en:{nav_home:"Home",nav_col:"Collections",nav_shop:"Shop",nav_about:"About",nav_contact:"Contact",hero_eye:"Prizren • 21.5K followers on Instagram",hero_t1:"Elegance that",hero_t2:"leaves a mark.",hero_p:"Premium bags & shoes for women — Italian-inspired style, loved by 21,000+ clients in Kosovo, Albania & Macedonia.",hero_b1:"View Collection",hero_r:"Rating",hero_d:"KS Delivery",hero_badge:"Fall Collection",col_t1:"Choose your",col_t2:"universe",col_p:"Three iconic lines, one style: that of a lady who never goes unnoticed.",shop_t1:"This week's",shop_t2:"bestsellers",shop_p:"Order directly online — cash on delivery. Click a product for details."}
};
function setLang(l){lang=l;document.documentElement.lang=l;var t=document.getElementById('langTag');if(t)t.textContent=l.toUpperCase();document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(I18N[l][k])el.textContent=I18N[l][k];});}
document.getElementById('langBtn').onclick=function(){setLang(lang==='sq'?'en':'sq');toast(lang==='sq'?'Gjuha: Shqip':'Language: English');};

function stars(n){return '★'.repeat(n)+'☆'.repeat(5-n);}
function render(){
  let list=PRODUCTS.filter(p=>(curCat==='all'||p.cat===curCat)&&(p.name.toLowerCase().includes(curSearch)));
  if(curSort==='low')list=[...list].sort((a,b)=>a.price-b.price);
  if(curSort==='high')list=[...list].sort((a,b)=>b.price-a.price);
  if(curSort==='rating')list=[...list].sort((a,b)=>b.rating-a.rating);
  const g=document.getElementById('grid');
  if(!list.length){g.innerHTML='<div class="empty" style="grid-column:1/-1"><i class="fa-solid fa-magnifying-glass"></i>Nuk u gjet asnjë produkt. Provo kërkim tjetër.</div>';return;}
  g.innerHTML=list.map(p=>`
  <div class="product">
    <div class="p-img" onclick="openProduct(${p.id})" style="cursor:pointer">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      ${p.tag?`<span class="badge ${p.tag==='NEW'?'new':''}">${p.tag}</span>`:''}
      <button class="wish ${wishlist.has(p.id)?'loved':''}" onclick="event.stopPropagation();toggleWish(${p.id})"><i class="fa-${wishlist.has(p.id)?'solid':'regular'} fa-heart"></i></button>
      <div class="p-actions"><button class="add" onclick="event.stopPropagation();quickAdd(${p.id})">Shto +</button><button class="view" onclick="event.stopPropagation();openProduct(${p.id})">Shiko</button></div>
    </div>
    <div class="p-info"><small>${catName(p.cat)}</small><h3 onclick="openProduct(${p.id})" style="cursor:pointer">${p.name}</h3>
    <div class="stars">${stars(p.rating)} <span style="color:#777">(${p.rating}.0)</span></div>
    <div class="p-price"><b>${p.price.toFixed(2)} €</b>${p.old?`<s>${p.old.toFixed(2)}€</s><i>-${Math.round((1-p.price/p.old)*100)}%</i>`:''}</div></div>
  </div>`).join('');
}
function catName(c){return {bags:'Çanta',heels:'Taka',sandals:'Sandale',boots:'Çizme'}[c]||c;}
document.getElementById('filters').addEventListener('click',e=>{if(e.target.dataset.cat){curCat=e.target.dataset.cat;document.querySelectorAll('.f-btn').forEach(b=>b.classList.toggle('on',b===e.target));render();}});
document.getElementById('search').addEventListener('input',e=>{curSearch=e.target.value.toLowerCase();render();});
document.getElementById('sort').addEventListener('change',e=>{curSort=e.target.value;render();});
function filterAndGo(c){curCat=c;document.querySelectorAll('.f-btn').forEach(b=>b.classList.toggle('on',b.dataset.cat===c));render();document.getElementById('shop').scrollIntoView({behavior:'smooth'});}
function scrollToShop(){document.getElementById('shop').scrollIntoView({behavior:'smooth'});}

function toggleWish(id){wishlist.has(id)?wishlist.delete(id):wishlist.add(id);localStorage.setItem('ls_wish',JSON.stringify([...wishlist]));render();updateBadges();toast(wishlist.has(id)?'U shtua në wishlist ♥':'U hoq nga wishlist');}
document.getElementById('wishBtn').onclick=()=>{if(!wishlist.size){toast('Wishlist-i juaj është bosh — kliko zemrën ♥');return;}curCat='all';curSearch='';document.getElementById('search').value='';render();const first=[...wishlist][0];openProduct(first);};

function save(){localStorage.setItem('ls_cart',JSON.stringify(cart));updateBadges();renderCart();}
function updateBadges(){const n=cart.reduce((s,i)=>s+i.qty,0);document.getElementById('cartCount').textContent=n;document.getElementById('drawerCount').textContent=`(${n})`;const w=document.getElementById('wishCount');w.style.display=wishlist.size?'grid':'none';w.textContent=wishlist.size;}
function quickAdd(id){const p=PRODUCTS.find(x=>x.id===id);const size=SIZES[p.cat][0];const ex=cart.find(i=>i.id===id&&i.size===size);ex?ex.qty++:cart.push({id,size,qty:1});save();toast(p.name+' u shtua në shportë ✓');toggleCart(true);}
function openProduct(id){const p=PRODUCTS.find(x=>x.id===id);modalId=id;modalQty=1;modalSize=SIZES[p.cat][0];document.getElementById('mImg').src=p.img;document.getElementById('mCat').textContent=catName(p.cat)+(p.tag?' • '+p.tag:'');document.getElementById('mName').textContent=p.name;document.getElementById('mStars').textContent=stars(p.rating)+'  •  120+ reviews';document.getElementById('mPrice').textContent=p.price.toFixed(2)+' €';document.getElementById('mOld').textContent=p.old?p.old.toFixed(2)+' €':'';document.getElementById('mDesc').textContent=p.desc;document.getElementById('mQty').textContent='1';document.getElementById('mSizes').innerHTML=SIZES[p.cat].map((s,i)=>`<button class="${i===0?'on':''}" onclick="pickSize(this,'${s}')">${s}</button>`).join('');show('productModal');}
function pickSize(btn,s){modalSize=s;document.querySelectorAll('#mSizes button').forEach(b=>b.classList.remove('on'));btn.classList.add('on');}
function mQtyChange(d){modalQty=Math.max(1,Math.min(9,modalQty+d));document.getElementById('mQty').textContent=modalQty;}
function addFromModal(){const ex=cart.find(i=>i.id===modalId&&i.size===modalSize);ex?ex.qty+=modalQty:cart.push({id:modalId,size:modalSize,qty:modalQty});save();closeAll();toast('U shtua në shportë ✓');toggleCart(true);}

function renderCart(){
  const box=document.getElementById('cartItems');
  if(!cart.length){box.innerHTML='<div class="empty"><i class="fa-solid fa-bag-shopping"></i><b>Shporta është bosh</b><br>Zbulo koleksionin luksoz.</div>';}
  else box.innerHTML=cart.map((i,idx)=>{const p=PRODUCTS.find(x=>x.id===i.id);return `<div class="cart-item"><img src="${p.img}"><div><h4>${p.name}</h4><small>${catName(p.cat)} • Nr: ${i.size}</small><div class="qty"><button onclick="chQty(${idx},-1)">−</button><b>${i.qty}</b><button onclick="chQty(${idx},1)">+</button></div><small style="color:#fff">${(p.price*i.qty).toFixed(2)} €</small></div><button class="remove" onclick="rmItem(${idx})"><i class="fa-solid fa-trash"></i></button></div>`;}).join('');
  const sub=cart.reduce((s,i)=>s+PRODUCTS.find(x=>x.id===i.id).price*i.qty,0);
  const ship=sub===0?0:(sub>=80?0:2.5);
  document.getElementById('subTotal').textContent=sub.toFixed(2)+' €';
  document.getElementById('shipCost').textContent=sub===0?'—':(ship===0?'FALAS':ship.toFixed(2)+' €');
  document.getElementById('grandTotal').textContent=(sub+ship).toFixed(2)+' €';
}
function chQty(idx,d){cart[idx].qty+=d;if(cart[idx].qty<1)cart.splice(idx,1);save();}
function rmItem(idx){cart.splice(idx,1);save();}
function toggleCart(open){document.getElementById('cartDrawer').classList.toggle('open',open);document.getElementById('overlay').classList.toggle('show',open||document.querySelector('.modal.show'));if(open)renderCart();}
function show(id){closeAll(true);document.getElementById(id).classList.add('show');document.getElementById('overlay').classList.add('show');}
function closeAll(keep){document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show'));document.getElementById('cartDrawer').classList.remove('open');if(!keep)document.getElementById('overlay').classList.remove('show');}
document.getElementById('cartBtn').onclick=()=>toggleCart(true);

function openCheckout(){if(!cart.length){toast('Shporta është bosh');return;}closeAll(true);show('checkoutModal');}
document.getElementById('orderForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('oName').value.trim(),phone=document.getElementById('oPhone').value.trim(),city=document.getElementById('oCity').value,addr=document.getElementById('oAddr').value.trim(),note=document.getElementById('oNote').value.trim(),pay=document.getElementById('oPay').value;
  if(!name||!phone||!addr){toast('Plotëso emrin, telefonin & adresën');return;}
  const sub=cart.reduce((s,i)=>s+PRODUCTS.find(x=>x.id===i.id).price*i.qty,0);
  const lines=cart.map(i=>{const p=PRODUCTS.find(x=>x.id===i.id);return `• ${p.name} (Nr:${i.size}) x${i.qty} — ${(p.price*i.qty).toFixed(2)}€`;}).join('\n');
  const msg=`Përshëndetje LADY'S SECRET! Dua të porosis:%0A${encodeURIComponent(lines)}%0A%0ATotali: ${(sub+(sub>=80?0:2.5)).toFixed(2)}€%0AEmri: ${encodeURIComponent(name)}%0ATel: ${encodeURIComponent(phone)}%0AQyteti: ${encodeURIComponent(city)}%0AAdresa: ${encodeURIComponent(addr)}%0APagesa: ${encodeURIComponent(pay)}%0A${note?'Shënim: '+encodeURIComponent(note):''}`;
  // prettify: build clean then open
  const clean=`Përshëndetje LADY'S SECRET! Dua të porosis:\n${cart.map(i=>{const p=PRODUCTS.find(x=>x.id===i.id);return `• ${p.name} (Nr:${i.size}) x${i.qty} — ${(p.price*i.qty).toFixed(2)}€`;}).join('\n')}\n\nTotali: ${(sub+(sub>=80?0:2.5)).toFixed(2)}€\nEmri: ${name}\nTel: ${phone}\nQyteti: ${city}\nAdresa: ${addr}\nPagesa: ${pay}${note?'\nShënim: '+note:''}`;
  window.open('https://wa.me/38344000000?text='+encodeURIComponent(clean),'_blank');
  cart=[];save();closeAll();toast('Porosia u dërgua! Do ju kontaktojmë së shpejti ♥');
});
function orderViaInstagram(){if(!cart.length){toast('Shporta është bosh');return;}const txt=cart.map(i=>{const p=PRODUCTS.find(x=>x.id===i.id);return `${p.name} x${i.qty}`;}).join(', ');navigator.clipboard?.writeText('Përshëndetje! Dua: '+txt).catch(()=>{});window.open('https://ig.me/m/ladysecret_ks','_blank');toast('Lista u kopjua — ngjite në DM!');}

const INFOS={shipping:{k:"Dërgesa & Pagesa",t:"Dërgesë e shpejtë, pagesë në dorë.",b:"• Kosovë: 24-48h — 2.50€ (FALAS mbi 80€)\n• Shqipëri & Maqedoni: 3-5 ditë — 5€\n• Pagesa: Cash on Delivery / Transfer bankar\n• Çdo pako kontrollohet & ambalazhohet si dhuratë."},return:{k:"Këmbimi",t:"Këmbim i lehtë 48h.",b:"• Këmbim falas për numër/model brenda 48h\n• Produkti duhet i pa-veshur me kuti\n• Na shkruaj në Instagram DM me nr. porosie\n• Refund vetëm nëse produkti ka defekt."},size:{k:"Numrat",t:"Si të zgjedhësh numrin e duhur.",b:"• Taka & çizme: merr numrin tënd standard (36-41)\n• Nëse je mes dy numrave → merr më të madhin\n• Sandalet vijnë pak të vogla → +1 nr sugjerohet\n• Na dërgo gjatësinë e shputës në DM për këshillë."},faq:{k:"FAQ",t:"Pyetje të shpeshta.",b:"• A janë origjinale fotot? Po, 100% fotot tona reale.\n• A paguaj online? Jo — paguan kur i merr.\n• Sa zgjat dërgesa? KS 1-2 ditë, AL/MK 3-5 ditë.\n• Ku jeni? Prizren — dërgojmë kudo."}};
function openInfo(k){document.getElementById('iKicker').textContent=INFOS[k].k;document.getElementById('iTitle').textContent=INFOS[k].t;document.getElementById('iBody').textContent=INFOS[k].b;show('infoModal');}

document.getElementById('newsForm').addEventListener('submit',e=>{e.preventDefault();const em=document.getElementById('newsEmail').value;localStorage.setItem('ls_news',em);document.getElementById('newsEmail').value='';toast('Mirë se erdhe në Klubin VIP! Kodi: WELCOME15 ♥');});

let toastT;function toast(m){document.getElementById('toastMsg').textContent=m;document.getElementById('toast').classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>document.getElementById('toast').classList.remove('show'),2600);}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll();});

// ===== INTRO =====
var introDone=false;
function enterSite(e){if(e&&e.stopPropagation)e.stopPropagation();if(introDone)return;introDone=true;var intro=document.getElementById('intro');if(intro){intro.classList.add('hide');setTimeout(function(){if(intro.parentNode)intro.parentNode.removeChild(intro);},900);}if(document.body)document.body.style.overflow='';}
(function(){var intro=document.getElementById('intro');if(!intro)return;document.body.style.overflow='hidden';})();
// ===== ADMIN PANEL =====
let editingId=null,uploadedImg='';
function openAdmin(){closeAll(true);document.getElementById('adminLogin').style.display=(sessionStorage.getItem('ls_admin')==='1')?'none':'block';document.getElementById('adminPanel').style.display=(sessionStorage.getItem('ls_admin')==='1')?'block':'none';if(sessionStorage.getItem('ls_admin')==='1')renderAdminList();show('adminModal');}
document.getElementById('adminLoginForm').addEventListener('submit',e=>{e.preventDefault();const v=document.getElementById('adminPass').value;if(v==='drenidreni123'){sessionStorage.setItem('ls_admin','1');document.getElementById('adminLogin').style.display='none';document.getElementById('adminPanel').style.display='block';renderAdminList();toast('Mirë se erdhe, Lady ♥');}else toast('Fjalëkalimi gabim');});
document.getElementById('fFile').addEventListener('change',e=>{
  const f=e.target.files[0];if(!f)return;
  const reader=new FileReader();
  reader.onload=ev=>{
    const img=new Image();
    img.onload=()=>{
      const canvas=document.createElement('canvas');const max=800;let w=img.width,h=img.height;
      if(w>max){h=h*max/w;w=max;}
      canvas.width=w;canvas.height=h;canvas.getContext('2d').drawImage(img,0,0,w,h);
      uploadedImg=canvas.toDataURL('image/jpeg',0.82);
      document.getElementById('uploadPreview').innerHTML=`<img src="${uploadedImg}" style="width:100%;border:1px solid var(--gold)">`;
      document.getElementById('fImgUrl').value='';
      toast('Foto u ngarkua ✓');
    };
    img.src=ev.target.result;
  };
  reader.readAsDataURL(f);
});
document.getElementById('productForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('fName').value.trim();
  const price=parseFloat(document.getElementById('fPrice').value);
  if(!name||!price){toast('Emri & çmimi obligativ');return;}
  const img=document.getElementById('fImgUrl').value.trim()||uploadedImg||'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80&auto=format&fit=crop';
  const data={name,cat:document.getElementById('fCat').value,rating:parseInt(document.getElementById('fRating').value),price,old:parseFloat(document.getElementById('fOld').value)||null,tag:document.getElementById('fTag').value.trim(),img,desc:document.getElementById('fDesc').value.trim()||name};
  if(editingId){const p=PRODUCTS.find(x=>x.id===editingId);Object.assign(p,data);toast('Produkti u përditësua ✓');}
  else{const nid=PRODUCTS.length?Math.max(...PRODUCTS.map(p=>p.id))+1:1;PRODUCTS.unshift({id:nid,...data});toast('Produkti u publikua ✓');}
  persistProducts();render();renderAdminList();resetProductForm();
});
function resetProductForm(){editingId=null;uploadedImg='';document.getElementById('productForm').reset();document.getElementById('uploadPreview').innerHTML='';document.getElementById('saveProductBtn').innerHTML='<i class="fa-solid fa-plus"></i> Publiko Produktin';}
function renderAdminList(){
  const box=document.getElementById('adminList');
  box.innerHTML='<b style="letter-spacing:2px;font-size:12px;color:var(--gold)">PRODUKTET LIVE ('+PRODUCTS.length+')</b>'+PRODUCTS.map(p=>`<div class="admin-item"><img src="${p.img}"><div><b>${p.name}</b><small>${catName(p.cat)} • ${p.price.toFixed(2)}€ ${p.tag?'• '+p.tag:''}</small></div><div class="row"><button class="mini-btn" onclick="editProduct(${p.id})">Edit</button><button class="mini-btn danger" onclick="deleteProduct(${p.id})">X</button></div></div>`).join('');
}
function editProduct(id){const p=PRODUCTS.find(x=>x.id===id);if(!p)return;editingId=id;document.getElementById('fName').value=p.name;document.getElementById('fCat').value=p.cat;document.getElementById('fRating').value=String(p.rating);document.getElementById('fPrice').value=p.price;document.getElementById('fOld').value=p.old||'';document.getElementById('fTag').value=p.tag||'';document.getElementById('fImgUrl').value=p.img.startsWith('data:')?'':p.img;uploadedImg=p.img.startsWith('data:')?p.img:'';document.getElementById('fDesc').value=p.desc||'';document.getElementById('uploadPreview').innerHTML=`<img src="${p.img}" style="width:100%;border:1px solid var(--gold)">`;document.getElementById('saveProductBtn').innerHTML='<i class="fa-solid fa-save"></i> Ruaj Ndryshimet';window.scrollTo(0,0);document.querySelector('#adminModal .modal-box').scrollTop=0;}
function deleteProduct(id){if(!confirm('Fshij këtë produkt?'))return;PRODUCTS=PRODUCTS.filter(p=>p.id!==id);persistProducts();render();renderAdminList();toast('Produkti u fshi');}
function resetShop(){if(!confirm('Rikthe 12 produktet origjinale?'))return;PRODUCTS=[...DEFAULT_PRODUCTS];persistProducts();render();renderAdminList();}
function adminLogout(){sessionStorage.removeItem('ls_admin');closeAll();toast('U çkyçe. Herën tjetër duhet fjalëkalimi.');}
function exportProducts(){const blob=new Blob([JSON.stringify(PRODUCTS,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ladysecret-products.json';a.click();}

// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

render();updateBadges();renderCart();
// secret admin access: add #admin to URL or triple-click the logo
(function(){var logos=document.querySelectorAll('.logo');logos.forEach(function(l){var n=0,t=0;l.addEventListener('click',function(){var now=Date.now();n=(now-t<1200)?n+1:1;t=now;if(n>=5){n=0;openAdmin();}});});function checkHash(){if(location.hash==='#admin')openAdmin();}checkHash();window.addEventListener('hashchange',checkHash);var buf='';document.addEventListener('keydown',function(e){if(e.key&&e.key.length===1){buf=(buf+e.key.toLowerCase()).slice(-8);if(buf.indexOf('lady')!==-1){buf='';openAdmin();}}});})();
