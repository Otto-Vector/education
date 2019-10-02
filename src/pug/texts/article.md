This is an article written in markdown

mixin foot(size=25)
  .container
    // - var z = !(attributes) ? (size+attributes.i) : size
    - var z = size+attributes.i
    span(style=`font-size: ${z}px`)= 'Just a SIZE of '+ z + 'px'