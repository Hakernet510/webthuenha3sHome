const a = document.getElementById('post')
const b = document.getElementById('account')
const c = document.getElementById('unknown1')
const d = document.getElementById('unknown2')

const tab_a = document.getElementById('tab_post')
const tab_b = document.getElementById('tab_account')
const tab_c = document.getElementById('tab_unknown1')
const tab_d = document.getElementById('tab_unknown2')


console.log(window.location.pathname);
console.log(window.location.host);

const params = new URLSearchParams(window.location.search)

for (const param of params) {
  console.log(param)
}

console.log(params.get('tab'));

if (params.get('tab')==='post') {
  a.style.display='block'
  b.style.display='none'
  c.style.display='none'
  d.style.display='none'

  tab_a.style.color='red'
}

if (params.get('tab')==='account') {
  b.style.display='block'
  c.style.display='none'
  d.style.display='none'
  a.style.display='none'

  tab_b.style.color='red'

}

if (params.get('tab')==='unknown1') {
  c.style.display='block'
  d.style.display='none'
  a.style.display='none'
  b.style.display='none'

  tab_c.style.color='red'

}

if (params.get('tab')==='unknown2') {
  d.style.display='block'
  a.style.display='none'
  b.style.display='none'
  c.style.display='none'

  tab_d.style.color='red'

}