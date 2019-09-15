export const videoEndpoints = id => ({
  youtube: `https://www.youtube.com/embed/${id}?modestbranding=0&showinfo=0&autoplay=1&rel=0&origin=${location.origin}`,
  vimeo: `https://player.vimeo.com/video/${id}?autoplay=1`
})
