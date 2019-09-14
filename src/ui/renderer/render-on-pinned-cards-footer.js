import createSVG from '../../utils/svg/create-svg'

export default props =>
  Array.from(document.querySelectorAll('.pinned-item-list-item-content div a'),
    element => {
      const wrapper = document.createElement('a')

      wrapper.classList.add('pinned-item-meta', 'muted-link', props.className)
      wrapper.href = `${ element.href }/${props.category}`

      const svg = createSVG({ dPath: props.svg.dPath })

      svg.classList.add('octicon', props.svg.className)

      wrapper.prepend(svg)

      const pinnedCardFooter = element
        .parentElement
        .parentElement
        .querySelector('.pinned-item-desc + p')

      pinnedCardFooter.appendChild(wrapper)
  })
