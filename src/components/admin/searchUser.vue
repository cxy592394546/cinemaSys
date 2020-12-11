<template>
  <el-card>
    <h3>查找用户</h3>
    <el-container>
      <el-main>
        <el-input placeholder="请输入内容" v-model="input" clearable>
          <el-button slot="append" icon="el-icon-search" @click="searchUser()"
            >搜索
          </el-button>
        </el-input>
      </el-main>
    </el-container>
  </el-card>
</template>

<script>
export default {};
</script>

<style></style>
