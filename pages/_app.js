// App component is top-level component 
// will be common across all pages
// thats why global styles are used here

import '../styles/global.css'

const App = ({Component, pageProps}) => {
    return <Component {...pageProps}/>
}

export default App