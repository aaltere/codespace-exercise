const brand = document.getElementById("brand");

window.addEventListener("scroll", () =>
{
    if (window.scrollY > 0)
    {
        brand.style.transform = "scale(1.5) translate(0, 0)";
    }
    else if (window.scrollY === 0)
    {
        brand.style.transform = "scale(10) translate(0, 10px)";
    }
});