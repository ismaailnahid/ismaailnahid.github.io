<!-- নিচের স্ক্রিপ্টটা তোমার HTML এর </body> ট্যাগের ঠিক আগে বসাও -->
<script>
    // Smooth scroll for internal links (if you add anchor links later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // CTA Button effect
    const ctaButton = document.querySelector('.cta-button');
    if(ctaButton){
        ctaButton.addEventListener('click', () => {
            alert('ধন্যবাদ! আপনি যোগাযোগ বাটনে ক্লিক করেছেন।');
        });
    }

    // Tooltip for copy email
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if(emailLink){
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(emailLink.href.replace('mailto:', ''));
            alert('ইমেইল ঠিকানা ক্লিপবোর্ডে কপি হয়েছে!');
        });
    }

    // Tooltip for copy phone
    const phoneLink = document.querySelector('a[href^="tel:"]');
    if(phoneLink){
        phoneLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(phoneLink.href.replace('tel:', ''));
            alert('মোবাইল নম্বর কপি হয়েছে!');
        });
    }
</script>
