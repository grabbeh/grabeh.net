import prism from '@theme-ui/prism/presets/prism.json'

const Heading = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  mt: 4,
  mb: 2
}

const BodyText = {
  fontFamily: 'body'
}

export default {
  breakpoints: ['40em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 1024
  },
  colors: {
    katie: 'papayawhip',
    black: '#000',
    'near-black': '#111',
    'dark-gray': '#333',
    'mid-gray': '#555',
    gray: ' #777',
    silver: '#999',
    'light-silver': '#aaa',
    'moon-gray': '#ccc',
    'light-gray': '#eee',
    'near-white': '#f4f4f4',
    white: '#fff',
    transparent: 'transparent',
    'black-90': 'rgba(0,0,0,.9)',
    'black-80': 'rgba(0,0,0,.8)',
    'black-70': 'rgba(0,0,0,.7)',
    'black-60': 'rgba(0,0,0,.6)',
    'black-50': 'rgba(0,0,0,.5)',
    'black-40': 'rgba(0,0,0,.4)',
    'black-30': 'rgba(0,0,0,.3)',
    'black-20': 'rgba(0,0,0,.2)',
    'black-10': 'rgba(0,0,0,.1)',
    'black-05': 'rgba(0,0,0,.05)',
    'black-025': 'rgba(0,0,0,.025)',
    'black-0125': 'rgba(0,0,0,.0125)',
    'white-90': 'rgba(255,255,255,.9)',
    'white-80': 'rgba(255,255,255,.8)',
    'white-70': 'rgba(255,255,255,.7)',
    'white-60': 'rgba(255,255,255,.6)',
    'white-50': 'rgba(255,255,255,.5)',
    'white-40': 'rgba(255,255,255,.4)',
    'white-30': 'rgba(255,255,255,.3)',
    'white-20': 'rgba(255,255,255,.2)',
    'white-10': 'rgba(255,255,255,.1)',
    'white-05': 'rgba(255,255,255,.05)',
    'white-025': 'rgba(255,255,255,.025)',
    'white-0125': 'rgba(255,255,255,.0125)',
    'dark-red': '#e7040f',
    red: '#ff4136',
    'light-red': '#ff725c',
    orange: '#ff6300',
    gold: '#ffb700',
    yellow: '#ffd700',
    'light-yellow': '#fbf1a9',
    purple: '#5e2ca5',
    'light-purple': '#a463f2',
    'dark-pink': '#d5008f',
    'hot-pink': ' #ff41b4',
    pink: '#ff80cc',
    'light-pink': '#ffa3d7',
    'dark-green': '#137752',
    green: '#19a974',
    'light-green': '#9eebcf',
    navy: '#001b44',
    'dark-blue': '#00449e',
    blue: '#357edd',
    'light-blue': '#96ccff',
    'lightest-blue': '#cdecff',
    'washed-blue': '#f6fffe',
    'washed-green': '#e8fdf5',
    'washed-yellow': '#fffceb',
    'washed-red': '#ffdfdf'
  },
  modes: {
    white: {
      color: '#37AEE3',
      bg: '#fff'
    },
    light: {
      color: '#37AEE3',
      bg: '#F9F9F9'
    },
    blue: {
      color: '#fff',
      bg: '#37AEE3'
    },
    green: {
      color: '#fff',
      bg: '#00A880'
    }
  },
  radii: [0, 2, 4, 16, 9999, '100%'],
  fonts: {
    heading: 'Source Sans Pro',
    body:
      'Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
  },
  fontSizes: [12, 14, 16, 18, 22, 26, 36, 48, 60, 72, 100],
  fontWeights: {
    light: 250,
    body: 300,
    subtitle: 600,
    bold: 700,
    heavy: 900
  },
  lineHeights: {
    text: '24px',
    subtitle: '30px',
    medium: '36px',
    tagline: '46px',
    heading: '68px',
    heavy: '90px'
  },
  styles: {
    div: {},
    p: {
      fontFamily: 'body',
      fontSize: 4
    },
    h1: {
      fontSize: 8,
      textDecoration: 'underline',
      textDecorationColor: 'red',
      ...Heading
    },
    h2: {
      fontSize: 6,
      ...Heading
    },
    h3: {
      fontSize: 4,
      ...Heading
    },
    code: {
      p: 3,
      mt: 3,
      overflowX: 'auto',
      fontSize: 3
    },
    pre: {
      ...prism
    },
    a: {
      color: 'blue'
    }
  },
  cards: {
    primary: {
      py: 3
    }
  },
  badges: {
    primary: {
      bg: 'dark-blue',
      color: 'white',
      flex: '0 0 auto',
      flexWrap: 'wrap',
      mb: 2,
      p: 2,
      mr: 2
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      fontSize: 6,
      textDecoration: 'underline red'
    }
  }
}
