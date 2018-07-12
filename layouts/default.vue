<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #4f685a;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--qiita {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #55c500;
  color: #55c500;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  margin-top: 5px;
}

.button--qiita:hover {
  color: #fff;
  background-color: #55c500;
}

.button--github{
  display: inline-block;
  border-radius: 4px;
  /*border: 1px solid #35495e;*/
  border: 1px solid #fff;
  /*color: #35495e;*/
  color: #fff;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  margin-top: 5px;
}

.button--github:hover {
  color: #fff;
  background-color: #35495e;
  /*background-color: #fff;*/
}

.button--twitter {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #55acee;
  color: #55acee;
  text-decoration: none;
  padding: 10px 30px;
  margin-top: 5px;
}

.button--twitter:hover {
  color: #fff;
  background-color: #55acee;
}

.button--facebook {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3B5998;
  color: #3B5998;
  text-decoration: none;
  padding: 10px 30px;
  margin-top: 5px;
  margin-left: 15px;
}

.button--facebook:hover {
  color: #fff;
  background-color: #3B5998;
}

hr {
  display: block;
  position: relative;
  padding: 0;
  margin-top: 20px;
  height: 0;
  width: 100%;
  max-height: 0;
  font-size: 1px;
  line-height: 0;
  clear: both;
  border: none;
  border-top: 1px solid #4b92a6;
  /*border-bottom: 1px solid #ffffff;*/
}
</style>
