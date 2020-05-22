import twemoji from 'twemoji'

export function renderEmoji (html) {
  return twemoji.parse(html, {
    folder: 'svg',
    ext: '.svg'
  })
}
