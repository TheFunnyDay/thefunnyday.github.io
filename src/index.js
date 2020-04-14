let CompanyName = "FUNNY CODE  BLOG"; //Название компании
let CompanyAvatar =
  "https://sun9-69.userapi.com/c854328/v854328980/1d51c3/xGebZwrEHCI.jpg"; //Лого компании

document.querySelector("title").innerHTML = `${CompanyName}`;

//стили
document.body.style.backgroundColor = `#1b1b1b `;
document.getElementById("promo").style.cssText = ` 
    background-image: url(${CompanyAvatar});
    user-select: none;
    -webkit-user-select: none;
    pointer-events: none
`;

//код сайта
document.querySelector("#promo").innerHTML = `
<div id="promoblur">
<img src="${CompanyAvatar}" width="200px"/>
      <h1>${CompanyName}</h1>
      <h2>Здесь я тестирую тотальный пиздец во всех его смыслах</h2>
    </div>
    </div>
`;

document.querySelector("#promoblur").style.cssText = `
  backdrop-filter: blur(15px);
`;

document.querySelector("#posts").style.cssText = `
  backdrop-filter: blur(15px);
`;

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
  posts.appendChild(postone("", "Старт блога", `${CompanyAvatar}`));
});
