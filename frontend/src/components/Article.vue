<script setup lang="ts">
import type { article } from './ArticleItem.vue'
import ArticleItem from './ArticleItem.vue'
const articleList: article[] = [
  {
    path: '/src/img/articles/article1.png',
    label: '7 ways to decor your home',
    id: 0
  },
  {
    path: '/src/img/articles/article2.png',
    label: 'Kitchen organization',
    id: 0
  },
  {
    path: '/src/img/articles/article3.png',
    label: 'Decor your bedroom',
    id: 0
  }
]
</script>

<template>
  <div className="articles">
    <div className="articles_header">Articles</div>
    <div className="articles_block">
      <ArticleItem
        v-for="item in articleList"
        :key="item.id"
        :path="item.path"
        :label="item.label"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.articles {
  padding: 4.16% 10% 4.16% 10%;
}
.articles_header {
  font-family: Poppins;
  font-size: 40px;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: -0.4;
  padding-bottom: 40px;
}
.articles_block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
