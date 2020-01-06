import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'


export default class Index extends Component {

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {data} = this.props
    return (
      <View>
        <Image src={data.creator_avatar} />
        <View>time: {data.create_time}</View>
        <View>{data.title}</View>
        <View>{data.content}</View>
      </View>
    )
  }
}
