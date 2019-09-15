export const isToBeIgnored = element =>
  element.getAttribute('alt').includes('[ignore]')
