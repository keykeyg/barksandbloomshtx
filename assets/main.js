document.getElementById('yr').textContent=new Date().getFullYear();
const b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
b&&b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
const f=document.getElementById('order-form');
if(f){const q=new URLSearchParams(location.search);
 if(q.get('line'))f.line.value=q.get('line');
 if(q.get('item'))[...f.item.options].forEach(o=>{if(o.text.startsWith(q.get('item')))f.item.value=o.value});
 const s=document.getElementById('form-status');
 f.addEventListener('submit',async e=>{e.preventDefault();const d=new FormData(f);
  const mail=()=>{let body='';d.forEach((v,k)=>{if(k!=='_gotcha'&&v)body+=k+': '+v+'\n'});
   location.href='mailto:hello@barksandbloomshtx.com?subject='+encodeURIComponent('Order request - '+(d.get('name')||''))+'&body='+encodeURIComponent(body)};
  if(f.action.includes('FORM_ID')){s.textContent='Opening your email app...';return mail()}
  try{const r=await fetch(f.action,{method:'POST',body:d,headers:{Accept:'application/json'}});
   if(r.ok){f.reset();s.textContent='Thank you! We will be in touch to confirm your order.'}else throw 0}
  catch{s.textContent='Could not send; opening email instead.';mail()}})}
