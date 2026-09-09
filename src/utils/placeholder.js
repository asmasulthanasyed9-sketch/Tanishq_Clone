export function goldPlaceholder(label = 'Tanishq') {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#7B1C1C'/>
        <stop offset='1' stop-color='#C8A96E'/>
      </linearGradient>
    </defs>
    <rect width='400' height='400' fill='url(#g)'/>
    <text x='200' y='215' font-family='Georgia, serif' font-size='34' fill='#ffffff' fill-opacity='0.92' text-anchor='middle'>${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
