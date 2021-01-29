export interface ITagResponse {
  toptags: {
    '@attr': ITagAttr;
    tag: ITag[];
  };
}

export interface ITagAttr {
  numres: number;
  offset: number;
  total: number;
}

export interface ITag {
  name: string;
  count: number;
  reach: number;
}

export interface IAlbumResponse {
  albums: {
    '@attr': IAlbumsRespAttr;
    album: IAlbum[];
  };
}

export interface IAlbumsRespAttr {
  tag: string;
  page: string;
  perPage: string;
  totalPage: string;
  total: string;
}

export interface IAlbum {
  '@attr': IAlbumAttr;
  artist: IArtist;
  image: Iimage[];
  mbid: string;
  name: string;
  url: string;
  isFavorite?: boolean;
}

export interface IAlbumAttr {
  rank: string;
}

export interface IArtist {
  mbid: string;
  name: string;
  url: string;
}

export interface Iimage {
  size: string;
  '#text': string;
}
