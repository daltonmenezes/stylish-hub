export default page => {
  const pathname = location.pathname.split('/')

  return pathname >= 4
    ? pathname[3].includes(`\${page}`)
    : ''
}
