<template lang="">
    <div className="border border-primary p-2 rounded-2">
        <div className="thumbs">
          <NuxtLink :to="`/products/${item.id}`" :title="item.title">
            <img :src="item.image" :alt="item.title" />
          </NuxtLink>
          <p className="category">
            <span className="badge">{{ item.category }}</span>
          </p>
        </div>
        <div className="info">
          <h3>
            <NuxtLink :to="`/products/${item.id}`" :title="item.title">{{
              item.title
            }}</NuxtLink>
          </h3>
          <p>{{ item.description }}</p>

          <p><b>Price</b>: $<span className="bold">{{ item.price }}</span></p>
        </div>
        <div className="add-to-cart d-flex justify-content-between align-items-center">
          <button className="btn btn-info">Add to cart</button>
          <NuxtLink :to="`/products/${item.id}`" :title="item.title" className="text-decoration-none">
          <span className="btn btn-success">View detail</span>
          </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const { item } = defineProps(["item"]);
</script>