import './styles/index.less'
import { bundleFile } from './index1'
import { print } from './common'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import router from './router/index'
import Counter from './views/Counter.jsx'
class Button extends Component {
  render() {
    return <h1>Hello,Webpack</h1>
  }
}

render(<Button/>, window.document.getElementById('app'));

if (module.hot) {
  console.log('module hot')
  module.hot.accept('./index1.js', function() {
    console.log('index1.js has been changed')
    bundleFile(12)
  })
  module.hot.accept('./styles/index.less', function() {
    print('styles has been changed')
  })
}
// import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//   print(_.chunk(['a', 'b', 'd'], 2))
//   print('log')
//   print(process.env)
// })

// print(_.concat([123], [111]))

function renderWithHotReload(Router) {
  render(
    <AppContainer>
      <Button />
    </AppContainer>,
    document.getElementById('app')
  )
}
renderWithHotReload()

// // renderWithHotReload(router)
