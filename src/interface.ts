export interface ITrack {
  id: number;
  url: string;
  img: string;
  duration: number;
  name: string;
  album: string;
  singer: string;
}

export type ITracks = ITrack[]

export interface ISongListProps {
  tracks: ITracks;
  trackCount: number;
  shareCount: number;
  commentCount: number;
  name: string;
  coverImgUrl: string;
  creator: string;
  avatarUrl: string;
  subscribedCount: number;
  subscribed: boolean;
}