document.querySelectorAll('[data-gallery]').forEach(gallery=>{
 const track=gallery.querySelector('.gallery-track');
 const slides=[...track.children];
 const prev=gallery.querySelector('[data-prev]');
 const next=gallery.querySelector('[data-next]');
 const count=gallery.querySelector('.gallery-counter');
 const index=()=>Math.max(0,Math.min(slides.length-1,Math.round(track.scrollLeft/track.clientWidth)));
 const update=()=>{const i=index();prev.disabled=i===0;next.disabled=i===slides.length-1;count.textContent=`${String(i+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;};
 const move=delta=>{track.scrollTo({left:(index()+delta)*track.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});};
 prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
 track.addEventListener('scroll',update,{passive:true});
 track.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();move(event.key==='ArrowRight'?1:-1);}});
 new ResizeObserver(update).observe(track);update();
});
