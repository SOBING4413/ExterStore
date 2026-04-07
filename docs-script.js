const links = [...document.querySelectorAll('aside a')];
const sections = [...document.querySelectorAll('article section')];

document.getElementById('docSearch').addEventListener('input', (e)=>{
  const q = e.target.value.toLowerCase();
  sections.forEach(sec=>{
    sec.style.display = sec.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
});

window.addEventListener('scroll', ()=>{
  let active = sections[0]?.id;
  sections.forEach(sec=>{ if(window.scrollY >= sec.offsetTop - 110) active = sec.id;});
  links.forEach(link=>link.classList.toggle('active', link.getAttribute('href') === `#${active}`));
});
