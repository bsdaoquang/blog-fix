const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const postId = urlParams.get('postId')

document.getElementById('post-container').innerHTML = `
<div class="post-box food">
            <img src="https://image.cnbcfm.com/api/v1/image/107283868-1691590732310-107283868-1691590529979-gettyimages-1235707269-PGONCHAR_W0863.jpg?v=1691590756&w=717&h=403&ffmt=webp&vtcrop=y" alt="" class="post-img">
            <h2 class="category">Tech</h2>
            <a href="./posts/post-detail.html?postId=1" class="post-title">Roblox shares drop 21% after company misses estimates on top and bottom line</a>
            <span class="post-date">12 Feb 2022</span>
            <p class="post-description">The company also said that Cameron Deatsch, who has worked as chief revenue officer for the past three and a half years, will leave in December.</p>
            <div class="profile">
                <img src="https://social.webestica.com/assets/images/avatar/06.jpg" alt="" class="profile-img">
                <span class="profile-name">dany</span>
            </div>
        </div>
`
