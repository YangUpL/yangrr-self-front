<template>
  <v-container>
    <div class="out">
      <div v-html="renderedMarkdown" class="markdown-content"></div>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // 使用现代的代码块主题
import markdownItAnchor from "markdown-it-anchor"; // 用于生成锚点

export default {
  data() {
    return {
      markdownContent: "",
    };
  },
  computed: {
    renderedMarkdown() {
      const md = new MarkdownIt({
        html: true,
        highlight: (str, lang) => {
          if (lang && hljs.getLanguage(lang)) {
            try {
              const highlighted = hljs.highlight(str, { language: lang }).value;
              // 更新样式为黑色主题
              const languageLabel = `<div class="lang-label">${lang}</div>`;
              const copyButton = `<button class="copy-btn" onclick="copyCode(this)">Copy</button>`;
              return `<div class="code-header">${languageLabel}${copyButton}</div><pre class="hljs"><code>${highlighted}</code></pre>`;
            } catch (__) {}
          }
          return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
        },
      });

      // 使用插件生成目录和锚点
      md.use(markdownItAnchor);

      return md.render(this.markdownContent);
    },
  },
  mounted() {
    axios.get("http://localhost:8080/question/answer").then((response) => {
      this.markdownContent = response.data.data;
    });
  },
};

window.copyCode = function (button) {
  const codeBlock = button.closest(".code-header").nextElementSibling.querySelector("code");
  if (codeBlock) {
    navigator.clipboard.writeText(codeBlock.innerText).then(() => {
      button.innerText = "Copied!";
      setTimeout(() => {
        button.innerText = "Copy";
      }, 2000);
    });
  }
};
</script>

<style>

.out{
  width: 80%;
  height: 100%;
  overflow:visible;
  margin-left: 120px;
  padding-bottom: 10px;
}
/* 容器样式 */
.v-container {
  max-width: 800px;
  margin: 0 auto;
}


/* 代码块头部样式 */
.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #1e1e1e;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

/* 图片居中样式 */
.markdown-content img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%; /* 确保图片在容器内不超出 */
  height: auto; /* 保持图片比例 */
}

/* 语言标签样式 */
.lang-label {
  font-size: 0.9rem;
  color: #f8f8f2;
  font-weight: bold;
  background-color: #1e1e1e; /* 与代码块背景一致 */
  padding: 4px 8px;
  border-radius: 5px;
}



/* 复制按钮样式 */
.copy-btn {
  background-color: #1e1e1e; /* 与代码块背景一致 */
  border: none;
  color: #f8f8f2;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s ease;
}

.copy-btn:hover {
  background-color: #333; /* 稍微深一点的颜色，增强悬停效果 */
}

/* 高亮代码块样式 */
.hljs {
  background-color: #1e1e1e;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow:scroll;
  padding: 0 16px;
  font-size: 1rem;
  color: #f8f8f2;
  margin: 0; /* 去掉代码块的外边距，使其与 .code-header 紧贴在一起 */
}


/* Markdown 内容样式 */
.markdown-content {
  line-height: 2; 
  padding-bottom: 1rem;
  overflow-y: auto; 
}

/* 针对Webkit浏览器（如Chrome和Safari）  */
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}


/* 引用块样式 */
.markdown-content blockquote {
  border-left: 4px solid #4CAF50; /* 绿色竖线 */
  padding: 10px 15px;
  margin: 1.5rem 0;
  background-color: rgba(66, 185, 131, .1);
  color: #777; /* 深绿色文本颜色 */
  font-style: italic;
  font-size: 15px;
  line-height: 1.6rem; 
  word-spacing: 0.05rem;
  white-space:pre-line;
}
.markdown-content blockquote::before {
  content: "";
  display: block;
  margin-top: -40px;
}

.markdown-content blockquote::after {
  content: "";
  display: block;
  margin-bottom: -40px;
}


/* 表格样式 */
.markdown-content table {
  width: 100%;
  border-collapse: collapse; /* 合并边框 */
  margin-bottom: 1.5rem; /* 表格底部间距 */
}

.markdown-content th, .markdown-content td {
  border: 1px solid #ddd; /* 表格边框颜色 */
  padding: 8px; /* 单元格内边距 */
  text-align: left; /* 左对齐文本 */
}

.markdown-content th {
  background-color: #f4f4f4; /* 表头背景色 */
  color: #333; /* 表头文字颜色 */
}

.markdown-content tr:nth-child(even) {
  background-color: #f9f9f9; /* 偶数行背景色 */
}

.markdown-content tr:hover {
  background-color: #f1f1f1; /* 行悬停背景色 */
}
</style>


