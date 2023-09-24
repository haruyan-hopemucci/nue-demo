import { renderFile } from 'nuejs-core'

// render the component with template file
(async () => {
  const html = await renderFile('templates/component.nue', {
    title: 'Media object',
    desc: 'One object to rule them all',
    img: 'img/art.jpg',
    type: 'banner',
  })
  console.info(html)
})()
