import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'ChromeIcon',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Youtube',
      href: 'https://www.youtube.com/@harryonochannel',
      icon: 'YoutubeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Youtube',
      href: 'https://www.youtube.com/@harryonochannel',
      icon: 'YoutubeIcon',
    })
  }
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/kangdudung19',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Github Ex',
    href: 'https://github.com/harryonochannel/',
    icon: 'GithubIcon',
  })
  return chainMenus
}
export default processMenu()
