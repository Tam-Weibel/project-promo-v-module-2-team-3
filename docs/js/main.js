const _=document.querySelector(".js-form"),u=document.getElementById("name"),m=document.getElementById("job"),k=document.getElementById("photo"),p=document.getElementById("email"),h=document.getElementById("phone"),f=document.getElementById("linkedin"),v=document.getElementById("github");document.querySelector(".js-photo");const g=document.querySelector(".preview__text--title"),y=document.querySelector(".preview__text--p"),s=document.querySelector(".social__email"),b=document.querySelector(".social__linkedin"),L=document.querySelector(".social__github"),d=document.querySelector(".social__phone"),E=document.querySelector(".js-click");document.querySelector(".js-create-card");document.querySelector(".form_designs-div");document.querySelector(".form");document.querySelector(".js-share");document.querySelectorAll(".icon");const I=document.querySelectorAll(".js-section"),l=document.querySelectorAll(".form_box"),j=e=>{const i=e.currentTarget.parentNode;for(const o of l)o===i?o.classList.remove("collapsable--close"):o.classList.add("collapsable--close")};l[0].classList.remove("collapsable--close");for(const e of I)e.addEventListener("click",j);const w=e=>{const t=e.target.id;if(e.target.value,t==="name")g.innerHTML=u.value;else if(t==="job")y.innerHTML=m.value;else if(t==="email")s.href="mailto:"+p.value,console.log(s.href);else if(t==="phone")d.href="tel:"+h.value,console.log(d.href);else if(t==="linkedin")b.href=f.value;else if(t==="github"){const o=v.value.slice(1);L.href="https://github.com/"+o}};_.addEventListener("input",w);const B=document.querySelector(".js-btnReset");function P(){u.value="",m.value="",k.value="",p.value="",h.value="",f.value="",v.value="",g.innerHTML="Nombre Apellido",y.innerHTML="Front-end developer",s.href="",b.href="",L.href="",q.style.backgroundImage="",S.style.backgroundImage="",E.classList.add("hidden"),a.classList.remove("share__grey"),n.classList.remove("palete-1","palete-2","palete-3","palete-4","palete-5"),n.classList.add("palete-1"),document.getElementById("1").checked=!0,l[0].classList.remove("collapsable--close"),l[1].classList.add("collapsable--close"),l[2].classList.add("collapsable--close")}B.addEventListener("click",P);const n=document.querySelector(".preview"),F=document.querySelectorAll(".radio");for(const e of F)e.addEventListener("click",R);function R(e){const t=e.target.value;n.classList.remove("palete-1","palete-2","palete-3","palete-4","palete-5"),n.classList.add("palete-"+t)}const c=new FileReader,A=document.querySelector(".form__photo--input"),q=document.querySelector(".js-photo"),S=document.querySelector(".miniphoto");function H(e){const t=e.currentTarget.files[0];c.addEventListener("load",T),c.readAsDataURL(t)}function T(){c.result,q.style.backgroundImage=`url(${c.result})`,S.style.backgroundImage=`url(${c.result})`}A.addEventListener("change",H);const a=document.querySelector(".js-create"),M=document.querySelector(".js-click"),r=document.querySelector(".created__btn");console.log(r.href);r.href=r.href+"Mira mi nueva tarjeta: URL de la card";console.log(r.href);function N(e){e.preventDefault(),a.classList.add("share__grey"),M.classList.remove("hidden")}a.addEventListener("click",N);
//# sourceMappingURL=main.js.map
