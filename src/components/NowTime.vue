<template>
  {{ this.time }}
</template>

<script>
export default {
   data(){
    return{
        time:null,
    }
   },
   methods:{
     getDateByType(){
            var date = new Date();
            var myyear = date.getFullYear();// 年
            var mymonth = date.getMonth() + 1;//月份0-11所以要加1
            var myweekday = date.getDate();//日 几号
            var myday=date.getDay()//星期几
            var myhour=date.getHours();
            var myminute=date.getMinutes()
            var mysecond=date.getSeconds()
            const arr=['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
             myday=arr[myday-1]
            if (mymonth < 10) {
                mymonth = '0' + mymonth;
            }
            if (myweekday < 10) {
                myweekday = '0' + myweekday;
            }
            if (myminute < 10) {
                myminute = '0' + myminute;
            }
            if (mysecond < 10) {
                mysecond = '0' + mysecond;
            }
            return myyear + '年' + mymonth + '月' + myweekday+'日 '+myhour+':'+myminute+':'+mysecond+' '+myday;
                    }
   },
   created(){
    setInterval(()=>{
         this.time=this.getDateByType()
         
   },1000)
   },
   computed:{
    time(){
        return time
    }
   }


}
</script>

<style>

</style>