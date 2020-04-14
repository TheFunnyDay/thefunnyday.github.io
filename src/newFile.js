//Посты
document.addEventListener("DOMContentLoaded", () => {
  const posts = document.querySelector("#posts");
  const postone = (link, postName, postImg) => {
    const posttwo = document.createElement("div");
    posttwo.className = "post-cont";
    posttwo.innerHTML = `
    <a href="${link}">
    <div id="post" style="background-image: url(${postImg});">
    <div class="postname">
      <p>
          ${postName}
      </p>
  </div>
  </div>
</a>
    `;
    return posttwo;
  };
  //Добавлять посты начиная отсюда
  posts.appendChild(
    postone(
      "https://pfn2r.csb.app/",
      "Тотальный пиздец может быть и совместным...",
      `https://i.ibb.co/wY1fsQd/Screenshot-5.jpg`
    )
  );
  posts.appendChild(postone("", "Старт блога", `asd}`));
});
