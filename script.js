/* ===== RENDER DYNAMIC SECTIONS FROM data.js ===== */

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

// Renders an avatar: shows photo if available, else shows initials
function avatarHTML(name, image, size) {
  const sizeMap = { lg: 'avatar avatar-lg', md: 'avatar avatar-md', sm: 'avatar' };
  const cls = sizeMap[size] || 'avatar';
  if (image) {
    return `<div class="${cls} avatar-img"><img src="images/team/${image}" alt="${name}" loading="lazy"></div>`;
  }
  const initials = getInitials(name);
  return `<div class="${cls}"><span>${initials}</span></div>`;
}

// --- Stats ---
function renderStats() {
  const el = document.getElementById('statsBar');
  el.innerHTML = SITE_DATA.stats.map(s => `
    <div class="stat" data-animate>
      <span class="stat-num" data-count="${s.count}">0</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}

// --- Teams ---
// --- Teams ---
function renderTeams() {
  const el = document.getElementById('teamsContainer');
  if (!SITE_DATA.teams || SITE_DATA.teams.length === 0) return;

  const teamBgs = [
    'images/gallery/beetle 3.0 (1).JPG',
    'images/gallery/Beetle - Copy 3-2.jpg',
    'images/gallery/BT 6-1.jpg',
    'images/gallery/DSC04315_2.jpg',
    'images/gallery/Beetle 3.0.JPG',
    'images/gallery/beetle 3.0 (2).JPG',
    'images/gallery/IMG_0303.JPG',
    'images/gallery/BT 6-1.jpg'
  ];

  el.innerHTML = `
    <div class="teams-grid">
      ${SITE_DATA.teams.map((team, idx) => {
        const bg = teamBgs[idx % teamBgs.length];
        return `
          <div class="team-gen-card" data-animate style="--card-bg: url('${bg}')" data-index="${idx}">
            <div class="team-gen-card-bg"></div>
            <div class="team-gen-card-content">
              <span class="tech-tag">${team.year}</span>
              <h3>${team.name}</h3>
              <p class="team-leader-preview">
                Captain: ${team.captain.name}
                ${team.viceCaptain ? `<br>Vice Captain: ${team.viceCaptain.name}` : ''}
              </p>
              <div class="team-card-action">
                <span>View Crew Details</span>
                <span class="arrow">→</span>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Bind click events to open modal
  el.querySelectorAll('.team-gen-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      openTeamModal(idx);
    });
  });
}

// --- Team Modal Creation ---
function createTeamModal() {
  const modal = document.createElement('div');
  modal.id = 'teamModal';
  modal.className = 'team-modal';
  modal.innerHTML = `
    <div class="tm-container">
      <button class="tm-close" aria-label="Close">&times;</button>
      <div class="tm-content">
        <!-- Dynamic content goes here -->
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.tm-close');
  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('open');
  });
}

// --- Open Team Modal with Generation Details ---
function openTeamModal(teamIndex) {
  const team = SITE_DATA.teams[teamIndex];
  const modal = document.getElementById('teamModal');
  const contentEl = modal.querySelector('.tm-content');
  
  const vcHTML = team.viceCaptain ? `
    <div class="captain-card vc-card" style="--card-bg: url('images/gallery/IMG_0303.JPG')">
      <div class="captain-card-bg"></div>
      <div class="captain-card-content">
        ${avatarHTML(team.viceCaptain.name, team.viceCaptain.image, 'lg')}
        <h4>${team.viceCaptain.name}</h4>
        <span class="role-badge">VICE CAPTAIN</span>
      </div>
    </div>` : '';

  const captainHTML = `
    <div class="tm-leaders">
      <div class="captain-card" style="--card-bg: url('images/gallery/beetle 3.0 (2).JPG')">
        <div class="captain-card-bg"></div>
        <div class="captain-card-content">
          ${avatarHTML(team.captain.name, team.captain.image, 'lg')}
          <h4>${team.captain.name}</h4>
          <span class="role-badge">CAPTAIN</span>
        </div>
      </div>
      ${vcHTML}
    </div>
  `;

  // Collect all HODs across subsystems
  const hods = team.subsystems
    .filter(sub => sub.hod)
    .map(sub => ({ name: sub.hod, dept: sub.name, image: sub.image || '' }));

  // HODs (All) Column HTML
  const hodsColumnHTML = hods.length > 0 ? `
    <div class="tm-subsystem-box tm-hods-box">
      <h4>HODs (All)</h4>
      <div class="tm-hod-list">
        ${hods.map(h => `
          <div class="tm-hod-item">
            ${avatarHTML(h.name, h.image, 'sm')}
            <div class="tm-hod-item-info">
              <h5>${h.name}</h5>
              <span>${h.dept}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const subsystemsHTML = team.subsystems.map(sub => {
    const membersHTML = sub.members && sub.members.length > 0 ? `
      <div class="tm-members-list">
        ${sub.members.map(m => `
          <div class="tm-sub-member">
            ${avatarHTML(m.name, m.image, 'sm')}
            <span>${m.name}</span>
          </div>
        `).join('')}
      </div>
    ` : `<p class="tm-empty-sub">No other members</p>`;

    return `
      <div class="tm-subsystem-box">
        <h4>${sub.name}</h4>
        ${membersHTML}
      </div>
    `;
  }).join('');

  const departmentsHTML = `
    <div class="tm-subsystems-grid">
      ${hodsColumnHTML}
      ${subsystemsHTML}
    </div>
  `;

  contentEl.innerHTML = `
    <h2 class="tm-title">${team.name} <span class="green">${team.year}</span></h2>
    ${captainHTML}
    ${departmentsHTML}
  `;

  modal.classList.add('open');
}

// --- Achievements ---
function renderAchievements() {
  const el = document.getElementById('achievementsContainer');
  const bgImages = [
    'images/gallery/Beetle 3.0.JPG',
    'images/gallery/DSC04315_2.jpg',
    'images/gallery/BT 6-1.jpg',
    'images/gallery/Beetle - Copy 3-2.jpg',
    'images/gallery/beetle 3.0 (1).JPG'
  ];
  el.innerHTML = SITE_DATA.achievements.map((a, idx) => {
    const bg = bgImages[idx % bgImages.length];
    return `
      <div class="timeline-item" data-animate>
        <div class="timeline-dot"></div>
        <div class="timeline-card" style="--card-bg: url('${bg}')">
          <div class="timeline-card-bg"></div>
          <div class="timeline-card-content">
            <span class="timeline-year">${a.year}</span>
            <h3>${a.title}</h3>
            <ul>${a.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- Gallery ---
function renderGallery() {
  const el = document.getElementById('galleryContainer');
  el.innerHTML = SITE_DATA.gallery.map(item => {
    const sizeClass = item.size === 'tall' ? 'gi-tall' : item.size === 'wide' ? 'gi-wide' : '';
    let inner = '';

    if (item.src) {
      if (item.type === 'video') {
        inner = `
          <video class="gallery-media" muted preload="metadata">
            <source src="images/gallery/${item.src}#t=0.1" type="video/mp4">
          </video>
          <div class="gallery-play-btn">▶</div>`;
      } else {
        inner = `<img class="gallery-media" src="images/gallery/${item.src}" alt="${item.caption}" loading="lazy">`;
      }
    } else {
      // Placeholder when no image is set
      inner = `<div class="gallery-placeholder-box"><span>${item.placeholder || item.caption}</span></div>`;
    }

    return `
      <div class="gallery-item ${sizeClass}" data-type="${item.type}" data-src="${item.src || ''}" title="${item.caption || ''}">
        ${inner}
        <div class="gallery-overlay"><p>${item.caption}</p></div>
      </div>
    `;
  }).join('');

  // Open lightbox on click (both image and video)
  el.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const type = item.getAttribute('data-type');
      const src = item.getAttribute('data-src');
      const caption = item.getAttribute('title');
      if (src) {
        openLightbox(type, src, caption);
      }
    });
  });
}

// --- Lightbox ---
function createLightbox() {
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lb-close" aria-label="Close">&times;</button>
    <div class="lb-content-container">
      <div class="lb-content">
        <img class="lb-img" src="" alt="" style="display: none;">
        <video class="lb-video" controls playsinline style="display: none;">
          <source src="" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <p class="lb-caption"></p>
    </div>
  `;
  document.body.appendChild(lb);
  
  const closeLightbox = () => {
    const video = lb.querySelector('.lb-video');
    if (video) {
      video.pause();
      video.src = ""; // Stop buffering and reset source
    }
    lb.classList.remove('open');
  };

  lb.addEventListener('click', (e) => {
    if (e.target === lb || e.target.classList.contains('lb-close') || e.target.closest('.lb-close')) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

function openLightbox(type, src, caption) {
  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('.lb-img');
  const video = lb.querySelector('.lb-video');
  lb.querySelector('.lb-caption').textContent = caption || '';

  if (type === 'video') {
    img.style.display = 'none';
    img.src = '';

    video.style.display = 'block';
    video.src = `images/gallery/${src}`;
    video.load();
    
    // Play unmuted since this was initiated by a direct user click gesture
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay unmuted blocked by browser policy, fallback to manual click-to-play:", error);
      });
    }
  } else {
    video.style.display = 'none';
    video.src = '';

    img.style.display = 'block';
    img.src = `images/gallery/${src}`;
    img.alt = caption || '';
  }

  lb.classList.add('open');
}

// --- Sponsors ---
function renderSponsors() {
  const container = document.getElementById('sponsorsContainer');
  container.innerHTML = SITE_DATA.sponsors.map(s => `
    <div class="sponsor-card">
      ${s.logo
        ? `<img class="sponsor-logo-img" src="images/sponsors/${s.logo}" alt="${s.name}" loading="lazy">`
        : `<div class="sponsor-logo">${s.name}</div>`
      }
      <p>${s.description}</p>
    </div>
  `).join('');

  // Sponsor CTA
  const cta = document.getElementById('sponsorCTA');
  const d = SITE_DATA.sponsorCTA;
  cta.innerHTML = `
    <p>${d.description}</p>
    <a href="${d.brochureLink}" target="_blank" class="btn btn-outline">Download Brochure</a>
  `;
}

// --- Contact ---
function renderContact() {
  const el = document.getElementById('contactInfo');
  const c = SITE_DATA.contact;
  const addressHTML = c.address.replace(/\n/g, '<br>');
  el.innerHTML = `
    <div class="contact-item"><span class="ci-icon">⌖</span><div><h4>Location</h4><p>${addressHTML}</p></div></div>
    <div class="contact-item"><span class="ci-icon">✉</span><div><h4>Email</h4><p>${c.email}</p></div></div>
    <div class="contact-item"><span class="ci-icon">☎</span><div><h4>Phone</h4><p>${c.phone}</p></div></div>
    <div class="socials">
      ${c.socials.instagram ? `<a href="${c.socials.instagram}" target="_blank" class="social-btn" aria-label="Instagram"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg></a>` : ''}
      ${c.socials.twitter ? `<a href="${c.socials.twitter}" target="_blank" class="social-btn" aria-label="Twitter"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>` : ''}
      ${c.socials.youtube ? `<a href="${c.socials.youtube}" target="_blank" class="social-btn" aria-label="YouTube"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>` : ''}
    </div>
  `;
}

// --- Render All ---
createLightbox();
createTeamModal();
renderStats();
renderTeams();
renderAchievements();
renderGallery();
renderSponsors();
renderContact();


/* ===== PARTICLES BACKGROUND ===== */
(function () {
  const canvas = document.getElementById('particles'), ctx = canvas.getContext('2d');
  let w, h, particles = [];
  let mouse = { x: null, y: null, radius: 180 };
  
  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
  window.addEventListener('resize', resize); resize();
  
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() { this.reset() }
    reset() { 
      this.x = Math.random() * w; 
      this.y = Math.random() * h; 
      this.size = Math.random() * 2 + 0.6; 
      this.speedX = (Math.random() - 0.5) * 0.45; 
      this.speedY = (Math.random() - 0.5) * 0.45; 
      this.opacity = Math.random() * 0.35 + 0.15; 
    }
    update() {
      // Repulsion force from cursor
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 1.8;
          this.y += Math.sin(angle) * force * 1.8;
        }
      }
      
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x < 0 || this.x > w) this.speedX *= -1;
      if (this.y < 0 || this.y > h) this.speedY *= -1;
    }
    draw() { 
      ctx.beginPath(); 
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); 
      ctx.fillStyle = `rgba(0, 255, 102, ${this.opacity})`; 
      ctx.fill(); 
      
      // Draw line to cursor
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 255, 102, ${0.12 * (1 - dist / mouse.radius)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }
  
  for (let i = 0; i < 65; i++) particles.push(new Particle());
  
  function animate() {
    ctx.clearRect(0, 0, w, h); 
    particles.forEach(p => { p.update(); p.draw() });
    
    // Draw lines between particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 255, 102, ${0.05 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ===== NAVBAR ===== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 60) });
hamburger.addEventListener('click', () => { hamburger.classList.toggle('open'); navLinks.classList.toggle('open') });
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { hamburger.classList.remove('open'); navLinks.classList.remove('open') }));

/* ===== ACTIVE LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 200;
  sections.forEach(s => {
    const top = s.offsetTop, h = s.offsetHeight, id = s.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) { if (scrollY >= top && scrollY < top + h) link.classList.add('active'); else link.classList.remove('active') }
  });
});

/* ===== SCROLL ANIMATIONS ===== */
const animEls = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 80); observer.unobserve(e.target) } })
}, { threshold: .12 });
animEls.forEach(el => observer.observe(el));

/* ===== COUNTER ANIMATION ===== */
const counters = document.querySelectorAll('[data-count]');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target, target = +el.dataset.count;
      let current = 0; const step = Math.max(1, Math.floor(target / 40));
      const timer = setInterval(() => { current += step; if (current >= target) { current = target; clearInterval(timer) } el.textContent = current + (target >= 50 ? '+' : '') }, 40);
      counterObs.unobserve(el)
    }
  })
}, { threshold: .5 });
counters.forEach(c => counterObs.observe(c));

/* ===== FORM (EmailJS) ===== */
// ─── REPLACE THESE 3 VALUES WITH YOUR EMAILJS CREDENTIALS ───
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // From EmailJS → Account → API Keys
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // From EmailJS → Email Services
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // From EmailJS → Email Templates
// ─────────────────────────────────────────────────────────────

// Only initialize EmailJS if keys are provided (not placeholders)
const isDemoMode = (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID');
if (!isDemoMode) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...'; btn.disabled = true;

  const nameVal = document.getElementById('name').value;
  const emailVal = document.getElementById('email').value;
  const messageVal = document.getElementById('message').value;

  // 1. Local storage backup
  try {
    const submission = {
      name: nameVal,
      email: emailVal,
      message: messageVal,
      timestamp: new Date().toISOString()
    };
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    submissions.push(submission);
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));
    console.log('Submission saved to localStorage:', submission);
  } catch (err) {
    console.error('Error writing to localStorage:', err);
  }

  // 2. Email sending (Demo simulation vs actual EmailJS send)
  if (isDemoMode) {
    console.warn('EmailJS is in demo/fallback mode (credentials are default placeholders). Message was saved to localStorage.');
    setTimeout(() => {
      btn.textContent = 'Message Sent (Demo Mode)! ✓'; btn.style.background = '#33ff88';
      e.target.reset();
      setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; btn.disabled = false; }, 3000);
    }, 1000);
  } else {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: nameVal,
      from_email: emailVal,
      message: messageVal,
    })
    .then(() => {
      btn.textContent = 'Message Sent! ✓'; btn.style.background = '#33ff88';
      e.target.reset();
      setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; btn.disabled = false; }, 3000);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      btn.textContent = 'Failed — Try Again'; btn.style.background = '#ff4444';
      setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; btn.disabled = false; }, 3000);
    });
  }
});

/* ===== 3D CARD TILT EFFECT ===== */
function initTiltEffect() {
  const cards = document.querySelectorAll('.about-card, .captain-card, .timeline-card, .team-gen-card');
  
  cards.forEach(card => {
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((centerY - y) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      
      card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });
}

/* ===== SMOOTH REVEAL FOR HERO ===== */
window.addEventListener('load', () => {
  const splash = document.getElementById('splashScreen');
  
  // Splash loading bar takes ~3.2s (1s delay + 2.2s fill), dismiss after it completes
  setTimeout(() => {
    splash.classList.add('hide');
    
    // After splash fades out (0.8s transition), reveal hero elements
    setTimeout(() => {
      document.querySelectorAll('.hero [data-animate]').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 200);
      });
      initTiltEffect();
      // Remove splash from DOM
      splash.remove();
    }, 800);
  }, 3400);
});
