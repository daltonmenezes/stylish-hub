export default (check, fn) => {
  const checkIfExists = setInterval(() => {
    const isLoaded = check()

    if (isLoaded) {
        fn()
        clearInterval(checkIfExists)
    }
  }, 500)
}
