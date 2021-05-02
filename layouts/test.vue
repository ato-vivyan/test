<template>
  <div class="wrapper">
    <client-only>
      <GlobalThreeTest />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'test',
  data: () => ({}),
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.wrapper {
  // 検証用
  // // background: url('~static/img/PC_TOP_2_ABOUT.jpg') no-repeat center top;
  // // background: url('~static/img/TAB - TOP_2_ABOUT.jpg') no-repeat center top;
  // // background: url('~static/img/SP - TOP_2_ABOUT.jpg') no-repeat center top;
  // background: url('~static/img/SP553 - TOP_2_ABOUT.png') no-repeat center top;
  // // background: url('~static/img/PC_TOP_3_SERVICE.jpg') no-repeat center top;
  // // background: url('~static/img/TAB - TOP_3_SERVICE.jpg') no-repeat center top;
  // // background: url('~static/img/SP - TOP_3_SERVICE.jpg') no-repeat center top;
  // background: url('~static/img/SP553 - TOP_3_SERVICE.png') no-repeat center top;
  // // background: url('~static/img/PC_TOP_4_WORKS.jpg') no-repeat center top;
  // // background: url('~static/img/TAB - TOP_4_WORKS.jpg') no-repeat center top;
  // // background: url('~static/img/SP - TOP_4_WORKS.jpg') no-repeat center top;
  // background: url('~static/img/SP553 - TOP_4_WORKS.png') no-repeat center top;
  // // background: url('~static/img/PC_TOP_5_BLOG.jpg') no-repeat center top;
  // // background: url('~static/img/TAB - TOP_5_BLOG.jpg') no-repeat center top;
  // // background: url('~static/img/SP - TOP_5_BLOG.jpg') no-repeat center top;
  // background: url('~static/img/SP553 - TOP_5_BLOG.png') no-repeat center top;
  // // background: url('~static/img/PC_TOP_6_JOIN.jpg') no-repeat center top;
  // // background: url('~static/img/TAB - TOP_6_JOIN.jpg') no-repeat center top;
  // // background: url('~static/img/SP - TOP_6_JOIN.jpg') no-repeat center top;
  // background: url('~static/img/SP553 - TOP_6_JOIN.png') no-repeat center top;
  // // background: url('~static/img/PC_TOP_7_TEAM.jpg') no-repeat center top;
  // // background: url('~static/img/TAB - TOP_7_TEAM.jpg') no-repeat center top;
  // // background: url('~static/img/SP - TOP_7_TEAM.jpg') no-repeat center top;
  // background: url('~static/img/SP553 - TOP_7_TEAM.png') no-repeat center top;
  // // background: url('~static/img/PC_TOP_8_CONTACT.jpg') no-repeat center top;
  // // background: url('~static/img/TAB - TOP_8_CONTACT.jpg') no-repeat center top;
  // // background: url('~static/img/SP - TOP_8_CONTACT.jpg') no-repeat center top;
  // background: url('~static/img/SP553 - TOP_8_CONTACT.png') no-repeat center top;
  // background: url('~static/img/SP - TOP_9_FOOTER – 1.jpg') no-repeat center top;

  // background: url('~static/img/PC_CONTACT1_その他.jpg') no-repeat center top;

  // > * {
  //   opacity: 0.4;
  // }

  position: relative;
}
.fade-menu-enter-active,
.fade-menu-leave-active {
  transition: opacity 0.4s;
}
.fade-menu-enter,
.fade-menu-leave-to {
  opacity: 0 !important;
}
.fade-menu-enter-to,
.fade-menu-leave {
  opacity: 1 !important;
}
</style>
