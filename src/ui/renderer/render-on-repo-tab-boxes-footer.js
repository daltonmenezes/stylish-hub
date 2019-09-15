import createSVG from '../../utils/svg/create-svg'

export default (props, callback) =>
  Array.from(document.querySelectorAll('#user-repositories-list ul li'),
    element => {
      const repoPath = element.children[0].children[0].querySelector('h3 a').href
      const wrapper = document.createElement('a')

      wrapper.classList.add('pinned-item-meta', 'muted-link', props.className)
      wrapper.href = `${ repoPath }/${props.category}`

      const svg = createSVG(props.svg)

      svg.classList.add('octicon', props.svg.className)

      wrapper.prepend(svg)

      const span = document.createElement('span')

      span.classList.add('ml-0', 'mr-3')
      span.append(wrapper)

      const elementFooter = element
        .children[0]
        .lastElementChild
        .querySelector('relative-time')
        .previousElementSibling


      const licenseItem =
        elementFooter
          ? elementFooter.querySelector('span > svg[class*="octicon-law"]')
          : ''

      if (!licenseItem) {
          elementFooter
            ? elementFooter.insertAdjacentElement('afterend', span)
            : element.children[0].lastElementChild.prepend(span)

          return
      }

      licenseItem
        ? licenseItem.insertAdjacentElement('beforebegin', span)
        : ''

      callback
        ? callback(element)
        : ''
  })
