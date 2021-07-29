document.addEventListener('DOMContentLoaded', function() {
  // init
  let cookiesBanner = document.querySelector('.cookies-banner')
  let cookiesBannerCloseButton = document.querySelector('.cookies-banner-button .button')
  let cookiesBannerDelay = 2000

  if (cookiesBanner) {
    setTimeout(showBanner, cookiesBannerDelay)
  }
  
  // events
  cookiesBannerCloseButton.addEventListener('click', cookiesBannerCloseButtonClicked)

  // functions
  function showBanner () {
    cookiesBanner.classList.add('show')
  }
  function cookiesBannerCloseButtonClicked (e) {
    e.preventDefault()
    cookiesBanner.classList.remove('show')
  }
})