<template>
    <div class="knowledge-exchange-detail">
      <!-- 第一行：文章标题 -->
      <h1 class="article-title">{{ article.title }}</h1>
      
      <!-- 第二行：作者、发布时间、阅读量 -->
      <div class="article-meta">
        <span class="author-username">{{ article.author }}</span>
        <span class="publish-time">{{ formatDate(article.publishTime) }}</span>
        <span class="article-views">阅读量: {{ article.views }}</span>
      </div>
      
      <!-- 文章内容展示 -->
      <div class="article-content">
        <div v-html="article.content"></div>
      </div>
      
      <!-- 评论区域 -->
      <div class="comments-section">
        <h2>评论 ({{ comments.length }})</h2>
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
          <div class="comment-meta">
            <img :src="comment.avatar" alt="avatar" class="comment-avatar">
            <span class="comment-username">{{ comment.username }}</span>
            <span class="comment-time">{{ formatDate(comment.time) }}</span>
          </div>
          <div class="comment-content">{{ comment.content }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        article: {},
        comments: [],
      };
    },
    created() {
      const articleId = this.$route.params.id; // 获取文章ID
      this.fetchArticleData(articleId);
      this.fetchComments(articleId);
    },
    methods: {
      fetchArticleData(id) {
        // 根据ID返回假数据
        const fakeArticles = {
          '1': {
            title: '文章标题 1',
            author: '作者 A',
            publishTime: '2024-09-01T12:34:56Z',
            views: 123,
            content: '<p>这是第一篇文章的内容。<img src="https://via.placeholder.com/800x400" alt="示例图片"></p>',
          },
          '2': {
            title: '文章标题 2',
            author: '作者 B',
            publishTime: '2024-09-02T13:45:00Z',
            views: 456,
            content: '<p>这是第二篇文章的内容。</p>',
          },
        };
        
        this.article = fakeArticles[id] || {
          title: '未找到文章',
          author: '',
          publishTime: '',
          views: 0,
          content: '<p>文章内容不存在。</p>',
        };
      },
      fetchComments(articleId) {
        // 根据文章ID返回假评论数据
        const fakeComments = {
          '1': [
            {
              id: 'c1',
              avatar: 'https://via.placeholder.com/40',
              username: '用户1',
              time: '2024-09-01T14:00:00Z',
              content: '这是对第一篇文章的评论。',
            },
            {
              id: 'c2',
              avatar: 'https://via.placeholder.com/40',
              username: '用户2',
              time: '2024-09-01T15:00:00Z',
              content: '我也觉得这篇文章写得不错。',
            },
          ],
          '2': [
            {
              id: 'c3',
              avatar: 'https://via.placeholder.com/40',
              username: '用户3',
              time: '2024-09-02T16:00:00Z',
              content: '这是对第二篇文章的评论。',
            },
          ],
        };
        
        this.comments = fakeComments[articleId] || [];
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString();
      },
    },
  };
  </script>
  
  <style scoped>
  .knowledge-exchange-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .article-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .article-meta {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .article-meta span {
    margin-right: 15px;
  }
  
  .article-content {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    margin-bottom: 30px;
  }
  
  .article-content img {
    max-width: 100%; /* 确保图片在容器宽度内显示 */
    height: auto; /* 维护图片的纵横比 */
    display: block; /* 使图片独占一行 */
    margin: 0 auto; /* 图片居中 */
  }
  
  .comments-section {
    margin-top: 40px;
  }
  
  .comments-section h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .comment-item {
    margin-bottom: 20px;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 10px;
  }
  
  .comment-meta {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .comment-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .comment-username {
    font-weight: bold;
    margin-right: 10px;
  }
  
  .comment-time {
    font-size: 12px;
    color: #999;
  }
  
  .comment-content {
    font-size: 14px;
    color: #555;
  }
  </style>
  