const body=document.body;
const toggle=document.getElementById("themeToggle");
const savedTheme=localStorage.getItem("portfolio-theme");
if(savedTheme==="light") body.classList.add("light");
toggle.addEventListener("click",()=>{body.classList.toggle("light");localStorage.setItem("portfolio-theme",body.classList.contains("light")?"light":"dark")});

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      if(entry.target.dataset.count&&!entry.target.dataset.done){
        const target=Number(entry.target.dataset.count);let value=0;
        const step=Math.max(1,Math.ceil(target/35));
        const timer=setInterval(()=>{value+=step;if(value>=target){value=target;clearInterval(timer)}entry.target.textContent=value},30);
        entry.target.dataset.done="true";
      }
    }
  })
},{threshold:.15});
document.querySelectorAll(".reveal,[data-count]").forEach(el=>observer.observe(el));

const panels={
 data:{label:"DATA",title:"Analytics",detail:"SQL · Python · Power BI"},
 risk:{label:"RISK",title:"Domain expertise",detail:"Financial Crime · Risk · Operations"},
 ai:{label:"AI",title:"AI & Automation",detail:"GenAI · Prompting · AI Applications"}
};
const panel=document.getElementById("orbitPanel");
document.querySelectorAll(".node").forEach(node=>{
  node.addEventListener("click",()=>{
    document.querySelectorAll(".node").forEach(n=>n.classList.remove("active"));
    node.classList.add("active");
    const p=panels[node.dataset.panel];
    panel.querySelector(".panel-kicker").textContent=p.label;
    panel.querySelector("strong").textContent=p.title;
    panel.querySelector("span").textContent=p.detail;
  });
});

document.querySelectorAll(".skill-row").forEach(row=>{
  row.addEventListener("click",()=>{
    document.querySelectorAll(".skill-row").forEach(r=>r.classList.remove("active"));
    row.classList.add("active");
  });
});
