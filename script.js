    // Custom cursor
    const cur = document.getElementById('cursor'), ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px' });
    function animRing() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animRing) }
    animRing();
    document.querySelectorAll('a,button,.skill-card,.acard,.cert-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cur.style.width = '20px'; cur.style.height = '20px'; ring.style.width = '60px'; ring.style.height = '60px'; ring.style.borderColor = 'rgba(124,92,252,0.8)' });
      el.addEventListener('mouseleave', () => { cur.style.width = '12px'; cur.style.height = '12px'; ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(124,92,252,0.5)' });
    });

    // Scroll reveal
    const revEls = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target) }
      });
    }, { threshold: 0.1 });
    revEls.forEach(el => revObs.observe(el));

    // Skill bars
    const bars = document.querySelectorAll('.skill-bar-fill');
    const barObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const w = parseFloat(e.target.dataset.width);
          e.target.style.width = (w * 100) + '%';
          e.target.classList.add('animated');
          barObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(b => { b.style.width = '0%'; barObs.observe(b) });

    // Nav active
    const navAs = document.querySelectorAll('.nav-links a');
    const secs = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      let cur2 = '';
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur2 = s.id });
      navAs.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur2 ? 'var(--text)' : '' });
    }, { passive: true });

    // Hamburger
    document.getElementById('ham').addEventListener('click', function () {
      this.classList.toggle('active');
    });
