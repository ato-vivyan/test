<template>
  <div class="global-three" id="main_canvas">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';
let OrbitControls = process.browser
  ? require('three/examples/jsm/controls/OrbitControls').OrbitControls
  : undefined;

export default {
  props: {},
  data() {
    return {
      canvas: null,
      renderer: null,
      scene: null,
      camera: null,
      rotateModel: true,
      loader: null
    };
  },
  watch: {},
  computed: {},
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  async mounted() {
    if (process.browser) {
      this.canvas = this.$refs.canvas;
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: false,
        alpha: true
      });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.shadowMap.enabled = true;

      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      this.camera.position.set(0, 0, 5);

      const controls = new OrbitControls(this.camera, this.canvas);
      controls.target.set(0, 0, 0);
      controls.update();

      this.scene.background = new THREE.Color(0x000000);

      var light = new THREE.AmbientLight(0xcccccc);
      this.scene.add(light);

      var light = new THREE.DirectionalLight(0xffffff, 100);
      this.scene.add(light);

      var light = new THREE.SpotLight(0xcccccc, 4, 30, Math.PI / 4, 10, 0.5);
      // ライトの影設定
      light.castShadow = true;
      // 影の解像度
      light.shadow.mapSize.width = 2028;
      light.shadow.mapSize.height = 2028;
      light.position.set(-1, 2, 5);
      this.scene.add(light);

      // ライトの方向確認
      // const lightHelper = new THREE.SpotLightHelper(light);
      // this.scene.add(lightHelper);

      // 前方ロゴ用メッシュ作成
      const planeWidth = 3;
      const planeHeight = 3;
      const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
      this.loader = new THREE.TextureLoader();
      this.makeInstance(geometry, 'white', 0, '/img/logo.png');

      // 壁作成
      const boxWidth = 4;
      const boxHeight = 4;
      const boxDepth = 0.4;
      const boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
      this.makeBoxInstance(boxGeometry, this.hsl(1 / 8, 1, 0.5), 0, 0, -0.4);

      window.addEventListener('resize', this.onWindowResize, true);
      this.animate();
    }
  },
  methods: {
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    render() {
      this.renderer.render(this.scene, this.camera);
    },
    animate() {
      this.render();
      requestAnimationFrame(this.animate);
    },
    makeInstance(geometry, color, rotY, url) {
      // 前方ロゴ用メッシュ作成
      const texture = this.loader.load(url, this.render);
      const material = new THREE.MeshPhongMaterial({
        color,
        map: texture,
        alphaTest: 0.5,
        transparent: true,
        side: THREE.DoubleSide
      });
      // 影用の透過設定
      const customDepthMaterial = new THREE.MeshDepthMaterial({
        depthPacking: THREE.RGBADepthPacking,
        map: texture,
        alphaTest: 0.5
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.customDepthMaterial = customDepthMaterial;
      mesh.castShadow = true;
      this.scene.add(mesh);

      mesh.rotation.y = rotY;
    },
    makeBoxInstance(geometry, color, x, y, z) {
      // 壁作成
      const material = new THREE.MeshPhongMaterial({
        color,
        opacity: 1,
        transparent: false
      });

      const cube = new THREE.Mesh(geometry, material);
      // 壁が受け取る影作成
      cube.receiveShadow = true;
      this.scene.add(cube);

      cube.position.set(x, y, z);

      return cube;
    },
    hsl(h, s, l) {
      return new THREE.Color().setHSL(h, s, l);
    }
  }
};
</script>

<style lang="scss" scoped>
#main_canvas {
  cursor: pointer;
}
</style>
