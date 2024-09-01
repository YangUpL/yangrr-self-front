// import axios from "../config/request";

import axios from "axios";

/** 获取榜单 */
export const reqToplist = () => {
  return new Promise((resolve, reject) => {
    axios.get("http://localhost:5173/wapi/toplist/detail", {}).then((res) => {
      resolve(res);
    });
  });
};

/** 获取榜单歌曲列表 */
export const reqTopDetaliList = ({ id, limit, offset }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:5173/wapi/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`, {})
      .then((res) => {
        resolve(res);
      });
  });
};

/** 获取歌曲详情 主要是播放地址 */
export const reqMusicDetail = ({ id, level }) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:5173/wapi/song/url/v1?id=${id}&level=${level}`, {}).then((res) => {
      resolve(res);
    });
  });
};

// 获取音乐的描述
export const reqMusicDescription = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:5173/wapi//song/detail?ids=${id}`, {}).then((res) => {
      resolve(res);
    });
  });
};

// 搜索
export const reqSearch = (keyWords, offset, limit) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:5173/wapi/search?keywords=${keyWords}&offset=${offset}&limit=${limit}`, {})
      .then((res) => {
        resolve(res);
      });
  });
};

// 根据歌曲id获取歌词
export const reqMusicLyricById = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:5173/wapi/lyric?id=${id}`, {}).then((res) => {
      resolve(res);
    });
  });
};
