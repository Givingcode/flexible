import React from "react";
import {IMv} from '../../store/modules/mv/reducer'
import Scroll from "../../components/scroll";
import LazyLoad, {forceCheck} from "react-lazyload";
import {Control, Img, ScrollContainer} from "./style";
import {formatDuration, getCount} from "../../utils";

interface MvInterface {
  list: IMv
}
const MvList = (props: MvInterface) => {
  const {list} = props
  return (
    <ScrollContainer>
      <Scroll onScroll={forceCheck}>
        <ul className='mv-list'>
          {
            list.map((item, index) => (
              <li key={index}>
                <Img>
                  <LazyLoad
                    placeholder={<img width="100%" height="100%" src={require('../../assets/images/music.png')}
                                      alt="music"/>}
                  >
                    <img src={item.coverUrl} width="100%" height="100%" alt="music"/>
                  </LazyLoad>
                  <div className="title">音乐资讯</div>
                  <i className='iconfont play'>&#xe637;</i>
                  <div className='count'>
                    <i className='iconfont'>&#xe60f;</i>
                    {getCount(item.playTime)}
                  </div>
                  <div className='duration'>
                    <i className='iconfont'>&#xe62f;</i>
                    {formatDuration(item.durationms)}
                  </div>
                </Img>
                <div className="title">{item.title}</div>
                <Control>
                  <div className="singer">
                    <LazyLoad
                      placeholder={<img width="100%" height="100%" src={require('../../assets/images/music.png')}
                                        alt="music"/>}
                    >
                      <img src={item.avatarUrl} width="100%" height="100%" alt="music"/>
                    </LazyLoad>
                    <span>{item.nickname}</span>
                  </div>
                  <div className="awesome">
                    <i className='iconfont'>&#xe618;</i>
                    {item.praisedCount}
                  </div>
                  <div className="comments">
                    <i className='iconfont'>&#xe865;</i>
                    {item.commentCount}
                  </div>
                </Control>
              </li>
            ))
          }
        </ul>
      </Scroll>
    </ScrollContainer>)
}

export default MvList