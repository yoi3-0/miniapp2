import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';
import { HeaderButton, TabbarItem, View, Tabbar, Epic, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28More from '@vkontakte/icons/dist/28/more';

const osname = platform();

class Example extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'more'
	  };
	  this.onStoryChange = this.onStoryChange.bind(this);
	}
  
	onStoryChange (e) {
	  this.setState({ activeStory: e.currentTarget.dataset.story })
	}
  
	render () {
  
	  return (
		<Epic activeStory={this.state.activeStory} tabbar={
		  <Tabbar>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'feed'}
			  data-story="feed"
			  text="Новости"
			><Icon28Newsfeed /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'discover'}
			  data-story="discover"
			  text="Поиск"
			><Icon28Search /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'messages'}
			  data-story="messages"
			  label="1"
			  text="Сообщения"
			><Icon28Messages /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'notifications'}
			  data-story="notifications"
			  text="Уведомлен."
			><Icon28Notifications /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'more'}
			  data-story="more"
			  text="Ещё"
			><Icon28More /></TabbarItem>
		  </Tabbar>
		}>
		  <View id="feed" activePanel="feed">
			<Panel id="feed">
			  <PanelHeader>Feed</PanelHeader>
			</Panel>
		  </View>
		  <View id="discover" activePanel="discover">
			<Panel id="discover">
			  <PanelHeader>Discover</PanelHeader>
			</Panel>
		  </View>
		  <View id="messages" activePanel="messages">
          <Panel id="messages">
		  <PanelHeader>
			  Кек
			</PanelHeader> 
			</Panel>
		  </View>
		  <View id="notifications" activePanel="notifications">
			<Panel id="notifications">
			  <PanelHeader>Notifications</PanelHeader>
			</Panel>
		  </View>
		  <View id="more" activePanel="more">
			<Panel id="more">
			  <PanelHeader>More</PanelHeader>
			</Panel>
		  </View>
		</Epic>
	  )
	}
  }
  
//<Example/>

export default Example;
