const DivPosts = document.querySelector(".posts");

function renderPosts(posts) {
  posts.forEach((element) => {
    const tagDivDevPost = document.createElement("div");
    const tagImg = document.createElement("img");
    const tagDivDevnameMobile = document.createElement("div");
    const tagh2 = document.createElement("h2");
    const tagh3 = document.createElement("h3");
    const tagh3descPost = document.createElement("h3");
    const tagh4 = document.createElement("h4");
    const tagDivLipkePost = document.createElement("div");
    const tagbutton = document.createElement("button");
    const tagDivimgLike = document.createElement("div");
    const tagImgLike = document.createElement("img");
    const tagspan = document.createElement("span");

    tagDivDevPost.classList = "dev-post";
    tagDivDevnameMobile.classList = "dev-name-mobile";
    tagh3descPost.classList = "desc-post";
    tagh4.classList = "desc-post2";
    tagDivLipkePost.classList = "like-post";
    tagbutton.classList = "desc-but";

    tagDivimgLike.classList = "img-like";
    tagImg.src = element.img;
    tagh2.innerText = element.user;
    tagh3.innerText = element.stack;
    tagh3descPost.innerText = element.title;
    tagh4.innerText = element.text;
    tagbutton.innerText = "Abrir Post";
    tagImgLike.src = "/src/assets/img/Vector.svg";
    tagspan.innerText = "25";

    const contentModal = document.createElement("div");
    contentModal.insertAdjacentHTML(
      "beforeend",
      `
    <div class="modal">
      <div class="dev-modal">
        <img src="${element.img}" alt="" />
        <div class="dev-name-modal">
          <h2>${element.user}</h2>
          <h3>${element.stack}</h3>
          <h5 class="title_modal">${element.title}</h5>
  <p class="description_modal">${element.text}</p>
        </div>
      </div>
      </div>
    </div>
    `
    );
    tagbutton.addEventListener("click", () => {
      openModal(contentModal);
    });

    tagDivDevPost.append(tagImg, tagDivDevnameMobile);
    tagDivDevnameMobile.append(tagh2, tagh3);
    tagDivLipkePost.append(tagbutton, tagDivimgLike);
    tagDivimgLike.append(tagImgLike, tagspan);
    DivPosts.append(tagDivDevPost, tagh3descPost, tagh4, tagDivLipkePost);
  });

  return tagDivDevPost;
}
renderPosts(posts);
