export default app => 
  new MutationObserver(mutations => {
    if (mutations) {
        mutations.length <= 1
          ? app()
          : ''
    }
  })
  .observe(document.body, {
    childList: true
  })