const encodeAttribute = (x = '') =>
  x.replace(/"/g, '&quot;')
const toAttributeString = (x = {}) =>
  Object.keys(x)
    .map(attr => `${encodeAttribute(attr)}="${encodeAttribute(x[attr])}"`) 
    .join(' ')
const tagAttributes = x => (c = '') =>
  `<${x.tag}${x.attr?' ':''}${toAttributeString(x.attr)}>${c}</${x.tag}>` 
const tag = x =>
  typeof x === 'string'
    ? tagAttributes({ tag: x })
    : tagAttributes(x) 


const listGroup = tag({ tag: 'ul', attr: { class: 'list-group' }})
const listGroupItem = tag({ tag: 'li', attr: { class: 'list-group-item' }})
const listGroupItems = items =>
  items.map(listGroupItem)
    .join('')