<template>
 
</template>
<script>
export default {
  name: "Tree",
  data() {
    return {
      fw_show: true,
    };
  },
  methods: {
    change(){
      this.$emit('tileshow',{fw_show})
    }
  },
};
</script>
<style  scoped>
.checkbox {
  color: #fff;
}
.tree {
  position: absolute;
  z-index: 9999;
  width: 200px;
}
</style>