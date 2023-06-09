import StyledComponentsRegistry from './lib/registry';
import localFont from 'next/font/local'
import { Roboto } from 'next/font/google';
import { GlobalStyle } from './GlobalStyle';
import Google from './components/global/Google';
import Meta from './components/global/Meta';
import GoogleBody from './components/global/GoogleBody';

export const metadata = {
  title: 'Ledok - Comunicação em Leds',
  description: 'Ledok - Locações de Placa de Precificação em LEDs para seu Posto.',
}

const lemonMilk = localFont({
  display: 'swap',
  src: [
    {
      path: './font/LemonMilkLight.otf',
      weight: '300',
      style: 'light'
    },
    {
      path: './font/LemonMilkRegular.otf',
      weight: '500',
      style: 'normal'
    },
  ],
  variable: '--font-lemon-milk'
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['500', '300']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <head>
        <Meta />
        <Google />
      </head>
      <body className={`${lemonMilk.variable} ${roboto.variable}`}>
        <GoogleBody />
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
