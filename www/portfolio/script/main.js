const brand = document.getElementById("brand");
const heroImage = document.getElementById("landing-img");

window.addEventListener("scroll", () =>
{
    if (window.scrollY > 0)
    {
        brand.style.transform = "scale(1.5) translate(0, 0)";
        heroImage.style.marginTop = "0";
    }
    else if (window.scrollY === 0)
    {
        brand.style.transform = "scale(10) translate(0, 10px)";
        heroImage.style.marginTop = "20vh";
    }
});