<template>
  <div>Esto es Home</div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    home() {
      this.$emit("changePage", "Sweet home");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
