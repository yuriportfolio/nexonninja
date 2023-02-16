// global styles shared across the entire site
import * as React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import * as gtag from "../utils/gtag";

import Script from 'next/script'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import 'styles/custom.css'
import 'styles/global.css'
// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'
// global style overrides for notion
import 'styles/notion.css'
// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'
import posthog from 'posthog-js'


import { bootstrap } from '@/lib/bootstrap-client'
import {
  googleAnalyticsID,
  isServer,
  posthogConfig,
  posthogId
} from '@/lib/config'

if (!isServer) {
  bootstrap()
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
 useEffect(() => {
  const handleRouteChange = (url: URL) => {
    if (gtag) {

    gtag.pageview(url);
  }
      
      if (posthogId) {
        posthog.capture('$pageview')
      }
    }

    if (posthogId) {
      posthog.init(posthogId, posthogConfig)
    }

    
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Google Analytics support.
  return (
    <>
      {googleAnalyticsID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}`}
            strategy='afterInteractive'
          />
          <Script id='google-analytics' strategy='afterInteractive'>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsID}');
        `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  )
}

