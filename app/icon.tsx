import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F0F0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F5F5F5',
          fontFamily: 'sans-serif', // Bebas approximation for OG 
          fontWeight: 900,
          fontSize: 20,
          letterSpacing: '-1px',
          paddingBottom: '2px', // Centers visually
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>
          S<span style={{ color: '#D62828' }}>B</span>
        </span>
      </div>
    ),
    {
      ...size,
    }
  )
}
