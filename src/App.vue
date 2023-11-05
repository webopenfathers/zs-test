<template>
  <div>
    <el-button type="primary" @click="centerDialogVisible = true"
      >证书</el-button
    >
    <!-- 弹框 -->
    <el-dialog
      title="证书"
      :visible.sync="centerDialogVisible"
      width="65%"
      center
    >
      <div class="my-card" v-for="item in 10" :key="item">
        <div>
          <img
            src="./assets/zs.jpg"
            style="height: 130px; width: 100%; background-size: cover"
            alt=""
          />
        </div>
        <div style="text-align: center">
          <el-button
            style="margin-top: 150px"
            type="primary"
            plain
            @click="download(item)"
            >下载</el-button
          >
        </div>
      </div>
      <span slot="footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <!-- 证书具体内容弹框 -->
    <el-dialog title="提示" :visible.sync="isVisible" width="80%" center>
      <!-- 为了居中 -->
      <div class="zs-wrapper" style="text-align: center">
        <!-- 为了贴合图片，方便定位 -->
        <div id="zsRef" style="display: inline-block; position: relative">
          <span class="zs-title">恭喜张博闻获得通过证书({{ index }})</span>
          <img src="./assets/zbw.jpg" alt="" />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="downLoadZS">下载</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import getPdf from './utils/exportPdf'
export default {
  data() {
    return {
      centerDialogVisible: false,
      isVisible: false,
      index: 1,
      currentDate: new Date(),
    }
  },
  created() {},
  mounted() {},
  methods: {
    download(item) {
      this.index = item
      this.isVisible = true
    },

    downLoadZS() {
      getPdf('zbw', document.getElementById('zsRef'))
      this.isVisible = false
    },
  },
}
</script>

<style scoped>
.my-card {
  display: inline-block;
  height: 400px;
  width: 280px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  margin: 0 22px 24px 0;
  box-sizing: border-box;
  &:hover {
    transition: all 0.3s;
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0 12px 20px 0 rgba(95, 101, 105, 0.15);
  }
}

.my-card:nth-child(4n) {
  margin-right: 0;
}

.zs-title {
  position: absolute;
  top: 42%;
  font-size: 26px;
  color: #000;
  font-weight: bold;
  left: 50%;
  transform: translateX(-50%);
}
</style>
