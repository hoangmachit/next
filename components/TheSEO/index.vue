<template>
  <Head>
    <Title>
      {{ seo.title }}
    </Title>
    <Meta name="keyword" :content="seo.keyword" />
    <Meta name="description" :content="seo.description" />
  </Head>
</template>
<script setup>
const { seo } = defineProps(["seo"]);
</script>