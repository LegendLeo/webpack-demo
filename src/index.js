import './styles/index.less'
import { bundleFile } from './index1'
import { print } from './common'

if (module.hot) {
  console.log('module hot')
  module.hot.accept('./index1.js', function () {
    console.log('index1.js has been changed')
    bundleFile(12)
  })
  module.hot.accept('./styles/index.less', function () {
    print('styles has been changed')
  })
}
import(/* webpackChunkName: "lodash" */ 'lodash').then((_) => {
  print(_.chunk(['a', 'b', 'd'], 2))
  print('log')
  print(process.env)
})