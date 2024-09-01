<template>
    <div class="author-info">
      <el-card shadow="always" class="info-card">
        <h2>关于作者</h2>
        <p class="author-description">
          大家好！本项目的开发者 <span class="highlight">杨RR</span> 是一名大三的计算机专业学生，热爱编程和技术，正在努力学习和实践。
          至于这个RR这个名字的由来，那就要提起某平台的起名机制(不可重复)，刚好点到RR刚好起名成功，
          我和RR的缘分正式开始~ 有任何网站本网站相关的问题，都可关注微信公众号留言。github用来开源项目代码
          哔哩哔哩用来分享学习(写项目)过程中的感受
        </p>
  
        <div class="qr-code-section">
          <div class="qr-code-item">
            <p>我的微信公众号</p>
            <img
              src="/public/imgs/yangRR_qrcode.jpg"
              alt="微信公众号二维码"
              class="qr-code-image"
            />
          </div>
  
          <div class="qr-code-item">
            <p>我的 GitHub</p>
            <el-tooltip content="访问我的 GitHub" placement="top">
              <svg
                @click="openGithub"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="30"
                height="30"
                class="github-icon"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.47.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.2-3.37-1.2-.45-1.13-1.11-1.44-1.11-1.44-.91-.63.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.54 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 7.29c.85.004 1.71.115 2.5.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.63.64.69 1.03 1.58 1.03 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85v2.74c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"
                />
              </svg>
            </el-tooltip>
            <p class="typing-effect">笑看春风，淡迎秋雨</p>
          </div>
  
          <div class="qr-code-item">
            <a href="https://b23.tv/p1ulpbx" target="_blank">我的哔哩哔哩</a>
            <img
              src="/public/imgs/bilibili_qrcode.jpg"
              alt="哔哩哔哩二维码"
              class="qr-code-image"
            />
          </div>
        </div>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AuthorInfo',
    methods: {
      openGithub() {
        window.open('https://github.com/yangUpL', '_blank');
      },
    },
  };
  </script>
  
  <style scoped>
  .author-info {
    height:79vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-image: url('/public/imgs/background.jpg'); */
    /* background-size: cover; */
    /* background-position: center; */
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .info-card {
    background: rgba(255, 255, 255, 0.85);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
  }
  
  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: #444;
  }
  
  .author-description {
    font-size: 16px;
    line-height: 1.8;
    color: #555;
    text-align: justify;
  }
  
  .highlight {
    font-size: 20px;
    color: darkmagenta;
  }
  
  .qr-code-section {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
  
  .qr-code-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .qr-code-item a {
    font-size: 14px;
    color: #333;
    margin-bottom: 20px;
    text-decoration: none;
  }
  
  .qr-code-image {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .qr-code-image:hover {
    transform: scale(1.05);
  }
  
  .github-icon {
    margin-top: 30px;
    /* fill: #4078c0; */
    transition: fill 0.3s;
    cursor: pointer;
  }
  
  .github-icon:hover {
    fill: #4078c0;
  }
  
  .typing-effect {
    font-size: 20px;
    margin-top: 40px;
    color: #056bd8;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid #333;
    animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
  }
  
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  
  @keyframes blink-caret {
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }
  </style>
  