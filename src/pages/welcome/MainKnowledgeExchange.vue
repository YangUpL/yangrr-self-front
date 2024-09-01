<template>
  <div class="discussion">
    <el-row justify="space-between" class="header">
      <el-button type="primary" @click="showEditor = true" class="publish-button">发布文章</el-button>
      <el-input v-model="searchQuery" placeholder="搜索文章" class="search-bar"></el-input>
    </el-row>

    <el-dialog v-model="showEditor" title="发布文章" width="50%">
      <el-input
        v-model="newPostTitle"
        placeholder="请输入文章标题..."
        class="editor-title"
      ></el-input>
      <el-input
        type="textarea"
        v-model="newPostContent"
        placeholder="请输入文章内容..."
        rows="8"
        class="editor-content"
      ></el-input>
      <el-upload
        class="upload-demo"
        action="#"
        list-type="picture"
        :auto-upload="false"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">上传图片</el-button>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showEditor = false">取消</el-button>
        <el-button type="primary" @click="postArticle">发送</el-button>
      </span>
    </el-dialog>

    <el-row gutter="10" class="article-list">
      <el-col :span="24" v-for="post in filteredPosts" :key="post.id">
        <el-card shadow="hover" class="article-card">
          <div class="article-header">
            <img :src="post.avatar" class="article-avatar" alt="头像"/>
            <div class="article-info">
              <span class="article-author">{{ post.author }}</span>
              <span class="article-time">{{ post.time }}</span>
            </div>
          </div>

          <h3 class="article-title">{{ post.title }}</h3>

          <div class="article-body">
            <p class="article-content">
              {{ post.content.length > 200 ? post.content.substring(0, 200) + '···' : post.content }}
              <el-button type="text" @click="viewPost(post.id)" class="view-full-text">显示全文</el-button>
            </p>
          </div>

          <div v-if="post.image" class="article-image">
            <img :src="post.image" alt="文章图片" />
          </div>

          <div class="article-footer">
            <el-button @click="likePost(post)" :class="{'liked': post.liked}" class="like-button">
              <svg class="like-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              {{ post.likes }}
            </el-button>
            <el-button type="text" class="comment-button"  @click="viewPost(post.id)">
              <svg class="comment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                <path d="M21 15.5V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11.5L4 17v-1.5H21V15.5zm-2-10H5v9h14V5.5z"/>
              </svg>
              {{ post.comments.length }}
            </el-button>
            <el-button type="text" class="favorite-button" @click="toggleFavorite(post)">
                <svg 
                  :class="['favorite-icon', {'favorited': post.favorited}]"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  width="24px" 
                  height="24px"
                >
                  <path d="M12 17.27l5.18 3.07-1.39-6.07L20 9.24l-6.16-.53L12 3 10.16 8.71 4 9.24l4.21 4.03-1.39 6.07L12 17.27z"/>
                </svg>
                {{ post.favorites }}
            </el-button>

            <el-button type="text" class="share-button">
              <i class="el-icon-share"></i>
              分享
            </el-button>
          </div>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      showEditor: false,
      newPostTitle: '', // 新增的标题输入
      newPostContent: '',
      fileList: [], // 上传的图片列表
      posts: [
        {
          id: 1,
          title: '配置Tomcat',
          content: 'Tomcat 是一个开源的 Servlet 容器，用于 Java EE 应用的开发和部署...',
          author: '作者1',
          avatar: 'https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500',
          time: '2024-09-01',
          image: '', // 如果没有图片则不显示这一行
          likes: 5,
          liked: false,
          favorites: 2,
          favorited: false,
          comments: [
            { id: 1, username: '用户1', text: '评论1', avatar: 'https://example.com/comment1.jpg' },
            { id: 2, username: '用户2', text: '评论2', avatar: 'https://example.com/comment2.jpg' },
          ],
        },
      ],
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) =>
        post.title.includes(this.searchQuery)
      );
    },
  },
  methods: {
    postArticle() {
      if (this.newPostTitle && this.newPostContent) {
        const newPost = {
          id: this.posts.length + 1,
          title: this.newPostTitle,
          content: this.newPostContent,
          author: '当前用户',
          avatar: 'https://example.com/current-user-avatar.jpg',
          time: new Date().toLocaleString(),
          image: this.fileList.length > 0 ? this.fileList[0].url : '',
          likes: 0,
          liked: false,
          favorites: 0,
          favorited: false,
          comments: [],
        };
        this.posts.push(newPost);
        this.showEditor = false;
        this.newPostTitle = '';
        this.newPostContent = '';
        this.fileList = [];
      }
    },
    handlePreview(file) {
      console.log('Preview file:', file);
    },
    handleRemove(file, fileList) {
      this.fileList = fileList;
    },
    viewPost(id) {
      this.$router.push({ name: 'DetailKnowledgeExchange', params: { id } });
    },
    toggleFavorite(post) {
      if (post.favorited) {
        post.favorites--;
      } else {
        post.favorites++;
      }
      post.favorited = !post.favorited;
    },
    likePost(post) {
      if (post.liked) {
        post.likes--;
      } else {
        post.likes++;
      }
      post.liked = !post.liked;
    },
  },
};
</script>

<style scoped>
.discussion {
  padding: 15px;
  background-color: #f9f9f9;
}

.header {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.publish-button {
  background-color: #409eff;
  border-radius: 3px;
  font-size: 14px;
}

.search-bar {
  width: 250px;
  margin-left: 15px;
}

.editor-title {
  margin-bottom: 15px;
}

.upload-demo {
  margin: 15px 0;
}

.article-list {
  margin-top: 15px;
}

.article-card {
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  transition: box-shadow 0.2s;
}

.article-card:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.article-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.article-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.article-info {
  display: flex;
  flex-direction: column;
}

.article-author {
  font-weight: bold;
  color: #333;
}

.article-time {
  font-size: 12px;
  color: #999;
}

.article-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.article-body {
  font-size: 14px;
  color: #666;
}

.article-image img {
  width: 100%;
  border-radius: 8px;
  margin-top: 10px;
}

.article-footer {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.like-button,
.comment-button,
.favorite-button,
.share-button {
  color: #0000006d;
  margin-right: 10px;
  font-size: 14px;
}


.liked,
.favorited {
  color: #e74c3c;
}

.favorite-icon,
.like-icon,
.comment-icon {
  margin-right: 5px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.comment-icon{
  margin-top: 4px;
}

.favorite-icon.favorited {
  fill: #e74c3c;
}

.view-full-text {
  margin-left: 10px;
  color: #409eff;
  cursor: pointer;
  font-size: 14px;
}
</style>
