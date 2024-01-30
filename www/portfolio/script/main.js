const brand = document.getElementById("brand");
const brandText = document.querySelector("#brand a");
const heroImage = document.getElementById("landing-img");

window.addEventListener("scroll", () =>
{
    if (window.scrollY > 0)
    {
        brandText.style.fontSize = "2em";
        brandText.style.lineHeight = "0";
        brand.style.transform = "translate(0, -1.25em)";
        brand.style.height = "0";
        heroImage.style.marginTop = "0";
    }
    else if (window.scrollY === 0)
    {
        brandText.style.fontSize = "10em";
        brandText.style.lineHeight = "150px";
        brand.style.transform = "translate(0, 0)";
        heroImage.style.marginTop = "150px";
    }
});