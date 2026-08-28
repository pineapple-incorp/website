/* ---------- terminal typing ---------- */
  const text = "hello world!";
  const typedEl = document.getElementById('typed');
  const revealEl = document.getElementById('reveal');
  const footerEl = document.getElementById('footer');
  let i = 0;

  function type(){
    if(i < text.length){
      typedEl.textContent += text[i];
      i++;
      setTimeout(type, 70);
    } else {
      setTimeout(() => {
        revealEl.classList.add('in');
        footerEl.classList.add('in');
      }, 500);
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 400);
  });

  /* ---------- starfield / galaxy drift ---------- */
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w, h, stars;

  function sizeCanvas(){
    w = canvas.width = window.innerWidth * devicePixelRatio;
    h = canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  }

  function makeStars(){
    const count = Math.floor((window.innerWidth * window.innerHeight) / 9000);
    stars = Array.from({length: count}, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 0.7 + 0.25) * devicePixelRatio,
      baseAlpha: Math.random() * 0.18 + 0.06,
      twinkleSpeed: Math.random() * 0.008 + 0.002,
      twinklePhase: Math.random() * Math.PI * 2,
      driftX: (Math.random() - 0.5) * 0.015 * devicePixelRatio,
      driftY: (Math.random() - 0.35) * 0.015 * devicePixelRatio
    }));
  }

  function draw(t){
    ctx.clearRect(0, 0, w, h);
    for(const s of stars){
      const tw = reduceMotion ? 1 : Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,245,243,${(s.baseAlpha * tw).toFixed(3)})`;
      ctx.fill();

      if(!reduceMotion){
        s.x += s.driftX;
        s.y += s.driftY;
        if(s.x < 0) s.x = w;
        if(s.x > w) s.x = 0;
        if(s.y < 0) s.y = h;
        if(s.y > h) s.y = 0;
      }
    }
    requestAnimationFrame(draw);
  }

  function init(){
    sizeCanvas();
    makeStars();
  }

  window.addEventListener('resize', init);
  init();
  requestAnimationFrame(draw);