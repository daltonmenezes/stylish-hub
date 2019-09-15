export default () =>
  Array.from(document.querySelectorAll('*[alt*="[ignore]"]'),
    el => el.classList.add('sh-ignore')
  )
