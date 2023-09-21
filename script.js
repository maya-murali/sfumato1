// JavaScript to handle the cookie consent banner

document.addEventListener("DOMContentLoaded", function () {
    const cookieConsentBanner = document.getElementById("cookie-consent-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");
    const rejectCookiesButton = document.getElementById("reject-cookies");
    const closeBannerButton = document.getElementById("close-banner");

    // Check if user has previously accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
        cookieConsentBanner.style.display = "block";
    }

    // Event listener for accepting cookies
    acceptCookiesButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieConsentBanner.style.display = "none";
    });

    // Event listener for rejecting cookies
    rejectCookiesButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "false");
        cookieConsentBanner.style.display = "none";
    });

    // Event listener for closing the banner
    closeBannerButton.addEventListener("click", function () {
        cookieConsentBanner.style.display = "none";
    });
});
