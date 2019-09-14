import defaultConfig from './config'

export default config => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const {
    ariaHidden,
    viewBox,
    version,
    width,
    height,
    fillRule,
    dPath
  } = {
    ...defaultConfig,
    ...config
  }

  svg.setAttribute('aria-hidden', ariaHidden)
  svg.setAttribute('viewBox', viewBox)
  svg.setAttribute('version', version)
  svg.setAttribute('width', width)
  svg.setAttribute('height', height)

  const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')

  svgPath.setAttribute('fill-rule', fillRule)
  svgPath.setAttribute('d', dPath)

  svg.appendChild(svgPath)

  return svg
}
