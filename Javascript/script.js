


const swiper = new Swiper('#top-larg-slider', {
    loop: false,
    speed: 1400,
    spaceBetween: 0,
    slidesPerView: 1,
    effect: "fade",
    loop : true,
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '#swiper-button-next-button',
        prevEl: '#swiper-button-prev-button',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    // autoplay:{
    //     delay: 2000,
    //     disableOnInteraction: false, 
    // }
});


const four_swiper = new Swiper('.main-body-top-swiper', {
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    spaceBetween: 25,
    breakpoints: {
        500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 12,
        },
        800: {
            spaceBetween: 14,
        },
        1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 16,
        },
        1920: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: '.prev-button',
        prevEl: '.next-button'
    },
});
const small_swiper = new Swiper('#small-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }
});
const semi_swiper = new Swiper('.semi-slider-self', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
    
    breakpoints: {
        500: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 12,
        },
        800: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 14,
        },
        1280: {
            slidesPerView: 7,
            slidesPerGroup: 7,
            spaceBetween: 16,
        },
        1920: {
            slidesPerView: 9,
            slidesPerGroup: 9,
            spaceBetween: 20,
        },
    }
});
const category_swiper = new Swiper('.category-slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 22,
    breakpoints: {
        500: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        800: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },
        1280: {
            slidesPerView: 4,
            slidesPerGroup: 4
        },
        1920: {
            slidesPerView: 5,
            slidesPerGroup: 5
        },
    }
});




const header = document.getElementById("stickyheaders");
let lastScrollTop = 0; // برای ذخیره موقعیت آخرین اسکرول

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    // بررسی اینکه آیا کاربر به پایین اسکرول کرده است یا بالا
    if (scrollTop > lastScrollTop) {
        // کاربر به پایین اسکرول کرده است
        header.classList.add("headerUp"); // اضافه کردن کلاس هنگام اسکرول به پایین
        header.classList.remove("headerDown"); // حذف کلاس اسکرول به بالا
    } else {
        // کاربر به بالا اسکرول کرده است
        header.classList.remove("headerUp"); // حذف کلاس هنگام اسکرول به بالا
        header.classList.add("headerDown"); // اضافه کردن کلاس اسکرول به بالا
    }

    // بررسی اینکه آیا کاربر به ابتدای صفحه رسیده است
    if (scrollTop === 0) {
        header.classList.remove("headerDown"); // حذف کلاس اسکرول به بالا در ابتدای صفحه
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // برای جلوگیری از منفی شدن مقدار
});



const textElement = document.getElementById("footer-text-collapse-content");
const moreText = document.getElementById("footer-text-collapse-content-hidden");
const buttonText = document.getElementById("footer-text-collapse");
const buttonIcon = document.getElementById("footer-text-collapse-icon");
const buttonTextSelf = document.getElementById("footer-text-collapse-text");

// تابع برای محدود کردن متن به 24 کلمه
function limitText() {
    const words = moreText.innerText.split(" ");
    
    if (words.length > 24) {
        const visibleText = words.slice(0, 24).join(" ") + "..."; // محدود کردن به 24 کلمه و اضافه کردن سه نقطه
        textElement.innerHTML = visibleText; // نمایش متن محدود شده
        buttonText.style.display = "flex"; // نمایش دکمه
    } else {
        buttonText.style.display = "none"; // پنهان کردن دکمه اگر متن کمتر از 24 کلمه باشد
    }
}

// تابع برای تغییر وضعیت دکمه و نمایش/پنهان کردن متن اضافی
buttonText.addEventListener("click", function() {
    if (buttonTextSelf.innerHTML === "بیشتر") {
        moreText.style.display = "inline"; // نمایش متن اضافی
        buttonTextSelf.innerHTML = "کمتر"; // تغییر متن دکمه
        buttonIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />'; // تغییر آیکون
        this.classList.add("active"); // اضافه کردن کلاس active
    } else {
        moreText.style.display = "none"; // پنهان کردن متن اضافی
        buttonTextSelf.innerHTML = "بیشتر"; // تغییر متن دکمه
        buttonIcon.innerHTML = '<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />'; // تغییر آیکون
        this.classList.remove("active"); // حذف کلاس active
    }
});

// تابع برای محدود کردن متن به 15 کلمه
function limitText() {
    // بررسی اندازه viewport
    if (window.innerWidth < 499) {
        const textElements = document.getElementsByClassName("top-slider-caption"); // المان‌های مورد نظر را انتخاب کنید

        // پردازش تمام عناصر
        for (let i = 0; i < textElements.length; i++) {
            const textElement = textElements[i]; // دسترسی به هر عنصر
            const text = textElement.innerText; // دریافت متن از المان

            const words = text.split(" "); // تقسیم متن به کلمات
            
            if (words.length > 15) {
                const visibleText = words.slice(0, 15).join(" ") + "..."; // محدود کردن به 15 کلمه و اضافه کردن سه نقطه
                textElement.innerText = visibleText; // نمایش متن محدود شده
            }
        }
    }
}

// اجرای تابع هنگام بارگذاری صفحه و تغییر اندازه پنجره
window.addEventListener("load", limitText);
window.addEventListener("resize", limitText); // اطمینان از اجرای مجدد در صورت تغییر اندازه

function checkValueAndClick() {
    const targetElement = document.getElementById('sallam');

    if (targetElement && targetElement.innerText === '0:0') {
        const button1 = document.getElementsByClassName('dismiss-and-go-to-order-submission');
        if (button1) {
            button1.click();
        }

        const element2 = document.getElementById('sallam2');
        if (element2) {
            element2.click();
        }

        const element3 = document.getElementById('sallam3');
        if (element3) {
            element3.click();
        }
    }
}

setInterval(checkValueAndClick, 100);


// انتخاب تمام والدها با کلاس مشخص
const parents = document.querySelectorAll('.main-body-top-swiper-item'); // جایگزین با کلاس والد

parents.forEach(parent => {
    // انتخاب المان با کلاس مشخص که مقدارش بین 0 تا 100 است
    const valueElement = parent.querySelector('.film-persent'); // جایگزین با کلاس المان مقدار
    const targetElement = parent.querySelector('.main-body-top-swiper-item-progressBar'); // جایگزین با کلاس المان هدف

    if (valueElement && targetElement) {
        const value = parseFloat(valueElement.textContent); // گرفتن مقدار به صورت عدد

        // بررسی اینکه مقدار بین 0 تا 100 باشد
        if (!isNaN(value) && value >= 0 && value <= 100) {
            // تنظیم عرض المان هدف به عنوان درصد
            targetElement.style.width = value + '%';
        }
    }
});

// انتخاب دکمه‌ها
const videoButtons = document.querySelectorAll('.video-button');
const mainVideo = document.getElementById('trailer-video');

// افزودن رویداد کلیک به دکمه‌ها
videoButtons.forEach(button => {
    button.addEventListener('click', function() {
        // پیدا کردن والد ویدیو
        const videoItem = this.closest('.main-body-top-swiper-item');
        const videoSource = videoItem.querySelector('.trailer-video-adress');

        // گرفتن آدرس src ویدیو
        const videoUrl = videoSource.src;

        // تنظیم آدرس src ویدیو اصلی
        mainVideo.src = videoUrl;
        mainVideo.load(); // بارگذاری ویدیو جدید

        // پخش ویدیو اصلی
        mainVideo.play();
    });
});



// انتخاب ویدیو
const video = document.getElementById('trailer-video');

// انتخاب المان مورد نظر برای نظارت
const triggerElement = document.querySelector('.video-modal');

// تابع برای بررسی و توقف ویدیو
function checkAndStopVideo() {
    if (triggerElement.classList.contains('hidden')) { // بررسی وجود کلاس 'active'
        video.pause(); // توقف پخش ویدیو
    }
}

// افزودن رویداد کلیک به المان برای اضافه کردن کلاس
triggerElement.addEventListener('click', function() {

    // بررسی و توقف ویدیو
    checkAndStopVideo();
});

// اگر می‌خواهید به صورت خودکار نظارت کنید (مثلاً با MutationObserver)
const observer = new MutationObserver(() => {
    checkAndStopVideo();
});

// شروع نظارت بر تغییرات کلاس
observer.observe(triggerElement, { attributes: true });



const dropdownElement = document.getElementById('header-home-dropdown'); // شناسه المان دراپ‌داون
const toggleButton = document.getElementById('header-home-dropdown-button'); // شناسه دکمه

// تابع برای بررسی و تغییر کلاس
function updateButtonActiveState() {
    // بررسی اینکه آیا المان دارای کلاس 'block' است یا خیر
    if (dropdownElement.classList.contains('block')) {
        toggleButton.classList.add('active'); // اضافه کردن کلاس active
    } else {
        toggleButton.classList.remove('active'); // حذف کلاس active
    }
}

// فراخوانی تابع در زمان بارگذاری صفحه
window.onload = updateButtonActiveState;

// همچنین می‌توانید این تابع را به یک رویداد کلیک متصل کنید
toggleButton.addEventListener('click', updateButtonActiveState);

// آپدیت‌کننده خودکار برای بررسی وضعیت هر ۱ ثانیه
setInterval(updateButtonActiveState, 100);