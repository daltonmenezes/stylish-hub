import createSVG from '../../utils/svg/create-svg'

export default props => {
  Array.from(document.querySelectorAll('div[class*="repo-description"]'),
    el => {
      const element = el.nextElementSibling
      const wrapper = document.createElement('a')

      wrapper.classList.add('muted-link', props.className)
      wrapper.href = `${element.parentElement.querySelector('div a').href}/${props.category}`

      const svg = createSVG({ dPath: props.svg.dPath })

      svg.classList.add('octicon', props.svg.className)

      const span = document.createElement('span')

      span.classList.add('d-inline-block', 'mr-3')

      wrapper.appendChild(svg)
      span.appendChild(wrapper)

      element
        .lastElementChild
        .insertAdjacentElement('beforebegin', span)
    })
}
