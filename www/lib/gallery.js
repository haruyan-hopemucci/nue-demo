
export const lib = [
{
  name: 'image-gallery',
  tagName: 'section',
  tmpl: '<section class="gallery"> <div> <a class="seek prev" :if="1" @click="0">Seek prev</a> <img ref="image" :src="2"> <a class="seek next" :if="4" @click="3">Seek next</a> </div> <nav> <a :for="5" :class="6" @click="7">&#x25cf;</a> </nav> </section>',
  Impl: class { 
    index = 1
    updated() {
      console.debug(this.$el)
    }
   },
  fns: [
    (_,e) => { _.index-- },
    _ => _.index,
    _ => [_.basedir,'/',_.images[_.index]],
    (_,e) => { _.index++ },
    _ => _.images.length - _.index > 1,
    _ => ['src', _.images, 'i'],
    _ => [_.i == _.index && 'current '],
    (_,e) => { _.index = _.i }
  ]
}]
export default lib[0]