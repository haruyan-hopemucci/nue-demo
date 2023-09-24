// import createApp method from Nue
import createApp from './nue.js'

// import our compiled gallery component (the default export)
import Gallery from './lib/gallery.js'

// create a gallery app and feed it with data
const gallery = createApp(Gallery, {
  images: ['lemons.jpg', 'peas.jpg', 'popcorn.jpg', 'tomatoes.jpg'],
  basedir: '/images/fruits'
})

// select a root node for the component
const root = document.querySelector('#gallery')

// mount the instance on the page
gallery.mount(root)