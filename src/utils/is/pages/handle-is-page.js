export default page => {
  const pathname = location.pathname.split('/')

  return pathname.length >= 4
    ? pathname[3] === page
    : ''
}
