import Taro, { Component } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import FeedItem from '../feedItem'


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    feedList : []
  }

  componentWillMount () { }

  componentDidMount () {
    Taro.request({
      url: 'https://api.coolcollege.cn/mock/131/feed'
    })
      .then(res => {
        const feedList = res.data.data
        this.setState({feedList})
      })
  }

  updateList = () => {
    Taro.request({
      url: 'https://api.coolcollege.cn/mock/131/feed'
    })
      .then(res => {
        const feedList = res.data.data
        this.setState({feedList: [...this.state.feedList, ...feedList]})
      })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {this.state.feedList.map(item => (
          <FeedItem
            data={item}
          />
        ))}
        <Button onClick={this.updateList}>更新List</Button>
      </View>
    )
  }
}
