const videos = [

    {
        title: "ليلة مختلفة تمامًا في المدينة",
        channel: "يوميات",
        category: "ترفيه",
        views: "2.4 مليون مشاهدة",
        time: "منذ يومين",
        duration: "12:45",
        avatar: "ي",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000",
        video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
    },

    {
        title: "أجمل الأماكن التي لازم تزورها",
        channel: "رحّال",
        category: "سفر",
        views: "1.8 مليون مشاهدة",
        time: "منذ ٣ أيام",
        duration: "18:22",
        avatar: "ر",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1000",
        video: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4"
    },

    {
        title: "تجربة لا يمكن نسيانها",
        channel: "تجارب",
        category: "ترفيه",
        views: "980 ألف مشاهدة",
        time: "منذ أسبوع",
        duration: "09:18",
        avatar: "ت",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1000",
        video: "https://storage.googleapis.com/coverr-main/mp4/For_Wes.mp4"
    },

    {
        title: "كيف تغيّرت التقنية خلال السنوات الأخيرة؟",
        channel: "تقنية اليوم",
        category: "تقنية",
        views: "760 ألف مشاهدة",
        time: "منذ ٤ أيام",
        duration: "14:51",
        avatar: "ط",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000",
        video: "https://storage.googleapis.com/coverr-main/mp4/Island_Man.mp4"
    },

    {
        title: "مباراة مجنونة حتى اللحظة الأخيرة",
        channel: "ملعب",
        category: "رياضة",
        views: "3.2 مليون مشاهدة",
        time: "منذ يوم",
        duration: "10:33",
        avatar: "م",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000",
        video: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4"
    },

    {
        title: "أغنية هادئة لآخر الليل",
        channel: "نغم",
        category: "موسيقى",
        views: "5.1 مليون مشاهدة",
        time: "منذ أسبوع",
        duration: "04:28",
        avatar: "ن",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1000",
        video: "https://storage.googleapis.com/coverr-main/mp4/For_Wes.mp4"
    },

    {
        title: "أغرب الأسرار التي اكتشفها العلماء",
        channel: "اكتشف",
        category: "وثائقيات",
        views: "1.2 مليون مشاهدة",
        time: "منذ أسبوعين",
        duration: "21:09",
        avatar: "ا",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1000",
        video: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
    },

    {
        title: "أفضل ألعاب السنة؟ تجربة كاملة",
        channel: "قيمرز",
        category: "ألعاب",
        views: "890 ألف مشاهدة",
        time: "منذ ٥ أيام",
        duration: "16:40",
        avatar: "ق",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1000",
        video: "https://storage.googleapis.com/coverr-main/mp4/Island_Man.mp4"
    }

];


function arabicNumber(number) {

    return String(number).replace(
        /\d/g,
        d => "٠١٢٣٤٥٦٧٨٩"[d]
    );
}


function createVideoCard(video, index) {

    return `

        <article
            class="video-card"
            onclick="openVideo(${index})"
        >

            <div class="thumbnail">

                <img
                    src="${video.image}"
                    alt="${video.title}"
                >

                <div class="play-overlay">

                    <div class="play-circle">
                        ▶
                    </div>

                </div>

                <span class="duration">
                    ${video.duration}
                </span>

            </div>

            <div class="video-details">

                <div class="channel-avatar">
                    ${video.avatar}
                </div>

                <div class="video-text">

                    <h3>
                        ${video.title}
                    </h3>

                    <p>
                        ${video.channel}
                        •
                        ${video.views}
                    </p>

                    <p>
                        ${video.time}
                    </p>

                </div>

            </div>

        </article>

    `;
}


function renderVideos(list, elementId) {

    const container =
        document.getElementById(elementId);

    if (!container) return;

    container.innerHTML =
        list.map((video, index) =>
            createVideoCard(video, index)
        ).join("");
}


function renderAll() {

    renderVideos(
        videos,
        "videoGrid"
    );

    renderVideos(
        videos.slice(3, 8),
        "trendingGrid"
    );

    renderVideos(
        videos.slice(2, 7),
        "trendingPageGrid"
    );

    renderVideos(
        videos.slice(0, 5),
        "subscriptionGrid"
    );
}


function openVideo(index) {

    const video = videos[index];

    if (!video) return;

    document.getElementById("modalTitle").textContent =
        video.title;

    document.getElementById("modalChannel").textContent =
        `${video.channel} • ${video.views}`;

    document.getElementById("modalCategory").textContent =
        video.category;

    document.getElementById("likes").textContent =
        video.views.replace("مشاهدة", "");

    const player =
        document.getElementById("videoPlayer");

    player.src = video.video;

    document
        .getElementById("videoModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeVideo() {

    const modal =
        document.getElementById("videoModal");

    const player =
        document.getElementById("videoPlayer");

    player.pause();

    player.src = "";

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


function likeVideo() {

    const likes =
        document.getElementById("likes");

    likes.textContent = "تم الإعجاب ✓";
}


function saveVideo() {

    alert("تم حفظ الفيديو في المفضلة ⭐");
}


function shareVideo() {

    if (navigator.share) {

        navigator.share({
            title:
                document.getElementById("modalTitle").textContent,
            text:
                "شاهد هذا الفيديو على مِرآة"
        });

    } else {

        alert("تم تجهيز رابط مشاركة الفيديو.");
    }
}


function showSection(section) {

    document
        .querySelectorAll(".content")
        .forEach(element => {
            element.classList.add("hidden");
        });

    const target =
        document.getElementById(section);

    if (target) {
        target.classList.remove("hidden");
    }

    document
        .querySelectorAll(".nav-item")
        .forEach(button => {
            button.classList.remove("active");
        });
}


function toggleSidebar() {

    document
        .querySelector(".sidebar")
        .classList.toggle("open");
}


function searchVideos() {

    const value =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();

    if (!value) {

        renderVideos(
            videos,
            "videoGrid"
        );

        return;
    }

    const results =
        videos.filter(video =>

            video.title
                .toLowerCase()
                .includes(value)

            ||

            video.channel
                .toLowerCase()
                .includes(value)

            ||

            video.category
                .toLowerCase()
                .includes(value)

        );

    renderVideos(
        results,
        "videoGrid"
    );

    document
        .getElementById("home")
        .classList.remove("hidden");

    document
        .getElementById("trending")
        .classList.add("hidden");

    document
        .getElementById("subscriptions")
        .classList.add("hidden");
}


document
    .getElementById("videoModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeVideo();
        }

    });


renderAll();
