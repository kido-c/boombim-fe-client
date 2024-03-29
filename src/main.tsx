import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.tsx'
import GlobalStyle from './styles/GlobalStyle.ts'
import theme from './styles/theme'
import store from './store/store.ts'
import { Provider } from 'react-redux'
import { Layout } from './components/template/Layout/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <App />
          </Layout>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
