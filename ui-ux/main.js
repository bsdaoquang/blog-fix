// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});


const handleShowPosts = () => {
    const res = localStorage.getItem('posts')
    const posts = res ? JSON.parse(res) : []


    if (posts.length > 0) {
        posts.forEach(post => {
            
            const postContent = document.createElement('div')
            postContent.setAttribute('class', ' col-4')
            postContent.setAttribute('style', 'padding: 0 10px')
            const newPost = `
            <div class="post-box food">
            <img src="https://image.cnbcfm.com/api/v1/image/107149225-1668023927005-F26-Liftoff3-High2_2.jpg?v=1691076396&w=717&h=403&ffmt=webp&vtcrop=y" alt="" class="post-img">
            <h2 class="category">TECH</h2>
            <a href="#" class="post-title">${post.title}</a>
            <span class="post-date">12 Feb 2022</span>
            <p class="post-description">${post.description}</p>
            <div class="profile">
                <img src="https://social.webestica.com/assets/images/avatar/04.jpg" alt="" class="profile-img">
                <span class="profile-name">judy</span>
            </div>
           </div>
            `
            

             postContent.innerHTML = newPost

             document.getElementById('post-container').appendChild(postContent)

       
        })
    }
}

handleShowPosts()