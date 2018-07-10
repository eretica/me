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
  background-color: azure;
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
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  margin-top: 5px;
}

.button--github:hover {
  color: #fff;
  background-color: #35495e;
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
</style>
