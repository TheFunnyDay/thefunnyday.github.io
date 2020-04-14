let CompanyName = "FUNNY CODE"; //Название компании
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
//меню
document.querySelector("#menu").innerHTML = `
        <ul>
          <li>
            <a href="https://github.com/TheFunnyDay">
              <p>GITHUB</p>
            </a>
          </li>
          <li>
            <a href="https://vk.com/tfunnyday">
              <p>VK</p>
            </a>
          </li>
          <li>
            <a href="https://vk.com/funny_code">
              <p>VK GROUP</p>
            </a>
          </li>
          <li>
            <a href="https://vk.com/funncomp">
              <p>FUNNYCOMPANY</p>
            </a>
          </li>

        </ul>
`
document.querySelector("#menu").style.cssText = ` 
      backdrop-filter: blur(10px);
`
//код сайта
document.querySelector("#promo").innerHTML = `
<div id="promoblur">
<img src="${CompanyAvatar}" width="200px"/>
      <h1>${CompanyName}</h1>
      <h2>Самый лучший портфолио</h2>
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
  posts.appendChild(postone("https://gmvlauncher.site/launcher_desktop/", "GMV LAUNCHER", `https://i.ibb.co/CmfmhPg/Screenshot-1.png}`));
  posts.appendChild(postone("*", "SHIKI THEME", `https://i.ibb.co/xzn17sS/Screenshot-5.png`));
  posts.appendChild(postone("https://projectjpswru.github.io/", "PROJECT JPSWRU", `https://i.ibb.co/GMghdbC/Screenshot-4.png`));
  posts.appendChild(postone("https://hentaiteam.github.io/", "HENTAI`TEAM", `https://i.ibb.co/7NXnDmH/Screenshot-3.png`));
  posts.appendChild(postone("works/SB/sb-redesign/", "Серия Журналов CБ REDESIGN", `https://i.ibb.co/JpS5tF0/Screenshot-6.png`));
  posts.appendChild(postone("works/SB/sb-original/", "Серия Журналов CБ", `https://i.ibb.co/JpS5tF0/Screenshot-6.png`));
  posts.appendChild(postone("", "Мой портфолио", `${CompanyAvatar}`));
});
