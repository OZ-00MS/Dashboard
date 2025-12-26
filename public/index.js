/* ===== CLOCK + DATE ===== */
function updateClock(){
  const now = new Date();
  const time = now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  const seconds = now.toLocaleTimeString([], {second:'2-digit'});
  const date = now.toLocaleDateString(undefined,{weekday:'short',day:'numeric',month:'short'});
  document.querySelector(".clock").innerHTML = `<h2>${time}<span style="font-size:16px;opacity:0.7">:${seconds}</span></h2><p>${date}</p>`;
}
setInterval(updateClock,1000);
updateClock();

/* ===== CALENDAR ===== */
const cal = document.querySelector(".calendar");
const nowCal = new Date();
const year = nowCal.getFullYear();
const month = nowCal.getMonth();
const today = nowCal.getDate();
const monthName = nowCal.toLocaleString("default",{month:"short"});
const daysInMonth = new Date(year,month+1,0).getDate();
const firstDay = new Date(year,month,1).getDay();

let html = `<h3>${monthName} ${year}</h3>`;
html += `<div class="calendar-inner">`;
["S","M","T","W","T","F","S"].forEach(d=>html+=`<b>${d}</b>`);
for(let i=0;i<firstDay;i++) html+=`<span></span>`;
for(let d=1; d<=daysInMonth; d++){
  html+= d===today ? `<span class="today">${d}</span>` : `<span>${d}</span>`;
}
html += `</div>`;
cal.innerHTML = html;

/* ===== IMAGE SLIDESHOW ===== */
const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400"
];

let current = 0;
const slide = document.getElementById("slide");

function nextImage() {
  current = (current + 1) % images.length;
  slide.style.opacity = 0;
  setTimeout(() => {
    slide.src = images[current];
    slide.style.opacity = 1;
  }, 300);
}

setInterval(nextImage, 3000);

    const input = document.getElementById('searchInput');

    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const query = input.value.trim();
        if (query) {
          // Redirect to Google search
          window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
      }
    });
