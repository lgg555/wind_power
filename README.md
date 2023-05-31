使用npm命令行
npm install 安装配置项和依赖
npm run dev在浏览器中跑项目
npm run build打包项目存在dist目录中的assets文件夹下

components目录下存放公共组件
commonaside存放左侧目录
commonheader存放顶部
dashboard是仪表盘
progressbar是进度条
nowtime是时间

router中index.js存放hash路由文件

store中index.js存放vuex文件

api中request.js进行axios的二次封装
api.js存放后端的接口

utils的index.js存放中转bus用来实现兄弟组件间的通信

view存放视图页面
alarm是今日告警 prealarm是历史告警
array是阵列区的name路由页面，array1、array2、array3、array4是四个阵列区
home是核心页面，放了地图控件
login登录页
register登录页
supervise中page1、page2、page3、page4分别用来放设备监控页面的光伏组串、汇流箱、逆变器和箱变（不按顺序）
wordorder用来存放工单页面

视图基准页由app.vue改为main.vue

index.html中引入阿里字体图标
package.json用来存放项目的配置项

vite.config.js用来存放系统文件，添加build对象可用来解决打包包体积过大的问题
github仓库地址 github.com/lgg555/wind_power
