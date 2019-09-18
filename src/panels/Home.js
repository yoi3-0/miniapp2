import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem,  Tooltip, Cell, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';
import { HeaderButton, Search, Switch, List, TabbarItem, View, Tabbar, Epic, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';

const osname = platform();

class Example extends React.Component {
	constructor (props) {
	  super(props);
  
	  this.state = {
		activeStory: 'activity'
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
			  selected={this.state.activeStory === 'activity'}
			  data-story="activity"
			  text="Тренажёры"
			><Icon28Newsfeed /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'usermap'}
			  data-story="usermap"
			  label="1"
			  text="Прогресс"
			><Icon28FavoriteOutline /></TabbarItem>
			<TabbarItem
			  onClick={this.onStoryChange}
			  selected={this.state.activeStory === 'settings'}
			  data-story="settings"
			  text="Настройки"
			><Icon28SettingsOutline /></TabbarItem>
		  </Tabbar>
		}>
		  <View id="activity" activePanel="activity">
          <Panel id="activity">
		  <PanelHeader>
			  Тренажёры
			</PanelHeader> 
			<Search />
			<Group title="Тренажёры" description="Выберете интересующий Вас тренажёр.">
        <List>
          <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}  description="Поможет Вашим глазам раслабиться">Глазотрен-3000</Cell>
          <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} description="Приведёт в чувства конечности">Рукоблуд форте</Cell>
          <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} description="Повысит Вашу концентрацию">Самогонщик онлайн</Cell>
        </List>
      </Group>
			</Panel>
		  </View>
		  <View id="usermap" activePanel="usermap">
			<Panel id="usermap">
			 <PanelHeader>Карта достижений</PanelHeader>
			</Panel>
		  </View>
		  <View id="settings" activePanel="settings">
			<Panel id="settings">
			  <PanelHeader>Настройки</PanelHeader>
			   <Group>
				  <div  align='center'>
			  <Avatar size={100}   />
			     <Cell
                  size="l"
                  description="Тренируется с 18.09.2019"
                >
                  Имя Фамилия</Cell> 
				  </div>
			 </Group> 

			<Group>
              <List>
                <Cell asideContent={<Switch />}>Уведомления</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Выбор темы</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Сообщество сервиса</Cell>
              </List>
            </Group>
			</Panel>
		  </View>
		</Epic>
	  )
	}
  }
  
//<Example/>

export default Example;
